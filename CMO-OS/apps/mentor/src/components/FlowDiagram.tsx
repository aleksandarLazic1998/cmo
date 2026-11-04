/** Static SVG of the four Lesson 001 flows. Pure explanation; no task. */
export function FlowDiagram() {
  const rows = [
    { y: 20, label: 'Vrednost', nodes: ['Potreba kupca', 'Ponuda', 'Prodaja'] },
    { y: 90, label: 'Roba', nodes: ['Dobavljač', 'Prodavnica', 'Kupac'] },
    { y: 160, label: 'Novac', nodes: ['Kupac plaća', 'Prihod firme', 'Plaćanje dobavljaču'] },
    { y: 230, label: 'Rezultat', nodes: ['Prihod', '− trošak prodate robe', '= bruto profit'] },
  ];
  return (
    <svg className="diagram" viewBox="0 0 640 290" role="img" aria-labelledby="flow-title flow-desc">
      <title id="flow-title">Četiri povezana toka jedne prodaje</title>
      <desc id="flow-desc">Tok vrednosti od potrebe kupca do prodaje; tok robe od dobavljača do kupca; tok novca od kupca do firme i dobavljača; most rezultata od prihoda preko troška prodate robe do bruto profita.</desc>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
        </marker>
      </defs>
      {rows.map((r) => (
        <g key={r.label} style={{ color: 'var(--muted)' }}>
          <text x="4" y={r.y + 27} fontWeight="700">{r.label}</text>
          {r.nodes.map((n, i) => (
            <g key={n}>
              <rect x={100 + i * 180} y={r.y} width="150" height="44" rx="8" fill="var(--accent-soft)" stroke="var(--line)" />
              <text x={175 + i * 180} y={r.y + 27} textAnchor="middle">{n}</text>
              {i < r.nodes.length - 1 && <line x1={252 + i * 180} y1={r.y + 22} x2={278 + i * 180} y2={r.y + 22} stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />}
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}
