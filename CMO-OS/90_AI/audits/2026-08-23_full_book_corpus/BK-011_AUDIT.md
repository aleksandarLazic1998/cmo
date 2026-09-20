# BK-011 Completion Audit

date: `2026-08-23`  
book_id: `BK-011`  
source: `Scaling Up: How a Few Companies Make It… and Why the Rest Don't — Verne Harnish and the team at Gazelles`  
method: `cmo-auditor full-book completion gate`  
verdict: `APPROVE`

## Scope and authorization

- User request authorizes full-corpus reading and durable knowledge-base integration for the Moriarty persona.
- Output routed to `11_Research/`, coverage evidence to `11_Research/book_acquisition/`, audit evidence to `90_AI/audits/` under `AUTHORITY.md`.
- Original PDF unchanged and outside CMO OS; no full text retained.
- No external write, no plugin execution, no personal-learning-state write, no fabricated Tehnocentar datum.

## Source identity

- Expected/recomputed SHA-256: `38c566ad25d49b0e8aeaa301bfb26cafb5f6bf63a1d9e30f4757efe61e8725c5`
- Expected/`pdfinfo` pages: `387`
- Expected/`pdfinfo` file size: `23621515 bytes`
- Rendered page files present: `387`
- Identity reconciliation: `PASS`

## Coverage checks

| Gate | Evidence | Result |
|---|---|---|
| Page-range continuity | Semantic read covers 1–40 and every contiguous 40-page range through 387 | `PASS` |
| Accounted pages | 387/387 | `PASS` |
| Range integrity | Five stored SHA-256 range hashes computed from current source | `PASS` |
| Character accounting | 569,803 layout-inclusive chars; 476,595 non-whitespace chars; lower density than pure prose, consistent with a book built on lists, checklists, tables and full-page tool graphics | `PASS` |
| Empty-page exception | All 17 zero-text pages resolved on render: 1 cover, 11 full-page Growth Tool worksheets and diagrams, 2 publisher advertisement pages, 3 further tool pages — none is a blank page | `PASS` |
| Low-text exceptions | All 12 sub-200-character pages resolved as front matter, chapter ends, index/bibliography ends, and pages where text shares the page with a full-width graphic | `PASS` |
| Full visual coverage | 387 renders reviewed across five contact sheets (1–78, 79–156, 157–234, 235–312, 313–387) plus one focused 12-page check sheet at 330 px thumbnail width targeting every zero-text page and its neighbours | `PASS` |
| Figures, tables and worksheets | 4D Framework, Everest diagram, Think-Plan-Act-Learn cycle, completed Growth Tool examples, Greiner curve, seven numbered 7-Strata diagrams, seven numbered OPSP column diagrams, City Bin quarterly theme posters, scoreboard and situation-room photographs, meeting-rhythm percentage diagram, daily and weekly agendas, waterfall graph, LER tables and the full Gary's Furniture financial set — all visible and reflected in synthesis | `PASS` |
| Structure boundaries | Four sections, fourteen chapters, Next Steps, Key Resources and Index all located by page and mapped | `PASS` |
| Pagination discrepancy | Book-page numbering (used by the index and internal cross-references) differs from PDF numbering; discrepancy documented and every page reference in note and coverage stated as a PDF page | `PASS with note` |
| Core model coverage | 4 Decisions and 4D Framework, three growth barriers, all eleven one-page Growth Tools, accountability/responsibility/authority split, FACe and PACe, Job Scorecard and Topgrading, the five manager activities, Core Values/Purpose/Competencies and the eight culture levers, all seven Strata, all seven OPSP columns, SWT, all ten Rockefeller Habits, the full meeting rhythm, cash conversion cycle and CASh, all four Simple Numbers keys including LER and the four forces of cash, and all seven Power of One levers — covered | `PASS` |
| Claim separation | `[FACT]`, `[SOURCE CLAIM]`, `[INFERENCE]`, `[ASSUMPTION]`, `[UNKNOWN]` consistently applied; methodology status and self-selected sample stated up front | `PASS` |
| Evidence-status correction | Self-selected client cases denied evidential weight; absence of any documented failure of the methodology recorded; the single missed quarterly target the book does report is noted as the one honest counter-example | `PASS` |
| Currency-of-data correction | All figures dated 2013/2014 and explicitly excluded from use as current data | `PASS` |
| Financial discipline | BK-006 given precedence; Crabtree's non-standard gross and contribution margin definitions bounded to internal use and barred from external reporting; "two sets of books" permitted only openly and separately labelled | `PASS` |
| Employment-law boundary | Pay-to-work manager model excluded; unpaid trial work excluded; "culture fit" bounded to written behavioural criteria; customised compensation bounded to a written, explainable criterion; workforce reductions and hour changes removed from the LER model's authority | `PASS` |
| Commercial-integrity boundary | Gifts/lottery tickets to a customer's payables staff excluded; late payment beyond agreed terms excluded as a cash lever; advances recorded as a liability, not revenue | `PASS` |
| Privacy boundary | Dream On personal-hardship data bounded by consent, retention limit and publication ban; sales-call recording/transcription bounded by notice and consent; the book's own ban on publishing submissions that name individuals negatively adopted as a rule | `PASS` |
| Commercial-layer disclosure | The book's closing sales funnel (two full advertisement pages, coaching, SaaS, certifications) identified and excluded from the methodology | `PASS` |
| Scope-limit disclosure | Applicability limited to firms past product-market fit; tools that require a third management layer explicitly named as inapplicable below that size; employee-count thresholds converted to a locally measured trigger | `PASS` |
| Adversarial analysis | Sixteen candidate failure modes tested across evidence, financial, legal, employment, privacy, commercial and governance dimensions | `PASS` |
| Cross-book integration | BK-002, BK-004, BK-005, BK-006, BK-007, BK-008, BK-010, BK-012, BK-016, BK-017, BK-018 reconciled with precedence rules | `PASS` |
| CMO OS application | Protocol follows Problem, Data, Analysis, Options, Recommendation, Cost, Expected result, KPI, with a forced single-cause-per-quarter rule matching the author's own warning | `PASS` |
| Source protection | No reproduced chapters or full text; durable artifact is original synthesis, structure map and provenance | `PASS` |

Visual evidence:

- `BK-011_visual-contact-sheet-1.png` — SHA-256 `18fb7cba1f8651c7620af27c413143a5611ab15ea954a5aaca128b6919eaf15e`
- `BK-011_visual-contact-sheet-2.png` — SHA-256 `1c3a341b97d0b76d5cef5a8dea28fbc90d0e6e5e19924f65c6a22afe8c05c66d`
- `BK-011_visual-contact-sheet-3.png` — SHA-256 `d9a821bcd73ea1baa5d46dfb9fcc4291973f9a9d4f828746a1bf5fcb60fbc1ad`
- `BK-011_visual-contact-sheet-4.png` — SHA-256 `0219d8357c65d680b7b70f3f3c07e37df4faa7ad3692006ea3fe80b67a770f72`
- `BK-011_visual-contact-sheet-5.png` — SHA-256 `83078061d23db5b1a25ff9eb1b1ead7a10c0e0ad4cddcb7dbf6d1255c5a39e16`
- `BK-011_visual-check-empties.png` — SHA-256 `6217ac74d461013c2fe7c8dc42f409dbf98fa7af46712e733c1223287d209f54`

## Adversarial findings disposition

| Candidate finding | Severity before correction | Evidence | Correction / disposition |
|---|---|---|---|
| Consultant case studies read as evidence of effect | `critical` | Every named company is a Gazelles client or workshop attendee; no failure case | Methodology status stated in the note's first section; sample declared self-selected; all figures used as mechanism illustrations, never as expected effect sizes |
| Appletree turnover/profit/multiple figures used as a benchmark | `high` | pp. 158–160, 167 | Single founder-reported case without control; causal link between the programme and the sale multiple declared unproven |
| Outback "$25,000 to get the job" model transferred | `critical if operationalized` | pp. 192–193 | Excluded. Shifts capital risk onto the employee and touches unlawful conditioning of employment in most jurisdictions; only the underlying mechanism (fix the industry choke point through retention) is carried across |
| Unpaid "test-drive" of candidates | `high` | Ch4 hiring practices | Excluded. Trial work must be paid, time-boxed and contracted |
| TORC used as pressure on candidates | `high` | pp. 116–118 | Bounded: no contact with a current employer without written consent; reference checks limited to professional performance |
| "Hire for culture fit" as a neutral filter | `high` | pp. 118–120, 163 | Discrimination risk named; "fit" admissible only through recorded behavioural examples tied to Core Values, never through impression |
| Customised pay packages — "fairness is not sameness" | `high` | p. 125 | Permitted only with a written, explainable criterion that would survive being shown to every employee; otherwise it is unequal pay for equal work |
| Lottery tickets/gifts to a customer's accounts-payable clerks | `critical` | p. 319 | Excluded without exception. The book itself hedges ("if frowned upon or illegal"); the permitted substitute is the book's own alternative — accurate invoice, explicit due date, friendly reminder |
| "Slow down paying creditors" as a cash lever | `high` | 7 levers, pp. 361–363 | Bounded to agreed terms; unilateral extension is transferring one's own liquidity problem to a smaller firm and does not count as improvement |
| Customer advances treated as revenue | `high` | pp. 316, 321 | Advances recorded as a liability to the customer; the book does not make this distinction explicit |
| Crabtree's margin definitions used externally | `critical if operationalized` | pp. 330–333 | BK-006 given precedence; the redefined gross and contribution margin bounded to the internal book, barred from any bank, tax or investor report under the same names |
| LER used to decide headcount and hours | `high` | pp. 336–337, "drop back to four days a week" | LER shows where the pressure is; it does not decide about people. Every change to hours or headcount requires its own procedure and evidence |
| "If you pay no tax you either created no wealth or cheated" | `medium` | p. 337 | Rhetorical claim rejected as a diagnostic; the usable core — wealth is measured after tax — retained |
| Dream On personal-hardship data collected and publicised | `high` | pp. 158–159 | Bounded by voluntary participation, retention limit, exclusion of the applicant's direct manager from the committee, and a publication ban without explicit written consent. The book reports the opposite outcome approvingly |
| Automatic transcription of salespeople's call-in reports | `medium` | p. 274 | Bounded by notice and consent requirements before any recording or transcription |
| "Dare to be bad" applied without limit | `high` | Stratum 4, pp. 185–187 | Bounded to dimensions the customer sees in advance and can choose; excluded for safety, accuracy of information, complaints handling, legal obligations and accessibility |
| Rockefeller Habits Checklist score used as a health KPI | `medium` | pp. 242–243 | Excluded. The author states a firm can thrive with nothing checked; the count therefore cannot measure health |
| Employee-count thresholds (10/50/350) applied literally | `medium` | Ch2 | Converted to a locally measured trigger — the date on which one person can no longer hold everyone's names and current work |
| All tools introduced simultaneously | `high` | Book structure vs. author's own warning on p. 367 | Decision protocol forces exactly one cause per quarter; the "all at once" option is listed and refused |
| Commercial layer read as part of the method | `medium` | pp. 366–371 | Coaching, Align, Growth Institute, Better Book Club and certifications identified as the author's sales funnel and excluded from CMO OS |
| 2013/2014 figures treated as current | `high` | Throughout; MapPoint retirement notice on p. 328 | All figures declared historical; none admitted as a current datum |

All candidate findings are resolved in the audited note. No unresolved `critical`, `high`, `medium` or `low` finding remains.

## Verdict

`APPROVE` — BK-011 is eligible for `COMPLETED`.

Approval confirms whole-source processing, deterministic coverage evidence, complete visual review including a targeted check of every zero-text page, and authority-safe synthesis. It does not certify the effectiveness of the Scaling Up methodology relative to alternatives, the accuracy or representativeness of the client cases, the currency of any figure in the book, or the legality of its hiring, compensation and collections tactics in any specific jurisdiction — the excluded items are excluded precisely because that certification cannot be given.
