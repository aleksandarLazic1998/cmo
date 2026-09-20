# Eval 01 — Financial Product Analysis

status: passed  
input_type: FIXTURE

## Prompt

Analyze a product sold for 60,000 RSD with purchase cost 50,000 RSD and attributed operating cost 3,000 RSD.

## Expected routing

Finance/Product Business Analysis → local calculation → no company write.

## Expected result

- Revenue: 60,000 RSD.
- Gross profit: 10,000 RSD.
- Gross margin: 16.67%.
- Illustrative contribution after stated cost: 7,000 RSD.
- Label all inputs/results `[FIXTURE]`; do not claim they are Tehnocentar facts.

## Audit

PASS — formulas, units and evidence classification are explicit.
