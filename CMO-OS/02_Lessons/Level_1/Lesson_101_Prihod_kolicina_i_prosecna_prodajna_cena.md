# Lesson 101 — Prihod, količina i prosečna prodajna cena

status: `AUTHORED`  
level: `1 — Ekonomija jednog posla`  
prerequisite: `Level 0`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Razume od čega nastaje promet.

## Teach & explain

Prihod nastaje iz dve poluge: koliko jedinica prodaš i po kojoj prosečnoj ceni. Zato isti promet može doći iz mnogo jeftinih ili malo skupih prodaja.

Prosečna prodajna cena nije cenovnik. To je stvarno ostvareni prihod podeljen brojem prodatih jedinica, posle kombinacije modela, popusta i paketa.

### Zašto je ovo važno vlasniku

Kada prihod padne ili poraste, prvo pitanje glasi: da li se promenila količina, ostvarena cena ili miks? Svaki uzrok traži drugačiju akciju.

### Običnim jezikom

Prihod = količina × prosečna prodajna cena. Isti prihod od 20.000 RSD daje 20 kablova po 1.000 RSD ili 2 monitora po 10.000 RSD `[FIXTURE]`.

### Na tabli `[FIXTURE]`

Prošlog meseca prodato je 50 telefona za 1.500.000 RSD, pa je prosečna cena 30.000 RSD. Ovog meseca prodato je opet 50 telefona, ali za 1.350.000 RSD, pa je prosečna cena 27.000 RSD. Količina je ista; pala je ostvarena cena. Uzrok može biti popust ili to što su kupci birali jeftinije modele (miks). Sledeći korak je utvrditi koje od to dvoje.

### Sa čim se meša

Prihod nije gotovina, jer naplata može kasniti, i nije profit (Lesson 001). Prosečna prodajna cena nije cena iz cenovnika.

### Veza sa drugim lekcijama

Lesson 102 objašnjava troškove koji se od prihoda oduzimaju; Lesson 104 pokazuje kako cena i količina zajedno menjaju profit.

## Visual model

1. Količina → 2. Ostvarena cena → 3. Količina × cena → 4. Prihod

## New terms

- **Količina / Volume:** Broj prodatih jedinica u periodu.
- **Prosečna prodajna cena / Average selling price:** Prihod podeljen prodatim jedinicama.
- **Miks / Sales mix:** Udeo različitih proizvoda u ukupnoj prodaji.

## Realistična `[FIXTURE]` simulacija — Dva modela slušalica

Prodato je 6 osnovnih po 4.000 RSD i 4 premium po 9.000 RSD.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** proizvod × simulirani period
- **Unit / currency:** RSD bez posebnog poreskog tumačenja
- **VAT / tax basis:** sve cene koriste istu pojednostavljenu osnovu
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** nema povrata ni dodatnih popusta
- **Formula / denominator:** (24.000 + 36.000) ÷ 10 = 6.000 RSD prosečna cena; prihod = 60.000 RSD.

### Inputs

- 6 × 4.000 RSD
- 4 × 9.000 RSD
- 10 jedinica ukupno

### Decision

Pratiti i količinu i miks, ne samo ukupan prihod.

### Expected result

Menadžer vidi da premium model nosi 60% prihoda uz 40% količine.

## Common mistake

- **Pogrešno:** „Prosečna cena je prosek cenovnika.“
- **Ispravno:** Prosečna ostvarena cena je prihod ÷ stvarno prodate jedinice.

## Practical exercise

U novom `[FIXTURE]` scenariju izaberi tri proizvoda sa različitim količinama i cenama, zapiši ulaze, pa izračunaj prihod i prosečnu cenu. Promeni miks bez promene ukupne količine i obrazloži efekat. Primer sa dva modela ispod služi vođenoj proveri formule, ne predstavlja rešenje tvog zadatka sa tri proizvoda.

**Rešenje za proveru:** Bazni primer: prihod 6 × 4.000 + 4 × 9.000 = 60.000 RSD; prosečna cena 60.000 ÷ 10 = 6.000 RSD. Promena miksa na 4 osnovna i 6 premium, uz istih 10 jedinica: prihod 16.000 + 54.000 = 70.000 RSD i prosečna cena 7.000 RSD — količina je ista, prihod veći samo zbog miksa.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; procena proverava i razumevanje principa i sam zadatak.

## Assessment rubric

Procena proverava znanje, račun/dokaz, primenu i poslovnu odluku; svaka oblast nosi 25 poena. Očekivani principi:

1. Prihod je količina pomnožena ostvarenom cenom, sabrano kroz prodaje.
2. Prosečna ostvarena cena u primeru je 6.000 RSD.
3. Za razumevanje promene prihoda treba odvojiti efekat količine, cene i miksa.
4. Premium model može biti važan i kada ima manju količinu, jer nosi veći deo prihoda.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-FIN-002` · BK-006 (čitanje prihoda) · BK-014 p. 209 (četiri načina rasta prihoda)

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
