# Curriculum Audit — 48 authored lessons + Lesson 001

date: `2026-08-23`  
scope: `02_Lessons/` (49 fajlova), `cmo-learning-app/app/lesson-content.ts`, `cmo-learning-app/app/page.tsx`  
method: `cmo-auditor` + programska provera strukture, aritmetike i test-mehanike  
verdict: **`REVISE`**

## Baseline

- 49 lesson fajlova: 48 u jedinstvenom `AUTHORED` formatu + `Lesson_001` u starijem, drugačijem formatu.
- 48 lekcija postoji i u aplikaciji (`authoredLessons`), sa identičnim ID-jevima.
- Katalog, `curriculum.ts` i fajlovi se poklapaju po ID-u, nazivu i preduslovu.

## Šta je prošlo

| Provera | Rezultat |
|---|---|
| Strukturna usklađenost (16 obaveznih sekcija) | **48/48 `PASS`** |
| Evidence contract — svih 9 polja | **48/48 `PASS`** |
| `[FIXTURE]` oznaka prisutna | **48/48 `PASS`** |
| `status: AUTHORED` | **48/48 `PASS`** |
| Lanac preduslova bez prekida i poklapanje sa katalogom | **`PASS`** |
| **Aritmetika u svim `Formula / denominator` linijama** | **48/48 `PASS`** |
| Odvajanje `[UNKNOWN]` gde podatak nedostaje (206, 403, 601, 1004) | **`PASS`** |
| Odsustvo stvarnih Tehnocentar/PostHog podataka u 48 lekcija | **`PASS`** |

Aritmetika je nezavisno preračunata za svaku lekciju sa brojevima. Nijedna greška u računu nije nađena.

---

## Nalazi

### `CRITICAL-1` — Ključ testa je deterministički i izračunljiv bez znanja

**Dokaz:** `cmo-learning-app/app/lesson-content.ts:739`

```ts
const correctPosition = (Number(lesson.id) + index) % 3;
```

Pozicija tačnog odgovora je čista funkcija ID-a lekcije i rednog broja pitanja. Kompletan ključ za svih **192 pitanja** (48 lekcija × 4) izračunat je bez otvaranja ijedne lekcije:

```
 002: c a b c    003: a b c a    101: c a b c    102: a b c a
 103: b c a b    104: c a b c    105: a b c a    201: a b c a
 202: b c a b    203: c a b c    204: a b c a    205: b c a b
 206: c a b c    301: b c a b    302: c a b c    303: a b c a
 304: b c a b    401: c a b c    402: a b c a    403: b c a b
 404: c a b c    501: a b c a    502: b c a b    503: c a b c
 504: a b c a    505: b c a b    601: b c a b    602: c a b c
 603: a b c a    604: b c a b    605: c a b c    701: c a b c
 702: a b c a    703: b c a b    704: c a b c    801: a b c a
 802: b c a b    803: c a b c    804: a b c a    901: b c a b
 902: c a b c    903: a b c a    904: b c a b   1001: c a b c
1002: a b c a   1003: b c a b   1004: c a b c   1005: a b c a
```

**Uticaj:** `[LOCAL] PASS` ne dokazuje ništa. Ako bi se ikada koristio kao ulaz za `Learning_Progress.md`, upisao bi lažnu kompetenciju.

**Minimalna korekcija:** nasumična pozicija po sesiji (deterministički seed po pokušaju, ne po ID-u lekcije).

---

### `CRITICAL-2` — Distraktori su isti u svih 48 lekcija i očigledno netačni

**Dokaz:** `lesson-content.ts:727` — `wrongByArea` sadrži **dva fiksna netačna odgovora po oblasti**, koji se ponavljaju za svaku lekciju. Primeri:

- „Najsigurnije je preskočiti merenje i odlučiti po osećaju.“
- „Veći broj je uvek bolji, bez obzira na imenilac i rizik.“
- „Koncept je samo termin i ne menja nijednu poslovnu odluku.“

**Uticaj:** tačan odgovor je jedini koji uopšte pominje temu lekcije. Test se rešava sa 100/100 strategijom „izaberi jedini smislen odgovor“, bez čitanja. Test **ne razlikuje** studenta koji zna od studenta koji ne zna — a to je jedina svrha testa.

**Minimalna korekcija:** po jedan uverljiv distraktor po lekciji, izveden iz `Common mistake` sekcije te lekcije (koja već postoji u svih 48).

---

### `HIGH-3` — Skala od 4 pitanja čini pragove 80/100 i 15/25 neprimenljivim

**Dokaz:** `app/page.tsx:309` — `25 poena po tačnom odgovoru`, 4 pitanja.

Mogući rezultati su **samo** 0, 25, 50, 75, 100. Prag je 80. Znači: **jedini prolaz je 4/4**, a jedna greška obara na 75 bez obzira na kvalitet ostatka.

Istovremeno, canonical pravilo traži **najmanje 15/25 u svakoj oblasti**. Sa jednim pitanjem po oblasti, oblast je 0 ili 25 — vrednost 15 ne može nastati. Pravilo je zapisano u svih 48 lekcija, u `Lesson_Template.md` i u `04_SOP/lesson_lifecycle.md`, a mehanika ga ne može ispuniti.

**Minimalna korekcija:** najmanje 3 pitanja po oblasti (12 ukupno), ili eksplicitno razdvojiti `[LOCAL]` prag od canonical rubrike.

---

### `HIGH-4` — Test Lekcije 001: sva četiri tačna odgovora su `b`

**Dokaz:** `app/page.tsx:22–66`, `answer: 'b'` četiri puta.

Ovaj test je ručno pisan i ima uverljive distraktore — kvalitetniji je od generisanih. Ali pozicija odgovora je konstantna, pa važi isti prigovor kao u `CRITICAL-1`.

---

### `HIGH-5` — Curriculum nije povezan sa završenim korpusom knjiga

**Dokaz:** svih 48 lekcija ima identičnu liniju: `CMO OS originalna sinteza · bez prepisivanja knjiga`. Nijedna lekcija ne navodi nijedan `BKB-` koncept ni lokator izvora.

Istovremeno, od danas postoji: 18/18 obrađenih knjiga, 4.558 stranica, 63 `BKB-` koncepta sa tabelama prvenstva i listama isključenja.

`04_SOP/lesson_lifecycle.md` korak 4 traži izbor relevantnih izvora, a korak 12 čuvanje reference sa lokatorom kada je izvor korišćen. Trenutno stanje je formalno dopušteno (ako izvor nije korišćen), ali znači da su **dva najveća sistema u CMO OS-u potpuno razdvojena**.

Primeri direktnog preklapanja koje nije iskorišćeno:

| Lekcija | Postojeći koncept | Neiskorišćen izvor |
|---|---|---|
| 105 Break-even | contribution margin | BK-006, BK-010 |
| 205 Unit economics | ROI, payback | `BKB-FIN-005`, BK-006 |
| 303 Razgovor sa kupcem | bez sugestivnih pitanja | **BK-013 ima apsolutno prvenstvo** |
| 505 CAC/LTV | profitabilan rast | `BKB-GRO-002`, BK-002 |
| 701 Usko grlo | kapacitet | **BK-012 Goldratt, pet koraka** |
| 801 KPI | driver/outcome/guardrail | `BKB-MET-006`, BK-008 |
| 902 Zapošljavanje | strukturisana procena | BK-015 + `Performance-Based Hiring` |
| 1001 Dobra strategija | dijagnoza, politika, akcije | **BK-007 Rumelt — direktan izvor naslova** |

**Uticaj:** lekcije su tanje nego što moraju biti, a 63 koncepta nemaju put do učenja.

---

### `HIGH-6` — Lekcija 001 ne poštuje sopstveni standard

**Dokaz:** `02_Lessons/Level_0/Lesson_001_How_a_Company_Makes_Money.md`

| Nedostaje | Posledica |
|---|---|
| `[FIXTURE]` oznaka | Koristi ime **Tehnocentar** u primeru, u tabeli i u mermaid dijagramu. Napomena „ilustrativni primer“ postoji, ali obavezna oznaka ne. |
| Evidence contract (9 polja) | Nema perioda, jedinice, osnove PDV-a, isključenja ni pretpostavki. |
| Prag `15/25` po oblasti | Naveden je samo `80/100`. |
| `status: AUTHORED` metadata | Koristi „**Status:** U toku“ u drugom formatu. |

Ovo je **jedina lekcija koja se trenutno uči** i jedina koja ne prolazi standard koji ostalih 48 prolazi.

---

### `MEDIUM-7` — Lekcija 703: pogrešno označen ulaz

**Dokaz:** `Lesson_703`

- Scenario: „Vlasnik troši 4 sata. **Analitičar** može pripremiti izveštaj za **1,5 sat**, uz pregled odstupanja od 30 minuta.“
- Formula: „Vlasnik oslobađa **3,5 h**“ (4 − 0,5) ✓
- Inputs: „**novo vreme owner-a 1,5 h**“ ✗

Ulaz pripisuje vlasniku analitičarevih 1,5 h. Student koji računa iz `Inputs` dobija 2,5 h umesto 3,5 h.

**Korekcija:** `novo vreme analitičara 1,5 h`.

---

### `MEDIUM-8` — Četiri lekcije citiraju pravni izvor bez `Local authority boundary`

Legalni izvor navode: `206, 404, 501, 503, 604, 605, 902, 904, 1004` (9 lekcija).  
`## Local authority boundary` imaju: `206, 605, 902, 904, 1004` (5 lekcija).

Nedostaje u: **`404` (dizajn ponude i cena), `501` (marketing i brend), `503` (prigovor i pregovaranje), `604` (cross-sell, upsell, bundle)** — a to su tačno teme na koje se propisi o zaštiti potrošača i obmanjujućem oglašavanju najdirektnije odnose.

---

### `MEDIUM-9` — Ocenjuje se jedno, a vežba se drugo

U svih 48 lekcija `Assessment rubric` proverava brojeve iz **rešenog primera**, dok `Practical exercise` traži **nov račun** čije rešenje nije zapisano nigde.

Primer, Lekcija 103: vežba traži trošak 15.000 i cenu 21.000 (bruto profit 6.000, marža 28,6%, markup 40%). Nijedan od ta tri broja ne postoji ni u lekciji ni u aplikaciji. Automatski test umesto toga proverava brojeve iz primera (4.000 / 33,3% / 50%).

**Uticaj:** vežba se ne može automatski oceniti; „demonstrirana primena“ ostaje isključivo na mentoru.

---

### `MEDIUM-10` — Lekcija 1004: `Inputs` ne sadrže iznose investicija

Formula se oslanja na `1.200.000 − 1.000.000 = 200.000` i `1.200.000 − 600.000 = 600.000`. Iznosi `1.000.000` i `600.000` postoje samo u proznom opisu, ne u `Inputs`. Račun je tačan, ali nije reproducibilan iz označenih ulaza.

---

### `LOW-11` — Figma linkovi u Lekciji 001 nose identifikatore sesije

`?oai_id=v1%2FGH68…&request_id=abaa4c29-…` — parametri sesije u trajnom canonical dokumentu. Trebalo bi svesti na čist `board` URL.

---

### `LOW-12` — Aplikacija nema gating po preduslovu

`app/page.tsx:517` — `const active = lesson.id === '001'` utiče samo na bedž. Svih 48 lekcija je otvorivo bez ijednog položenog testa. Preduslov je prikazan kao tekst, ali nije sprovođen.

---

## Zaključak

Sadržaj lekcija je solidan: struktura, evidence contract, `[FIXTURE]` disciplina, lanac preduslova i **kompletna aritmetika** prolaze bez ijedne greške u 48 lekcija.

Mehanizam provere znanja ne prolazi. Dva `CRITICAL` nalaza zajedno znače da test **ne meri znanje** — ključ je izračunljiv, a distraktori su neupotrebljivi. Dok se to ne popravi, nijedan `[LOCAL] PASS` ne sme ući u `10_Daily/Learning_Progress.md`, i taj zaštitni zid u kodu i SOP-u trenutno **radi ispravno** — `[LOCAL]` rezultat se čuva samo u `localStorage`.

`REVISE` — sadržaj ostaje upotrebljiv za učenje uz mentora; automatska provera znanja se ne koristi kao dokaz kompetencije dok se `CRITICAL-1`, `CRITICAL-2` i `HIGH-3` ne otklone.
