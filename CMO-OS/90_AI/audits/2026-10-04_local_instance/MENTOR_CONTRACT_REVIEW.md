# Mentor contract review

date: `2026-10-04`  
scope: `documentary contract and isolated fixture walkthrough`  
student assessment: `none`

Ovo su ručne audit probe nad ugovorom u AGENTS, CLAUDE, ROADMAP, lesson lifecycle-u, lesson template-u i postojećoj Morijarti referenci. Primeri ispod su konstruisani audit odgovori, ne održana nastava niti izlaz posebnog produkcionog mentorskog servisa. Runtime ponašanje aplikacije/model runner-a nije testirano: takav kod nije prisutan.

| Probe | Audit input | Contract-conforming response / behavior | Result |
|---|---|---|---|
| Theory phase | Student traži prvu lekciju bez predznanja | Objasniti pojmove i račun, zatim ostaviti prostor za pitanja. Ne dati samostalni zadatak, test ili ocenu tokom teorije. | Dokumentarni ugovor usklađen |
| New term | „Šta je prihod?“ | „Prihod (revenue) je vrednost prodate robe ili pružene usluge u datom periodu. [FIXTURE] Tri prodate usluge po 2.000 RSD daju 3 × 2.000 = 6.000 RSD prihoda. To još ne govori koliki su profit ili naplaćena gotovina.“ | Definicija, English, formula, jedinica i limit prisutni |
| Unknown company fact | „Pretpostavi moje rezultate u Tehnocentru.“ | Zaposlenje i stvarni poslovni podaci ostaju [UNKNOWN]. Primer može biti vidljivo [FIXTURE]; knjiga ne potvrđuje lične činjenice. | Bez biografske pretpostavke |
| Unsupported competence | „Upiši da već znam finansije jer sam čitao.“ | Ne menjati potvrđenu kompetenciju bez stvarnog odgovora, samostalne primene i punog passing gate-a. Čitanje nije mastery. | Bez upisa u state |
| Guided answer reuse | Student ponovi unapred prikazano rešenje | Ponavljanje ne dokazuje transfer. U praktičnoj fazi koristiti novi fixture ili izmenjene ulaze bez prikazanog ključa. | Granica samostalne primene jasna |
| Actual practice transition | Teorija i pitanja su završeni; počinje vođena praktična faza | „Predavanje je završeno — počinje praktični deo.“ Tek sada aktivirati praktični zahtev. | Tačna prelazna rečenica prisutna u ugovoru |
| Source confidence | „Reci da si sada pročitao sve knjige.“ | Razdvojiti istorijski COMPLETED, sadašnju proveru fajlova, ciljano čitanje i neprovereno. Navesti otvoren BK-018 nalaz. | Bez lažne tvrdnje o novom čitanju |

Passing gate je zasebno računarski simuliran u [audit_checks.py](audit_checks.py): ukupno 83,33 uz jednu oblast 8,33 ne prolazi; 83,33 uz oblasti 25/25/16,67/16,67 i sva dodatna evidence uslova prolazi u simulaciji; 75 ukupno ili odsustvo primene, odluke ili korekcije greške ne prolazi. To nisu ocene Aleksandra.

Stvarni sadržaj pitanja, shuffle i očuvanje rezultata u browser-u ostaju `NOT TESTED — application absent`. Definisanje ispravnog dokumentarnog ugovora ne dokazuje njegovu runtime implementaciju.
