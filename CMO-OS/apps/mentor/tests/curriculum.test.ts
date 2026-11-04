import { describe, it, expect } from 'vitest';
import { loadCatalog, prerequisiteIds, unmetPrerequisites, nextLesson } from '@/lib/curriculum/catalog';
import { loadLesson } from '@/lib/curriculum/lesson';
import { REAL_ROOT } from './helpers';

describe('canonical curriculum (read-only)', () => {
  const catalog = loadCatalog(REAL_ROOT);
  it('has 54 lessons with unique IDs', () => {
    expect(catalog).toHaveLength(54);
    expect(new Set(catalog.map((e) => e.id)).size).toBe(54);
  });
  it('resolves every prerequisite', () => {
    for (const e of catalog) expect(() => prerequisiteIds(e, catalog)).not.toThrow();
  });
  it('locks 002 until 001 is completed; 101 requires all of Level 0', () => {
    expect(unmetPrerequisites('001', new Set(), catalog)).toEqual([]);
    expect(unmetPrerequisites('002', new Set(), catalog)).toEqual(['001']);
    expect(unmetPrerequisites('101', new Set(['001', '002']), catalog)).toEqual(['003']);
    expect(nextLesson('001', catalog)?.id).toBe('002');
    expect(unmetPrerequisites('1005', new Set(['1004']), catalog)).toEqual(['1006']);
    expect(nextLesson('1004', catalog)?.id).toBe('1006');
  });
  it('parses Lesson 001 sections from the canonical file', () => {
    const doc = loadLesson(REAL_ROOT, '001');
    expect(doc.title).toBe('Kako kompanija stvara prihod, trošak i profit');
    expect(doc.sections['Teach & explain']).toContain('Prihod nije zarada');
    expect(Object.keys(doc.sections)).toContain('Practical exercise');
  });
});
