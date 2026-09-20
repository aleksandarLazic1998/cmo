# ADR 004 — Odvajanje izrađenog sadržaja od ličnog napretka

date: `2026-08-22`  
status: `accepted`  
system_version: `CMO-OS 2.0.0`

## Context

Dosadašnji proces je dozvoljavao izradu pune lekcije tek kada postane sledeća aktivna lekcija. To je štitilo od izmišljanja ličnog napretka, ali je nepotrebno vezivalo postojanje nastavnog materijala za stanje jednog studenta. Korisnik je zatražio da svih 48 preostalih lekcija bude dostupno u aplikaciji, dok canonical `Learning_Progress.md` mora ostati jedini autoritet za stvarno položen sadržaj.

## Decision

Uvode se odvojeni statusi:

1. `AUTHORED` — lekcija ima kompletan, auditiran sadržaj i može da se uči.
2. `ACTIVE` — lekcija je trenutni canonical fokus u `10_Daily/Learning_Progress.md`.
3. `LOCAL PASS` — automatski test je položen samo na jednom uređaju; ovo nije canonical evidence.
4. `COMPLETED` — mentor je potvrdio najmanje 80/100, praktičnu primenu i obrazloženu odluku, a dokaz je upisan u `10_Daily/Learning_Progress.md`.

Lekcije smeju da se izrade i audituju unapred. Njihovo postojanje ne otvara level gate, ne menja lični state i ne predstavlja dokaz kompetencije. Aplikacija može omogućiti slobodno čitanje svih izrađenih lekcija, dok redosled i preporučeni sledeći korak ostaju kanonski.

## Consequences

- Svih 49 lekcija može imati izrađen sadržaj bez izmišljanja 49 završenih rezultata.
- Lekcija 001 ostaje jedina `ACTIVE` lekcija dok se canonical evidence ne potvrdi.
- Lokalni rezultati aplikacije ostaju jasno označeni `[LOCAL]` i ne ažuriraju `Learning_Progress.md`.
- Level gate i canonical `COMPLETED` i dalje zahtevaju mentorsku proveru primene i odluke.

## Validation

- `ROADMAP.md`, lesson lifecycle, Lesson Template i Lesson Catalog koriste iste statuse.
- `10_Daily/Learning_Progress.md` nije promenjen tokom masovne izrade sadržaja.
- Aplikacija razdvaja `AUTHORED`, `ACTIVE` i `[LOCAL] PASS`.
