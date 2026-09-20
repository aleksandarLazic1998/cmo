# CMO OS Plugin Registry

status: active  
last_verified: 2026-08-17

Plugins are tools, not sources of truth. Canonical storage is defined by `AUTHORITY.md`.

| Capability/plugin | Local status | Connection evidence | Default action | CMO use |
|---|---|---|---|---|
| Data Analytics | installed skill package | Skills locally present | ANALYZE | KPI, diagnostics, quality, reports, dashboards, market sizing |
| Finance | installed skill package | Skills locally present | ANALYZE | Statements, variance, reconciliation and financial review |
| Marketing | installed skill package | Skills locally present | PROPOSE | Campaigns, content, SEO, brand and performance |
| Product Management | installed skill package | Skills locally present | PROPOSE | Research synthesis, metrics and roadmaps |
| Sales | installed skill package | Skills locally present | PROPOSE | Pipeline, forecast, accounts and competitive intelligence |
| Documents/Spreadsheets | installed runtime packages | Skills locally present | ANALYZE | Reports, models and verified deliverables |
| Figma | active plugin | Found; follows default `Allow low-risk actions` | READ | Design context and diagrams; writes need approval |
| PostHog | active plugin | Found; follows default `Allow low-risk actions` | READ | Product analytics; mutations need approval |
| Browser/Web | built-in | Available | READ | Current source-backed research |
| Slack | cache only | Connection not verified | NONE | Do not use until connection is verified |

## Action classes

- `READ`: retrieve without changing external state.
- `ANALYZE`: transform locally without external mutation.
- `PROPOSE`: prepare a change but do not apply it.
- `EXECUTE`: change an external system; require explicit user approval.
