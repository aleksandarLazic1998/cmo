# Gate Level 0 — Vrednost, novac i vlasnička odluka

status: `AUTHORED`
level: `0`
covers: `001, 002, 003`
evidence_mode: `[FIXTURE]`

> Gate scenario proverava da učenik spaja sve lekcije nivoa u jednu odluku (ROADMAP „Evidence gate“). Svi brojevi su `[FIXTURE]`; nisu Tehnocentar podaci. `AUTHORED` ne znači da je gate položen; potvrđen rezultat postoji samo u `../../10_Daily/Learning_Progress.md`.

## Scenario `[FIXTURE]`

Prodavnica tehnike ima 10 vlasnikovih sati za sledeći mesec i bira jednu opciju.

- **A — vikend kampanja za televizore:** očekuje 12 dodatnih prodaja; cena 50.000 RSD, nabavna cena 42.000 RSD po televizoru; kampanja košta 30.000 RSD. Na stanju je 8 televizora, a dobavljač isporučuje za 10 dana.
- **B — paket televizor + zidni nosač:** nosač nudimo kupcima koji ga zaista žele; očekuje se 6 paketa; nosač se prodaje za 4.000 RSD uz nabavnu cenu 2.000 RSD. Televizori bi se prodali i bez paketa, pa je inkrementalan samo nosač.

Osnova: RSD, ista poreska osnova, PDV i ostali rashodi nisu modelovani; puni neto profit je `[UNKNOWN]`.

## Zadaci

1. **Koncept:** nacrtaj tok vrednosti, robe i novca za opciju A i obeleži kariku koja ograničava rezultat.
2. **Račun:** izračunaj bruto profit i doprinos posle troška kampanje za A (uz ograničenje zalihe) i dodatni bruto profit za B.
3. **Primena:** kako bi promenio opciju A da ne obećaš ono što sistem ne može da isporuči?
4. **Odluka:** izaberi opciju i obrazloži je rezultatom, rizikom i posledicom po poverenje kupaca.

## Ključ za mentora

- Zaliha ograničava A na 8 prodaja: 8 × (50.000 − 42.000) = 64.000 RSD bruto profita; 64.000 − 30.000 = 34.000 RSD doprinosa. Četiri očekivana kupca ostaju bez robe u roku.
- Ključna greška: 12 × 8.000 − 30.000 = 66.000 RSD (ignoriše zalihu i obećanje kupcu).
- B: 6 × (4.000 − 2.000) = 12.000 RSD dodatnog bruto profita, bez rizika nedostupnosti.
- Prihvatljiva odluka: A sa porukom ograničenom na raspoloživu zalihu ili jasnim rokom dopune, ili B ako učenik obrazloži nižu nesigurnost; neprihvatljivo je biranje po prometu ili obećanje 12 isporuka.

## Rubrika i prolaz

Četiri oblasti po 25 poena: razumevanje koncepta, numeričko zaključivanje, praktična primena, poslovna odluka. Prolaz zahteva najmanje 80/100, najmanje 15/25 u svakoj oblasti, demonstriranu primenu, obrazloženu odluku i ispravljene ključne greške. Ključ za mentora se ne prikazuje pre predaje; posle neuspeha nova provera koristi izmenjene `[FIXTURE]` ulaze.

## Izvori

- CMO OS originalna sinteza nad lekcijama nivoa; bez prepisivanja knjiga.
