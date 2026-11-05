# Curriculum expansion audit

Date: 2026-11-04
Verdict: `APPROVE` for the approved changes P1–P5 and ADR 009 resolution.
Review type: implementation-session self-review (cmo-auditor checklist); not an independent second-model review.
Authorization: user message „odobravam sve“ (P1–P5, ADR 009), with the explicit exception that `tmp/pdfs/` images are kept as the mentor's source corpus.

## Scope

| Change | Files |
|---|---|
| P1 theory depth | `99_Templates/Lesson_Template.md`; Lessons 002, 003, 101–105 (original text kept, subsections added) |
| P2 level gates | `02_Lessons/Level_0…9/Gate_Level_N.md` |
| P3 new lessons | 606, 607, 805, 905, 1006; catalog, ROADMAP, AUTHORED index, INDEX, README; Lesson 1005 prerequisite → 1006 |
| P4 wording | 49 existing lessons: assessment sentence no longer refers to a missing app; Lesson 002 exercise `[FIXTURE]` alternative |
| P5 option A | ROADMAP note: finance concepts tied to customer/offer decisions |
| ADR 009 resolution | ADR 009, `apps/mentor/.env.example`, app README |
| Decision record | ADR 010 |

## Checklist

- Baseline and personal state: `10_Daily/`, `_archive/`, `01_Knowledge/`, book notes and `tmp/` unchanged versus `1545a64` (git diff check).
- No progress fabricated; Learning Progress still has no completed lesson.
- All new numbers are `[FIXTURE]`; every calculation in gates and new lessons was recomputed independently (Python) before writing.
- Theory examples must not reveal exercise answers: a violation in my own Lesson 102 addition (same cost items as the exercise) was found and replaced before commit.
- Knowledge Graph: proposal to pre-add planned nodes was not applied because Knowledge Graph rule 1 forbids nodes before a concept is taught.
- Legal content (Lesson 607): cites the official text location (paragraf.rs, Sl. glasnik RS 35/2026) and marks deadlines as requiring verification in the official gazette; not legal advice.

## Executed checks

- Documentary runner for this change (`recheck.mjs`, excludes gate files from lesson count, adds 10 gate checks): PASS, 1.636 checks, 163 active documents, 54 lessons, 54 catalog IDs, 0 failures. See `documentary_results.json`.
- Lesson 001 pilot checks: 11/11 PASS.
- AI mentor: typecheck PASS; Vitest 65 passed, 1 skipped (live smoke); E2E 26/26 PASS with 54-lesson catalog (`e2e_results.json`).

## Not verified

- Pedagogical quality of new and expanded lessons with a real learner or a live model.
- Deadlines of the new consumer protection law in the official gazette.
- Remaining 42 lessons still have short theory (P1 rollout continues lesson by lesson).
