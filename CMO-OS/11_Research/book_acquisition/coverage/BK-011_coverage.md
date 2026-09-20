# BK-011 Coverage Evidence

status: `COMPLETED`  
book_id: `BK-011`  
title: `Scaling Up: How a Few Companies Make It… and Why the Rest Don't (Mastering the Rockefeller Habits 2.0)`  
authors: `Verne Harnish and the team at Gazelles`  
inspection_date: `2026-08-23`

## Source identity

- Source: `/home/aleksandar-lazic1998/Documents/Books/_OceanofPDF.com_Scaling_Up_-_Verne_Harnish.pdf`
- SHA-256: `38c566ad25d49b0e8aeaa301bfb26cafb5f6bf63a1d9e30f4757efe61e8725c5`
- File size: `23621515 bytes`
- PDF pages: `387` (`pdfinfo`: 387 pages, A4 595×842 pts, PDF 1.4, producer `calibre (4.2.0)`)
- Extraction method: `pdftotext -layout, page-by-page (one file per PDF page), then sequential semantic reading in contiguous ranges`
- Visual method: `Poppler render of all 387 pages at 96 DPI + five complete-corpus contact-sheet reviews + one focused 12-page check sheet for every zero-text page`
- Provenance note: `[FACT]` Kopija nosi „OceanofPDF.com“ trag i calibre konverziju. Poreklo/licenca nije potvrđena; originalni PDF nije menjan i njegov puni tekst se ne čuva u CMO-OS.

## Range evidence

Range SHA-256 je izračunat nad sekvencijalno spojenim, trimmed page text-om uz form-feed separator između stranica. `Extracted chars` je zbir dužina trimmed page text-a i uključuje layout razmake; separatori nisu uračunati.

| PDF range | Pages | Extracted chars | Range SHA-256 | Empty pages | Semantic coverage |
|---|---:|---:|---|---|---|
| 1–78 | 78 | 101,180 | `9497acbc7dc0c7603e16071b561cb5ae19face1b8c25a112fde31ac14bbc77dc` | 1, 74, 75, 76 | Korice, praise, impresum, zahvalnice, sadržaj, Uvod; Ch1 The Overview sa 4 Decisions, 4D Framework i svim jedan-stranica alatima; Ch2 The Barriers; uvod u „People“ sekciju i pune stranice OPPP/FACe/PACe alata |
| 79–156 | 78 | 128,356 | `b2c335ee7f37507fc5544969cbbffc8026dd7c85bb9a98e1789ffa7e584f2945` | 144, 145, 146, 147, 148 | Ch3 The Leaders (OPPP, FACe, PACe, matrične strukture, Lean primeri); Ch4 The Team (Job Scorecard, Topgrading, TORC, gerilsko regrutovanje); Ch5 The Managers (pet aktivnosti, onboarding, obuka, Situational Leadership); uvod u „Strategy“ sekciju i pune stranice 7 Strata / Vision Summary / SWT / OPSP alata; početak Ch6 The Core |
| 157–234 | 78 | 116,888 | `793b3af903115123cd781e9e2ae993bc13bf3c051eef7c6ff0ac1fe01b66c51d` | 221 | Nastavak Ch6 (osam poluga kulture, Appletree slučaj); ceo Ch7 The 7 Strata of Strategy sa BuildDirect slučajem; ceo Ch8 The One-Page Strategic Plan (sedam kolona, People/Process, SWT); uvod u „Execution“ sekciju |
| 235–312 | 78 | 123,444 | `8c1e13dc14cdc6885914efd0d39db2a5f0f5b03224c2fb7cbc710484aa54fef8` | 237, 238, 277, 312 | Pune stranice Rockefeller Habits Checklist i WWW alata; Ch9 The Priority (Habits #1, #2, #4, #7, #8; kompletan set City Bin kvartalnih tema); Ch10 The Data (Habits #5, #6, #9, #10; 4Q; NPS); Ch11 The Meeting Rhythm (Habit #3; dnevni, nedeljni, mesečni, kvartalni i godišnji sastanci; Ashiana agenda); uvod u „Cash“ sekciju |
| 313–387 | 75 | 99,935 | `a23d4f936477c43f0fd4e480339b30beecfce7bb5f4de946ea76ca162a29e62f` | 313, 370, 371 | Pune stranice CASh i Power of One alata; Ch12 The Cash (CCC, tri kategorije poboljšanja); Ch13 The Accounting (Simple Numbers, LER, 4 sile keša); Ch14 The Power of One (Gary's Furniture, DuPont, 7 poluga, KPI tabela); Next Steps; dve reklamne stranice; kompletan Key Resources; kompletan Index |

## Extraction reconciliation

- Expected pages: `387`
- Accounted pages: `387`
- Range-sum extracted characters (layout-inclusive): `569,803`
- Non-whitespace character total across all 387 pages: `476,595` (≈1.231 znakova po stranici — proza sa visokim udelom listi, tabela i punih grafičkih stranica)
- Sequential semantic read: `1–40; 41–80; 81–120; 121–160; 161–200; 201–240; 241–280; 281–320; 321–360; 361–387`
- Missing ranges: `none`
- Extraction errors: `none`
- Empty text pages (17): `1, 74, 75, 76, 144, 145, 146, 147, 148, 221, 237, 238, 277, 312, 313, 370, 371`
- Other low-text pages, <200 non-whitespace chars (12): `4 (86), 6 (195), 12 (163), 30 (130), 31 (153), 49 (142), 81 (142), 116 (120), 244 (70), 303 (67), 378 (47), 387 (92)`

## Visual review

- Svih 387 stranica je renderovano Poppler-om; broj renderovanih fajlova (`387`) se poklapa sa PDF page count-om.
- Pet contact sheet-ova pokriva pp. `1–78`, `79–156`, `157–234`, `235–312` i `313–387`; svaki thumbnail je pregledan na nedostajuću stranicu, izgubljenu tabelu ili grafikon, clipping i praznu semantiku.
- `[FACT]` **Svih 17 stranica bez teksta razrešeno je vizuelno** — nijedna nije prazna stranica, sve nose sadržaj u obliku slike:
  - p. 1 — naslovna korica;
  - pp. 74, 75, 76 — pune stranice alata One-Page Personal Plan (OPPP), Function Accountability Chart (FACe), Process Accountability Chart (PACe);
  - pp. 144–148 — pune stranice alata 7 Strata of Strategy, Vision Summary, SWT i dvostrani One-Page Strategic Plan;
  - p. 221 — grafički prikaz kolone 6 OPSP-a (Theme / Scoreboard / Celebration);
  - pp. 237, 238 — pune stranice alata Rockefeller Habits Checklist™ i Who-What-When (WWW);
  - p. 277 — grafikon „KPIs / Rocks / Critical Number“;
  - pp. 312, 313 — pune stranice alata Cash Acceleration Strategies (CASh) i The Power of One;
  - pp. 370, 371 — dve izdavačke reklamne stranice (Gazelles coaching, Align, Growth Institute, Better Book Club).
- Low-text stranice razrešene: pp. 4, 6, 12 su delovi impresuma i sadržaja; pp. 30, 31, 49, 81, 116 su stranice u kojima tekst deli prostor sa punom grafikom ili fotografijom (Growth Tools tabele, MOM's oglas za regrutovanje); pp. 244, 303 su kratki krajevi poglavlja; p. 378 je poslednja stavka bibliografije; p. 387 je poslednja stranica indeksa.
- Netekstualni sadržaj potvrđen na renderu i uključen u sintezu: 4D Framework i Everest dijagram (pp. 18, 23), Think-Plan-Act-Learn ciklus (p. 35), popunjeni primeri Growth Tools alata (pp. 25–26, 36–50, 85–89, 100–102), Greiner kriva i grafikoni barijera (pp. 65–68), sedam numerisanih dijagrama 7 Strata (pp. 174, 178, 184, 186, 189, 192, 195), numerisani prikazi sedam kolona OPSP-a (pp. 209–222), fotografije kvartalnih tema The City Bin Co. (pp. 250–254), scoreboard i „situation room“ fotografije (pp. 279–282), dijagram ritma sastanaka sa procentima radne nedelje (p. 287), agende dnevnog i nedeljnog sastanka (pp. 296, 302), waterfall grafikon (p. 326), LER tabele (pp. 334–336) i kompletan set finansijskih tabela i DuPont dijagrama za slučaj Gary's Furniture (pp. 343–365).
- Visual status: `PASS`.

## Visual evidence hashes

| Evidence | PDF pages | SHA-256 |
|---|---:|---|
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-011_visual-contact-sheet-1.png` | 1–78 | `18fb7cba1f8651c7620af27c413143a5611ab15ea954a5aaca128b6919eaf15e` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-011_visual-contact-sheet-2.png` | 79–156 | `1c3a341b97d0b76d5cef5a8dea28fbc90d0e6e5e19924f65c6a22afe8c05c66d` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-011_visual-contact-sheet-3.png` | 157–234 | `d9a821bcd73ea1baa5d46dfb9fcc4291973f9a9d4f828746a1bf5fcb60fbc1ad` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-011_visual-contact-sheet-4.png` | 235–312 | `0219d8357c65d680b7b70f3f3c07e37df4faa7ad3692006ea3fe80b67a770f72` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-011_visual-contact-sheet-5.png` | 313–387 | `83078061d23db5b1a25ff9eb1b1ead7a10c0e0ad4cddcb7dbf6d1255c5a39e16` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-011_visual-check-empties.png` | 73–76, 236–239, 369–372 | `6217ac74d461013c2fe7c8dc42f409dbf98fa7af46712e733c1223287d209f54` |

## Structure reconciliation

- Četiri sekcije lokalizovane: People (uvod p. 70), Strategy (uvod p. 140), Execution (uvod p. 233), Cash (uvod p. 309).
- Četrnaest poglavlja lokalizovano na pp. `17` (Ch1), `52` (Ch2), `77` (Ch3), `106` (Ch4), `122` (Ch5), `149` (Ch6), `168` (Ch7), `199` (Ch8), `239` (Ch9), `261` (Ch10), `284` (Ch11), `314` (Ch12), `324` (Ch13), `340` (Ch14).
- Zadnja materija: Next Steps pp. `366–369`, reklamne stranice pp. `370–371`, Key Resources pp. `372–378`, Index pp. `379–387`.
- `[FACT]` Numeracija: indeks i unutrašnje reference koriste knjižnu numeraciju, koja je pomerena u odnosu na PDF numeraciju. Sve stranice u belešci i u ovom dokumentu su **PDF stranice**, i kao takve su verifikovane na renderu.
- Svih 11 jedan-stranica alata, svih 10 Rockefeller Habits, svih 7 Strata, svih 7 finansijskih poluga i sva četiri Simple Numbers ključa su locirana i predstavljena u whole-book strukturi.

## Completion dependency

Whole-book note postoji na `11_Research/book_acquisition/notes/BK-011_Scaling_Up.md`. Completion audit: `90_AI/audits/2026-08-23_full_book_corpus/BK-011_AUDIT.md`, verdict `APPROVE`.
