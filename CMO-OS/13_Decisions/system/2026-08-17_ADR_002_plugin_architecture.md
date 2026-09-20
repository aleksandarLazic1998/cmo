# ADR 002 — Plugin and Skill Architecture

date: 2026-08-17  
status: accepted

## Context

Finance, Data Analytics, Marketing, Product Management, Sales, Documents, Spreadsheets, Figma and PostHog capabilities are available. Duplicating each capability as a custom CMO skill would create drift and unnecessary maintenance.

## Decision

Keep exactly two CMO orchestration skills: `cmo-core` and `cmo-auditor`. Use installed specialist skills for domain work. Govern plugins through `PLUGIN_REGISTRY.md`, action classes and per-plugin contracts. External writes require explicit approval.

Figma is the available default visual collaboration integration. Existing Lucidchart preference remains historical but cannot govern execution until a verified Lucidchart integration exists.

## Consequences

CMO OS stays canonical and vendor-neutral. Plugins accelerate work but cannot silently mutate external systems or become business truth.
