# BK-004 Coverage Evidence

status: `COMPLETED`  
book_id: `BK-004`  
title: `Built to Sell`  
author: `John Warrillow`  
inspection_date: `2026-08-23`

## Source identity

- Source: `/home/aleksandar-lazic1998/Documents/Books/_OceanofPDF.com_Built_to_Sell_-_John_Warrillow.pdf`
- SHA-256: `656cbb284741937421e450d287238f9e7e049fe7abd6aef0fff7aee3f15b7164`
- File size: `740133 bytes`
- PDF pages: `145`
- Extraction method: `pypdf sequential page extraction in five 29-page ranges`
- Visual method: `pypdf embedded-image scan + Poppler render of all pages + contact-sheet review of all 62 embedded-image pages + individual review of the two model diagrams`

## Range evidence

Range SHA-256 je izračunat nad sekvencijalno spojenim, trimmed page text-om uz form-feed separator između stranica. `Extracted chars` isključuje separatore.

| PDF range | Pages | Extracted chars | Range SHA-256 | Empty pages | Semantic coverage |
|---|---:|---:|---|---:|---|
| 1–29 | 29 | 44,324 | `5ef47b5e87eef0df4785b78267398a17e79f92e136c61eff1ce116f81753f2ef` | 4 | Front matter, foreword, preface, acknowledgements and Chapters 1–2 through the initial specialization decision |
| 30–58 | 29 | 52,362 | `2caecfb5680e3fcec73df91fd08877d79f2278499f89ee59687631fd09cd7f94` | 0 | Tips 1–9: specialization, concentration, productized process, cash cycle, focus, sales engine and sales team |
| 59–87 | 29 | 53,343 | `7f46bfbbdea79af39f20be45e5ff6f36f50ff4de2bf28bb818311b57b15171c9` | 0 | Full operating-model transition, management layer, incentives, performance, valuation choice and broker search |
| 88–116 | 29 | 52,629 | `636b9806732a3c5105e1ecb2a0dede8f209a36cda595270eac2c9ffe8fc97f14` | 0 | Sale preparation, strategic buyers, management disclosure, LOI/due diligence/closing and implementation guide Step 1 |
| 117–145 | 29 | 50,133 | `dab3bd06f1e546a2f0601b4784f5870cc05e80dc61ba0cc72c3085f6970c9f84` | 0 | Recurring-revenue hierarchy, implementation Steps 2–8, 17-tip recap and resource appendix |

## Extraction reconciliation

- Expected pages: `145`
- Accounted pages: `145`
- Expected extracted characters from inventory: `252,791`
- Range-sum extracted characters: `252,791`
- Missing ranges: `none`
- Extraction errors: `none`
- Empty text pages: `1–4`
- Embedded-image pages: `62`, all reviewed

## Visual exception review

- All 145 pages were rendered with Poppler.
- PDF pp. 1–4 are image-based cover/title/front-matter pages; identity and title information are visible.
- Most detected images are decorative chapter numerals, typographic callouts or text boxes already preserved in extraction.
- PDF p. 115 contains the blank `Teachable × Valuable` plotting frame.
- PDF p. 116 contains the worked plot: branch posters high-teachable/low-value, SEO low-teachable/high-value and a logo process high on both axes. The synthesis retains the model and adds `repeatable` as the third gate from the surrounding text.
- No visually encoded model or evidence was omitted.
- Visual exception status: `PASS`.

## Completion dependency

Whole-book note exists at `11_Research/book_acquisition/notes/BK-004_Built_to_Sell.md`. Completion audit: `90_AI/audits/2026-08-23_full_book_corpus/BK-004_AUDIT.md`, verdict `APPROVE`.
