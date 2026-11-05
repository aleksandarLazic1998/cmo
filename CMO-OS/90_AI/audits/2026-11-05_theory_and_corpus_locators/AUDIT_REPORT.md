# Theory expansion and corpus locator audit

Date: 2026-11-05
Verdict: `APPROVE` with listed limits.
Review type: implementation-session self-review (cmo-auditor checklist); not an independent second-model review.
Authorization: user command „kreni“ for the open items (Moriarty live test, theory of remaining lessons, law deadlines, corpus-based enrichment).

## Results by open item

| Item | Status | Evidence |
|---|---|---|
| Live Moriarty test with a model | BLOCKED | `ANTHROPIC_API_KEY` not present in this session |
| Theory of remaining lessons | DONE for 41 lessons (002–1006 minus already expanded) | `Teach & explain` grew from 2.477 to 10.647 words across 54 lessons; each new block: why it matters, `[FIXTURE]` example, confusions, links, corpus locator |
| Law deadlines | VERIFIED in consolidated text (paragraf.rs) | Lesson 607 and LSE-12 updated: čl. 59, complaint provisions (8 / 15 / 30 days, packaging, 2-year register), čl. 219–220 |
| Corpus locators | VERIFIED where possible | `locator_verification.json`: BK-014 48 checked (41 exact, 6 refined, 1 wrong corrected); 4 image checks confirmed |

## Checklist

- Learning Progress, Knowledge Graph, `_archive/` and `tmp/` unchanged.
- Original lesson text preserved; additions placed before `## Visual model`.
- All new numbers `[FIXTURE]`, recomputed before writing; theory examples avoid exercise inputs (rule from Lesson Template P1).
- Locators distinguish what was checked (text or image) from what comes only from the whole-book notes.
- Legal content cites the consolidated text and states that paragraf.rs is not the official gazette and that the start-of-application date comes from a secondary source.

## Executed checks

- Documentary runner (copy of 2026-11-04 expansion runner): PASS, 1.636 checks, 54 lessons, 0 failures (`documentary_results.json`).
- Lesson 001 pilot: 11/11.
- AI mentor Vitest: 65 passed, 1 skipped (live smoke).

## Not verified / limits

- BK-013 page images are missing from the corpus (1 of 125), so Mom Test locators are note-based only.
- BK-011 and BK-004 locators not verified.
- Pedagogical quality of the new theory with a real learner or a live model.
