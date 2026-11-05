import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { applyConfirmed, parseCompleted, readProgress, sha256, validateStructure, writeProgressAtomic, PROGRESS_REL, type ConfirmedRecord } from '@/lib/progress/canonical';
import { REAL_ROOT, tempRoot } from './helpers';

const record: ConfirmedRecord = {
  lessonId: '001', lessonTitle: 'Kako kompanija stvara prihod, trošak i profit', date: '2026-11-04', total: 90,
  scores: { concept: 22, numeric: 25, application: 20, decision: 23 }, evidenceId: 'mentor-app:test:assessment-1',
  scenarioSummary: '2 × tablet', strongest: 'numeric', weakest: 'application', correctedKeyErrors: [],
  next: { id: '002', title: 'Kako funkcioniše ceo poslovni sistem', level: 'Level 0 — Business Awareness' }, conceptIds: ['KG-FIN-001', 'KG-FIN-003'],
};

describe('canonical Learning_Progress.md protection', () => {
  const real = fs.readFileSync(path.join(REAL_ROOT, PROGRESS_REL), 'utf8');
  it('real file validates and has no completed lessons (read-only check)', () => {
    expect(validateStructure(real)).toEqual([]);
    expect(parseCompleted(real).size).toBe(0);
  });
  it('applyConfirmed preserves existing content and appends evidence', () => {
    const out = applyConfirmed(real, record);
    expect(parseCompleted(out)).toEqual(new Set(['001']));
    expect(out).toContain('student: Aleksandar');
    expect(out).toContain('| 2026-10-04 | Administrative initialization |');
    expect(out).toContain('mentor-app:test:assessment-1');
    expect(out).toContain('| KG-FIN-001 | Prihod | Introduced | Assessed 2026-11-04');
    expect(out).toContain('| KG-CUS-001 | Potreba kupca | Not introduced |');
    expect(out).toContain('## Update rule');
    expect(() => applyConfirmed(out, record)).toThrow(/already/);
  });
  it('refuses to edit a malformed file', () => {
    expect(() => applyConfirmed('# Something else', record)).toThrow(/refusing/);
  });
  it('atomic write makes a byte-identical backup and refuses concurrent modification', () => {
    const root = tempRoot();
    const snap = readProgress(root);
    const next = applyConfirmed(snap.raw, record);
    expect(() => writeProgressAtomic(root, next, sha256('stale'))).toThrow(/changed/);
    expect(fs.readFileSync(path.join(root, PROGRESS_REL), 'utf8')).toBe(snap.raw);
    const { backup } = writeProgressAtomic(root, next, snap.sha256);
    expect(fs.readFileSync(path.join(root, backup), 'utf8')).toBe(snap.raw);
    expect(fs.readFileSync(path.join(root, PROGRESS_REL), 'utf8')).toBe(next);
    expect(fs.readdirSync(path.dirname(path.join(root, PROGRESS_REL))).filter((f) => f.endsWith('.tmp'))).toEqual([]);
    expect(() => writeProgressAtomic(root, '# broken', sha256(next))).toThrow(/invalid/);
  });
});
