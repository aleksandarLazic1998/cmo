import { z } from 'zod';

export const EVIDENCE_LABELS = ['FACT', 'INFERENCE', 'ASSUMPTION', 'UNKNOWN', 'FIXTURE'] as const;
export const MAX_STUDENT_TEXT = 4000;

/** Structured mentor output. Every field is required (nullable where optional) for strict JSON output. */
export const MentorOutputSchema = z.object({
  reply: z.string().min(1).max(6000),
  evidence_claims: z.array(z.object({ label: z.enum(EVIDENCE_LABELS), text: z.string().max(500) })).max(8),
  correct_points: z.array(z.string().max(400)).max(6),
  misconceptions: z
    .array(
      z.object({
        code: z.enum(['REVENUE_AS_PROFIT', 'MARGIN_ON_COST', 'GROSS_AS_NET', 'IGNORED_QUANTITY', 'OPEX_IGNORED', 'HIGHER_REVENUE_WINS', 'UNETHICAL_UPSELL', 'OTHER']),
        description: z.string().max(400),
        severity: z.enum(['key', 'minor']),
      }),
    )
    .max(6),
  missing_links: z.array(z.string().max(400)).max(6),
  socratic_questions: z.array(z.string().max(400)).max(3),
  source_refs: z.array(z.string().max(40)).max(6),
  uncertainty: z.string().max(600).nullable(),
  rubric: z
    .object({
      concept: z.number().min(0).max(25),
      application: z.number().min(0).max(25),
      decision: z.number().min(0).max(25),
      rationale: z.string().max(1500),
    })
    .nullable(),
});
export type MentorOutput = z.infer<typeof MentorOutputSchema>;

export const MentorModeSchema = z.enum(['questions', 'practice', 'assessment', 'remediation']);
export type MentorMode = z.infer<typeof MentorModeSchema>;

export type MentorRequest = {
  mode: MentorMode;
  stage: string;
  lessonContext: string; // canonical lesson text (trusted, but treated as data)
  personaReference: string; // canonical Moriarty reference
  scenarioText: string | null; // [FIXTURE] scenario description
  deterministicFindings: string | null; // server-computed checks
  history: { role: 'student' | 'mentor'; text: string }[];
  studentText: string;
  injectionFlags: string[];
};

// API request bodies (validated at the route boundary).
const text = z.string().trim().max(MAX_STUDENT_TEXT);
const num = z.union([z.number().finite(), z.null()]);

export const ChatBodySchema = z.object({ message: text.min(1) }).strict();
export const AdvanceBodySchema = z.object({ to: z.enum(['THEORY', 'QUESTIONS', 'GUIDED', 'PRACTICE', 'ASSESSMENT', 'FEEDBACK', 'CONFIRMED']) }).strict();
export const WorkBodySchema = z
  .object({
    numeric: z.object({ revenue: num, grossProfit: num, grossMarginPct: num, remaining: num }).strict(),
    concept: text,
    application: text,
    decision: text,
    chosenOffer: z.enum(['A', 'B']).nullable(),
  })
  .strict();
export const RemediationBodySchema = z.object({ explanation: text.min(1) }).strict();
export const ConfirmBodySchema = z.object({ confirmation: z.literal('POTVRĐUJEM') }).strict();
