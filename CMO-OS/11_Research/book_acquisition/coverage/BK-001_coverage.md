# BK-001 Coverage Evidence

status: `COMPLETED`  
book_id: `BK-001`  
title: `The 48 Laws of Power`  
authors: `Robert Greene; a Joost Elffers production`  
inspection_date: `2026-08-23`

## Source identity

- Source: `/home/aleksandar-lazic1998/Documents/Books/The+48+Laws+Of+Power.pdf`
- SHA-256: `5586435106a4e20fca2fdf527fd9ce405b6c1f65e20a4340f7bac46f8b3f91c6`
- File size: `31058156 bytes`
- PDF pages: `476` (`pdfinfo`: 476 pages, US Letter 612×792 pts, PDF 1.4, no producer string, no metadata stream)
- Extraction method: `pdftotext -layout, page-by-page (one file per PDF page), then sequential semantic reading in contiguous ranges`
- Visual method: `Poppler render of all 476 pages at 96 DPI + six complete-corpus contact-sheet reviews at 190 px thumbnail width`
- Provenance note: `[FACT]` Kopija je skenirana i nosi OCR tekstualni sloj, ne digitalno rođeni tekst. Poreklo i licenca nisu potvrđeni; originalni PDF nije menjan i njegov puni tekst se ne čuva u CMO-OS.

## Range evidence

Range SHA-256 je izračunat nad sekvencijalno spojenim, trimmed page text-om uz form-feed separator između stranica. `Extracted chars` je zbir dužina trimmed page text-a i uključuje layout razmake; separatori nisu uračunati.

| PDF range | Pages | Extracted chars | Range SHA-256 | Empty pages | Semantic coverage |
|---|---:|---:|---|---|---|
| 1–80 | 80 | 274,078 | `65797b550663133f3c7f995ea22685e0d72e8a6f7756179c7538dbb3380f81a9` | 1 | Korice, impresum, kompletna lista dozvola za citiranje, posveta, zahvalnice, kompletan Sadržaj sa sažecima svih 48 zakona, Predgovor; zakoni 1–7 u celini (nadmašivanje gospodara, prijatelji i neprijatelji, skrivanje namera u dva dela, štedljivost u govoru, reputacija, pažnja u dva dela) |
| 81–160 | 80 | 291,116 | `bba8b3d786dba9604a0d983bfa0edd204a8d554b20f7e51fc640a9fe27789927` | none | Zakoni 8–19: mamac, delovanje umesto argumenta, zaraza nesrećom, zavisnost, selektivno poštenje, apel na sopstveni interes, špijunaža pod maskom prijateljstva, uništenje neprijatelja, odsustvo i oskudica, nepredvidivost, opasnost izolacije, i tipologija pet opasnih tipova |
| 161–240 | 80 | 304,396 | `29a3742eccdf72f443ede2c4d5b50c10a7d1714d108002f363a16b4e2887bdd4` | none | Zakoni 20–26: neobavezivanje u dva dela, glumljena glupost, predaja kao oružje, koncentracija snaga, kompletan katalog od petnaest dvorskih pravila i jedanaest scena dvorskog života, ponovno stvaranje sebe, žrtveni jarac i mačja šapa |
| 241–320 | 80 | 358,691 | `2e3cd76c1699b3d079520c554082f8fdecafd1e0de3721999cb45777e8e85a67` | none | Zakoni 27–34: pet koraka za stvaranje kulta, smelost, planiranje do kraja, prikrivanje truda i `sprezzatura`, šest tehnika kontrole izbora, četiri trajne fantazije, sedam mesta gde se traži tuđa slabost, kraljevsko držanje i Strategija krune |
| 321–400 | 80 | 357,526 | `88b11a9fe0cf7804ba08058e24ed341309ea7d42f35255a90a76461bddc2f744` | none | Zakoni 35–44: tri vrste vremena, prezir umesto reakcije, spektakl i simbol, spoljašnja konformnost uz unutrašnju slobodu, izazivanje tuđeg besa, četiri destruktivna odnosa prema novcu, izlazak iz senke prethodnika, udar na pastira, srca i umovi, i početak četiri ogledala |
| 401–476 | 76 | 347,174 | `f283a4bce4fe8f4d7e399dcbc5e634846236fa0f36d6a80dbf48d83b47c68eac` | none | Nastavak zakona 44 sa upozorenjem na ogledalne situacije; zakoni 45–48: postupna reforma, prividna nesavršenost, zaustavljanje na cilju, bezobličnost i `wei-chi` model; Selected Bibliography; kompletan Index; zadnja korica |

## Extraction reconciliation

- Expected pages: `476`
- Accounted pages: `476`
- Range-sum extracted characters (layout-inclusive): `1,932,981`
- Non-whitespace character total across all 476 pages: `1,158,076` (≈2.433 znakova po stranici — najgušća knjiga u korpusu, posledica dvokolonskog sloga sa marginalnim citatima)
- Sequential semantic read: `1–40; 41–80; 81–120; 121–160; 161–200; 201–240; 241–280; 281–320; 321–360; 361–400; 401–440; 441–476`
- Missing ranges: `none`
- Extraction errors: `none`
- Empty text pages (1): `1`
- Other low-text pages, <200 non-whitespace chars (3): `2 (16), 4 (53), 7 (32)`

## Visual review

- Svih 476 stranica je renderovano Poppler-om; broj renderovanih fajlova (`476`) se poklapa sa PDF page count-om.
- Šest contact sheet-ova pokriva pp. `1–80`, `81–160`, `161–240`, `241–320`, `321–400` i `401–476`; svaki thumbnail je pregledan na nedostajuću stranicu, izgubljenu tabelu ili grafikon, clipping i praznu semantiku.
- Prazna tekstualna stranica p. 1 razrešena je vizuelno: prednja korica renderovana kao slika (crvena, naslov `POWER`).
- Low-text stranice razrešene: p. 2 je half title, p. 4 naslovna strana, p. 7 posveta.
- `[FACT]` **Slog knjige je potvrđen na renderu**: glavni tekstualni blok sa marginalnom kolonom citata, basni i istorijskih anegdota koja teče paralelno kroz gotovo celu knjigu. Ova kolona je uzrok najvećeg dela OCR oštećenja.
- `[FACT]` **Tipografski oblikovani blokovi teksta** potvrđeni vizuelno na desetinama stranica — marginalne basne su složene u oblike (zmija na p. 33, pehar na p. 83, peščani sat na p. 123, kupa na p. 303, stub na p. 192). Ovo je namerna dizajnerska odluka producenta Joosta Elffersa i objašnjava zašto OCR na tim mestima daje nasumičan raspored znakova.
- `[FACT]` **Svih 48 početnih stranica zakona potvrđeno je i vizuelno i programski**: pp. `24, 31, 39, 54, 60, 67, 79, 85, 92, 99, 105, 112, 118, 124, 130, 138, 146, 153, 160, 168, 179, 186, 194, 201, 214, 223, 238, 250, 259, 268, 277, 286, 294, 305, 314, 323, 332, 340, 348, 356, 370, 381, 390, 399, 415, 423, 433, 442`.
- p. 476 razrešena vizuelno: zadnja korica (plavo-crvena, blurb i barkod), čiji je OCR nečitljiv.
- Visual status: `PASS`.

## Visual evidence hashes

| Evidence | PDF pages | SHA-256 |
|---|---:|---|
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-001_visual-contact-sheet-1.png` | 1–80 | `2493ebd587d4be61d65645b6a1d41ce943f164e59b7cd4e724f39279e1f1edb5` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-001_visual-contact-sheet-2.png` | 81–160 | `ac811cc7b9afee60d651aef005730b4b3e20a5369894aaf197d2320b58663a2d` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-001_visual-contact-sheet-3.png` | 161–240 | `aa8f243a834cf624dd6d387fb1ffcbda82d7f667221a7e84f3ad03181a3bf57d` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-001_visual-contact-sheet-4.png` | 241–320 | `2479ae247802837024085007c9826e790442228f9fdcd92727093aa70838a11d` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-001_visual-contact-sheet-5.png` | 321–400 | `c4a970f75f485c09e67edc9e09591a07dacd8bb74b9e3509d247edf78ae74c5c` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-001_visual-contact-sheet-6.png` | 401–476 | `c936d004cc94b5d4469bc9a00be8978e231d14b1e15b60575f7daff0b7800f0a` |

## Structure reconciliation

- Front matter pp. `1–23`: korice, impresum, dozvole za citiranje, posveta, zahvalnice, Sadržaj (pp. 9–16) sa punim sažetkom svakog od 48 zakona, Predgovor (pp. 17–23).
- Body pp. `24–453`: svih 48 zakona, svaki sa punim setom odeljaka.
- Back matter: Selected Bibliography p. `454`, Index pp. `455–475`, zadnja korica p. `476`.
- `[FACT]` Numeracija: knjižna numeracija i PDF numeracija se **razilaze**. Indeks upućuje na knjižne stranice (npr. „Law 48, 419–30“), dok se Zakon 48 u PDF-u nalazi na pp. 442–453. Odnos je približno `PDF = knjižna + 23` u glavnom telu. Sve stranice u belešci i u ovom dokumentu su **PDF stranice**, i tako su i verifikovane.
- Svih 48 zakona, svih devet strukturnih odeljaka po zakonu, kompletna bibliografija i kompletan indeks su locirani i predstavljeni u whole-book strukturi.

## Completion dependency

Whole-book note postoji na `11_Research/book_acquisition/notes/BK-001_The_48_Laws_of_Power.md`. Completion audit: `90_AI/audits/2026-08-23_full_book_corpus/BK-001_AUDIT.md`, verdict `APPROVE`.
