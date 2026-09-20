# Full Book Acquisition

Status: `active`  
Canonical research state: `11_Research/book_acquisition/Book_Reading_Ledger.md`

## Purpose

Ova procedura obezbeđuje da Morijarti CMO OS knowledge base nastane iz potpunog, proverljivog čitanja svakog validnog izvora, a ne iz naslova, sadržaja, izabranih poglavlja, odlomaka ili eksternih sažetaka.

## Non-negotiable completion rule

Knjiga sme dobiti status `COMPLETED` samo kada:

1. identitet izvora je potvrđen naslovom, autorom, brojem stranica i SHA-256 hash-em;
2. svaka dostupna PDF stranica je evidentirana;
3. sav extractable tekst je obrađen u sekvencijalnim page range-ovima;
4. stranice bez dovoljno teksta su vizuelno proverene kada mogu sadržati dijagram, tabelu, ilustraciju ili drugi materijalni sadržaj;
5. postoji originalna whole-book sinteza sa chapter/section coverage-om, tezama, argumentima, modelima, primerima, ograničenjima i CMO OS vezama;
6. reading ledger i coverage evidence su ažurirani;
7. `cmo-auditor` nije pronašao critical/high coverage ili provenance failure.

Čitanje filename-a, metadata-e, sadržaja, uvoda, izabranog poglavlja, odlomka ili tuđeg sažetka nikada nije dovoljno za `COMPLETED`.

## Corpus rule

- Svaka validna knjiga koju korisnik uključi u corpus je `MANDATORY` dok je korisnik izričito ne označi drugačije.
- Batch i redosled su samo mehanizam pouzdanog izvršenja. Ne daju dozvolu da se niže rangirani izvor preskoči.
- Oštećena, prazna ili skraćena kopija označava se `INVALID_COPY`. Kada postoji potpuna kopija istog dela, invalidna kopija se vezuje za nju i ne broji se kao zasebna obavezna knjiga.
- Full-corpus acquisition ne menja autoritet knjiga: one ostaju sekundarni izvori i ne postaju dokaz Tehnocentar činjenica, korisnikove kompetencije ili važećih propisa.

## Workflow

### 1. Inventory

Za svaki PDF zabeleži:

- `book_id`
- absolute source path
- title i author
- edition kada je dostupno
- PDF page count
- extractable/non-empty page count
- file size
- SHA-256
- accessibility i duplicate status
- inspection date i extraction method

### 2. Deterministic extraction coverage

Obradi stranice u izvornom redosledu. Za svaki page range zabeleži početnu i završnu PDF stranicu, extraction rezultat, text checksum i problematične stranice. Prazna stranica je evidence kategorija, ne automatski failure.

### 3. Visual coverage

Renderuj i pregledaj:

- svaku stranicu bez extractable teksta koja može sadržati sadržaj;
- stranice sa tabelama, dijagramima ili layout-em koji menja značenje teksta;
- kompletne page contact sheet-ove za izrazito vizuelne knjige.

Ne zaključuj da je vizuelna stranica prazna samo zato što text extraction vraća nula znakova.

### 4. Whole-book synthesis

Whole-book note mora sadržati:

- source identity i evidence coverage;
- potpunu chapter/section mapu;
- glavnu tezu i logiku argumenta;
- principe i mentalne modele;
- vrste dokaza i ključne primere, parafrazirano;
- pretpostavke, ograničenja, rizike i moguće kontraargumente;
- konflikte i saglasnosti sa drugim obrađenim izvorima;
- veze sa CMO OS Concept ID-ovima, lekcijama i poslovnim domenima;
- decision rules, pitanja, vežbe i zakonite praktične primene;
- tvrdnje koje zahtevaju savremen ili lokalni zvanični izvor.

### 5. Cross-book integration

Tek nakon `COMPLETED` statusa knjige, njeni potvrđeni modeli ulaze u `11_Research/Book_Knowledge_Base.md`. Cross-book sinteza mora sačuvati provenance i razliku između tvrdnje autora, CMO OS inference-a i potvrđene činjenice.

### 6. Audit

Auditor proverava:

- da page coverage odgovara PDF page count-u;
- da nema preskočenog ili neobjašnjenog range-a;
- da su vizuelne stranice obrađene;
- da note predstavlja celu strukturu knjige;
- da `COMPLETED` nije izveden iz sažetka;
- da originalni PDF nije promenjen;
- da tekst knjige nije reprodukovan u knowledge base-u.

## Status values

- `NOT_STARTED` — izvor je poznat, ali nije inventarisan.
- `INVENTORIED` — identitet i pristupačnost su provereni; full reading nije počeo.
- `IN_PROGRESS` — najmanje jedan page range je obrađen, ali completion gate nije zatvoren.
- `COMPLETED` — svi completion uslovi i audit gate su ispunjeni.
- `PARTIALLY_ACCESSIBLE` — deo sadržaja nije moguće pouzdano pročitati.
- `INACCESSIBLE` — sadržaj se ne može obraditi.
- `INVALID_COPY` — prazna, skraćena, oštećena ili lažno kompletna kopija.
- `SUPERSEDED_COPY` — validna, ali zamenjena izdanjem koje je određeno kao corpus source of record.

## Copyright and source protection

- Originalni PDF ostaje izvan CMO-OS projekta i ne menja se.
- CMO-OS ne čuva niti distribuira puni tekst knjige.
- Trajni output je originalna sinteza i coverage/provenance evidence.
- Citati se koriste kratko i samo kada su neophodni; prednost imaju parafraza, poređenje i primena.
- Poreklo/licenca dostavljenih kopija nije potvrđena. Korisnik je odgovoran za zakonit pristup izvorima.
