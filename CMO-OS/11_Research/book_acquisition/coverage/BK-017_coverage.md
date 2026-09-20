# BK-017 Coverage Evidence

status: `COMPLETED`  
book_id: `BK-017`  
title: `The Lean Startup`  
author: `Eric Ries`  
inspection_date: `2026-08-23`

## Source identity

- Source: `/home/aleksandar-lazic1998/Documents/Books/the-lean-startup-how-todays-entrepreneurs-use-continuous-innovation-to-create-radically-successful-businesses-2017-currency-international-edition-9781524762407-1524762407-978-0-307-88791-7.pdf`
- SHA-256: `d48ff351de0e6cb75775552979c0aba4385ff7959fa931addcedde149b3ec4d8`
- File size: `1689180 bytes`
- PDF pages: `272`
- Extraction method: `pypdf sequential page extraction in four contiguous ranges; pdftotext -layout sequential semantic reading in contiguous page ranges`
- Visual method: `pypdf low-text/embedded-image scan + Poppler render of all pages + four complete-corpus contact-sheet reviews`

## Range evidence

Range SHA-256 je izračunat nad sekvencijalno spojenim, trimmed page text-om uz form-feed separator između stranica. `Extracted chars` isključuje separators.

| PDF range | Pages | Extracted chars | Range SHA-256 | Empty pages | Semantic coverage |
|---|---:|---:|---|---:|---|
| 1–68 | 68 | 115,409 | `34721de9cdda6c041ba12f3c75e50df50aba991d65ba9b6b9934eecd182ed22b` | 1, 2, 6, 24 | Front matter, Introduction, Part One, Chapters 1–3 and most of Chapter 4 |
| 69–136 | 68 | 139,381 | `a2da9c024cde720bdc7b933fc45a5bcf1029cfdd02f4070ba202be43f1e043f4` | none | Chapter 4 completion, Part Two, Chapters 5–7 and Chapter 8 start |
| 137–204 | 68 | 133,136 | `0e3482e873fc5d7f944eea4d83515694d5811e682e7c7b96300c61b04ed6b373` | none | Chapter 8 completion, Part Three, Chapters 9–10 and Chapter 11 start |
| 205–272 | 68 | 131,393 | `2ed0a8ed76560e97323e77d0c77ccdd2a39ba709439266d435fee4af018c9503` | none | Chapters 11–14, complete endnotes, disclosures, acknowledgments and author biography |

## Extraction reconciliation

- Expected pages: `272`
- Accounted pages: `272`
- Expected extracted characters from inventory: `519,319`
- Range-sum extracted characters: `519,319`
- Sequential semantic read: `1–24; 25–36; 37–48; 49–60; 61–72; 73–84; 85–96; 97–108; 109–120; 121–132; 133–144; 145–156; 157–168; 169–180; 181–192; 193–204; 205–216; 217–228; 229–240; 241–252; 253–264; 265–272`
- Missing ranges: `none`
- Extraction errors: `none` (one mistyped shell path was rejected before reading and immediately rerun against the correct source; it did not create a coverage gap)
- Empty text pages: `1, 2, 6, 24`
- Other low-text pages: `8, 20, 21, 30, 57, 64, 73, 137, 149, 163, 213, 252, 257`
- Embedded-image pages detected: `1, 2, 6, 10, 20–24, 26, 28–30, 41, 58, 72–74, 77, 88–89, 107, 114, 120, 127–128, 134, 136, 162–164, 167, 182–184, 192, 200, 222–224, 240, 250, 257, 267–268, 272`

## Visual review

- All 272 pages were rendered with Poppler at 96 DPI; rendered-page count reconciles to the source.
- Four contact sheets cover pp. `1–68`, `69–136`, `137–204` and `205–272`; every thumbnail was inspected for missing page, blank semantic content, clipping, diagram/table loss and extraction exception.
- Empty text pp. 1–2 are image covers, p. 6 is an image title page and p. 24 contains chart images; none is missing content.
- Part/chapter dividers explain the remaining very-low-text pages.
- Vision/strategy/product charts pp. 28–29, Build–Measure–Learn p. 74, IMVU cohort/vanity charts pp. 114 and 120, kanban pp. 127–128, pivot tables pp. 138–144, growth-engine charts pp. 192 and 197, and portfolio figure p. 223 were visibly present and reconciled with semantic reading.
- Endnotes pp. 257–266, disclosure p. 267 and all final pages were visibly present and read.
- Visual status: `PASS`.

## Visual evidence hashes

| Evidence | PDF pages | SHA-256 |
|---|---:|---|
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-017_visual-contact-sheet-1.png` | 1–68 | `d3d8b2c6bc5562916e72f4a977a8f04715d0f3948e1bb6941224548857547a39` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-017_visual-contact-sheet-2.png` | 69–136 | `8c13abdbb40eb8816fc34e970a44be41155da5a25b6908da2a8d8d80ba69a71a` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-017_visual-contact-sheet-3.png` | 137–204 | `3d77e1404b009d1482a55fb46ecdb37120aa5a3d84460e523a1ccb5832962a01` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-017_visual-contact-sheet-4.png` | 205–272 | `e075cb58fc244609eca92e9ad032e4f91e7e8f2d3a107e816908b817d3d11d3d` |

## Structure reconciliation

- Independent boundary scan locates Chapters 1–14 at pp. `21, 30, 41, 58, 77, 88, 107, 136, 167, 184, 200, 224, 240, 250`.
- Part dividers occur at pp. `20, 73, 163`; endnotes begin p. `257`, disclosures p. `267`, acknowledgments p. `268` and author biography p. `272`.
- Cover, acclaim, rights/dedication, contents, Introduction, three parts, 14 chapters, all figures/tables, full notes/disclosure and end matter are represented in the whole-book structure map.

## Completion dependency

Whole-book note exists at `11_Research/book_acquisition/notes/BK-017_The_Lean_Startup.md`. Completion audit: `90_AI/audits/2026-08-23_full_book_corpus/BK-017_AUDIT.md`, verdict `APPROVE`.
