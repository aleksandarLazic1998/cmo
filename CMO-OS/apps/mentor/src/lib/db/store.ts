import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import type { DatabaseSync as DatabaseSyncType } from 'node:sqlite';
import type { Stage } from '../progression/stages';

// Loaded at runtime so bundlers do not try to resolve the built-in module.
const { DatabaseSync } = process.getBuiltinModule('node:sqlite') as typeof import('node:sqlite');

export type SessionRow = {
  id: string;
  lesson_id: string;
  stage: Stage;
  created_at: string;
  updated_at: string;
  practice_submissions: number;
  assessment_attempts: number;
  last_assessment_passed: number | null;
  remediation_required: number;
  confirmed_at: string | null;
  pending_confirmation: string | null;
};

export type AttemptRow = {
  id: number;
  session_id: string;
  kind: 'practice' | 'assessment' | 'remediation';
  attempt_no: number;
  scenario: string | null;
  answer: string;
  result: string;
  passed: number | null;
  injection_flags: string;
  created_at: string;
};

const SCHEMA = `
PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;
CREATE TABLE IF NOT EXISTS meta (key TEXT PRIMARY KEY, value TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY, lesson_id TEXT NOT NULL, stage TEXT NOT NULL,
  created_at TEXT NOT NULL, updated_at TEXT NOT NULL,
  practice_submissions INTEGER NOT NULL DEFAULT 0, assessment_attempts INTEGER NOT NULL DEFAULT 0,
  last_assessment_passed INTEGER, remediation_required INTEGER NOT NULL DEFAULT 0,
  confirmed_at TEXT, pending_confirmation TEXT);
CREATE INDEX IF NOT EXISTS sessions_lesson ON sessions(lesson_id);
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT, session_id TEXT NOT NULL REFERENCES sessions(id),
  role TEXT NOT NULL CHECK (role IN ('student','mentor','system')), stage TEXT NOT NULL,
  text TEXT NOT NULL, meta TEXT NOT NULL DEFAULT '{}', created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS attempts (
  id INTEGER PRIMARY KEY AUTOINCREMENT, session_id TEXT NOT NULL REFERENCES sessions(id),
  kind TEXT NOT NULL CHECK (kind IN ('practice','assessment','remediation')), attempt_no INTEGER NOT NULL,
  scenario TEXT, answer TEXT NOT NULL, result TEXT NOT NULL, passed INTEGER,
  injection_flags TEXT NOT NULL DEFAULT '[]', created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS misconceptions (
  id INTEGER PRIMARY KEY AUTOINCREMENT, session_id TEXT NOT NULL REFERENCES sessions(id),
  attempt_id INTEGER NOT NULL REFERENCES attempts(id), code TEXT NOT NULL, severity TEXT NOT NULL,
  origin TEXT NOT NULL, description TEXT NOT NULL, remediated_at TEXT, created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS reviews (
  key TEXT PRIMARY KEY, kind TEXT NOT NULL, step INTEGER NOT NULL, due_at TEXT NOT NULL, updated_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY AUTOINCREMENT, session_id TEXT, type TEXT NOT NULL, detail TEXT NOT NULL, created_at TEXT NOT NULL);
`;

export class Store {
  readonly db: DatabaseSyncType;
  constructor(file: string) {
    if (file !== ':memory:') fs.mkdirSync(path.dirname(file), { recursive: true });
    this.db = new DatabaseSync(file);
    this.db.exec(SCHEMA);
    this.db.prepare("INSERT OR IGNORE INTO meta(key, value) VALUES ('schema_version', '1')").run();
  }
  close() { this.db.close(); }

  tx<T>(fn: () => T): T {
    this.db.exec('BEGIN IMMEDIATE');
    try {
      const r = fn();
      this.db.exec('COMMIT');
      return r;
    } catch (e) {
      this.db.exec('ROLLBACK');
      throw e;
    }
  }

  now() { return new Date().toISOString(); }

  createSession(lessonId: string): SessionRow {
    const id = crypto.randomUUID();
    const t = this.now();
    this.db.prepare('INSERT INTO sessions(id, lesson_id, stage, created_at, updated_at) VALUES (?,?,?,?,?)').run(id, lessonId, 'THEORY', t, t);
    this.event(id, 'session_created', { lessonId });
    return this.getSession(id)!;
  }
  getSession(id: string): SessionRow | undefined {
    return this.db.prepare('SELECT * FROM sessions WHERE id = ?').get(id) as SessionRow | undefined;
  }
  latestSession(lessonId: string): SessionRow | undefined {
    return this.db.prepare('SELECT * FROM sessions WHERE lesson_id = ? ORDER BY created_at DESC, rowid DESC LIMIT 1').get(lessonId) as SessionRow | undefined;
  }
  updateSession(id: string, patch: Partial<Omit<SessionRow, 'id' | 'lesson_id' | 'created_at'>>) {
    const keys = Object.keys(patch) as (keyof typeof patch)[];
    if (!keys.length) return;
    const allowed = new Set(['stage', 'updated_at', 'practice_submissions', 'assessment_attempts', 'last_assessment_passed', 'remediation_required', 'confirmed_at', 'pending_confirmation']);
    for (const k of keys) if (!allowed.has(k)) throw new Error(`illegal column ${k}`);
    const sets = keys.map((k) => `${k} = ?`).join(', ');
    this.db.prepare(`UPDATE sessions SET ${sets}, updated_at = ? WHERE id = ?`).run(...keys.map((k) => patch[k] as never), this.now(), id);
  }
  addMessage(sessionId: string, role: 'student' | 'mentor' | 'system', stage: string, text: string, meta: unknown = {}) {
    this.db.prepare('INSERT INTO messages(session_id, role, stage, text, meta, created_at) VALUES (?,?,?,?,?,?)').run(sessionId, role, stage, text, JSON.stringify(meta), this.now());
  }
  messages(sessionId: string, limit = 200) {
    return (this.db.prepare('SELECT role, stage, text, meta, created_at FROM messages WHERE session_id = ? ORDER BY id ASC LIMIT ?').all(sessionId, limit) as { role: string; stage: string; text: string; meta: string; created_at: string }[]).map((m) => ({ ...m, meta: JSON.parse(m.meta) }));
  }
  addAttempt(a: Omit<AttemptRow, 'id' | 'created_at'>): number {
    const r = this.db.prepare('INSERT INTO attempts(session_id, kind, attempt_no, scenario, answer, result, passed, injection_flags, created_at) VALUES (?,?,?,?,?,?,?,?,?)').run(a.session_id, a.kind, a.attempt_no, a.scenario, a.answer, a.result, a.passed, a.injection_flags, this.now());
    return Number(r.lastInsertRowid);
  }
  attempts(sessionId: string, kind?: AttemptRow['kind']): AttemptRow[] {
    return (kind
      ? this.db.prepare('SELECT * FROM attempts WHERE session_id = ? AND kind = ? ORDER BY id ASC').all(sessionId, kind)
      : this.db.prepare('SELECT * FROM attempts WHERE session_id = ? ORDER BY id ASC').all(sessionId)) as AttemptRow[];
  }
  addMisconception(sessionId: string, attemptId: number, code: string, severity: string, origin: string, description: string) {
    this.db.prepare('INSERT INTO misconceptions(session_id, attempt_id, code, severity, origin, description, created_at) VALUES (?,?,?,?,?,?,?)').run(sessionId, attemptId, code, severity, origin, description, this.now());
  }
  misconceptions(sessionId: string) {
    return this.db.prepare('SELECT code, severity, origin, description, remediated_at, created_at, attempt_id FROM misconceptions WHERE session_id = ? ORDER BY id ASC').all(sessionId) as { code: string; severity: string; origin: string; description: string; remediated_at: string | null; created_at: string; attempt_id: number }[];
  }
  remediateOpen(sessionId: string) {
    this.db.prepare('UPDATE misconceptions SET remediated_at = ? WHERE session_id = ? AND remediated_at IS NULL').run(this.now(), sessionId);
  }
  getReview(key: string) {
    return this.db.prepare('SELECT * FROM reviews WHERE key = ?').get(key) as { key: string; kind: string; step: number; due_at: string } | undefined;
  }
  upsertReview(key: string, kind: string, step: number, dueAt: string) {
    this.db.prepare('INSERT INTO reviews(key, kind, step, due_at, updated_at) VALUES (?,?,?,?,?) ON CONFLICT(key) DO UPDATE SET kind = excluded.kind, step = excluded.step, due_at = excluded.due_at, updated_at = excluded.updated_at').run(key, kind, step, dueAt, this.now());
  }
  reviews() {
    return this.db.prepare('SELECT key, kind, step, due_at FROM reviews ORDER BY due_at ASC').all() as { key: string; kind: string; step: number; due_at: string }[];
  }
  event(sessionId: string | null, type: string, detail: unknown) {
    this.db.prepare('INSERT INTO events(session_id, type, detail, created_at) VALUES (?,?,?,?)').run(sessionId, type, JSON.stringify(detail), this.now());
  }
}
