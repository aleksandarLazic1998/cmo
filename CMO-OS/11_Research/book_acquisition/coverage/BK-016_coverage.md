# BK-016 Coverage Evidence

status: `COMPLETED`  
book_id: `BK-016`  
title: `Business Model Generation`  
authors: `Alexander Osterwalder and Yves Pigneur`  
inspection_date: `2026-08-23`

## Source identity

- Source: `/home/aleksandar-lazic1998/Documents/Books/feismo.com-business-model-generation-pr_392cdc22664d50c95e5191c6dfdfe7ee.pdf`
- SHA-256: `db5465a6e8e981b26809f53c317bf94660d3fba41f6ce0e7c68e8337b9b01590`
- File size: `58474792 bytes`
- PDF pages: `288`
- PDF metadata title: `Business Model Generation: A Handbook for Visionaries, Game Changers, and Challengers`
- Extraction method: `pypdf sequential page extraction in four contiguous ranges; pdftotext -layout sequential semantic reading in contiguous 12-page ranges, with smaller reruns where output truncation could obscure a page`
- Visual method: `Poppler full-corpus render at 96 DPI + four complete contact-sheet reviews + pdfimages object-page reconciliation`

## Range evidence

Range SHA-256 je izračunat nad sekvencijalno spojenim, trimmed `pypdf` page text-om uz form-feed separator. `Extracted chars` isključuje separatore.

| PDF range | Pages | Extracted chars | Range SHA-256 | Empty pages | Semantic coverage |
|---|---:|---:|---|---:|---|
| 1–72 | 72 | 84,032 | `af13b2420f3d1245289a16e553fbd9dd9d47eced97343da22c972ae3ec69d857` | none | Front matter, contents, complete Canvas, Apple/use cases, Patterns introduction and Unbundling start |
| 73–144 | 72 | 94,851 | `bf050e5d59758abb1b56104fa50128bb1cf187495d276729c4fe81bdc5b1893b` | none | Long Tail, Multi-Sided, FREE, Open Models, pattern overview, Design and Customer Insights/Ideation start |
| 145–216 | 72 | 139,710 | `481da30ad4568054ffd699d174749056883ff9b607f093b6c01d4a35053faba0` | none | Ideation, Visual Thinking, Prototyping, Storytelling, Scenarios, obstacles and Strategy environment |
| 217–288 | 72 | 132,002 | `5ba37a999d990b1ed91816a689b473cc90d8a689af86f8118e89ac82be44aa25` | none | Evaluation/SWOT, Blue Ocean lens, multiple models, complete Process, Outlook, references and all end matter |

## Extraction reconciliation

- Expected pages: `288`
- Accounted pages: `288`
- Range-sum extracted characters: `450,595`
- Sequential semantic read: `1–12; 13–24; 25–36; 37–48; 49–60; 61–72; 73–84; 85–96; 97–108; 109–120; 121–132; 133–144; 145–156; 157–168; 169–180; 181–192; 193–204; 205–216; 217–228; 229–240; 241–252; 253–264; 265–276; 277–288`
- Targeted rereads after output truncation: `97–102; 103–108; 222–223; 235; 269–271; 282–285`
- Missing ranges: `none`
- Parser extraction errors: `none`
- Source repair warnings: `pypdf reported non-fatal wrong-pointing-object warnings on malformed cross-reference offsets; Poppler and pypdf both opened all 288 pages and no content/page loss was observed`
- Empty `pypdf` text pages: `none`; even image/blank-looking pages retain publisher artifact text, so empty-text count alone is not a useful visual-completeness measure for this source.
- Pages below 120 trimmed extracted characters: `2, 3, 16, 17, 24, 49, 51, 52, 54, 55, 58, 59, 62, 72, 80, 82, 92, 94, 97, 112, 114, 126, 127, 128, 129, 132, 140, 152, 155, 163, 166, 174, 176, 186, 189, 197, 198, 199, 202, 203, 219, 231, 246, 247, 248, 249, 268, 285`.
- `pdfimages` found raster-image objects on `157` distinct pages; the remaining visually meaningful diagrams are vector/text/layout content and were covered by full rendering.

## Visual review

- All `288` PDF pages were rendered with Poppler at 96 DPI; render count reconciles to source page count.
- Four contact sheets cover pp. `1–72`, `73–144`, `145–216` and `217–288`; every thumbnail was inspected for missing page, unintended blank content, clipping, extraction/layout loss, diagram/table and end-matter continuity.
- The source is deliberately visual. The complete nine-block Canvas sequence, annotated examples, pattern diagrams, Empathy Map, ideation epicenters, visual-thinking sequences, prototype scales, scenario matrices, environment map, SWOT forms, Blue Ocean diagrams, multiple-model portfolios, five-phase process and organization/IT alignment figures are visibly present.
- Low-text pages correspond to covers, section/technique dividers, full-bleed titles, Canvas diagrams, visual transitions or intentional whitespace. PDF pp. `198–199` and `285` are intentional near-blank/blank transition pages in the page sequence, not lost extraction.
- Canvas spans and all pattern/case maps are readable in full renders. Text extraction order is occasionally non-linear because of the two-column visual layout; semantic reading was reconciled against the visible page.
- Final source sequence includes references, launch response/testimonials, an intentional blank, the Canvas for the book itself, core-team biographies and back cover; all were read/inspected.
- Visual status: `PASS`.

## Visual evidence hashes

| Evidence | PDF pages | SHA-256 |
|---|---:|---|
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-016_visual-contact-sheet-1.png` | 1–72 | `59247bbc261622525281db38de3035c1aa24c3ad20053d810fcbc304dc7f4f0b` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-016_visual-contact-sheet-2.png` | 73–144 | `b7b58b886f0cb3b659023ec6765b070e48e837695d9efed55355da68880f3281` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-016_visual-contact-sheet-3.png` | 145–216 | `17903617646d0040b06b5eb32628aa78b5eba66ca73c4f769c00ad0f8ff2df71` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-016_visual-contact-sheet-4.png` | 217–288 | `9f51d8e39b453e18ebd97ea462612577a50f9d0eff1d6adb1b0619ee05e70095` |

## Structure reconciliation

- Part dividers/title routes: Canvas pp. `16–19`; Patterns pp. `58–61`; Design pp. `128–132`; Strategy pp. `202–205`; Process pp. `248–250`; Outlook p. `268`.
- Canvas core: definition/nine blocks pp. `20–47`; templates/use pp. `48–55`.
- Pattern route: Unbundling pp. `62–71`; Long Tail pp. `72–81`; Multi-Sided pp. `82–93`; FREE pp. `94–113`; Open Business Models pp. `114–127`.
- Design route: Customer Insights pp. `132–139`; Ideation pp. `140–151`; Visual Thinking pp. `152–165`; Prototyping pp. `166–175`; Storytelling pp. `176–185`; Scenarios pp. `186–197`.
- Strategy route: Environment pp. `205–217`; Evaluation/SWOT pp. `218–225`; Blue Ocean lens pp. `226–231`; Multiple Models pp. `232–247`.
- Process/Outlook/end matter: process pp. `248–267`; Outlook pp. `268–275`; references p. `276`; market response and other end matter pp. `277–281`; imposed repeated/final PDF sequence through p. `288`.
- Whole-book structure in the note accounts for every page and all named sections in the source contents.

## Completion dependency

Whole-book note exists at `11_Research/book_acquisition/notes/BK-016_Business_Model_Generation.md`. Completion audit: `90_AI/audits/2026-08-23_full_book_corpus/BK-016_AUDIT.md`, verdict `APPROVE`.
