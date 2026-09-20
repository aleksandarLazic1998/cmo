# Changelog

## Full curriculum platform recheck — 2026-08-30

- Usklađen lesson audit sa aktuelnim generatorom: 48 authored lessons, 12 pitanja po lekciji i 576 pitanja ukupno.
- Lokalni curriculum audit, lint i produkcioni build prolaze; dodat je recheck audit sa verdict-om `APPROVE`.
- Lesson 001 canonical sadržaj usklađen je sa evidence contract-om i razdvajanjem toka vrednosti, robe i rezultata.

## Moriarty mentorship recheck — 2026-08-26

- Zastareli behavior-test nalaz za `[FIXTURE]` označavanje zatvoren je; recheck sada beleži `6 PASS`.
- Dodat post-change recheck audit sa verdict-om `APPROVE`; canonical learning state i Moriarty behavior reference nisu menjani.

## Full book corpus acquisition — 2026-08-23

- Prihvaćen ADR 006: svih 18 validnih PDF izvora je `MANDATORY` za full-book acquisition; batch određuje samo redosled izvršenja.
- Dodat `Full Book Acquisition` SOP i canonical `Book Reading Ledger` sa svih 20 fajlova, SHA-256 identitetom, page count-om i početnim statusom.
- Prethodno targeted-only pravilo zamenjeno completion gate-om koji zahteva obradu svih dostupnih stranica, vizuelnu proveru, whole-book sintezu i audit evidence.
- `The 48 Laws of Power` dodata je u source map kao kritički izvor za power dynamics i odbranu od manipulacije, ne kao etički ili istorijski autoritet.
- Dve jednostrane kopije označene su `INVALID_COPY`; nijedna knjiga nije lažno označena `COMPLETED`.
- Full-book acquisition ne menja personal learning state i ne kopira puni tekst knjiga u CMO OS.

## Moriarty mentorship layer — 2026-08-23

- Prihvaćen ADR 005: Morijarti je user-facing mentorski sloj nad CMO OS-om, a ne novi izvor istine ili paralelni AI sistem.
- Dodat canonical behavior reference u postojeći `cmo-core` paket i aktiviran kroz `AGENTS.md`, `CLAUDE.md` i `cmo-core/SKILL.md`.
- Uvedeni `MORIARTY MODE` za stratešku konstrukciju i `SHERLOCK TEST` za adversarial proveru, uz očuvanje CMO OS evidence i authority pravila.
- Nisu uvedeni novi skill, paralelni user profile, competency matrix niti learning state; `10_Daily/Learning_Progress.md` ostaje jedini personal state.

## Full curriculum authoring — 2026-08-22

- Prihvaćen ADR 004: `AUTHORED` sadržaj je odvojen od `ACTIVE`, `[LOCAL] PASS` i canonical `COMPLETED` napretka.
- Lesson Template dobio obavezni evidence contract i stroži prolaz: najmanje 80/100, najmanje 15/25 po oblasti, primena, odluka i ispravljene ključne greške.
- Curriculum scope dopunjen supplier economics, lead time/MOQ/payment terms, rebate/co-funding i pipeline-to-revenue forecast zahtevima.
- `10_Daily/Learning_Progress.md` nije promenjen; Lekcija 001 ostaje canonical aktivni fokus.
- Izrađeno svih 48 preostalih canonical lesson fajlova i povezana javna web aplikacija sa ukupno 49 lekcija, 49 vizuelnih modela, 49 poslovnih primera, 49 vežbi i 196 pitanja.
- Uvedeno lokalno napredovanje kroz stvarni sledeći sadržaj, per-lesson rezultati i jasna `[LOCAL]`/canonical granica.
- Uveden offline app shell, web manifest i cache koji posle prvog otvaranja omogućavaju čitanje lekcija bez mreže.
- Sites production version 6 objavljena javno bez ChatGPT prijave.
- Full curriculum audit završen verdict-om `APPROVE`: 597 content provera, 49/49 production lesson rendera, 196/196 pitanja, negativni/pozitivni test, mobilni, offline, Excel/CSV, accessibility basics, 0 package vulnerabilities i čist finalni production error log.

## CMO learning application — 2026-08-22

- Deployed private Sites application `CMO Učionica` with six tested views: home, Lesson 001, 49-lesson curriculum navigator, Excel-compatible business laboratory, knowledge test and source library.
- Added responsive visual learning models, fixture-safe business simulations, formula-driven CSV export and local-only assessment progress.
- Applied Lesson 001 readiness corrections in the application layer without changing its canonical `REVISE` / `U toku` state.
- Upgraded the application dependency stack; type, lint, build, security, browser, mobile and production deployment checks passed.
- Post-deployment application audit recorded with verdict `APPROVE`; the remaining 48 lesson bodies remain `PLANNED` and blocked by missing canonical content.
- Sites access changed from owner-only to `public` on explicit user request; direct production loading without ChatGPT sign-in was verified.
- Test completion flow corrected: visible inline `LOCAL PASS`, persisted `100/100`, accessible result focus, next-step action and separate `CANONICAL: IN PROGRESS` status.
- Curriculum now highlights Lesson 002 as `NEXT · PLANNED` after a local pass without inventing or unlocking missing canonical content.
- `10_Daily/Learning_Progress.md` was not changed.

## Knowledge graph activation — 2026-08-18

- Dodat `01_Knowledge/Knowledge_Graph.md` sa domain mapom, početnim Lesson 001 grafom, osam Concept ID čvorova i registrom veza.
- Learning Progress proširen competency evidence tabelom, knowledge trace-om i odvojenim confirmed/potential strength i weakness slojevima.
- Rating ostaje `[UNKNOWN]` bez testa; `introduced` se ne tretira kao `mastered`.
- Aktivni `10_Daily/Competency_Matrix.md` arhiviran je radi uklanjanja paralelnog ličnog learning state-a.
- Lesson lifecycle i template sada zahtevaju ažuriranje Knowledge Graph-a nakon završene lekcije.
- Zabeležen ADR 003 za odvajanje canonical znanja od personal mastery overlay-a.
- Post-change audit završen sa verdict-om `APPROVE`.

## Curriculum expansion — 2026-08-18

- Roadmap proširen na 49 planiranih lekcija kroz 11 nivoa, bez promene live rezultata studenta.
- Dodat `02_Lessons/LESSON_CATALOG.md` sa redosledom, prerequisites i gate-ovima.
- Dodat `11_Research/Book_Source_Map.md`; knjige su sekundarni izvori, ne canonical curriculum niti autoritet za srpske propise.
- Lesson lifecycle i template dopunjeni beginner-first terminologijom, source provenance pravilom i `[FIXTURE]` zaštitom.
- Zabeležena odluka DEC-2026-008; Lesson 001 ostaje trenutna aktivna lekcija.
- Post-change audit završen sa verdict-om `APPROVE_WITH_TOOLING_NOTE`; sadržaj je PASS, a folder nije Git repozitorijum.

## Learning sequence decision — 2026-08-17

- Zabeležena odluka da se prvo završi kompletan learning roadmap.
- Do tada se koriste isključivo `[FIXTURE]` simulacije; stvarni Tehnocentar/PostHog podaci ostaju van learning analiza.

## 2.0.0 — Plugin architecture activation — 2026-08-17

- Desktop working folder usklađen sa odobrenim v2 authority modelom uz povratni ZIP snapshot.
- Sačuvani stvarni glossary, lesson, KPI dashboard, learning state i decision log.
- `cmo-core` i `cmo-auditor` pretvoreni u validne Codex skill pakete sa UI metadata i referencama.
- Dodati Plugin Registry, action classes i PostHog/Figma integration contracts.
- Dodata tri fixture-based eval scenarija; sva tri PASS.
- Stare paralelne AI instrukcije i audit dokumenti premešteni u arhivu.

## 2.0.0 — 2026-08-17

- Sačuvan netaknut v1 baseline i zabeležen SHA-256 originalnog ZIP-a.
- Uvedeni domain-based `AUTHORITY.md`, `INDEX.md` i novi generički `CLAUDE.md`.
- Learning template odvojen od Aleksandarovog live state-a.
- Dodati osnovni SOP-ovi, Tehnocentar UNKNOWN-first dosije i dva odobrena AI skill-a.
- V1 audit i transfer materijal arhivirani bez izmene.
- Uklonjeno automatsko mapiranje Projects sadržaja.
- Nisu kreirani per-folder README-i, globalni TODO niti dodatni skill placeholder-i.

## 1.0.0 — baseline tag

Retroaktivna oznaka za sadržaj iz `CMO-OS-Claude-Ready.zip`; originalna arhiva nije menjana.
# UI/UX recheck — 2026-08-30

- Lokalni browser QA završen sa verdict-om `APPROVE`.
- Provereni su navigacija, curriculum gating, Lesson 001, Excel laboratorija, kompletan test, biblioteka/pretraga, mobilni viewport 390×844 i browser konzola.
- Detaljni dokazni zapis: `90_AI/audits/2026-08-30_ui_ux_recheck/AUDIT_REPORT.md`.
# Voice lesson reader — 2026-08-30

- Dodat lokalni alat `Čitaj naglas` za Lekciju 001 i authored lekcije.
- Koristi browser Web Speech API sa `sr-RS` jezikom, Start/Stop kontrolom i jasnom porukom kada uređaj ne podržava glas.
- Sadržaj se ne šalje na server.
