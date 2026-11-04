# Curriculum migration proposal

Status: `PROPOSED — awaiting user approval`
Date: 2026-11-04
Pravilo: postojeći ID-jevi lekcija i potvrđeni napredak se ne menjaju. Trenutni potvrđeni napredak: nijedna završena lekcija (Learning Progress, 2026-10-04), pa nijedna predložena izmena ne poništava potvrđen rezultat.

## P1 — Standard dubine teorije (C1)

Dodati u `99_Templates/Lesson_Template.md` minimum za „Teach & explain“: za svaki novi pojam (1) zašto je važan vlasniku, (2) definicija običnim jezikom + engleski termin, (3) najmanje jedan `[FIXTURE]` primer iz prodavnice tehnike, (4) granica pojma (sa čim se meša), (5) veza sa prethodnim i sledećim pojmom. Proširivati lekcije redom kojim učenik napreduje (Level 0 → 1), uz audit svake proširene lekcije. Ne menja ID, cilj ni rubriku.

## P2 — Gate scenariji nivoa (C2)

Novi fajlovi `02_Lessons/Level_N/Gate_Level_N.md` (N = 0–9) sa novim `[FIXTURE]` slučajem koji spaja sve lekcije nivoa, rubrikom 4 × 25 i istim pragom. 1005 ostaje finalni gate. Zahteva dopunu documentary checkera da gate fajlove ne broji kao lekcije.

## P3 — Nove lekcije (C3–C6)

| Predlog ID | Naziv | Mesto | Preduslov | Napomena |
|---|---|---|---|---|
| 606 | Nabavka, distributeri i pregovaranje sa dobavljačem | posle 605 | 605 | rabati, price protection, rok plaćanja, MOQ, koncentracija dobavljača, BATNA |
| 607 | Postprodaja: saobraznost, garancija, reklamacije i servis — orijentacija | posle 606 | 606 | samo sa aktuelnim zvaničnim tekstom zakona (LSE-12); nije pravni savet |
| 805 | Kvalitet odluke pod neizvesnošću | posle 804 | 804 | očekivana vrednost, reverzibilnost, pre-mortem, zapis i post-audit odluke |
| 905 | Organizaciona struktura, prava odlučivanja i odgovornost | posle 904 | 904 | struktura malog tima, RACI/decision rights |
| 1006 | Etika, usklađenost i odgovorno vođenje | između 1004 i 1005 | 1004 | ID 1006 se predaje pre 1005; 1005 dobija preduslov 1006 |

Posledice: katalog 49 → 54 lekcije; ROADMAP tabela nivoa; prerequisite: 701 traži ceo Level 6 (već „Level 6“), 901 traži Level 8 (već), 1001 traži Level 9 (već), 1005 → 1006. Knowledge Graph dobija nove čvorove `planned`. Svaka nova lekcija prolazi isti audit pre statusa `AUTHORED`.

## P4 — Mehaničke ispravke teksta (C7, C10)

- U 49 lekcija zameniti „Automatski test u aplikaciji proverava…“ sa „Procena proverava…“ (struktura 4 × 25 ostaje). Razlog: ta aplikacija nije u repozitorijumu.
- Lesson 002 vežba: dodati „ili, ako nemaš svoj posao, `[FIXTURE]` tok prodavnice tehnike iz primera“.

## P5 — Opciono: redosled kupca i finansija (C8)

Opcija A (preporuka): zadržati redosled, a u Level 1–2 svaki finansijski pojam vezati za odluku o kupcu iz Level 0 (bez promene preduslova).
Opcija B: Level 3 pre Level 2 (301 preduslov „Level 1“, 201 preduslov „Level 3“). Menja značenje preduslova u 6+ lekcija; migracija napretka danas nije potrebna, ali traži ADR.

## Kako odobriti

Napiši koje predloge (P1–P5) odobravaš. Svaki odobren predlog se sprovodi u zasebnom commit-u sa CHANGELOG zapisom, auditom i ponovljenim documentary checkerom.
