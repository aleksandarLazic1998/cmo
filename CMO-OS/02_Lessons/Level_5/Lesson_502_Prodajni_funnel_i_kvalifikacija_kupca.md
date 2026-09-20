# Lesson 502 — Prodajni funnel i kvalifikacija kupca

status: `AUTHORED`  
level: `5 — Prodaja i marketing`  
prerequisite: `501`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Mapira lead, priliku, fazu i konverziju.

## Teach & explain

Funnel prikazuje koliko kupaca prolazi kroz jasno definisane faze. Lead nije isto što i prilika: kvalifikovana prilika ima problem, fit, mogućnost odluke i realan sledeći korak.

Konverzija se uvek vezuje za dve faze, period i populaciju. Bez toga procenat izgleda precizno, ali ništa ne znači.

## Visual model

1. Lead → 2. Kvalifikovan → 3. Ponuda → 4. Dobijeno / izgubljeno

## New terms

- **Lead / Lead:** Kontakt ili nalog koji može imati interesovanje.
- **Kvalifikovana prilika / Qualified opportunity:** Kupac sa potvrđenim problemom, fit-om i procesom odluke.
- **Konverzija / Conversion rate:** Broj koji je prešao u sledeću fazu ÷ broj na ulazu faze.

## Realistična `[FIXTURE]` simulacija — Mesečni prodajni funnel

Ušlo je 100 leadova, 40 je kvalifikovano, 20 je dobilo ponudu, a 8 je kupilo.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** faza × simulirani mesečni cohort
- **Unit / currency:** kupci i % mesečno
- **VAT / tax basis:** nije relevantan
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** faze su međusobno isključive i definicije stabilne
- **Formula / denominator:** Lead→kvalifikovan 40%; ponuda→dobijeno 40%; lead→kupac 8%.

### Inputs

- 100 leadova
- 40 kvalifikovanih
- 20 ponuda
- 8 dobijenih

### Decision

Istražiti zašto samo polovina kvalifikovanih stiže do ponude pre povećanja leadova.

### Expected result

Prioritet je sredina funnel-a, ne automatski veći marketing budžet.

## Common mistake

- **Pogrešno:** „Imamo 100 prilika jer imamo 100 email adresa.“
- **Ispravno:** Lead postaje prilika tek posle kvalifikacije i konkretnog sledećeg koraka.

## Practical exercise

Definiši ulazni i izlazni kriterijum za četiri faze, owner-a, rok i razlog gubitka.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; automatski test u aplikaciji proverava razumevanje principa, ne sam zadatak.

## Assessment rubric

Automatski test u aplikaciji proverava znanje, račun/dokaz, primenu i poslovnu odluku sa po tri pitanja po oblasti; svaka oblast nosi 25 poena. Očekivani principi:

1. Funnel zahteva jasne faze i kvalifikaciona pravila.
2. Ukupna lead-to-customer konverzija u primeru je 8%.
3. Pre većeg ulaza treba locirati fazu sa problemom i proveriti razlog.
4. Kvalitet pipeline-a je važniji od naduvanog broja leadova.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-GTM-001`, `BKB-CUS-002` · BK-014 pp. 117, 123 (Probable Purchaser, Qualification)

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
