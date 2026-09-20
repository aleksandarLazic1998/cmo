# Built-in Skill & Plugin Capability Audit

date: 2026-08-17  
status: approved_architecture

## Decision

CMO OS je source of truth. Built-in skills i eksterni pluginovi su alati za pribavljanje, analizu, transformaciju i isporuku; rezultat postaje canonical tek posle evidence i authority validacije.

| Capability | Decision | Use |
|---|---|---|
| Finance workflows | USE | Statements, reconciliation, variance, journal/close/audit support kada postoje podaci. |
| Data Analytics | USE | KPI design/reporting, diagnostics, data quality, dashboards i business analysis. |
| Research | USE | Source-backed evidence; trajni output ide u Research ili drugi canonical domen. |
| Marketing | USE | Campaign, content, brand, SEO i performance workflows po konkretnom briefu. |
| Customer/Competition | USE | Research/synthesis uz provenance. |
| Sales | CONDITIONAL | Kada postoje CRM/pipeline podaci i definisan workflow. |
| Documents/Spreadsheets | USE | Delivery i modeli; ne zamenjuju canonical definicije/odluke. |
| Figma | CONDITIONAL | Samo za realan design workflow; nije knowledge base. |
| PostHog | CONDITIONAL | Samo uz stvarnu instancu, access i definisan data model. |

## Minimal architecture

Koristi `cmo-core` + `cmo-auditor` i postojeće specijalističke capabilities. Ne instalirati CRM, PM, communication ili dodatne knowledge-base pluginove unapred. Novi CMO wrapper nastaje tek kada se workflow ponavlja, ima stabilan input/output ugovor i test za auditor.

## External output contract

Sačuvati source system, extraction time/period, query/method, grain/unit, limitations, quality status, evidence classification i canonical destination. Plugin failure ne menja CMO OS state.
