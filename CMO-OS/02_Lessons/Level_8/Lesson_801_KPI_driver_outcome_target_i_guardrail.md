# Lesson 801 — KPI, driver, outcome, target i guardrail

status: `AUTHORED`  
level: `8 — Komercijalno upravljanje`  
prerequisite: `Level 7`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Dizajnira metriku koja vodi odluci i sprečava štetnu optimizaciju.

## Teach & explain

Outcome govori šta je postignuto, driver pokazuje šta verovatno utiče na ishod, target definiše željeni nivo, a guardrail sprečava da poboljšanje jedne metrike ošteti drugu.

Dobar KPI ima formulu, grain, period, owner-a, izvor, prag i odluku koju pokreće. Bez odluke, dashboard je samo dekoracija.

## Visual model

1. Poslovni cilj → 2. Outcome KPI → 3. Driver KPI → 4. Guardrail i akcija

## New terms

- **Outcome KPI / Outcome KPI:** Mera konačnog poslovnog ishoda.
- **Driver KPI / Driver KPI:** Mera aktivnosti ili uslova koji utiču na ishod.
- **Guardrail / Guardrail metric:** Mera koja štiti od štetne optimizacije.

## Realistična `[FIXTURE]` simulacija — Brža isporuka

Cilj je povećati on-time delivery sa 82% na 95%, bez rasta oštećenja.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** porudžbina × nedelja
- **Unit / currency:** % i procentni poeni nedeljno
- **VAT / tax basis:** nije relevantan
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** definicija „na vreme“ i populacija su stabilne
- **Formula / denominator:** Jaz do targeta = 13 procentnih poena; driver jaz do internog praga 90% je 20 pp.

### Inputs

- outcome OTD 82%
- driver porudžbine spremne do 14h: 70%
- guardrail oštećenja ≤1%

### Decision

Testirati ranije presecanje porudžbina i pratiti OTD i oštećenja zajedno.

### Expected result

Akcija ima target i zaštitu kvaliteta.

## Common mistake

- **Pogrešno:** „KPI je svaki broj na dashboard-u.“
- **Ispravno:** KPI je definisana mera vezana za cilj, owner-a i odluku.

## Practical exercise

Dizajniraj jedan outcome, dva driver-a i jedan guardrail sa formulom, grain-om, izvorom, targetom i akcijom.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; automatski test u aplikaciji proverava razumevanje principa, ne sam zadatak.

## Assessment rubric

Automatski test u aplikaciji proverava znanje, račun/dokaz, primenu i poslovnu odluku sa po tri pitanja po oblasti; svaka oblast nosi 25 poena. Očekivani principi:

1. Outcome, driver, target i guardrail imaju različite uloge.
2. Jaz OTD-a do targeta u primeru je 13 procentnih poena.
3. KPI definicija mora sadržati formulu, populaciju, period, owner-a i odluku.
4. Brzina se ne optimizuje ako guardrail kvaliteta pokazuje štetu.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-MET-001`, `BKB-MET-004`, `BKB-MET-006` · BK-008 (indikatori i uparivanje) · BK-011 (KPI) · BK-014 pp. 406–413

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
