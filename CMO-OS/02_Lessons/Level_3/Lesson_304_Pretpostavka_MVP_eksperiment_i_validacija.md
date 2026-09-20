# Lesson 304 — Pretpostavka, MVP, eksperiment i validacija

status: `AUTHORED`  
level: `3 — Kupac i validacija ideje`  
prerequisite: `303`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Dizajnira mali test sa kriterijumom uspeha i neuspeha.

## Teach & explain

Pretpostavka je tvrdnja koja još nema dovoljan dokaz. MVP je najmanji test koji može proizvesti korisno učenje, a eksperiment unapred određuje šta meri i šta bi oborilo ideju.

Validacija nije „dobio sam jedan pozitivan signal“. Potrebni su kriterijum, uzorak, period i odluka za uspeh, neuspeh ili nejasan rezultat.

## Visual model

1. Rizična pretpostavka → 2. Mali test → 3. Merljiv signal → 4. Nastavi, promeni ili stani

## New terms

- **Pretpostavka / Assumption:** Tvrdnja koja se tretira kao moguća, ne potvrđena.
- **MVP / Minimum viable product:** Najmanja verzija testa koja daje validno učenje.
- **Kriterijum odluke / Decision threshold:** Unapred definisana granica za nastavak ili promenu.

## Realistična `[FIXTURE]` simulacija — Test plaćene instalacije

Pretpostavka je da kupci žele instalaciju istog dana za 2.000 RSD.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** jedan simulirani eksperiment
- **Unit / currency:** rezervacije i %
- **VAT / tax basis:** cena je fixture na istoj osnovi
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** posetioci su kvalifikovani i rezervacija traži stvarni depozit
- **Formula / denominator:** Rezervacije 13/50 = 26%, iznad praga 20%.

### Inputs

- 50 kvalifikovanih posetilaca
- ponuda bez izrade punog sistema
- prag: najmanje 10 plaćenih rezervacija

### Decision

Pokrenuti ograničeni pilot sa 13 kupaca i meriti kvalitet isporuke.

### Expected result

Tražnja je dovoljno jaka za sledeći, skuplji test — ne još za potpuno skaliranje.

## Common mistake

- **Pogrešno:** „MVP znači loš proizvod.“
- **Ispravno:** MVP je najmanji odgovoran test hipoteze; kvalitet osnovnog obećanja i bezbednost se ne žrtvuju.

## Practical exercise

Napiši najrizičniju pretpostavku, najmanji test, metriku, prag uspeha, stop uslov i sledeću odluku.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; automatski test u aplikaciji proverava razumevanje principa, ne sam zadatak.

## Assessment rubric

Automatski test u aplikaciji proverava znanje, račun/dokaz, primenu i poslovnu odluku sa po tri pitanja po oblasti; svaka oblast nosi 25 poena. Očekivani principi:

1. MVP služi učenju o rizičnoj pretpostavci uz unapred definisan kriterijum.
2. Stopa rezervacije u primeru je 26%, iznad praga 20%.
3. Sledeći korak je ograničeni pilot koji proverava i isporuku.
4. Jedan uspešan test opravdava sledeći nivo ulaganja, ne automatsko skaliranje.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-VAL-003`, `BKB-INN-002`, `BKB-MET-001` · BK-017 (validated learning) · BK-014 pp. 106–108 (Critical Assumptions, Shadow Testing, MVO)

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
