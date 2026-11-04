import { describe, it, expect } from 'vitest';
import { generateScenario, solveScenario, type Scenario } from '@/lib/curriculum/lesson001';
import { checkNumeric, deterministicCaps, evaluateGate } from '@/lib/progression/scoring';

const fixed: Scenario = {
  kind: 'assessment', product: 'tablet', accessory: 'futrola', price: 36000, cost: 27000, quantity: 2, opexPerUnit: 4000,
  offerA: { label: 'A', revenue: 36000, cogs: 27000 }, offerB: { label: 'B', revenue: 39000, cogs: 28000 }, basis: '[FIXTURE]',
};

describe('arithmetic (independently specified)', () => {
  it('solves the tablet scenario from the visual pilot', () => {
    const a = solveScenario(fixed);
    expect(a.revenue).toBe(72000);
    expect(a.grossProfit).toBe(18000);
    expect(a.grossMarginPct).toBe(25);
    expect(a.remaining).toBe(10000);
    expect(a.betterOffer).toBe('B'); // 11.000 > 9.000
  });
  it('canonical phone example', () => {
    const a = solveScenario({ ...fixed, price: 60000, cost: 50000, quantity: 1, opexPerUnit: 3000 });
    expect(a.grossProfit).toBe(10000);
    expect(a.remaining).toBe(7000);
    expect(a.grossMarginPct).toBeCloseTo(16.667, 2);
  });
  it('zero revenue yields undefined margin', () => {
    expect(Number.isNaN(solveScenario({ ...fixed, price: 0 }).grossMarginPct)).toBe(true);
  });
  it('scenarios are deterministic per seed and vary across seeds', () => {
    expect(generateScenario('assessment', 'x:1')).toEqual(generateScenario('assessment', 'x:1'));
    const set = new Set(Array.from({ length: 20 }, (_, i) => JSON.stringify(generateScenario('assessment', `s:${i}`))));
    expect(set.size).toBeGreaterThan(15);
  });
  it('better offer is not always B (label cannot be guessed)', () => {
    const offers = new Set(Array.from({ length: 60 }, (_, i) => solveScenario(generateScenario('assessment', `o:${i}`)).betterOffer));
    expect(offers).toEqual(new Set(['A', 'B']));
  });
  it('generated scenarios keep positive costs and margins within range', () => {
    for (let i = 0; i < 200; i++) {
      const s = generateScenario('practice', `r:${i}`);
      expect(s.cost).toBeGreaterThan(0);
      expect(s.cost).toBeLessThan(s.price);
      expect(s.quantity).toBeGreaterThanOrEqual(1);
    }
  });
});

describe('numeric check', () => {
  it('awards 25 for all-correct answers with tolerance', () => {
    const r = checkNumeric(fixed, { revenue: 72000, grossProfit: 18000, grossMarginPct: 25.04, remaining: 10000 });
    expect(r.score).toBe(25);
  });
  it('detects revenue-as-profit, markup and ignored quantity', () => {
    const r = checkNumeric(fixed, { revenue: 36000, grossProfit: 72000, grossMarginPct: 33.33, remaining: 18000 });
    expect(r.score).toBe(0);
    expect(r.misconceptions).toEqual(expect.arrayContaining(['REVENUE_AS_PROFIT', 'MARGIN_ON_COST', 'IGNORED_QUANTITY']));
  });
  it('detects ignored opex', () => {
    const r = checkNumeric(fixed, { revenue: 72000, grossProfit: 18000, grossMarginPct: 25, remaining: 18000 });
    expect(r.misconceptions).toContain('OPEX_IGNORED');
    expect(r.score).toBe(18.75);
  });
  it('null and non-finite inputs are incorrect, not crashes', () => {
    expect(checkNumeric(fixed, { revenue: null, grossProfit: null, grossMarginPct: null, remaining: null }).score).toBe(0);
  });
});

describe('deterministic caps', () => {
  const good = { concept: 'Prihod nije zarada: od prihoda prvo oduzimamo nabavnu cenu prodate robe i dobijamo bruto profit, a neto profit traži sve ostale rashode.', application: 'Ponuditi kupcu korisnu futrolu uz jasno objašnjenje koristi, kupac slobodno bira paket.', decision: 'Biram B jer daje veći bruto profit, a kupac dobija vrednost koju želi.', chosenOffer: 'B' as const };
  it('no caps for a complete reasoned answer', () => {
    const c = deterministicCaps(fixed, good);
    expect(c.caps).toEqual({ concept: 25, application: 25, decision: 25 });
  });
  it('wrong offer that maximises revenue is a key misconception', () => {
    const c = deterministicCaps({ ...fixed, offerB: { label: 'B', revenue: 40000, cogs: 33000 } }, good);
    expect(c.caps.decision).toBe(10);
    expect(c.misconceptions).toContain('HIGHER_REVENUE_WINS');
  });
  it('hidden upsell is unethical and capped', () => {
    const c = deterministicCaps(fixed, { ...good, application: 'Dodamo na račun garanciju koju ne kažemo kupcu, tako raste profit.' });
    expect(c.caps.application).toBe(5);
    expect(c.misconceptions).toContain('UNETHICAL_UPSELL');
  });
  it('missing decision gives zero', () => {
    expect(deterministicCaps(fixed, { ...good, chosenOffer: null }).caps.decision).toBe(0);
  });
});

describe('pass gate', () => {
  const base = { misconceptions: [], unresolvedKeyFromHistory: [], prerequisitesMet: true, applicationPresent: true, decisionReasoned: true };
  it('passes at exactly 80 with 20 each', () => {
    expect(evaluateGate({ ...base, scores: { concept: 20, numeric: 20, application: 20, decision: 20 } }).passed).toBe(true);
  });
  it('fails at 79.99', () => {
    expect(evaluateGate({ ...base, scores: { concept: 20, numeric: 20, application: 20, decision: 19.99 } }).passed).toBe(false);
  });
  it('fails when one domain is below 15 even if total ≥ 80', () => {
    const g = evaluateGate({ ...base, scores: { concept: 25, numeric: 25, application: 25, decision: 14 } });
    expect(g.total).toBe(89);
    expect(g.passed).toBe(false);
  });
  it('fails with a key misconception despite full score', () => {
    expect(evaluateGate({ ...base, misconceptions: ['REVENUE_AS_PROFIT'], scores: { concept: 25, numeric: 25, application: 25, decision: 25 } }).passed).toBe(false);
  });
  it('minor misconceptions do not block', () => {
    expect(evaluateGate({ ...base, misconceptions: ['GROSS_AS_NET'], scores: { concept: 25, numeric: 25, application: 25, decision: 25 } }).passed).toBe(true);
  });
  it('fails without prerequisites, application or reasoned decision', () => {
    const s = { concept: 25, numeric: 25, application: 25, decision: 25 };
    expect(evaluateGate({ ...base, scores: s, prerequisitesMet: false }).passed).toBe(false);
    expect(evaluateGate({ ...base, scores: s, applicationPresent: false }).passed).toBe(false);
    expect(evaluateGate({ ...base, scores: s, decisionReasoned: false }).passed).toBe(false);
  });
  it('clamps out-of-range AI scores', () => {
    const g = evaluateGate({ ...base, scores: { concept: 999, numeric: -5, application: Number.NaN, decision: 25 } });
    expect(g.scores).toEqual({ concept: 25, numeric: 0, application: 0, decision: 25 });
  });
});
