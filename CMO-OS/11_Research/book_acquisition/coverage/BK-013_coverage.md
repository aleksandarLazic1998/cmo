# BK-013 Coverage Evidence

status: `COMPLETED`  
book_id: `BK-013`  
title: `The Mom Test`  
author: `Rob Fitzpatrick`  
inspection_date: `2026-08-23`

## Source identity

- Source: `/home/aleksandar-lazic1998/Documents/Books/_OceanofPDF.com_The_Mom_Test_-_Rob_Fitzpatrick.pdf`
- SHA-256: `90cfaf56256057ffbcc4f443120354ced6c5ba52240da66c1f16e903fbf550f1`
- File size: `594127 bytes`
- PDF pages: `125`
- Extraction method: `pypdf sequential page extraction in five 25-page ranges`
- Visual method: `embedded-image scan + Poppler render of the only low-text page`

## Range evidence

Range SHA-256 je izračunat nad sekvencijalno spojenim, trimmed page text-om uz form-feed separator između stranica.

| PDF range | Pages | Extracted chars | Range SHA-256 | Empty pages | Semantic coverage |
|---|---:|---:|---|---:|---|
| 1–25 | 25 | 31,256 | `09025fd1de59f7423f422d3915333224741f46aebad1acda7bc3a38c2bfc596c` | 0 | Front matter, introduction, complete Chapter 1, start Chapter 2 |
| 26–50 | 25 | 38,626 | `1bc1857d5adfa1f0557aac8109cc1f13d91e7b181f26162b6e63211bcf171920` | 0 | Complete bad-data method, important-question method through zoom examples |
| 51–75 | 25 | 36,972 | `ba7f9665a3641e1f83ab01e9d024ee5a835e937b5de5088e839bdf22ed262955` | 0 | Product/market risk, list of three, casual conversations, commitment and advancement |
| 76–100 | 25 | 38,100 | `e66c72f2c9e67d2baf850ce9cc9ad07b48d95db33ea9ffaa083187f9f42c1748` | 0 | Early customers, conversation access, meeting framing, segmentation and slicing |
| 101–125 | 25 | 32,175 | `99d9de46ea0b8c552cbe9e798bc3d55d4b82b3914bcd807e9f67d3324f24a55e` | 0 | Stakeholders, complete team process, notes, conclusion, cheatsheet and acknowledgements |

## Extraction reconciliation

- Expected pages: `125`
- Accounted pages: `125`
- Expected extracted characters from inventory: `177,129`
- Range-sum extracted characters: `177,129`
- Missing ranges: `none`
- Extraction errors: `none`
- Embedded images detected by `pypdf`: `0`

## Visual exception review

- PDF page 89 contained only a source-site watermark (`14` extracted characters).
- Poppler render confirms that page 89 contains no omitted book content, diagram, table or illustration.
- Other 124 pages contain at least 100 extracted characters; symbol legend on pp. 109–110 is preserved in extraction and represented in the whole-book note.
- Visual exception status: `PASS`.

## Completion dependency

Whole-book note exists at `11_Research/book_acquisition/notes/BK-013_The_Mom_Test.md`. Completion audit: `90_AI/audits/2026-08-23_full_book_corpus/BK-013_AUDIT.md`, verdict `APPROVE`.
