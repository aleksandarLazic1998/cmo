import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export const PROGRESS_REL = '10_Daily/Learning_Progress.md';
export const BACKUP_REL = '_archive/learning_progress_backups';

const REQUIRED_HEADINGS = ['## Current state', '## Knowledge trace', '## Completed lessons', '## Assessment history', '## Activity log', '## Update rule'];

export type ProgressSnapshot = { student: string; currentLesson: string; completed: Set<string>; raw: string; sha256: string };

export function sha256(s: string) {
  return crypto.createHash('sha256').update(s).digest('hex');
}

export function validateStructure(md: string): string[] {
  const errors: string[] = [];
  if (!/^# Learning Progress/m.test(md)) errors.push('missing title');
  for (const h of REQUIRED_HEADINGS) if (!md.includes(`\n${h}\n`)) errors.push(`missing heading ${h}`);
  if (!/^student: .+$/m.test(md)) errors.push('missing student');
  if (!/^current_lesson: .+$/m.test(md)) errors.push('missing current_lesson');
  return errors;
}

function section(md: string, heading: string): string {
  const start = md.indexOf(`\n${heading}\n`);
  if (start < 0) return '';
  const rest = md.slice(start + heading.length + 2);
  const end = rest.search(/\n## /);
  return end < 0 ? rest : rest.slice(0, end);
}

/** Completed lessons are read only from the canonical "## Completed lessons" table. */
export function parseCompleted(md: string): Set<string> {
  const ids = new Set<string>();
  for (const line of section(md, '## Completed lessons').split('\n')) {
    const m = line.match(/^\|\s*(\d{3,4})\s*\|/);
    if (m) ids.add(m[1]!);
  }
  return ids;
}

export function readProgress(root: string): ProgressSnapshot {
  const raw = fs.readFileSync(path.join(root, PROGRESS_REL), 'utf8');
  const errors = validateStructure(raw);
  if (errors.length) throw new Error(`Learning_Progress.md failed validation: ${errors.join('; ')}`);
  return {
    student: raw.match(/^student: (.+)$/m)![1]!.trim(),
    currentLesson: raw.match(/^current_lesson: (.+)$/m)![1]!.trim(),
    completed: parseCompleted(raw),
    raw,
    sha256: sha256(raw),
  };
}

export type ConfirmedRecord = {
  lessonId: string;
  lessonTitle: string;
  date: string; // YYYY-MM-DD
  total: number;
  scores: { concept: number; numeric: number; application: number; decision: number };
  evidenceId: string;
  scenarioSummary: string;
  strongest: string;
  weakest: string;
  correctedKeyErrors: string[];
  next: { id: string; title: string; level: string } | null;
  conceptIds: string[];
};

const esc = (s: string) => s.replace(/\|/g, '\\|').replace(/\n/g, ' ');

/** Pure function: returns the updated Markdown. Throws on unexpected structure. */
export function applyConfirmed(md: string, r: ConfirmedRecord): string {
  const errors = validateStructure(md);
  if (errors.length) throw new Error(`refusing to update: ${errors.join('; ')}`);
  if (parseCompleted(md).has(r.lessonId)) throw new Error(`lesson ${r.lessonId} already recorded as completed`);
  let out = md;
  const s = r.scores;
  const scoreText = `${r.total}/100 (koncept ${s.concept}, račun ${s.numeric}, primena ${s.application}, odluka ${s.decision})`;

  out = out.replace(/^last_verified: .+$/m, `last_verified: ${r.date}`);
  if (r.next) {
    out = out.replace(/^current_lesson: .+$/m, `current_lesson: Lesson ${r.next.id} — ${r.next.title}`);
    out = out.replace(/^current_level: .+$/m, (line) => (r.next!.level ? `current_level: ${r.next!.level}` : line));
    out = out.replace(/^lesson_status: .+$/m, 'lesson_status: ACTIVE');
    out = out.replace(/^learning_phase: .+$/m, 'learning_phase: Not Started');
  }
  out = out.replace(/^- Last completed lesson: .+$/m, `- Last completed lesson: Lesson ${r.lessonId} — ${r.lessonTitle} (${r.date})`);
  out = out.replace(/^- Last assessment score: .+$/m, `- Last assessment score: ${scoreText}`);
  if (r.next) out = out.replace(/^- Next objective: .+$/m, `- Next objective: Kompletno teorijsko predavanje Lesson ${r.next.id}, zatim pitanja i pojašnjenja.`);

  // Completed lessons table.
  const completedBody = section(out, '## Completed lessons');
  const row = `| ${r.lessonId} | ${esc(r.lessonTitle)} | ${r.date} | ${r.total}/100 | ${r.evidenceId} |`;
  const newCompleted = completedBody.includes('| ID |')
    ? completedBody.replace(/\s*$/, `\n${row}\n\n`)
    : `\n\n| ID | Lesson | Completed | Score | Evidence |\n|---|---|---|---:|---|\n${row}\n\n`;
  out = replaceSection(out, '## Completed lessons', newCompleted);

  // Assessment history.
  const histBody = section(out, '## Assessment history');
  const hrow = `| ${r.date} | ${r.lessonId} | ${scoreText} | ${esc(r.scenarioSummary)} | Jača: ${esc(r.strongest)}; slabija: ${esc(r.weakest)} | ${r.correctedKeyErrors.length ? esc(r.correctedKeyErrors.join(', ')) : 'Nema'} | ${r.evidenceId} |`;
  const newHist = histBody.includes('| Date |')
    ? histBody.replace(/\s*$/, `\n${hrow}\n\n`)
    : `\n\n| Date | Lesson | Score | [FIXTURE] scenario | Domains | Corrected key errors | Evidence |\n|---|---|---|---|---|---|---|\n${hrow}\n\n`;
  out = replaceSection(out, '## Assessment history', newHist);

  // Activity log: append a row to the existing table.
  const actBody = section(out, '## Activity log');
  const arow = `| ${r.date} | Lesson ${r.lessonId} assessment (AI Mentor app) | ${r.evidenceId}; determinističke provere računa i gate-a + AI rubrika | ${scoreText}; prolaz potvrđen | ${r.next ? `Lesson ${r.next.id} — teorija` : 'Kraj kataloga'} |`;
  out = replaceSection(out, '## Activity log', actBody.replace(/\s*$/, `\n${arow}\n\n`));

  // Knowledge trace exposure for assessed concepts.
  for (const id of r.conceptIds) {
    out = out.replace(new RegExp(`^(\\| ${id} \\| [^|]+\\| )Not introduced \\| Not assessed \\|`, 'm'), `$1Introduced | Assessed ${r.date} (${r.evidenceId}) |`);
  }
  const after = validateStructure(out);
  if (after.length) throw new Error(`post-update validation failed: ${after.join('; ')}`);
  if (!parseCompleted(out).has(r.lessonId)) throw new Error('post-update validation failed: completed row missing');
  return out;
}

function replaceSection(md: string, heading: string, body: string): string {
  const marker = `\n${heading}\n`;
  const start = md.indexOf(marker);
  const bodyStart = start + marker.length;
  const rest = md.slice(bodyStart);
  const end = rest.search(/\n## /);
  const tail = end < 0 ? '' : rest.slice(end);
  return md.slice(0, bodyStart) + body.replace(/^\n+/, '\n').replace(/\n+$/, '\n') + tail;
}

/**
 * Backup + atomic write with optimistic concurrency: refuses if the file
 * changed since it was read (expectedSha256).
 */
export function writeProgressAtomic(root: string, newContent: string, expectedSha256: string, now = new Date()): { backup: string } {
  const file = path.join(root, PROGRESS_REL);
  const current = fs.readFileSync(file, 'utf8');
  if (sha256(current) !== expectedSha256) throw new Error('Learning_Progress.md changed since it was read; aborting.');
  const errors = validateStructure(newContent);
  if (errors.length) throw new Error(`refusing invalid content: ${errors.join('; ')}`);
  const backupDir = path.join(root, BACKUP_REL);
  fs.mkdirSync(backupDir, { recursive: true });
  const stamp = now.toISOString().replace(/[:.]/g, '-');
  const backup = path.join(backupDir, `Learning_Progress_${stamp}.md`);
  fs.writeFileSync(backup, current, { flag: 'wx' });
  const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
  const fd = fs.openSync(tmp, 'w');
  try {
    fs.writeSync(fd, newContent);
    fs.fsyncSync(fd);
  } finally {
    fs.closeSync(fd);
  }
  fs.renameSync(tmp, file);
  return { backup: path.relative(root, backup) };
}
