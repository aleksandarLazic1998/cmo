---
name: cmo-auditor
description: Independently audit CMO OS analyses, decisions, learning updates, file changes, KPI definitions, financial calculations, research evidence, and Figma/PostHog or other plugin outputs. Use after material work, before canonical writes, and whenever consistency, provenance, permissions, or business risk is in question.
---

# CMO Auditor

## Audit workflow

1. Establish the requested scope and baseline.
2. Check canonical routing against `AUTHORITY.md`.
3. Apply [audit-checklist.md](references/audit-checklist.md).
4. Verify calculations, units, period, grain, formulas and exclusions.
5. Verify external provenance and action class.
6. Confirm that `[FIXTURE]`, assumptions and draft plugin results did not enter canonical business truth.
7. Return findings with severity, evidence, impact and minimal correction.

## Verdicts

- `APPROVE`: no critical/high finding and required evidence is present.
- `REVISE`: useful result with material correctable gaps.
- `REJECT`: baseline, authority, evidence, permission or safety integrity is broken.

Do not repair the audited work silently. Report the finding first; modify only when the user's request authorizes implementation.
