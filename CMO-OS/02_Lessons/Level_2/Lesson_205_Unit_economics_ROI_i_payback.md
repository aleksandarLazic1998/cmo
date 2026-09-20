# Lesson 205 — Unit economics, ROI i payback

status: `AUTHORED`  
level: `2 — Finansije vlasnika`  
prerequisite: `204`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Proceni ekonomiku kupca, proizvoda i investicije.

## Teach & explain

Unit economics proverava da li jedna jedinica, kupac ili porudžbina stvara dovoljno doprinosa. ROI meri povrat prema uloženom iznosu, a payback vreme potrebno da se ulaganje vrati.

Dobar procenat nije dovoljan bez perioda, rizika i apsolutnog iznosa. Brz povrat male investicije i spor povrat velike investicije imaju različite posledice po gotovinu.

## Visual model

1. Ulaganje → 2. Dodatni doprinos → 3. ROI → 4. Vreme povrata

## New terms

- **Unit economics / Unit economics:** Prihod i relevantni troškovi po jedinici analize.
- **ROI / Return on investment:** Neto korist ÷ ulaganje.
- **Payback / Payback period:** Vreme potrebno da kumulativni priliv vrati ulaganje.

## Realistična `[FIXTURE]` simulacija — Nova servisna stanica

Oprema košta 600.000 RSD i donosi procenjenih 75.000 RSD mesečnog dodatnog doprinosa.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** jedna simulirana investicija
- **Unit / currency:** RSD, meseci i %
- **VAT / tax basis:** iznosi na istoj pojednostavljenoj osnovi
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** doprinos je stabilan 12 meseci; bez vrednosti novca u vremenu
- **Formula / denominator:** Payback = 600.000 ÷ 75.000 = 8 meseci; jednogodišnja korist 900.000; jednostavni ROI = (900.000 − 600.000) ÷ 600.000 = 50%.

### Inputs

- ulaganje 600.000
- mesečni doprinos 75.000
- period procene 12 meseci

### Decision

Nastaviti samo ako je tražnja dokazana i scenario pada ostaje likvidan.

### Expected result

Investicija se ne odobrava samo na osnovu baznog ROI-ja.

## Common mistake

- **Pogrešno:** „ROI 50% znači da je investicija sigurna.“
- **Ispravno:** ROI zavisi od pretpostavki; proveri scenario, gotovinu, period i rizik.

## Practical exercise

Izračunaj payback ako doprinos padne 25%. Napiši dve pretpostavke koje bi prvo validirao.

**Rešenje za proveru:** Doprinos pada sa 75.000 na 56.250 RSD mesečno. Payback = 600.000 ÷ 56.250 = 10,7 meseci umesto 8. Primeri pretpostavki za validaciju: da tražnja ostaje na projektovanom nivou i da doprinos po jedinici ne pada dalje zbog popusta ili rasta troška.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; automatski test u aplikaciji proverava razumevanje principa, ne sam zadatak.

## Assessment rubric

Automatski test u aplikaciji proverava znanje, račun/dokaz, primenu i poslovnu odluku sa po tri pitanja po oblasti; svaka oblast nosi 25 poena. Očekivani principi:

1. ROI i payback odgovaraju na različita pitanja o povratu.
2. U baznom primeru payback je 8 meseci, a jednostavni jednogodišnji ROI 50%.
3. Pre investicije treba validirati tražnju i stresirati ključne pretpostavke.
4. Investicija se bira prema povratu, gotovini, riziku i strateškom fitu zajedno.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-FIN-003` · BK-006 (ROI) · BK-014 pp. 212, 235 (Lifetime Value, ROI)

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
