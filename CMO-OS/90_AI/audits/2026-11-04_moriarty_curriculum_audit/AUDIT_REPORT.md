# Moriarty and curriculum audit

Date: 2026-11-04
Verdict: `REVISE` — Morijarti i kurikulum su upotrebljivi za početak (Level 0–1), ali nisu dovoljni da pouzdano vode od početnika do naprednog nivoa bez dopuna navedenih ispod.
Review type: single-session self-review (cmo-auditor checklist) sa javnim web istraživanjem; nije nezavisna druga provera.
Baseline: `aedc719` (feature/ai-mentor-integration, lokalno).

## 1. Alati stvarno korišćeni u ovoj sesiji

| Alat | Status | Upotreba | Ograničenje |
|---|---|---|---|
| Bash, Read/Grep/Glob, Edit/Write | dostupno, korišćeno | čitanje repozitorijuma, izmene, pokretanje testova | radi samo nad lokalnim checkout-om |
| Exa web search (MCP) | dostupno, korišćeno | 12 javnih upita o nauci učenja, finansijskoj pismenosti, preduzetništvu, zakonu | sažeci i stranice izdavača; puni tekstovi nisu čitani u celini |
| Tavily search (MCP) | dostupno, nije korišćeno | rezerva za proveru | — |
| Context7 (MCP) | dostupno, nije korišćeno | dokumentacija biblioteka | nije bilo potrebe |
| Learning Commons (MCP) | dostupno, nije korišćeno | K-12 standardi | nije relevantno za odrasle poslovne veštine |
| claude-api skill | korišćeno u prethodnom zadatku | Claude SDK za AI mentora | — |
| Chromium/Playwright | korišćeno u prethodnom zadatku | E2E provera aplikacije | emulacija, ne fizički uređaj |
| GitHub push | NEDOSTUPNO | — | `git push` vraća 403: Claude GitHub App nema pristup repozitorijumu |
| Claude Artifacts (MCP) | dostupno, nije korišćeno | moguće interaktivne stranice | ništa nije objavljeno |
| Marketing/sales/PM plugin konektori (Figma, Notion, HubSpot…) | neuspela konekcija (proxy 403) | — | nisu potrebni; nijedan nije korišćen |
| Subagenti | dostupni, nisu korišćeni | — | — |

Privatni kod, lični podaci i poslovni podaci nisu slati spoljnim servisima; web upiti su bili opšti.

## 2. Šta je stvarno pregledano

- Celo: `AGENTS.md`, `CLAUDE.md`, `AUTHORITY.md`, `INDEX.md`, `ROADMAP.md`, početak `CHANGELOG.md`, `README.md`, `moriarty-mentorship.md`, `cmo-core` i `cmo-auditor` SKILL i checklist, SOP-ovi (lesson lifecycle, change, evidence, model/visual), ADR 008, `Learning_Progress.md`, `LESSON_CATALOG.md` (svih 49 redova), Lesson 001 i 002, vizuelni pilot i njegov audit, Moriarty behavior test.
- Delimično: Lesson 503, 1004 (teorija i vežba), 204 (teorija); `Knowledge_Graph.md` (početak), `Book_Source_Map.md` (početak i mapa), `Book_Knowledge_Base.md` (spisak koncepata).
- Mašinski preko svih 49 lekcija: dužina, broj reči u „Teach & explain“, ključne reči (ponavljanje, etika, dobavljač, reklamacija, pregovaranje, pre-mortem, gate), stari tekst o aplikaciji.
- Nije pregledano: ostalih ~40 lekcija red po red, whole-book beleške, coverage fajlovi, istorijski auditi pre 2026-11-01 osim navedenih, PDF knjige.

## 3. Šta već radi

- Jasna podela autoriteta i dokaza; `[FIXTURE]` disciplina; zabrana izmišljanja Tehnocentar podataka i napretka (dokaz: AUTHORITY, moriarty-mentorship „Boundaries“, behavior test T3–T6).
- Redosled teorija → pitanja → vođeni primer → praksa → test → feedback → upis definisan na četiri mesta i usklađen.
- Strog gate (80/100, 15/25, primena, odluka, ispravljene greške) i odvajanje `AUTHORED` od `COMPLETED`.
- Kurikulum pokriva širok luk (11 nivoa, 49 lekcija), ima integracioni CEO scenario (1005) i retail fokus koji odgovara prodavnici tehnike (Level 6: kategorije, zalihe, attach rate, rebate/co-funding, PDV kontekst).
- Svaka lekcija ima evidence contract, uobičajenu grešku, vežbu, rubriku i izvore.

## 4. Nalazi — Morijarti

| # | Prioritet | Nalaz | Dokaz | Uticaj na učenje | Ispravka |
|---|---|---|---|---|---|
| M1 | High | Nije postojao protokol za lestvicu pomoći; dozvoljeno je da mentor odmah da rešenje. | „Feedback behavior“ traži jači pokušaj, ali ne određuje kada se rešenje sme dati. | Rizik „AI štake“: bolja vežba, slabiji samostalni rezultat (LSE-06). | URAĐENO: Pedagogical protocol tačke 4 i 10. |
| M2 | High | Nema razmaknutog prisećanja ranijih pojmova. | Ciklus u specifikaciji i SOP-u nema korak ponavljanja; u 49 lekcija „ponavlj“ se javlja u 2. | Brže zaboravljanje, posebno finansija (LSE-01, LSE-07). | URAĐENO: tačka 1 + lesson lifecycle korak 6. |
| M3 | Medium | Nije opisano kako se objašnjenje menja kad učenik ne razume. | Nema pravila o reprezentacijama ili manjim koracima. | Ponavljanje istog objašnjenja ne pomaže. | URAĐENO: tačka 5. |
| M4 | Medium | „Kompletna teorija“ bez segmentacije može preopteretiti početnika. | SOP zabranjuje zadatke u teoriji, ali ne propisuje celine i pauze. | Kognitivno preopterećenje (LSE-04). | URAĐENO: tačka 2 (pauza bez zadatka). |
| M5 | Medium | Nema neocenjene provere polaznog znanja. | lesson_lifecycle korak 3 traži proveru znanja, bez postupka. | Mentor ne zna šta učenik već razume. | URAĐENO: tačka 3, bez upisa i bez dijagnoze. |
| M6 | Medium | Feedback nema eksplicitan model cilj → stanje → sledeći korak. | „Feedback behavior“ ima redosled, ne i „feed forward“. | Feedback bez jasnog sledećeg koraka (LSE-02). | URAĐENO: tačka 7. |
| M7 | Medium | Preduzetnički način razmišljanja nije operacionalizovan kao proverljive navike. | Spominju se MORIARTY MODE i Sherlock test, ali ne hipoteza/test/pre-mortem/zapis odluke u praksi. | Motivacija bez navike (LSE-09, LSE-10). | URAĐENO: tačka 9. |
| M8 | Medium | Behavior test pokriva bezbednost i autoritet, ne pedagogiju. | `MORIARTY_BEHAVIOR_TEST.md` T1–T6. | Pedagoške slabosti ne bi bile otkrivene. | URAĐENO: `90_AI/evals/SCENARIO_04_moriarty_pedagogy.md` (P1–P8); NIJE IZVRŠENO bez stvarnog modela. |
| M9 | Low | Ton „bez suvišnih reči“ može biti previše sažet za početnika. | Character sekcija. | Rizik nerazumevanja. | Pokriveno tačkama 2 i 5; ton nije menjan. |

## 5. Nalazi — kurikulum

| # | Prioritet | Nalaz | Dokaz | Zašto je bitno | Preporuka |
|---|---|---|---|---|---|
| C1 | High | Teorija u lekcijama je kratak sažetak: 2.477 reči „Teach & explain“ u 49 lekcija (oko 50 po lekciji). | Mašinsko brojanje; npr. 002, 503, 1004 imaju po dva pasusa. | „Kompletna teorija“ zavisi od improvizacije modela; kvalitet i tačnost variraju između sesija. | Predlog P1 u `CURRICULUM_PROPOSAL.md`: standard dubine teorije, proširenje lekciju po lekciju, počevši od Level 0–1. |
| C2 | High | Gate scenariji nivoa nisu napisani (osim 1005). | Catalog ima samo opis gate-a; nijedan fajl ne sadrži gate scenario; ROADMAP traži integracioni scenario za prelaz nivoa. | Prelaz nivoa ne može biti dokazan kako ROADMAP zahteva. | Predlog P2: napisati 10 gate scenarija (Level 0–9). |
| C3 | Medium | Nabavka i odnos sa dobavljačima/distributerima nemaju zasebnu lekciju. | Pokriveno usput u 603/605 (lead time, MOQ, rebate); 8 lekcija pominje dobavljača. | Za prodavnicu tehnike nabavni uslovi, price protection i rabati su glavni izvor marže i rizika. | Predlog P3: nova lekcija 606. |
| C4 | Medium | Postprodaja (saobraznost, garancija, reklamacije, servis) i zaštita potrošača nemaju zasebnu lekciju. | 4 lekcije pominju reklamaciju; nov zakon 35/2026 (LSE-12). | Za tehniku je postprodaja trošak, rizik i lojalnost. | Predlog P3: nova lekcija 607 (orijentacija, zvanični izvor). |
| C5 | Medium | Kvalitet odluke pod neizvesnošću (očekivana vrednost, pre-mortem, zapis odluke) razbacan je po 003, 304, 802, 1004. | Ključne reči: pre-mortem 0, dnevnik odluka 0, očekivana vrednost 1. | Preduzetnik najviše greši u odlukama pod neizvesnošću. | Predlog P3: nova lekcija 805 ili proširenje 003. |
| C6 | Medium | Organizaciona struktura i etika/usklađenost nemaju zasebnu obradu. | „organizacion“ 1 lekcija; etika ugrađena u 7 lekcija, governance samo u 1004. | Rast traži strukturu i odgovorno odlučivanje. | Predlog P3: 905 i 1006 (pre 1005). |
| C7 | Medium | Svih 49 lekcija pominje „automatski test u aplikaciji“, a ta aplikacija i banka od 576 pitanja nisu u repozitorijumu. | grep: 49/49. | Učenik i mentor upućeni na nepostojeći alat. | Predlog P4: jedna mehanička izmena teksta posle odobrenja. Nije menjano. |
| C8 | Low | Redosled: 11 finansijskih lekcija (L1–L2) pre prve lekcije o kupcu (L3). | Catalog. | Odrasli uče bolje kada vide relevantnost; Level 0 delimično rešava kroz pregled sistema. | Predlog P5 (opciono): prepletanje ili pomeranje Level 3; trenutni napredak je samo 001, pa nema migracije potvrđenih rezultata. |
| C9 | Low | Pregled sistema (002) dolazi posle prvog računa (001). | Catalog. | Korisnik je tražio sistem pre pojedinačnih finansijskih zadataka. | 001 već predaje tokove vrednosti, robe i novca pre računa; prihvatljivo. Bez promene. |
| C10 | Low | Vežba 002 pretpostavlja da učenik ima sopstveni posao („svoj tok“). | Lesson 002, Practical exercise. | Početnik bez firme nema podatke. | Predlog P4: dodati `[FIXTURE]` alternativu. |

## 6. Izmene urađene u ovoj sesiji

| Fajl | Izmena | Razlog | Provera |
|---|---|---|---|
| `90_AI/skills/cmo-core/references/moriarty-mentorship.md` | Nova sekcija „Pedagogical protocol“ (10 tačaka) | M1–M7; LSE-01…LSE-11 | Ne menja redosled ni autoritet; teorija i dalje bez zadataka; documentary runner prolazi |
| `04_SOP/lesson_lifecycle.md` | Korak 6: neocenjeno prisećanje na početku sesije | M2 | documentary runner |
| `11_Research/Learning_Science_Evidence.md` | Nova istraživačka beleška (12 izvora, tip dokaza, ograničenja) | Zahtev za izvorima i datumom provere | linkovi ručno provereni u pretrazi 2026-11-04 |
| `90_AI/evals/SCENARIO_04_moriarty_pedagogy.md` | 8 pedagoških scenarija | M8 | definisano; nije izvršeno |
| `CURRICULUM_PROPOSAL.md` (ovaj folder) | Predlog migracije P1–P5 | C1–C10 | čeka odobrenje |

Nisu menjani: `LESSON_CATALOG.md`, lekcije, Knowledge Graph, knjige, Learning Progress, istorijski auditi.

## 7. Izvršene provere

Rezultati su u `checks.json` u ovom folderu.

## 8. Šta nije provereno

- Stvarno ponašanje Morijartija sa jezičkim modelom posle izmene (nema API kredencijala u okruženju; scenario P1–P8 nije izvršen).
- Kvalitet sadržaja ~40 lekcija koje nisu čitane red po red.
- Tačnost whole-book beleški i coverage dokaza.
- Puni tekstovi istraživačkih radova (čitani sažeci i stranice izdavača).
- Datumi primene novog Zakona o zaštiti potrošača u Službenom glasniku.
- Push na GitHub i pull request (403).
