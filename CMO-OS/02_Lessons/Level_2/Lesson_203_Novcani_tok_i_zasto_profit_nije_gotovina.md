# Lesson 203 — Novčani tok i zašto profit nije gotovina

status: `AUTHORED`  
level: `2 — Finansije vlasnika`  
prerequisite: `202`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Prepoznaje kako profitabilna firma može ostati bez novca.

## Teach & explain

Profit i gotovina odgovaraju na različita pitanja. Profit meri stvoreni obračunski rezultat; cash flow meri stvarne prilive i odlive novca u periodu.

Prodaja na odloženo može povećati prihod i profit pre naplate. Kupovina zaliha ili otplata kredita može smanjiti gotovinu bez istog trenutnog uticaja na profit.

## Visual model

1. Prodaja → 2. Prihod i potraživanje → 3. Naplata → 4. Gotovina

## New terms

- **Novčani tok / Cash flow:** Kretanje gotovine kroz prilive i odlive.
- **Potraživanje / Accounts receivable:** Iznos koji kupac duguje firmi.
- **Likvidnost / Liquidity:** Sposobnost plaćanja obaveza kada dospeju.

## Realistična `[FIXTURE]` simulacija — Profitabilna prodaja bez naplate

Firma proda robu za 500.000 RSD uz trošak 350.000, ali kupac plaća za 60 dana; dobavljač dospeva za 15 dana.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** jedan simulirani posao
- **Unit / currency:** RSD i dani
- **VAT / tax basis:** pojednostavljeno bez poreskog tajminga
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** nema avansa i nema druge raspoložive gotovine
- **Formula / denominator:** Profit +150.000 RSD; trenutni priliv 0 RSD; potreban novac za dobavljača 350.000 RSD.

### Inputs

- bruto profit 150.000
- naplaćeno sada 0
- dobavljaču uskoro 350.000

### Decision

Obezbediti finansiranje ili promeniti rokove pre prihvatanja posla.

### Expected result

Sprečen likvidnosni jaz uprkos profitabilnoj prodaji.

## Common mistake

- **Pogrešno:** „Ako imamo profit, imamo i novac za plaćanje.“
- **Ispravno:** Proveri kada se prihod naplaćuje i kada odliv dospeva.

## Practical exercise

Napravi 8-nedeljni cash-flow raspored za tri prodaje i dva dobavljača sa različitim rokovima.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; automatski test u aplikaciji proverava razumevanje principa, ne sam zadatak.

## Assessment rubric

Automatski test u aplikaciji proverava znanje, račun/dokaz, primenu i poslovnu odluku sa po tri pitanja po oblasti; svaka oblast nosi 25 poena. Očekivani principi:

1. Profit meri obračunski rezultat, a cash flow stvarno kretanje gotovine.
2. U primeru profit može biti 150.000 RSD dok je trenutni priliv 0 RSD.
3. Pre posla na odloženo treba uporediti naplatu, plaćanje i raspoloživu gotovinu.
4. Profitabilan posao se može odbiti ili promeniti ako stvara neprihvatljiv likvidnosni rizik.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-FIN-001`, `BKB-FIN-005` · BK-006 (cash flow) · BK-010 (profit first) · BK-014 p. 201

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
