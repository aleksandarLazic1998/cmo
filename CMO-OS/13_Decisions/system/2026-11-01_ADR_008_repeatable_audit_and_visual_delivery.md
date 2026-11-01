# ADR 008 — Repeatable Audit and Visual Delivery

Date: `2026-11-01`
Status: `accepted for documentary workflow`

## Context

[FACT] Korisnik je tražio ponavljanje audita i potrebne izmene, zatim nadogradnju CMO OS-a u Codex-u sa više vizuala i upotrebom novih modela. Baseline commit: `823a08ea8abfa351c3ea9092b2f2753f863fb76b`.

[FACT] ROADMAP je čuvao fiksni lični fokus uprkos pravilu o jedinom Learning Progress-u. Lesson Template je nudio lične statuse u lesson metapodacima. Istorijski validator iz 2026-10-04 proverava konkretan inicijalni state i stare BK-018 extraction vrednosti; noviji full-corpus audit zasebno beleži zatvaranje F22.

## Decision

- ROADMAP određuje program; trenutnu lekciju i fazu uvek određuje Learning Progress.
- Lesson Template čuva status sadržaja, a lični completion ostaje samo u Learning Progress-u.
- Novi read-only documentary checker podržava budući state bez obaveznog resetovanja. Istorijski auditi i validator ostaju neizmenjeni.
- `04_SOP/model_and_visual_workflow.md` uređuje vizuelnu nastavu, izbor dostupnog modela i granice platforme; aktiviran je kroz AGENTS i INDEX.
- Vizuelni pilot i frontend nadogradnja zahtevaju konkretan source i sopstvenu validaciju. Ovom odlukom nije implementirana aplikacija niti promenjen aktivni model.

## Consequences

Canonical curriculum, svi originalni izvori, istorija i Learning Progress ostaju očuvani. Nema novog skill-a, paralelnog profila, studentske procene, API potrošnje ili objave aplikacije. Ponovljivi audit razlikuje dokumentarnu ispravnost od porekla knjiga, kvaliteta nastave i stvarnog runtime-a.
