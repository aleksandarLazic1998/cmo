# CMO OS

System version: `CMO-OS 2.0.0`  
Status: `active`

CMO OS je Markdown-based commercial operating system za učenje, proverljivo poslovno znanje, analizu i donošenje odluka. Sistem ne zamenjuje ERP, CRM, računovodstvo ili analitičku platformu; povezuje njihove potvrđene rezultate sa kontrolisanim knowledge i decision slojem.

## Cilj

Razviti sposobnost da korisnik razume kupca, ekonomiku poslovanja, operacije i strategiju; razdvoji podatak od pretpostavke; donese odluku; izmeri rezultat; i sačuva proverljivu lekciju.

## Osnovna pravila

- `AUTHORITY.md` određuje canonical domen prema vrsti tvrdnje.
- `[FACT]`, `[INFERENCE]`, `[ASSUMPTION]`, `[UNKNOWN]` i `[FIXTURE]` se ne mešaju.
- Company podaci se ne izmišljaju.
- Template nije live state; arhiva nije aktivni autoritet.
- Eksterni alat je izvor ili izvršilac, ne source of truth.
- Direktorijumi se materijalizuju tek sa realnim sadržajem.

## Početak rada

Otvori `INDEX.md`. Za learning session koristi `ROADMAP.md` i `10_Daily/Learning_Progress.md`. Za sistemsku promenu koristi `04_SOP/change_discipline.md`; zatim pokreni `90_AI/skills/cmo-auditor/SKILL.md`.

## Aktivna struktura

```text
AUTHORITY.md / INDEX.md / AGENTS.md / CLAUDE.md / ROADMAP.md / CHANGELOG.md
01_Knowledge/
02_Lessons/            (49 lekcija + visuals/lesson-001)
04_SOP/
05_KPI/
09_Company/Tehnocentar/
10_Daily/
11_Research/
13_Decisions/
90_AI/skills/ · 90_AI/audits/ · 90_AI/evals/ · 90_AI/integrations/
99_Templates/
apps/mentor/           (AI mentor aplikacija, ADR 009)
_archive/
```

Canonical domeni koji još nemaju realan sadržaj opisani su u `AUTHORITY.md` i ne postoje kao prazna dekorativna struktura.
