# CMO OS — Transfer Manifest

This package contains the original CMO OS plus a non-destructive transfer/audit layer for Claude Desktop.

## Original project

The original files are preserved exactly as uploaded.

## Added transfer files

- `00_CLAUDE_TRANSFER/AUDIT_PROTOCOL.md`
  - Instructions for Claude to perform an adversarial, independent audit.

- `00_CLAUDE_TRANSFER/CLAUDE_DESKTOP_MASTER_INSTRUCTION.md`
  - Recommended instruction text to paste into the Claude Project instructions.

- `00_CLAUDE_TRANSFER/TRANSFER_MANIFEST.md`
  - This document.

## Important findings already visible from a structural inspection

1. The ZIP contains the top-level architecture, templates, README, CLAUDE.md, ROADMAP.md and CHANGELOG.md, but most operational directories are currently empty.
2. Existing `CLAUDE.md` tells the AI to read `10_Daily/Learning_Progress.md`, while the uploaded project contains `99_Templates/Learning_Progress.md` instead.
3. Existing documentation references `13_Decisions`, but that directory is not present in the uploaded ZIP.
4. `README.md` and `CLAUDE.md` describe overlapping responsibilities and have version differences that should be reconciled.
5. The current system has strong conceptual foundations, but it needs a formal source-of-truth hierarchy and stronger rules for evidence, uncertainty, external research, document mutation, contradictions, and archival/versioning.
6. The learning model is clearly defined, but the actual lesson/progress infrastructure is largely empty, so Claude will need to bootstrap the operational state carefully.

These are preliminary observations, not the final audit. Claude must independently verify them.

## Recommended workflow in Claude

1. Add/import the entire `CMO-OS` folder as a Claude Project.
2. Use `CLAUDE_DESKTOP_MASTER_INSTRUCTION.md` as the Project Instructions.
3. First prompt: `Run the independent CMO OS audit. Do not modify the existing system until the audit report is complete.`
4. Review the audit.
5. Only then approve the recommended architecture and migration changes.
