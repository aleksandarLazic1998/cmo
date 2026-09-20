# Lesson 1005 — Integracioni CEO scenario

status: `AUTHORED`  
level: `10 — Strategija, skaliranje i CEO razmišljanje`  
prerequisite: `1004`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Povezuje kupca, ponudu, finansije, operacije, ljude i strategiju u jednu odluku.

## Teach & explain

CEO odluka povezuje kupca, ponudu, ekonomiku, gotovinu, operacije, ljude, rizik i strategiju. Optimizacija samo jedne dimenzije obično prebacuje problem na drugu.

Integracioni scenario traži jasan problem, podatke i nepoznanice, opcije, preporuku, cost, očekivani rezultat, KPI, guardrail, owner-a i plan učenja.

## Visual model

1. Kupac i ponuda → 2. Profit i cash → 3. Operacije i ljudi → 4. Strategija, rizik i odluka

## New terms

- **Integraciona odluka / Integrated decision:** Izbor koji eksplicitno povezuje više poslovnih domena.
- **Decision memo / Decision memo:** Kratak zapis problema, evidence-a, opcija i odluke.
- **Post-decision review / Post-decision review:** Provera pretpostavki i rezultata nakon odluke.

## Realistična `[FIXTURE]` simulacija — Otvaranje B2B servisnog paketa

Potražnja postoji, ali servis je blizu kapaciteta. Pilot može početi sa 15 klijenata pre pune investicije.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** jedan simulirani integracioni pilot
- **Unit / currency:** RSD, klijenti, sati i 90 dana
- **VAT / tax basis:** sve vrednosti na istoj osnovi; poreski efekti nisu uključeni
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** prosečno korišćenje 4 sata, nema dodatne opreme ni churn-a u pilotu
- **Formula / denominator:** Prihod 180.000; doprinos 105.000; posle fiksnog troška 45.000 RSD. Potrebno vreme 60 sati, ostaje 15 sati rezerve.

### Inputs

- 15 klijenata × 12.000 RSD prihoda
- direktni doprinos 7.000 po klijentu
- dodatni fiksni trošak 60.000
- kapacitet 75 sati; 4 sata po klijentu

### Decision

Pokrenuti 90-dnevni pilot sa 15 klijenata, SLA guardrail-om, owner-om i stop uslovom.

### Expected result

Pilot testira kupca, ekonomiku i kapacitet pre nepovratnog skaliranja.

## Common mistake

- **Pogrešno:** „Ako scenario daje profit, odluka je završena.“
- **Ispravno:** Proveri cash, kapacitet, ljude, kvalitet, rizik, strategiju i plan post-audita.

## Practical exercise

Napiši CEO memo: Problem → Data → Analysis → Options → Recommendation → Cost → Expected result → KPI, sa `[UNKNOWN]` stavkama i stop uslovom.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; automatski test u aplikaciji proverava razumevanje principa, ne sam zadatak.

## Assessment rubric

Automatski test u aplikaciji proverava znanje, račun/dokaz, primenu i poslovnu odluku sa po tri pitanja po oblasti; svaka oblast nosi 25 poena. Očekivani principi:

1. CEO scenario povezuje kupca, finansije, operacije, ljude, rizik i strategiju.
2. Pilot daje 45.000 RSD doprinosa posle navedenog fiksnog troška i koristi 60 od 75 sati.
3. Pre odluke treba odvojiti `[FACT]`, `[FIXTURE]`, `[ASSUMPTION]` i `[UNKNOWN]` i definisati stop uslov.
4. Ograničeni pilot sa KPI-jima je jači od punog skaliranja kada ključne pretpostavke još nisu potvrđene.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-VAL-006`, `BKB-SCN-002`, `BKB-MET-006` · BK-007 (koherentna akcija) · BK-014 p. 61, p. 452 · BK-011 (izvršenje)

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
