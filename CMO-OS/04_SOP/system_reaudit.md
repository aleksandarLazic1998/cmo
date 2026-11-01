# System Reaudit

Status: `active`
Scope: `repeatable system review and authorized minimal repairs`

1. Zabeleži stvarni model ako je poznat, datum, commit i obuhvat. Pročitaj AUTHORITY, AGENTS, INDEX, ROADMAP, jedini Learning Progress, cmo-core i cmo-auditor. Ako je model nepoznat, zapiši `[UNKNOWN]`; ne zaključuj ga iz naziva zadatka.
2. Razdvoji proveru strukture, sadržaja i računa, porekla knjiga, nastavnog ponašanja i aplikacije. Nijedna sama ne dokazuje ostale.
3. Pronađi prethodne nalaze i kasnije audite koji ih zatvaraju. Istorijski validator je dokaz svoje faze; ne koristi ga kao aktuelni acceptance gate kada zahteva početno nulto stanje ili stare extraction hash-eve.
4. Pokreni `node 90_AI/audits/2026-11-01_system_recheck/recheck.mjs` iz kompletnog checkout-a. Skripta samo čita fajlove i piše JSON na stdout. Za parcijalni checkout opcioni `--inventory <path>` prihvata pinovanu metadata listu link-targeta; to proverava postojanje putanje u Git tree-u, ne njene bajtove.
5. Ručno proveri materijalne nalaze sa severity, izvorom, posledicom i minimalnom korekcijom. Ne predstavljaj strukturni PASS kao potpuno semantičko čitanje, samostalnost učenika ili runtime test.
6. Ako korisnik traži korekcije, primeni ih u zasebnoj grani uz očuvan baseline. Ne resetuj Learning Progress, ne prepisuj istorijske audite i ne zatvaraj source finding samo zamenom očekivanog hash-a.
7. Ponovi pogođene provere i dokumentuj ograničenja. Aktuelni audit navodi koji raniji nalaz ostaje otvoren, koji je zatvoren kasnijim dokazom i šta u ovoj sesiji nije ponovo provereno.
8. Prati cmo-auditor verdict-e: APPROVE za jasno ograničen provereni obuhvat, REVISE za materijalne popravljive praznine, REJECT za narušen autoritet/integritet. Ne proširuj scope zaključka na testove koji nisu izvršeni.

## Rerun request for a selected model

> Ponovi sistemski audit ovog CMO OS-a prema `04_SOP/system_reaudit.md`. Zabeleži stvarni model i baseline commit. Proveri aktuelne canonical fajlove, sve lekcije, prerequisite graf, izvore i kasnija zatvaranja prethodnih nalaza. Posebno proveri vizuelni nastavni ugovor iz `04_SOP/model_and_visual_workflow.md`. Primeni dokazive minimalne korekcije u zasebnoj grani, bez resetovanja napretka. Razdvoji izvršene provere od neproverenog sadržaja i runtime-a. Ne tvrdi da su knjige ponovo pročitane ili aplikacija testirana bez stvarnog izvršenja.
