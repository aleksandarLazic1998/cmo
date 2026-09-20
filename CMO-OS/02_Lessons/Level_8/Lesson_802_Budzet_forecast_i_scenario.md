# Lesson 802 — Budžet, forecast i scenario

status: `AUTHORED`  
level: `8 — Komercijalno upravljanje`  
prerequisite: `801`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Planira bazni, bolji i lošiji ishod sa pretpostavkama.

## Teach & explain

Budžet je odobren plan resursa, forecast je najnovija procena ishoda, a scenario pokazuje kako rezultat izgleda pod različitim pretpostavkama. Forecast nije obećanje niti treba da se menja da bi izgledao kao budžet.

Pipeline-to-revenue forecast množi vrednost prilika verovatnoćom samo kada su faze i verovatnoće kalibrisane. Uz weighted iznos treba prikazati i rizik koncentracije, vremena i kapaciteta.

## Visual model

1. Budžet → 2. Stvarni driver-i → 3. Base / upside / downside → 4. Forecast i akcija

## New terms

- **Budžet / Budget:** Odobren plan ciljeva i resursa.
- **Forecast / Forecast:** Aktuelna procena najverovatnijeg ishoda.
- **Weighted pipeline / Weighted pipeline:** Vrednost prilike × kalibrisana verovatnoća zatvaranja.

## Realistična `[FIXTURE]` simulacija — Pipeline forecast

Tri prilike: 500.000 RSD na 80%, 300.000 na 50% i 200.000 na 20%.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** prilika × očekivani datum zatvaranja
- **Unit / currency:** RSD i % za mesec
- **VAT / tax basis:** vrednosti na istoj komercijalnoj osnovi
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** verovatnoće su istorijski kalibrisane i prilike nezavisne
- **Formula / denominator:** Weighted forecast = 400.000 + 150.000 + 40.000 = 590.000 RSD; jaz prema budžetu 110.000 RSD.

### Inputs

- 500.000 × 80%
- 300.000 × 50%
- 200.000 × 20%
- mesečni budžet 700.000

### Decision

Prikazati downside ako najveća prilika kasni i otvoriti konkretne akcije za jaz.

### Expected result

Forecast ostaje iskren signal, ne prepisani cilj.

## Common mistake

- **Pogrešno:** „Forecast mora da bude jednak budžetu.“
- **Ispravno:** Forecast treba da pokaže najnoviju istinu i rizik, čak i kada je ispod plana.

## Practical exercise

Napravi base, upside i downside forecast iz pet prilika. Dodaj očekivani datum, verovatnoću, owner-a i rizik koncentracije.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; automatski test u aplikaciji proverava razumevanje principa, ne sam zadatak.

## Assessment rubric

Automatski test u aplikaciji proverava znanje, račun/dokaz, primenu i poslovnu odluku sa po tri pitanja po oblasti; svaka oblast nosi 25 poena. Očekivani principi:

1. Budžet je plan, forecast procena, a scenario raspon mogućih ishoda.
2. Weighted forecast u primeru je 590.000 RSD, 110.000 ispod budžeta.
3. Pipeline forecast mora imati definisane faze, kalibrisane verovatnoće i vreme zatvaranja.
4. Lošiji iskren forecast je korisniji od lažne usklađenosti sa budžetom.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-SCN-001`, `BKB-STR-002` · BK-014 pp. 447, 355 (Scenario Planning, Planning Fallacy) · BK-011 (ritam planiranja)

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
