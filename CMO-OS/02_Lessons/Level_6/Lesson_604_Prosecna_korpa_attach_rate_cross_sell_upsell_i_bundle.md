# Lesson 604 — Prosečna korpa, attach rate, cross-sell, upsell i bundle

status: `AUTHORED`  
level: `6 — Retail i category management`  
prerequisite: `603`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Povećava vrednost kupovine i bruto profit etičnom ponudom.

## Teach & explain

Prosečna korpa raste kada kupac dobije relevantniji komplet rešenja. Attach rate meri koliko glavnih kupovina uključuje dodatak; cross-sell dodaje povezanu potrebu, upsell pomera na vredniju verziju, a bundle spaja elemente u jednu ponudu.

Etička granica je fit: dodatak mora imati objašnjenu vrednost i slobodan izbor. Skriveni dodatak, pritisak ili proizvod koji kupcu ne treba nije komercijalna veština.

## Visual model

1. Glavna potreba → 2. Relevantan dodatak → 3. Jasna vrednost → 4. Veća korisna korpa

## New terms

- **Attach rate / Attach rate:** Kupovine sa dodatkom ÷ glavne kupovine.
- **Cross-sell / Cross-sell:** Ponuda povezanog proizvoda za drugu potrebu.
- **Upsell / Upsell:** Prelazak na vredniju verziju istog rešenja.

## Realistična `[FIXTURE]` simulacija — Laptop i zaštitna torba

Od 80 kupaca laptopa, 20 uzme torbu sa 2.000 RSD GP. Novi prikaz koristi slučaj upotrebe, bez automatskog dodavanja.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** simulirani mesečni cohort kupovina
- **Unit / currency:** kupovine, RSD i %
- **VAT / tax basis:** sve vrednosti na istoj osnovi
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** torba odgovara modelu; nema promene GP po dodatku
- **Formula / denominator:** Stari attach 25%; cilj 35%; dodatni GP = (28 − 20) × 2.000 = 16.000 RSD.

### Inputs

- 80 glavnih kupovina
- stari attach 20
- cilj 28
- GP torbe 2.000

### Decision

Testirati relevantan prikaz i pratiti povrate i pritužbe kao guardrail.

### Expected result

Veći GP uz jasan izbor kupca.

## Common mistake

- **Pogrešno:** „Attach se povećava tako što se dodatak stavi na račun.“
- **Ispravno:** Dodatak se nudi transparentno, uz fit, vrednost i slobodan izbor.

## Practical exercise

Za jednu glavnu kupovinu osmisli relevantan cross-sell, upsell i bundle. Za svaki navedi vrednost, GP i etički guardrail.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; automatski test u aplikaciji proverava razumevanje principa, ne sam zadatak.

## Assessment rubric

Automatski test u aplikaciji proverava znanje, račun/dokaz, primenu i poslovnu odluku sa po tri pitanja po oblasti; svaka oblast nosi 25 poena. Očekivani principi:

1. Attach rate meri udeo glavnih kupovina sa dodatkom.
2. Cilj u primeru je 35% attach i 16.000 RSD dodatnog GP-a.
3. Predlog dodatka treba da bude relevantan, transparentan i dobrovoljan.
4. Rast korpe nije dobar ako povećava povrate, pritužbe ili narušava poverenje.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-GTM-003`, `BKB-VAL-002` · BK-014 p. 209 (četiri načina rasta prihoda) · BK-002 — uz obavezan etički guardrail
- Ministarstvo unutrašnje i spoljne trgovine — propisi zaštite potrošača · provereno 2026-08-22

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.

## Local authority boundary

Vezivanje proizvoda, prikaz cene paketa i uslovi povraćaja su regulisani. Primer je `[FIXTURE]`; bundle, cross-sell i upsell ne smeju uslovljavati kupovinu ni skrivati stavku na računu — uskladiti sa propisima o zaštiti potrošača i stručnom proverom.
