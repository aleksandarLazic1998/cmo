# Source recheck

date: `2026-10-04`

Ovo je ponovna provera lokalnih artefakata, a ne novo full-book completion. Izvorne knjige i stari coverage/audit zapisi nisu menjani. Sve navedene stranice su PDF stranice.

## Inventory

| ID | Source | Pages | Inherited status | Current identity | Range hashes | Rendered pages |
|---|---|---:|---|---|---|---:|
| BK-001 | `The+48+Laws+Of+Power.pdf` | 476 | COMPLETED | SHA-256, bytes, page count PASS | 6/6 | 476 |
| BK-002 | `_OceanofPDF.com_100M_Offers_-_Alex_Hormozi.pdf` | 206 | COMPLETED | SHA-256, bytes, page count PASS | 5/5 | 206 |
| BK-003 | `_OceanofPDF.com_100M_Offers_-_The_Lost_Chapter_-_Alex_Hormozi.pdf` | 8 | COMPLETED | SHA-256, bytes, page count PASS | 8/8 | 8 |
| BK-004 | `_OceanofPDF.com_Built_to_Sell_-_John_Warrillow.pdf` | 145 | COMPLETED | SHA-256, bytes, page count PASS | 5/5 | 145 |
| BK-005 | `_OceanofPDF.com_Emyth_revisited_-_Michael_E_Gerber.pdf` | 206 | COMPLETED | SHA-256, bytes, page count PASS | 5/5 | 206 |
| BK-006 | `_OceanofPDF.com_Financial_Intelligence_A_Managers_Guide_to_Knowing_What_the_Numbers_Really_Mean_-_KAREN_BERMAN__JOE_KNIGHT_With_JOHN_CASE.pdf` | 221 | COMPLETED | SHA-256, bytes, page count PASS | 5/5 | 221 |
| BK-007 | `_OceanofPDF.com_Good_Strategy_Bad_Strategy_The_Difference_and_Why_It_Matters_-_Richard_Rumelt.pdf` | 360 | COMPLETED | SHA-256, bytes, page count PASS | 5/5 | 360 |
| BK-008 | `_OceanofPDF.com_High_Output_Management_-_Andrew_S_Grove.pdf` | 192 | COMPLETED | SHA-256, bytes, page count PASS | 5/5 | 192 |
| BK-009 | `_OceanofPDF.com_Obviously_Awesome_-_April_Dunford.pdf` | 140 | COMPLETED | SHA-256, bytes, page count PASS | 5/5 | 140 |
| BK-010 | `_OceanofPDF.com_Profit_First__A_Simple_System_To_Transform_-_Mike_Michalowicz.pdf` | 196 | COMPLETED | SHA-256, bytes, page count PASS | 4/4 | 196 |
| BK-011 | `_OceanofPDF.com_Scaling_Up_-_Verne_Harnish.pdf` | 387 | COMPLETED | SHA-256, bytes, page count PASS | 5/5 | 387 |
| BK-012 | `_OceanofPDF.com_The_Goal__A_Process_of_Ongoing_Improvement_-_Eliyahu_M_Goldratt.pdf` | 351 | COMPLETED | SHA-256, bytes, page count PASS | 5/5 | 351 |
| BK-013 | `_OceanofPDF.com_The_Mom_Test_-_Rob_Fitzpatrick.pdf` | 125 | COMPLETED | SHA-256, bytes, page count PASS | 5/5 | 1 |
| BK-014 | `_OceanofPDF.com_The_Personal_MBA_-_Josh_Kaufman.pdf` | 496 | COMPLETED | SHA-256, bytes, page count PASS | 6/6 | 496 |
| BK-015 | `_OceanofPDF.com_Who_-_Geoff_Smart.pdf` | 165 | COMPLETED | SHA-256, bytes, page count PASS | 5/5 | 165 |
| BK-016 | `feismo.com-business-model-generation-pr_392cdc22664d50c95e5191c6dfdfe7ee.pdf` | 288 | COMPLETED | SHA-256, bytes, page count PASS | 4/4 | 288 |
| BK-017 | `the-lean-startup-how-todays-entrepreneurs-use-continuous-innovation-to-create-radically-successful-businesses-2017-currency-international-edition-9781524762407-1524762407-978-0-307-88791-7.pdf` | 272 | COMPLETED | SHA-256, bytes, page count PASS | 4/4 | 272 |
| BK-018 | `toaz.info-value-proposition-design-pr_a867102f4bc3dd58a0db6bbce59bbbe2.pdf` | 324 | COMPLETED | SHA-256, bytes, page count PASS | 0/5 | 324 |
| BK-019 | `gerber-michael-e-the-e-myth-revisited-harper-collins-e-books-2014_compress.pdf` | 1 | INVALID_COPY | SHA-256, bytes, page count PASS | N/A — invalid copy | N/A |
| BK-020 | `the-personal-mba-josh-kaufman-10th-anniversary-edition-527-pages_convert_compress.pdf` | 1 | INVALID_COPY | SHA-256, bytes, page count PASS | N/A — invalid copy | N/A |

## Method and current evidence

Python 3.12.14, pypdf 6.10.0 i pdftotext/Poppler 25.03.0. Izbor extractora prati originalni coverage dokument. Trimmed page text spaja se sa form-feed separatorom; BK-013 koristi `newline + form-feed + newline`, ostali bare form-feed. Originalni coverage nije dovoljno precizan da razlikuje te dve konvencije, pa su proverene protiv postojećih hash-eva. Bare filenames BK-002 contact sheet-ova razrešavaju se u istorijski evidence direktorijum.

Rezultat: 20/20 source identiteta odgovara ledgeru; svih 18 validnih PDF-ova je otvoreno i tekst ekstrahovan po svim 4.558 stranicama. Prazne/low-text stranice nisu automatski proglašene nedostajućim sadržajem. 87/92 range hash-eva i pripadajućih character count-ova je reproducirano; 55/55 navedenih visual evidence hash-eva se poklapa. Postoje 4.434 originalna per-page rendera: svi validni PDF-ovi imaju pun render osim BK-013, čiji istorijski protokol beleži samo jedan low-text render. Iz toga ne sledi nova vizuelna ili semantička full-book revizija.

BK-016 pypdf emituje upozorenja o pogrešnim xref pokazivačima; ekstrakcija je završena, 288 stranica i sva četiri range hash-a su potvrđeni. Upozorenja nisu sakrivena kao neuspešna ekstrakcija. Dve jednostrane kopije BK-019/BK-020 ostaju INVALID_COPY i nisu kurikularni izvori. Nema identičnih PDF byte duplikata; nazivi alternativnih izdanja ne dokazuju dodatne validne knjige.

## Open finding — BK-018

PDF SHA-256, veličina, broj stranica, svi 324 rendera i pet contact-sheet hash-eva odgovaraju nasleđenim dokazima. Međutim, svih pet range hash-eva i character count-ova iz deklarisane `pdftotext -layout` metode se razlikuju. Prvi raspon je proban i page-by-page: isti sadašnji rezultat od 123.058 znakova, naspram istorijskih 122.836. Razlika u tool verziji ili nedokumentovanoj normalizaciji je moguća, ali uzrok je **UNKNOWN**, ne potvrđen. Ukupno sadašnjih trimmed znakova: 850827; istorijski zbir 850.229.

| Range | Inherited chars | Current chars | Inherited SHA-256 | Current SHA-256 |
|---|---:|---:|---|---|
| 1–65 | 122836 | 123058 | `69645216120c970b32a767868865f341698ac82527ffabe5668a4e0f2d2c9902` | `e32f916b04c80139bd016b6d92ccb947ba7a6c8e8af35fd78cf10b4142ea9985` |
| 66–130 | 136568 | 136762 | `cd23b1727a8abcf7a8e1cda1f9f016e2adb272ab9d5bc8a0d6c391a2dcb2407e` | `34e5b908d10978822e7b72183b7bafa90d7e9f1dfcb0e6326bf3eddecc29ae76` |
| 131–195 | 195273 | 195518 | `3f1f55ea8898aeb82748f858c4baeb767621181efd06d3f2eb9e5ede02c30405` | `2ddceac7d98b71b091b1aac2ca205025f89ad8c12be6039d449a0faf13ab4f70` |
| 196–260 | 258865 | 258857 | `cce75910bf76b0ceed0a1e3cbe0abd97de2955dd05d3013307bf95a297b18505` | `a3f68addcea309ff115fa8dc011eb858acc5254db20d9f6a4f4a8a370c29328e` |
| 261–324 | 136687 | 136632 | `c85ed2a792d2c31e367308b725e3172ee6633eb0ec393d2cf31a6c1b5cc337b9` | `40ca309e3fca48a9e42c7bb5dbd1548012673801dd373b52c4b358d829541b9a` |

Ne menjaju se istorijske vrednosti niti COMPLETED status bez novih dokaza. Validator zadržava FAIL sa pet char i pet hash nalaza. Za zatvaranje je potrebno rekonstruisati originalnu extraction/normalization verziju ili sprovesti novu dokumentovanu obradu BK-018 sa semantičkom i vizuelnom proverom, prema full-book SOP-u. Puko menjanje očekivanih hash-eva ne zatvara nalaz.

## What was actually read now

Pročitani su svih 49 lesson dokumenata, sistemski ugovor i Book Knowledge Base; pregledani su struktura, trenutne integracije i ciljani delovi whole-book beleški. Potvrđena je prisutnost svih 18 beleški, 18 coverage dokumenata i 18 istorijskih source audita. Nije izvršeno novo semantičko čitanje 18 knjiga niti čitanje svake rečenice svih whole-book beleški.

Ciljano otvoren originalni BK-001 PDF, pp. 92–95: primer Michelangela na pp. 93–94 opisuje fingirano menjanje nosa i ispuštanje prikupljene prašine; ranija interpretacija kao poštenog prikaza iz drugog ugla je pogrešna. Beleška i BKB-GTM-004 su ispravljeni. Ostale korekcije prvenstveno uklanjaju nedokazane univerzalne zaključke i usklađuju kanonski evidence ugovor; nisu predstavljene kao nova empirijska validacija knjiških tvrdnji.

