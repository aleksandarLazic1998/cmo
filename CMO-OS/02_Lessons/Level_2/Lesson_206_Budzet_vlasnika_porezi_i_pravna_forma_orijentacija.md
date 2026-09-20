# Lesson 206 — Budžet vlasnika, porezi i pravna forma — orijentacija

status: `AUTHORED`  
level: `2 — Finansije vlasnika`  
prerequisite: `205`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Razume koje odluke zahtevaju aktuelan srpski izvor i stručnjaka.

## Teach & explain

Vlasnički budžet odvaja novac firme, poreze, rezervu i ličnu potrošnju. Pravna forma i poreski status menjaju obaveze, odgovornost i administraciju, pa se ne biraju iz jedne univerzalne tabele.

Ova lekcija uči proces odluke, ne daje pravni ili poreski savet: definiši poslovni model, proveri aktuelne zvanične izvore, napravi scenarije i potvrdi odluku sa računovođom ili pravnikom.

## Visual model

1. Poslovni model → 2. Pravna i poreska opcija → 3. Zvanična provera → 4. Stručna potvrda

## New terms

- **Pravna forma / Legal form:** Način pravnog organizovanja poslovanja.
- **Poreska obaveza / Tax obligation:** Obaveza utvrđena važećim propisom za konkretan slučaj.
- **Vlasnička rezerva / Owner reserve:** Novac odvojen za rizike i dospele obaveze.

## Realistična `[FIXTURE]` simulacija — Plan raspodele gotovine

Simulirana firma očekuje 800.000 RSD priliva, ali tačan poreski tretman još nije potvrđen.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** jedan simulirani mesečni budžet
- **Unit / currency:** RSD i rokovi
- **VAT / tax basis:** PDV status je [UNKNOWN] do provere konkretnog slučaja
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** iznosi su simulacija; nema stvarnih podataka firme
- **Formula / denominator:** Raspoloživo vlasniku = 800.000 − 300.000 − potvrđeni porezi − 100.000; bez potvrđenog poreza konačan iznos je [UNKNOWN].

### Inputs

- 800.000 RSD očekivanog priliva
- 300.000 operativni odliv
- poreska obaveza [UNKNOWN] do provere
- 100.000 rezerva

### Decision

Ne povlačiti ostatak dok računovođa ne potvrdi obaveze i rokove.

### Expected result

Budžet ne predstavlja nepoznatu poresku obavezu kao činjenicu.

## Common mistake

- **Pogrešno:** „Internet kalkulator je dovoljan za izbor pravne forme i poreza.“
- **Ispravno:** Koristi aktuelne APR/Poreska izvore i kvalifikovanog stručnjaka za konkretan slučaj.

## Practical exercise

Napravi listu pitanja za računovođu: delatnost, očekivani promet, zaposleni, PDV, odgovornost, isplata vlasniku i rokovi.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; automatski test u aplikaciji proverava razumevanje principa, ne sam zadatak.

## Assessment rubric

Automatski test u aplikaciji proverava znanje, račun/dokaz, primenu i poslovnu odluku sa po tri pitanja po oblasti; svaka oblast nosi 25 poena. Očekivani principi:

1. Pravna forma i poreski status zavise od konkretnog modela i aktuelnih propisa.
2. Bez potvrđenog poreza raspoloživi iznos vlasniku ostaje [UNKNOWN].
3. Za odluku treba pripremiti scenario i proveriti ga kod zvaničnog izvora i stručnjaka.
4. Odgovorna odluka odvaja rezervu i dospele obaveze pre vlasničke potrošnje.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-FIN-006`, `BKB-FIN-004` · BK-010 (alokacija) · BK-014 p. 199 (Sufficiency). Za srpske propise važe isključivo zvanični izvori navedeni gore.
- APR — Osnivanje privrednih društava · provereno 2026-08-22
- Poreska uprava RS — PDV i poreski kalendar · provereno 2026-08-22

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
## Local authority boundary

Edukativna orijentacija, ne pravni, poreski ili računovodstveni savet. APR i Poreska uprava su zvanični početni izvori; konkretan slučaj potvrđuje kvalifikovani stručnjak.

