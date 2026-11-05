# Lesson 204 — Obrtni kapital, kupci, dobavljači i zalihe

status: `AUTHORED`  
level: `2 — Finansije vlasnika`  
prerequisite: `203`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Povezuje rokove naplate i plaćanja sa likvidnošću.

## Teach & explain

Neto obrtni kapital (net working capital) je kratkoročna imovina minus kratkoročne obaveze. Za upravljanje ciklusom trgovine posebno posmatramo operativni obrtni kapital: potraživanja + zalihe − obaveze prema dobavljačima. Ta operativna mera opisuje sredstva vezana u naplati i zalihama, umanjena za dobavljačko finansiranje; nije isto što i saldo gotovine.

Cash conversion cycle spaja dane zalihe i naplate, pa oduzima dane plaćanja dobavljaču. Što je ciklus duži, više gotovine treba za isti obim.

### Zašto je ovo važno vlasniku

U trgovini je najveći deo novca vezan u zalihi i potraživanjima. Svaki dan kraći ciklus oslobađa gotovinu bez dodatne prodaje.

### Na tabli `[FIXTURE]`

Zaliha stoji u proseku 50 dana, kupci plaćaju za 10 dana, a dobavljaču se plaća za 30 dana. Ciklus konverzije gotovine = 50 + 10 − 30 = 30 dana. Ako je dnevni trošak prodate robe 50.000 RSD, u ciklusu je vezano oko 30 × 50.000 = 1.500.000 RSD.

### Sa čim se meša

Obrtni kapital nije saldo na računu. Duži rok plaćanja dobavljaču pomaže gotovini, ali kašnjenje preko dogovorenog roka narušava odnos i uslove nabavke (Lesson 606).

### Veza sa drugim lekcijama

Nastavlja Lesson 203; koristi se u Lesson 603 (zalihe) i 606 (rok plaćanja).

### Iz korpusa

BK-006, PDF pp. 97–128 (prodaja na odloženo, zalihe i usklađivanje profita sa gotovinom; whole-book beleška). BK-011 *Scaling Up* (ciklus konverzije gotovine; locator nije proveren u ovoj sesiji). BK-014 p. 222 proveren u tekstu korpusa.

## Visual model

1. Kupi zalihu → 2. Prodaj → 3. Naplatiti kupca → 4. Platiti / osloboditi gotovinu

## New terms

- **Neto obrtni kapital / Net working capital:** Kratkoročna imovina minus kratkoročne obaveze; operativna mera u trgovini posebno prati potraživanja + zalihe − obaveze prema dobavljačima.
- **Dani zalihe / Days inventory:** Prosečno vreme pre prodaje zalihe.
- **Ciklus vezivanja gotovine / Cash conversion cycle:** Dani zalihe + dani naplate − dani plaćanja.

## Realistična `[FIXTURE]` simulacija — Ciklus trgovine

Roba stoji 45 dana, kupac plaća za 20 dana, a dobavljač se plaća za 30 dana.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** simulirani poslovni ciklus
- **Unit / currency:** broj dana
- **VAT / tax basis:** nije relevantan za račun dana
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** prosečni dani su uporedivi i period stabilan
- **Formula / denominator:** CCC = 45 + 20 − 30 = 35 dana finansiranja.

### Inputs

- 45 dana zalihe
- 20 dana naplate
- 30 dana dobavljača

### Decision

Prioritet dati bržem obrtu i boljoj naplati pre agresivnog rasta zalihe.

### Expected result

Manja potreba za dodatnim novcem.

## Common mistake

- **Pogrešno:** „Duži rok dobavljača je jedino rešenje.“
- **Ispravno:** Istovremeno upravljaj zalihom, naplatom i plaćanjem bez narušavanja odnosa.

## Practical exercise

Izračunaj CCC ako se zaliha skrati za 10 dana, a dobavljač traži 5 dana ranije plaćanje.

**Rešenje za proveru:** Zaliha 45 − 10 = 35 dana; naplata ostaje 20 dana; plaćanje dobavljaču 30 − 5 = 25 dana. CCC = 35 + 20 − 25 = 30 dana, dakle 5 dana bolje nego pre — ali je ranije plaćanje pojelo deo koristi od kraće zalihe.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; procena proverava i razumevanje principa i sam zadatak.

## Assessment rubric

Procena proverava znanje, račun/dokaz, primenu i poslovnu odluku; svaka oblast nosi 25 poena. Očekivani principi:

1. Cash conversion cycle povezuje dane zalihe, naplate i plaćanja.
2. Ciklus u primeru je 35 dana.
3. Najpre treba locirati koji deo ciklusa najviše i najbezbednije može da se skrati.
4. Rast koji produžava ciklus može povećati potrebu za gotovinom iako prihod raste.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-FIN-001`, `BKB-FIN-005` · BK-006 (obrtni kapital) · BK-011 (CCC, CASh) · BK-014 p. 222

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
