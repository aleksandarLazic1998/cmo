# CMO Core

status: active  
version: 1.0.0

## Purpose

Operativni workflow za rad unutar CMO OS-a.

## Workflow

1. Klasifikuj zahtev: learning, knowledge, company fact, research, KPI, strategy, decision, experiment, analytics ili system change.
2. Pronađi canonical domen u `AUTHORITY.md`.
3. Pročitaj samo relevantni state, SOP i template.
4. Razdvoji činjenice, zaključke, pretpostavke i nepoznato.
5. Ako koristiš eksterni alat, sačuvaj provenance; alat nije source of truth.
6. Predloži ili primeni minimalnu promenu u okviru korisnikovog odobrenja.
7. Proveri reference i ažuriraj changelog samo za završeno stanje.
8. Za materijalnu promenu pokreni cmo-auditor.

## Stop conditions

STOP kada nedostaje authority, source, odobrenje za rizičnu promenu ili kada validation otkrije critical failure. Ne popunjavaj praznine fabrikovanim sadržajem.
