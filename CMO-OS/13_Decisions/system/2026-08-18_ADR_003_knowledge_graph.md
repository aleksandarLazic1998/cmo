# ADR 003 — Knowledge Graph and Personal Mastery Overlay

date: `2026-08-18`  
status: `accepted`  
system_version: `CMO-OS 2.0.0`

## Context

CMO OS treba da pokaže kako su poslovni koncepti povezani i istovremeno prati šta Aleksandru ide bolje ili slabije. Mešanje opšteg znanja i lične procene u istom dokumentu stvorilo bi paralelni learning state i konflikt sa `AUTHORITY.md`.

`10_Daily/Competency_Matrix.md` je sadržao lični competency evidence izvan jedinog canonical learning-state dokumenta.

## Decision

Uvesti dva jasno odvojena sloja:

1. `01_Knowledge/Knowledge_Graph.md` — koncepti, Concept IDs, veze, prerequisites i canonical definicije bez ličnih ocena.
2. `10_Daily/Learning_Progress.md` — jedini personal overlay: ratings, assessment evidence, knowledge trace, potvrđene snage/slabosti i sledeći fokus.

Stari `Competency_Matrix.md` se arhivira. Rating ostaje `[UNKNOWN]` dok ne postoji test ili praktična primena. `introduced` ne znači `mastered`.

## Consequences

- Posle svake završene lekcije ažuriraju se i Knowledge Graph i Learning Progress.
- Nema dupliranja ličnog state-a.
- Knowledge baza može da raste nezavisno od jednog studenta.
- Snaga ili slabost se ne potvrđuje na osnovu utiska, već ponovljenog evidence-a.
- Concept ID omogućava vezu lekcije, definicije, testa i narednog prerequisite-a.

## Validation

- Active Competency Matrix removed and historical content archived.
- Knowledge Graph contains eight unique initial Concept IDs.
- Learning Progress references the same eight IDs with no fabricated ratings.
- All ten domain ratings remain `[UNKNOWN]` before the first completed assessment.

