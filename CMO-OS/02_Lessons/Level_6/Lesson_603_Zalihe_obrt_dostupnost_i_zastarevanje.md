# Lesson 603 — Zalihe, obrt, dostupnost i zastarevanje

status: `AUTHORED`  
level: `6 — Retail i category management`  
prerequisite: `602`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Balansira prodaju, gotovinu i rizik zaliha.

## Teach & explain

Zaliha omogućava dostupnost, ali vezuje gotovinu i nosi rizik krađe, oštećenja, pada cene i zastarevanja. Visoka dostupnost nije besplatna, a premala zaliha gubi prodaju i poverenje.

Odluka o količini mora povezati potražnju, lead time, minimalnu porudžbinu (MOQ), rok plaćanja dobavljaču i brzinu zastarevanja.

## Visual model

1. Potražnja → 2. Lead time i MOQ → 3. Naručena zaliha → 4. Prodaja ili zastarevanje

## New terms

- **Obrt zalihe / Inventory turnover:** Koliko puta se prosečna zaliha proda u periodu.
- **Lead time / Lead time:** Vreme od narudžbine do dostupne robe.
- **MOQ / Minimum order quantity:** Najmanja količina koju dobavljač prihvata.

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
- **Formula / denominator:** Reorder point 40 komada; MOQ prisiljava porudžbinu 50, odnosno 10 iznad ciljane potrebe.

### Inputs

- potražnja tokom lead time-a 30
- sigurnosna zaliha 10
- reorder potreba 40
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

**Rešenje za proveru:** Reorder point = 30 + 10 = 40 komada; MOQ 50 znači višak od 10 komada iznad potrebe. Cash izloženost ostaje `[UNKNOWN]` dok se ne unese nabavna cena po komadu. Uz pad prodaje 30% (7 komada nedeljno) potražnja tokom lead time-a je 21, reorder point 31, a istih 50 komada pokriva oko 7 nedelja umesto 5 — rizik zastarevanja raste.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; automatski test u aplikaciji proverava razumevanje principa, ne sam zadatak.

## Assessment rubric

Automatski test u aplikaciji proverava znanje, račun/dokaz, primenu i poslovnu odluku sa po tri pitanja po oblasti; svaka oblast nosi 25 poena. Očekivani principi:

1. Zaliha balansira dostupnost, gotovinu i rizik zastarevanja.
2. Reorder point u primeru je 40 komada, dok MOQ traži 50.
3. Odluka mora uključiti lead time, MOQ, rok plaćanja i scenario tražnje.
4. Ako MOQ stvara višak, pregovaranje uslova može biti bolje od slepog naručivanja.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-OPS-008`, `BKB-FIN-005` · BK-012 (zaliha kao trošak sistema) · BK-014 pp. 361–362 (Stock, Slack)

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
