# PostHog Integration Contract

status: active  
default_action: READ

## Allowed without additional business approval

- Read schema and definitions.
- Query trends, funnels, retention, lifecycle, paths and existing experiment results.
- Produce a local analysis with provenance.

## Explicit approval required

- Create/update/delete feature flags, actions, dashboards, surveys or insights.
- Launch, pause, end, reset, archive or ship an experiment variant.
- Change organization/project context when the target is ambiguous.

## Required evidence

Record organization/project, extraction time, date range, event/property definitions, filters, query/method, grain, exclusions, sample size and known quality limitations. Persist validated snapshots in `15_Analytics/`; experiment decisions belong in `14_Experiments/`.
