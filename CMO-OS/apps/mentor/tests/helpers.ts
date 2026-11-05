import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

export const REAL_ROOT = path.resolve(__dirname, '../../..');

/** Copies the minimal canonical tree into a temp dir so tests never touch real state. */
export function tempRoot(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'cmo-mentor-'));
  for (const rel of ['AUTHORITY.md', '02_Lessons/LESSON_CATALOG.md', '10_Daily/Learning_Progress.md', '90_AI/skills/cmo-core/references/moriarty-mentorship.md']) {
    fs.mkdirSync(path.dirname(path.join(dir, rel)), { recursive: true });
    fs.copyFileSync(path.join(REAL_ROOT, rel), path.join(dir, rel));
  }
  fs.cpSync(path.join(REAL_ROOT, '02_Lessons/Level_0'), path.join(dir, '02_Lessons/Level_0'), { recursive: true });
  return dir;
}
