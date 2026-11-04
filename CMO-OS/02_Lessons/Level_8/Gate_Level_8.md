# Gate Level 8 — Mesečni business review

status: `AUTHORED`
level: `8`
covers: `801–805`
evidence_mode: `[FIXTURE]`

> Gate scenario proverava da učenik spaja sve lekcije nivoa u jednu odluku (ROADMAP „Evidence gate“). Svi brojevi su `[FIXTURE]`; nisu Tehnocentar podaci. `AUTHORED` ne znači da je gate položen; potvrđen rezultat postoji samo u `../../10_Daily/Learning_Progress.md`.

## Scenario `[FIXTURE]`

Cilj meseca: prihod 5.000.000 RSD, 2.000 posetilaca, konverzija 30%, bruto marža 24%. Ostvareno: prihod 4.600.000 RSD, 2.300 posetilaca, konverzija 25%, bruto marža 26%.

## Zadaci

1. **Koncept:** razlikuj outcome, driver i guardrail među ovim metrikama.
2. **Račun:** ciljani i ostvareni broj transakcija i prosečna vrednost korpe; odstupanje prihoda u procentima.
3. **Primena:** postavi dve hipoteze o uzroku pada konverzije i najjeftiniji test za svaku; uradi kratak pre-mortem korektivne akcije.
4. **Odluka:** korektivna akcija sa vlasnikom, rokom, KPI-jem i guardrail-om.

## Ključ za mentora

- Cilj: 2.000 × 30% = 600 transakcija; prosečna korpa 5.000.000 ÷ 600 = 8.333 RSD.
- Ostvareno: 2.300 × 25% = 575 transakcija; korpa 4.600.000 ÷ 575 = 8.000 RSD; prihod −8%.
- Saobraćaj je iznad cilja; pad je u konverziji i korpi. Viša marža može značiti manje popusta ili drugačiji miks; uzrok je `[UNKNOWN]` dok se ne proveri.
- Ključne greške: tražiti više saobraćaja; zaključak o uzroku bez testa; akcija bez vlasnika i roka.

## Rubrika i prolaz

Četiri oblasti po 25 poena: razumevanje koncepta, numeričko zaključivanje, praktična primena, poslovna odluka. Prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške. Ključ za mentora se ne prikazuje pre predaje; posle neuspeha nova provera koristi izmenjene `[FIXTURE]` ulaze.

## Izvori

- CMO OS originalna sinteza nad lekcijama nivoa; bez prepisivanja knjiga.
