# BK-002 Coverage Evidence

status: `COMPLETED`  
book_id: `BK-002`  
title: `$100M Offers`  
author: `Alex Hormozi`  
inspection_date: `2026-08-23`

## Source identity

- Source: `/home/aleksandar-lazic1998/Documents/Books/_OceanofPDF.com_100M_Offers_-_Alex_Hormozi.pdf`
- SHA-256: `12236eee167e52afdfe20d59ca270adb3fbc148b1bfd6b1f54e02352d65065d2`
- File size: `3256624 bytes`
- PDF pages: `206`
- Extraction method: `pypdf sequential page extraction in five contiguous ranges; pdftotext -layout semantic reading in thirteen contiguous page ranges`
- Visual method: `Poppler render of all pages + four complete-corpus contact sheets`

## Range evidence

Range SHA-256 je izračunat nad sekvencijalno spojenim, trimmed page text-om uz form-feed separator između stranica. `Extracted chars` isključuje separatore.

| PDF range | Pages | Extracted chars | Range SHA-256 | Empty pages | Semantic coverage |
|---|---:|---:|---|---:|---|
| 1–42 | 42 | 43,192 | `395af4b177a2a78fb56aaf53f580b27339939c21d241ed1a90966c904565ba9d` | 1 | Front matter, Start Here, Section I, offer definition and Pricing/Commodity chapter start |
| 43–83 | 41 | 56,376 | `b92c528266d66ed2c17bca7e7de4dc1b7fb280fc9cd7b1f64796b2d9ab49a50a` | 0 | Commodity completion, market/niche, premium pricing and Value Equation start |
| 84–124 | 41 | 50,192 | `d4c52092c4c00cf2a726bff50981663b0c238310abc2f811f9f2c6623485cfa2` | 1 | Value Equation, goodwill/review ask, divergent thinking, problem/solution and Trim & Stack core |
| 125–165 | 41 | 49,019 | `fe0c5328a3b020e32b4bd4bf1cd12d62173a5740491dabd48ebe2b78bd227562` | 0 | Offer stack completion, enhancement overview, scarcity, urgency and bonuses/partner offers |
| 166–206 | 41 | 55,197 | `dd0803c76ab4c101d60531a628069723eca6d199e047806042c1c56b3f53c157` | 0 | Bonuses completion, guarantee system, naming/fatigue, execution recap and all end promotion |

## Extraction reconciliation

- Expected pages: `206`
- Accounted pages: `206`
- Expected extracted characters from inventory: `253,976`
- Range-sum extracted characters: `253,976`
- Sequential semantic read: `1–16, 17–32, 33–48, 49–64, 65–80, 81–96, 97–112, 113–128, 129–144, 145–160, 161–176, 177–192, 193–206`
- Missing ranges: `none`
- Extraction errors: `none`
- Empty text pages: `1, 111`
- Other low-text pages: `3, 7, 13–16, 36–38, 76–78, 103, 112–113, 129–132, 142, 152, 159, 169, 186, 198–200`
- Embedded-image pages: `1, 2, 8, 16–17, 20–21, 23–24, 26–27, 33, 38–39, 45, 47, 49, 52, 55, 59, 62, 64, 66, 69, 78–79, 81, 91, 93, 95, 98–99, 103–104, 107, 111–113, 115, 120, 131–132, 136–140, 142–143, 152–153, 159–160, 169–170, 172, 186–189, 200`.

## Visual whole-source review

- All 206 pages were rendered with Poppler and the rendered-page count was reconciled to the source.
- Four contact sheets cover every PDF page: `1–52`, `53–104`, `105–156` and `157–206`.
- Visual review preserved cover/testimonials, section/chapter dividers, screenshots, agency cash-flow chart, market/value graphics, Value Equation, delivery cube, handwritten problem lists, sales–fulfillment continuum, offer-building diagrams, scarcity/demand graphs, guarantee tree, naming formula and final recap.
- PDF p. 111 is a photographed handwritten worksheet page with no extracted text; its problem/solution structure is already represented by surrounding text and was visually inspected.
- Charts and assigned-value examples were treated as source illustrations, not verified Tehnocentar facts or universal benchmarks.
- No visually encoded core model was omitted from the synthesis.
- Visual coverage status: `PASS`.

## Structure reconciliation

- Independent page scan detected substantive chapter starts at pp. `17, 26, 39, 49, 62, 79, 95, 98, 104, 114, 133, 143, 153, 160, 170, 187`.
- Section II–V dividers occur at pp. `36, 76, 129, 198`; execution chapter begins at p. `201`.
- Front matter, Start Here, Sections I–V, Chapters 1–16, execution recap and promotional end matter are represented in the whole-book structure map.

## Visual evidence hashes

- `BK-002_visual-contact-sheet-1.png`: `ebb84163037c3cf6a69811c2a2c7a94603a69ecb10e9af3717b1b81d5b64d358`
- `BK-002_visual-contact-sheet-2.png`: `a91cf06699c042d482e9cf1adf9c0b2079df3648db6d170e55f9d1900689c9aa`
- `BK-002_visual-contact-sheet-3.png`: `2cba50d180515993bef7941c02d7bf3123ad694fe958636de6000abf84b48b59`
- `BK-002_visual-contact-sheet-4.png`: `11f68dad5bac8723f01b9c9fb92dc20eeb094fe0eb1ccea7ed7ca29e092d6662`

## Completion dependency

Whole-book note exists at `11_Research/book_acquisition/notes/BK-002_100M_Offers.md`. Completion audit: `90_AI/audits/2026-08-23_full_book_corpus/BK-002_AUDIT.md`, verdict `APPROVE`.
