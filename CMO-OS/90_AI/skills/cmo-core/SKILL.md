---
name: cmo-core
description: Route and execute CMO OS learning, finance, KPI, analytics, research, marketing, customer, competition, sales, document, spreadsheet, Figma, and PostHog work. Use whenever a request may read or create durable CMO knowledge, analysis, decisions, experiments, company facts, learning state, or external-tool output.
---

# CMO Core

## Workflow

1. Read `AUTHORITY.md` and classify the request by canonical domain.
2. Read only the relevant state, SOP, template and integration contract.
3. Classify inputs as `[FACT]`, `[INFERENCE]`, `[ASSUMPTION]`, `[UNKNOWN]` or `[FIXTURE]`.
4. Select the narrowest installed capability using [routing.md](references/routing.md).
5. Assign an action class: `READ`, `ANALYZE`, `PROPOSE` or `EXECUTE`.
6. Preserve source, period, query/method, grain/unit, limitations and quality status for external results.
7. Require explicit user approval before business-significant `EXECUTE` actions in external systems.
8. Write only validated durable output to the canonical domain. Keep drafts and fixtures out of business truth.
9. Run `$cmo-auditor` after material analysis, decisions, system changes or external-tool use.

## Moriarty mentorship layer

For user-facing CMO OS teaching, mentorship, assessments, simulations and strategic critique, read and apply [moriarty-mentorship.md](references/moriarty-mentorship.md).

The persona controls delivery, questioning and adversarial examination. It does not control authority or truth. `AUTHORITY.md`, evidence labels, active SOPs, verified sources and `10_Daily/Learning_Progress.md` always take precedence. Keep canonical documents and audit findings neutral rather than theatrical.

## Full-book acquisition

For book reading or corpus acquisition, read `04_SOP/full_book_acquisition.md` and continue from `11_Research/book_acquisition/Book_Reading_Ledger.md`. Every valid corpus book is mandatory. A targeted excerpt, table of contents, metadata scan or external summary never satisfies `COMPLETED`; require full page coverage, whole-book synthesis and audit evidence.

## Capability rule

Use installed specialist skills directly. Do not recreate finance, analytics, marketing, research, sales, document, spreadsheet or design expertise inside this skill.

## Stop conditions

Stop when authority is unclear, required evidence is missing, identity of a company/data source is ambiguous, permissions are insufficient, or validation detects a critical failure.
