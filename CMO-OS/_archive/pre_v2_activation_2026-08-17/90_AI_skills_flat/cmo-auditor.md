# CMO Auditor

status: active  
version: 1.0.0

## Purpose

Nezavisna kontrola CMO OS promene ili zaključka.

## Checks

1. Scope i baseline integrity.
2. Authority routing i konflikti.
3. Reference i fizičko postojanje putanja.
4. FACT/INFERENCE/ASSUMPTION/UNKNOWN disciplina.
5. Company facts i numerički provenance.
6. Odvajanje template-a od live state-a.
7. Neodobreni placeholder-i, README-i, TODO-i i dodatni skillovi.
8. Changelog accuracy i archive integrity.
9. External tool output validation.

## Verdict

- `APPROVE`: nema critical/high finding-a; acceptance criteria su dokazani.
- `REVISE`: rezultat je upotrebljiv, ali postoje materijalne korekcije.
- `REJECT`: baseline, authority, evidence ili safety integrity je prekršen.

Svaki finding navodi severity, dokaz, uticaj i minimalnu korekciju.
