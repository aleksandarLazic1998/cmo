# BK-006 Coverage Evidence

status: `COMPLETED`  
book_id: `BK-006`  
title: `Financial Intelligence`  
authors: `Karen Berman; Joe Knight; John Case`  
inspection_date: `2026-08-23`

## Source identity

- Source: `/home/aleksandar-lazic1998/Documents/Books/_OceanofPDF.com_Financial_Intelligence_A_Managers_Guide_to_Knowing_What_the_Numbers_Really_Mean_-_KAREN_BERMAN__JOE_KNIGHT_With_JOHN_CASE.pdf`
- SHA-256: `b73fbefe47db1c3b352c32a0bef97452f59bb7e773841fcb1b68fac5a133f394`
- File size: `2421123 bytes`
- PDF pages: `221`
- Extraction method: `pypdf sequential page extraction in five contiguous ranges; pdftotext -layout sequential semantic reading in contiguous page ranges`
- Visual method: `pypdf low-text/embedded-image scan + Poppler render of all pages + four complete-corpus contact-sheet reviews`

## Range evidence

Range SHA-256 je izračunat nad sekvencijalno spojenim, trimmed page text-om uz form-feed separator između stranica. `Extracted chars` isključuje separatore.

| PDF range | Pages | Extracted chars | Range SHA-256 | Empty pages | Semantic coverage |
|---|---:|---:|---|---:|---|
| 1–45 | 45 | 70,973 | `057b216e350255f0f1691143b5797e167e0b2e8a86e72de4ecc730271b67aeee` | 1 | Front matter, Part One, Chapters 1–3, Part One Toolbox, Part Two and Chapters 4–5 start |
| 46–89 | 44 | 79,137 | `2567a9a18eca911306bf1a3372b384498645a610f8eb9de6b2ddab184687139a` | 0 | Chapters 5–10 through complete assets discussion |
| 90–133 | 44 | 67,641 | `931791a61d68ea6999d2df6e5167c675b748bc94e01426fff74c72cb331c5466` | 0 | Liabilities/equity, three-statement connection, cash, reconciliation, free cash flow and Part Five start |
| 134–177 | 44 | 71,102 | `e7f28a0a5e81ffc3f3eead5dd1e0e3f59158023e5799520959788753d3237749` | 0 | Ratios, DuPont relation, time value, hurdle rate, payback/NPV and IRR start |
| 178–221 | 44 | 67,596 | `d302a18d3e2a540c122dfd30463a1b10ebc2a989267740cbcfa678813c8890be` | 0 | IRR/NPV comparison, capital toolbox, working capital, cash conversion, financial literacy, appendix and all end matter |

## Extraction reconciliation

- Expected pages: `221`
- Accounted pages: `221`
- Expected extracted characters from inventory: `356,449`
- Range-sum extracted characters: `356,449`
- Sequential semantic read: `1–16; 17–32; 33–48; 49–56; 57–64; 65–72; 73–80; 81–88; 89–96; 97–104; 105–112; 113–120; 121–128; 129–136; 137–144; 145–152; 153–160; 161–168; 169–176; 177–184; 185–192; 193–200; 201–208; 209–216; 217–221`
- Missing ranges: `none`
- Extraction errors: `none`
- Empty text pages: `1`
- Other low-text pages: `11, 36, 72, 88, 105, 135, 164, 183, 197, 208`
- Embedded-image pages detected: `1, 4, 7, 11, 12, 18, 25, 34, 36, 37, 42, 49, 54, 65, 70, 72, 73, 79, 89, 94, 97–98, 102, 105–106, 110, 112, 114, 117, 121, 124–126, 128–129, 133, 135–136, 142–146, 148–150, 152–153, 155–159, 161, 163, 165, 171, 174–175, 181, 183–184, 186–187, 192, 194, 196–198, 204, 207, 209, 211, 213–216, 218, 221`

## Visual review

- All 221 pages were rendered with Poppler at 96 DPI; rendered-page count reconciles to the source.
- Four contact sheets cover pp. `1–56`, `57–112`, `113–168` and `169–221`. Every thumbnail was inspected for missing page, blank semantic content, clipping, chart/table/image loss and extraction exception.
- PDF p. 1 is an image cover and the only empty-text page.
- Low-text pages are part/chapter/toolbox dividers or end-matter transitions, not missing content.
- Financial tables on pp. 59, 66, 93–95, 98–99, 112–114, 124–128, 143–160, 169–180 and 213–216 were visibly present and reconciled with the sequential semantic reading.
- Figures on pp. 186 and 194–195 and Money Map on p. 208 were visually inspected and incorporated into the working-capital and learning-system synthesis.
- Visual status: `PASS`.

## Visual evidence hashes

| Evidence | PDF pages | SHA-256 |
|---|---:|---|
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-006_visual-contact-sheet-1.png` | 1–56 | `30d91bc5d47d937553fcd7a8fb321d2a33f77a50f43439ea95d36a2442b8784d` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-006_visual-contact-sheet-2.png` | 57–112 | `568906b05587067d1667b466ba72a3da633cfab59d3dcda6e18b527d8ea0a77f` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-006_visual-contact-sheet-3.png` | 113–168 | `14dfe8296658af806d235e589a0d243c8d760cad83bdcfe8ac09507119afda89` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-006_visual-contact-sheet-4.png` | 169–221 | `acf771010005450c395a5cb0cd8cffd1503d829f2f32311cd3780d8197a78f94` |

## Structure reconciliation

- Independent boundary scan locates Chapters 1–31 at pp. `12, 18, 25, 37, 42, 49, 54, 65, 74, 80, 90, 96, 97, 106, 110, 117, 121, 129, 136, 142, 148, 152, 155, 165, 172, 185, 187, 194, 199, 204, 209`.
- Part dividers occur at pp. `11, 36, 73, 105, 135, 164, 184, 198`.
- Toolbox sections occur at pp. `34, 70, 104, 133, 161, 182, 197, 211`; appendix begins at p. `213`, notes at p. `217`, acknowledgments at p. `218` and author biographies at p. `221`.
- Cover, title/copyright/dedication, full contents, preface, eight parts, 31 chapters, eight toolbox sections, appendix, source notes, acknowledgments and author material are represented in the whole-book structure map.

## Completion dependency

Whole-book note exists at `11_Research/book_acquisition/notes/BK-006_Financial_Intelligence.md`. Completion audit: `90_AI/audits/2026-08-23_full_book_corpus/BK-006_AUDIT.md`, verdict `APPROVE`.
