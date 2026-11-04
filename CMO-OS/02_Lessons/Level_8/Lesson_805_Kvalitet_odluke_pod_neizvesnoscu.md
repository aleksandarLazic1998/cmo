# Lesson 805 — Kvalitet odluke pod neizvesnošću

status: `AUTHORED`  
level: `8 — Komercijalno upravljanje`  
prerequisite: `804`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Razlikuje kvalitet odluke od ishoda i koristi očekivanu vrednost, reverzibilnost, pre-mortem i zapis odluke.

## Teach & explain

Dobra odluka može imati loš ishod, a loša odluka srećan ishod. Vlasnik zato ocenjuje proces odlučivanja: da li je imao razumne informacije, uporedio opcije, procenio rizik i zapisao šta očekuje.

### Zašto je ovo važno vlasniku

Skoro svaka važna poslovna odluka donosi se bez sigurnih podataka. Ko ocenjuje odluke samo po ishodu uči pogrešne lekcije: nagrađuje sreću i kažnjava razumno preuzet rizik.

### Četiri alata, običnim jezikom

1. **Očekivana vrednost** — zbir mogućih ishoda pomnoženih verovatnoćama. Pokazuje šta opcija u proseku donosi.
2. **Najgori prihvatljiv ishod** — da li firma može da preživi loš ishod. Visoka očekivana vrednost ne opravdava rizik koji može da ugasi firmu.
3. **Reverzibilnost** — koliko je lako poništiti odluku. Povratne odluke donose se brže; nepovratne traže više dokaza.
4. **Pre-mortem i zapis odluke** — pre odluke zamisli da je propala i navedi zašto; zapiši očekivani ishod, razloge i datum provere, pa kasnije uporedi.

### Na tabli `[FIXTURE]`

Opcija A sigurno donosi 100.000 RSD. Opcija B donosi 300.000 RSD sa verovatnoćom 60% ili gubitak 150.000 RSD sa verovatnoćom 40%. Očekivana vrednost B = 0,6 × 300.000 − 0,4 × 150.000 = 120.000 RSD, više od A. Ali ako firma ima samo 100.000 RSD rezerve gotovine, gubitak od 150.000 RSD ugrožava poslovanje. Razumna odluka je A ili manja, povratna verzija B.

### Sa čim se meša

Verovatnoće u poslovanju su procene `[ASSUMPTION]`, ne činjenice. Očekivana vrednost nije obećanje ishoda. Pre-mortem nije pesimizam, već traženje rizika dok se plan još može promeniti.

### Veza sa drugim lekcijama

Lesson 003 uvodi trade-off i propuštenu korist; Lesson 304 eksperiment; Lesson 802 scenarije; Lesson 1004 raspodelu kapitala.

## Visual model

1. Opcije → 2. Ishodi i procenjene verovatnoće → 3. Očekivana vrednost i najgori slučaj → 4. Reverzibilnost, pre-mortem, zapis i provera

## New terms

- **Očekivana vrednost / Expected value:** Zbir ishoda pomnoženih procenjenim verovatnoćama.
- **Reverzibilna odluka / Reversible decision:** Odluka koja se može poništiti uz mali trošak.
- **Pre-mortem / Pre-mortem:** Zamišljanje neuspeha plana pre odluke radi otkrivanja rizika.
- **Zapis odluke / Decision log:** Pisani razlozi, očekivani ishod i datum provere odluke.

## Realistična `[FIXTURE]` simulacija — Sigurna ili rizična komercijalna akcija

Vlasnik bira između sigurnog i rizičnog posla uz ograničenu rezervu gotovine.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** jedna odluka
- **Unit / currency:** RSD i verovatnoća
- **VAT / tax basis:** nije relevantan
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Assumptions:** verovatnoće su procena vlasnika `[ASSUMPTION]`; rezerva gotovine 100.000 RSD
- **Formula / denominator:** EV(B) = 0,6 × 300.000 − 0,4 × 150.000 = 120.000 RSD; EV(A) = 100.000 RSD.
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke

### Inputs

- A: sigurno +100.000 RSD
- B: 60% +300.000 RSD, 40% −150.000 RSD
- rezerva gotovine 100.000 RSD

### Decision

Izabrati A ili smanjiti obim B tako da najgori ishod ne ugrožava firmu; zapisati odluku i datum provere.

### Expected result

Odluka je zaštićena od rizika propasti i proverljiva posle ishoda.

## Common mistake

- **Pogrešno:** „Opcija sa većom očekivanom vrednošću je uvek bolja.“
- **Ispravno:** Očekivana vrednost se proverava zajedno sa najgorim ishodom, reverzibilnošću i rezervom.

## Practical exercise

Opcija C donosi +200.000 RSD sa verovatnoćom 50% ili −20.000 RSD sa verovatnoćom 50% i lako se poništava posle mesec dana.

1. Izračunaj očekivanu vrednost opcije C.
2. Uradi kratak pre-mortem: tri razloga zašto bi C propala.
3. Napiši zapis odluke: izbor, očekivani ishod, glavni rizik i datum provere.

**Rešenje za proveru:** EV(C) = 0,5 × 200.000 − 0,5 × 20.000 = 90.000 RSD; najgori ishod −20.000 RSD je podnošljiv uz rezervu od 100.000 RSD.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; procena proverava i razumevanje principa i sam zadatak.

## Assessment rubric

Procena proverava znanje, račun/dokaz, primenu i poslovnu odluku; svaka oblast nosi 25 poena. Očekivani principi:

1. Kvalitet odluke ocenjuje se po procesu i informacijama, ne samo po ishodu.
2. U primeru je očekivana vrednost B 120.000 RSD, ali najgori ishod od −150.000 RSD premašuje rezervu.
3. Pre-mortem i zapis odluke otkrivaju rizike i omogućavaju kasniju proveru.
4. Bira se opcija čiji je najgori ishod podnošljiv, a povratne odluke donose se brže.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-SCN-001`, `BKB-FIN-003`, `BKB-INN-002`
- `11_Research/Learning_Science_Evidence.md` — LSE-10 (pre-mortem; akademski dokazi ograničeni)

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
