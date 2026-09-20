# Lesson 803 — Dashboard, odstupanje i root-cause analiza

status: `AUTHORED`  
level: `8 — Komercijalno upravljanje`  
prerequisite: `802`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Razlikuje simptom od verovatnog uzroka i sledećeg testa.

## Teach & explain

Dashboard treba brzo da pokaže: šta je odstupilo, koliko, gde i od kada. Root-cause analiza zatim odvaja simptom od mogućih uzroka i traži dokaz pre akcije.

Jedna korelacija nije uzrok. Dobar pregled se spušta sa outcome-a na segment, proizvod, kanal, proces i vreme, pa predlaže najmanji test koji razlikuje hipoteze.

## Visual model

1. Signal odstupanja → 2. Razlaganje → 3. Hipoteze → 4. Test i korekcija

## New terms

- **Odstupanje / Variance:** Razlika stvarnog rezultata prema planu ili prethodnom periodu.
- **Root cause / Root cause:** Uzrok koji objašnjava problem i može se ciljano menjati.
- **Drill-down / Drill-down:** Spuštanje ukupne metrike na detaljnije segmente.

## Realistična `[FIXTURE]` simulacija — Pad bruto marže

Marža pada sa 30% na 26%. Cena i trošak po SKU su stabilni, ali miks se pomerio ka niskomarginim proizvodima.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** SKU × simulirani mesec
- **Unit / currency:** % i procentni poeni
- **VAT / tax basis:** sve stope na istoj osnovi
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** metod marže se nije menjao
- **Formula / denominator:** Odstupanje marže = −4 pp; promena miksa = +20 pp udela low-margin proizvoda.

### Inputs

- pre 30%
- sada 26%
- cena po SKU stabilna
- udio low-margin miksa 40%→60%

### Decision

Testirati uzrok promene miksa i dostupnost high-margin proizvoda pre promene cena.

### Expected result

Akcija cilja verovatni driver, ne simptom.

## Common mistake

- **Pogrešno:** „Marža je pala, odmah podigni sve cene.“
- **Ispravno:** Prvo razloži efekat cene, troška, miksa, popusta i povrata.

## Practical exercise

Za jedno odstupanje napravi issue tree sa tri hipoteze, potrebnim podacima, testom i kriterijumom odluke.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; automatski test u aplikaciji proverava razumevanje principa, ne sam zadatak.

## Assessment rubric

Automatski test u aplikaciji proverava znanje, račun/dokaz, primenu i poslovnu odluku sa po tri pitanja po oblasti; svaka oblast nosi 25 poena. Očekivani principi:

1. Dashboard signalizira odstupanje, a root-cause analiza traži uzrok.
2. Pad u primeru je 4 procentna poena uz rast low-margin miksa od 20 pp.
3. Pre akcije treba razložiti cenu, trošak, miks, popust i kvalitet podatka.
4. Korektivna akcija se bira tek kada dokaz razlikuje verovatne hipoteze.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-MET-003`, `BKB-MET-006`, `BKB-PEO-007` · BK-014 pp. 411–413 (Analytical Honesty, Context) · BK-012 (lokalni vs. sistemski optimum)

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
