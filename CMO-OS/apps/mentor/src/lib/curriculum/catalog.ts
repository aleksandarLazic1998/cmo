import fs from 'node:fs';
import path from 'node:path';

export type CatalogEntry = { id: string; level: number; title: string; objective: string; prerequisite: string };

export function parseCatalog(markdown: string): CatalogEntry[] {
  const entries: CatalogEntry[] = [];
  let level = -1;
  for (const line of markdown.split('\n')) {
    const h = line.match(/^## Level (\d+)/);
    if (h) level = Number(h[1]);
    const m = line.match(/^\| (\d{3,4}) \| ([^|]+) \| ([^|]+) \| ([^|]+) \|/);
    if (m && level >= 0) {
      entries.push({ id: m[1]!, level, title: m[2]!.trim(), objective: m[3]!.trim(), prerequisite: m[4]!.trim() });
    }
  }
  return entries;
}

export function loadCatalog(root: string): CatalogEntry[] {
  return parseCatalog(fs.readFileSync(path.join(root, '02_Lessons/LESSON_CATALOG.md'), 'utf8'));
}

/** Resolves catalog prerequisite text ("Nema", "001", "Level 0") into concrete lesson IDs. */
export function prerequisiteIds(entry: CatalogEntry, catalog: CatalogEntry[]): string[] {
  const p = entry.prerequisite;
  if (/^nema$/i.test(p)) return [];
  const lvl = p.match(/^Level (\d+)$/);
  if (lvl) return catalog.filter((e) => e.level === Number(lvl[1])).map((e) => e.id);
  const ids = p.match(/\d{3,4}/g);
  if (ids && ids.every((id) => catalog.some((e) => e.id === id))) return ids;
  throw new Error(`Unrecognised prerequisite "${p}" for lesson ${entry.id}`);
}

export function unmetPrerequisites(lessonId: string, completed: Set<string>, catalog: CatalogEntry[]): string[] {
  const entry = catalog.find((e) => e.id === lessonId);
  if (!entry) throw new Error(`Unknown lesson ${lessonId}`);
  return prerequisiteIds(entry, catalog).filter((id) => !completed.has(id));
}

export function nextLesson(lessonId: string, catalog: CatalogEntry[]): CatalogEntry | null {
  const i = catalog.findIndex((e) => e.id === lessonId);
  return i >= 0 && i + 1 < catalog.length ? catalog[i + 1]! : null;
}
