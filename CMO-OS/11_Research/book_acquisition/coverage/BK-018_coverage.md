# BK-018 Coverage Evidence

status: `COMPLETED`  
book_id: `BK-018`  
title: `Value Proposition Design`  
authors: `Alexander Osterwalder, Yves Pigneur, Greg Bernarda, Alan Smith`  
inspection_date: `2026-08-23`

## Source identity

- Source: `/home/aleksandar-lazic1998/Documents/Books/toaz.info-value-proposition-design-pr_a867102f4bc3dd58a0db6bbce59bbbe2.pdf`
- SHA-256: `519de86319de19863843f01e698803127917bf3baec3a1845a2cea9601421e5d`
- File size: `32184624 bytes`
- PDF pages: `324` (`pdfinfo` reports 324; letter 612×792 pts; PDF 1.6; producer `pdfjs v2.4.3`)
- Extraction method: `pdftotext -layout, page-by-page (one file per PDF page), then sequential semantic reading in contiguous ranges`
- Visual method: `Poppler render of all 324 pages at 96 DPI + five complete-corpus contact-sheet reviews`
- Provenance flag: `[FACT]` PDF page 1 is an Academia.edu scrape wrapper ("Accelerating the world's research", uploader name, related-papers list). It is not part of the work. The copy's origin/licence is unverified; the original PDF is not modified and is not stored in CMO-OS.

## Range evidence

Range SHA-256 je izračunat nad sekvencijalno spojenim, trimmed page text-om uz form-feed separator između stranica. `Extracted chars` je zbir dužina trimmed page text-a i **uključuje layout razmake** koje `pdftotext -layout` zadržava; separatori nisu uračunati.

| PDF range | Pages | Extracted chars | Range SHA-256 | Empty pages | Semantic coverage |
|---|---:|---:|---|---|---|
| 1–65 | 65 | 122,836 | `69645216120c970b32a767868865f341698ac82527ffabe5668a4e0f2d2c9902` | 2, 3, 33, 34, 40, 56 | Wrapper, front matter, uvod VI–XXV, Part 1 divider, Canvas anatomija, 1.1 Customer Profile u celini, 1.2 Value Map do Pain Relievers |
| 66–130 | 65 | 136,568 | `cd23b1727a8abcf7a8e1cda1f9f016e2adb272ab9d5bc8a0d6c391a2dcb2407e` | 70 | Kraj Value Map-a, 1.3 Fit u celini (tri fit-a, B2B akteri, multiple fits, bioskop, kontekst, alternative), Part 2 divider, 2.1 Prototyping, 2.2 Starting Points, push/pull, high-value jobs, six ways to innovate |
| 131–195 | 65 | 195,273 | `3f1f55ea8898aeb82748f858c4baeb767621181efd06d3f2eb9e5ede02c30405` | none | 2.3 Understanding Customers (šest tehnika, intervju pravila, anthropologist, patterns, earlyvangelist), 2.4 Making Choices (10 pitanja, role-play, environment map, strategy canvas, kritika, hats, dotmocracy, kriterijumi), 2.5 Business Model (Azuri, MedTech, 7 pitanja), 2.6 Established Organizations do Hilti |
| 196–260 | 65 | 258,865 | `cce75910bf76b0ceed0a1e3cbe0abd97de2955dd05d3013307bf95a297b18505` | 218 | Workshop postavka i agenda, Part 3 divider, principi testiranja, customer development, lean startup integracija, 3.1 What to Test (krug/kvadrat/pravougaonik), 3.2 Step-by-Step (hipoteze, Test Card, Learning Card, brzina učenja, pet zamki, prazni obrasci), 3.3 Experiment Library do landing page/split testing |
| 261–324 | 64 | 136,687 | `c85ed2a792d2c31e367308b725e3172ee6633eb0ec393d2cf31a6c1b5cc337b9` | 287, 288, 302, 320, 321, 322 | Innovation Games, mock sales/presales, 3.4 Bringing It All Together (petlja, progress indicators, Progress Board, Owlet), Part 4 divider, Evolve u celini, Taobao, afterword, glossary, tim, prereaders, bios, kompletan indeks, back cover, EULA |

## Extraction reconciliation

- Expected pages: `324`
- Accounted pages: `324`
- Range-sum extracted characters (layout-inclusive): `850,229`
- Non-whitespace character total across all 324 pages: `246,653` — `[FACT]` niska gustina teksta je očekivana: knjiga je dizajnirana kao vizuelni radni materijal, a značenje mnogih stranica nosi ilustracija, canvas ili sticky-note raspored, ne tekstualni tok.
- Sequential semantic read: `1–40; 41–150; 151–240; 241–324`
- Missing ranges: `none`
- Extraction errors: `none`
- Empty text pages (14): `2, 3, 33, 34, 40, 56, 70, 218, 287, 288, 302, 320, 321, 322`
- Other low-text pages, <200 non-whitespace chars (45): `4, 24, 29, 30, 31, 39, 55, 57, 59, 61, 69, 92, 93, 94, 95, 97, 103, 104, 115, 116, 133, 134, 148, 149, 171, 200, 201, 202, 203, 205, 206, 217, 225, 226, 243, 244, 268, 282, 283, 284, 285, 303, 304, 323, 324`

## Visual review

- Svih 324 stranica je renderovano Poppler-om; broj renderovanih fajlova (`324`) se poklapa sa PDF page count-om.
- Pet contact sheet-ova pokriva pp. `1–65`, `66–130`, `131–195`, `196–260` i `261–324`; svaki thumbnail je pregledan na nedostajuću stranicu, izgubljeni dijagram/tabelu, clipping i praznu semantiku.
- Sve prazne tekstualne stranice su razrešene vizuelno: pp. 2–3 i 320–322 su stvarno prazne stranice izdanja; pp. 33–34, 40, 56, 70, 205–206, 287–288 su full-bleed ilustracije; p. 218 je ilustracija uz „What to Test“; p. 302 je puni žuti divider.
- Ključni vizuelni sadržaj potvrđen na renderu: Business Model Canvas p. 20, Value Proposition Canvas pp. 28 i 90, profil „business book reader“ pp. 48 i 50, fit sa check/X oznakama pp. 73–74, tri vrste fit-a pp. 77–78, B2B akteri p. 79, environment map pp. 155–156, strategy canvas pp. 157–158, kriterijumi i bodovanje pp. 169–170, Azuri verzije modela pp. 175–180, MedTech poređenje pp. 183–184, sedam pitanja pp. 185–186, Hilti pre/posle pp. 193–194, testing overview pp. 227–228, Test/Learning Card pp. 233–236 i 241–242, pet zamki pp. 239–240, experiment matrica pp. 245–246, landing-page levak pp. 257–258, split test naslova p. 260, Owlet iteracije pp. 275–280, Taobao modeli pp. 297–300, i pun indeks pp. 311–319.
- Foto-stranice pp. 200, 244 i 282 (radionice, materijali, grafikon profesija iz 1.119 odgovora) su prisutne i čitljive.
- Visual status: `PASS`.

## Visual evidence hashes

| Evidence | PDF pages | SHA-256 |
|---|---:|---|
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-018_visual-contact-sheet-1.png` | 1–65 | `d3a9939b6237dc8c9434f469db36353a4e94b4df86506aecef469c9e86b8884c` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-018_visual-contact-sheet-2.png` | 66–130 | `9dd7f0651c2124fdbe7c77e4a83049bbbe6011c4169a6edb262e046a2dbdb692` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-018_visual-contact-sheet-3.png` | 131–195 | `db5579cbb8921f7d77c947db4893dacdb629ab28b9c8bd4e48511c5abb09c275` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-018_visual-contact-sheet-4.png` | 196–260 | `405ca3d7b84b9fa97fd293552563509ab3cf70593be629ff0f6e19491d65ae39` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-018_visual-contact-sheet-5.png` | 261–324 | `1047226779ee2d02d262c677da388860eb536d4eb285d44ff6055a6d969545ff` |

## Structure reconciliation

- Book page → PDF page offset je konstantan: `PDF = book page + 29` (provereno na Customer Profile p. 10 → PDF 39, Glossary p. 276 → PDF 305, Index p. 282 → PDF 311).
- Part dividers: Canvas pp. `29–31`, Design pp. `93–95`, Test pp. `201–203`, Evolve pp. `283–285`, Afterword pp. `303–304`.
- Sekcije: 1.1 p. `39`, 1.2 p. `55`, 1.3 p. `69`; 2.1 p. `103`, 2.2 p. `115`, 2.3 p. `133`, 2.4 p. `149`, 2.5 p. `171`, 2.6 p. `187`; 3.1 p. `217`, 3.2 p. `225`, 3.3 p. `243`, 3.4 p. `267`; Evolve sekcije pp. `289`, `291`, `293`, `295`; Taobao p. `297`; Glossary p. `305`; Core Team p. `307`; Prereaders p. `308`; Bios p. `309`; Index pp. `311–319`; EULA p. `324`.
- Sve četiri celine, 13 potpoglavlja, svi slučajevi, sve vežbe i celo end matter predstavljeni su u whole-book structure mapi.

## Completion dependency

Whole-book note postoji na `11_Research/book_acquisition/notes/BK-018_Value_Proposition_Design.md`. Completion audit: `90_AI/audits/2026-08-23_full_book_corpus/BK-018_AUDIT.md`, verdict `APPROVE`.
