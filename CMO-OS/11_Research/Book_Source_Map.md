# Book Source Map

Status: `active research map`  
Last reviewed: `2026-08-23`

## Svrha

Ovaj dokument mapira dostavljene knjige na CMO OS curriculum. Knjige su sekundarni izvori, a ne source of truth za curriculum, Aleksandarov napredak, Tehnocentar podatke ili važeće propise.

## Pravila korišćenja

1. PDF ostaje izvan projekta; CMO OS ne čuva niti distribuira pun tekst knjige.
2. Svaka validna corpus knjiga obrađuje se u celini prema `04_SOP/full_book_acquisition.md`; targeted beleška za lekciju nije zamena za full-book completion.
3. Kratki citat koristi se samo kada je nužan; prednost imaju parafraza, poređenje i praktična primena.
4. Tvrdnje iz knjige proveravaju se prema kontekstu i drugim izvorima. Popularna poslovna metoda nije automatski univerzalna činjenica.
5. Licenca porekla dostavljenih kopija nije potvrđena. Korisnik treba da koristi zakonito pribavljene kopije; CMO OS ih ne premešta u svoju bazu.
6. Za pravo, poreze i računovodstvene zahteve Srbije koriste se aktuelni zvanični izvori, ne ove knjige.

## Mapa izvora

| Knjiga | Primarna vrednost | Nivoi | Način korišćenja / ograničenje |
|---|---|---|---|
| Josh Kaufman — *The Personal MBA* | Široka mapa vrednosti, marketinga, prodaje, isporuke, finansija i sistema | 0–2, 5, 7–10 | Početni orijentir; pojedine tvrdnje proveravati dubljim izvorima. |
| Alexander Osterwalder, Yves Pigneur — *Business Model Generation* | Poslovni model i Business Model Canvas | 4 | Koristiti kao mapu pretpostavki, ne kao dokaz da model radi. |
| Osterwalder et al. — *Value Proposition Design* | Poslovi, problemi, koristi i fit ponude | 3–4 | Povezati sa dokazima iz razgovora i eksperimenata. |
| Rob Fitzpatrick — *The Mom Test* | Kvalitet razgovora sa kupcima | 3 | Naglasiti ponašanje i obavezu kupca, ne komplimente. |
| Eric Ries — *The Lean Startup* | Pretpostavke, MVP, učenje i eksperimenti | 3 | MVP nije nužno samo softver niti opravdanje za loš kvalitet. |
| April Dunford — *Obviously Awesome* | Positioning u odnosu na alternative | 4 | Razdvojiti positioning od slogana i vizuelnog identiteta. |
| Alex Hormozi — *$100M Offers* + *The Lost Chapter* | Avatar, vrednost, cena i konstrukcija ponude | 4–5 | Koristiti kritički; spektakularna ponuda ne zamenjuje profit, isporuku, etiku ni dokaz. |
| Karen Berman, Joe Knight, John Case — *Financial Intelligence* | Finansijski izveštaji, procene i jezik brojeva | 1–2, 8, 10 | Glavni konceptualni finansijski izvor; nije srpski računovodstveni standard. |
| Mike Michalowicz — *Profit First* | Disciplina gotovine i raspodele | 2, 8 | Metoda upravljanja novcem, ne zamena za računovodstvo, cash-flow forecast ili poreski savet. |
| Eliyahu Goldratt — *The Goal* | Tok, usko grlo i kontinuirano poboljšanje | 7 | Princip preneti i van proizvodnje, uz proveru konkretnog procesa. |
| Michael Gerber — *The E-Myth Revisited* | Procesi, uloge i smanjenje zavisnosti od vlasnika | 7, 9–10 | Ne pretvarati sistematizaciju u birokratiju. |
| Andrew Grove — *High Output Management* | Menadžerski output, leverage, sastanci i učinak | 8–9 | Prilagoditi veličini malog biznisa. |
| Geoff Smart, Randy Street — *Who* | Definisanje uloge i strukturisano zapošljavanje | 9 | Kombinovati sa zakonitim, fer i kontekstualnim procesom selekcije. |
| Richard Rumelt — *Good Strategy/Bad Strategy* | Dijagnoza, vodeća politika i koherentne akcije | 10 | Glavni izvor za razlikovanje strategije od ambicije. |
| John Warrillow — *Built to Sell* | Prenosivost firme i owner independence | 7, 10 | Ne optimizovati samo prodaju firme; primeniti kao test zdravlja sistema. |
| Verne Harnish — *Scaling Up* | People, Strategy, Execution i Cash u rastu | 8–10 | Koristiti tek nakon dokazane osnovne ekonomike i procesa. |
| Robert Greene — *The 48 Laws of Power* | Power dynamics, reputacija, percepcija i odbrana od manipulacije | 9–10 | Kritički izvor, ne etički ili istorijski autoritet; destruktivne motive prevoditi u zakonitu zaštitu, due diligence i pozicioniranje. |

## Pokrivenost i preostale rupe

Biblioteka je dovoljna za jezgro curriculuma. Sledeće oblasti se dopunjuju drugim, aktuelnim izvorima umesto novim gomilanjem knjiga:

| Oblast | Status | Dopuna |
|---|---|---|
| Osnovna ekonomija i finansije | Dobro pokriveno | `[FIXTURE]` modeli i kasnije stvarni izveštaji. |
| Kupac, validacija i poslovni model | Dobro pokriveno | Strukturisane vežbe i evidence discipline. |
| Ponuda i positioning | Dobro pokriveno | Kritičko poređenje metoda i profitna provera. |
| Prodajni proces i pregovaranje | Delimično | Originalne CMO OS lekcije i praktične simulacije. |
| Marketing kanali i merenje | Delimično | Aktuelni stručni izvori, analytics i simulacije. |
| Retail/category management | Delimično | CMO OS retail framework, proverene definicije i simulacije. |
| Operacije, sistemi i leadership | Dobro pokriveno | Prilagoditi malom biznisu i lokalnom kontekstu. |
| Srbija: pravo, porezi, PDV i radni odnosi | Nije pokriveno | APR, Poreska uprava, relevantni propisi i kvalifikovani stručnjak. |
| Governance, bezbednost i poslovni rizik | Delimično | Aktuelni pravni/stručni izvori i risk framework. |

## Tehnički status dostavljenih fajlova — 2026-08-23

- `[FACT]` Detektovano je 20 PDF fajlova.
- `[FACT]` 18 validnih corpus izvora ima ukupno 4.558 PDF stranica.
- `[FACT]` Kompresovane kopije *The Personal MBA* i *The E-Myth Revisited* imaju samo jednu stranu i status `INVALID_COPY`; koriste se potpune kopije od 496 i 206 strana.
- `[FACT]` `The 48 Laws of Power` je dodata u mapu nakon što je utvrđeno da ima 476 stranica i extractable tekst na 473 stranice.
- Detaljni identitet, SHA-256, accessibility i reading status postoje u `book_acquisition/Book_Reading_Ledger.md`.

## Full-corpus acquisition

Svih 18 validnih izvora je `MANDATORY`. Čitaju se sekvencijalno od prve do poslednje dostupne stranice i dobijaju whole-book note, coverage evidence i audit. Redosled obrade je logistički; nijedan validan izvor se ne izostavlja zbog nižeg prioriteta.

Puni tekst se ne kopira u CMO OS. Trajno se čuvaju originalna sinteza, provenance, page coverage, ograničenja, cross-book veze i praktične primene. Targeted lekcijske beleške mogu koristiti već obrađenu sintezu bez ponovnog čitanja cele biblioteke.
