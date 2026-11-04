import { KEY_MISCONCEPTIONS, solveScenario, type Scenario } from '../curriculum/lesson001';

export const DOMAINS = ['concept', 'numeric', 'application', 'decision'] as const;
export type Domain = (typeof DOMAINS)[number];
export type DomainScores = Record<Domain, number>;

export const PASS_TOTAL = 80;
export const PASS_DOMAIN = 15;
export const DOMAIN_MAX = 25;

export type NumericInput = { revenue: number | null; grossProfit: number | null; grossMarginPct: number | null; remaining: number | null };

export type NumericCheck = {
  score: number;
  fields: Record<keyof NumericInput, { expected: number; given: number | null; correct: boolean }>;
  misconceptions: string[];
};

/** Deterministic arithmetic check. AI output never changes this score. */
export function checkNumeric(s: Scenario, input: NumericInput): NumericCheck {
  const a = solveScenario(s);
  const near = (given: number | null, expected: number, tol: number) => given !== null && Number.isFinite(given) && Math.abs(given - expected) <= tol;
  const fields = {
    revenue: { expected: a.revenue, given: input.revenue, correct: near(input.revenue, a.revenue, 1) },
    grossProfit: { expected: a.grossProfit, given: input.grossProfit, correct: near(input.grossProfit, a.grossProfit, 1) },
    grossMarginPct: { expected: round2(a.grossMarginPct), given: input.grossMarginPct, correct: near(input.grossMarginPct, a.grossMarginPct, 0.1) },
    remaining: { expected: a.remaining, given: input.remaining, correct: near(input.remaining, a.remaining, 1) },
  };
  const misconceptions: string[] = [];
  const unitGross = s.price - s.cost;
  if (input.grossProfit !== null && (near(input.grossProfit, a.revenue, 1) || near(input.grossProfit, s.price, 1))) misconceptions.push('REVENUE_AS_PROFIT');
  if (input.grossMarginPct !== null && s.cost > 0 && near(input.grossMarginPct, (unitGross / s.cost) * 100, 0.1) && !fields.grossMarginPct.correct) misconceptions.push('MARGIN_ON_COST');
  if (s.quantity > 1 && ((input.revenue !== null && near(input.revenue, s.price, 1)) || (input.grossProfit !== null && near(input.grossProfit, unitGross, 1)))) misconceptions.push('IGNORED_QUANTITY');
  if (input.remaining !== null && near(input.remaining, a.grossProfit, 1) && s.opexPerUnit > 0) misconceptions.push('OPEX_IGNORED');
  const correct = Object.values(fields).filter((f) => f.correct).length;
  return { score: (correct / 4) * DOMAIN_MAX, fields, misconceptions };
}

const has = (text: string, re: RegExp) => re.test(text.toLowerCase());

/** Deterministic caps on AI rubric scores for free-text domains. */
export function deterministicCaps(s: Scenario, text: { concept: string; application: string; decision: string; chosenOffer: 'A' | 'B' | null }) {
  const caps: Record<'concept' | 'application' | 'decision', number> = { concept: DOMAIN_MAX, application: DOMAIN_MAX, decision: DOMAIN_MAX };
  const reasons: string[] = [];
  const misconceptions: string[] = [];
  const c = text.concept;
  if (c.trim().length < 40) { caps.concept = 5; reasons.push('Objašnjenje koncepta je prekratko za procenu.'); }
  else if (!(has(c, /prihod|promet/) && has(c, /bruto|nabav|trošak|trosak/))) { caps.concept = 14; reasons.push('Objašnjenje ne povezuje prihod sa troškom prodate robe/bruto profitom.'); }
  if (has(c, /prihod (je|=) (zarada|profit)|promet (je|=) (zarada|profit)/) && !has(c, /nije/)) misconceptions.push('REVENUE_AS_PROFIT');

  const ap = text.application;
  if (ap.trim().length < 40) { caps.application = 5; reasons.push('Praktična primena je prekratka.'); }
  if (has(ap, /sakri|skriven|bez znanja kupca|ne kažemo kupcu|ne kazemo kupcu|dodamo na račun|dodamo na racun/)) { caps.application = Math.min(caps.application, 5); misconceptions.push('UNETHICAL_UPSELL'); reasons.push('Predlog nije etičan: kupac mora slobodno izabrati jasno objašnjenu vrednost.'); }

  const correct = solveScenario(s).betterOffer;
  if (text.chosenOffer === null) { caps.decision = 0; reasons.push('Odluka nije izabrana.'); }
  else if (text.chosenOffer !== correct) {
    caps.decision = 10;
    reasons.push('Izabrana ponuda nema veći bruto profit.');
    const revHigher = s.offerB.revenue > s.offerA.revenue ? 'B' : 'A';
    if (text.chosenOffer === revHigher) misconceptions.push('HIGHER_REVENUE_WINS');
  }
  if (text.decision.trim().length < 30) { caps.decision = Math.min(caps.decision, 8); reasons.push('Odluka nije obrazložena.'); }
  else if (!has(text.decision, /bruto|profit|zarad|marž|marz/)) { caps.decision = Math.min(caps.decision, 14); reasons.push('Obrazloženje odluke ne koristi bruto profit.'); }
  return { caps, reasons, misconceptions };
}

export type GateResult = {
  total: number;
  scores: DomainScores;
  passed: boolean;
  failures: string[];
  keyMisconceptions: string[];
};

export function clampScore(n: unknown): number {
  const v = typeof n === 'number' && Number.isFinite(n) ? n : 0;
  return Math.max(0, Math.min(DOMAIN_MAX, v));
}

/**
 * Pass gate: ≥80 total, ≥15 per domain, no unresolved key misconception,
 * independent application and reasoned decision present, prerequisites met.
 */
export function evaluateGate(params: {
  scores: DomainScores;
  misconceptions: string[];
  unresolvedKeyFromHistory: string[];
  prerequisitesMet: boolean;
  applicationPresent: boolean;
  decisionReasoned: boolean;
}): GateResult {
  const scores = Object.fromEntries(DOMAINS.map((d) => [d, round2(clampScore(params.scores[d]))])) as DomainScores;
  const total = round2(DOMAINS.reduce((a, d) => a + scores[d], 0));
  const failures: string[] = [];
  if (total < PASS_TOTAL) failures.push(`Ukupno ${total}/100; potrebno najmanje ${PASS_TOTAL}.`);
  for (const d of DOMAINS) if (scores[d] < PASS_DOMAIN) failures.push(`Oblast ${d}: ${scores[d]}/25; potrebno najmanje ${PASS_DOMAIN}.`);
  const keyMisconceptions = [...new Set([...params.misconceptions, ...params.unresolvedKeyFromHistory].filter((m) => KEY_MISCONCEPTIONS.has(m)))];
  if (keyMisconceptions.length) failures.push(`Neispravljene ključne greške: ${keyMisconceptions.join(', ')}.`);
  if (!params.prerequisitesMet) failures.push('Preduslovi lekcije nisu ispunjeni.');
  if (!params.applicationPresent) failures.push('Nedostaje samostalna praktična primena.');
  if (!params.decisionReasoned) failures.push('Nedostaje obrazložena poslovna odluka.');
  return { total, scores, passed: failures.length === 0, failures, keyMisconceptions };
}

export function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
