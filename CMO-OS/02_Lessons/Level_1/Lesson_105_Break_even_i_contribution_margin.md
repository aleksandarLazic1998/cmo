# Lesson 105 — Break-even i contribution margin

status: `AUTHORED`  
level: `1 — Ekonomija jednog posla`  
prerequisite: `104`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Izračuna minimalni potreban obim prodaje.

## Teach & explain

Contribution margin pokazuje koliko jedna prodaja ostavlja za pokriće fiksnih troškova i profita. Break-even je količina pri kojoj je ukupan doprinos jednak fiksnim troškovima.

Break-even nije cilj rasta; to je granica bez profita i gubitka u datim pretpostavkama. Promena cene, troška ili miksa pomera tu granicu.

## Visual model

1. Cena − varijabilni trošak → 2. Doprinos po jedinici → 3. Fiksni trošak ÷ doprinos → 4. Break-even količina

## New terms

- **Contribution margin / Contribution margin:** Cena minus relevantni varijabilni trošak.
- **Break-even / Break-even point:** Tačka u kojoj je rezultat nula.
- **Margin of safety / Margin of safety:** Koliko je planirana prodaja iznad break-even-a.

## Realistična `[FIXTURE]` simulacija — Servisna usluga

Cena usluge je 8.000 RSD, varijabilni trošak 3.000, a mesečni fiksni troškovi 250.000 RSD.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** jedna usluga × simulirani mesec
- **Unit / currency:** RSD po mesecu i broj usluga
- **VAT / tax basis:** svi ulazi na istoj osnovi
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** cena i varijabilni trošak su stabilni u posmatranom opsegu
- **Formula / denominator:** Doprinos je 5.000 RSD; 250.000 ÷ 5.000 = 50 usluga za break-even.

### Inputs

- cena 8.000 RSD
- varijabilni trošak 3.000 RSD
- 250.000 RSD fiksnih troškova

### Decision

Planirati 65 usluga i pratiti margin of safety od 15 usluga.

### Expected result

Plan ima zaštitu od pada tražnje, umesto cilja tačno na nuli.

## Common mistake

- **Pogrešno:** „Na break-even-u firma je uspešna.“
- **Ispravno:** Na break-even-u nema profita; potreban je prostor iznad te tačke.

## Practical exercise

Izračunaj break-even ako varijabilni trošak poraste na 3.500 RSD. Kolika prodaja daje 20% margin of safety?

**Rešenje za proveru:** Doprinos pada na 8.000 − 3.500 = 4.500 RSD. Break-even = 250.000 ÷ 4.500 = 55,6 → 56 usluga. Za 20% margin of safety prodaja mora biti 55,6 ÷ 0,8 = 69,4 → 70 usluga.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; automatski test u aplikaciji proverava razumevanje principa, ne sam zadatak.

## Assessment rubric

Automatski test u aplikaciji proverava znanje, račun/dokaz, primenu i poslovnu odluku sa po tri pitanja po oblasti; svaka oblast nosi 25 poena. Očekivani principi:

1. Break-even količina je fiksni trošak podeljen doprinosom po jedinici.
2. Break-even u primeru je 50 usluga.
3. Plan treba da ima margin of safety, a ne da završava tačno na break-even-u.
4. Ako doprinos po jedinici padne, potrebna break-even količina raste.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-FIN-003`, `BKB-FIN-006` · BK-006 (break-even) · BK-014 p. 217 (Breakeven), p. 199 (Sufficiency)

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
