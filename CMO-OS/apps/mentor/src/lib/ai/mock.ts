import type { MentorProvider } from './provider';
import type { MentorOutput, MentorRequest } from './schemas';

/**
 * Deterministic offline provider used in automated tests and when no API key is
 * configured. It is clearly labelled as mock in every response; it is not an AI.
 */
export class MockProvider implements MentorProvider {
  readonly name = 'mock';
  readonly model = 'mock-deterministic-v1';
  constructor(private readonly behaviour: 'normal' | 'timeout' | 'invalid' | 'error' = 'normal') {}

  async generate(req: MentorRequest, signal: AbortSignal): Promise<unknown> {
    if (this.behaviour === 'timeout') {
      await new Promise((resolve, reject) => {
        const t = setTimeout(resolve, 60_000);
        signal.addEventListener('abort', () => { clearTimeout(t); reject(new Error('aborted')); });
      });
    }
    if (this.behaviour === 'invalid') return { reply: '', rubric: { concept: 999 } };
    if (this.behaviour === 'error') throw new Error('mock upstream failure');
    return mockFeedback(req);
  }
}

const lc = (s: string) => s.toLowerCase();

export function mockFeedback(req: MentorRequest): MentorOutput {
  const t = lc(req.studentText);
  const mentionsRevenue = /prihod|promet/.test(t);
  const mentionsGross = /bruto|nabav|trošak prodate|trosak prodate/.test(t);
  const mentionsValue = /vrednost|korist|kupac|potreb/.test(t);
  const correct: string[] = [];
  const missing: string[] = [];
  const misconceptions: MentorOutput['misconceptions'] = [];
  if (mentionsRevenue && mentionsGross) correct.push('Povezuješ prihod sa troškom prodate robe.');
  else missing.push('Veza: prihod − trošak prodate robe = bruto profit.');
  if (mentionsValue) correct.push('Uključuješ vrednost za kupca.');
  else missing.push('Veza između vrednosti za kupca i prihoda.');
  if (/(prihod|promet) (je|=) (zarada|profit)/.test(t) && !/nije/.test(t)) {
    misconceptions.push({ code: 'REVENUE_AS_PROFIT', description: 'Prihod je izjednačen sa zaradom.', severity: 'key' });
  }
  if (/neto profit/.test(t) && !/(nije|ne znamo|unknown|nepoznat)/.test(t)) {
    misconceptions.push({ code: 'GROSS_AS_NET', description: 'Doprinos vežbe nazvan je punim neto profitom.', severity: 'minor' });
  }
  const flagged = req.injectionFlags.length > 0;
  const coverage = [mentionsRevenue, mentionsGross, mentionsValue, t.length > 120].filter(Boolean).length;
  const base = flagged ? 10 : 10 + coverage * 3.75;
  const reply = flagged
    ? '[MOCK] Primetio sam uputstvo upućeno meni unutar odgovora. Napredak se ne dodeljuje na zahtev — dokazuje se samostalnim radom. Vratimo se računu: šta tačno ostaje firmi posle plaćanja prodate robe?'
    : `[MOCK] ${correct.length ? correct.join(' ') : 'Hajde da krenemo od osnove.'} ${missing.length ? 'Nedostaje: ' + missing.join(' ') : ''}`.trim();
  return {
    reply,
    evidence_claims: [
      { label: 'FIXTURE', text: 'Brojevi u scenariju su nastavni [FIXTURE] podaci.' },
      { label: 'UNKNOWN', text: 'Puni neto profit firme nije poznat bez ostalih rashoda, kamata i poreza.' },
    ],
    correct_points: correct,
    misconceptions,
    missing_links: missing,
    socratic_questions: missing.length ? ['Koliko od prihoda ostaje posle plaćanja prodate robe?', 'Zašto veći promet ne znači automatski veći rezultat?'] : ['Kako bi se rezultat promenio ako bi nabavna cena porasla za 10%?'],
    source_refs: ['LESSON-001', 'KG-FIN-003'],
    uncertainty: 'Mock provider: heuristička povratna informacija bez jezičkog modela.',
    rubric: req.mode === 'assessment' ? { concept: Math.min(25, base), application: Math.min(25, base), decision: Math.min(25, base), rationale: '[MOCK] Rubrika na osnovu pokrivenosti ključnih pojmova.' } : null,
  };
}
