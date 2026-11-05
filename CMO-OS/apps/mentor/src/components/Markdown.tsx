import React from 'react';

/** Minimal, safe Markdown renderer (no raw HTML) for canonical lesson text. */
function inline(text: string, key: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith('**')) parts.push(<strong key={`${key}-${i++}`}>{tok.slice(2, -2)}</strong>);
    else if (tok.startsWith('`')) parts.push(<code key={`${key}-${i++}`}>{tok.slice(1, -1)}</code>);
    else {
      const lm = tok.match(/^\[([^\]]+)\]\(([^)]+)\)$/)!;
      const href = lm[2]!;
      parts.push(/^https:\/\//.test(href) ? <a key={`${key}-${i++}`} href={href} target="_blank" rel="noreferrer noopener">{lm[1]}</a> : <span key={`${key}-${i++}`}>{lm[1]}</span>);
    }
    last = m.index + tok.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export function Markdown({ text }: { text: string }) {
  const lines = text.split('\n');
  const out: React.ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i]!;
    if (!line.trim()) { i++; continue; }
    const h = line.match(/^(#{3,4}) (.+)/);
    if (h) { out.push(<h3 key={i}>{inline(h[2]!, `h${i}`)}</h3>); i++; continue; }
    if (line.startsWith('|')) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i]!.startsWith('|')) {
        if (!/^\|[\s|:-]+\|$/.test(lines[i]!)) rows.push(lines[i]!.slice(1, -1).split('|').map((c) => c.trim()));
        i++;
      }
      const [head, ...body] = rows;
      out.push(
        <table key={`t${i}`}>
          <thead><tr>{head!.map((c, j) => <th key={j}>{inline(c, `th${i}${j}`)}</th>)}</tr></thead>
          <tbody>{body.map((r, k) => <tr key={k}>{r.map((c, j) => <td key={j}>{inline(c, `td${i}${k}${j}`)}</td>)}</tr>)}</tbody>
        </table>,
      );
      continue;
    }
    if (/^(\d+\.|-) /.test(line)) {
      const ordered = /^\d+\./.test(line);
      const items: string[] = [];
      while (i < lines.length && /^(\d+\.|-) /.test(lines[i]!)) { items.push(lines[i]!.replace(/^(\d+\.|-) /, '')); i++; }
      const children = items.map((it, k) => <li key={k}>{inline(it, `li${i}${k}`)}</li>);
      out.push(ordered ? <ol key={`l${i}`}>{children}</ol> : <ul key={`l${i}`}>{children}</ul>);
      continue;
    }
    if (line.startsWith('> ')) { out.push(<blockquote key={i} className="muted">{inline(line.slice(2), `q${i}`)}</blockquote>); i++; continue; }
    const para: string[] = [];
    while (i < lines.length && lines[i]!.trim() && !/^(#{3,4} |\||(\d+\.|-) |> )/.test(lines[i]!)) { para.push(lines[i]!); i++; }
    out.push(<p key={`p${i}`}>{inline(para.join(' '), `p${i}`)}</p>);
  }
  return <>{out}</>;
}
