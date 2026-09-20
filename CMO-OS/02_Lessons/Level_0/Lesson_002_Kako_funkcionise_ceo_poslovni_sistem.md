# Lesson 002 — Kako funkcioniše ceo poslovni sistem

status: `AUTHORED`  
level: `0 — Poslovna orijentacija`  
prerequisite: `001`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Povezuje kupca, ponudu, prodaju, isporuku, novac, ljude i procese.

## Teach & explain

Firma je lanac, a ne gomila odvojenih odeljenja. Kupac pokreće tražnju; ponuda obećava vrednost; prodaja pretvara interesovanje u narudžbinu; operacije isporučuju; finansije prate novac; ljudi i procesi ponavljaju rezultat.

Ako jedna karika kasni, ceo sistem pati. Zato vlasnik ne popravlja samo najglasniji problem, već proverava gde se vrednost ili novac zaustavljaju.

## Visual model

1. Potreba kupca → 2. Ponuda i prodaja → 3. Isporuka i naplata → 4. Učenje i poboljšanje

## New terms

- **Poslovni sistem / Business system:** Povezane aktivnosti koje zajedno stvaraju rezultat.
- **Tok vrednosti / Value flow:** Put koristi od problema kupca do rešenja.
- **Povratna sprega / Feedback loop:** Rezultat koji se vraća kao signal za sledeću odluku.

## Realistična `[FIXTURE]` simulacija — Porudžbina poslovnog laptopa

Kupac želi laptop za rad do petka, ali marketing obećava rok koji zaliha ne može da podrži.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** jedna simulirana porudžbina
- **Unit / currency:** dani i jedna porudžbina
- **VAT / tax basis:** nije relevantan za mapu toka
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** rok dobavljača je potvrđen i nema skrivene zalihe
- **Formula / denominator:** Obećanje 3 dana − mogućnost 5 dana = 2 dana jaza.

### Inputs

- 1 potvrđena potreba
- 1 obećan rok
- 0 komada na stanju
- dobavljač isporučuje za 5 dana

### Decision

Prodavac nudi dostupnu alternativu ili iskreno menja rok pre naplate.

### Expected result

Sačuvano poverenje i izbegnuta reklamacija.

## Common mistake

- **Pogrešno:** „Prodaja je završila posao kada uzme novac.“
- **Ispravno:** Posao je završen tek kada je obećana vrednost isporučena i rezultat evidentiran.

## Practical exercise

Nacrtaj svoj tok od prve potrebe kupca do povratne informacije. Obeleži mesto gde najčešće nastaje čekanje.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; automatski test u aplikaciji proverava razumevanje principa, ne sam zadatak.

## Assessment rubric

Automatski test u aplikaciji proverava znanje, račun/dokaz, primenu i poslovnu odluku sa po tri pitanja po oblasti; svaka oblast nosi 25 poena. Očekivani principi:

1. Poslovni sistem povezuje kupca, ponudu, prodaju, isporuku, novac, ljude i učenje.
2. Jaz između obećanog i mogućeg roka u primeru je 2 dana.
3. Pre obećanja roka treba proveriti zalihu i kapacitet isporuke.
4. Najbolja odluka je transparentno ponuditi ostvarivu opciju i sačuvati poverenje.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-VAL-006`, `BKB-OPS-003` · BK-014 p. 61 (Pet delova) · BK-012 (sistem kao celina)

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
