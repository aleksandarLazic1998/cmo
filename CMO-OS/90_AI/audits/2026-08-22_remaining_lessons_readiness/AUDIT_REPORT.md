# Remaining Lessons Readiness Audit

Date: `2026-08-22`  
Scope: planned Lessons 002–1005, curriculum sequence, prerequisites, level gates, source coverage and lesson-creation controls  
Action class: `READ` + `ANALYZE`  
Overall verdict: `REVISE`

## Executive conclusion

- `[FACT]` The remaining 48 lessons exist only as planned catalog entries. This is correct under the active lesson lifecycle: a lesson file is created only when that lesson becomes active.
- `[FACT]` The catalog is structurally sound: 49 total unique lesson IDs, 11 levels, 11 level/final gates, correct counts per level and a complete prerequisite chain without detected cycles or broken references.
- `[INFERENCE]` The curriculum sequence is suitable for progressive development from business awareness to CEO-level integration.
- `[INFERENCE]` The remaining lessons are plan-ready but not content-auditable. Their full explanations, examples, calculations and assessments do not yet exist.
- `[INFERENCE]` Future lesson creation should not begin until the three HIGH template findings below are corrected; otherwise the Lesson 001 evidence and assessment defects are likely to recur.

## Scope boundary

This audit validates:

- lesson IDs, counts and ordering;
- prerequisite continuity;
- progression of learning outcomes;
- level gate coverage;
- compatibility with the Roadmap, Lesson Lifecycle and Learning Progress;
- source-coverage limitations;
- whether the Lesson Template can safely generate future lessons.

This audit cannot validate for Lessons 002–1005:

- explanations or terminology accuracy;
- formulas and numerical examples;
- `[FIXTURE]` execution;
- assessment questions and scoring;
- external references or diagrams;
- compliance of an individual lesson file.

Those items remain `[UNKNOWN]` until each lesson is created.

## Structural validation

| Check | Result |
|---|---|
| Planned lesson rows | PASS — 49 |
| Remaining planned lessons | PASS — 48 |
| Unique IDs | PASS — no duplicates |
| Level counts match `ROADMAP.md` | PASS |
| Prerequisite chain | PASS — all 49 entries checked |
| Level/final gates | PASS — 11 |
| Future lesson files created prematurely | PASS — none |
| Current learning state preserved | PASS — Lesson 001 remains active |
| Empty active files | PASS — none |
| Active conflict markers | PASS — none |
| Personal learning state outside Learning Progress | PASS — none found |

## Readiness by level

`APPROVE PLAN` means the planned sequence and stated outcomes are coherent. It does not approve lesson content that does not yet exist.

| Level | Lessons covered | Catalog-level verdict | Audit note |
|---:|---|---|---|
| 0 | 002–003 | `APPROVE PLAN` | Correctly completes system thinking and owner decision thinking after Lesson 001. |
| 1 | 101–105 | `APPROVE PLAN` | Revenue drivers → cost classification → profit/margin → price-volume trade-off → break-even is a coherent sequence. |
| 2 | 201–206 | `APPROVE WITH SOURCE GATE` | Financial statements, cash, working capital and unit economics are coherent. Lesson 206 must use current Serbian official sources and clearly delimit professional advice. |
| 3 | 301–304 | `APPROVE PLAN` | Problem → segment → interview evidence → experiment forms a valid validation chain. Until the curriculum gate changes, application must remain `[FIXTURE]`. |
| 4 | 401–404 | `APPROVE PLAN` | Business model → value proposition → positioning → offer is coherent and avoids designing an offer before customer validation. |
| 5 | 501–505 | `APPROVE WITH COVERAGE NOTE` | Core sales/marketing logic is present. Source coverage is explicitly partial, so lesson creation needs current channel, measurement and sales-practice sources. |
| 6 | 601–605 | `REVISE SCOPE` | Retail economics is strong, but supplier/trade economics is not an explicit learning outcome. See MEDIUM finding below. |
| 7 | 701–704 | `APPROVE PLAN` | Process → standard work → delegation/automation → owner independence is coherent. |
| 8 | 801–804 | `APPROVE WITH COVERAGE NOTE` | KPI, budget/forecast, diagnostics and operating rhythm are coherent. Revenue/pipeline forecasting should be made explicit inside Lesson 802 or 803. |
| 9 | 901–904 | `APPROVE WITH SOURCE GATE` | Role design, hiring, delegation and performance management are coherent. Lessons 902 and 904 require current Serbian employment-law and fair-process boundaries. |
| 10 | 1001–1005 | `APPROVE PLAN` | Strategy → competitive focus → scaling → capital/risk/governance → CEO integration is coherent. |

## Findings

### HIGH — The Lesson Template lacks a mandatory evidence and numerical-basis contract

**Evidence — `[FACT]`:** The template requests inputs and calculations, but does not require source, period/as-of date, grain, unit, currency basis, VAT treatment, exclusions or formula assumptions. The only evidence instruction is a generic `[FIXTURE]` label.

**Impact — `[INFERENCE]`:** Future finance, retail, marketing and KPI lessons can contain arithmetically correct but incomparable or misleading numbers. This is the same failure pattern found in Lesson 001.

**Minimal correction:** Add a mandatory block to the template:

- Evidence label;
- source/method;
- period or as-of date;
- grain and population;
- unit/currency;
- VAT/tax basis;
- inclusions and exclusions;
- assumptions;
- formula and denominator.

For a simulation, source must be `CMO OS authored [FIXTURE]`, not Tehnocentar business truth.

### HIGH — The Lesson Template conflicts with the no-real-data rule

**Evidence — `[FACT]`:** The template uses “Realna situacija”, “realan problem” and “povezati lekciju sa realnim biznisom”, while `ROADMAP.md` and the Lesson Lifecycle prohibit real Tehnocentar/PostHog data until the post-curriculum gate.

**Impact — `[INFERENCE]`:** A future lesson author can follow the template literally and violate the higher-authority evidence restriction.

**Minimal correction:** Replace those instructions with “realistična `[FIXTURE]` simulacija” and “povezati sa realnim poslovnim principom bez unošenja stvarnih company podataka”. Preserve the future post-curriculum gate separately.

### HIGH — The scoring model does not enforce demonstrated decision-making

**Evidence — `[FACT]`:** The lifecycle states that 80% is insufficient without practical application and a reasoned decision. The template allows a total score of 80/100 but defines no mandatory minimum for Application or Business Thinking. Its assessment headings use `Explanation`, while the score table uses `Business Thinking`.

**Impact — `[INFERENCE]`:** A student could theoretically pass with strong theory/calculation and weak decision-making, violating the curriculum gate.

**Minimal correction:** Align the four dimensions and require all of the following:

- total score at least 80/100;
- no core dimension below a defined minimum;
- Application marked demonstrated;
- Business Decision marked demonstrated with rationale;
- critical mistakes corrected before completion.

### MEDIUM — Supplier and trade economics are not explicit in Level 6

**Evidence — `[FACT]`:** Level 6 covers category role, assortment, inventory, basket growth and price/promotion profitability. It does not explicitly cover supplier terms, payment terms, minimum order quantity, lead time, rebates/bonuses, co-funded marketing or net effect on gross profit and cash.

**Impact — `[INFERENCE]`:** A retail commercial leader could understand customer-side category actions while missing the supplier-side levers that materially determine margin, availability and working capital.

**Minimal correction:** Avoid adding a new lesson unless needed. Expand existing outcomes:

- Lesson 601: category and supplier economics;
- Lesson 603: lead time, minimum order quantity and payment terms as inventory/cash drivers;
- Lesson 605: rebates, bonuses and co-funded promotions, including their accounting limitations and net profitability effect.

### MEDIUM — Local-source gates are not explicit at every high-risk lesson

**Evidence — `[FACT]`:** The Roadmap gives a global source rule, and Lesson 206 names current Serbian sources. Lessons 605, 902, 904 and 1004 can also touch VAT, employment, governance or legal risk, but their catalog outcomes do not restate the source boundary.

**Impact — `[INFERENCE]`:** A future lesson can accidentally rely on a foreign book for a Serbian rule.

**Minimal correction:** At lesson creation, add a mandatory `Local authority boundary` section for 206, 605, 902, 904 and 1004. Use official current sources and mark professional-advice boundaries. Do not browse or pre-collect sources before the lesson becomes active unless specifically authorized.

### MEDIUM — Sales pipeline forecasting is only implicit

**Evidence — `[FACT]`:** Lesson 502 introduces funnel stages and Lesson 802 introduces forecast/scenario, but no outcome explicitly connects pipeline stage, probability, conversion, timing and revenue forecast.

**Impact — `[INFERENCE]`:** The curriculum can produce separate sales-funnel and budgeting knowledge without proving that the student can connect them operationally.

**Minimal correction:** Extend Lesson 802 or 803 with one `[FIXTURE]` pipeline-to-revenue forecast and a warning against treating probability-weighted pipeline as guaranteed revenue.

### LOW — Only four level gates contain the literal `[FIXTURE]` marker

**Evidence — `[FACT]`:** The global Roadmap rule applies to all lessons, but only four catalog gates explicitly contain `[FIXTURE]`; other gates use wording such as “simulirani” or omit the evidence label.

**Impact — `[INFERENCE]`:** The authority is still clear, but local gate wording is inconsistent.

**Minimal correction:** When the catalog is next revised, apply `[FIXTURE]` consistently to every pre-curriculum-completion gate. This is not a reason to create future lesson files now.

### LOW — Generic decision routing remains in the Lesson Template

**Evidence — `[FACT]`:** The template references `13_Decisions/`, while `AUTHORITY.md` separates business and system decisions.

**Impact — `[INFERENCE]`:** A future durable business application could be routed ambiguously.

**Minimal correction:** Replace the generic destination with `13_Decisions/business/` or instruct the mentor to resolve the exact canonical domain through `AUTHORITY.md`.

## Coverage assessment

| Capability area | Assessment | Evidence status |
|---|---|---|
| Business fundamentals and finance | Strong coverage | `[FACT]` from catalog and source map |
| Customer discovery and validation | Strong coverage | `[FACT]` |
| Business model, positioning and offer | Strong coverage | `[FACT]` |
| Sales and marketing | Core coverage, sources partial | `[FACT]` from source map |
| Retail/category management | Material supplier-side gap | `[INFERENCE]` from catalog comparison |
| Operations and systems | Strong coverage | `[FACT]` |
| Commercial management and analytics | Strong coverage; pipeline forecast implicit | `[INFERENCE]` |
| Leadership | Strong conceptual coverage; local-law gate required | `[INFERENCE]` |
| Strategy, scaling and CEO integration | Strong coverage | `[FACT]` |

## Required order of correction

1. Correct the Lesson Template evidence contract, real-data language and scoring gate.
2. Clarify the Level 6 supplier/trade economics scope without automatically increasing the lesson count.
3. Correct Lesson 001 under its separate readiness audit using the revised template rules.
4. Add source-boundary instructions when high-risk lessons become active.
5. Add pipeline-to-revenue forecasting to Lesson 802 or 803 when that lesson becomes active.
6. Continue creating exactly one lesson at a time according to Learning Progress.

## Final gate

`REVISE` — the 48 planned lessons do not need to be prewritten, and their catalog sequence is approved. The creation framework must be corrected before Lesson 002 is generated. Full content approval remains unavailable until each lesson exists and passes an individual CMO Auditor review.
