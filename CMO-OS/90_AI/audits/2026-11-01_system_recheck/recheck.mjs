// Read-only documentary checks. Run from any directory; no packages or API calls.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const repo = path.dirname(root);
const inventoryArg = process.argv.indexOf('--inventory');
const inventory = inventoryArg < 0 ? null : JSON.parse(fs.readFileSync(process.argv[inventoryArg + 1], 'utf8'));
const remotePaths = new Set(inventory?.existing_link_targets ?? []);
const checks = [];
function check(name, passed, detail = '') { checks.push({ name, passed: Boolean(passed), detail }); }
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return ['_archive', 'tmp', '.git', 'audits'].includes(e.name) ? [] : walk(p);
    return e.name.endsWith('.md') ? [p] : [];
  });
}
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const docs = walk(root);
for (const p of docs) {
  const s = fs.readFileSync(p, 'utf8');
  check('nonempty UTF-8: ' + path.relative(root, p), s.trim() && !s.includes('\uFFFD'));
  for (const m of s.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    const target = decodeURIComponent(m[1].split('#')[0].replace(/^<|>$/g, ''));
    if (!target || /^[a-z]+:/i.test(target)) continue;
    const resolved = path.resolve(path.dirname(p), target);
    const relative = path.relative(repo, resolved).split(path.sep).join('/');
    check('local link: ' + path.relative(root, p), fs.existsSync(resolved) || remotePaths.has(relative), target);
  }
}
const catalog = new Map(); let level;
for (const line of read('02_Lessons/LESSON_CATALOG.md').split('\n')) {
  const h = line.match(/^## Level (\d+)/); if (h) level = Number(h[1]);
  const m = line.match(/^\| (\d+) \| ([^|]+) \| ([^|]+) \| ([^|]+) \|/);
  if (m) {
    check('unique catalog ID: ' + m[1], !catalog.has(m[1]));
    catalog.set(m[1], { level, title: m[2].trim(), objective: m[3].trim(), prerequisite: m[4].trim() });
  }
}
const concepts = [...read('11_Research/Book_Knowledge_Base.md').matchAll(/^### (BKB-[A-Z]+-\d+) /gm)].map(m => m[1]);
check('unique BKB concept IDs', concepts.length === new Set(concepts).size);
const lessonFiles = docs.filter(p => /[/\\]Level_\d+[/\\].*\.md$/.test(p));
check('one lesson per catalog entry', lessonFiles.length === catalog.size);
const seen = new Set(); const graph = new Map();
for (const p of lessonFiles) {
  const s = fs.readFileSync(p, 'utf8'); const m = s.match(/^# Lesson (\d+) — (.+)/);
  check('lesson heading: ' + path.basename(p), m); if (!m) continue;
  const id = m[1], row = catalog.get(id);
  check('unique lesson ID: ' + id, !seen.has(id)); seen.add(id);
  check('catalog entry: ' + id, row); if (!row) continue;
  check('title: ' + id, m[2] === row.title);
  check('level: ' + id, path.basename(path.dirname(p)) === 'Level_' + row.level);
  check('objective: ' + id, s.includes(row.objective));
  check('prerequisite: ' + id, s.includes('prerequisite: `' + row.prerequisite + '`'));
  check('fixture evidence: ' + id, s.includes('evidence_mode: `[FIXTURE]`'));
  for (const header of ['Learning objective', 'Teach & explain', 'Visual model', 'New terms', 'Practical exercise', 'Assessment rubric', 'Sources and limits']) check(header + ': ' + id, s.includes('## ' + header));
  check('pass gate: ' + id, ['80/100', '15/25', 'demonstriranu primenu', 'obrazloženu odluku', 'ispravljene ključne greške'].every(t => s.includes(t)));
  for (const c of s.matchAll(/`(BKB-[A-Z]+-\d+)`/g)) check('source concept: ' + id, concepts.includes(c[1]), c[1]);
  let deps = [];
  if (row.prerequisite.startsWith('Level ')) {
    const previous = Number(row.prerequisite.slice(6));
    deps = [...catalog].filter(([, r]) => r.level === previous).map(([key]) => key);
    check('earlier level prerequisite: ' + id, deps.length && previous < row.level);
  } else if (row.prerequisite !== 'Nema') deps = [row.prerequisite];
  graph.set(id, deps);
}
const visited = new Set(), visiting = new Set();
function visit(id) {
  check('dependency exists: ' + id, graph.has(id)); if (!graph.has(id)) return;
  check('no dependency cycle: ' + id, !visiting.has(id)); if (visiting.has(id) || visited.has(id)) return;
  visiting.add(id); for (const dep of graph.get(id)) visit(dep); visiting.delete(id); visited.add(id);
}
for (const id of graph.keys()) visit(id);
// Validate shape only. A rerun must never require a particular student, lesson or zero progress.
const state = read('10_Daily/Learning_Progress.md');
for (const key of ['student', 'status', 'current_level', 'current_lesson', 'lesson_status', 'learning_phase', 'last_verified']) check('state field: ' + key, new RegExp('^' + key + ': .+', 'm').test(state));
const current = state.match(/^current_lesson: Lesson (\d+)/m);
check('current lesson exists', current && catalog.has(current[1]));
const output = {
  scope: 'documentary structure and references; targeted policy review recorded separately',
  baseline: inventory?.baseline_commit ?? 'current local filesystem; commit not supplied',
  link_method: inventory ? 'local files plus pinned GitHub tree metadata' : 'local filesystem',
  counts: { active_documents: docs.length, lessons: lessonFiles.length, catalog_ids: catalog.size, levels: new Set([...catalog.values()].map(r => r.level)).size, source_concepts: concepts.length, checks: checks.length },
  status: checks.every(c => c.passed) ? 'PASS' : 'FAIL',
  failures: checks.filter(c => !c.passed),
  not_run: ['PDF byte or extraction verification', 'new full-book semantic reading', 'application or browser runtime', 'student assessment', 'independent second-model review'],
};
console.log(JSON.stringify(output, null, 2));
process.exitCode = output.status === 'PASS' ? 0 : 1;
