# BK-009 Coverage Evidence

status: `COMPLETED`  
book_id: `BK-009`  
title: `Obviously Awesome`  
author: `April Dunford`  
inspection_date: `2026-08-23`

## Source identity

- Source: `/home/aleksandar-lazic1998/Documents/Books/_OceanofPDF.com_Obviously_Awesome_-_April_Dunford.pdf`
- SHA-256: `a421fda8b8d02d5cfbf763dd0a55350a6298fcb7a10cad99d6b3c520d1db5244`
- File size: `3602989 bytes`
- PDF pages: `140`
- Extraction method: `pypdf sequential page extraction in five 28-page ranges`
- Visual method: `pypdf embedded-image scan + Poppler render of all pages + contact-sheet review of every image/low-text page`

## Range evidence

Range SHA-256 je izračunat nad sekvencijalno spojenim, trimmed page text-om uz form-feed separator između stranica. `Extracted chars` isključuje separatore, pa se zbir usklađuje sa inventory total-om.

| PDF range | Pages | Extracted chars | Range SHA-256 | Empty pages | Semantic coverage |
|---|---:|---:|---|---:|---|
| 1–28 | 28 | 26,392 | `45c298c77ea1981fd8951bbfd9732a9cd495baf9d5dc4b8b70a7718cab09d4e1` | 7 | Front matter, introduction, Part I opening and the meaning/context of positioning |
| 29–56 | 28 | 46,427 | `a54e796b9c1396e7fafdf4922cfda4c014a0eb5e44da875fd515976e410977d3` | 0 | Context examples, default-position traps, five-plus-one components and their dependency flow |
| 57–84 | 28 | 39,822 | `8ce6665c3be18f664fa6196002d8137f0c8a25aebda817d80db2f391220b9fc3` | 2 | Part II and Steps 1–6 through attribute-to-value mapping |
| 85–112 | 28 | 49,685 | `1ac7905f8f5700157ffaf5ed6208c0ce92b4f5d672daf854453d5b7b4c8f6385` | 0 | Steps 6–8: value themes, segmentation, market frame and three positioning styles |
| 113–140 | 28 | 35,733 | `6b18e8c62462793b84c4a0ed5964b76910a4d3a7684e3816dcfb639c92b61aa0` | 2 | Category creation, trend layer, capture, sales story, implementation, monitoring, conclusion and author material |

## Extraction reconciliation

- Expected pages: `140`
- Accounted pages: `140`
- Expected extracted characters from inventory: `198,059`
- Range-sum extracted characters: `198,059`
- Missing ranges: `none`
- Extraction errors: `none`
- Empty text pages: `1, 7–10, 25–26, 57–58, 125–126`
- Embedded-image pages: `1, 7–10, 25–26, 37–38, 56–58, 118–119, 125–126`

## Visual exception review

- All 140 pages were rendered with Poppler; every low-text and embedded-image page was included in a reviewed contact sheet.
- PDF p. 1 is the cover; pp. 7–10 are image-based title/copyright/dedication pages.
- PDF pp. 25–26, 57–58 and 125–126 are part dividers and intentionally sparse graphic/blank pages.
- PDF pp. 37–38 show the cake/muffin/lollipop/cake-pop framing example described in the synthesis.
- PDF p. 56 shows the dependency flow from competitive alternatives through attributes, value and target customers to market category, with optional trends.
- PDF pp. 118–119 show the product-strength/market-context/trend overlap; the visual distinction is retained in the note.
- No visually encoded material was omitted from the whole-book note.
- Visual exception status: `PASS`.

## Completion dependency

Whole-book note exists at `11_Research/book_acquisition/notes/BK-009_Obviously_Awesome.md`. Completion audit: `90_AI/audits/2026-08-23_full_book_corpus/BK-009_AUDIT.md`, verdict `APPROVE`.
