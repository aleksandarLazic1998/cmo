'use client';
import { useEffect, useState } from 'react';

type Dash = {
  student: string; currentLesson: string; completedCount: number; totalLessons: number;
  lessons: { id: string; level: number; title: string; completed: boolean; unlocked: boolean; unmet: string[]; interactive: boolean }[];
  reviewsDue: { key: string; due_at: string }[]; reviews: { key: string; kind: string; step: number; due_at: string }[];
  config: { provider: string; model: string; apiKeyConfigured: boolean; canonicalWrites: boolean };
};

export default function Home() {
  const [d, setD] = useState<Dash | null>(null);
  const [err, setErr] = useState<string | null>(null);
  useEffect(() => { fetch('/api/dashboard').then(async (r) => { const j = await r.json(); if (!r.ok) throw new Error(j.error); setD(j); }).catch((e) => setErr(String(e.message ?? e))); }, []);
  if (err) return <div className="error" role="alert">{err}</div>;
  if (!d) return <p>Učitavanje…</p>;
  const pct = Math.round((d.completedCount / d.totalLessons) * 100);
  return (
    <>
      <h1>Dobro došao, {d.student}.</h1>
      <div className="grid">
        <section className="card">
          <h2>Napredak (kanonski: 10_Daily/Learning_Progress.md)</h2>
          <p>Trenutna lekcija: <strong>{d.currentLesson}</strong></p>
          <p>{d.completedCount} / {d.totalLessons} potvrđenih lekcija</p>
          <div className="bar ok" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}><span style={{ width: `${pct}%` }} /></div>
          <h2>Lekcije</h2>
          <ul className="lessons">
            {d.lessons.map((l) => (
              <li key={l.id}>
                <span>{l.id} · {l.title}</span>
                <span>
                  {l.completed ? <span className="pill ok">Potvrđeno</span> : l.unlocked ? <span className="pill">Otključano</span> : <span className="pill bad" title={`Preduslovi: ${l.unmet.join(', ')}`}>Zaključano</span>}
                  {l.unlocked && l.interactive && !l.completed ? <a href={`/lesson/${l.id}`}>Otvori</a> : l.unlocked && !l.interactive ? <span className="muted">uskoro u aplikaciji</span> : null}
                </span>
              </li>
            ))}
          </ul>
        </section>
        <aside>
          <section className="card">
            <h2>AI veza</h2>
            <p>Provider: <strong>{d.config.provider}</strong>{d.config.provider === 'mock' ? ' (offline, bez jezičkog modela)' : ` · model ${d.config.model}`}</p>
            {d.config.provider === 'anthropic' && !d.config.apiKeyConfigured && <div className="error">ANTHROPIC_API_KEY nije podešen.</div>}
            <p>Kanonski upis napretka: <strong>{d.config.canonicalWrites ? 'uključen' : 'isključen'}</strong></p>
          </section>
          <section className="card">
            <h2>Ponavljanje</h2>
            {d.reviews.length === 0 ? <p className="muted">Raspored nastaje posle prve procene.</p> : (
              <ul>{d.reviews.map((r) => <li key={r.key}>{r.key} — {new Date(r.due_at).toLocaleDateString('sr-Latn-RS')}{d.reviewsDue.some((x) => x.key === r.key) ? ' · danas' : ''}</li>)}</ul>
            )}
          </section>
        </aside>
      </div>
    </>
  );
}
