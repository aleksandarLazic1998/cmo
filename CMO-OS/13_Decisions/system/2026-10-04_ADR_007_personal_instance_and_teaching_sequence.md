# ADR 007 — Personal instance and teaching sequence

date: `2026-10-04`  
status: `accepted — explicit user request`  
system_version: `CMO-OS 2.0.0`

## Context

Korisnik je dostavio zahtev za novu ličnu instancu, od početka, bez prenetih ocena, exposure-a, osobina i biografskih pretpostavki. Zahtev sadrži eksplicitno „Moje ime je Aleksandar“ i jednu protivrečnu rečenicu „Nisam Aleksandar“. Za ime je primenjena eksplicitna izjava; raniji Aleksandarov zapis ostaje isključivo istorijski. Naknadna instrukcija u istom zahtevu traži audit bez početka nastave i ima prednost nad ranijim zahtevom da se odmah pokrene Lesson 001.

Korisnik je izričito odobrio opravdane lokalne ispravke i arhiviranje pre inicijalizacije. Postojeći ciklusi mešali su primer, praktični zahtev i proveru, a sistemska dokumentacija je imala kraće, nepotpune verzije passing gate-a. Istorijski Books lokator nije dostupan u ovom checkout-u.

## Decision

- Pre svih izmena sačuvani su originalni dokumenti i hash manifest svih 4.734 početna fajla u `_archive/local_instance_2026-10-04/`.
- `10_Daily/Learning_Progress.md` ostaje jedini aktivni lični state. Student je Aleksandar, Level 0, Lesson 001 administrativno `ACTIVE`, faza `Not Started`, bez ocena i completed lekcija. Deset domena je `[UNKNOWN]`, osam početnih pojmova nije uvedeno ni procenjeno.
- Administrativni izbor početnog fokusa, uz eksplicitni zahtev i backup, nije learning evidence. `COMPLETED` i dalje zahteva stvarnu procenu. Nema drugog profila ni novog skill-a.
- Usklađen tok: kompletna teorija → pitanja i pojašnjenja → vođeni primeri → samostalne vežbe → test → feedback i ocena → potvrđen upis → sledeća lekcija. Objašnjen primer u teoriji nije zadatak učeniku.
- Pri stvarnom početku praktičnog dela koristi se: „Predavanje je završeno — počinje praktični deo.“ Novi pojmovi se objašnjavaju na srpskom uz engleski naziv i primer.
- Gate je najmanje 80/100, najmanje 15/25 po oblasti, samostalna primena, obrazložena odluka i ispravljene ključne greške. Prikazano rešenje ne dokazuje samostalnu primenu; završna procena koristi novi fixture bez ključa. Automatski rezultat ostaje `[LOCAL]`.
- Aktivni lokalni Books binding uveden je u source map i ledger; istorijski locatori, PDF-ovi, coverage i raniji auditi se čuvaju. Nasleđeni `COMPLETED` nije nova tvrdnja o čitanju u ovoj sesiji.
- Ispravljene su dokazive računske, pojmovne i protokolarne greške. Curriculum IDs, redosled, katalog i Knowledge Graph ostaju isti.

## Consequences and validation

Arhiva je istorijska i ne učestvuje u trenutnom ocenjivanju. Morijarti ostaje isti komunikacioni sloj nad postojećim autoritetom. Audit simulacije nisu studentski rezultati. Izveštaj i izvršene provere su u [local instance audit](../../90_AI/audits/2026-10-04_local_instance/AUDIT_REPORT.md).

Otvoren BK-018 nalaz nije prepisan niti proglašen uspešnim: PDF identitet je potvrđen, ali istorijski extraction range hash-evi nisu reproducirani. Nastava nije započeta, aplikacija nije objavljena.
