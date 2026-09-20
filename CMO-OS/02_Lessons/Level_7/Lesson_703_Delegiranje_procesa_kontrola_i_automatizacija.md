# Lesson 703 — Delegiranje procesa, kontrola i automatizacija

status: `AUTHORED`  
level: `7 — Operacije i poslovni sistemi`  
prerequisite: `702`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Odvaja vlasnika od zadatka bez gubitka odgovornosti.

## Teach & explain

Delegiranje prenosi ishod, granice i ovlašćenje, ali ne briše odgovornost menadžera za sistem. Kontrola znači dogovorene tačke provere i metrike, ne stalno mikroupravljanje.

Automatizacija dolazi posle razumevanja i stabilizacije procesa. Automatizovan haos samo proizvodi greške brže.

## Visual model

1. Definiši ishod → 2. Dodeli owner-a i granice → 3. Kontrolna tačka → 4. Automatizuj stabilno

## New terms

- **Delegiranje / Delegation:** Prenos odgovornosti za ishod uz ovlašćenje i granice.
- **Kontrolna tačka / Control point:** Dogovoreni trenutak provere rizika ili rezultata.
- **Automatizacija / Automation:** Tehnologija koja pouzdano izvršava stabilan deo procesa.

## Realistična `[FIXTURE]` simulacija — Nedeljni izveštaj zalihe

Vlasnik troši 4 sata nedeljno. Analitičar može pripremiti standardni izveštaj za 1,5 sat, uz pregled odstupanja od 30 minuta.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** jedan simulirani proces
- **Unit / currency:** sati nedeljno
- **VAT / tax basis:** nije relevantan
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** analitičar ima veštinu i pristup podacima
- **Formula / denominator:** Vlasnik oslobađa 3,5 h; ukupan timski rad pada sa 4 na 2 h.

### Inputs

- staro vreme vlasnika 4 h
- novo vreme analitičara 1,5 h
- pregled vlasnika 0,5 h

### Decision

Delegirati proces sa definicijom odstupanja; posle 4 stabilna ciklusa automatizovati prikupljanje.

### Expected result

Leverage raste bez gubitka kontrole.

## Common mistake

- **Pogrešno:** „Delegirao sam kada sam rekao: uradi ovo.“
- **Ispravno:** Potrebni su ishod, standard, ovlašćenje, rok, rizik i check-in.

## Practical exercise

Napiši delegation brief za jedan zadatak i označi šta owner može odlučiti sam, kada eskalira i koju metriku prati.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; automatski test u aplikaciji proverava razumevanje principa, ne sam zadatak.

## Assessment rubric

Automatski test u aplikaciji proverava znanje, račun/dokaz, primenu i poslovnu odluku sa po tri pitanja po oblasti; svaka oblast nosi 25 poena. Očekivani principi:

1. Delegiranje prenosi ishod i ovlašćenje uz jasne granice i kontrolu.
2. Vlasnik u primeru oslobađa 3,5 sata nedeljno.
3. Automatizaciji treba da prethode jasan i stabilan proces.
4. Menadžer zadržava odgovornost za sistem bez preuzimanja svakog koraka.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-OPS-004`, `BKB-OPS-012`, `BKB-PEO-005` · BK-008 (menadžerska poluga) · BK-014 pp. 291, 435–437 (delegiranje, paradoks automatizacije)

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
