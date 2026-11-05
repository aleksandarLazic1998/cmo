/**
 * Lesson 001 runtime specification. Teaching content is read from the canonical
 * lesson file; this module only adds deterministic scenario generation and the
 * source allowlist. All generated numbers are [FIXTURE].
 */
export const LESSON_ID = '001';

export const SOURCE_ALLOWLIST: Record<string, string> = {
  'LESSON-001': 'CMO-OS/02_Lessons/Level_0/Lesson_001_How_a_Company_Makes_Money.md',
  'BKB-VAL-006': 'CMO-OS/11_Research/Book_Knowledge_Base.md — BKB-VAL-006 Pet delova kao ulazna provera',
  'BK-014': 'BK-014 The Personal MBA, pp. 61, 194–196 (Book_Reading_Ledger locator)',
  'BK-006': 'BK-006 Financial Intelligence — čitanje izveštaja (whole-book beleška)',
  'KG-CUS-001': 'Knowledge Graph — Potreba kupca',
  'KG-CUS-002': 'Knowledge Graph — Vrednost za kupca',
  'KG-FIN-001': 'Knowledge Graph — Prihod',
  'KG-FIN-002': 'Knowledge Graph — Nabavna cena',
  'KG-FIN-003': 'Knowledge Graph — Bruto profit',
  'KG-FIN-004': 'Knowledge Graph — Bruto marža',
  'KG-FIN-005': 'Knowledge Graph — Operativni troškovi',
  'KG-FIN-006': 'Knowledge Graph — Neto profit / rezultat',
};

export const CONCEPT_IDS = ['KG-CUS-001', 'KG-CUS-002', 'KG-FIN-001', 'KG-FIN-002', 'KG-FIN-003', 'KG-FIN-004', 'KG-FIN-005', 'KG-FIN-006'] as const;

export const KNOWN_MISCONCEPTIONS = {
  REVENUE_AS_PROFIT: 'Prihod (promet) tretiran kao zarada/profit.',
  MARGIN_ON_COST: 'Bruto marža računata na nabavnu cenu (to je markup), a ne na prihod.',
  GROSS_AS_NET: 'Bruto profit ili doprinos vežbe proglašen punim neto profitom firme.',
  IGNORED_QUANTITY: 'Iznos za jednu jedinicu korišćen umesto ukupne količine.',
  OPEX_IGNORED: 'Operativni trošak izostavljen iz preostalog doprinosa.',
  HIGHER_REVENUE_WINS: 'Bira se opcija sa većim prometom bez obzira na bruto profit.',
  UNETHICAL_UPSELL: 'Predlog povećanja profita skrivenom ili nekorisnom stavkom.',
} as const;
export type MisconceptionCode = keyof typeof KNOWN_MISCONCEPTIONS | 'OTHER';
export const KEY_MISCONCEPTIONS: ReadonlySet<string> = new Set(['REVENUE_AS_PROFIT', 'MARGIN_ON_COST', 'HIGHER_REVENUE_WINS', 'UNETHICAL_UPSELL']);

export type Scenario = {
  kind: 'practice' | 'assessment';
  product: string;
  accessory: string;
  price: number;
  cost: number;
  quantity: number;
  opexPerUnit: number;
  offerA: { label: string; revenue: number; cogs: number };
  offerB: { label: string; revenue: number; cogs: number };
  basis: string;
};

export type ScenarioAnswers = { revenue: number; grossProfit: number; grossMarginPct: number; remaining: number; betterOffer: 'A' | 'B' };

const PRODUCTS = [
  ['monitor', 'kabl i nosač za monitor'],
  ['tablet', 'zaštitna futrola'],
  ['laptop', 'torba za laptop'],
  ['štampač', 'dodatni toner'],
  ['bežične slušalice', 'produžena garancija sa jasnim uslovima'],
  ['telefon', 'zaštitno staklo'],
] as const;

/** Mulberry32 PRNG — deterministic per seed so the server can recompute answers. */
export function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function seedFrom(text: string): number {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
  return h >>> 0;
}

export function generateScenario(kind: Scenario['kind'], seedText: string): Scenario {
  const r = rng(seedFrom(`${kind}:${seedText}`));
  const pick = <T,>(arr: readonly T[]) => arr[Math.floor(r() * arr.length)]!;
  const [product, accessory] = pick(PRODUCTS);
  const price = 20000 + Math.floor(r() * 80) * 1000; // 20.000–99.000 RSD
  const marginShare = 0.12 + r() * 0.16; // 12–28 %
  const cost = Math.round((price * (1 - marginShare)) / 500) * 500;
  const quantity = 1 + Math.floor(r() * 4);
  const grossUnit = price - cost;
  const opexPerUnit = Math.max(500, Math.round((grossUnit * (0.2 + r() * 0.5)) / 500) * 500);
  // Offer B adds an accessory the customer genuinely wants. Sometimes the bundle
  // raises revenue but lowers gross profit (deep accessory discount), so the
  // correct choice is not predictable from the label.
  const accPrice = 1500 + Math.floor(r() * 10) * 500;
  const bundleHurts = r() < 0.4;
  const accCost = bundleHurts ? accPrice + 500 + Math.floor(r() * 4) * 500 : Math.round((accPrice * (0.3 + r() * 0.4)) / 500) * 500;
  return {
    kind,
    product,
    accessory,
    price,
    cost,
    quantity,
    opexPerUnit,
    offerA: { label: `samo ${product}`, revenue: price, cogs: cost },
    offerB: { label: `${product} + ${accessory}`, revenue: price + accPrice, cogs: cost + accCost },
    basis: '[FIXTURE] RSD, ista poreska osnova; PDV, povrati, kamate i ostali rashodi nisu modelovani.',
  };
}

export function solveScenario(s: Scenario): ScenarioAnswers {
  const revenue = s.price * s.quantity;
  const grossProfit = (s.price - s.cost) * s.quantity;
  const grossMarginPct = revenue === 0 ? NaN : (grossProfit / revenue) * 100;
  const remaining = grossProfit - s.opexPerUnit * s.quantity;
  const gpA = s.offerA.revenue - s.offerA.cogs;
  const gpB = s.offerB.revenue - s.offerB.cogs;
  return { revenue, grossProfit, grossMarginPct, remaining, betterOffer: gpB > gpA ? 'B' : 'A' };
}

/** Client-safe view: inputs only, never the answers. */
export function publicScenario(s: Scenario) {
  return s;
}
