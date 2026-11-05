# ADR 010 — Curriculum Expansion and Level Gates

Date: `2026-11-04`
Status: `accepted`

## Context

[FACT] Audit `90_AI/audits/2026-11-04_moriarty_curriculum_audit/` (verdict `REVISE`) je pokazao: kratku teoriju u lekcijama, nenapisane gate scenarije nivoa iako ih ROADMAP traži, nedostatak zasebnih lekcija za nabavku, postprodaju, odlučivanje pod neizvesnošću, organizacionu strukturu i etiku, i zastarelo upućivanje na „automatski test u aplikaciji“ u svih 49 lekcija.

[FACT] Korisnik je odobrio predloge P1–P5 („odobravam sve“), uz izuzetak: slike stranica knjiga u `tmp/pdfs/` se ne brišu, jer služe kao izvorni korpus za mentora.

[FACT] U trenutku promene `10_Daily/Learning_Progress.md` nema nijednu završenu lekciju, pa nijedna izmena redosleda ili preduslova ne menja potvrđen napredak.

## Decision

- P1: Lesson Template dobija minimum dubine teorije; Lesson 002, 003 i 101–105 dobijaju proširenu teoriju (originalni tekst sačuvan, dodate podsekcije). Ostale lekcije se proširuju redom napredovanja.
- P2: Deset gate scenarija `02_Lessons/Level_N/Gate_Level_N.md` (Level 0–9); Level 10 gate ostaje Lesson 1005.
- P3: Nove lekcije 606, 607, 805, 905 i 1006 (katalog 49 → 54). Lesson 1005 dobija preduslov 1006. Postojeći ID-jevi se ne menjaju. Knowledge Graph se ne dopunjuje unapred: njegovo pravilo 1 dodaje čvor tek kada se koncept stvarno obradi.
- P4: Mehanička ispravka teksta o proceni u svih 49 postojećih lekcija; Lesson 002 vežba dobija `[FIXTURE]` alternativu.
- P5: Opcija A — redosled Level 1–2 pre Level 3 ostaje; ROADMAP obavezuje mentora da finansijske pojmove vezuje za odluke o kupcu i ponudi.
- `tmp/pdfs/` ostaje u repozitorijumu kao korpus; rizik autorskih prava i veličine repozitorijuma prihvata vlasnik.

## Consequences

Curriculum version je `2026.11-expanded`. Documentary checker za ovu promenu nalazi se u `90_AI/audits/2026-11-04_curriculum_expansion/` i ne broji gate fajlove kao lekcije. Learning Progress, knjige i istorijski auditi nisu menjani. `10_Daily/Learning_Progress.md` i dalje navodi stari opis kurikuluma (`2026.08-expanded; 49 lekcija`); to je administrativni opis u ličnom fajlu i ažurira se pri sledećem stvarnom upisu, bez izmene napretka.
