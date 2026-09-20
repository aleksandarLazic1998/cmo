# Lesson 601 — Retail ekonomija i uloga kategorije

status: `AUTHORED`  
level: `6 — Retail i category management`  
prerequisite: `Level 5`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Razlikuje traffic driver, profit driver i stratešku ulogu proizvoda.

## Teach & explain

Kategorija nije samo grupa sličnih proizvoda. Ona ima ulogu za kupca i firmu: može dovoditi posetu, graditi poverenje, stvarati bruto profit ili omogućiti dodatnu prodaju.

Retail ekonomija uključuje i dobavljača: nabavna cena, rok plaćanja, dostupnost, rebate i podrška menjaju stvarni doprinos kategorije, ali nijedan bonus ne popravlja robu koja se ne prodaje.

## Visual model

1. Uloga kategorije → 2. Kupac i saobraćaj → 3. Marža i obrt → 4. Dobavljačka ekonomika

## New terms

- **Traffic driver / Traffic driver:** Proizvod ili kategorija koja dovodi kupce.
- **Profit driver / Profit driver:** Element koji nosi značajan doprinos profitu.
- **Supplier economics / Supplier economics:** Ukupan efekat cene, uslova, bonusa i rizika dobavljača.

## Realistična `[FIXTURE]` simulacija — Laptop i dodatna oprema

Laptopi dovode 100 kupaca uz 6.000 RSD bruto profita po prodaji; dodatna oprema se veže u 40 prodaja uz 3.000 RSD profita.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** kategorija × simulirani mesec
- **Unit / currency:** RSD i transakcije
- **VAT / tax basis:** sve vrednosti na istoj osnovi; bonus nije uključen
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** attach dodaci su relevantni kupcu; povrati izostavljeni
- **Formula / denominator:** Laptop GP 600.000; dodaci 120.000; ukupno pre potvrđenog bonusa 720.000 RSD.

### Inputs

- 100 × 6.000 RSD
- 40 × 3.000 RSD
- dobavljački bonus [UNKNOWN] do ugovora

### Decision

Laptop voditi kao traffic i trust driver, a attach dodataka kao profitnu polugu uz etičan fit.

### Expected result

Uloga se meri ukupnim doprinosom, ne samo maržom jedne SKU.

## Common mistake

- **Pogrešno:** „Kategorija sa najvišom maržom je najvažnija.“
- **Ispravno:** Gledaj ulogu, promet, obrt, attach, dobavljačke uslove i ukupni doprinos.

## Practical exercise

Za tri kategorije odredi ulogu, kupca, KPI, profitnu polugu, supplier driver i guardrail.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; automatski test u aplikaciji proverava razumevanje principa, ne sam zadatak.

## Assessment rubric

Automatski test u aplikaciji proverava znanje, račun/dokaz, primenu i poslovnu odluku sa po tri pitanja po oblasti; svaka oblast nosi 25 poena. Očekivani principi:

1. Uloga kategorije može biti saobraćaj, profit, poverenje ili strateška veza.
2. Ukupan bruto profit pre bonusa u primeru je 720.000 RSD.
3. Kategoriju treba meriti zajedno sa attach-om, obrtom i dobavljačkom ekonomikom.
4. Dobar portfolio prihvata različite uloge proizvoda, ali svaku meri odgovarajućim KPI-jem.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-CUS-001`, `BKB-MET-002` · BK-014 pp. 194–196 (Profit, Value Capture) · BK-006 (doprinos kategorije)

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
