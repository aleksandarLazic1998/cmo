# ADR 006 — Full book corpus acquisition

date: `2026-08-23`  
status: `accepted`  
system_version: `CMO-OS 2.0.0`

## Context

`Book_Source_Map.md` je prethodno zahtevao ciljano čitanje poglavlja tek kada su potrebna aktivnoj lekciji. Korisnik je izričito zahtevao da Morijarti obradi sve validne knjige u celini i izgradi potpuni knjiški knowledge base, umesto da se oslanja samo na prioritete i izdvojene delove.

Biblioteka na dan 2026-08-23 sadrži 20 PDF fajlova. Page-by-page accessibility scan potvrđuje 18 validnih corpus izvora sa 4.558 stranica i dve neupotrebljive jednostrane kopije za koje postoje potpuna izdanja.

## Decision

- Svih 18 validnih corpus izvora je `MANDATORY` za full-book acquisition.
- Canonical reading state postoji u `11_Research/book_acquisition/Book_Reading_Ledger.md`.
- Completion gate i workflow definiše `04_SOP/full_book_acquisition.md`.
- Batch i redosled služe samo kontroli kvaliteta i context granicama; ne mogu izbaciti knjigu iz scope-a.
- `COMPLETED` zahteva dokaz da su sve dostupne stranice obrađene, vizuelne stranice proverene, whole-book note napravljen i audit gate zatvoren.
- Originalni PDF-ovi ostaju izvan projekta. CMO OS čuva originalnu sintezu i coverage/provenance evidence, ne puni tekst knjige.
- Knjige ostaju sekundarni izvori. Full reading ih ne pretvara u canonical company truth, dokaz korisnikove kompetencije ili autoritet za važeće propise.
- Cross-book znanje se materijalizuje u `11_Research/Book_Knowledge_Base.md` tek iz knjiga koje su prošle completion gate.

## Consequences

- Prethodno pravilo „čitaj samo relevantna poglavlja“ prestaje da važi za acquisition scope.
- Targeted source notes i dalje mogu služiti lekciji, ali ne predstavljaju full-book completion.
- Reading ledger postaje dokaz šta je Morijarti zaista obradio i sprečava lažnu tvrdnju da „poznaje celu biblioteku“.
- `The 48 Laws of Power` ulazi u corpus kao kritički izvor za power dynamics i odbranu od manipulacije, ne kao etički ili istorijski autoritet.
- Dve jednostrane kopije dobijaju `INVALID_COPY` i ne računaju se kao zasebne obavezne knjige.
- Full-book acquisition ne menja `10_Daily/Learning_Progress.md` i ne predstavlja Aleksandarov mastery evidence.

## Validation

- Ledger navodi svih 20 dostavljenih fajlova i jasno razdvaja 18 validnih od dve invalidne kopije.
- Nijedna knjiga nije retroaktivno označena `COMPLETED`.
- `Book_Source_Map.md`, `AGENTS.md`, `CLAUDE.md`, `cmo-core` i `INDEX.md` koriste isti completion contract.
- `cmo-auditor` proverava svaki `COMPLETED` status i finalnu cross-book sintezu.
