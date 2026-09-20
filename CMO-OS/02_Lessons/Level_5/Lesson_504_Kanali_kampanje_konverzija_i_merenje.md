# Lesson 504 — Kanali, kampanje, konverzija i merenje

status: `AUTHORED`  
level: `5 — Prodaja i marketing`  
prerequisite: `503`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Povezuje cilj, publiku, poruku, kanal, trošak i rezultat.

## Teach & explain

Kampanja povezuje poslovni cilj, publiku, poruku, kanal, budžet i očekivanu akciju. Kanal nije strategija sam po sebi; isti kanal može biti odličan ili loš u zavisnosti od segmenta i ekonomike.

Merenje treba da prati put od troška do kvalitetnog ishoda, uz guardrail za profit, kvalitet lead-a i iskustvo kupca.

## Visual model

1. Cilj i publika → 2. Poruka i kanal → 3. Akcija i konverzija → 4. Trošak i kvalitet

## New terms

- **Kanal / Channel:** Put preko kojeg poruka i ponuda stižu do kupca.
- **Kampanja / Campaign:** Vremenski ograničena aktivnost sa ciljem i budžetom.
- **Attribution / Attribution:** Pravilo pripisivanja rezultata dodirnim tačkama.

## Realistična `[FIXTURE]` simulacija — Dva marketinška kanala

Kanal A troši 60.000 RSD za 30 kvalifikovanih leadova; B troši 40.000 za 10.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** kanal × simulirana kampanja
- **Unit / currency:** RSD, leadovi, kupci i %
- **VAT / tax basis:** troškovi na istoj osnovi
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** isti period i dosledna kvalifikacija
- **Formula / denominator:** CPL A 2.000, B 4.000; kupci A 6, B 5; trošak po kupcu A 10.000, B 8.000 RSD.

### Inputs

- A: 60.000/30
- B: 40.000/10
- stopa prodaje A 20%
- stopa prodaje B 50%

### Decision

Ne gasiti B zbog skupljeg lead-a; uporediti profit po kupcu i kapacitet.

### Expected result

Optimizacija prelazi sa jeftinog lead-a na kvalitetan poslovni ishod.

## Common mistake

- **Pogrešno:** „Kanal A je bolji jer ima jeftiniji lead.“
- **Ispravno:** Poredi kvalitet, konverziju, CAC, profit i kapacitet na istoj osnovi.

## Practical exercise

Napravi campaign brief sa ciljem, segmentom, porukom, ponudom, budžetom, KPI-jem, guardrail-om i pravilom odluke.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; automatski test u aplikaciji proverava razumevanje principa, ne sam zadatak.

## Assessment rubric

Automatski test u aplikaciji proverava znanje, račun/dokaz, primenu i poslovnu odluku sa po tri pitanja po oblasti; svaka oblast nosi 25 poena. Očekivani principi:

1. Kampanja povezuje cilj, publiku, poruku, kanal, budžet i merljiv ishod.
2. Trošak po kupcu je 10.000 RSD za A i 8.000 RSD za B.
3. Kanale treba porediti na istoj fazi i uz kvalitet rezultata.
4. Skuplji lead može biti bolji ako daje profitabilnije kupce i ostvarivu isporuku.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-GTM-002`, `BKB-MET-001` · BK-017 (merenje kanala) · BK-014 p. 406 (KPI) — prihod sam nije KPI

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
