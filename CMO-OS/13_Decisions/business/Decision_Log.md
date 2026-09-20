# Decision Log

**Svrha:** Trajna evidencija poslovnih i sistemskih odluka u CMO OS-u.

## Pravilo upisa

Svaka značajna odluka dobija jedinstven ID u formatu `DEC-YYYY-XXX`. Upisati odluku kada je potvrđena; rezultat dopuniti naknadno, kada se meri.

## Registar odluka

| ID | Datum | Tema | Odluka | Vlasnik | Status | Datum provere |
|---|---|---|---|---|---|---|
| DEC-2026-001 | 2. avgust 2026. | CMO OS v2.0 | Implementirati Etapu A bez brisanja ili reorganizacije postojećih dokumenata. | Aleksandar | Završeno | 2. avgust 2026. |
| DEC-2026-002 | 2. avgust 2026. | KPI i znanje | Uvesti poslovni rečnik, indeks znanja i dashboard bez izmišljenih baseline-a ili ciljeva. | Aleksandar | Završeno | Nakon unosa podataka |
| DEC-2026-003 | 16. avgust 2026. | Metod učenja | Svaka lekcija prvo objašnjava ceo sistem i pojmove, pa tek zatim daje vežbu ili test. | Aleksandar | Aktivno | Nakon Lesson 001 |
| DEC-2026-004 | 16. avgust 2026. | Vizuelni standard | Svaki važan procesni ili poslovni tok prikazati uređivim FigJam dijagramom. | Aleksandar | Zamenjeno | 16. avgust 2026. |
| DEC-2026-005 | 16. avgust 2026. | Vizuelni standard | Lucidchart je podrazumevani alat za nove dijagrame. | Aleksandar | Zamenjeno | 17. avgust 2026. |
| DEC-2026-006 | 17. avgust 2026. | Plugin arhitektura | Figma je verifikovan vizuelni alat; PostHog je analytics alat. CMO OS ostaje source of truth, a spoljne write akcije zahtevaju odobrenje. | Aleksandar | Aktivno | Nakon prvog realnog workflow-a |
| DEC-2026-007 | 17. avgust 2026. | Redosled učenja i podataka | Prvo završiti sve lekcije; do tada koristiti samo fixture simulacije, bez stvarnih Tehnocentar/PostHog podataka. | Aleksandar | Aktivno | Po završetku roadmap-a |
| DEC-2026-008 | 18. avgust 2026. | Proširenje curriculuma | Usvojiti curriculum od 49 lekcija, učiti termine od nule i koristiti dostavljene knjige kao sekundarne izvore. | Aleksandar | Aktivno | Nakon Level 1 |

---

## DEC-2026-001 — Operativni temelj CMO OS v2.0

**Problem**  
CMO OS ima jasnu viziju i šablone, ali nema aktivnu memoriju učenja, alatno-neutralni AI standard, dnevnik odluka ni istoriju promena.

**Podaci i analiza**  
Audit je utvrdio da su sve glavne radne oblasti prazne, dok su postojeći root dokumenti smislen v1 temelj. Nema sadržaja koji bi zahtevao rizičnu migraciju ili brisanje.

**Opcije**

1. Odmah preurediti celu strukturu.
2. Dodati samo operativni temelj, pa nastaviti u malim etapama.
3. Ostaviti sistem u postojećem stanju.

**Odluka**  
Izabrana je opcija 2: uvesti aktivni Learning Progress, AI Operating Standard, Decision Log i Changelog.

**Razlog**  
Ovo omogućava kontinuitet rada uz minimalan rizik i bez gubitka postojeće vizije.

**Očekivani rezultat**  
Svaki AI alat može nastaviti učenje sa iste tačke, a buduće promene i odluke ostaju proverljive.

**KPI / kriterijum uspeha**

- aktivni Learning Progress postoji i naveden je u startup protokolu;
- AI Operating Standard je dostupan nezavisno od alata;
- svaka naredna važna odluka dobija ID i upis u ovaj registar;
- promene u sistemu se upisuju u Changelog.

**Rezultat**  
Etapa A je završena 2. avgusta 2026.

**Lekcija**  
Sistem prvo mora dobiti memoriju i pravila rada; tek zatim treba širiti sadržaj i procese.

---

## DEC-2026-002 — Temelj znanja i merenja

**Problem**  
Sistem nema jedinstvene definicije poslovnih termina, mapu znanja ni standard za merenje komercijalnog učinka.

**Odluka**  
Uvedeni su Business Glossary, Knowledge Index i CMO Dashboard sa formulama, izvorima, ritmom merenja i pravilima kvaliteta podataka.

**Razlog**  
Definicija metrike mora postojati pre cilja. Bez potvrđenih podataka Tehnocentra, svaka numerička meta bila bi nagađanje.

**Rezultat**  
Etapa B je završena. Prvi sledeći korak je prikupljanje baseline podataka i izbor poslovnog prioriteta za narednih 90 dana.

**Lekcija**  
Metrika je korisna samo ako je dosledno definisana, ima pouzdan izvor i menja odluku tima.

---

## DEC-2026-003 — Objašnjenje pre vežbe

**Problem**  
Početna izvedba Lesson 001 prebrzo je prešla na zadatke, bez potpunog objašnjenja poslovnog sistema i termina.

**Odluka**  
Svaka lekcija počinje celovitim objašnjenjem, poslovnim tokom i primerom. Vežba dolazi tek kada Aleksandar potvrdi da su koncepti jasni.

**Razlog**  
Cilj nije brzo rešavanje zadatka, već izgradnja pravilnog mentalnog modela na koji se kasnije nadovezuju finansije, retail i strategija.

**Očekivani rezultat**  
Više razumevanja pre računanja, manje pamćenja formula bez poslovnog konteksta i kvalitetnija primena znanja.

**Status**  
Aktivno od 16. avgusta 2026.

---

## DEC-2026-006 — Kontrolisana plugin arhitektura

**Problem**  
Više specijalističkih skillova i aktivni Figma/PostHog pluginovi mogu ubrzati rad, ali mogu napraviti paralelne izvore istine ili neodobrene spoljne promene.

**Odluka**  
CMO OS ostaje canonical. `cmo-core` rutira posao kroz instalirane specijaliste; `cmo-auditor` proverava rezultat. Figma je trenutni vizuelni alat, PostHog product analytics alat. `EXECUTE` akcije zahtevaju eksplicitno odobrenje.

**Rezultat**  
Implementirani su registry, integration contracts i tri kontrolna scenarija.

**Status**  
Aktivno od 17. avgusta 2026.

---

## DEC-2026-007 — Lekcije pre stvarnih podataka

**Problem**  
Rano uvođenje stvarnih poslovnih i product-analytics podataka može preopteretiti učenje pre nego što su finansijski, retail, marketing i decision temelji savladani.

**Odluka**  
Prvo završiti kompletan learning roadmap. Vežbe, testove i business scenarije raditi na jasno označenim `[FIXTURE]` simulacijama. Stvarni Tehnocentar, PostHog i drugi operativni podaci ne ulaze u analize do završetka programa.

**Kriterijum završetka**  
Svi nivoi imaju završene lekcije, najmanje 80% na proverama i dokazanu primenu kroz simulacije.

**Status**  
Aktivno od 17. avgusta 2026.

---

## DEC-2026-008 — Prošireni curriculum i knjiški izvori

**Problem**  
Prethodni roadmap je imao dobre tematske nivoe, ali nije eksplicitno pokrivao validaciju ideje, poslovni model, positioning, dizajn ponude, finansijske izveštaje, operativna uska grla, zapošljavanje i skaliranje. Aleksandar počinje bez formalnog poslovnog obrazovanja.

**Podaci i analiza**  
Dostavljena biblioteka dobro pokriva jezgro preduzetništva, ali strane poslovne knjige ne pokrivaju pouzdano srpske poreze, pravo i deo praktičnog retail/prodajnog rada. Masovno dodavanje novih knjiga povećalo bi obim bez garantovane primene.

**Odluka**  
Usvaja se curriculum `2026.08-expanded`: 49 lekcija kroz postojećih 11 nivoa, sa beginner-first objašnjenjima, praktičnim `[FIXTURE]` scenarijima i evidence gate-om od najmanje 80/100. Dostavljene knjige su sekundarni izvori; CMO OS ostaje canonical.

**Trade-off**  
Program je duži i detaljniji, ali smanjuje rizik da važna osnova bude preskočena. Buduće lekcije se ne pišu sve unapred, već tek kada postanu aktivne.

**Kriterijum uspeha**

- Katalog ima jasan redosled i prerequisites.
- Svaki stručni termin prvo dobija jednostavno objašnjenje.
- Knjige se sintetizuju bez kopiranja punog teksta.
- Lokalni propisi koriste aktuelne zvanične izvore.
- Aleksandar prolazi svaku lekciju sa najmanje 80/100 i praktičnom odlukom.

**Status**  
Aktivno od 18. avgusta 2026.

---

## DEC-2026-004 — FigJam kao standard za dijagrame

**Problem**  
Tekstualni tokovi u lekcijama su teži za brzo razumevanje i nisu pogodni za trajnu, uređivu vizuelnu dokumentaciju.

**Odluka**  
Svaki poslovni tok, proces ili decision tree koji zahteva vizuelno objašnjenje dobija FigJam dijagram. Dijagram se vezuje za relevantan CMO OS dokument.

**Razlog**  
Aleksandar lakše gradi poslovni mentalni model kada odnose vidi kao sistem, a FigJam ostaje uređiv i ponovo upotrebljiv.

**Status**  
Zamenjeno odlukom DEC-2026-005, 16. avgusta 2026.

---

## DEC-2026-005 — Lucidchart kao standard za dijagrame

**Problem**  
Aleksandar želi da novi poslovni dijagrami budu u Lucidchart-u, a ne u FigJam-u.

**Odluka**  
Lucidchart je podrazumevani alat za sve nove procesne, poslovne i decision tree dijagrame. Postojeći FigJam dijagrami ostaju kao istorijski referentni materijal.

**Ograničenje**  
Lucidchart integracija trenutno nije dostupna u ovom razgovoru, pa se novi Lucidchart fajlovi mogu praviti tek nakon povezivanja dostupne integracije.

**Status**  
Zamenjeno odlukom DEC-2026-006, 17. avgusta 2026.
