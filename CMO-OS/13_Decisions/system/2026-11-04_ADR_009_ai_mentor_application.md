# ADR 009 — AI Mentor Application

Date: `2026-11-04`
Status: `accepted; app assessment approved as evidence by the user on 2026-11-04`

## Context

[FACT] Korisnik je zatražio interaktivnog AI mentora Williama Jamesa Moriartyja nad postojećim CMO OS kurikulumom: teorija pre vežbi, slobodan tekst, višekružni razgovor, povratna informacija koja analizira stvarni odgovor, server-side AI sa zamenljivim providerom, trajne sesije i zaštita kanonskog napretka. Baseline commit: `1545a64ed34ab37d437318c022149ea6210071fc`.

[FACT] ADR 008 i `04_SOP/model_and_visual_workflow.md` zahtevaju konkretan source projekat i sopstvenu validaciju pre frontend nadogradnje. Do ove odluke repo nije imao aplikacioni kod.

[FACT] `10_Daily/Learning_Progress.md` beleži: „Audit simulacije i lokalni automatski rezultati nisu studentski evidence.“ Lesson lifecycle zahteva novu, neviđenu procenu i ocenu računa, obrazloženja i odluke.

## Decision

- Aplikacioni kod živi u `apps/mentor/` (Next.js, TypeScript, Zod, Node `node:sqlite`). To je izvršni sloj, ne novi source of truth; nije novi skill niti paralelni profil.
- Teorija, vođeni primer i izvori čitaju se read-only iz canonical lekcije i Moriarty reference. Kanonsko rešenje praktične vežbe se ne šalje modelu ni studentu pre pokušaja.
- AI provider je zamenljiv (`anthropic` ili `mock`), model i limiti su konfigurabilni kroz promenljive okruženja; ključ se čita samo na serveru.
- Napredovanje je server-side state machine: Theory → Questions → Guided → Practice → Assessment → Feedback → Confirmed. Klijent i AI ne mogu menjati fazu, prerequisite niti prolaz.
- Procena: numeričko zaključivanje se ocenjuje isključivo deterministički; koncept, primena i odluka koriste AI rubriku ograničenu determinističkim proverama (dužina, ključne veze, ispravna ponuda, etika). Prolaz: ≥80/100, ≥15/25 po oblasti, bez neispravljenih ključnih grešaka, uz samostalnu primenu, obrazloženu odluku i ispunjene preduslove. Ključna greška zahteva remedijaciju i novu procenu sa novim `[FIXTURE]` brojevima.
- Operativna baza (`apps/mentor/data/mentor.db`, van gita) je pomoćna evidencija sesija, odgovora, povratnih informacija, pokušaja, pogrešnih predstava i rasporeda ponavljanja.
- Kanonski upis u `10_Daily/Learning_Progress.md` dozvoljen je samo za položen pokušaj, posle izričite potvrde korisnika („POTVRĐUJEM“), kada je `MENTOR_CANONICAL_WRITES=true`; pre upisa se pravi byte-identičan backup u `_archive/learning_progress_backups/`, sadržaj se validira, a upis je atomaran i odbija se ako se fajl promenio u međuvremenu.
- Ovakav app assessment je mentorski evidence (AI mentor + determinističke provere + sačuvani odgovori), a ne `[LOCAL]` samoprovera. Podrazumevano je isključen dok korisnik ne odobri prvi stvarni upis.

## Consequences

Curriculum, knjige, istorijski auditi i postojeći napredak ostaju nepromenjeni. Mock provider omogućava automatske testove bez API troška i nikada se ne predstavlja kao AI. Interaktivna procena postoji samo za Lesson 001; ostale lekcije su vidljive i zaključavaju se prema canonical napretku, ali nemaju interaktivni mentor dok se ne implementiraju i provere. Aplikacija je lokalna i jednokorisnička; javno objavljivanje zahteva autentifikaciju i zasebnu odluku.

## Resolution — 2026-11-04

[FACT] Korisnik je odgovorio „odobravam sve“ na pitanje da li app assessment pod navedenim uslovima sme biti dokaz za `COMPLETED`. Posledica: `.env.example` sada predlaže `MENTOR_CANONICAL_WRITES=true`. Kod i dalje podrazumeva `false` kada promenljiva nije podešena, tako da upis ostaje svesna konfiguracija. Svi ostali uslovi (položen pokušaj, „POTVRĐUJEM“, backup, validacija, atomaran upis) ostaju obavezni.
