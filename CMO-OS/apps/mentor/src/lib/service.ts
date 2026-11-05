import fs from 'node:fs';
import path from 'node:path';
import { loadConfig, publicConfig, type MentorConfig } from './config';
import { Store, type SessionRow } from './db/store';
import { loadCatalog, nextLesson, unmetPrerequisites, type CatalogEntry } from './curriculum/catalog';
import { loadLesson, stripForDisplay, THEORY_SECTIONS, type LessonDoc } from './curriculum/lesson';
import { CONCEPT_IDS, KEY_MISCONCEPTIONS, KNOWN_MISCONCEPTIONS, LESSON_ID, SOURCE_ALLOWLIST, generateScenario, solveScenario, type Scenario } from './curriculum/lesson001';
import { checkNumeric, deterministicCaps, evaluateGate, round2, DOMAINS, type DomainScores, type NumericInput } from './progression/scoring';
import { STAGES, transitionError, type Stage } from './progression/stages';
import { scheduleNext } from './progression/scheduler';
import { applyConfirmed, readProgress, writeProgressAtomic, type ConfirmedRecord } from './progress/canonical';
import { createProvider, runMentor, RateLimiter, providerErrorMessage } from './ai/mentor';
import { detectInjection } from './ai/injection';
import { ProviderError, type MentorProvider } from './ai/provider';
import type { MentorMode, MentorOutput } from './ai/schemas';

export class ServiceError extends Error {
  constructor(public readonly status: number, message: string, public readonly code = 'error') {
    super(message);
  }
}

export type Context = { cfg: MentorConfig; store: Store; provider: MentorProvider; limiter: RateLimiter; catalog: CatalogEntry[] };

export function createContext(cfg: MentorConfig, provider?: MentorProvider): Context {
  return { cfg, store: new Store(cfg.dbPath), provider: provider ?? createProvider(cfg), limiter: new RateLimiter(cfg.rateLimitPerMin), catalog: loadCatalog(cfg.root) };
}

const g = globalThis as unknown as { __mentorCtx?: Context };
export function getContext(): Context {
  if (!g.__mentorCtx) g.__mentorCtx = createContext(loadConfig());
  return g.__mentorCtx;
}

const IMPLEMENTED = new Set([LESSON_ID]);

function lessonText(doc: LessonDoc): string {
  // Excludes "Practical exercise" because it contains the canonical solution.
  const keep = ['Learning objective', 'Teach & explain', 'Visual model', 'New terms', 'Common mistake', 'Business scenario', 'Discussion questions', 'Assessment rubric', 'Sources and limits'];
  const sim = Object.keys(doc.sections).find((k) => k.startsWith('Realistična'));
  return [...keep, ...(sim ? [sim] : [])]
    .filter((k) => doc.sections[k])
    .map((k) => `## ${k}\n${stripForDisplay(doc.sections[k]!)}`)
    .join('\n\n');
}

function persona(cfg: MentorConfig): string {
  return fs.readFileSync(path.join(cfg.root, '90_AI/skills/cmo-core/references/moriarty-mentorship.md'), 'utf8');
}

function completedSet(ctx: Context): Set<string> {
  return readProgress(ctx.cfg.root).completed;
}

function prerequisitesMet(ctx: Context, lessonId: string) {
  return unmetPrerequisites(lessonId, completedSet(ctx), ctx.catalog).length === 0;
}

export function dashboard(ctx: Context) {
  const progress = readProgress(ctx.cfg.root);
  const lessons = ctx.catalog.map((e) => {
    const unmet = unmetPrerequisites(e.id, progress.completed, ctx.catalog);
    return { ...e, completed: progress.completed.has(e.id), unlocked: unmet.length === 0, unmet, interactive: IMPLEMENTED.has(e.id) };
  });
  const now = new Date().toISOString();
  return {
    student: progress.student,
    currentLesson: progress.currentLesson,
    completedCount: progress.completed.size,
    totalLessons: ctx.catalog.length,
    lessons,
    reviewsDue: ctx.store.reviews().filter((r) => r.due_at <= now),
    reviews: ctx.store.reviews(),
    config: publicConfig(ctx.cfg),
  };
}

export function startOrResume(ctx: Context, lessonId: string): SessionRow {
  if (!ctx.catalog.some((e) => e.id === lessonId)) throw new ServiceError(404, 'Nepoznata lekcija.');
  if (!IMPLEMENTED.has(lessonId)) throw new ServiceError(409, 'Interaktivni mentor za ovu lekciju još nije implementiran.', 'not_implemented');
  const unmet = unmetPrerequisites(lessonId, completedSet(ctx), ctx.catalog);
  if (unmet.length) throw new ServiceError(403, `Lekcija je zaključana. Nedostaju preduslovi: ${unmet.join(', ')}.`, 'locked');
  return ctx.store.latestSession(lessonId) ?? ctx.store.createSession(lessonId);
}

function requireSession(ctx: Context, id: string): SessionRow {
  const s = ctx.store.getSession(id);
  if (!s) throw new ServiceError(404, 'Sesija ne postoji.');
  return s;
}

const practiceScenario = (s: SessionRow) => generateScenario('practice', `${s.id}:${s.practice_submissions + 1}`);
const assessmentScenario = (s: SessionRow, attemptNo = s.assessment_attempts + 1) => generateScenario('assessment', `${s.id}:${attemptNo}`);

function scenarioText(sc: Scenario): string {
  return `${sc.basis}
Proizvod: ${sc.product}; prodajna cena ${sc.price} RSD po komadu; nabavna cena ${sc.cost} RSD po komadu; prodato ${sc.quantity} kom; pripisani operativni trošak ${sc.opexPerUnit} RSD po komadu.
Ponuda A (${sc.offerA.label}): prihod ${sc.offerA.revenue} RSD, nabavna vrednost ${sc.offerA.cogs} RSD.
Ponuda B (${sc.offerB.label}): prihod ${sc.offerB.revenue} RSD, nabavna vrednost ${sc.offerB.cogs} RSD. Kupac zaista želi dodatak i cena paketa mu je prihvatljiva.`;
}

export function sessionView(ctx: Context, id: string) {
  const s = requireSession(ctx, id);
  const doc = loadLesson(ctx.cfg.root, s.lesson_id);
  const reached = (st: Stage) => STAGES.indexOf(s.stage) >= STAGES.indexOf(st);
  const theory = THEORY_SECTIONS.filter((k) => doc.sections[k]).map((k) => ({ title: k, body: stripForDisplay(doc.sections[k]!) }));
  const simKey = Object.keys(doc.sections).find((k) => k.startsWith('Realistična'));
  const assessments = ctx.store.attempts(id, 'assessment');
  const practices = ctx.store.attempts(id, 'practice');
  const lastAssessment = assessments.at(-1);
  const next = nextLesson(s.lesson_id, ctx.catalog);
  return {
    session: { id: s.id, lessonId: s.lesson_id, stage: s.stage, practiceSubmissions: s.practice_submissions, assessmentAttempts: s.assessment_attempts, lastAssessmentPassed: s.last_assessment_passed === null ? null : Boolean(s.last_assessment_passed), remediationRequired: Boolean(s.remediation_required), confirmedAt: s.confirmed_at, pendingConfirmation: s.pending_confirmation ? JSON.parse(s.pending_confirmation) : null },
    lesson: { id: doc.id, title: doc.title, file: doc.file },
    stages: STAGES,
    theory,
    guided: reached('GUIDED') && simKey ? { title: simKey, body: stripForDisplay(doc.sections[simKey]!) } : null,
    practice: reached('PRACTICE') ? { scenario: practiceScenario(s), attempts: practices.map((a) => ({ attemptNo: a.attempt_no, result: JSON.parse(a.result), createdAt: a.created_at })) } : null,
    assessment: s.stage === 'ASSESSMENT' ? { scenario: assessmentScenario(s) } : null,
    feedback: reached('FEEDBACK') && lastAssessment ? { attemptNo: lastAssessment.attempt_no, result: JSON.parse(lastAssessment.result), passed: Boolean(lastAssessment.passed) } : null,
    messages: ctx.store.messages(id),
    misconceptions: ctx.store.misconceptions(id),
    sources: SOURCE_ALLOWLIST,
    nextLesson: next ? { id: next.id, title: next.title, unlocked: prerequisitesMet(ctx, next.id) } : null,
    config: publicConfig(ctx.cfg),
  };
}

export function advance(ctx: Context, id: string, to: Stage) {
  const s = requireSession(ctx, id);
  const err = transitionError(
    { stage: s.stage, practiceSubmissions: s.practice_submissions, lastAssessmentPassed: s.last_assessment_passed === null ? null : Boolean(s.last_assessment_passed), remediationRequired: Boolean(s.remediation_required), prerequisitesMet: prerequisitesMet(ctx, s.lesson_id) },
    to,
  );
  if (err) throw new ServiceError(409, err, 'invalid_transition');
  ctx.store.updateSession(id, { stage: to });
  ctx.store.event(id, 'stage_advanced', { from: s.stage, to });
  if (to === 'PRACTICE') ctx.store.addMessage(id, 'system', to, 'Predavanje je završeno — počinje praktični deo.');
}

async function callMentor(ctx: Context, s: SessionRow, mode: MentorMode, studentText: string, scenario: Scenario | null, findings: string | null) {
  if (!ctx.limiter.take()) throw new ServiceError(429, 'Previše AI zahteva u minuti. Sačekaj pa pokušaj ponovo.', 'rate_limited');
  const injectionFlags = detectInjection(studentText);
  const doc = loadLesson(ctx.cfg.root, s.lesson_id);
  const history = ctx.store.messages(s.id).filter((m) => m.role !== 'system').slice(-12).map((m) => ({ role: m.role as 'student' | 'mentor', text: m.text.slice(0, 1500) }));
  try {
    const r = await runMentor(ctx.provider, { mode, stage: s.stage, lessonContext: lessonText(doc), personaReference: persona(ctx.cfg), scenarioText: scenario ? scenarioText(scenario) : null, deterministicFindings: findings, history, studentText, injectionFlags }, ctx.cfg.timeoutMs);
    ctx.store.event(s.id, 'ai_call', { mode, provider: r.provider, model: r.model, latencyMs: r.latencyMs, injectionFlags });
    return { ...r, injectionFlags };
  } catch (e) {
    if (e instanceof ProviderError) {
      ctx.store.event(s.id, 'ai_error', { mode, kind: e.kind });
      throw new ServiceError(e.kind === 'rate_limited' ? 429 : 502, providerErrorMessage(e), `ai_${e.kind}`);
    }
    throw e;
  }
}

function mentorMeta(out: MentorOutput, provider: string, model: string, injectionFlags: string[]) {
  return { provider, model, evidence_claims: out.evidence_claims, correct_points: out.correct_points, misconceptions: out.misconceptions, missing_links: out.missing_links, socratic_questions: out.socratic_questions, source_refs: out.source_refs, uncertainty: out.uncertainty, injectionFlags };
}

export async function chat(ctx: Context, id: string, message: string) {
  const s = requireSession(ctx, id);
  if (s.stage === 'THEORY') throw new ServiceError(409, 'Tokom teorije nema zadataka; pitanja se postavljaju u fazi „Pitanja i pojašnjenja“.', 'stage_locked');
  if (s.stage === 'ASSESSMENT') throw new ServiceError(409, 'Tokom procene mentor ne pomaže; pošalji samostalan odgovor.', 'stage_locked');
  ctx.store.addMessage(id, 'student', s.stage, message);
  const r = await callMentor(ctx, s, s.stage === 'FEEDBACK' ? 'remediation' : 'questions', message, s.stage === 'PRACTICE' ? practiceScenario(s) : null, null);
  ctx.store.addMessage(id, 'mentor', s.stage, r.output.reply, mentorMeta(r.output, r.provider, r.model, r.injectionFlags));
  return r.output;
}

type WorkBody = { numeric: NumericInput; concept: string; application: string; decision: string; chosenOffer: 'A' | 'B' | null };
const workText = (b: WorkBody) => `Račun: prihod=${b.numeric.revenue}; bruto profit=${b.numeric.grossProfit}; bruto marža %=${b.numeric.grossMarginPct}; posle operativnog troška=${b.numeric.remaining}
Koncept: ${b.concept}
Primena: ${b.application}
Izabrana ponuda: ${b.chosenOffer ?? 'nije izabrana'}
Obrazloženje odluke: ${b.decision}`;

function findingsText(numeric: ReturnType<typeof checkNumeric>, reveal: boolean): string {
  const lines = Object.entries(numeric.fields).map(([k, f]) => `${k}: ${f.correct ? 'tačno' : 'netačno'}${reveal ? ` (očekivano ${f.expected}, uneto ${f.given})` : ''}`);
  if (numeric.misconceptions.length) lines.push(`Detektovane greške: ${numeric.misconceptions.join(', ')}`);
  return lines.join('\n');
}

export async function submitPractice(ctx: Context, id: string, body: WorkBody) {
  const s = requireSession(ctx, id);
  if (s.stage !== 'PRACTICE') throw new ServiceError(409, 'Praktični odgovor se šalje samo u fazi samostalne prakse.', 'stage_locked');
  const sc = practiceScenario(s);
  const numeric = checkNumeric(sc, body.numeric);
  // Practice feedback may explain expected values; the next practice uses new numbers.
  const r = await callMentor(ctx, s, 'practice', workText(body), sc, findingsText(numeric, true));
  const result = { numeric, mentor: mentorMeta(r.output, r.provider, r.model, r.injectionFlags), reply: r.output.reply };
  ctx.store.tx(() => {
    ctx.store.addAttempt({ session_id: id, kind: 'practice', attempt_no: s.practice_submissions + 1, scenario: JSON.stringify(sc), answer: JSON.stringify(body), result: JSON.stringify(result), passed: null, injection_flags: JSON.stringify(r.injectionFlags) });
    ctx.store.updateSession(id, { practice_submissions: s.practice_submissions + 1 });
    ctx.store.addMessage(id, 'mentor', s.stage, r.output.reply, result.mentor);
  });
  return result;
}

export async function submitAssessment(ctx: Context, id: string, body: WorkBody) {
  const s = requireSession(ctx, id);
  if (s.stage !== 'ASSESSMENT') throw new ServiceError(409, 'Procena nije otvorena.', 'stage_locked');
  const recent = ctx.store.attempts(id, 'assessment').filter((a) => Date.now() - Date.parse(a.created_at) < 86400000);
  if (recent.length >= 3) throw new ServiceError(429, 'Dostignut je limit od 3 procene u 24 sata. Ponovi gradivo pa pokušaj kasnije.', 'attempt_limit');
  const attemptNo = s.assessment_attempts + 1;
  const sc = assessmentScenario(s, attemptNo);
  const numeric = checkNumeric(sc, body.numeric);
  const caps = deterministicCaps(sc, body);
  const r = await callMentor(ctx, s, 'assessment', workText(body), sc, `${findingsText(numeric, false)}\nOgraničenja rubrike: ${caps.reasons.join(' ') || 'nema'}`);
  const rubric = r.output.rubric;
  if (!rubric) throw new ServiceError(502, 'Mentor nije vratio rubriku; procena nije ocenjena i nije sačuvana kao pokušaj.', 'ai_invalid_output');
  const scores: DomainScores = {
    concept: Math.min(rubric.concept, caps.caps.concept),
    numeric: numeric.score,
    application: Math.min(rubric.application, caps.caps.application),
    decision: Math.min(rubric.decision, caps.caps.decision),
  };
  const aiKey = r.output.misconceptions.filter((m) => KEY_MISCONCEPTIONS.has(m.code)).map((m) => m.code);
  const misconceptions = [...new Set([...numeric.misconceptions, ...caps.misconceptions, ...aiKey])];
  const unresolved = ctx.store.misconceptions(id).filter((m) => m.severity === 'key' && !m.remediated_at).map((m) => m.code);
  const gate = evaluateGate({
    scores,
    misconceptions,
    unresolvedKeyFromHistory: unresolved,
    prerequisitesMet: prerequisitesMet(ctx, s.lesson_id),
    applicationPresent: body.application.trim().length >= 40,
    decisionReasoned: body.chosenOffer !== null && body.decision.trim().length >= 30,
  });
  const solution = solveScenario(sc);
  const result = { gate, numeric, caps: caps.reasons, rubricRationale: rubric.rationale, mentor: mentorMeta(r.output, r.provider, r.model, r.injectionFlags), reply: r.output.reply, expected: { ...solution, grossMarginPct: round2(solution.grossMarginPct) }, scoredBy: { arithmetic: 'deterministic', freeText: `${r.provider}:${r.model} rubric capped by deterministic checks` } };
  const now = new Date();
  ctx.store.tx(() => {
    const attemptId = ctx.store.addAttempt({ session_id: id, kind: 'assessment', attempt_no: attemptNo, scenario: JSON.stringify(sc), answer: JSON.stringify(body), result: JSON.stringify(result), passed: gate.passed ? 1 : 0, injection_flags: JSON.stringify(r.injectionFlags) });
    for (const code of misconceptions) {
      const desc = KNOWN_MISCONCEPTIONS[code as keyof typeof KNOWN_MISCONCEPTIONS] ?? code;
      ctx.store.addMisconception(id, attemptId, code, KEY_MISCONCEPTIONS.has(code) ? 'key' : 'minor', numeric.misconceptions.includes(code) || caps.misconceptions.includes(code) ? 'deterministic' : 'ai', desc);
      const prev = ctx.store.getReview(`mis:${code}`);
      const n = scheduleNext(prev ?? null, 'incorrect', now);
      ctx.store.upsertReview(`mis:${code}`, 'misconception', n.step, n.dueAt);
    }
    for (const concept of CONCEPT_IDS) {
      const prev = ctx.store.getReview(`concept:${concept}`);
      const n = scheduleNext(prev ?? null, gate.passed ? 'correct' : 'incorrect', now);
      ctx.store.upsertReview(`concept:${concept}`, 'concept', n.step, n.dueAt);
    }
    ctx.store.updateSession(id, { stage: 'FEEDBACK', assessment_attempts: attemptNo, last_assessment_passed: gate.passed ? 1 : 0, remediation_required: gate.keyMisconceptions.length > 0 ? 1 : 0 });
    ctx.store.addMessage(id, 'mentor', 'FEEDBACK', r.output.reply, result.mentor);
    ctx.store.event(id, 'assessment_scored', { attemptNo, total: gate.total, passed: gate.passed });
  });
  return result;
}

const REMEDIATION_KEYWORDS: Record<string, RegExp[]> = {
  REVENUE_AS_PROFIT: [/prihod|promet/, /bruto|nabav|trošak|trosak|nije zarada|nije profit/],
  MARGIN_ON_COST: [/marž|marz/, /prihod/],
  HIGHER_REVENUE_WINS: [/bruto profit|zarad/, /prihod|promet/],
  UNETHICAL_UPSELL: [/kupac|kupca/, /izbor|bira|korist|vrednost/],
};

export async function submitRemediation(ctx: Context, id: string, explanation: string) {
  const s = requireSession(ctx, id);
  if (s.stage !== 'FEEDBACK' || !s.remediation_required) throw new ServiceError(409, 'Remedijacija nije potrebna.', 'stage_locked');
  const open = ctx.store.misconceptions(id).filter((m) => m.severity === 'key' && !m.remediated_at);
  const t = explanation.toLowerCase();
  const missing = open.filter((m) => !(REMEDIATION_KEYWORDS[m.code] ?? [/./]).every((re) => re.test(t))).map((m) => m.code);
  const r = await callMentor(ctx, s, 'remediation', explanation, null, `Otvorene ključne greške: ${open.map((m) => m.code).join(', ')}. Deterministička provera objašnjenja: ${missing.length ? 'nedostaje ' + missing.join(', ') : 'pokriva sve greške'}.`);
  const aiStillWrong = r.output.misconceptions.some((m) => m.severity === 'key');
  const accepted = explanation.trim().length >= 40 && missing.length === 0 && !aiStillWrong && r.injectionFlags.length === 0;
  ctx.store.tx(() => {
    ctx.store.addAttempt({ session_id: id, kind: 'remediation', attempt_no: s.assessment_attempts, scenario: null, answer: JSON.stringify({ explanation }), result: JSON.stringify({ accepted, missing, reply: r.output.reply }), passed: accepted ? 1 : 0, injection_flags: JSON.stringify(r.injectionFlags) });
    ctx.store.addMessage(id, 'student', s.stage, explanation);
    ctx.store.addMessage(id, 'mentor', s.stage, r.output.reply, mentorMeta(r.output, r.provider, r.model, r.injectionFlags));
    if (accepted) {
      ctx.store.remediateOpen(id);
      ctx.store.updateSession(id, { remediation_required: 0 });
    }
  });
  return { accepted, missing, reply: r.output.reply, note: accepted ? 'Ispravka prihvaćena. Sledeća procena koristi nov [FIXTURE] scenario i mora biti bez ovih grešaka.' : 'Ispravka još nije dovoljna.' };
}

export function confirm(ctx: Context, id: string) {
  const s = requireSession(ctx, id);
  if (s.stage !== 'FEEDBACK') throw new ServiceError(409, 'Potvrda je moguća samo posle povratne informacije.', 'stage_locked');
  const last = ctx.store.attempts(id, 'assessment').at(-1);
  if (!last || !last.passed || !s.last_assessment_passed) throw new ServiceError(409, 'Poslednja procena nije položena; napredak se ne može potvrditi.', 'not_passed');
  if (!prerequisitesMet(ctx, s.lesson_id)) throw new ServiceError(403, 'Preduslovi nisu ispunjeni.', 'locked');
  const result = JSON.parse(last.result) as { gate: { total: number; scores: DomainScores; passed: boolean } };
  // Re-verify the stored gate deterministically instead of trusting a flag.
  const regate = evaluateGate({ scores: result.gate.scores, misconceptions: [], unresolvedKeyFromHistory: ctx.store.misconceptions(id).filter((m) => m.severity === 'key' && !m.remediated_at && m.attempt_id !== last.id).map((m) => m.code), prerequisitesMet: true, applicationPresent: true, decisionReasoned: true });
  if (!regate.passed || !result.gate.passed) throw new ServiceError(409, 'Ponovna provera gate-a nije prošla.', 'not_passed');
  const sc = JSON.parse(last.scenario!) as Scenario;
  const entry = ctx.catalog.find((e) => e.id === s.lesson_id)!;
  const next = nextLesson(s.lesson_id, ctx.catalog);
  const levelNames: Record<number, string> = { 0: 'Level 0 — Business Awareness' };
  const ranked = [...DOMAINS].sort((a, b) => result.gate.scores[b] - result.gate.scores[a]);
  const corrected = [...new Set(ctx.store.misconceptions(id).filter((m) => m.severity === 'key' && m.remediated_at).map((m) => m.code))];
  const record: ConfirmedRecord = {
    lessonId: s.lesson_id,
    lessonTitle: entry.title,
    date: new Date().toISOString().slice(0, 10),
    total: result.gate.total,
    scores: result.gate.scores,
    evidenceId: `mentor-app:${s.id}:assessment-${last.attempt_no}`,
    scenarioSummary: `${sc.quantity} × ${sc.product}, cena ${sc.price} RSD, nabavna ${sc.cost} RSD, opex ${sc.opexPerUnit} RSD/kom; ponude A/B`,
    strongest: ranked[0]!,
    weakest: ranked.at(-1)!,
    correctedKeyErrors: corrected,
    next: next ? { id: next.id, title: next.title, level: levelNames[next.level] ?? '' } : null,
    conceptIds: [...CONCEPT_IDS],
  };
  const snapshot = readProgress(ctx.cfg.root);
  const updated = applyConfirmed(snapshot.raw, record); // validates before any write
  if (!ctx.cfg.canonicalWrites) {
    ctx.store.updateSession(id, { pending_confirmation: JSON.stringify({ record, reason: 'MENTOR_CANONICAL_WRITES=false' }) });
    ctx.store.event(id, 'confirmation_pending', { evidenceId: record.evidenceId });
    return { written: false, record, message: 'Rezultat je potvrđen u aplikaciji, ali kanonski upis je isključen (MENTOR_CANONICAL_WRITES=false). Predlog je sačuvan kao pending.' };
  }
  const { backup } = writeProgressAtomic(ctx.cfg.root, updated, snapshot.sha256);
  ctx.store.updateSession(id, { stage: 'CONFIRMED', confirmed_at: new Date().toISOString(), pending_confirmation: null });
  ctx.store.event(id, 'canonical_progress_written', { evidenceId: record.evidenceId, backup });
  return { written: true, record, backup, message: 'Napredak je upisan u 10_Daily/Learning_Progress.md uz backup.' };
}
