# Lesson 104 — Cena, popust, volumen i profitni trade-off

status: `AUTHORED`  
level: `1 — Ekonomija jednog posla`  
prerequisite: `103`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Proceni kada veća prodaja smanjuje rezultat.

## Teach & explain

Popust snižava profit po jedinici. Da bi ukupan profit ostao isti, količina mora porasti dovoljno da nadoknadi izgubljeni doprinos na svakoj prodaji.

Zato nije dovoljno pitati „koliko više komada prodajemo“. Treba izračunati novu contribution margin i potreban dodatni volumen, uz ograničenje kapaciteta i zaliha.

## Visual model

1. Stara cena i doprinos → 2. Popust → 3. Novi doprinos → 4. Potreban volumen

## New terms

- **Popust / Discount:** Smanjenje ostvarene prodajne cene.
- **Profitni trade-off / Profit trade-off:** Razmena profita po jedinici za mogući veći obim.
- **Inkrementalni volumen / Incremental volume:** Dodatna količina nastala zbog odluke.

## Realistična `[FIXTURE]` simulacija — Popust na dodatak

Cena je 10.000 RSD, varijabilni trošak 6.000, a prodaja 100 komada. Razmatra se cena 9.000 RSD.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** proizvod × simulirana akcija
- **Unit / currency:** RSD i komadi
- **VAT / tax basis:** obe cene na istoj osnovi
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** varijabilni trošak ostaje 6.000 RSD; nema kanibalizacije
- **Formula / denominator:** Za istih 400.000 RSD doprinosa treba 400.000 ÷ 3.000 = 134 komada, odnosno najmanje 34% više.

### Inputs

- stari doprinos 4.000 × 100
- novi doprinos 3.000 po komadu
- cilj je zadržati 400.000 RSD doprinosa

### Decision

Ne uvoditi popust bez dokaza da može doneti najmanje 34 dodatna komada i bez provere kapaciteta.

### Expected result

Odluka se zasniva na profitu, ne samo na prometu.

## Common mistake

- **Pogrešno:** „10% popusta traži samo 10% više prodaje.“
- **Ispravno:** Potreban rast zavisi od izgubljenog doprinosa, ovde je najmanje 34%.

## Practical exercise

Promeni popust na 15% i izračunaj novi potreban volumen. Dodaj jedan guardrail osim profita.

**Rešenje za proveru:** Popust 15% spušta cenu na 8.500 RSD, pa doprinos pada sa 4.000 na 2.500 RSD. Za istih 400.000 RSD doprinosa treba 400.000 ÷ 2.500 = 160 komada, odnosno 60% više prodaje. Guardrail primer: minimalna marža po komadu ili maksimalan udeo popusta u prometu.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; automatski test u aplikaciji proverava razumevanje principa, ne sam zadatak.

## Assessment rubric

Automatski test u aplikaciji proverava znanje, račun/dokaz, primenu i poslovnu odluku sa po tri pitanja po oblasti; svaka oblast nosi 25 poena. Očekivani principi:

1. Popust se procenjuje preko novog doprinosa po jedinici i potrebnog volumena.
2. Za isti doprinos u primeru treba najmanje 134 komada.
3. Pre akcije treba proveriti potražnju, kapacitet, zalihu i kanibalizaciju.
4. Popust ima smisla samo kada očekivani inkrementalni rezultat nadmašuje izgubljeni doprinos i rizik.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-FIN-003`, `BKB-GTM-003` · BK-002 (konstrukcija ponude) · BK-014 p. 211 (Pricing Power)

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
