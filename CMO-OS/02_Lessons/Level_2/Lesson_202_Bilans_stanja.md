# Lesson 202 — Bilans stanja

status: `AUTHORED`  
level: `2 — Finansije vlasnika`  
prerequisite: `201`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Razume imovinu, obaveze i kapital na određeni dan.

## Teach & explain

Bilans stanja je fotografija firme na određeni dan. Leva strana pokazuje imovinu; druga objašnjava da li je ta imovina finansirana obavezama ili kapitalom vlasnika.

Osnovna ravnoteža je: imovina = obaveze + kapital. Profit može povećati kapital, ali kupovina zaliha samo menja oblik imovine iz gotovine u robu.

### Zašto je ovo važno vlasniku

Bilans stanja pokazuje šta firma ima, koliko duguje i koliko pripada vlasniku na određeni dan. Iz njega se vidi da li je rast finansiran sopstvenim novcem ili tuđim dugom.

### Na tabli `[FIXTURE]`

Firma kupi opremu za servis od 300.000 RSD na kredit. Imovina raste za 300.000 RSD (oprema), obaveze rastu za 300.000 RSD (kredit), a kapital se ne menja. Jednačina imovina = obaveze + kapital ostaje u ravnoteži.

### Sa čim se meša

Bilans stanja nije film perioda kao bilans uspeha, već fotografija jednog dana. Veća imovina ne znači bogatiju firmu ako su istovremeno porasle obaveze.

### Veza sa drugim lekcijama

Lesson 201 stvara rezultat koji ulazi u kapital; Lesson 203 i 204 objašnjavaju kretanje gotovine, potraživanja, zaliha i obaveza.

### Iz korpusa

BK-006, PDF pp. 73–103 (imovina, obaveze, kapital i osnovna jednačina; whole-book beleška). BK-014 p. 205 (Balance Sheet) proveren u tekstu korpusa 2026-11-05.

## Visual model

1. Gotovina, zalihe, oprema → 2. = → 3. Obaveze → 4. + kapital

## New terms

- **Imovina / Assets:** Resursi koje firma kontroliše.
- **Obaveze / Liabilities:** Dugovanja prema drugim stranama.
- **Kapital / Equity:** Preostali interes vlasnika posle obaveza.

## Realistična `[FIXTURE]` simulacija — Kupovina zaliha na odloženo

Firma prima robu vrednu 300.000 RSD i dobavljaču plaća za 30 dana.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** pozicija bilansa × datum
- **Unit / currency:** RSD na određeni datum
- **VAT / tax basis:** pojednostavljeno, bez poreskog knjiženja
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke
- **Assumptions:** roba nije prodata niti plaćena na datum prikaza
- **Formula / denominator:** Imovina +300.000 = obaveze +300.000; kapital se odmah ne menja.

### Inputs

- zalihe +300.000
- obaveze prema dobavljaču +300.000
- rok plaćanja 30 dana

### Decision

Pratiti rok dospeća i plan prodaje zalihe pre plaćanja.

### Expected result

Bilans ostaje uravnotežen, ali likvidnosni rizik raste.

## Common mistake

- **Pogrešno:** „Više zaliha automatski znači više bogatstva.“
- **Ispravno:** Zaliha je imovina, ali može biti spora, zastarela i finansirana dugom.

## Practical exercise

Prikaži efekat naplate kupca od 100.000 RSD na potraživanja i gotovinu. Objasni zašto se ukupna imovina ne menja.

**Rešenje za proveru:** Naplata smanjuje potraživanja za 100.000 RSD i povećava gotovinu za 100.000 RSD. Ukupna imovina se ne menja jer je jedna imovina zamenjena drugom; obaveze i kapital ostaju isti, pa bilans i dalje štima.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; procena proverava i razumevanje principa i sam zadatak.

## Assessment rubric

Procena proverava znanje, račun/dokaz, primenu i poslovnu odluku; svaka oblast nosi 25 poena. Očekivani principi:

1. Bilans stanja prikazuje imovinu, obaveze i kapital na određeni dan.
2. Kupovina zaliha na odloženo povećava i imovinu i obaveze za 300.000 RSD.
3. Povećanje zalihe treba proceniti zajedno sa rokom prodaje i dospećem obaveze.
4. Uravnotežen bilans ne znači automatski dobru likvidnost.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-FIN-002` · BK-006 (bilans stanja) · BK-014 p. 205

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.
