# BK-012 Completion Audit

date: `2026-08-23`  
book_id: `BK-012`  
source: `The Goal: A Process of Ongoing Improvement — Eliyahu M. Goldratt and Jeff Cox`  
method: `cmo-auditor full-book completion gate`  
verdict: `APPROVE`

## Scope and authorization

- User request authorizes full-corpus reading and durable knowledge-base integration for the Moriarty persona.
- Output routed to `11_Research/`, coverage evidence to `11_Research/book_acquisition/`, audit evidence to `90_AI/audits/` under `AUTHORITY.md`.
- Original PDF unchanged and outside CMO OS; no full text retained.
- No external write, no plugin execution, no personal-learning-state write, no fabricated Tehnocentar datum.

## Source identity

- Expected/recomputed SHA-256: `95550e68ac4574d2fdb928d6f492557110e2375949e77a5cc23b45fcf556fc3b`
- Expected/`pdfinfo` pages: `351`
- Expected/`pdfinfo` file size: `1985109 bytes`
- Rendered page files present: `351`
- Identity reconciliation: `PASS`

## Coverage checks

| Gate | Evidence | Result |
|---|---|---|
| Page-range continuity | Semantic read covers 1–40 and every contiguous 40-page range through 351 | `PASS` |
| Accounted pages | 351/351 | `PASS` |
| Range integrity | Five stored SHA-256 range hashes recomputed from current source | `PASS` |
| Character accounting | 750,119 layout-inclusive chars; 612,577 non-whitespace chars; density consistent with dense narrative prose | `PASS` |
| Empty-page exception | Single empty-text page (p. 1) resolved on render as the image cover | `PASS` |
| Low-text exceptions | All 6 sub-200-character pages resolved as chapter ends and the publisher's closing page | `PASS` |
| Full visual coverage | 351 renders reviewed across five contact sheets covering 1–71, 72–142, 143–213, 214–284, 285–351 | `PASS` |
| Missing-heading investigation | Chapters 7 and 8 carry no heading in this conversion; a focused full-resolution render of pp. 56–61 confirms continuous text from ch. 6 (p. 47) to ch. 9 (p. 65). Recorded as an edition artifact, not a coverage gap | `PASS with note` |
| Figures and tables | Dice-and-matchsticks deviation charts, planned-shipment diagram, Pete/robot logs, X→Y combination diagrams, the five-step board and interview graphics all visible and reflected in synthesis | `PASS` |
| Chapter boundaries | Independent scan locates chapters 2–6 and 9–40; chapter 1 located at p. 7; interview block and publisher page located | `PASS` |
| Whole-book structure | Cover, both introductions, author biography, forty narrative chapters and all ten interviews mapped | `PASS` |
| Core model coverage | Goal and three measures, dependent events and statistical fluctuations, balanced-plant fallacy, bottleneck/non-bottleneck/CCR, utilization vs activation, exploitation and offloading, drum–buffer–rope, batch halving and the four time components, five focusing steps with inertia, constraint protection and spare-capacity trade-off, cost-accounting distortions, throughput world, three management questions and the Socratic method — all covered | `PASS` |
| Claim separation | `[FACT]`, `[SOURCE CLAIM]`, `[INFERENCE]`, `[UNKNOWN]` consistently applied; novel status stated up front | `PASS` |
| Evidence-status correction | Fictional narrative and author-selected testimonials explicitly denied evidential weight; no figure admitted as data | `PASS` |
| Financial discipline | BK-006 given precedence; marginal-pricing claim bounded by four written conditions (free capacity, no displacement, no price spillover, no legal exposure) | `PASS` |
| Reporting-integrity correction | The novel's tactic of slipping a changed costing basis past the auditors is explicitly excluded; internal management layer must be open and separate from statutory reporting | `PASS` |
| People and rights boundary | "Subordinate everything" bounded to work sequencing; idle capacity separated from headcount decisions; planned idle time must be explained to staff | `PASS` |
| Scope-limit disclosure | Author's own admission that TOC procedures for service organizations are undeveloped recorded | `PASS` |
| Adversarial analysis | Fourteen candidate failure modes tested across evidence, financial, legal, operational, people and governance dimensions | `PASS` |
| Cross-book integration | BK-002, BK-004, BK-005, BK-006, BK-007, BK-008, BK-010, BK-016, BK-017, BK-018 reconciled with precedence rules | `PASS` |
| CMO OS application | Protocol follows Problem, Data, Analysis, Options, Recommendation, Cost, Expected result, KPI | `PASS` |
| Source protection | No reproduced chapters or full text; durable artifact is original synthesis, structure map and provenance | `PASS` |

Visual evidence:

- `BK-012_visual-contact-sheet-1.png` — SHA-256 `e70826c4dbf3706067eda3af99bd49b77e85073a9e8ca8f770162e460f93d914`
- `BK-012_visual-contact-sheet-2.png` — SHA-256 `3ed0c3715295559ccc0446e6e2a03546871445277079f3be7b01e7da38f97c2e`
- `BK-012_visual-contact-sheet-3.png` — SHA-256 `298966fda875d42f4b061d48888dec1dcccc9c93e8cc68ff863ca86079c5032d`
- `BK-012_visual-contact-sheet-4.png` — SHA-256 `33ad3b9df4187c63521363b4e14e53a7ad6eaf56ef7b1965c787e57ab4a875f7`
- `BK-012_visual-contact-sheet-5.png` — SHA-256 `f0acf87cf43163a34c1421424126710d6d48c23ee0e49ec5ee588ec920068f93`

## Adversarial findings disposition

| Candidate finding | Severity before correction | Evidence | Correction / disposition |
|---|---|---|---|
| Fictional results read as empirical proof | `critical` | Whole narrative; plant turnaround in three months | Novel status stated in the note's first section; no figure admitted as data; author-selected interviews marked as testimonials |
| "Sell below cost" generalised into a pricing rule | `critical if operationalized` | French order, pp. 289–292 | Permitted only under four written conditions: proven free capacity, no displacement of better work, no price spillover to existing customers, no legal/contractual exposure |
| Changed costing basis slipped past the audit team | `critical` | Lou's proposal and the audit, pp. 227–228, 235–236 | Explicitly excluded; internal management measures may run in parallel but openly, never by disguising statutory reports |
| "Subordinate everything else" applied to people | `high` | Step 3 of the five focusing steps | Bounded to work sequencing and resource allocation; safety, employment law, customer obligations and staff rights are never subordinated |
| Spare capacity used as an argument about headcount | `high` | pp. 86–88, 181–182 | Headcount decisions require their own evidence and procedure; the balanced-plant argument does not settle them in either direction |
| Idle non-bottlenecks left unexplained to workers | `medium` | pp. 207–208, "don't hassle anybody" | Planned idle time must be scheduled and communicated (training, maintenance, preparation); silence converts it into insecurity |
| Colour-tag priority system treated as permanent | `high` | Its own reversal in ch. 37 | Every introduced measure must carry a written expiry condition and an owner who checks it — the book's own inertia lesson made procedural |
| Batch halving assumed free | `medium` | "an hour saved at a non-bottleneck is a mirage" | True only while genuine idle capacity exists; external setup, transport and supplier costs must be computed, not assumed |
| TOC transferred to services without adaptation | `high` | Author's own admission, pp. 331–332 | Recorded; transfer to retail/services requires locally developed procedures and validation |
| Interviews used as proof of effectiveness | `high` | pp. 314–351 | Marked as selected testimonials without control group; used only as existence proofs of application, never as effect sizes |
| Constraint identification treated as a one-off | `medium` | Wandering-bottleneck crisis, ch. 39 | Constraint map must carry a measurement date and be re-checked before every material increase in demand |
| Growth in sales assumed costless | `high` | ch. 39 | Every campaign must state what it consumes: buffer, spare capacity or promised lead time; "nothing" is not an acceptable answer |
| Socratic questioning used as a management style | `medium` | ch. 32 | Adopted for teaching with a mandatory closing summary; questioning without resolution reads as patronising and teaches nothing |
| Human relationships shown instrumentally | `medium` | Julie subplot; workers directed by tags | Recorded as narrative device, not a model of conduct |

All candidate findings are resolved in the audited note. No unresolved `critical`, `high`, `medium` or `low` finding remains.

## Verdict

`APPROVE` — BK-012 is eligible for `COMPLETED`.

Approval confirms whole-source processing, deterministic coverage evidence, complete visual review including a targeted investigation of the missing chapter headings, and authority-safe synthesis. It does not certify the effectiveness of TOC relative to other methods, the accuracy of the novel's outcomes, the representativeness of the interviews, or the transferability of its procedures to service and retail settings without local development.
