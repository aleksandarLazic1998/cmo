import fs from 'node:fs';
import path from 'node:path';

export type LessonDoc = { id: string; title: string; file: string; sections: Record<string, string> };

/** Splits a canonical lesson Markdown file into "## " sections. Read-only. */
export function parseLesson(markdown: string, file: string): LessonDoc {
  const head = markdown.match(/^# Lesson (\d+) — (.+)$/m);
  if (!head) throw new Error(`Not a canonical lesson file: ${file}`);
  const sections: Record<string, string> = {};
  let current: string | null = null;
  const buf: string[] = [];
  const flush = () => {
    if (current) sections[current] = buf.join('\n').trim();
    buf.length = 0;
  };
  for (const line of markdown.split('\n')) {
    const h = line.match(/^## (.+)$/);
    if (h) {
      flush();
      current = h[1]!.trim();
    } else if (current) buf.push(line);
  }
  flush();
  return { id: head[1]!, title: head[2]!.trim(), file, sections };
}

export function findLessonFile(root: string, id: string): string {
  const lessonsDir = path.join(root, '02_Lessons');
  for (const level of fs.readdirSync(lessonsDir)) {
    const dir = path.join(lessonsDir, level);
    if (!/^Level_\d+$/.test(level) || !fs.statSync(dir).isDirectory()) continue;
    const f = fs.readdirSync(dir).find((n) => n.startsWith(`Lesson_${id}_`) && n.endsWith('.md'));
    if (f) return path.join(dir, f);
  }
  throw new Error(`Lesson ${id} not found`);
}

export function loadLesson(root: string, id: string): LessonDoc {
  const file = findLessonFile(root, id);
  return parseLesson(fs.readFileSync(file, 'utf8'), path.relative(root, file));
}

/** Section names safe to show during the THEORY stage (no tasks, no solutions). */
export const THEORY_SECTIONS = ['Learning objective', 'Teach & explain', 'New terms', 'Common mistake', 'Sources and limits'] as const;

/** Removes fenced code blocks (e.g. Mermaid) and external links for plain rendering. */
export function stripForDisplay(md: string): string {
  return md.replace(/```[\s\S]*?```/g, '').replace(/\n{3,}/g, '\n\n').trim();
}
