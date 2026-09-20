# Lesson 001 Readiness Audit

Date: `2026-08-21`  
Scope: Lesson 001, learning state, curriculum prerequisites, knowledge trace, assessment readiness and FigJam reference  
Action class: `READ` + `ANALYZE`  
Verdict: `REVISE`

## Executive conclusion

- `[FACT]` CMO OS routing, curriculum order and live learning state are consistent: Lesson 001 is the only active lesson, has no prerequisite and is not falsely marked completed.
- `[FACT]` The arithmetic shown in the lesson is correct under the unstated assumption that all monetary inputs use the same accounting basis.
- `[FACT]` The referenced FigJam board was readable on `2026-08-21` and contains the main business-result map plus separate goods and money sections.
- `[INFERENCE]` Lesson 001 should not resume from the visual map until the two high-severity findings below are corrected. They can teach an incorrect distinction between sales value, cash and profit.

## Audit baseline

Canonical sources reviewed:

- `AUTHORITY.md`
- `ROADMAP.md`
- `10_Daily/Learning_Progress.md`
- `02_Lessons/LESSON_CATALOG.md`
- `02_Lessons/Level_0/Lesson_001_How_a_Company_Makes_Money.md`
- `04_SOP/lesson_lifecycle.md`
- `99_Templates/Lesson_Template.md`
- `01_Knowledge/Knowledge_Graph.md`
- `01_Knowledge/Business_Glossary.md`
- `11_Research/Book_Source_Map.md`
- `90_AI/PLUGIN_REGISTRY.md`
- `90_AI/integrations/figma.md`

External visual evidence:

- System: Figma/FigJam
- File key: `x23fVAXvKPru3yFCAHeGlY`
- Node: root `0:1`
- Retrieval date: `2026-08-21`
- Method: read-only FigJam structure retrieval
- Intended canonical record: Lesson 001 visual aid; the board is not business truth

## Findings

### HIGH — Numerical scenarios are not explicitly marked `[FIXTURE]` and the accounting basis is undefined

**Evidence:** Lesson 001 calls Tehnocentar examples “illustrative”, but contains zero literal `[FIXTURE]` labels. Selling prices, purchase prices and operating costs do not state whether values include VAT or share the same accounting basis. `ROADMAP.md` and the Lesson Template require clearly marked `[FIXTURE]` data until the curriculum is complete.

**Impact:** A beginner can treat simulated Tehnocentar values as company facts or subtract a VAT-inclusive retail price from a VAT-exclusive purchase cost. The arithmetic would then be internally invalid even though the displayed subtraction is correct.

**Minimal correction:** Add one explicit fixture block covering every example, exercise and scenario. State grain (`one transaction`), currency (`RSD`), source (`CMO OS authored simulation`) and a consistent basis, preferably “all values exclude VAT”; alternatively state that VAT is intentionally ignored and all values use the same simplified basis.

### HIGH — The visual map conflates goods flow, cash flow and profit calculation

**Evidence:** The local Mermaid map links `Potreba kupca → Proizvod → Dobavljač` and `Prihod → Bruto profit → Operativni troškovi → Neto profit`. The FigJam money section links `Kupac plaća → Prihod → Plaćanje dobavljaču → Operativni troškovi → Neto profit`, omitting gross profit from that bridge.

**Impact:** The current restart point is the visual map. It can imply that revenue is the same as cash received, that the customer need causes a product to flow to the supplier, and that gross/net profit are sequential cash buckets rather than calculated results.

**Minimal correction:** Use three clearly named views:

1. value flow: customer need → offer/product → sale;
2. goods flow: supplier → store → customer;
3. result bridge: revenue − cost of goods sold = gross profit; gross profit − operating costs − interest − tax = net result.

Any FigJam modification is an external `EXECUTE` action and requires explicit user approval. The local Mermaid diagram may be corrected separately if authorized.

### MEDIUM — Revenue wording conflicts with the canonical glossary

**Evidence:** Lesson 001 says “Prihod je novac od prodaje.” The canonical glossary defines revenue as the total value of goods or services sold in a period. Revenue and cash are not always recognized at the same time.

**Impact:** The wording creates a misconception that Lesson 203 later has to undo.

**Minimal correction:** Define revenue as the value of sales. Add that cash is received immediately in a simple retail cash/card sale, while invoiced sales can create revenue before collection.

### MEDIUM — New terminology does not follow the Serbian/English teaching rule

**Evidence:** The lesson explains Serbian labels but does not systematically provide English equivalents for each new technical term. `ROADMAP.md` and the Lesson Template require simple Serbian meaning, Serbian professional term, English term and an example.

**Impact:** The lesson is structurally useful but not fully compliant with the approved learning method.

**Minimal correction:** Add a compact terminology table for customer value, revenue, cost of goods sold, gross profit, gross margin, operating expenses and net profit/net result.

### MEDIUM — Final assessment has points but no complete scoring key

**Evidence:** Section 12 lists four categories worth 25 points each, but does not map exact prompts, partial-credit criteria or the minimum evidence for a business decision. The practical exercise and scenario can supply the prompts, but the scoring boundaries are not defined.

**Impact:** Two mentors could grade the same answer differently, weakening the 80/100 evidence gate.

**Minimal correction:** Map each assessment category to an exact prompt and add a mentor rubric with full, partial and zero-credit criteria. Passing must still require practical application and a reasoned decision, not only 80 points.

### LOW — Template closure sections are absent

**Evidence:** The active lesson stops at section 13 and omits template sections 14–16: lesson completion, knowledge storage and mentor instructions.

**Impact:** No current state is lost because the SOP and Learning Progress contain the rules, but the lesson is not a complete template instance.

**Minimal correction:** Add pending completion fields and the Concept IDs that will be updated after a verified result.

### LOW — Learning Progress contains two wording ambiguities

**Evidence:** Lesson 001 appears in a table titled “Završene lekcije” while its row says “U toku”. The development focus mentions real Tehnocentar examples “kada podaci budu dostupni”, followed by the stricter rule that real data is prohibited until the curriculum is complete.

**Impact:** Canonical state is still clear, but a quick reader could misunderstand timing or completion status.

**Minimal correction:** Rename the table to “Status lekcija” and replace the real-data wording with the explicit post-curriculum gate.

## Calculation spot-checks

All checks below are `[FIXTURE]` and valid only if inputs share the same basis.

| Check | Recalculation | Result |
|---|---|---:|
| Main example gross profit | 60,000 − 50,000 | 10,000 RSD — verified |
| Main example contribution | 10,000 − 3,000 | 7,000 RSD — verified |
| Main example gross margin | 10,000 ÷ 60,000 × 100 | 16.6667%, shown as 16.7% — verified |
| Exercise gross profit | 90,000 − 78,000 | 12,000 RSD — verified |
| Exercise contribution | 12,000 − 4,000 | 8,000 RSD — verified |
| Scenario A gross profit | 60,000 − 50,000 | 10,000 RSD — verified |
| Scenario B gross profit | 63,000 − 51,000 | 12,000 RSD — verified |

## Controls that passed

- `[FACT]` Lesson Catalog contains 49 unique planned lessons and Lesson 001 has no prerequisite.
- `[FACT]` Only one lesson file is active.
- `[FACT]` Learning Progress preserves `[UNKNOWN]` ratings and does not invent assessment evidence.
- `[FACT]` Knowledge Graph keeps personal mastery outside the Knowledge domain.
- `[FACT]` No real Tehnocentar/PostHog values were found.
- `[FACT]` Required canonical files exist and are non-empty.
- `[FACT]` No active conflict markers were found.
- `[FACT]` FigJam remained a reference, not a parallel source of business truth.

## Readiness gate

`REVISE` — fix both HIGH findings before continuing Lesson 001 from the visual map. The MEDIUM findings should be corrected before the final assessment. No Learning Progress or Knowledge Graph update is authorized until Aleksandar completes the assessment with at least 80/100 and demonstrates application plus a reasoned business decision.

