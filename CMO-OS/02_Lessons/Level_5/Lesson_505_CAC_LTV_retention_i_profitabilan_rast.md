# Lesson 505 — CAC, LTV, retention i profitabilan rast

status: `AUTHORED`  
level: `5 — Prodaja i marketing`  
prerequisite: `504`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Proceni da li rast stvara ili uništava vrednost.

## Teach & explain

CAC je trošak sticanja kupca, LTV procenjuje doprinos koji kupac donosi kroz odnos, a retention pokazuje koliko kupaca ili prihoda ostaje. Rast je zdrav samo kada ekonomika i gotovina mogu podržati tempo.

LTV nije sigurna činjenica o budućnosti. Mora imati cohort, period, maržu, stopu zadržavanja i jasno navedene pretpostavke.

## Visual model

1. Trošak akvizicije → 2. Prva kupovina → 3. Ponovljene kupovine → 4. LTV i povrat

## New terms

- **CAC / Customer acquisition cost:** Relevantni trošak prodaje i marketinga ÷ novi kupci.
- **LTV / Lifetime value:** Procenjeni doprinos kupca tokom definisanog odnosa.
- **Retention / Retention:** Udeo kupaca ili prihoda koji ostaje kroz vreme.

## Realistična `[FIXTURE]` simulacija — Pretplatnički paket

Akvizicija 20 kupaca košta 200.000 RSD; mesečni doprinos po kupcu je 4.000 RSD, a očekivano trajanje 8 meseci.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** jedan simulirani acquisition cohort
- **Unit / currency:** RSD, kupci i meseci
- **VAT / tax basis:** prihodi i troškovi na istoj osnovi
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** doprinos i trajanje su stabilni; nema diskontovanja
- **Formula / denominator:** CAC 10.000 RSD; fixture LTV 32.000 RSD; LTV:CAC 3,2; payback 2,5 meseca.

### Inputs

- CAC 200.000 ÷ 20
- doprinos 4.000 mesečno
- 8 meseci

### Decision

Skalirati postepeno uz praćenje stvarnog retention cohort-a i cash payback-a.

### Expected result

Rast ima baznu ekonomiku, ali ostaje uslovljen dokazom zadržavanja.

## Common mistake

- **Pogrešno:** „LTV:CAC 3 znači da treba odmah potrošiti sav budžet.“
- **Ispravno:** Proveri kvalitet procene, payback, kapacitet, cash i retention po cohort-u.

## Practical exercise

Izračunaj CAC, LTV i payback za bazni i lošiji retention scenario. Odredi stop uslov.

**Rešenje za proveru:** Bazni scenario: CAC 10.000 RSD, LTV 8 × 4.000 = 32.000 RSD, LTV:CAC = 3,2, payback 2,5 meseca. Lošiji retention od 5 meseci: LTV 20.000 RSD, LTV:CAC = 2,0, payback ostaje 2,5 meseca. Primer stop uslova: zaustaviti povećanje budžeta kada LTV:CAC na potvrđenim kohortama padne ispod 3.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; automatski test u aplikaciji proverava razumevanje principa, ne sam zadatak.

## Assessment rubric

Automatski test u aplikaciji proverava znanje, račun/dokaz, primenu i poslovnu odluku sa po tri pitanja po oblasti; svaka oblast nosi 25 poena. Očekivani principi:

1. Profitabilan rast povezuje CAC, LTV, retention, payback i kapacitet.
2. U primeru su CAC 10.000 RSD, LTV 32.000 RSD i payback 2,5 meseca.
3. LTV mora imati cohort, period, margin osnovu i pretpostavke.
4. Skaliranje se povećava tek kada stvarni cohort-i potvrde ekonomiku i isporuka može da prati.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-GRO-001`, `BKB-VAL-005`, `BKB-FIN-005` · BK-002 (ekonomika ponude) · BK-014 pp. 212–214 (LTV, Allowable Acquisition Cost)

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
