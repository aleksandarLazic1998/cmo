# CMO OS — Recommended Architecture (v.next)

Version: 1.0-draft
Datum: 2026-08-17
Autor: Claude (audit output)
Status: **prijedlog** — čeka odobrenje vlasnika pre primene.

Ovaj dokument definiše ciljano stanje CMO OS-a. Ne opisuje trenutno stanje (za to → `FILE_MANIFEST.md` i `AUDIT_REPORT.md`).

---

## 1. Ciljevi arhitekture

1. **Deterministički startup** — bilo koji AI, ma kada, sledeći isti korak dolazi do istog state-a.
2. **Jedan source of truth po temi** — nema dupliranja, nema "verzija A i verzija B".
3. **Evidence discipline u kod-u** — FACT / INFERENCE / ASSUMPTION / UNKNOWN je mehanizovan, ne samo pravilo.
4. **AI-agent discoverability** — svaki folder objašnjava sebe, root ima INDEX.
5. **Auditability** — svaka izmena ostavlja trag; CHANGELOG je popunjen; verzije prate sistem.
6. **Portable identity** — sistem se može predati drugom korisniku bez izmene generičkih fajlova.

---

## 2. Piramida autoriteta

Kada dva fajla protivreče, gore-navedeni pobeđuje.

```
1. /AUTHORITY.md              (meta-pravilo o pravilima)
2. /CLAUDE.md                 (operativna instrukcija za AI — v.next)
3. /README.md                 (vizija; ne definiše fajlove ni procedure)
4. /ROADMAP.md                (razvojni put učenja)
5. /04_SOP/*                  (standardne procedure — kako se radi)
6. /99_Templates/*            (šta fajl mora sadržati)
7. Instance fajlovi (npr. /02_Lessons/, /09_Company/)
```

Napomena: README više NE definiše "Strukturu projekta" — ta uloga se preseljava u `AUTHORITY.md` i `INDEX.md`. README postaje samo vizija.

Novi fajl `AUTHORITY.md` mora sadržati:

- ovu piramidu,
- pravilo za razrešavanje konflikta (log u `13_Decisions/system/`),
- pravilo koje reči imaju procedural značenje (MUST, SHOULD, MAY po RFC 2119 stilu),
- version scheme (v. § 6).

---

## 3. Direktorijska struktura (v.next)

Numerisanje ostaje 01–13 + 99 (kompatibilno sa README § 12), sa dodacima:

```
CMO-OS/
├── AUTHORITY.md                   ← NOVO (§ 2)
├── INDEX.md                       ← NOVO (§ 7)
├── README.md                      ← SLIM (samo vizija)
├── CLAUDE.md                      ← REWRITE (v. CLAUDE_INSTRUCTIONS_VNEXT.md)
├── ROADMAP.md                     ← keep, sa manjim čišćenjem
├── CHANGELOG.md                   ← START POPUNJAVATI
│
├── 00_CLAUDE_TRANSFER/            ← keep za audit trag, ali označen DEPRECATED
│   ├── AUDIT_PROTOCOL.md          (kept for reference)
│   ├── CLAUDE_DESKTOP_MASTER_INSTRUCTION.md (deprecated; sadržaj u CLAUDE.md)
│   └── TRANSFER_MANIFEST.md       (kept for reference)
│
├── 01_Knowledge/                  ← trajni koncepti
│   ├── _README.md                 (svrha, naming, kako se dodaje)
│   ├── _glossary.md               (SR/EN termini)
│   ├── Finance/
│   ├── Retail/
│   ├── Sales/
│   ├── Marketing/
│   └── Strategy/
│
├── 02_Lessons/                    ← generisane lekcije
│   ├── _README.md
│   ├── Level_0/
│   ├── Level_1/
│   ...
│   └── Level_10/
│
├── 03_Playbooks/                  ← ponovljive strategije
│   └── _README.md
│
├── 04_SOP/                        ← standardne procedure
│   ├── _README.md
│   ├── document_lifecycle.md      ← NOVO (draft→published→archived)
│   ├── naming_conventions.md      ← NOVO
│   ├── evidence_discipline.md     ← NOVO (FACT/INFERENCE/ASSUMPTION/UNKNOWN)
│   ├── change_discipline.md       ← NOVO (kada overwrite / append / archive)
│   ├── conflict_resolution.md     ← NOVO (log konflikata → 13_Decisions/system/)
│   └── lesson_lifecycle.md        ← NOVO (kreiranje / test / retest / arhive)
│
├── 05_KPI/                        ← merenja
│   └── _README.md
│
├── 06_Strategy/                   ← dugoročni planovi (studenta i Tehnocentra)
│   └── _README.md
│
├── 07_Marketing/                  ← kampanje
│   └── _README.md
│
├── 08_Finance/                    ← finansijski modeli
│   ├── _README.md
│   └── Tehnocentar/               (ako je vlasnik odobrio realne brojeve)
│
├── 09_Company/                    ← case study podaci
│   ├── _README.md
│   └── Tehnocentar/
│       ├── overview.md
│       ├── products.md
│       ├── customers.md
│       ├── competitors.md
│       ├── financials.md
│       └── open_questions.md      ← rupe u znanju; AI ne izmišlja odgovore
│
├── 10_Daily/                      ← operativni state
│   ├── _README.md
│   ├── Learning_Progress.md       ← instance (bez placeholders)
│   └── Session_Log/               ← YYYY-MM-DD-summary.md
│
├── 11_Projects/                   ← realni radni projekti
│   └── _README.md
│
├── 12_Meetings/                   ← belezenje sastanaka
│   └── _README.md
│
├── 13_Decisions/                  ← ADR-stil odluke
│   ├── _README.md
│   ├── business/                  (Tehnocentar odluke)
│   └── system/                    (odluke o CMO OS-u samom, uklj. audit reshaping)
│
└── 99_Templates/                  ← SVI template-i sa placeholders
    ├── _README.md
    ├── Business_Case_Template.md              (postoji, keep)
    ├── Learning_Progress_TEMPLATE.md          ← RENAMED (bez state-a)
    ├── Lesson_Template.md                     (postoji, keep + sync sa CLAUDE)
    ├── Meeting_Template.md                    ← NAPISATI ili obrisati
    ├── Product_Analysis_Template.md           ← NAPISATI ili obrisati
    ├── Project_Template.md                    ← NAPISATI ili obrisati
    ├── Company_Snapshot_Template.md           ← NOVO
    ├── Customer_Segment_Template.md           ← NOVO
    ├── Competitor_Card_Template.md            ← NOVO
    ├── Decision_Template.md                   ← NOVO (ADR-style)
    └── SOP_Template.md                        ← NOVO
```

### 3.1 Bootstrap SOP-a

Novi fajl `04_SOP/bootstrap.md` mora precizirati redosled kreiranja gornje strukture, `_README.md` sadržaj za svaki folder, i test da li je sve na mestu (checklist).

### 3.2 Per-folder `_README.md` — minimum sadržaj

Svaki `_README.md` mora imati:

1. **Purpose** — jednom rečenicom, šta ide u ovaj folder.
2. **Ne-ide-ovde** — šta izgleda slično, a pripada drugom folderu.
3. **Naming convention** — obrazac imena fajlova.
4. **Life cycle** — kada se fajl smatra archived, kada obrisan.
5. **Authority** — koji `04_SOP/` fajl vlada ponašanjem ovog foldera.
6. **Cross-links** — pointer-i na povezane foldere.

---

## 4. Naming konvencije

- **Folder-i:** `NN_Name` (dva cifre + PascalCase ili snake_case, ne mešati).
- **Trajno znanje:** `01_Knowledge/<Category>/<Concept>.md` — Concept u PascalCase, npr. `Margin.md`, `AttachRate.md`.
- **Lekcije:** `02_Lessons/Level_N/Lesson_NNN_<slug>.md` — NNN je zero-padded 3-digit; slug je snake_case.
- **Session logs:** `10_Daily/Session_Log/YYYY-MM-DD_<slug>.md`.
- **Odluke (ADR):** `13_Decisions/<business|system>/YYYY-MM-DD_ADR_<NNN>_<slug>.md`.
- **Projekti:** `11_Projects/<slug>/README.md` (svaki projekat je subfolder).
- **Meetings:** `12_Meetings/YYYY-MM-DD_<slug>.md`.
- **Template-i:** `99_Templates/<Subject>_Template.md`.

Naming je auto-provera: fajl koji ne prati obrazac se odbija u SOP proveri.

---

## 5. Document lifecycle

Svaki fajl ima jedan od stanja u YAML front-matter-u:

```yaml
status: draft | published | deprecated | archived
version: 1.0
last_updated: 2026-08-17
authority: 04_SOP/lesson_lifecycle.md   # koji SOP ga reguliše
```

Pravila:

- `draft` — može se overwrite-ovati bez CHANGELOG entry.
- `published` — svaka izmena MORA imati CHANGELOG entry i version bump.
- `deprecated` — fajl još fizički postoji ali nije autoritet; mora imati header koji upućuje na naslednika.
- `archived` — premešten u `_archive/` sub-folder; ne uklonjen (audit trag).

---

## 6. Version scheme

Sistem koristi jednu semantičku verziju: `CMO-OS X.Y.Z`.

- **X** — bump kada se menja piramida autoriteta ili top-level struktura direktorijuma.
- **Y** — bump kada se menja CLAUDE.md, ROADMAP.md, ili neki SOP.
- **Z** — bump kada se dodaju/menjaju template-i ili se popravlja typo/copy.

Individualni fajlovi NE nose svoje verzije; nose verziju sistema u trenutku poslednje izmene (u front-matter-u). CHANGELOG.md je monotoni log:

```
## CMO-OS 1.1.0 — 2026-08-17
### Changed
- CLAUDE.md rewritten per AUDIT_REPORT.md
### Added
- 04_SOP/evidence_discipline.md
### Removed
- 00_CLAUDE_TRANSFER/CLAUDE_DESKTOP_MASTER_INSTRUCTION.md (integrated into CLAUDE.md)
```

Trenutno stanje (pre migracije) preporučujem taggovati kao `CMO-OS 0.9.0-pre`.

---

## 7. Discoverability za AI-a

### 7.1 Root `INDEX.md`

Root INDEX je mašinski čitljiv katalog:

```markdown
# CMO OS INDEX

| Path | Purpose | Authority | Status |
|---|---|---|---|
| `/CLAUDE.md` | AI operating instructions | AUTHORITY.md | published |
| `/ROADMAP.md` | Learning path | CLAUDE.md § "Learning" | published |
| `/09_Company/Tehnocentar/` | Case study data | 04_SOP/evidence_discipline.md | draft |
...
```

AI čita `INDEX.md` posle `AUTHORITY.md` i pre bilo koje akcije. INDEX se auto-generiše iz per-folder `_README.md` sadržaja (SOP: `04_SOP/index_regen.md`).

### 7.2 Cross-links

Svaki reference između fajlova ide kao relativni Markdown link: `[Margin](../01_Knowledge/Finance/Margin.md)`. Nema slobodnog teksta "vidi Knowledge folder" — mora biti klikabilan.

### 7.3 YAML front-matter

Svaki non-trivialni fajl ima front-matter (v. § 5). To omogućava tool-ing da automatski proverava konzistenciju.

---

## 8. Learning-system minimum

Da bi Level 0 uopšte startovao, sistem mora imati:

- `02_Lessons/Level_0/Lesson_001_Sta_je_biznis.md`
- `02_Lessons/Level_0/Lesson_002_Kako_kompanija_zaradjuje.md`
- `02_Lessons/Level_0/Lesson_003_Prihod_profit_marza.md`
- `04_SOP/lesson_lifecycle.md` (pass/fail, retest, arhive)
- `10_Daily/Learning_Progress.md` — instance sa YAML tabelom completed lessons

Grading:
- Testovi → /100, pass ≥ 80.
- Kompetencija → 0/5, sinhronizovana sa test rezultatima po pravilu iz `04_SOP/lesson_lifecycle.md`.

Prerequisite check: Lesson_XXX front-matter deklariše `prerequisites: [Lesson_001, Lesson_002]`; AI pre kreiranja / vođenja lekcije poredi sa `10_Daily/Learning_Progress.md` completed listom.

---

## 9. Tehnocentar dosije — minimum bootstrap

Pre nego što se ijedna Business Simulation lekcija pokrene, mora postojati:

- `09_Company/Tehnocentar/overview.md` — legalno lice (ako je javno), delatnost, gruba veličina.
- `09_Company/Tehnocentar/open_questions.md` — sva UNKNOWN polja (revenue, marže po kategoriji, top SKU-i, glavni konkurenti). AI koristi ovu listu da vodi intervju sa vlasnikom.
- `09_Company/Tehnocentar/financials.md` — samo FACT-ovi koje je vlasnik potvrdio; ostalo se ne piše.
- Svaki numerički podatak dobija tag `[FACT|source|date]`, `[INFERENCE|from]`, `[ASSUMPTION]`, ili `[UNKNOWN]`. AI ne sme praviti agregate iz miksa.

### 9.1 Retail — PDV moraprovlada

`01_Knowledge/Finance/VAT_Serbia.md` — jednostavno objašnjenje net vs. bruto cene, opšta stopa 20%, snižena 10%, uticaj na maržu. Sve Level 1–3 lekcije koje računaju maržu MORAJU koristiti net cene ili eksplicitno naznačiti "sa PDV-om" — inače su brojevi pogrešni za srpski kontekst.

---

## 10. Meta-odluke se beleže

`13_Decisions/system/` je gde ide ADR svaki put kad se razrešava konflikt. Primer:

```
13_Decisions/system/2026-08-17_ADR_001_startup_authority.md

Context: CLAUDE.md § 4 i CLAUDE_DESKTOP_MASTER_INSTRUCTION § "Startup command" nisu se slagali.
Decision: CLAUDE.md je jedini autoritet za startup; drugi fajl je deprecated.
Consequences: sve buduće startup procedure čitaju samo CLAUDE.md.
```

Ovo je kako AI održava intelektualni poštenje kroz vreme.

---

## 11. Šta ova arhitektura namerno NIJE

- **Nije git.** Preporuka je da se preseli na git, ali ova arhitektura radi i na fajl-sistemu.
- **Nije baza podataka.** Sve je Markdown. Front-matter + tabele u INDEX-u su dovoljno strukture.
- **Nije LMS.** Learning sistem je light — nema quiz automatike; AI je engine.
- **Nije ERP za Tehnocentar.** `08_Finance/Tehnocentar/` je za modele i simulacije; realni ERP je izvan scope-a.

---

## 12. Migration plan

Detaljan redosled u `AUDIT_REPORT.md § 5`. Rezime:

1. Approve ovu arhitekturu (vlasnik).
2. Odgovori na "Otvorena pitanja" iz AUDIT_REPORT § 6.
3. Bootstrap struktura (safe auto).
4. Cepanje Learning_Progress na template + instance (human review).
5. CLAUDE.md rewrite (human review).
6. Tehnocentar dosije (human input).
7. Seed 3 lekcije za Level 0 (human review).
8. Deprecate 00_CLAUDE_TRANSFER; integrisati u CLAUDE.md.
9. Prvi CHANGELOG entry, tag `CMO-OS 1.0.0`.

---

# END OF RECOMMENDED ARCHITECTURE
