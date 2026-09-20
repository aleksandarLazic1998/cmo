# BK-014 Coverage Evidence

status: `COMPLETED`  
book_id: `BK-014`  
title: `The Personal MBA: Master the Art of Business` (10th Anniversary Edition, 2020)  
author: `Josh Kaufman`  
inspection_date: `2026-08-23`

## Source identity

- Source: `/home/aleksandar-lazic1998/Documents/Books/_OceanofPDF.com_The_Personal_MBA_-_Josh_Kaufman.pdf`
- SHA-256: `1a41fd73ef09bd44a931dbcbf985c9c42d0fa274ccc7b6ed246cfbad0a2f7e2b`
- File size: `3894485 bytes`
- PDF pages: `496` (`pdfinfo`: 496 pages, US Letter 612×792 pts, PDF 1.4, producer `calibre (4.22.0)`, CreationDate 2020-09-22)
- Embedded metadata: Title `The Personal MBA`, Author `Josh Kaufman` — poklapa se sa sadržajem naslovne strane i impresuma.
- Extraction method: `pdftotext -layout, page-by-page (one file per PDF page), then sequential semantic reading in contiguous ranges`
- Visual method: `Poppler render of all 496 pages at 96 DPI + six complete-corpus contact-sheet reviews, plus a higher-zoom re-check of pp. 409–496`
- Provenance note: `[FACT]` Kopija je **digitalno rođena** (calibre konverzija iz e-knjige), ne skenirana. Tekstualni sloj je čist; nema OCR degradacije. Poreklo distribucije nije potvrđeno; originalni PDF nije menjan i njegov puni tekst se ne čuva u CMO-OS.

## Range evidence

Range SHA-256 je izračunat nad sekvencijalno spojenim, trimmed page text-om uz form-feed separator između stranica. `Extracted chars` je zbir dužina trimmed page text-a i uključuje layout razmake; separatori nisu uračunati.

| PDF range | Pages | Extracted chars | Range SHA-256 | Empty pages | Semantic coverage |
|---|---:|---:|---|---|---|
| 1–83 | 83 | 146,177 | `a1e05aac50bd7324572253b9666909a4a629f53dabe0f8076ceac05c3f751a4d` | 1, 4 | Korice, praise, impresum, posveta, kompletan Contents, Key Terms, A Note to the Reader, Preface to the 2020 Edition, Uvod (mentalni modeli, Munger, Pet delova biznisa, kritika MBA programa); Poglavlje 1 do kraja Twelve Standard Forms of Value |
| 84–166 | 83 | 173,309 | `42cba18d4de3b65da21c9715d6246bb8a51406a06dc0848e0e9eca7c183e7310` | none | Kraj Poglavlja 1 (Hassle Premium → Field Testing, uključujući Iteration Cycle, Economic Values, Critical Assumptions, Shadow Testing, MVO); kompletno Poglavlje 2 (Marketing, Attention → Reputation); Poglavlje 3 do Barriers to Purchase |
| 167–249 | 83 | 182,059 | `d562ebf1aeee4846d4311e4720af2a9e448db978addf579bbe502eaf3fbc89ec` | none | Kraj Poglavlja 3 (Risk Reversal, Reactivation); kompletno Poglavlje 4 (Value Delivery); kompletno Poglavlje 5 (Finance, Profit → Internal Controls); početak Poglavlja 6 (Caveman Syndrome, Performance Requirements, Onion Brain, Perceptual Control, Reference Level, Conservation of Energy) |
| 250–332 | 83 | 177,969 | `d66cdeea23b4bd63ccab08b69dc00031ecbabafe5bd027a153808fc4493a75b1` | none | Nastavak Poglavlja 6 (Guiding Structure → Novelty, uključujući Status Signals, Loss Aversion, Threat Lockdown, Absence Blindness, Contrast, Scarcity); Poglavlje 7 od Akrasije do Locus of Control |
| 333–415 | 83 | 177,729 | `d2cbed1965691b444079ccf6702fad30006ffbea9b62fffa67d204acf6eb3898` | none | Kraj Poglavlja 7 (Attachment → Arrival Fallacy); kompletno Poglavlje 8 (Working with Others, Power → Performance-Based Hiring); kompletno Poglavlje 9 (Understanding Systems); Poglavlje 10 do Margin of Error |
| 416–496 | 81 | 145,896 | `fb9acb4d7ed673214536322e49dd8b1de9a1135bdb9328052709bd959d12ab4d` | none | Kraj Poglavlja 10 (Ratio → Humanization); kompletno Poglavlje 11 (Improving Systems, Intervention Bias → Experimental Mind-set); Not „The End“; Acknowledgments; Appendix A; Appendix B (49 pitanja); Notes (fusnote svih poglavlja); kompletan Index; About the Author; zadnja strana |

## Extraction reconciliation

- Expected pages: `496`
- Accounted pages: `496`
- Range-sum extracted characters (layout-inclusive): `1,003,139`
- Non-whitespace character total across all 496 pages: `810,032` (≈1.633 znakova po stranici — jednokolonski slog sa kratkim odeljcima i mnogo belina)
- Sequential semantic read: `1–40; 41–80; 81–120; 121–160; 161–200; 201–240; 241–280; 281–320; 321–360; 361–400; 401–440; 441–480; 481–496`
- Missing ranges: `none`
- Extraction errors: `none`
- Empty text pages (2): `1, 4`
- Low-text pages, layout-inclusive <200 chars (2): `6, 139`
- Low-text pages, non-whitespace <200 chars (3): `6 (100), 139 (143), 496 (122)`
- `[FACT]` Jedina sistematska anomalija ekstrakcije je **premetanje prve reči odeljka** zbog drop-cap sloga (npr. `Iworkbest…` na p. 323, `Lmoveongtoward` na p. 255). Ovo je posledica `-layout` ekstrakcije inicijala, ne oštećenja izvora; sve reči su prisutne i tekst je čitljiv.

## Visual review

- Svih 496 stranica je renderovano Poppler-om; broj renderovanih fajlova (`496`) se poklapa sa PDF page count-om.
- Šest contact sheet-ova pokriva pp. `1–83`, `84–166`, `167–249`, `250–332`, `333–415` i `416–496`; svaki thumbnail je pregledan na nedostajuću stranicu, izgubljenu tabelu ili grafikon, clipping i praznu semantiku.
- Prazne tekstualne stranice razrešene vizuelno: **p. 1** je prednja korica u boji (`THE PERSONAL MBA`, `10th Anniversary Edition`, `Josh Kaufman`), a **p. 4** je grafički složena naslovna strana (`THE PERSONAL MBA / Master the Art of Business / JOSH KAUFMAN`) renderovana kao slika. Nijedna nije prazna stranica.
- Low-text stranice razrešene: **p. 6** je posveta („To the millions of business professionals worldwide…“), **p. 139** je poslednja stranica odeljka `Reputation` sa samo tri reda teksta i referentnim linkom, **p. 496** je Penguin Random House promo stranica („What's next on your reading list?“).
- `[FACT]` **Slog je potvrđen na renderu**: jednokolonski tekst, naslov odeljka, epigraf u kurzivu, drop-cap inicijal, i `REFERENCE LINK` u maloj verzalu na kraju svakog odeljka. Nema marginalnih kolona, nema tabela, nema dijagrama.
- `[FACT]` **Knjiga ne sadrži nijednu ilustraciju, tabelu ni grafikon** u glavnom telu. Vizuelna provera svih 496 rendera nije otkrila nijedan grafički element osim korice, naslovne strane i logotipa izdavača. To znači da tekstualna ekstrakcija ne propušta nikakav sadržaj.
- `[FACT]` **Svih 11 chapter-opener stranica potvrđeno je i vizuelno i programski**: pp. `59` (Value Creation), `112` (Marketing), `140` (Sales), `170` (Value Delivery), `192` (Finance), `239` (The Human Mind), `283` (Working with Yourself), `341` (Working with Others), `381` (Understanding Systems), `403` (Analyzing Systems), `425` (Improving Systems).
- `[FACT]` **Programski je prebrojano 281 jedinstvenih `REFERENCE LINK` slugova** u telu knjige (pp. 59–454), od kojih je 11 chapter-intro slugova, a ostatak su imenovani mentalni modeli. Svaki slug služi kao provereni anchor za lociranje odgovarajućeg odeljka.
- Visual status: `PASS`.

## Visual evidence hashes

| Evidence | PDF pages | SHA-256 |
|---|---:|---|
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-014_visual-contact-sheet-1.png` | 1–83 | `f408eb81548e3b5346e72b4d502ea1b1050eb95f9ee129a360b06ed8f1dd3428` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-014_visual-contact-sheet-2.png` | 84–166 | `33a78acc2b8ab2516dab664afa7fe0b9a522f7ef0afeccc6f8ab4acb82c23391` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-014_visual-contact-sheet-3.png` | 167–249 | `c7228afe902c62f80b8b79d6be9553fc240416b468f20dc4a2ea1653f8e6b356` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-014_visual-contact-sheet-4.png` | 250–332 | `6e0d51c1fca6385af5bee7faf15475426747e10d7e8c4c9e080e168cbfaabb30` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-014_visual-contact-sheet-5.png` | 333–415 | `aa3b04c2ebc70e34f9c0d06a9efc5b3e4a3c44425d31c296e92be9162adcf745` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-014_visual-contact-sheet-6.png` | 416–496 | `3507f10dd93e6781d831f5f4515acc813e160da9a888d175c40d2662d9b3750f` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-014_visual-contact-sheet-7.png` | 409–476 (higher-zoom re-check) | `1c0b55c136ebe783611e2cfc0af6f551ee8c3ece4397b4d02bb80878d35239f4` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-014_visual-contact-sheet-8.png` | 477–496 (higher-zoom re-check) | `134863584a49c35ba886a89ca7490a4a48ccc4817b6543edf59d3721c56cd61d` |

`[FACT]` Sheet-ovi `1–6` čine kompletnu vizuelnu pokrivenost svih 496 stranica. Sheet-ovi `7–8` su iz ranijeg prolaza sa krupnijim thumbnail-om i pokrivaju zadnji deo knjige (Notes, Index, About the Author) sa većom rezolucijom; zadržani su jer omogućavaju čitanje indeksa, ali nisu neophodni za pokrivenost.

## Structure reconciliation

- Front matter pp. `1–58`: korice, praise (pp. 2–3), naslovna strana, impresum, posveta, Contents (pp. 7–14), Key Terms (pp. 15–20), A Note to the Reader (pp. 21–22), Preface to the 2020 Edition (pp. 23–25), Introduction (pp. 26–58).
- Body pp. `59–454`: 11 poglavlja, sa 281 programski potvrđenim `REFERENCE LINK` anchor-om.
- Back matter: Not „The End“ pp. `455–457`, Acknowledgments pp. `458–459`, Appendix A p. `460`, Appendix B pp. `461–463`, Notes pp. `464–470`, Index pp. `471–494`, About the Author p. `495`, izdavačka promo strana p. `496`.
- `[FACT]` Numeracija: knjižna i PDF numeracija se **razilaze**. Indeks upućuje na knjižne stranice (npr. „Akrasia, 260–62“), dok se odeljak `Akrasia` u PDF-u nalazi na pp. 283–286. Odnos je približno `PDF = knjižna + 23` u glavnom telu. Sve stranice u belešci i u ovom dokumentu su **PDF stranice**, i tako su i verifikovane.
- Sam PDF na p. 471 sadrži i eksplicitno upozorenje izdavača: brojevi u indeksu odnose se na štampano izdanje.

## Completion dependency

Whole-book note postoji na `11_Research/book_acquisition/notes/BK-014_The_Personal_MBA.md`. Completion audit: `90_AI/audits/2026-08-23_full_book_corpus/BK-014_AUDIT.md`, verdict `APPROVE`.
