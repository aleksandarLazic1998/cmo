# Lesson 606 — Nabavka, distributeri i pregovaranje sa dobavljačem

status: `AUTHORED`  
level: `6 — Retail i category management`  
prerequisite: `605`  
evidence_mode: `[FIXTURE]`

> `AUTHORED` znači da sadržaj postoji i auditiran je za učenje. Ne znači `ACTIVE` ili `COMPLETED`; personal learning state postoji samo u `10_Daily/Learning_Progress.md`.

## Learning objective

Pregovara o ceni, rabatu, roku plaćanja, MOQ i zaštiti od pada cene uz poznatu alternativu.

## Teach & explain

U trgovini tehnikom veliki deo marže nastaje u nabavci, pre nego što kupac uđe u prodavnicu. Nabavna cena, rabat, rok plaćanja, minimalna količina porudžbine i zaštita od pada cene zajedno određuju koliko novca firma zaradi i koliko kapitala veže u zalihi.

### Zašto je ovo važno vlasniku

Prodavnica tehnike obično kupuje od distributera, a cene modela brzo padaju kada izađe nova generacija. Loši uslovi nabavke mogu pojesti maržu čak i kada prodaja ide dobro.

### Pet poluga, običnim jezikom

1. **Nabavna cena** — koliko plaćaš po komadu.
2. **Rabat** — naknadno umanjenje koje važi samo ako ispuniš uslov (npr. godišnju količinu).
3. **Rok plaćanja** — koliko dana posle isporuke plaćaš; duži rok smanjuje potrebu za gotovinom.
4. **MOQ** — najmanja količina koju moraš da naručiš; veći MOQ znači više kapitala u zalihi i veći rizik zastarevanja.
5. **Zaštita od pada cene** — distributer nadoknađuje razliku za robu na stanju kada spusti cenu, pod ugovorenim uslovima.

### Alternativa pre pregovora

Najbolja alternativa dogovoru (BATNA) je ono što ćeš uraditi ako ne postigneš dogovor, na primer kupovina kod drugog distributera. Bez poznate alternative ne znaš koji uslov je zaista dobar.

### Na tabli `[FIXTURE]`

Očekuje se prodaja 800 monitora godišnje. Distributer A nudi 19.500 RSD po komadu i rabat 2% ako se kupi 1.000 komada; distributer B nudi 19.800 RSD bez uslova. Uz realnih 800 komada rabat se ne ostvaruje: A košta 15.600.000 RSD, B 15.840.000 RSD, pa A štedi 240.000 RSD. Rabat od 2% × 19.500 × 1.000 = 390.000 RSD ulazi u plan tek kada postoji dokaz da je 1.000 komada dostižno.

### Sa čim se meša

Niža nabavna cena nije uvek bolji uslov: kraći rok plaćanja ili veći MOQ mogu koštati više od uštede. Rabat nije profit dok uslov nije ispunjen i potvrđen dokumentom (Lesson 605).

### Veza sa drugim lekcijama

Lesson 603 povezuje MOQ i lead time sa zalihom; Lesson 204 rok plaćanja sa gotovinom; Lesson 503 pregovaranje sa kupcem. Lesson 607 nastavlja kroz odnos sa kupcem posle prodaje.

## Visual model

1. Potreba kategorije → 2. Alternativa (BATNA) → 3. Poluge: cena, rabat, rok, MOQ, zaštita → 4. Ukupan efekat na maržu i gotovinu

## New terms

- **Distributer / Distributor:** Posrednik od kojeg prodavnica kupuje robu proizvođača.
- **Minimalna količina porudžbine / Minimum order quantity (MOQ):** Najmanja količina koju dobavljač prihvata.
- **Zaštita od pada cene / Price protection:** Nadoknada razlike u ceni za robu na stanju kada distributer spusti cenu.
- **Najbolja alternativa dogovoru / BATNA:** Šta ćeš uraditi ako ne postigneš dogovor.

## Realistična `[FIXTURE]` simulacija — Izbor distributera za monitore

Prodavnica bira distributera za godišnju nabavku monitora i proverava da li je rabat dostižan.

### Evidence contract

- **Source / method:** CMO OS original authored simulation
- **Period / as-of:** N/A — simulirani scenario
- **Grain / population:** godišnja nabavka jednog modela monitora
- **Unit / currency:** RSD i komadi
- **VAT / tax basis:** sve vrednosti na istoj osnovi; PDV nije modelovan
- **Inclusions:** samo eksplicitno navedeni ulazi
- **Assumptions:** očekivana prodaja 800 komada; rokovi plaćanja jednaki kod oba distributera
- **Formula / denominator:** A = 800 × 19.500 = 15.600.000 RSD; B = 800 × 19.800 = 15.840.000 RSD; razlika 240.000 RSD; rabat 2% × 19.500 × 1.000 = 390.000 RSD samo uz 1.000 komada.
- **Exclusions:** stvarni Tehnocentar/PostHog podaci i sve nenavedene stavke

### Inputs

- očekivana prodaja 800 komada godišnje
- distributer A: 19.500 RSD, rabat 2% uz 1.000 komada
- distributer B: 19.800 RSD bez uslova

### Decision

Izabrati A na osnovu potvrđene cene, a rabat tretirati kao mogući dobitak, ne kao planirani profit.

### Expected result

Plan nabavke ne zavisi od uslova koji verovatno neće biti ispunjen.

## Common mistake

- **Pogrešno:** „Uzimamo veći MOQ jer je rabat 3%.“
- **Ispravno:** Rabat se poredi sa troškom dodatne zalihe, rizikom pada cene i gotovinom koju zaliha vezuje.

## Practical exercise

Distributer spušta cenu modela laptopa za 1.500 RSD. Na stanju je 40 komada; ugovorna zaštita od pada cene važi za robu kupljenu u poslednjih 30 dana, a to je 25 komada.

1. Koliki je odobreni iznos zaštite, a koliki gubitak vrednosti zalihe ostaje na firmi?
2. Kako bi u sledećem pregovoru promenio uslov zaštite?
3. Koju alternativu (BATNA) bi pripremio pre pregovora?

**Rešenje za proveru:** zaštita 25 × 1.500 = 37.500 RSD; nepokriveni gubitak vrednosti 15 × 1.500 = 22.500 RSD.

**Kriterijum prihvatanja:** odgovor mora zadovoljiti sva četiri principa iz rubrike ispod. Otvoreni deo zadatka ocenjuje mentor; procena proverava i razumevanje principa i sam zadatak.

## Assessment rubric

Procena proverava znanje, račun/dokaz, primenu i poslovnu odluku; svaka oblast nosi 25 poena. Očekivani principi:

1. Nabavni uslovi uključuju cenu, rabat, rok plaćanja, MOQ i zaštitu od pada cene, ne samo cenu.
2. U primeru A štedi 240.000 RSD uz realnu količinu; rabat od 390.000 RSD važi samo uz 1.000 komada.
3. Pregovor počinje od poznate alternative i traži ustupke koji štite maržu i gotovinu.
4. Odluka uključuje samo potvrđene uslove; uslovni rabat je upside.

Canonical prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške.

## Sources and limits

- CMO OS originalna sinteza · bez prepisivanja knjiga
- Korpus: `BKB-FIN-003`, `BKB-VAL-002` · BK-006 (obrtni kapital i marža)

Knjige su sekundarni izvori. Ova lekcija je originalna CMO OS sinteza i ne kopira dostavljene knjige.

## Local authority boundary

Ugovorni uslovi, knjiženje rabata i zaštite od pada cene zavise od ugovora i računovodstvenih pravila. Primer je `[FIXTURE]`; odluku potvrđuju ugovor i računovođa.
