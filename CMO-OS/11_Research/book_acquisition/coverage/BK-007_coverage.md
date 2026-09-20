# BK-007 Coverage Evidence

status: `COMPLETED`  
book_id: `BK-007`  
title: `Good Strategy / Bad Strategy — The Difference and Why It Matters`  
author: `Richard P. Rumelt`  
inspection_date: `2026-08-23`

## Source identity

- Source: `/home/aleksandar-lazic1998/Documents/Books/_OceanofPDF.com_Good_Strategy_Bad_Strategy_The_Difference_and_Why_It_Matters_-_Richard_Rumelt.pdf`
- SHA-256: `862eef8c2a5897030c443b5df9e2975b3e949b80392f1b632ce18a35f5af7109`
- File size: `2672148 bytes`
- PDF pages: `360` (`pdfinfo`: 360 pages, letter 612×792 pts, PDF 1.4, producer `calibre (0.8.7)`)
- Extraction method: `pdftotext -layout, page-by-page (one file per PDF page), then sequential semantic reading in contiguous page ranges`
- Visual method: `Poppler render of all 360 pages at 96 DPI + five complete-corpus contact-sheet reviews`
- Provenance note: `[FACT]` Kopija nosi „OceanofPDF.com“ trag na kraju svake stranice i calibre konverziju. Poreklo/licenca nije potvrđena; originalni PDF nije menjan i njegov puni tekst se ne čuva u CMO-OS.

## Range evidence

Range SHA-256 je izračunat nad sekvencijalno spojenim, trimmed page text-om uz form-feed separator između stranica. `Extracted chars` je zbir dužina trimmed page text-a i uključuje layout razmake; separatori nisu uračunati.

| PDF range | Pages | Extracted chars | Range SHA-256 | Empty pages | Semantic coverage |
|---|---:|---:|---|---|---|
| 1–72 | 72 | 130,895 | `f6b51dcb51e64a27455e148bac5fe7a1212a6d47928d589c4c3b8bd84407182f` | 1 | Cover, praise, front matter, contents, Introduction, Part I, Ch1 Good Strategy Is Unexpected, Ch2 Discovering Power, Ch3 Bad Strategy u celini, početak Ch4 |
| 73–144 | 72 | 153,404 | `dd8a5d63b836340e836d45d56dfa7f70898bb83e94e2928f492f7f742a3ef7c9` | none | Ostatak Ch4 (template-style, New Thought), Ch5 Kernel u celini, Part II, Ch6 Leverage, Ch7 Proximate Objectives, Ch8 Chain-Link Systems, veći deo Ch9 Using Design |
| 145–216 | 72 | 153,068 | `62fc705c7c0a60075e07fb6c0a03cc5b40bf9a96f07447e1f824f631fb4c9a65` | none | Kraj Ch9 (Paccar), Ch10 Focus, Ch11 Growth, Ch12 Using Advantage, Ch13 Using Dynamics, početak Ch14 |
| 217–288 | 72 | 155,002 | `0244e2a752bed3799493493b11f420d15c0241ca14e21e32ba554385c6a5ea06` | none | Ostatak Ch14 (Denton’s, GM), Ch15 Nvidia, Part III, Ch16 Science of Strategy, Ch17 Using Your Head, veći deo Ch18 |
| 289–360 | 72 | 75,782 | `0ac1da697f94feb894d76be6af1914f53961eec6e6371f406a994ef2a98f2fc4` | none | Kraj Ch18 (kriza 2008), kompletne Notes po poglavljima, acknowledgments, pun indeks, svih 17 fusnota, biografija autora |

## Extraction reconciliation

- Expected pages: `360`
- Accounted pages: `360`
- Range-sum extracted characters (layout-inclusive): `668,151`
- Non-whitespace character total across all 360 pages: `557,100` (≈1.550 znakova po stranici — gusta tekstualna knjiga)
- Sequential semantic read: `1–40; 41–80; 81–120; 121–160; 161–200; 201–240; 241–280; 281–320; 321–360`
- Missing ranges: `none`
- Extraction errors: `none`
- Empty text pages (1): `1`
- Other low-text pages, <200 non-whitespace chars (13): `5, 7, 8, 107, 208, 244, 343, 346, 348, 353, 354, 357, 359`

## Visual review

- Svih 360 stranica je renderovano Poppler-om; broj renderovanih fajlova (`360`) se poklapa sa PDF page count-om.
- Pet contact sheet-ova pokriva pp. `1–72`, `73–144`, `145–216`, `217–288` i `289–360`; svaki thumbnail je pregledan na nedostajuću stranicu, izgubljen dijagram ili grafikon, clipping i praznu semantiku.
- Jedina prazna tekstualna stranica p. 1 razrešena je vizuelno: to je puna naslovna korica („RICHARD RUMELT — GOOD STRATEGY / BAD STRATEGY“) renderovana kao slika, ne nedostajući sadržaj.
- Low-text stranice razrešene: pp. 5, 7, 8 su naslov, FSC oznaka i posveta; p. 107 i p. 244 su prazne prelazne stranice iza part divider-a; p. 208 je kraj poglavlja; pp. 343–359 su pojedinačne fusnote, po jedna na stranici.
- Netekstualni sadržaj potvrđen na renderu i uključen u sintezu: dijagram envelopment-a (p. 33), tabela snaga/slabosti David–Golijat (p. 37), Enron „bandwidth markets“ shema (p. 53), grafikon International Harvester prihoda/imovine/profita (pp. 55–56), tabela preferencija DEC menadžera (p. 73), template-style tabela vision/mission/values (pp. 80–81), Crown vs. majori dijagrami (pp. 152, 157–158), Crown grafikoni cene akcije i povrata na kapital (pp. 162–163), Denton’s hump chart (p. 222), GM/Toyota model-price dijagrami (pp. 225–229) i grafikon odnosa duga domaćinstava i raspoloživog dohotka (p. 288).
- Visual status: `PASS`.

## Visual evidence hashes

| Evidence | PDF pages | SHA-256 |
|---|---:|---|
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-007_visual-contact-sheet-1.png` | 1–72 | `2bd75113c8f398ece69692d3ebcece8ade5fd8983224f36de2d0646c5e90ee70` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-007_visual-contact-sheet-2.png` | 73–144 | `838439d8adae30af891aff2488ae578b3a4b48814f936307fdbf4631304403ab` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-007_visual-contact-sheet-3.png` | 145–216 | `2a780e29a4587b146b4027a4017cd2fa639e1ed52dd2a6b0a4008f55548e27fa` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-007_visual-contact-sheet-4.png` | 217–288 | `762215cdb9727cc878d1ed144878171cc97747368721dd621da5e552085d8aee` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-007_visual-contact-sheet-5.png` | 289–360 | `95174ca7a53aa30288968e634fbf7a0337ee6353a4813c044d1d8cd51e7fb143` |

## Structure reconciliation

- Independent boundary scan locates all 18 chapters at pp. `26, 36, 46, 71, 89, 108, 116, 126, 134, 151, 160, 169, 186, 209, 230, 245, 260, 277`.
- Part dividers: Part I p. `24`, Part II p. `106`, Part III p. `243`.
- End matter: Notes pp. `298–313`, Acknowledgments pp. `314–315`, Index pp. `316–342`, Footnotes pp. `343–359`, About the Author p. `360`.
- Cover, praise, rights, dedication, contents, Introduction, three parts, all 18 chapters, all figures/charts, complete notes, index, all footnotes and biography are represented in the whole-book structure map.

## Completion dependency

Whole-book note postoji na `11_Research/book_acquisition/notes/BK-007_Good_Strategy_Bad_Strategy.md`. Completion audit: `90_AI/audits/2026-08-23_full_book_corpus/BK-007_AUDIT.md`, verdict `APPROVE`.
