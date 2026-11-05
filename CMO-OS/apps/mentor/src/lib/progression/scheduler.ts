/** Simple expanding-interval spaced repetition (days). Deterministic for tests. */
export const INTERVALS_DAYS = [1, 3, 7, 16, 35, 90];

export type ReviewItem = { key: string; kind: 'concept' | 'misconception'; step: number; dueAt: string };

export function scheduleNext(prev: { step: number } | null, outcome: 'correct' | 'incorrect', now: Date): { step: number; dueAt: string } {
  const step = outcome === 'incorrect' ? 0 : Math.min((prev ? prev.step + 1 : 1), INTERVALS_DAYS.length - 1);
  const due = new Date(now.getTime() + INTERVALS_DAYS[step]! * 86400000);
  return { step, dueAt: due.toISOString() };
}
