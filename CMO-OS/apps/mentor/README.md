# CMO OS — AI Mentor (Morijarti)

Lokalna Next.js aplikacija koja vodi Lesson 001 kroz ceo CMO OS tok: teorija → pitanja i pojašnjenja → vođeni primer → samostalna praksa → procena → povratna informacija → potvrđen napredak → sledeća lekcija. Pravila: `../../AUTHORITY.md`, odluka: `../../13_Decisions/system/2026-11-04_ADR_009_ai_mentor_application.md`.

## Instalacija i pokretanje

Potrebno: Node.js ≥ 22.13 (koristi ugrađeni `node:sqlite`).

```bash
cd CMO-OS/apps/mentor
npm ci
cp .env.example .env.local
npm run build
npm start            # http://127.0.0.1:3100
```

Razvoj: `npm run dev`.

## Konfiguracija (`.env.local`)

| Promenljiva | Podrazumevano | Značenje |
|---|---|---|
| `MENTOR_AI_PROVIDER` | `mock` | `anthropic` za stvarni Claude API, `mock` za offline heuristiku (nije AI). |
| `ANTHROPIC_API_KEY` | — | Obavezno za `anthropic`. Čita se samo na serveru. |
| `MENTOR_AI_MODEL` | `claude-opus-5-5` | ID modela. |
| `MENTOR_AI_EFFORT` | `medium` | `low`–`max`. |
| `MENTOR_AI_TIMEOUT_MS` | `60000` | Tvrdi timeout jednog AI poziva. |
| `MENTOR_AI_MAX_TOKENS` | `16000` | Gornja granica izlaza. |
| `MENTOR_AI_FALLBACKS` | `default` | Server-side fallback pri odbijanju (Claude API beta); `off` isključuje. |
| `MENTOR_AI_RATE_LIMIT_PER_MIN` | `20` | AI poziva u minuti po procesu. |
| `MENTOR_DB_PATH` | `./data/mentor.db` | Operativna baza (pomoćna evidencija, van gita). |
| `MENTOR_CANONICAL_WRITES` | `false` | `true` dozvoljava upis u `10_Daily/Learning_Progress.md` posle potvrde. |
| `CMO_OS_ROOT` | auto | Folder sa `AUTHORITY.md`. |

## Testovi

```bash
npm run typecheck
npm test                 # Vitest, mock provider, privremene kopije canonical fajlova
npm run build && npm run test:e2e   # Playwright: ceo tok, restart servera, 375/768 px
npm run smoke:ai         # stvarni Claude poziv; traži ANTHROPIC_API_KEY, troši API kredit
```

## Arhitektura

- `src/lib/curriculum/` — read-only parser kataloga i canonical lekcije; generator `[FIXTURE]` scenarija (seed po sesiji i pokušaju).
- `src/lib/progression/` — faze, deterministički račun, gate (80/100, 15/25, ključne greške, preduslovi), raspored ponavljanja.
- `src/lib/ai/` — Zod šema izlaza, Moriarty prompt, detekcija prompt injection-a, Claude i mock provider, timeout/limit.
- `src/lib/progress/canonical.ts` — validacija, backup i atomaran upis Learning Progress-a.
- `src/lib/db/store.ts` — SQLite: sesije, poruke, pokušaji, pogrešne predstave, ponavljanje, događaji.
- `src/app/api/*` — rute sa validacijom tela, same-origin proverom i limitom veličine.

## Bezbednost i granice

- Lokalna jednokorisnička aplikacija bez prijave; server sluša samo na `127.0.0.1`. Ne objavljivati javno bez autentifikacije.
- AI nikada ne odlučuje o fazi, prolazu ni upisu. Studentski tekst ide modelu kao podatak u nonce bloku; pokušaji manipulacije se označavaju i ograničavaju AI ocenu.
- Interaktivna procena postoji samo za Lesson 001.
