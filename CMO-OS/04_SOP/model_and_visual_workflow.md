# Model and Visual Workflow

Status: `active`
Scope: `teaching delivery and model selection; no curriculum or personal-state migration`
Last verified: `2026-11-01`

## Model selection

Izbor je preporuka prema zadatku, ne obećanje dostupnosti ili automatskog prebacivanja:

| Zadatak | Preporučeni izbor kada je dostupan |
|---|---|
| Teška sinteza, strategija, kontradikcije i sistemski audit | GPT-6 Astra; povećati reasoning za zahtevnu proveru |
| Svakodnevne lekcije, održavanje dokumenata i implementacija | GPT-6.1 Sol; povećati reasoning kada zadatak traži više analize |
| Provera čitljivosti prikaza, vizuelni input i manja UI poboljšanja | GPT-6.1 Terra ili dostupan model sa odgovarajućim alatima |
| Uska, ponovljiva provera ili jednostavna klasifikacija | GPT-6 Luna, uz proveru rezultata |

U Claude okruženju (Claude Code, claude.ai) važi isti princip: koristi model koji je stvarno dostupan i ne tvrdi koji model je radio bez dokaza. AI mentor aplikacija bira model kroz `MENTOR_AI_MODEL` na serveru. Pre upotrebe proveri stvarni model selector, plan, tools i limite. Ne tvrdi da je Astra radila audit ako nije stvarno korišćena. Čitanje ovog SOP-a ne menja aktivni model niti konfiguraciju naloga. Ne uvodi API pozive, plaćene kredite, automatsko rutiranje ili nove servise samo radi promene modela.

Odvojeni kritički prolaz nije automatski nezavisna provera. Kada jedan model radi oba prolaza, to jasno navedi; nezavisna druga procena zahteva zasebno izvršen pregled.

## Visual teaching contract

Zadrži ceo postojeći tok: teorija → pitanja → vođeni primeri → samostalna praksa → test → feedback → potvrđen upis. Vizuelni prikaz tokom teorije objašnjava koncept i ne zahteva odgovor učenika. Simulacija u praktičnoj fazi može tražiti odluku tek nakon dogovorenog prelaza.

1. Izaberi prikaz koji objašnjava konkretan odnos; ne nameći broj vizuala po lekciji.
2. Za strukturu i zavisnosti koristi jednostavan dijagram. Za brojeve koristi precizan grafikon ili tabelu. Za promenu pretpostavki koristi interaktivnu simulaciju kada je prikaz podržan.
3. Primeri: tok vrednosti i novca u Level 0; cena/popust/doprinos u Level 1; profit i gotovina u Level 2; funnel u Level 5; zalihe i usko grlo u Level 6–7.
4. Svaki simulirani broj ima vidljiv `[FIXTURE]`, jedinicu, period i osnovu poreza, uz izvor ili eksplicitnu pretpostavku. Formule su proverljive; generisane slike ne prikazuju precizne numeričke odnose.
5. Jedan ili dva jasna kontrolna ulaza dovoljna su kada demonstriraju uzrok i posledicu. Prikaži granice modela i nedostajuće ulaze. Na primer, bruto doprinos ne zovi neto profitom bez svih rashoda.
6. Obezbedi čitljivost na tabletu, dodir/tastaturu, tekstualno objašnjenje i oznake koje ne zavise samo od boje.
7. Ako okruženje ne prikazuje interaktivni sadržaj, ponudi statičan prikaz ili proverljiv HTML fajl. Codex CLI ne dobija grafički interfejs samom promenom instrukcija.
8. Vizuali se izvode iz canonical lekcije i relevantnih izvora. Ne stvaraj drugi curriculum, paralelni profil ili odvojeni napredak.

## Application upgrade gate

Ovaj SOP aktivira način rada dokumentarnog CMO OS-a. Nije implementacija web aplikacije. Pre izmene postojeće učionice pronađi stvarni source projekat, njegove instrukcije i build/QA tok. Na baseline-u od 2026-11-01 repo `aleksandarLazic1998/cmo` nije imao `package.json`, lockfile ni izvorni frontend. Od 2026-11-04 aplikacioni source postoji u `apps/mentor/` sa sopstvenim build/test tokom (ADR 009); izmene učionice idu tamo.

Pilot počinje jednom lesson vizualizacijom, zatim proverom matematičke tačnosti, nastavne faze i prikaza na tabletu. Tek nakon uspešnog pilota proširuj na sledeće teme; ne označavaj svih 49 lekcija kao vizuelno nadograđene bez provere svake.

## Official capability references

- [Models and available controls](https://learn.chatgpt.com/docs/models)
- [Model selection](https://learn.chatgpt.com/docs/model-selection)
- [File and HTML previews](https://learn.chatgpt.com/docs/artifacts-viewer)

Ovi izvori opisuju platformu, ne dokazuju da određeni model bolje predaje ovom učeniku. Preporuke proveri na istom zadatku i istim izvorima.
