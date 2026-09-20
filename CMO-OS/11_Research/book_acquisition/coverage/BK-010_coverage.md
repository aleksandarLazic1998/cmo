# BK-010 Coverage Evidence

status: `COMPLETED`  
book_id: `BK-010`  
title: `Profit First`  
author: `Mike Michalowicz`  
inspection_date: `2026-08-23`

## Source identity

- Source: `/home/aleksandar-lazic1998/Documents/Books/_OceanofPDF.com_Profit_First__A_Simple_System_To_Transform_-_Mike_Michalowicz.pdf`
- SHA-256: `6a598f59f4fb2956e36404ab2bdbfa15595871efe44478205fe0d3e4fde7e6e9`
- File size: `1453737 bytes`
- PDF pages: `196`
- Extraction method: `pypdf sequential page extraction in four contiguous ranges; pdftotext -layout sequential semantic reading in contiguous page ranges`
- Visual method: `pypdf low-text/embedded-image scan + Poppler render of all pages + four complete-corpus contact-sheet reviews`

## Range evidence

Range SHA-256 je izračunat nad sekvencijalno spojenim, trimmed page text-om uz form-feed separator između stranica. `Extracted chars` isključuje separatore.

| PDF range | Pages | Extracted chars | Range SHA-256 | Empty pages | Semantic coverage |
|---|---:|---:|---|---:|---|
| 1–49 | 49 | 81,769 | `f79e3639c84309a5dba222db0c1ccee791c74a0db3d0f91f187f3534c7337454` | 1–2 | Front matter, Introduction, Chapters 1–2 and Chapter 3 start |
| 50–98 | 49 | 87,739 | `a4b900cb38f414af25b371db2a02d67801740612b2abdb7c3722f76d10acf669` | none | Chapters 3–5 complete and Chapter 6 start |
| 99–147 | 49 | 97,682 | `2cbf1327459dea4afd28f20003876676dc8adf696f1bb962c17e92dd30ab8284` | none | Chapters 6–7 complete and Chapter 8 through accountability/implementation material |
| 148–196 | 49 | 87,488 | `53e652ffa683d66e4eebcd3eb4e226f49bb77260cc36b449454857f381d4d53c` | none | Chapter 8 completion, Chapters 9–12 and all end matter |

## Extraction reconciliation

- Expected pages: `196`
- Accounted pages: `196`
- Expected extracted characters from inventory: `354,678`
- Range-sum extracted characters: `354,678`
- Sequential semantic read: `1–16; 17–32; 33–48; 49–64; 65–80; 81–96; 97–112; 113–128; 129–144; 145–160; 161–176; 177–192; 193–196`
- Missing ranges: `none`
- Extraction errors: `none`
- Empty text pages: `1–2`
- Other low-text pages: `6, 196`
- Embedded-image pages detected: `1–2, 29, 41, 52, 55–56, 94, 159, 196`

## Visual review

- All 196 pages were rendered with Poppler; rendered-page count reconciles to the source.
- Four contact sheets cover pp. `1–49`, `50–98`, `99–147` and `148–196`. Every thumbnail was inspected for missing page, blank semantic content, clipping, figure/table loss and extraction exception.
- PDF pp. 1–2 are image cover/title pages and explain the only empty-text exceptions; pp. 6 and 196 are valid low-text dedication/end-matter pages.
- Core model diagram on p. 29, time graph on p. 41, Instant Assessment/TAP tables on pp. 52, 55–56 and 94, and advanced-allocation table on p. 159 were visibly present and reconciled with semantic reading.
- The full table of contents, all 12 chapter starts and final additional-books page were visually confirmed.
- Visual status: `PASS`.

## Visual evidence hashes

| Evidence | PDF pages | SHA-256 |
|---|---:|---|
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-010_visual-contact-sheet-1.png` | 1–49 | `981d1ec5d71e746bc966bbb339828b7d9e00319695b7c818eed9c75ebf348540` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-010_visual-contact-sheet-2.png` | 50–98 | `2b95d4fd002a21e30d87ff9632d50caf9163ea4b8c2012278ee073fd749e9ebe` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-010_visual-contact-sheet-3.png` | 99–147 | `2be076feaf8596e98fcf8a3ab9fc77b589ff239ab15a00fffa9a777a61332823` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-010_visual-contact-sheet-4.png` | 148–196 | `463e76f99421923e374139fce7275076acced708524b8038a7fb14a5555d3303` |

## Structure reconciliation

- Independent boundary scan locates Chapters 1–12 at pp. `24, 39, 48, 63, 77, 98, 121, 134, 152, 169, 184, 193`.
- Front matter is present on pp. 1–9, introduction on pp. 10–23 and final additional-books page on p. 196.
- Cover/title/copyright/praise/dedication, contents, acknowledgments, Introduction, all 12 chapters, diagrams, assessment/allocation tables, resources and end matter are represented in the whole-book structure map.
- A source calendar error (`September 31`) was caught during complete reading and explicitly excluded from operational use.

## Completion dependency

Whole-book note exists at `11_Research/book_acquisition/notes/BK-010_Profit_First.md`. Completion audit: `90_AI/audits/2026-08-23_full_book_corpus/BK-010_AUDIT.md`, verdict `APPROVE`.
