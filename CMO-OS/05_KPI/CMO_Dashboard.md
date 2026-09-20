# CMO Dashboard

**Svrha:** Kratak operativni pregled profitabilnog rasta. Dashboard nije lista za izveštavanje; svaka promena treba da pokrene konkretnu odluku ili analizu.

**Status podataka:** Nema potvrđenih podataka za Tehnocentar. Zato su trenutno definisani samo metrike, izvori i ritam merenja — ne i ciljne vrednosti.

## 1. KPI struktura

| Uloga | KPI | Zašto se prati | Kada reagujemo |
|---|---|---|---|
| Primarni rezultat | Bruto profit | Meri komercijalnu zaradu pre operativnih troškova. | Pad uz rast prihoda zahteva analizu mix-a, marže i popusta. |
| Primarni rezultat | Prihod | Pokazuje obim prodaje i bazu za profit. | Pad zahteva razdvajanje problema prometa, konverzije i korpe. |
| Zaštitna metrika | Marža | Sprečava rast prodaje koji uništava kvalitet zarade. | Pad uz isti mix proverava cene, nabavne uslove i promocije. |
| Pokretač | Prosečna korpa | Pokazuje vrednost po transakciji. | Pad usmerava na bundle, upsell i asortiman. |
| Pokretač | Konverzija | Pokazuje sposobnost da se poseta pretvori u kupovinu. | Pad usmerava na ponudu, dostupnost, prodajni proces i UX. |
| Pokretač | Attach rate | Pokazuje dodatnu prodaju uz glavni proizvod. | Pad usmerava na bundle i cross-sell obuku. |
| Jedinična ekonomika | CAC | Pokazuje cenu akvizicije novog kupca. | Rast bez rasta CLV-a zahteva promenu kanala ili ponude. |
| Jedinična ekonomika | CLV | Pokazuje dugoročnu vrednost kupca. | Pad usmerava na retenciju, servis i ponovnu kupovinu. |

## 2. Definicije i formule

| KPI | Formula | Obavezni podaci | Primarni izvor | Ritam |
|---|---|---|---|---|
| Prihod | Σ prodajnih vrednosti | Datum, transakcija, stavka, prodajna vrednost | POS / e-commerce platforma | Dnevno, nedeljno, mesečno |
| Bruto profit | Prihod − trošak prodate robe | Prihod i nabavna cena prodate stavke | ERP / finansije + POS | Nedeljno i mesečno |
| Marža | Bruto profit ÷ prihod × 100 | Prihod, bruto profit | ERP / finansije | Nedeljno i mesečno |
| Prosečna korpa | Prihod ÷ broj transakcija | Prihod, jedinstveni broj transakcija | POS / e-commerce platforma | Dnevno i nedeljno |
| Konverzija | Transakcije ÷ posete × 100 | Transakcije, fizičke ili digitalne posete | POS + brojač poseta / web analytics | Nedeljno |
| Attach rate | Glavni proizvodi sa dodatkom ÷ prodati glavni proizvodi × 100 | Stavke iste korpe i definisana lista dodataka | POS / CRM | Nedeljno |
| CAC | Trošak akvizicije ÷ novi kupci | Marketing trošak, pouzdana identifikacija novih kupaca | Marketing platforme + CRM | Mesečno |
| CLV | Prosečan bruto profit po kupcu × očekivani broj kupovina | Kupac, transakcije, bruto profit, period zadržavanja | CRM + POS/ERP | Kvartalno |

## 3. Pravila kvaliteta podataka

- Isti period, valuta i PDV tretman moraju važiti za brojilac i imenilac formule.
- Povraćaji, otkazane porudžbine i korekcije cena moraju imati jasno pravilo uključivanja.
- Konverzija se vodi odvojeno za fizičke prodavnice i online kanal.
- Attach rate se meri po definisanoj kategoriji glavnog proizvoda i kompatibilnim dodacima.
- CAC i CLV se ne izveštavaju kao pouzdani dok CRM ne razlikuje nove od postojećih kupaca.

## 4. Prvi measurement plan

1. Utvrditi vlasnika podataka za POS, ERP, web analitiku, CRM i marketing troškove.
2. Definisati početni period za baseline: preporuka je poslednjih 90 dana, kada podaci budu dostupni.
3. Izračunati osnovnu vrednost svih metrika pre postavljanja cilja.
4. Postaviti cilj tek uz istorijski trend, kapacitet tima i planirane akcije.
5. Na nedeljnom pregledu prvo analizirati bruto profit, prihod i maržu; zatim koristiti korpu, konverziju i attach rate za dijagnostiku.

## 5. Cadence i odgovornost

| Sastanak | Učesnici | Fokus | Očekivani izlaz |
|---|---|---|---|
| Nedeljni commercial review | Komercijala, prodaja, marketing | Prihod, bruto profit, marža i pokretači | Jedna do tri prioritetne akcije sa vlasnikom i rokom. |
| Mesečni management review | Direktor/CMO, finansije, komercijala | Trend, kategorije, kanali, promocije i budžet | Odluke o cenama, mix-u, promocijama i resursima. |
| Kvartalni growth review | Uprava, marketing, komercijala | CAC, CLV, retencija i investicije | Korekcija strategije rasta i ulaganja. |

## Otvorena pitanja pre ciljeva

- Koje kanale Tehnocentar danas koristi: maloprodaja, online ili B2B?
- Kako se vode nabavne cene, povraćaji i promocije?
- Postoji li identifikacija kupca kroz CRM ili loyalty program?
- Koji poslovni cilj ima prioritet u narednih 90 dana: rast bruto profita, promet, obrt zaliha ili akvizicija?

