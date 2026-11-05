import crypto from 'node:crypto';

/**
 * Heuristic prompt-injection detector. Detection never grants anything; it only
 * flags text so the server can cap AI-derived scores and inform the mentor.
 * The real protection is architectural: AI output cannot change stage,
 * arithmetic scores, prerequisites or canonical progress.
 */
const PATTERNS: [string, RegExp][] = [
  ['override_instructions', /(ignore|disregard|forget|zanemari|ignori[sš]i|zaboravi)\b.{0,40}\b(instruc|uputst|pravil|prompt|prethodn|previous|above)/i],
  ['role_hijack', /(you are now|act as|pretend to be|ti si sada|ponašaj se kao|ponasaj se kao)\b/i],
  ['system_tag', /<\/?\s*(system|assistant|developer|instructions?|student_answer|source)\b[^>]*>/i],
  ['score_demand', /(give|daj|dodeli|upiši|upisi|set)\b.{0,30}\b(100|25\/25|max(imum)?|pun[ie] broj|sve poene|pass|prolaz|položio|polozio)/i],
  ['unlock_demand', /(unlock|otključaj|otkljucaj|preskoč|preskoc|skip)\b.{0,40}\b(lekcij|lesson|stage|faz|test|procen)/i],
  ['reveal_prompt', /(reveal|print|show|ispiši|ispisi|prikaži|prikazi)\b.{0,30}\b(system prompt|instruc|uputstv|api key|ključ|kljuc)/i],
  ['json_smuggle', /"rubric"\s*:|"passed"\s*:\s*true|"stage"\s*:/i],
];

export function detectInjection(text: string): string[] {
  const normalized = text.normalize('NFKC');
  return PATTERNS.filter(([, re]) => re.test(normalized)).map(([name]) => name);
}

/** Wraps untrusted text in a nonce-tagged block and neutralises look-alike closing tags. */
export function wrapUntrusted(tag: 'student_answer' | 'source', text: string): { nonce: string; block: string } {
  const nonce = crypto.randomBytes(6).toString('hex');
  const safe = text.replace(/<\s*\/?\s*(student_answer|source)[^>]*>/gi, '[uklonjena oznaka]');
  return { nonce, block: `<${tag} id="${nonce}">\n${safe}\n</${tag} id="${nonce}">` };
}
