# CMO OS Authority Matrix

System version: `CMO-OS 2.0.0`  
Status: `active`  
Last verified: `2026-08-17`

## Pravilo autoriteta

Autoritet je vezan za domen, ne za linearnu hijerarhiju fajlova. Dokument je autoritativan samo za vrstu tvrdnje koja mu pripada. Kada se dva dokumenta ne slažu, koristi se canonical domen iz matrice; konflikt se beleži u `13_Decisions/system/` i rešava po `04_SOP/conflict_resolution.md`.

| Vrsta informacije | Canonical lokacija | Napomena |
|---|---|---|
| System version i promene | `CHANGELOG.md` | Verzija nije isto što i `last_verified`. |
| Authority i routing | `AUTHORITY.md` | Ovaj dokument. |
| AI operating behavior | `CLAUDE.md`, `90_AI/skills/` | `cmo-core` operiše; `cmo-auditor` proverava. |
| Navigacija | `INDEX.md` | Ne definiše business truth. |
| Trajni koncepti | `01_Knowledge/` | Materijalizuje se tek sa realnim sadržajem. |
| Lekcije | `02_Lessons/` | Struktura iz Lesson Template-a. |
| Ponovljivi playbook-i | `03_Playbooks/` | Marketing/finance discipline ostaju poddomeni. |
| Standardne procedure | `04_SOP/` | Procedure, ne poslovne činjenice. |
| KPI definicije | `05_KPI/` | Formula, grain, owner, izvor. |
| Strategija | `06_Strategy/` | Odobreni strateški pravac. |
| Customer evidence | `07_Customer/` | VOC, segmenti i potvrđene potrebe. |
| Competition evidence | `08_Competition/` | Izvor i datum obavezni. |
| Company facts | `09_Company/<company>/` | Samo potvrđeni podaci ili eksplicitni UNKNOWN. |
| Lični learning state | `10_Daily/Learning_Progress.md` | Aleksandarov state; nikad u template/CLAUDE. |
| Research evidence | `11_Research/` | Samo stvarno istraživački sadržaj. |
| Sastanci | `12_Meetings/` | Zapis i action items. |
| Poslovne odluke | `13_Decisions/business/` | ADR/decision record. |
| Sistemske odluke | `13_Decisions/system/` | Promene arhitekture i authority-ja. |
| Eksperimenti | `14_Experiments/` | Hipoteza, test i rezultat; nije zamena za Projects. |
| Analitički snapshot-i | `15_Analytics/` | Izvor, period, query/metod i quality status. |
| Template-i | `99_Templates/` | Struktura; nikad live state. |
| Istorijski materijal | `_archive/` | Nije aktivni autoritet. |

## Projects pravilo

Ne postoji automatska zamena za v1 `11_Projects/`. Novi sadržaj se klasifikuje po prirodi: research, decision, experiment, meeting, strategy ili drugi canonical domen. `11_Research/` se koristi samo za stvarno istraživanje.

## Evidence oznake

Materijalne tvrdnje koriste `[FACT]`, `[INFERENCE]`, `[ASSUMPTION]` ili `[UNKNOWN]`. Numerički FACT mora imati izvor, period i jedinicu.
