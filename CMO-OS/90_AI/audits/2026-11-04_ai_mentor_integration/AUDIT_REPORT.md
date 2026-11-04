# AI mentor integration audit

Date: 2026-11-04
Verdict: `APPROVE` for the local Lesson 001 AI mentor application with mock provider; `REVISE` items listed below remain open.
Review type: implementation-session self-review with executable evidence (cmo-auditor checklist); not an independent second-model audit.
Baseline: `1545a64ed34ab37d437318c022149ea6210071fc` (main = feature/ai-mentor-integration at start).

## Scope and ownership

User-requested AI mentor application under `apps/mentor/` (ADR 009), plus instruction consistency fixes (FIXTURE label, AUTHORITY rows, stale SOP statement, lesson lifecycle pointer). No curriculum, book, historical audit or Learning Progress content changed.

## Checklist (cmo-auditor)

- Baseline preserved: yes. `git diff` shows no change to `02_Lessons/`, `10_Daily/`, `11_Research/`, `_archive/` or earlier audits.
- Canonical routing: app code registered in AUTHORITY as an execution layer; operational DB is auxiliary; backups go to `_archive/learning_progress_backups/`.
- Evidence labels: all generated numbers carry `[FIXTURE]`; mentor output schema requires FACT/INFERENCE/ASSUMPTION/UNKNOWN/FIXTURE labels; unknown source IDs are stripped.
- Calculations: arithmetic is deterministic and independently specified in tests (tablet 72.000/18.000/25 %/10.000; phone 10.000/16,67 %/7.000; zero revenue; tolerance).
- Personal state: only `10_Daily/Learning_Progress.md`, only after a passed attempt, explicit confirmation, `MENTOR_CANONICAL_WRITES=true`, backup, validation and atomic replace. Default is off.
- External EXECUTE: none. No deploy, no publication, no real API call.
- Changelog describes only completed state.

## Executed checks

- `tsc --noEmit`: pass.
- Vitest: 65 pass, 0 fail, 1 skipped (live Claude smoke, needs `ANTHROPIC_API_KEY`). See `vitest_results.json`.
- Browser E2E (production build, Chromium, mock provider, temp copy of canonical files): 26/26 pass, including stage-skip and forged-confirm refusal (409), cross-origin refusal (403), prompt injection in chat, server restart mid-flow with persisted state, key-error remediation and new scenario, canonical write + backup, unlock of 002, no horizontal overflow at 375 and 768 px. See `e2e_results.json`.
- Documentary runner (copy of 2026-11-01 runner excluding `node_modules`/`.next`): 1.416 checks pass over 146 active documents. See `documentary_results.json`. The historical runner is unchanged; run unmodified it reports 30 failures that all come from local, git-ignored `node_modules` README links.
- Lesson 001 pilot checks: 11/11 pass (unchanged).
- `npm audit --omit=dev`: 0 vulnerabilities after upgrading zod to 4.6.7 and overriding postcss to 8.5.23.
- Real authenticated AI call: NOT RUN. An invalid-key probe reached the API and returned 401, proving network reachability only.

## Findings

- High, open (decision for user): Learning Progress update rule says automated results are not evidence. ADR 009 defines the app assessment as mentor evidence; canonical writes stay disabled until the user approves.
- Medium, open: `CMO-OS/tmp/pdfs/` tracks 4.439 rendered book page images (~759 MB) in git. Copyright and repository-size risk; not deleted (preservation rule). Recommend moving out of git history only with explicit user approval.
- Medium, open: free-text domains depend on an AI rubric; in mock mode they are keyword heuristics and must not be presented as AI judgement (UI and responses are labelled `[MOCK]`).
- Low, open: root `Readme.md` contains a prompt for another learner's instance, not a project README; `Books/MORIJARTI-48/README.md` contains an absolute local path.
- Low, open: app has no authentication; safe only on 127.0.0.1.

## Follow-up — 2026-11-04

- High finding (app assessment as evidence): resolved, user approved (ADR 009 resolution).
- Medium finding (`tmp/pdfs/`): closed as owner-accepted; images are retained as the mentor's source corpus.
