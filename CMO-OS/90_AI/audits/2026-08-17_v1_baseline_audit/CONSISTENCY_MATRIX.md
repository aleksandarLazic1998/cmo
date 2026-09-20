# CMO OS — Consistency Matrix

Version: 1.0
Datum: 2026-08-17
Auditor: Claude (nezavisni review)
Cilj: mapirati SVAKI konflikt između dokumenata — sa citatima i preporučenim autoritetom.

Ova matrica ne predlaže popravke. Nabraja konflikte, imenuje ih, i za svaki bira **dokument koji BI trebalo da ima autoritet** (v.next preporuka — konačna odluka je na vlasniku sistema).

---

## Legenda

- **A / B** — dokumenta u konfliktu
- **Autoritet (predlog):** koji treba da bude source-of-truth
- **Severity:** CRITICAL / HIGH / MEDIUM / LOW (per AUDIT_PROTOCOL § "Severity")

---

## C-01 [CRITICAL] Startup protocol — dva različita spiska

**A.** `CLAUDE.md § 4 "CMO OS Startup Protocol"` (kada korisnik napiše "Pokreni CMO OS"):

1. Pročitaj `ROADMAP.md`
2. Pročitaj `10_Daily/Learning_Progress.md`
3. Proveri trenutni nivo, poslednju lekciju, slabosti, sledeći cilj
4. Nastavi od trenutne tačke

**B.** `CLAUDE_DESKTOP_MASTER_INSTRUCTION.md § "Startup command"`:

1. Read the current learning/progress state from the actual repository
2. Read the roadmap
3. Determine the next valid learning step
4. Continue from the documented state
5. Update the appropriate state document after the session

**B (drugo mesto).** `CLAUDE_DESKTOP_MASTER_INSTRUCTION.md § "First-run behavior"`:

1. README.md → 2. CLAUDE.md → 3. ROADMAP.md → 4. AUDIT_PROTOCOL.md → 5. Inventory → 6. Compare → 7. Do not assume

**Konflikti:**

- Broj koraka: 4 vs. 5 vs. 7.
- Fajl progresa: A hard-koduje `10_Daily/Learning_Progress.md`; B kaže "actual repository" bez putanje.
- Redosled: A kreće ROADMAP → progress; B "First-run" kreće README → CLAUDE → ROADMAP.
- A ne zahteva ažuriranje state-a na kraju; B zahteva.

**Autoritet (predlog):** B ("First-run") kao normalna procedura; B ("Startup command") kao skraćena procedura za "Pokreni CMO OS" komandu. A treba brisati ili prepisati da referencira B.

**Zašto matter:** startup je prvi kontakt AI-a sa sistemom u svakoj sesiji. Kontradikcija tu → nekonzistentno ponašanje kroz sesije, tj. korisnik dobija dva različita mentora naizmenično.

---

## C-02 [CRITICAL] Struktura projekta — README i CLAUDE se ne slažu

**A.** `README.md § 12 "Struktura projekta"` (14 top-level stavki):

`README.md, CLAUDE.md, ROADMAP.md, CHANGELOG.md, 01_Knowledge, 02_Lessons, 03_Playbooks, 04_SOP, 05_KPI, 06_Strategy, 07_Marketing, 08_Finance, 09_Company, 10_Daily, 11_Projects, 12_Meetings, 13_Decisions, 99_Templates`

**B.** `CLAUDE.md § 9 "Documentation Management"` navodi sekcije (11 direktorijuma):

`01_Knowledge, 02_Lessons, 03_Playbooks, 04_SOP, 05_KPI, 06_Strategy, 07_Marketing, 08_Finance, 09_Company, 10_Daily, 11_Projects`

**Razlike:**

| Direktorijum | README § 12 | CLAUDE § 9 |
|---|---|---|
| `12_Meetings` | ✅ | ❌ |
| `13_Decisions` | ✅ | ❌ |

**Autoritet (predlog):** README kao struktura sistema; CLAUDE mora navoditi identičan set (ili eksplicitno reći "aktivni podskup"). Trenutno `13_Decisions` je pomenut u Business_Case_Template § 15 i Lesson_Template § 15 kao odredište za odluke — što znači da template-i pretpostavljaju direktorijum koji CLAUDE ne poznaje. AI će verovatno ignorisati `13_Decisions` zato što se oslanja na CLAUDE.md.

**Zašto matter:** AI koji sledi CLAUDE.md neće ni pomisliti da otvori `12_Meetings` i `13_Decisions`. Odluke koje bi tamo trebale da idu će curiti u druge foldere → gubitak strukture.

---

## C-03 [CRITICAL] Fajl koji CLAUDE.md poziva pri startup-u ne postoji

**A.** `CLAUDE.md § 4` i `§ 10`: Claude mora čitati `10_Daily/Learning_Progress.md`.

**B.** Fizičko stanje: `10_Daily/` **ne postoji**. Fajl istog imena postoji kao `99_Templates/Learning_Progress.md` — i taj fajl nije prazan template već ima konkretne vrednosti (v. C-06).

**Autoritet (predlog):** kreirati `10_Daily/Learning_Progress.md` kao instancu i držati u `99_Templates/` samo prazan template `Learning_Progress_TEMPLATE.md`. Alternativa: prepraviti CLAUDE.md da tačno referencira postojeći put — ali to zamagljuje templat/instance distinkciju.

**Zašto matter:** Startup procedura ne može da uspe kao napisana. Prvi put kada korisnik napiše "Pokreni CMO OS", AI će naći ili ništa (ako sledi CLAUDE putanju) ili template kao state (ako fallback-uje na 99_Templates) — što je najgore od dve mogućnosti.

---

## C-04 [HIGH] Struktura lekcije — CLAUDE § 6 i Lesson_Template.md se razilaze

**A.** `CLAUDE.md § 6` — svaka lekcija mora imati 11 stavki:

Title, Objective, Explanation, Business Example, Numbers, CMO Thinking, Exercise, Knowledge Test, Business Scenario, Evaluation, Next Step.

**B.** `99_Templates/Lesson_Template.md` — 16 sekcija:

Lesson Metadata, Learning Objective, Previous Knowledge Required, Business Context, Concept Explanation, Business Example, Numbers & Financial Analysis, CMO Thinking Framework, Common Mistakes, Practical Exercise, Discussion Questions, Business Case Challenge, Final Assessment, Student Evaluation, Lesson Completion, Knowledge Storage.

**Razlike:**

- Template dodaje: Metadata, Previous Knowledge Required, Business Context, Common Mistakes, Discussion Questions, Business Case Challenge, Lesson Completion, Knowledge Storage.
- CLAUDE dodaje ime "Knowledge Test" koje u template-u je "Final Assessment".
- CLAUDE nema "Previous Knowledge Required" (prerekvizit) — ali ROADMAP koristi eksplicitne nivoe (znači prerekvizit postoji implicitno).

**Autoritet (predlog):** Lesson_Template.md kao izvor istine za strukturu lekcije. CLAUDE § 6 treba da samo referencira template i navede minimum obavezni podskup.

**Zašto matter:** AI koji generiše lekcije po CLAUDE definiciji proizvodi lekciju bez prerekvizita, bez discussion pitanja, bez "Knowledge Storage" pointera — što slama vezu sa `01_Knowledge/`, `11_Projects/`, `13_Decisions/`.

---

## C-05 [HIGH] Identitet studenta — hard-kodovan "Aleksandar"

**A.** `CLAUDE.md § 2 "User Context"`: "Student: Aleksandar".
**B.** `99_Templates/Learning_Progress.md § 1 "Student Profile"`: "Name: Aleksandar".

**Konflikt sa `AUDIT_PROTOCOL.md § "Phase 3 — Instruction audit"`** koji eksplicitno lista "excessive hard-coded personal context" kao stvar koju treba naći. Ovde je nađena.

**Nezavisan konflikt:** ime "Aleksandar" u CLAUDE.md je istovremeno hard-code u sistemu koji se predstavlja kao "reusable Commercial Operating System" (README §§ 1–2 govore u opštim terminima).

**Autoritet (predlog):** CLAUDE.md treba da bude generički. Ime, background, jezik i sve personalno **premestiti u `10_Daily/Learning_Progress.md`** kao operativni state. `Learning_Progress.md` u `99_Templates/` treba očistiti od svih personalnih vrednosti.

**Zašto matter:** ako se sistem preda drugom korisniku, ime "Aleksandar" mora se menjati na dva mesta i lako se propušta. Takođe: template koji već ima konkretne vrednosti nije template — to je state fajl greškom stavljen u templates folder (v. C-06).

---

## C-06 [HIGH] Template/state hibrid u `99_Templates/Learning_Progress.md`

**Evidencija:** fajl je u folderu koji AUDIT_PROTOCOL naziva "templates", ali sadrži:

- "Name: Aleksandar" (konkretna vrednost, ne placeholder)
- "Overall Level: LEVEL 0 - Business Beginner" (state)
- "Learning Status: 🟡 Starting Journey" (state)
- "Current Objective: Izgraditi osnovno razumevanje..." (state)
- "Trenutno: Analitičko razmišljanje / Tehnička osnova ..." (state)
- "Version: 2.0" — ne verzija koja se prati u instance-u

**Autoritet (predlog):** raspoloviti fajl:

- `99_Templates/Learning_Progress_TEMPLATE.md` — samo prazna struktura, sve placeholders (`{{name}}`, `{{level}}`, itd.).
- `10_Daily/Learning_Progress.md` — instance sa konkretnim state-om.

**Zašto matter:** AI koji sledi startup traži state u `10_Daily/`, ne pronalazi, fallback-uje na jedini "Learning_Progress" u sistemu (template). Sad AI čita "current lesson: None" i piše preko toga. Rezultat: state se piše u template. Sledeća sesija dobija state pomešan sa placeholders → tiha degradacija.

---

## C-07 [HIGH] "Tehnocentar" kao case study bez ijednog fajla

**A.** `CLAUDE.md § 17 "Company Mode"`: "Glavni realni case study: Tehnocentar. Analizirati: proizvode, kupce, konkurenciju, marketing, prodaju, profit, skaliranje."
**B.** `ROADMAP.md § "Business Simulation Track"`: "Case Study: Tehnocentar. Analizirati: proizvode, kupce, konkurenciju, prodaju, marketing, profit, rast."
**C.** Fizičko stanje: **nula fajlova** o Tehnocentru. `09_Company/` ne postoji.

**Autoritet (predlog):** Tehnocentar dosije treba fizički postojati na dan-1: `09_Company/Tehnocentar/` sa minimum: `overview.md`, `products.md`, `customers.md`, `financials.md`, `competition.md`, `open_questions.md`. Dok god ne postoji, sve AI analize Tehnocentra su ASSUMPTION, ne FACT — a AUDIT_PROTOCOL izričito zabranjuje prezentovanje ASSUMPTION-a kao FACT.

**Zašto matter:** čitav "Business Simulation Track" (levels 3–10) oslanja se na Tehnocentar. AI bez podataka mora izmišljati brojeve → sistem stvara lažnu poslovnu naraciju koja se zatim čuva kao znanje.

---

## C-08 [HIGH] Version chaos i prazan CHANGELOG

**A.** README v1.0, CLAUDE v3.0, ROADMAP v2.0, Learning_Progress v2.0, Lesson_Template v2.0, Business_Case_Template v1.0. Drugi fajlovi bez verzije.
**B.** `CHANGELOG.md` postoji ali je prazan.

**Konflikt:** CLAUDE je na v3.0 → postojale su najmanje 2 iteracije koje nigde nisu zabeležene. Nema traga šta se promenilo, ni kada, ni zašto.

**Autoritet (predlog):** jedna versiona semantika za sistem (npr. `CMO-OS vX.Y.Z`), dokumenti nose verziju sistema, a `CHANGELOG.md` postaje obavezan sa svaku promenu u `README/CLAUDE/ROADMAP/Template/*`. Alternativa: git repo umesto ZIP-a.

**Zašto matter:** bez change log-a nemoguć je audit istorije. Ako se CLAUDE v4.0 pojavi sutra sa novim pravilima, ne postoji način da se rekonstruiše šta je bilo v3.0 osim iz ovog samog audita.

---

## C-09 [MEDIUM] Two failure-behavior modela — 80% cutoff vs. 0–5 skala

**A.** `CLAUDE.md § 7 "Testing System"`: "Minimum za prolaz: 80%".
**B.** `CLAUDE.md § 8 "Knowledge Rating System"`: 0–5 skala, gde je 4 = "Samostalno primenjuje" i 5 = "Može učiti druge".

**Konflikt:** 80% je kontinuirana skala, 0–5 diskretna. Nije definisan mapping. 80% od 5 = 4.0 — implicitno "level ≥ 4 = pass". Ali test u Business_Case_Template i Lesson_Template koristi /100 skalu (razdeljena na 4 x /25 sekcije), što je bliže 80%. `Learning_Progress.md § 6` koristi 0/5 skalu ("Financial Thinking: 0/5").

**Autoritet (predlog):** jedan sistem ocenjivanja. Preporuka:
- Testovi → /100 sa pass ≥ 80.
- Kompetencija po oblasti → 0/5 skala (dugoročni progres).
- Mapping: pass testa daje +1 na kompetenciju u odgovarajućoj oblasti ako je kompetencija < 4; pass sa ≥95 daje +1 do maksimuma 5.

**Zašto matter:** AI ne zna kada da "unapredi" korisnika na sledeći nivo. Trenutno može da tumači kako hoće.

---

## C-10 [MEDIUM] "Nikada ne predlaži popuste" vs. "Anchor Pricing"

**A.** `CLAUDE.md § 15 "Promotion Rules"`: "Nikada automatski ne predlaži popuste".
**B.** `CLAUDE.md § 16 "Customer Psychology"`: koristiti "Anchor Pricing".

**Nije direktan konflikt**, ali granica nije jasna. Anchor Pricing često operiše kroz "precrtanu cenu" što u praksi izgleda kao popust. Nema pravila koje razlikuje "psychology anchor" od "discount".

**Autoritet (predlog):** dodati u CLAUDE eksplicitnu granicu: "anchor = uporedna cena bez menjanja stvarne cene za kupca; discount = spuštanje stvarne cene ispod list price. Discount nije zabranjen — zabranjeno je nuditi ga AUTOMATSKI bez analize alternative (bundle, upsell, GWP)."

**Zašto matter:** AI će ili blokirati validne pricing taktike, ili tiho koristiti popuste pod imenom "anchor" — obe greške skupe.

---

## C-11 [MEDIUM] Sekcije koje mapiraju na direktorijume koji ne postoje

Template-i i CLAUDE upućuju studente/AI da čuvaju izlaze u:

- `01_Knowledge/` — Business_Case_Template § 15, Lesson_Template § 15, CLAUDE § 9
- `11_Projects/` — Business_Case_Template § 15, Lesson_Template § 15
- `13_Decisions/` — Business_Case_Template § 15, Lesson_Template § 15 (nije u CLAUDE § 9!)

Ni jedan od tri direktorijuma ne postoji. Prvo pisanje će morati da ih kreira, ali nema pravila ko/kako to radi.

**Autoritet (predlog):** kreirati minimalne "seed" fajlove u svakom direktorijumu na dan-1 (`_README.md` sa svrhom foldera i primerom naming konvencije).

---

## C-12 [MEDIUM] Empty template fajlovi — 3 od 6

`Meeting_Template.md`, `Product_Analysis_Template.md`, `Project_Template.md` postoje sa 0 bajta. Znači jedno od:

(a) autor je planirao da ih napiše, nije stigao;
(b) sadržaj je greškom obrisan;
(c) fajlovi su namerno prazni kao "coming soon" placeholder.

Bez git istorije se ne može razlikovati.

**Autoritet (predlog):** dok se ne napišu, obrisati fajlove umesto držanja praznih ljuski. Prazni template pruža lažnu sigurnost ("imamo Meeting template") i lako se referencira iz drugih fajlova, što stvara skrivene missing-content bugove.

---

## C-13 [LOW] Naming: mix Serbian/English

- Fajlovi na engleskom (`Learning_Progress`, `Lesson_Template`, `Business_Case`).
- Sadržaj i strukturne oznake dominantno srpski.
- Neka poglavlja u CLAUDE (§§ 12–16) drže engleske termine bez prevoda ("Anchor Pricing", "Traffic Driver").

Nije bug, ali nekonzistentno i otežava pretragu.

**Autoritet (predlog):** ostaviti fajl-imena na engleskom (portabilnija), sadržaj primarno srpski, glosar engleskih termina jednom (npr. `01_Knowledge/_glossary.md`) i cross-link odatle.

---

## C-14 [LOW] Duplicirana definicija transformacije Technical → CEO

Isti ladder pojavljuje se u 4 fajla (README §§ 2, 12–13, Finalna vizija; CLAUDE §§ 1, 20; ROADMAP §§ 1, 4; Learning_Progress §§ 1, 15). Male varijacije formulacije.

**Autoritet (predlog):** jedan fajl definiše ladder (predlog: ROADMAP § 4), ostali samo referenciraju.

---

## C-15 [LOW] "Communication Style" — dva mesta

`CLAUDE.md § 19` i `CLAUDE_DESKTOP_MASTER_INSTRUCTION.md § "Communication"`. Slično ali ne identično. Master govori "Explain a business term the first time it appears", CLAUDE § 19 kaže "Kada koristiš termin: Prvi put objasni značenje". Semantički isto, ali dupla definicija znači dvostruko održavanje.

---

## 3. Rezime po severity

| Severity | Broj |
|---|---|
| CRITICAL | 3 (C-01, C-02, C-03) |
| HIGH | 5 (C-04, C-05, C-06, C-07, C-08) |
| MEDIUM | 4 (C-09, C-10, C-11, C-12) |
| LOW | 3 (C-13, C-14, C-15) |

Ukupno konflikata: **15**.

---

# END OF CONSISTENCY MATRIX
