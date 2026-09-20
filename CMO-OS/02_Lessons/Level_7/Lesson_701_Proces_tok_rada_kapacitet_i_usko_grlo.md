# Lesson 701 — Proces, tok rada, kapacitet i usko grlo

status: `AUTHORED`  
level: `7 — Operacije i poslovni sistemi`  
prerequisite: `Level 6`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Nalazi mesto koje ograničava ceo sistem.

## Teach & explain

Proces je ponovljiv tok koji ulaz pretvara u ishod za kupca. Kapacitet svake faze određuje koliko može da prođe, ali usko grlo ograničava rezultat celog sistema.

Ubrzavanje dela koji nije usko grlo često samo stvara red i više rada u toku. Prvo zaštiti i iskoristi ograničenje, zatim podredi ostale faze i tek onda investiraj u širenje.

## Visual model

1. Ulaz → 2. Faza A → 3. Usko grlo → 4. Ishod

## New terms

- **Proces / Process:** Povezan niz koraka koji stvara definisan ishod.
- **Kapacitet / Capacity:** Maksimalni održivi obim u periodu.
- **Usko grlo / Bottleneck:** Korak koji ograničava protok celog sistema.

## Realistična `[FIXTURE]` simulacija — Servis uređaja

Prijem može 30 uređaja dnevno, dijagnostika 12, popravka 20, izdavanje 25.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** faza procesa × simulirani dan
- **Unit / currency:** uređaji dnevno
- **VAT / tax basis:** nije relevantan
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** jedan uređaj prolazi sve četiri faze
- **Formula / denominator:** Sistemski kapacitet = minimum = 12 uređaja dnevno.

### Inputs

- 30 prijem
- 12 dijagnostika
- 20 popravka
- 25 izdavanje

### Decision

Zaštititi vreme dijagnostike, ukloniti čekanja i ne primati 30 bez kontrole WIP-a.

### Expected result

Manje reda i realniji rok kupcu.

## Common mistake

- **Pogrešno:** „Treba ubrzati sve timove podjednako.“
- **Ispravno:** Prvo poboljšaj ograničenje i protok celog sistema.

## Practical exercise

Mapiraj pet koraka procesa, kapacitet, vreme čekanja, WIP i najverovatnije usko grlo. Predloži test bez dodatnog zapošljavanja.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; automatski test u aplikaciji proverava razumevanje principa, ne sam zadatak.

## Assessment rubric

Automatski test u aplikaciji proverava znanje, račun/dokaz, primenu i poslovnu odluku sa po tri pitanja po oblasti; svaka oblast nosi 25 poena. Očekivani principi:

1. Usko grlo određuje maksimalni protok celog procesa.
2. Kapacitet sistema u primeru je 12 uređaja dnevno.
3. Pre investicije treba zaštititi vreme ograničenja i smanjiti nepotreban WIP.
4. Lokalna efikasnost nije cilj ako ne povećava ukupan ishod kupcu.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-OPS-007`, `BKB-OPS-009`, `BKB-STR-006` · BK-012 (Goldratt) — apsolutno prvenstvo: pet fokusirajućih koraka · BK-014 p. 387

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
