# Book Reading Ledger

Status: `active`  
Acquisition policy: `MANDATORY_FULL_CORPUS`  
Last updated: `2026-08-23`  
Inspection method: `page-by-page text accessibility scan + SHA-256` (BK-001…BK-017 inventar: pypdf; BK-018 i dalje: `pdftotext -layout` po stranici, `pdfinfo` za identitet, Poppler render za vizuelnu proveru)

## Completion contract

`COMPLETED` znači da je obrađena svaka dostupna stranica prema `04_SOP/full_book_acquisition.md`, da postoji whole-book note i da je coverage prošao audit. `INVENTORIED` ne znači da je knjiga pročitana.

## Corpus summary

- `[FACT]` Detektovano je 20 PDF fajlova u `/home/aleksandar-lazic1998/Documents/Books` na dan 2026-08-23.
- `[FACT]` 18 PDF-ova su validni obavezni corpus izvori: ukupno 4.558 PDF stranica i 8.213.910 izvučenih znakova teksta pre vizuelne provere.
- `[FACT]` Dve jednostrane kopije su neupotrebljive i vezane su za potpuna izdanja istih knjiga.
- `[FACT]` Svih 18 validnih obaveznih izvora (BK-001 do BK-018) ima status `COMPLETED` prema full-book standardu. Nijedan izvor nije preostao.
- `[FACT]` Completed page coverage: 4.558/4.558 stranica (18/18 izvora). Korpus je zatvoren 2026-08-23.
- `[FACT]` BK-001 je jedini izvor u korpusu čiji je **preskriptivni sloj odbačen** uz zadržavanje deskriptivnog; obrazloženje i lista isključenja su u `notes/BK-001_The_48_Laws_of_Power.md`, verdikt `APPROVE` pokriva postupanje sa izvorom, ne sam izvor.

## Reading status

| ID | Source | Pages | Text pages | Status | Text coverage | Visual coverage | Whole-book note | Audit |
|---|---|---:|---:|---|---:|---|---|---|
| BK-001 | Robert Greene — *The 48 Laws of Power* | 476 | 475 | `COMPLETED` | 476/476 | 476/476 complete | `notes/BK-001_The_48_Laws_of_Power.md` | `APPROVE` |
| BK-002 | Alex Hormozi — *$100M Offers* | 206 | 181 | `COMPLETED` | 206/206 | 206/206 complete | `notes/BK-002_100M_Offers.md` | `APPROVE` |
| BK-003 | Alex Hormozi — *The Lost Chapter: Your First Avatar* | 8 | 7 | `COMPLETED` | 8/8 | 8/8 complete | `notes/BK-003_The_Lost_Chapter.md` | `APPROVE` |
| BK-004 | John Warrillow — *Built to Sell* | 145 | 141 | `COMPLETED` | 145/145 | 145/145 complete | `notes/BK-004_Built_to_Sell.md` | `APPROVE` |
| BK-005 | Michael E. Gerber — *The E-Myth Revisited* | 206 | 203 | `COMPLETED` | 206/206 | 206/206 complete | `notes/BK-005_The_E-Myth_Revisited.md` | `APPROVE` |
| BK-006 | Karen Berman, Joe Knight, John Case — *Financial Intelligence* | 221 | 218 | `COMPLETED` | 221/221 | 221/221 complete | `notes/BK-006_Financial_Intelligence.md` | `APPROVE` |
| BK-007 | Richard Rumelt — *Good Strategy/Bad Strategy* | 360 | 355 | `COMPLETED` | 360/360 | 360/360 complete | `notes/BK-007_Good_Strategy_Bad_Strategy.md` | `APPROVE` |
| BK-008 | Andrew S. Grove — *High Output Management* | 192 | 183 | `COMPLETED` | 192/192 | 192/192 complete | `notes/BK-008_High_Output_Management.md` | `APPROVE` |
| BK-009 | April Dunford — *Obviously Awesome* | 140 | 128 | `COMPLETED` | 140/140 | 140/140 complete | `notes/BK-009_Obviously_Awesome.md` | `APPROVE` |
| BK-010 | Mike Michalowicz — *Profit First* | 196 | 193 | `COMPLETED` | 196/196 | 196/196 complete | `notes/BK-010_Profit_First.md` | `APPROVE` |
| BK-011 | Verne Harnish — *Scaling Up* | 387 | 370 | `COMPLETED` | 387/387 | 387/387 complete | `notes/BK-011_Scaling_Up.md` | `APPROVE` |
| BK-012 | Eliyahu M. Goldratt — *The Goal* | 351 | 350 | `COMPLETED` | 351/351 | 351/351 complete | `notes/BK-012_The_Goal.md` | `APPROVE` |
| BK-013 | Rob Fitzpatrick — *The Mom Test* | 125 | 124 | `COMPLETED` | 125/125 | Low-text exception reviewed | `notes/BK-013_The_Mom_Test.md` | `APPROVE` |
| BK-014 | Josh Kaufman — *The Personal MBA* | 496 | 494 | `COMPLETED` | 496/496 | 496/496 complete | `notes/BK-014_The_Personal_MBA.md` | `APPROVE` |
| BK-015 | Geoff Smart, Randy Street — *Who* | 165 | 159 | `COMPLETED` | 165/165 | 165/165 complete | `notes/BK-015_Who.md` | `APPROVE` |
| BK-016 | Alexander Osterwalder, Yves Pigneur — *Business Model Generation* | 288 | 267 | `COMPLETED` | 288/288 | 288/288 complete | `notes/BK-016_Business_Model_Generation.md` | `APPROVE` |
| BK-017 | Eric Ries — *The Lean Startup* | 272 | 259 | `COMPLETED` | 272/272 | 272/272 complete | `notes/BK-017_The_Lean_Startup.md` | `APPROVE` |
| BK-018 | Osterwalder et al. — *Value Proposition Design* | 324 | 269 | `COMPLETED` | 324/324 | 324/324 complete | `notes/BK-018_Value_Proposition_Design.md` | `APPROVE` |
| BK-019 | Gerber compressed one-page file | 1 | 0 | `INVALID_COPY` | N/A | N/A | Superseded by BK-005 | N/A |
| BK-020 | Kaufman compressed one-page file | 1 | 0 | `INVALID_COPY` | N/A | N/A | Superseded by BK-014 | N/A |

## Source identity

| ID | Filename | Bytes | SHA-256 |
|---|---|---:|---|
| BK-001 | `The+48+Laws+Of+Power.pdf` | 31,058,156 | `5586435106a4e20fca2fdf527fd9ce405b6c1f65e20a4340f7bac46f8b3f91c6` |
| BK-002 | `_OceanofPDF.com_100M_Offers_-_Alex_Hormozi.pdf` | 3,256,624 | `12236eee167e52afdfe20d59ca270adb3fbc148b1bfd6b1f54e02352d65065d2` |
| BK-003 | `_OceanofPDF.com_100M_Offers_-_The_Lost_Chapter_-_Alex_Hormozi.pdf` | 999,326 | `109d7d2de764658857387c9d09e3eef216d4cf64c5a9aecfaff7acc3fb163a88` |
| BK-004 | `_OceanofPDF.com_Built_to_Sell_-_John_Warrillow.pdf` | 740,133 | `656cbb284741937421e450d287238f9e7e049fe7abd6aef0fff7aee3f15b7164` |
| BK-005 | `_OceanofPDF.com_Emyth_revisited_-_Michael_E_Gerber.pdf` | 1,120,042 | `09e9705684ab09e87fa169166d44185604fbfd67d7bd7b3ebd4a583ecaabbb43` |
| BK-006 | `_OceanofPDF.com_Financial_Intelligence_A_Managers_Guide_to_Knowing_What_the_Numbers_Really_Mean_-_KAREN_BERMAN__JOE_KNIGHT_With_JOHN_CASE.pdf` | 2,421,123 | `b73fbefe47db1c3b352c32a0bef97452f59bb7e773841fcb1b68fac5a133f394` |
| BK-007 | `_OceanofPDF.com_Good_Strategy_Bad_Strategy_The_Difference_and_Why_It_Matters_-_Richard_Rumelt.pdf` | 2,672,148 | `862eef8c2a5897030c443b5df9e2975b3e949b80392f1b632ce18a35f5af7109` |
| BK-008 | `_OceanofPDF.com_High_Output_Management_-_Andrew_S_Grove.pdf` | 5,128,480 | `69e9b0cc0ce40602fdda4a40bb7ed999f9d99b804a63ab0e04c6355ee675b10f` |
| BK-009 | `_OceanofPDF.com_Obviously_Awesome_-_April_Dunford.pdf` | 3,602,989 | `a421fda8b8d02d5cfbf763dd0a55350a6298fcb7a10cad99d6b3c520d1db5244` |
| BK-010 | `_OceanofPDF.com_Profit_First__A_Simple_System_To_Transform_-_Mike_Michalowicz.pdf` | 1,453,737 | `6a598f59f4fb2956e36404ab2bdbfa15595871efe44478205fe0d3e4fde7e6e9` |
| BK-011 | `_OceanofPDF.com_Scaling_Up_-_Verne_Harnish.pdf` | 23,621,515 | `38c566ad25d49b0e8aeaa301bfb26cafb5f6bf63a1d9e30f4757efe61e8725c5` |
| BK-012 | `_OceanofPDF.com_The_Goal__A_Process_of_Ongoing_Improvement_-_Eliyahu_M_Goldratt.pdf` | 1,985,109 | `95550e68ac4574d2fdb928d6f492557110e2375949e77a5cc23b45fcf556fc3b` |
| BK-013 | `_OceanofPDF.com_The_Mom_Test_-_Rob_Fitzpatrick.pdf` | 594,127 | `90cfaf56256057ffbcc4f443120354ced6c5ba52240da66c1f16e903fbf550f1` |
| BK-014 | `_OceanofPDF.com_The_Personal_MBA_-_Josh_Kaufman.pdf` | 3,894,485 | `1a41fd73ef09bd44a931dbcbf985c9c42d0fa274ccc7b6ed246cfbad0a2f7e2b` |
| BK-015 | `_OceanofPDF.com_Who_-_Geoff_Smart.pdf` | 1,352,478 | `eb1f4cee4eb034812f156492224de271bf52086447b5afe65d9002560a8fa925` |
| BK-016 | `feismo.com-business-model-generation-pr_392cdc22664d50c95e5191c6dfdfe7ee.pdf` | 58,474,792 | `db5465a6e8e981b26809f53c317bf94660d3fba41f6ce0e7c68e8337b9b01590` |
| BK-017 | `the-lean-startup-how-todays-entrepreneurs-use-continuous-innovation-to-create-radically-successful-businesses-2017-currency-international-edition-9781524762407-1524762407-978-0-307-88791-7.pdf` | 1,689,180 | `d48ff351de0e6cb75775552979c0aba4385ff7959fa931addcedde149b3ec4d8` |
| BK-018 | `toaz.info-value-proposition-design-pr_a867102f4bc3dd58a0db6bbce59bbbe2.pdf` | 32,184,624 | `519de86319de19863843f01e698803127917bf3baec3a1845a2cea9601421e5d` |
| BK-019 | `gerber-michael-e-the-e-myth-revisited-harper-collins-e-books-2014_compress.pdf` | 2,217 | `14f500d0ff7d074ccb472aa9ca35165f872706819d3803baa565bd40f8a74f36` |
| BK-020 | `the-personal-mba-josh-kaufman-10th-anniversary-edition-527-pages_convert_compress.pdf` | 26,100 | `4607621d8fccec5a1bcbeb4d483f8f57995665857291c8be424bf83b2ee7b6aa` |

## Execution rule

Rad je počeo iz najmanjeg pouzdano završivog source unit-a radi validacije procedure i nastavljen dok svih 18 mandatory knjiga nije dobilo status `COMPLETED`. Redosled nije menjao mandatory scope. Status je čuvan posle svakog obrađenog page range-a.

`[FACT]` Mandatory scope je ispunjen 2026-08-23. Svaka buduća knjiga dodaje se kao novi source unit i prolazi isti gate iz `04_SOP/full_book_acquisition.md`; postojeći `COMPLETED` statusi se ne otvaraju ponovo osim ako se promeni SHA-256 izvora.
