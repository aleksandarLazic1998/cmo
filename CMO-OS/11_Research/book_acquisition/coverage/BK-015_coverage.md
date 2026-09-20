# BK-015 Coverage Evidence

status: `COMPLETED`  
book_id: `BK-015`  
title: `Who: The A Method for Hiring`  
authors: `Geoff Smart and Randy Street`  
inspection_date: `2026-08-23`

## Source identity

- Source: `/home/aleksandar-lazic1998/Documents/Books/_OceanofPDF.com_Who_-_Geoff_Smart.pdf`
- SHA-256: `eb1f4cee4eb034812f156492224de271bf52086447b5afe65d9002560a8fa925`
- File size: `1352478 bytes`
- PDF pages: `165`
- Extraction method: `pypdf sequential page extraction in five 33-page ranges`
- Visual method: `pypdf low-text/embedded-image scan + Poppler render of all pages + review contact sheet`

## Range evidence

Range SHA-256 je izračunat nad sekvencijalno spojenim, trimmed page text-om uz form-feed separator između stranica. `Extracted chars` isključuje separatore.

| PDF range | Pages | Extracted chars | Range SHA-256 | Empty pages | Semantic coverage |
|---|---:|---:|---|---:|---|
| 1–33 | 33 | 49,009 | `fd29745c15a83df3535a57d628f2df4af103776a381d02c643ccca77706488f1` | 1 | Front matter, introduction, hiring-problem claims, voodoo methods, A Method overview and scorecard foundations |
| 34–66 | 33 | 57,560 | `d1f05faf7d890ad23ddd7a0ec21e407ac75f743a0ccab9aefb8549362457acef` | 0 | Outcomes, competencies, culture, scorecard-to-strategy, complete sourcing system and screening interview start |
| 67–99 | 33 | 55,517 | `141cd6d46aa1be5342d8dba896b7d241abd87d47904a1c44b95b25188110f436` | 0 | Screening, chronological Who interview, master tactics, focused interview, reference method and skill-will decision model |
| 100–132 | 33 | 58,581 | `e79595e5e27f751e67ae85d18a9ce3e17f4d673c18faf6247b7291c5cd893020` | 0 | Warning signs, final selection, five-F selling, five waves, implementation and legal traps |
| 133–165 | 33 | 36,765 | `c9b35b4cde016c6b3a2c0d7602373e9d5f075bf208aebcb4365378cc11825591` | 0 | Team building, CEO study, development/succession, conclusion, footnotes, commercial material, biographies, acknowledgements and copyright |

## Extraction reconciliation

- Expected pages: `165`
- Accounted pages: `165`
- Expected extracted characters from inventory: `257,432`
- Range-sum extracted characters: `257,432`
- Missing ranges: `none`
- Extraction errors: `none`
- Empty text page: `1`
- Low-text watermark/title pages: `2, 4, 21, 142, 164`
- Embedded-image pages: `26`, all reviewed

## Visual exception review

- All 165 pages were rendered with Poppler.
- PDF pp. 1–4 contain cover/title/watermark front matter.
- The contact sheet preserves the A Method letter diagram, sample scorecard, sourcing and selection submodels, screening/Who/reference interview guides, skill-will bull’s-eye, five-F selling model, implementation chart and CEO-study figures.
- PDF p. 164 is publisher colophon/watermark material; no omitted book model.
- No visually encoded content was omitted from the synthesis.
- Visual exception status: `PASS`.

## Completion dependency

Whole-book note exists at `11_Research/book_acquisition/notes/BK-015_Who.md`. Completion audit: `90_AI/audits/2026-08-23_full_book_corpus/BK-015_AUDIT.md`, verdict `APPROVE`.
