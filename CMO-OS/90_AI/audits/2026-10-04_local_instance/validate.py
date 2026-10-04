"""Read-only audit of the local curriculum and inherited source evidence.

Run: python3 90_AI/audits/2026-10-04_local_instance/validate.py
Writes only results.json beside this script; never updates learning or source files.
PDF extraction verifies artifacts, not new semantic reading or student competence.
"""
from pathlib import Path
from collections import Counter
import hashlib
import importlib.metadata
import json
import re
import subprocess
import sys
from urllib.parse import unquote
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[3]
REPO = ROOT.parent
OUT = Path(__file__).with_name('results.json')
results = {'scope': 'local instance and inherited artifact verification', 'failures': [], 'lessons': [], 'books': [], 'historical_notes': []}
DOCUMENTS_ONLY = '--documents-only' in sys.argv

def check(ok, message):
    if not ok:
        results['failures'].append(message)
    return bool(ok)

def digest(p):
    with p.open('rb') as f:
        return hashlib.file_digest(f, 'sha256').hexdigest()

results['tools'] = {'python': sys.version.split()[0], 'pypdf': importlib.metadata.version('pypdf'), 'pdftotext': subprocess.run(['pdftotext', '-v'], capture_output=True, text=True).stderr.splitlines()[0]}
files = [p for p in REPO.rglob('*') if p.is_file() and '.git' not in p.parts]
results['inventory'] = dict(Counter(p.suffix for p in files))
for p in [x for x in files if x.suffix == '.md']:
    s = p.read_text(encoding='utf-8')
    historical = '_archive' in p.parts or ('90_AI' in p.parts and 'audits' in p.parts and '2026-10-04_local_instance' not in p.parts)
    if not s.strip():
        (results['historical_notes'] if historical else results['failures']).append('Empty document: ' + str(p.relative_to(REPO)))
    check('\ufffd' not in s, 'Replacement character in ' + str(p.relative_to(REPO)))
    for _, dst in re.findall(r'\[([^\]]+)\]\(([^)]+)\)', s):
        dst = unquote(dst.split('#')[0].strip('<>'))
        if not dst or re.match(r'[a-z]+:', dst):
            continue
        if not (p.parent / dst).exists():
            (results['historical_notes'] if historical else results['failures']).append('Broken link: ' + str(p.relative_to(REPO)) + ' -> ' + dst)

catalog = (ROOT/'02_Lessons/LESSON_CATALOG.md').read_text()
by_id = {}
for level_section in re.split(r'(?=^## Level \d+)', catalog, flags=re.M)[1:]:
    level = int(re.match(r'## Level (\d+)', level_section)[1])
    for row in re.findall(r'^\| (\d+) \| ([^|]+) \| ([^|]+) \| ([^|]+) \|', level_section, re.M):
        bid, title, objective, prerequisite = [x.strip() for x in row]
        check(bid not in by_id, 'Duplicate catalog ID ' + bid)
        by_id[bid] = {'level': level, 'title': title, 'objective': objective, 'prerequisite': prerequisite}
check(len(by_id) == 49, 'Catalog must have 49 lessons')
lesson_files = list((ROOT/'02_Lessons').glob('Level_*/*.md'))
check(len(lesson_files) == 49, 'Must have 49 authored lesson files')
bkb = (ROOT/'11_Research/Book_Knowledge_Base.md').read_text()
concept_ids = re.findall(r'^### (BKB-[A-Z]+-\d+) ', bkb, re.M)
check(len(concept_ids) == len(set(concept_ids)), 'Duplicate BKB concept IDs')
graph = {}
for p in sorted(lesson_files):
    s = p.read_text()
    bid = re.match(r'# Lesson (\d+) —', s)[1]
    item = by_id.get(bid)
    if not check(item is not None, 'Uncatalogued lesson ' + bid):
        continue
    check(p.parent.name == f"Level_{item['level']}", 'Level directory mismatch ' + bid)
    check(s.splitlines()[0] == f"# Lesson {bid} — {item['title']}", 'Title mismatch ' + bid)
    check(f"level: `{item['level']} —" in s, 'Level metadata mismatch ' + bid)
    check(f"prerequisite: `{item['prerequisite']}`" in s, 'Prerequisite mismatch ' + bid)
    check(item['objective'] in s, 'Objective missing ' + bid)
    for header in ['Learning objective', 'Teach & explain', 'Visual model', 'New terms', 'Practical exercise', 'Assessment rubric', 'Sources and limits']:
        check('## ' + header in s, 'Missing ' + header + ' in ' + bid)
    check('evidence_mode: `[FIXTURE]`' in s and '### Evidence contract' in s, 'Evidence contract missing ' + bid)
    for field in ['Source / method', 'Period / as-of', 'Grain / population', 'Unit / currency', 'VAT / tax basis', 'Inclusions', 'Exclusions', 'Assumptions', 'Formula / denominator']:
        check(f'**{field}:**' in s, 'Missing contract field ' + field + ' in ' + bid)
    check('80/100' in s and '15/25' in s and 'demonstriranu primenu' in s and 'obrazloženu odluku' in s and 'ispravljene ključne greške' in s, 'Incomplete canonical pass gate ' + bid)
    for cid in re.findall(r'`(BKB-[A-Z]+-\d+)`', s):
        check(cid in concept_ids, 'Missing source concept ' + cid + ' in ' + bid)
    prereq = item['prerequisite']
    if prereq == 'Nema':
        deps = []
    elif prereq.startswith('Level '):
        previous = int(prereq.split()[1])
        deps = [k for k,v in by_id.items() if v['level'] == previous]
        check(bool(deps) and previous < item['level'], 'Invalid level prerequisite ' + bid)
    else:
        deps = [prereq]
    graph[bid] = deps
    results['lessons'].append({'id': bid, 'level': item['level'], 'path': str(p.relative_to(ROOT)), 'dependencies': deps, 'structural_check': 'executed'})

visited, active = set(), set()
def visit(bid):
    if not check(bid in graph, 'Missing dependency ' + bid): return
    if not check(bid not in active, 'Dependency cycle ' + bid): return
    if bid in visited: return
    active.add(bid)
    for dependency in graph[bid]: visit(dependency)
    active.remove(bid)
    visited.add(bid)
for bid in graph: visit(bid)

ledger = (ROOT/'11_Research/book_acquisition/Book_Reading_Ledger.md').read_text()
statuses = {bid: (int(pages), status) for bid,pages,status in re.findall(r'^\| (BK-\d+) \| [^|]+ \| (\d+) \| \d+ \| `([^`]+)`', ledger, re.M)}
source_rows = re.findall(r'^\| (BK-\d+) \| `([^`]+)` \| ([\d,]+) \| `([a-f0-9]{64})`', ledger, re.M)
check(len(source_rows) == 20 and len({r[0] for r in source_rows}) == 20, 'Source ledger count or duplicate ID')
check(len({r[3] for r in source_rows}) == 20, 'Duplicate source bytes')
if DOCUMENTS_ONLY:
    # Reuse expensive extraction ONLY when its source, coverage and visual
    # evidence are still identical. New failures cannot be cleared by caching.
    previous = json.loads(OUT.read_text())
    prior_rows = {b['id']:b for b in previous['books']}
    for bid, fn, size, expected_hash in source_rows:
        old = prior_rows[bid]
        if digest(REPO/'Books'/fn) != old['sha256']:
            raise SystemExit('Cached source changed: ' + bid)
    manifest = json.loads((ROOT/'_archive/local_instance_2026-10-04/baseline_manifest.json').read_text())
    for name, expected in manifest['files'].items():
        if '/coverage/' in name or '/tmp/pdfs/' in name or '/2026-08-23_full_book_corpus/evidence/' in name:
            if digest(REPO/name) != expected:
                raise SystemExit('Cached source evidence changed: ' + name)
    results['books'] = previous['books']
    results['failures'].extend(f for f in previous['failures'] if re.match(r'(Range |Source |PDF |Coverage |Visual |Render |Extraction |Extracted |Incomplete inherited)',f))
    results['source_extraction_reused'] = True
for bid, fn, size, expected_hash in ([] if DOCUMENTS_ONLY else source_rows):
    pdf = REPO/'Books'/fn
    expected_pages, inherited_status = statuses[bid]
    info = subprocess.run(['pdfinfo', str(pdf)], capture_output=True, text=True)
    check(info.returncode == 0, 'PDF unreadable ' + bid)
    pages = int(re.search(r'^Pages:\s+(\d+)', info.stdout, re.M)[1])
    book = {'id':bid, 'filename':fn, 'pages':pages, 'inherited_status':inherited_status, 'sha256':digest(pdf), 'bytes':pdf.stat().st_size}
    check(book['sha256'] == expected_hash, 'Source hash mismatch ' + bid)
    check(book['bytes'] == int(size.replace(',','')), 'Source size mismatch ' + bid)
    check(pages == expected_pages, 'Source page count mismatch ' + bid)
    if inherited_status == 'COMPLETED':
        note, = (ROOT/'11_Research/book_acquisition/notes').glob(bid+'_*.md')
        coverage = ROOT/'11_Research/book_acquisition/coverage'/f'{bid}_coverage.md'
        audit = ROOT/'90_AI/audits/2026-08-23_full_book_corpus'/f'{bid}_AUDIT.md'
        check(note.stat().st_size > 0 and coverage.exists() and audit.exists(), 'Incomplete inherited source evidence ' + bid)
        c = coverage.read_text()
        check(expected_hash in c, 'Coverage source identity mismatch ' + bid)
        book['note_headers'] = re.findall(r'^## .+', note.read_text(), re.M)
        book['rendered_pages'] = len(list((ROOT/'tmp/pdfs/full_corpus'/bid/'rendered').glob('page-*.png')))
        # BK-013 documents only one low-text visual exception, rather than all-page rendering.
        check(book['rendered_pages'] == (1 if bid == 'BK-013' else pages), 'Render count mismatch ' + bid)
        visual_refs = re.findall(r'`([^`\n]+\.png)`[^\n]*`([a-f0-9]{64})`', c)
        book['visual_hash_checks'] = 0
        for relative, expected in visual_refs:
            path = (ROOT/'90_AI/audits/2026-08-23_full_book_corpus/evidence'/relative
                    if '/' not in relative else ROOT/relative)
            check(path.exists() and digest(path) == expected, 'Visual evidence hash mismatch ' + bid + ': ' + relative)
            book['visual_hash_checks'] += 1
        if 'pypdf' in c.split('Extraction method:',1)[1].split('\n',1)[0]:
            texts = [(page.extract_text() or '').strip() for page in PdfReader(pdf).pages]
            book['extractor'] = 'pypdf'
        else:
            extracted = subprocess.run(['pdftotext','-layout',str(pdf),'-'], capture_output=True, text=True)
            check(extracted.returncode == 0, 'Extraction failed ' + bid)
            texts = extracted.stdout.split('\f')
            if len(texts) == pages+1 and not texts[-1].strip(): texts.pop()
            texts = [t.strip() for t in texts]
            book['extractor'] = 'pdftotext -layout'
        check(len(texts) == pages, 'Extracted page count mismatch ' + bid)
        book['text_pages_current'] = sum(bool(t) for t in texts)
        rows = re.findall(r'^\| (\d+)[–-](\d+) \| (\d+) \| ([\d,]+) \| `([a-f0-9]{64})`', c, re.M)
        if bid == 'BK-003':
            rows = [(i,i,1,chars,sha) for i,chars,sha in re.findall(r'^\| (\d+) \| ([\d,]+) \| `([a-f0-9]{64})`',c,re.M)]
        book['range_checks'] = []
        covered = []
        for start,end,count,chars,expected in rows:
            start,end,count = int(start),int(end),int(count)
            selected = texts[start-1:end]
            # BK-013 used newline-wrapped form feeds; other inherited ranges
            # use a bare form feed. Verified against multiple source hashes.
            separator = '\n\f\n' if bid == 'BK-013' else '\f'
            observed = hashlib.sha256(separator.join(selected).encode()).hexdigest()
            char_count = sum(map(len, selected))
            check(end-start+1 == count, 'Coverage count mismatch ' + bid)
            check(char_count == int(chars.replace(',','')), 'Range character count mismatch ' + bid + f' {start}-{end}')
            check(observed == expected, 'Range hash mismatch ' + bid + f' {start}-{end}')
            covered.extend(range(start,end+1))
            book['range_checks'].append({'start':start,'end':end,'chars':char_count,'sha256_current':observed,'sha256_inherited':expected,'chars_inherited':int(chars.replace(',','')),'hash_matches':observed==expected})
        check(covered == list(range(1,pages+1)), 'Coverage gap/overlap ' + bid)
    results['books'].append(book)
    print('Verified',bid,flush=True)

progress = (ROOT/'10_Daily/Learning_Progress.md').read_text()
check('student: Aleksandar' in progress and 'learning_phase: Not Started' in progress, 'Incorrect initial identity/phase')
check(progress.count('| `[UNKNOWN]` | None | Not assessed |') == 10, 'Competency initialization mismatch')
check(progress.count('| Not introduced | Not assessed |') == 8, 'Inherited concept exposure not reset')
check('Last completed lesson: None' in progress and 'Last assessment score: None' in progress, 'Inherited assessment state')
notes = list((ROOT/'11_Research/book_acquisition/notes').glob('*.md'))
check(len(notes) == 18, 'Expected 18 inherited whole-book notes')
for bid,(_, status) in statuses.items():
    if status == 'COMPLETED':
        check(len(list((ROOT/'11_Research/book_acquisition/notes').glob(bid+'_*.md'))) == 1, 'Missing or duplicate source note '+bid)
for p in notes:
    s=p.read_text()
    if '## CMO OS connections' in s:
        section=s.split('## CMO OS connections',1)[1].split('\n## ',1)[0]
        for start,end in re.findall(r'Lessons (\d+)[–-](\d+)',section):
            for number in range(int(start),int(end)+1):
                check(f'{number:03d}' in by_id, 'Invalid note lesson ID '+str(number)+' in '+p.name)

for p in lesson_files:
    terms = p.read_text().split('## New terms',1)[1].split('\n## ',1)[0]
    for local, english in re.findall(r'\*\*([^*\n]+?) / ([^*\n]+?):\*\*',terms):
        check(local != english or local == 'Marketing', 'Missing Serbian term label: '+english+' in '+p.name)

results['counts'] = {'lesson_files':len(lesson_files),'catalog_ids':len(by_id),'levels':len(set(v['level'] for v in by_id.values())),'dependency_nodes_checked':len(visited),'books':len(results['books']),'valid_sources':sum(b['inherited_status']=='COMPLETED' for b in results['books']),'valid_pages':sum(b['pages'] for b in results['books'] if b['inherited_status']=='COMPLETED')}
results['outcome'] = 'PASS' if not results['failures'] else 'FAIL'
OUT.write_text(json.dumps(results,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'outcome':results['outcome'],'counts':results['counts'],'failures':results['failures'],'historical_notes':results['historical_notes']},ensure_ascii=False,indent=2))
sys.exit(bool(results['failures']))
