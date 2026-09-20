# CMO Learning App — Post-Deployment Audit

Date: `2026-08-22`  
System version: `CMO-OS 2.0.0`  
Scope: public Sites learning application, Lesson 001, curriculum navigation, business laboratory, CSV/Excel export, assessment, library, responsive behavior, production deployment and access-policy change  
Action class: `READ` + `ANALYZE` + user-authorized `EXECUTE`  
App verdict: `APPROVE`  
Curriculum-content coverage: `1 IN_PROGRESS` + `48 PLANNED`

## Executive conclusion

- `[FACT]` The public CMO Učionica Sites application is deployed at `https://cmo-ucionica.aleksandar-lazic-p.chatgpt.site` as version 4 and the production deployment succeeded.
- `[FACT]` All implemented application features passed local browser, responsive, calculation, export, static-analysis, build and dependency-security checks described below.
- `[FACT]` Lesson 001 remains canonically `REVISE` and `U toku`. The application applies the readiness-audit corrections at the presentation layer but does not change the canonical lesson or personal learning state.
- `[FACT]` The remaining 48 lessons are shown as `PLANNED`, never as completed or authored. Their lesson bodies do not yet exist as canonical sources and therefore were not fabricated in the application.
- `[INFERENCE]` The application is ready for learning and testing the currently authorized content, and its curriculum shell is ready to receive future lessons after their evidence gates pass.

## Authority and evidence baseline

Canonical sources reviewed:

- `AUTHORITY.md`
- `INDEX.md`
- `ROADMAP.md`
- `10_Daily/Learning_Progress.md`
- `02_Lessons/LESSON_CATALOG.md`
- `02_Lessons/Level_0/Lesson_001_How_a_Company_Makes_Money.md`
- `01_Knowledge/Business_Glossary.md`
- `01_Knowledge/Knowledge_Graph.md`
- `11_Research/Book_Source_Map.md`
- `90_AI/audits/2026-08-21_lesson_001_readiness/AUDIT_REPORT.md`
- `90_AI/audits/2026-08-22_remaining_lessons_readiness/AUDIT_REPORT.md`

Controls:

- `[FACT]` The application is an AI/runtime artifact under `90_AI` authority and is isolated in `cmo-learning-app/`.
- `[FACT]` The Sites project was changed from owner-only to `public` on the user's explicit request to remove ChatGPT sign-in. Anyone with the URL can now open it.
- `[FACT]` No plugin output or application-local progress was promoted to canonical business or learning truth.
- `[FACT]` `10_Daily/Learning_Progress.md` was not changed.

External execution evidence:

- System: `OpenAI Sites`
- Extraction/deployment time: `2026-08-22T15:58:17Z`
- Method: owner-only version save and production deploy from a pushed Git commit and locally built archive; unauthenticated production-root inspection through the in-app browser
- Quality: deployment status `succeeded`; source/archive identity verified; the production sign-in gate was reachable; implemented features were exercised against the exact source state locally because the isolated audit browser had no owner session
- Limitation: the generated social-preview image is a visual asset only and is not business, curriculum or assessment evidence

Access change evidence:

- System: `OpenAI Sites`
- Access-policy update time: `2026-08-22T19:10:16Z`
- Method: Sites access policy changed from owner-only `custom` to `public`, followed by a fresh production navigation and semantic DOM inspection in the in-app browser
- Quality: Sites returned access revision `2` with `access_mode: public`; the production page displayed the CMO Učionica application directly and contained neither `Continue with ChatGPT` nor the previous sign-in gate
- Limitation: public access intentionally removes viewer authentication; the application must therefore contain no sensitive or real Tehnocentar data

## Audit rounds

### Round 1 — Source and authority audit

Status: `PASS`

- `[FACT]` All 49 catalog lesson IDs are represented once across 11 curriculum levels.
- `[FACT]` Lesson 001 is the only lesson represented as available and remains `IN PROGRESS`.
- `[FACT]` Sixteen mapped books are presented as secondary sources, not as curriculum or Tehnocentar truth.
- `[FACT]` Eighteen glossary terms are available for reference.
- `[UNKNOWN]` Canonical bodies for the remaining 48 lessons do not yet exist; their cards are intentionally plan-only.

### Round 2 — Content-correctness audit

Status: `PASS_WITH_CANONICAL_NOTE`

- `[FACT]` The initial application view inherited a high-severity Lesson 001 problem by visually combining value, goods, revenue and result concepts. This was corrected before final deployment into three separate views: value flow, goods flow and result equations.
- `[FACT]` Revenue is now defined as sales value and explicitly distinguished from cash timing.
- `[FACT]` Key beginner terms include Serbian and English labels.
- `[FACT]` The simplified net contribution is explicitly distinguished from full company net profit.
- `[FACT]` Lesson 001 still displays `CANONICAL AUDIT: REVISE`; the application correction is not presented as a canonical lesson completion.

### Round 3 — Fixture and calculation audit

Status: `PASS`

- `[FIXTURE]` All simulated values state source, grain, period, unit, VAT basis and non-Tehnocentar status in both the interface and exported CSV.
- `[FACT]` Default laboratory results were recalculated and matched: revenue `90,000 RSD`, gross profit `12,000 RSD`, net contribution `8,000 RSD`, gross margin `13.3%`.
- `[FACT]` Negative scenario with purchase cost `95,000 RSD` produced gross profit `-5,000 RSD` and net contribution `-9,000 RSD`, with the loss state shown.
- `[FACT]` Zero revenue, quantity changes, negative-input rejection and reset behavior passed browser tests.
- `[FACT]` The CSV contains active formulas for revenue, gross profit, net contribution and gross margin, plus the required fixture metadata.
- `[FACT]` The CSV uses `sep=;` and a semicolon-based `IF` argument separator for Serbian/European Excel compatibility.

### Round 4 — Feature and responsive audit

Status: `PASS`

- `[FACT]` Home, Lesson 001, Curriculum, Excel laboratory, knowledge test and Library views were exercised in the browser.
- `[FACT]` Curriculum search, planned-lesson expansion and empty search state passed.
- `[FACT]` The four-question test passed its disabled-until-complete state, `75/100` revision feedback, `100/100` pass feedback, local result persistence, focused completion confirmation and Curriculum next-step transition.
- `[FACT]` Library search and content counts passed.
- `[FACT]` All six views passed horizontal-overflow checks at mobile `390 × 844` and tablet `768 × 1024` viewports.
- `[FACT]` Mobile lesson and its corrected three-part visual model were visually inspected after responsive fixes.
- `[FACT]` The Excel download link, filename, data URI and decoded CSV content were verified; a browser media download completed in the earlier functional round.

### Round 5 — Code, security and production audit

Status: `PASS`

- `[FACT]` TypeScript check: pass.
- `[FACT]` ESLint check: pass.
- `[FACT]` Git whitespace/diff check: pass.
- `[FACT]` Production Vinext build: pass.
- `[FACT]` Dependency audit: `0 vulnerabilities`.
- `[FACT]` Earlier scaffold dependency findings were closed by upgrading the application dependency stack before deployment.
- `[FACT]` Sites version 4 was saved from pushed commit `8d37af64c3a866db5a1137fdd232424d6b14adea` and deployed successfully.
- `[FACT]` After the user-authorized access change, the production root opens the application directly without a ChatGPT sign-in gate.

## Closed findings

| Severity | Finding | Resolution | Status |
|---|---|---|---|
| HIGH | Visual conflation of value, goods and result concepts | Replaced with three named, independent views | `CLOSED` |
| HIGH | Fixture basis insufficiently explicit | Added source, grain, period, unit, VAT basis and non-real-data disclosure in UI and CSV | `CLOSED` |
| HIGH | Vulnerable scaffold dependencies | Upgraded dependency stack; final audit reports zero vulnerabilities | `CLOSED` |
| MEDIUM | Mobile min-content clipping and model overlap | Corrected responsive grid and verified all six views | `CLOSED` |
| MEDIUM | CSV `IF` separator did not match European Excel convention | Changed formula arguments to semicolons and revalidated decoded export | `CLOSED` |
| HIGH | Successful test result appeared ignored because feedback was above the learner's viewport | Added focused inline completion card, persistent next-step action and explicit Curriculum transition | `CLOSED` |
| LOW | ChatGPT sign-in prevented direct access | Changed the Sites access policy to public on explicit user request and verified direct production loading | `CLOSED` |

## Residual limitations

- `[UNKNOWN]` The remaining 48 canonical lesson bodies are not available. Creating them inside the app would exceed the evidence authority and falsely imply approved curriculum content.
- `[ASSUMPTION]` Future canonical lesson records will keep stable lesson IDs from `02_Lessons/LESSON_CATALOG.md`; the app structure is designed around those IDs.
- `[FACT]` A CSV that opens in Excel is provided; the application does not generate a standalone `.xlsx` workbook.
- `[FACT]` Production is publicly reachable without authentication. The application contains canonical learning references, clearly labeled fixtures and local-only progress, but no real Tehnocentar data.

## Final gate

`APPROVE` for the deployed application and every implemented feature in the stated scope.

`BLOCKED_BY_CANONICAL_SOURCE` for turning the remaining 48 planned cards into full lessons. This is not an application defect and must not be bypassed by invented content. No Learning Progress or Knowledge Graph update is authorized until the learner completes the required assessment and decision application.
