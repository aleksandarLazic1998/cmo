'use client';
import { useCallback, useEffect, useState } from 'react';
import { Markdown } from './Markdown';
import { FlowDiagram } from './FlowDiagram';
import { Calculator } from './Calculator';

type Stage = 'THEORY' | 'QUESTIONS' | 'GUIDED' | 'PRACTICE' | 'ASSESSMENT' | 'FEEDBACK' | 'CONFIRMED';
const LABELS: Record<Stage, string> = { THEORY: 'Teorija', QUESTIONS: 'Pitanja', GUIDED: 'Vođeni primer', PRACTICE: 'Praksa', ASSESSMENT: 'Procena', FEEDBACK: 'Feedback', CONFIRMED: 'Potvrđeno' };
type Scenario = { product: string; accessory: string; price: number; cost: number; quantity: number; opexPerUnit: number; offerA: { label: string; revenue: number; cogs: number }; offerB: { label: string; revenue: number; cogs: number }; basis: string };
type MentorMeta = { provider?: string; model?: string; evidence_claims?: { label: string; text: string }[]; correct_points?: string[]; misconceptions?: { code: string; description: string; severity: string }[]; missing_links?: string[]; socratic_questions?: string[]; source_refs?: string[]; uncertainty?: string | null; injectionFlags?: string[] };
type View = {
  session: { id: string; stage: Stage; practiceSubmissions: number; assessmentAttempts: number; lastAssessmentPassed: boolean | null; remediationRequired: boolean; confirmedAt: string | null; pendingConfirmation: { reason: string } | null };
  lesson: { id: string; title: string; file: string };
  stages: Stage[];
  theory: { title: string; body: string }[];
  guided: { title: string; body: string } | null;
  practice: { scenario: Scenario; attempts: { attemptNo: number; result: { numeric: { fields: Record<string, { correct: boolean; expected: number; given: number | null }> }; reply: string; mentor: MentorMeta } }[] } | null;
  assessment: { scenario: Scenario } | null;
  feedback: { attemptNo: number; passed: boolean; result: { gate: { total: number; scores: Record<string, number>; passed: boolean; failures: string[] }; caps: string[]; rubricRationale: string; reply: string; mentor: MentorMeta; expected: Record<string, number | string>; scoredBy: Record<string, string> } } | null;
  messages: { role: string; stage: string; text: string; meta: MentorMeta }[];
  misconceptions: { code: string; severity: string; origin: string; description: string; remediated_at: string | null }[];
  sources: Record<string, string>;
  nextLesson: { id: string; title: string; unlocked: boolean } | null;
  config: { provider: string; model: string; apiKeyConfigured: boolean; canonicalWrites: boolean };
};

async function api<T>(url: string, body?: unknown): Promise<T> {
  const r = await fetch(url, body === undefined ? undefined : { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  const j = await r.json();
  if (!r.ok) throw new Error(j.error ?? `HTTP ${r.status}`);
  return j as T;
}

const DOMAIN_LABELS: Record<string, string> = { concept: 'Razumevanje koncepta', numeric: 'Numeričko zaključivanje', application: 'Praktična primena', decision: 'Poslovna odluka' };

export function LessonClient({ lessonId }: { lessonId: string }) {
  const [view, setView] = useState<View | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => { api<View>('/api/sessions', { lessonId }).then(setView).catch((e) => setError(e.message)); }, [lessonId]);

  const run = useCallback(async (fn: () => Promise<{ view?: View } | View>) => {
    setBusy(true); setError(null); setNotice(null);
    try {
      const r = await fn();
      const v = 'session' in r ? (r as View) : r.view;
      if (v) setView(v);
      return r;
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      return null;
    } finally {
      setBusy(false);
    }
  }, []);

  if (!view) return error ? <div className="error" role="alert">{error}</div> : <p>Učitavanje lekcije…</p>;
  const s = view.session;
  const idx = view.stages.indexOf(s.stage);
  const advance = (to: Stage) => run(() => api<View>(`/api/sessions/${s.id}/advance`, { to }));

  return (
    <>
      <p className="muted">Lekcija {view.lesson.id} · izvor: <code>{view.lesson.file}</code></p>
      <h1>{view.lesson.title}</h1>
      <ol className="stepper" aria-label="Faze lekcije">
        {view.stages.map((st, i) => <li key={st} className={i < idx ? 'done' : i === idx ? 'current' : ''} aria-current={i === idx ? 'step' : undefined}>{i + 1}. {LABELS[st]}</li>)}
      </ol>
      {view.config.provider === 'mock' && <div className="notice">Mentor radi u <strong>mock</strong> režimu: povratna informacija je heuristička, bez jezičkog modela. Za pravog AI mentora podesi <code>MENTOR_AI_PROVIDER=anthropic</code> i <code>ANTHROPIC_API_KEY</code>.</div>}
      {error && <div className="error" role="alert">{error}</div>}
      {notice && <div className="success" role="status">{notice}</div>}
      <div className="grid">
        <div>
          {s.stage === 'THEORY' && (
            <section className="card">
              <h2>Teorija</h2>
              <p className="muted">Tokom teorije nema zadataka ni testa. Primeri su objašnjeni [FIXTURE] podaci.</p>
              <FlowDiagram />
              {view.theory.map((t) => <div key={t.title}><h2>{t.title}</h2><Markdown text={t.body} /></div>)}
              <button className="primary" disabled={busy} onClick={() => advance('QUESTIONS')}>Završio sam teoriju — pređi na pitanja</button>
            </section>
          )}
          {s.stage === 'QUESTIONS' && (
            <section className="card">
              <h2>Pitanja i pojašnjenja</h2>
              <p>Postavi Morijartiju pitanje o bilo kom pojmu iz teorije. Kada je sve jasno, pređi na vođeni primer.</p>
              <button className="primary" disabled={busy} onClick={() => advance('GUIDED')}>Pređi na vođeni primer</button>
            </section>
          )}
          {s.stage === 'GUIDED' && view.guided && (
            <section className="card">
              <h2>Vođeni primer</h2>
              <Markdown text={view.guided.body} />
              <Calculator />
              <button className="primary" disabled={busy} onClick={() => advance('PRACTICE')}>Spreman sam za samostalnu praksu</button>
            </section>
          )}
          {s.stage === 'PRACTICE' && view.practice && (
            <section className="card">
              <h2>Predavanje je završeno — počinje praktični deo.</h2>
              <ScenarioCard sc={view.practice.scenario} />
              <WorkForm key={`p${s.practiceSubmissions}`} busy={busy} submitLabel="Pošalji mentoru" onSubmit={(body) => run(() => api(`/api/sessions/${s.id}/practice`, body))} />
              {view.practice.attempts.slice().reverse().slice(0, 1).map((a) => (
                <div key={a.attemptNo} className="card">
                  <h3>Povratna informacija na praksu #{a.attemptNo}</h3>
                  <NumericTable fields={a.result.numeric.fields} reveal />
                  <MentorPanel text={a.result.reply} meta={a.result.mentor} sources={view.sources} />
                </div>
              ))}
              <p className="muted">Svaka nova praksa dobija nove [FIXTURE] brojeve. Procena se otvara posle najmanje jednog samostalnog odgovora.</p>
              <button className="primary" disabled={busy || s.practiceSubmissions < 1} onClick={() => advance('ASSESSMENT')}>Otvori procenu</button>
            </section>
          )}
          {s.stage === 'ASSESSMENT' && view.assessment && (
            <section className="card">
              <h2>Procena · pokušaj {s.assessmentAttempts + 1}</h2>
              <p className="muted">Četiri oblasti po 25 poena. Prolaz: najmanje 80/100 i 15/25 u svakoj oblasti, bez neispravljenih ključnih grešaka. Mentor ne pomaže tokom procene.</p>
              <ScenarioCard sc={view.assessment.scenario} />
              <WorkForm key={`a${s.assessmentAttempts}`} busy={busy} submitLabel="Predaj procenu" onSubmit={(body) => run(() => api(`/api/sessions/${s.id}/assessment`, body))} />
            </section>
          )}
          {(s.stage === 'FEEDBACK' || s.stage === 'CONFIRMED') && view.feedback && (
            <FeedbackPanel view={view} busy={busy} run={run} setNotice={setNotice} />
          )}
          {s.stage === 'CONFIRMED' && (
            <section className="card">
              <div className="success">Napredak je potvrđen i upisan u kanonski Learning Progress.</div>
              {view.nextLesson && <p>Sledeća lekcija: <strong>{view.nextLesson.id} — {view.nextLesson.title}</strong> {view.nextLesson.unlocked ? <span className="pill ok">otključana</span> : <span className="pill bad">zaključana</span>}</p>}
              <a href="/">Nazad na pregled</a>
            </section>
          )}
        </div>
        <aside>
          <ChatPanel view={view} busy={busy} run={run} />
          <section className="card">
            <h2>Status</h2>
            <p>Prakse: {s.practiceSubmissions} · Procene: {s.assessmentAttempts}</p>
            {view.misconceptions.length > 0 && (
              <>
                <h3>Pogrešne predstave</h3>
                <ul>{view.misconceptions.map((m, i) => <li key={i}><span className={`pill ${m.severity === 'key' ? 'bad' : 'warn'}`}>{m.severity === 'key' ? 'ključna' : 'manja'}</span>{m.description} {m.remediated_at ? <span className="pill ok">ispravljeno</span> : null}</li>)}</ul>
              </>
            )}
          </section>
        </aside>
      </div>
    </>
  );
}

function ScenarioCard({ sc }: { sc: Scenario }) {
  return (
    <div className="card" data-testid="scenario">
      <p><span className="pill">[FIXTURE]</span>{sc.basis}</p>
      <p>Prodato je <strong>{sc.quantity}</strong> kom. proizvoda <strong>{sc.product}</strong> po ceni od <strong>{sc.price.toLocaleString('sr-Latn-RS')} RSD</strong>; nabavna cena <strong>{sc.cost.toLocaleString('sr-Latn-RS')} RSD</strong>; pripisani operativni trošak <strong>{sc.opexPerUnit.toLocaleString('sr-Latn-RS')} RSD</strong> po komadu.</p>
      <table>
        <thead><tr><th>Ponuda (jedan kupac)</th><th>Prihod</th><th>Nabavna vrednost</th></tr></thead>
        <tbody>
          <tr><td>A: {sc.offerA.label}</td><td>{sc.offerA.revenue.toLocaleString('sr-Latn-RS')} RSD</td><td>{sc.offerA.cogs.toLocaleString('sr-Latn-RS')} RSD</td></tr>
          <tr><td>B: {sc.offerB.label}</td><td>{sc.offerB.revenue.toLocaleString('sr-Latn-RS')} RSD</td><td>{sc.offerB.cogs.toLocaleString('sr-Latn-RS')} RSD</td></tr>
        </tbody>
      </table>
      <p className="muted">Kupac zaista želi dodatak i cena paketa mu je prihvatljiva.</p>
    </div>
  );
}

type WorkBody = { numeric: { revenue: number | null; grossProfit: number | null; grossMarginPct: number | null; remaining: number | null }; concept: string; application: string; decision: string; chosenOffer: 'A' | 'B' | null };

function WorkForm({ onSubmit, busy, submitLabel }: { onSubmit: (b: WorkBody) => void; busy: boolean; submitLabel: string }) {
  const [n, setN] = useState({ revenue: '', grossProfit: '', grossMarginPct: '', remaining: '' });
  const [concept, setConcept] = useState('');
  const [application, setApplication] = useState('');
  const [decision, setDecision] = useState('');
  const [offer, setOffer] = useState<'' | 'A' | 'B'>('');
  const toNum = (v: string) => (v.trim() === '' ? null : Number(v.replace(/\./g, '').replace(',', '.')));
  const numField = (key: keyof typeof n, label: string) => (
    <div><label htmlFor={key}>{label}</label><input id={key} name={key} inputMode="decimal" value={n[key]} onChange={(e) => setN({ ...n, [key]: e.target.value })} /></div>
  );
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit({ numeric: { revenue: toNum(n.revenue), grossProfit: toNum(n.grossProfit), grossMarginPct: toNum(n.grossMarginPct), remaining: toNum(n.remaining) }, concept, application, decision, chosenOffer: offer || null }); }}>
      <h3>1. Numeričko zaključivanje (ukupno za sve komade)</h3>
      <div className="fields">
        {numField('revenue', 'Prihod (RSD)')}
        {numField('grossProfit', 'Bruto profit (RSD)')}
        {numField('grossMarginPct', 'Bruto marža (%)')}
        {numField('remaining', 'Posle operativnog troška (RSD)')}
      </div>
      <label htmlFor="concept">2. Razumevanje koncepta: zašto prihod nije zarada i šta je bruto profit, a šta neto profit?</label>
      <textarea id="concept" maxLength={4000} value={concept} onChange={(e) => setConcept(e.target.value)} />
      <label htmlFor="application">3. Praktična primena: predloži etičan način da povećaš rezultat ove prodaje bez spuštanja cene.</label>
      <textarea id="application" maxLength={4000} value={application} onChange={(e) => setApplication(e.target.value)} />
      <fieldset style={{ border: 0, padding: 0, margin: '10px 0' }}>
        <legend style={{ fontWeight: 600 }}>4. Poslovna odluka: koju ponudu biraš?</legend>
        <div className="row">
          <label style={{ fontWeight: 400 }}><input type="radio" name="offer" value="A" checked={offer === 'A'} onChange={() => setOffer('A')} style={{ width: 'auto' }} /> Ponuda A</label>
          <label style={{ fontWeight: 400 }}><input type="radio" name="offer" value="B" checked={offer === 'B'} onChange={() => setOffer('B')} style={{ width: 'auto' }} /> Ponuda B</label>
        </div>
      </fieldset>
      <label htmlFor="decision">Obrazloženje odluke</label>
      <textarea id="decision" maxLength={4000} value={decision} onChange={(e) => setDecision(e.target.value)} />
      <button className="primary" type="submit" disabled={busy}>{busy ? 'Mentor razmišlja…' : submitLabel}</button>
    </form>
  );
}

function NumericTable({ fields, reveal }: { fields: Record<string, { correct: boolean; expected: number; given: number | null }>; reveal: boolean }) {
  const names: Record<string, string> = { revenue: 'Prihod', grossProfit: 'Bruto profit', grossMarginPct: 'Bruto marža %', remaining: 'Posle operativnog troška' };
  return (
    <table>
      <thead><tr><th>Stavka</th><th>Tvoj odgovor</th><th>Provera</th>{reveal && <th>Tačno</th>}</tr></thead>
      <tbody>{Object.entries(fields).map(([k, f]) => <tr key={k}><td>{names[k] ?? k}</td><td>{f.given ?? '—'}</td><td>{f.correct ? <span className="pill ok">tačno</span> : <span className="pill bad">netačno</span>}</td>{reveal && <td>{f.expected}</td>}</tr>)}</tbody>
    </table>
  );
}

function MentorPanel({ text, meta, sources }: { text: string; meta: MentorMeta; sources: Record<string, string> }) {
  return (
    <div>
      <p style={{ whiteSpace: 'pre-wrap' }}>{text}</p>
      {!!meta.correct_points?.length && <><h3>Šta je tačno</h3><ul>{meta.correct_points.map((c, i) => <li key={i}>{c}</li>)}</ul></>}
      {!!meta.misconceptions?.length && <><h3>Pogrešne predstave</h3><ul>{meta.misconceptions.map((m, i) => <li key={i}><span className={`pill ${m.severity === 'key' ? 'bad' : 'warn'}`}>{m.code}</span>{m.description}</li>)}</ul></>}
      {!!meta.missing_links?.length && <><h3>Nedostajuće veze</h3><ul>{meta.missing_links.map((m, i) => <li key={i}>{m}</li>)}</ul></>}
      {!!meta.socratic_questions?.length && <><h3>Potpitanja</h3><ul>{meta.socratic_questions.map((q, i) => <li key={i}>{q}</li>)}</ul></>}
      {!!meta.evidence_claims?.length && <><h3>Oznake dokaza</h3><ul className="claims">{meta.evidence_claims.map((c, i) => <li key={i}><span className="pill">[{c.label}]</span>{c.text}</li>)}</ul></>}
      {!!meta.source_refs?.length && <p className="muted">Izvori: {meta.source_refs.map((r) => `${r} (${sources[r] ?? 'nepoznat'})`).join('; ')}</p>}
      {meta.uncertainty && <p className="muted">Neizvesnost: {meta.uncertainty}</p>}
      {!!meta.injectionFlags?.length && <div className="notice">Server je u odgovoru prepoznao uputstva upućena mentoru ({meta.injectionFlags.join(', ')}). Tretirana su kao podatak; AI ocena je ograničena.</div>}
      {meta.provider && <p className="muted"><small>Generisao: {meta.provider} · {meta.model}</small></p>}
    </div>
  );
}

function ChatPanel({ view, busy, run }: { view: View; busy: boolean; run: (fn: () => Promise<{ view?: View } | View>) => Promise<unknown> }) {
  const [msg, setMsg] = useState('');
  const allowed = !['THEORY', 'ASSESSMENT', 'CONFIRMED'].includes(view.session.stage);
  return (
    <section className="card" aria-label="Razgovor sa mentorom">
      <h2>Razgovor sa Morijartijem</h2>
      <div className="chat" aria-live="polite">
        {view.messages.length === 0 && <p className="muted">Još nema poruka.</p>}
        {view.messages.map((m, i) => <div key={i} className={`msg ${m.role}`}>{m.text}{m.role === 'mentor' && !!m.meta?.socratic_questions?.length && <ul>{m.meta.socratic_questions.map((q, j) => <li key={j}>{q}</li>)}</ul>}</div>)}
      </div>
      {allowed ? (
        <form onSubmit={async (e) => { e.preventDefault(); if (!msg.trim()) return; const r = await run(() => api(`/api/sessions/${view.session.id}/messages`, { message: msg })); if (r) setMsg(''); }}>
          <label htmlFor="chat">Tvoje pitanje ili razmišljanje</label>
          <textarea id="chat" maxLength={4000} value={msg} onChange={(e) => setMsg(e.target.value)} />
          <button type="submit" disabled={busy || !msg.trim()}>Pošalji</button>
        </form>
      ) : <p className="muted">{view.session.stage === 'THEORY' ? 'Razgovor se otvara u fazi pitanja.' : view.session.stage === 'ASSESSMENT' ? 'Tokom procene radiš samostalno.' : 'Lekcija je završena.'}</p>}
    </section>
  );
}

function FeedbackPanel({ view, busy, run, setNotice }: { view: View; busy: boolean; run: (fn: () => Promise<{ view?: View; result?: unknown } | View>) => Promise<unknown>; setNotice: (s: string) => void }) {
  const f = view.feedback!;
  const s = view.session;
  const [explanation, setExplanation] = useState('');
  const [confirmText, setConfirmText] = useState('');
  return (
    <section className="card" data-testid="feedback">
      <h2>Povratna informacija · procena #{f.attemptNo}</h2>
      <p className={f.passed ? 'success' : 'error'}><strong>{f.result.gate.total}/100</strong> — {f.passed ? 'prolaz ispunjen' : 'prolaz nije ispunjen'}</p>
      {Object.entries(f.result.gate.scores).map(([d, v]) => (
        <div key={d} style={{ margin: '8px 0' }}>
          <div className="row" style={{ justifyContent: 'space-between' }}><span>{DOMAIN_LABELS[d] ?? d}</span><span>{v}/25</span></div>
          <div className={`bar ${v >= 15 ? 'ok' : 'bad'}`}><span style={{ width: `${(v / 25) * 100}%` }} /></div>
        </div>
      ))}
      {f.result.gate.failures.length > 0 && <><h3>Zašto nije prolaz</h3><ul>{f.result.gate.failures.map((x, i) => <li key={i}>{x}</li>)}</ul></>}
      {f.result.caps.length > 0 && <><h3>Determinističke napomene</h3><ul>{f.result.caps.map((x, i) => <li key={i}>{x}</li>)}</ul></>}
      <MentorPanel text={f.result.reply} meta={f.result.mentor} sources={view.sources} />
      <p className="muted"><small>Račun: {f.result.scoredBy.arithmetic}; slobodan tekst: {f.result.scoredBy.freeText}.</small></p>
      {s.stage === 'FEEDBACK' && !f.passed && s.remediationRequired && (
        <div className="card">
          <h3>Remedijacija ključnih grešaka</h3>
          <p>Objasni svojim rečima šta je bilo pogrešno i kako glasi ispravno pravilo. Posle prihvaćene ispravke sledi nova procena sa novim brojevima.</p>
          <textarea aria-label="Objašnjenje ispravke" maxLength={4000} value={explanation} onChange={(e) => setExplanation(e.target.value)} />
          <button disabled={busy || !explanation.trim()} onClick={() => run(async () => { const r = await api<{ result: { accepted: boolean; note: string }; view: View }>(`/api/sessions/${s.id}/remediation`, { explanation }); setNotice(r.result.note); return r; })}>Pošalji ispravku</button>
        </div>
      )}
      {s.stage === 'FEEDBACK' && !f.passed && !s.remediationRequired && (
        <button className="primary" disabled={busy} onClick={() => run(() => api<View>(`/api/sessions/${s.id}/advance`, { to: 'ASSESSMENT' }))}>Nova procena (novi [FIXTURE] scenario)</button>
      )}
      {s.stage === 'FEEDBACK' && f.passed && (
        <div className="card">
          <h3>Potvrda napretka</h3>
          {s.pendingConfirmation ? <div className="notice">Rezultat je potvrđen u aplikaciji, ali kanonski upis je isključen ({s.pendingConfirmation.reason}). Uključi <code>MENTOR_CANONICAL_WRITES=true</code> i potvrdi ponovo.</div> : null}
          <p>Upis u <code>10_Daily/Learning_Progress.md</code> pravi se uz backup i samo za ovaj položen pokušaj. Upiši <strong>POTVRĐUJEM</strong>.</p>
          <input aria-label="Potvrda" value={confirmText} onChange={(e) => setConfirmText(e.target.value)} />
          <button className="primary" disabled={busy || confirmText !== 'POTVRĐUJEM'} onClick={() => run(async () => { const r = await api<{ result: { message: string }; view: View }>(`/api/sessions/${s.id}/confirm`, { confirmation: 'POTVRĐUJEM' }); setNotice(r.result.message); return r; })}>Potvrdi napredak</button>
        </div>
      )}
    </section>
  );
}
