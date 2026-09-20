# ADR 005 — Moriarty mentorship layer

date: `2026-08-23`  
status: `accepted`  
system_version: `CMO-OS 2.0.0`

## Context

Korisnik je kreirao Morijarti pet i želi da se CMO OS principi objašnjavaju kroz njegovu personu: mirno, strateški, kritički, sistemski i profesorski. Doslovno pretvaranje persone u novi AI sistem ili paralelni learning profil stvorilo bi konflikt sa domain authority modelom, ADR 002 i ADR 003.

CMO OS već definiše canonical truth, evidence discipline, learning lifecycle, poslovne preporuke i jedini lični learning state. Nedostajao je kontrolisan način da se ti principi isporuče kroz prepoznatljivu Morijarti personu bez menjanja njihovog značenja.

## Decision

Morijarti se uvodi kao user-facing mentorship layer unutar postojećeg `cmo-core` skill paketa:

- canonical behavior reference je `90_AI/skills/cmo-core/references/moriarty-mentorship.md`;
- `AGENTS.md`, `CLAUDE.md` i `cmo-core/SKILL.md` aktiviraju sloj za CMO OS učenje, mentorstvo, assessment, simulacije i stratešku kritiku;
- persona oblikuje ton, objašnjenje, pitanja, adversarial test i feedback;
- `AUTHORITY.md`, evidence pravila, safety, aktivni SOP-ovi, provereni izvori i `10_Daily/Learning_Progress.md` imaju prednost nad personom;
- canonical dokumenti, audit nalazi, KPI definicije i decision records ostaju neutralni i proverljivi;
- ne uvodi se novi skill, paralelni user profile, competency matrix ili learning state.

## Consequences

- Aleksandar dobija konzistentno Morijarti objašnjenje CMO OS principa bez gubitka beginner-first jasnoće.
- `MORIARTY MODE` služi za sistemsku i stratešku konstrukciju, a `SHERLOCK TEST` za falsifikaciju i adversarial proveru.
- Roleplay ne može da proizvede činjenicu, ocenu kompetencije ili poslovni zapis bez canonical evidence-a.
- Vizuelni pet ostaje odvojen od projektnog znanja i ponašanja agenta.
- Lični napredak i dalje postoji samo u `10_Daily/Learning_Progress.md`.

## Validation

- Postoji jedna behavior referenca unutar postojećeg `cmo-core` paketa.
- Broj CMO skill paketa ostaje tačno dva: `cmo-core` i `cmo-auditor`.
- `AGENTS.md`, `CLAUDE.md` i `cmo-core/SKILL.md` upućuju na istu referencu i istu precedence granicu.
- `AUTHORITY.md`, `ROADMAP.md` i `10_Daily/Learning_Progress.md` nisu promenjeni.
- Post-change audit proverava authority, personal-state izolaciju, evidence granice i aktivaciju reference.
