# Lesson 201 — Bilans uspeha

status: `AUTHORED`  
level: `2 — Finansije vlasnika`  
prerequisite: `Level 1`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Čita kako nastaju prihod, rashodi i profit u periodu.

## Teach & explain

Bilans uspeha je film rezultata kroz period: prihod, rashodi i profit. Ne pokazuje koliko novca trenutno leži na računu niti šta firma poseduje na jedan dan.

Menadžer ga čita odozgo nadole i za svaku liniju pita šta je pokreće: količina, cena, miks, trošak robe, ljudi ili drugi rashodi.

## Visual model

1. Prihod → 2. Minus trošak robe → 3. Minus operativni rashodi → 4. Rezultat perioda

## New terms

- **Bilans uspeha / Income statement:** Izveštaj o prihodu, rashodima i rezultatu za period.
- **Rashod / Expense:** Trošak priznat u obračunu rezultata.
- **Operativni profit / Operating profit:** Rezultat osnovnog poslovanja pre finansiranja i poreza.

## Realistična `[FIXTURE]` simulacija — Jedan simulirani mesec

Prihod je 1.000.000 RSD, trošak robe 650.000, a operativni rashodi 250.000 RSD.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** linija izveštaja × mesec
- **Unit / currency:** RSD za simulirani mesec
- **VAT / tax basis:** pojednostavljena osnova; nije računovodstveni izveštaj
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** nema kamata, poreza ni vanrednih stavki
- **Formula / denominator:** Bruto profit 350.000; operativni profit 100.000 RSD.

### Inputs

- prihod 1.000.000
- trošak robe 650.000
- operativni rashodi 250.000

### Decision

Istražiti da li rast dolazi iz količine ili cene i koji rashod ima odstupanje.

### Expected result

Izveštaj vodi ka driver-u, ne samo poslednjoj liniji.

## Common mistake

- **Pogrešno:** „Profit na bilansu uspeha je stanje računa.“
- **Ispravno:** Bilans uspeha meri obračunski rezultat perioda; gotovina se čita kroz cash flow.

## Practical exercise

Napravi mini bilans uspeha sa pet linija. Pored svake napiši glavni driver i jedno pitanje za proveru kvaliteta podatka.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; automatski test u aplikaciji proverava razumevanje principa, ne sam zadatak.

## Assessment rubric

Automatski test u aplikaciji proverava znanje, račun/dokaz, primenu i poslovnu odluku sa po tri pitanja po oblasti; svaka oblast nosi 25 poena. Očekivani principi:

1. Bilans uspeha prikazuje rezultat kroz period, a ne stanje gotovine na jedan dan.
2. Operativni profit u primeru je 100.000 RSD.
3. Promenu rezultata treba rastaviti na drivere, ne samo posmatrati ukupan profit.
4. Dobra odluka istražuje uzrok odstupanja pre korektivne akcije.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-FIN-002` · BK-006 (bilans uspeha) · BK-014 p. 203

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
