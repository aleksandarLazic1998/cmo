# BK-012 Coverage Evidence

status: `COMPLETED`  
book_id: `BK-012`  
title: `The Goal: A Process of Ongoing Improvement (third revised edition)`  
authors: `Eliyahu M. Goldratt and Jeff Cox`  
inspection_date: `2026-08-23`

## Source identity

- Source: `/home/aleksandar-lazic1998/Documents/Books/_OceanofPDF.com_The_Goal__A_Process_of_Ongoing_Improvement_-_Eliyahu_M_Goldratt.pdf`
- SHA-256: `95550e68ac4574d2fdb928d6f492557110e2375949e77a5cc23b45fcf556fc3b`
- File size: `1985109 bytes`
- PDF pages: `351` (`pdfinfo`: 351 pages, A4 595×842 pts, PDF 1.4, producer `calibre (0.9.34)`)
- Extraction method: `pdftotext -layout, page-by-page (one file per PDF page), then sequential semantic reading in contiguous ranges`
- Visual method: `Poppler render of all 351 pages at 96 DPI + five complete-corpus contact-sheet reviews + one focused 6-page check sheet (pp. 56–61)`
- Provenance note: `[FACT]` Kopija nosi „OceanofPDF.com“ trag i calibre konverziju. Poreklo/licenca nije potvrđena; originalni PDF nije menjan i njegov puni tekst se ne čuva u CMO-OS.

## Range evidence

Range SHA-256 je izračunat nad sekvencijalno spojenim, trimmed page text-om uz form-feed separator između stranica. `Extracted chars` je zbir dužina trimmed page text-a i uključuje layout razmake; separatori nisu uračunati.

| PDF range | Pages | Extracted chars | Range SHA-256 | Empty pages | Semantic coverage |
|---|---:|---:|---|---|---|
| 1–71 | 71 | 149,256 | `d4c729df8e4b5243733ae482cf1d51ab633fb98a70d0ae44c3567af0bfcc9e57` | 1 | Korice, oba uvoda, biografija, poglavlja 1–6 (uključujući nenaslovljena 7–8), definicije throughput/inventory/operational expense, poglavlje 9 i početak 10 |
| 72–142 | 71 | 142,058 | `bfe74c09c3057db2f81ed2b1a91718bfd280d770209bcae144d4ea5f10fb8179` | none | Poglavlja 10–18: balansirana fabrika, zavisni događaji i fluktuacije, pohod i Herbie, igra sa kockom, kovarijansa, robot-test, podela na bottleneck i non-bottleneck |
| 143–213 | 71 | 146,891 | `68e0a238cd6aafdcf923f0f0ba5569182f3b3716a41794431c4de31d45231be5` | none | Poglavlja 19–27: Jonahova poseta i pravila o uskom grlu, prioriteti i oznake, heattreat i NCX-10, rekordni mesec, X/Y kombinacije, drum–buffer–rope, divizijski pregled |
| 214–284 | 71 | 154,693 | `30275a900998c3c57ad65f191bcc6a3ab31e2d639444b97318d2821f5e0ef0fb` | none | Poglavlja 28–36: prepolovljene serije i četiri komponente vremena, Burnside, revizija i unapređenje, Sokratov metod, Lou i vrednovanje zaliha, CCR i buffer management, Mendeljejev, prelazak u „throughput world“ i pet koraka |
| 285–351 | 67 | 157,221 | `3ded16939e1956f3cde9f46d7d266ccfaad3af7fb28eb1e2464426284c17ae24` | none | Poglavlja 37–40: inercija i ispravka petog koraka, francuski posao, putujuća uska grla i zaštita ograničenja, tri pitanja upravljanja; kompletan blok od deset intervjua trećeg izdanja i završna stranica izdavača |

## Extraction reconciliation

- Expected pages: `351`
- Accounted pages: `351`
- Range-sum extracted characters (layout-inclusive): `750,119`
- Non-whitespace character total across all 351 pages: `612,577` (≈1.745 znakova po stranici — gusta pripovedna proza)
- Sequential semantic read: `1–40; 41–80; 81–120; 121–160; 161–200; 201–240; 241–280; 281–320; 321–351`
- Missing ranges: `none`
- Extraction errors: `none`
- Empty text pages (1): `1`
- Other low-text pages, <200 non-whitespace chars (6): `25, 38, 144, 201, 208, 351`

## Visual review

- Svih 351 stranica je renderovano Poppler-om; broj renderovanih fajlova (`351`) se poklapa sa PDF page count-om.
- Pet contact sheet-ova pokriva pp. `1–71`, `72–142`, `143–213`, `214–284` i `285–351`; svaki thumbnail je pregledan na nedostajuću stranicu, izgubljenu tabelu ili grafikon, clipping i praznu semantiku.
- Prazna tekstualna stranica p. 1 razrešena je vizuelno: naslovna korica renderovana kao slika.
- Low-text stranice razrešene: pp. 25, 38, 144, 201 i 208 su kratki krajevi poglavlja; p. 351 je završna stranica izdavača sa web adresom.
- Netekstualni sadržaj potvrđen na renderu i uključen u sintezu: tabela odstupanja iz igre sa kockom i šibicama (pp. 106–110), dijagram planirane isporuke i log Peteovog odeljenja i robota (pp. 127, 130–131), X→Y dijagrami i zbirni prikaz četiri kombinacije (pp. 195–199), pet koraka na tabli (pp. 285–286) i grafički prilozi u intervjuima.
- `[FACT]` Fokusirana provera pp. 56–61 na punoj rezoluciji potvrđuje da u ovom izdanju **nema zaglavlja poglavlja 7 i 8**: tekst teče neprekidno od poglavlja 6 (p. 47) do poglavlja 9 (p. 65). Sadržaj tih poglavlja je prisutan; reč je o artefaktu calibre konverzije, ne o gubitku stranica.
- Visual status: `PASS`.

## Visual evidence hashes

| Evidence | PDF pages | SHA-256 |
|---|---:|---|
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-012_visual-contact-sheet-1.png` | 1–71 | `e70826c4dbf3706067eda3af99bd49b77e85073a9e8ca8f770162e460f93d914` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-012_visual-contact-sheet-2.png` | 72–142 | `3ed0c3715295559ccc0446e6e2a03546871445277079f3be7b01e7da38f97c2e` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-012_visual-contact-sheet-3.png` | 143–213 | `298966fda875d42f4b061d48888dec1dcccc9c93e8cc68ff863ca86079c5032d` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-012_visual-contact-sheet-4.png` | 214–284 | `33ad3b9df4187c63521363b4e14e53a7ad6eaf56ef7b1965c787e57ab4a875f7` |
| `90_AI/audits/2026-08-23_full_book_corpus/evidence/BK-012_visual-contact-sheet-5.png` | 285–351 | `f0acf87cf43163a34c1421424126710d6d48c23ee0e49ec5ee588ec920068f93` |

## Structure reconciliation

- Independent boundary scan locates numbered chapter headings at pp. `16, 26, 31, 39, 47, 65, 74, 81, 90, 94, 103, 112, 118, 122, 133, 145, 156, 163, 172, 177, 186, 193, 202, 209, 217, 224, 233, 243, 249, 254, 263, 269, 275, 282, 288, 297, 305` (chapters 2–6 and 9–40); chapter 1 begins on p. `7`.
- Chapters 7 and 8 carry no heading in this conversion; their content occupies pp. `57–64` continuously and was read in sequence.
- End matter: interview block pp. `314–350`, publisher page p. `351`.
- Front matter, both introductions, author biography, all forty narrative chapters, all figures/tables and all ten interviews are represented in the whole-book structure map.

## Completion dependency

Whole-book note postoji na `11_Research/book_acquisition/notes/BK-012_The_Goal.md`. Completion audit: `90_AI/audits/2026-08-23_full_book_corpus/BK-012_AUDIT.md`, verdict `APPROVE`.
