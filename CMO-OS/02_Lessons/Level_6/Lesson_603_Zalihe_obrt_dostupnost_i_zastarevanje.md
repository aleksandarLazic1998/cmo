# Lesson 603 — Zalihe, obrt, dostupnost i zastarevanje

status: `AUTHORED`  
level: `6 — Retail i category management`  
prerequisite: `602`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Balansira prodaju, gotovinu i rizik zaliha uz lead time, MOQ i rok plaćanja.

## Teach & explain

Zaliha omogućava dostupnost, ali vezuje gotovinu i nosi rizik krađe, oštećenja, pada cene i zastarevanja. Visoka dostupnost nije besplatna, a premala zaliha gubi prodaju i poverenje.

Odluka o količini mora povezati potražnju, lead time, minimalnu porudžbinu (MOQ), rok plaćanja dobavljaču i brzinu zastarevanja.

### Zašto je ovo važno vlasniku

Zaliha je novac na polici. U tehnici se brzo menjaju modeli, pa višak zalihe gubi vrednost.

### Na tabli `[FIXTURE]`

Model se prodaje 3 komada dnevno, dobavljač isporučuje za 10 dana, a sigurnosna zaliha je 6 komada. Tačka ponovne porudžbine = 3 × 10 + 6 = 36 komada: kada zaliha padne na 36, naručuje se.

### Sa čim se meša

Visoka dostupnost nije besplatna, a mala zaliha nije uvek ušteda: nedostatak robe gubi prodaju i poverenje. MOQ dobavljača može nametnuti višak (Lesson 606).

### Veza sa drugim lekcijama

Koristi Lesson 204 (obrtni kapital) i 602 (asortiman); Lesson 606 pregovara MOQ i rok plaćanja.

### Iz korpusa

BK-012 *The Goal*, PDF pp. 51–53, 62–63 i 74–77 (zaliha kao deo merenja sistema; whole-book beleška). BK-014 pp. 383–385 (Stock, Slack) provereni u tekstu korpusa. Raniji lokator „pp. 361–362“ bio je pogrešan i ispravljen je 2026-11-05.

## Visual model

1. Potražnja → 2. Lead time i MOQ → 3. Naručena zaliha → 4. Prodaja ili zastarevanje

## New terms

- **Obrt zalihe / Inventory turnover:** Koliko puta se prosečna zaliha proda u periodu.
- **Vreme do raspoloživosti naručene robe / Lead time:** Vreme od narudžbine do dostupne robe.
- **MOQ / Minimum order quantity:** Najmanja količina jedne porudžbine koju dobavljač prihvata.
- **Prag ponovnog naručivanja / Reorder point:** Stanje inventory position-a pri kojem se šalje nova porudžbina; nije količina te porudžbine.
- **Raspoloživa i naručena zaliha umanjena za preuzete obaveze / Inventory position:** Zaliha na stanju + otvorene porudžbine − rezervisane/neisporučene količine.

## Realistična `[FIXTURE]` simulacija — Porudžbina modela koji brzo zastareva

Prodaja je 10 komada nedeljno, lead time 3 nedelje, sigurnosna zaliha 10, a MOQ 50 komada.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** jedan simulirani SKU
- **Unit / currency:** komadi, nedelje i dani
- **VAT / tax basis:** nije relevantan za količinsku odluku
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** potražnja stabilna; nema otvorenih porudžbina
- **Formula / denominator:** Prag ponovnog naručivanja (reorder point) = 10 × 3 + 10 = 40 komada na inventory position-u. Zasebno planirana količina porudžbine je 30 komada; MOQ podiže količinu na 50, odnosno 20 iznad plana. Prag određuje kada naručiti, a količina koliko naručiti.

### Inputs

- potražnja tokom lead time-a 30
- sigurnosna zaliha 10
- prag naručivanja 40 komada (zaliha + otvorene porudžbine − rezervacije)
- zasebno planirana količina porudžbine 30 komada
- MOQ 50
- rok plaćanja 15 dana

### Decision

Pregovarati manji MOQ ili faznu isporuku; ne naručiti automatski 50 bez cash i zastarevanje scenarija.

### Expected result

Dobavljački uslov postaje vidljiv rizik, ne skriven detalj.

## Common mistake

- **Pogrešno:** „Ako je proizvod profitabilan, više zalihe je bolje.“
- **Ispravno:** Profit po komadu ne uklanja rizik obrtaja, pada cene i gotovine.

## Practical exercise

Izračunaj reorder point, višak zbog MOQ-a i cash izloženost za jedan SKU. Dodaj scenario pada prodaje 30%.

**Rešenje za proveru:** Reorder point = 30 + 10 = 40 komada; zasebni plan porudžbine je 30, pa MOQ 50 znači 20 komada više od plana. Ne oduzimaj prag od količine porudžbine. Cash izloženost ostaje `[UNKNOWN]` dok se ne unese nabavna cena po komadu. Uz pad prodaje 30% (7 komada nedeljno) potražnja tokom lead time-a je 21, reorder point 31, a nova serija od 50 komada sama pokriva oko 7,1 nedelju prodaje umesto 5 (bez prethodne zalihe) — rizik zastarevanja raste.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; procena proverava i razumevanje principa i sam zadatak.

## Assessment rubric

Procena proverava znanje, račun/dokaz, primenu i poslovnu odluku; svaka oblast nosi 25 poena. Očekivani principi:

1. Zaliha balansira dostupnost, gotovinu i rizik zastarevanja.
2. Reorder point je prag od 40 komada; plan porudžbine 30 i MOQ 50 zasebno daju količinu od 50, odnosno 20 iznad plana.
3. Odluka mora uključiti lead time, MOQ, rok plaćanja i scenario tražnje.
4. Ako MOQ stvara višak, pregovaranje uslova može biti bolje od slepog naručivanja.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-OPS-008`, `BKB-FIN-005` · BK-012 (zaliha kao trošak sistema) · BK-014 pp. 383–385 (Stock, Slack; ispravljeno 2026-11-05)

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
