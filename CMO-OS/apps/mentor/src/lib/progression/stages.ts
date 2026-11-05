export const STAGES = ['THEORY', 'QUESTIONS', 'GUIDED', 'PRACTICE', 'ASSESSMENT', 'FEEDBACK', 'CONFIRMED'] as const;
export type Stage = (typeof STAGES)[number];

export const STAGE_LABELS: Record<Stage, string> = {
  THEORY: 'Teorija',
  QUESTIONS: 'Pitanja i pojašnjenja',
  GUIDED: 'Vođeni primer',
  PRACTICE: 'Samostalna praksa',
  ASSESSMENT: 'Procena',
  FEEDBACK: 'Povratna informacija',
  CONFIRMED: 'Potvrđen napredak',
};

export type SessionFacts = {
  stage: Stage;
  practiceSubmissions: number;
  lastAssessmentPassed: boolean | null;
  remediationRequired: boolean;
  prerequisitesMet: boolean;
};

/** Returns null when the transition is allowed, otherwise a Serbian reason. */
export function transitionError(facts: SessionFacts, to: Stage): string | null {
  if (!facts.prerequisitesMet) return 'Preduslovi lekcije nisu ispunjeni.';
  const from = STAGES.indexOf(facts.stage);
  const target = STAGES.indexOf(to);
  if (target < 0) return 'Nepoznata faza.';
  if (to === 'FEEDBACK' || to === 'CONFIRMED') return 'Ova faza se otvara samo kroz procenu, odnosno potvrdu rezultata.';
  // Retake after a failed, remediated assessment: FEEDBACK → ASSESSMENT.
  if (facts.stage === 'FEEDBACK' && to === 'ASSESSMENT') {
    if (facts.lastAssessmentPassed) return 'Procena je već položena; potvrdi rezultat.';
    if (facts.remediationRequired) return 'Prvo završi remedijaciju ključnih grešaka.';
    return null;
  }
  if (target !== from + 1) return `Redosled je obavezan: iz faze ${facts.stage} može se preći samo u sledeću fazu.`;
  if (to === 'ASSESSMENT' && facts.practiceSubmissions < 1) return 'Pre procene pošalji bar jedan samostalni praktični odgovor.';
  return null;
}
