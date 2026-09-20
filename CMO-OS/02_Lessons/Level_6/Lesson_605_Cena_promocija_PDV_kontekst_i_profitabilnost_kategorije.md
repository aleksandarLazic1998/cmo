# Lesson 605 — Cena, promocija, PDV kontekst i profitabilnost kategorije

status: `AUTHORED`  
level: `6 — Retail i category management`  
prerequisite: `604`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Proceni pun efekat komercijalne odluke.

## Teach & explain

Profitabilnost promocije uključuje ostvarenu cenu, nabavnu cenu, količinu, kanibalizaciju, trošak kampanje, povrate i potvrđene dobavljačke bonuse. Promet je samo početak obračuna.

PDV osnova, rebate, godišnji bonus i co-funded promocija zavise od važećeg pravila i ugovora. Dok dokument nije potvrđen, stavka ostaje `[UNKNOWN]` i ne ulazi kao siguran profit.

## Visual model

1. Cena i količina → 2. Direktni trošak → 3. Potvrđeni bonusi / co-funding → 4. Neto efekat promocije

## New terms

- **Rebate / Rebate:** Naknadno odobrenje dobavljača pod ugovorenim uslovima.
- **Co-funding / Co-funded promotion:** Podela troška promocije između partnera.
- **Kanibalizacija / Cannibalization:** Prodaja akcije koja zamenjuje profitabilniju postojeću prodaju.

## Realistična `[FIXTURE]` simulacija — Promocija kategorije

Plan je 100 dodatnih komada sa 2.000 RSD doprinosa, kampanja 120.000 RSD i navodni rebate 50.000 bez potpisane potvrde.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** jedna simulirana promocija
- **Unit / currency:** RSD i komadi
- **VAT / tax basis:** PDV tretman [UNKNOWN] do provere sa računovođom i dokumentom
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** 100 komada je inkrementalno pre kanibalizacije; povrati izostavljeni
- **Formula / denominator:** Potvrđeni efekat = 200.000 − 120.000 − 20.000 = 60.000 RSD; rebate se ne uključuje dok nije potvrđen.

### Inputs

- 100 × 2.000 = 200.000
- kampanja 120.000
- rebate 50.000 [UNKNOWN]
- kanibalizacija 20 × 1.000 = 20.000

### Decision

Odobriti samo ako 60.000 RSD opravdava rizik; rebate tretirati kao upside posle dokumenta.

### Expected result

Promocija ne zavisi od nepotvrđenog dobavljačkog novca.

## Common mistake

- **Pogrešno:** „Dobavljač je usmeno obećao bonus, pa ga možemo knjižiti u profit.“
- **Ispravno:** U odluku ulazi samo potvrđena ugovorna i računovodstvena osnova.

## Practical exercise

Napravi promo P&L sa baznim, lošijim i boljim scenarijem; odvoji potvrđene stavke od `[UNKNOWN]` rebate-a i PDV tretmana.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; automatski test u aplikaciji proverava razumevanje principa, ne sam zadatak.

## Assessment rubric

Automatski test u aplikaciji proverava znanje, račun/dokaz, primenu i poslovnu odluku sa po tri pitanja po oblasti; svaka oblast nosi 25 poena. Očekivani principi:

1. Promo rezultat uključuje cenu, doprinos, kampanju, kanibalizaciju i samo potvrđene bonuse.
2. Potvrđeni efekat bez rebate-a u primeru je 60.000 RSD.
3. Rebate, co-funding i PDV tretman moraju imati ugovor, period i stručnu potvrdu.
4. Promocija se odobrava prema potvrđenom profitu i guardrail-ima, ne prema obećanom prometu.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-FIN-003`, `BKB-MET-006` · BK-006 (efekat promocije na maržu) · BK-014 p. 411 (Analytical Honesty)
- Poreska uprava RS — PDV i poreski kalendar · provereno 2026-08-22

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
## Local authority boundary

PDV, knjiženje rebate-a i ugovorni uslovi su lokalno i vremenski osetljivi. Primer je `[FIXTURE]`; odluku potvrđuju računovođa i odgovarajući ugovor.

