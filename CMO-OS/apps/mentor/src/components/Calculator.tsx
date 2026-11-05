'use client';
import { useState } from 'react';

const fmt = new Intl.NumberFormat('sr-Latn-RS', { maximumFractionDigits: 2 });

/** Guided-example simulator. Explains cause and effect; it is not an assessment. */
export function Calculator() {
  const [price, setPrice] = useState(60000);
  const [cost, setCost] = useState(50000);
  const [qty, setQty] = useState(1);
  const [opex, setOpex] = useState(3000);
  const revenue = price * qty;
  const cogs = cost * qty;
  const gross = revenue - cogs;
  const margin = revenue === 0 ? null : (gross / revenue) * 100;
  const remaining = gross - opex * qty;
  const items: [string, number][] = [['Prihod', revenue], ['Trošak prodate robe', cogs], ['Operativni trošak', opex * qty], ['Preostali doprinos', remaining]];
  const scale = Math.max(1, ...items.map(([, v]) => Math.abs(v)));
  const field = (label: string, value: number, set: (n: number) => void, step: number) => (
    <div>
      <label>{label}</label>
      <input type="number" inputMode="numeric" min={0} step={step} value={value} onChange={(e) => set(Math.max(0, Number(e.target.value) || 0))} />
    </div>
  );
  return (
    <div className="card" aria-label="Simulator prihoda i bruto profita">
      <p><span className="pill">[FIXTURE]</span> RSD · ista poreska osnova · PDV, povrati i ostali rashodi nisu modelovani · količina ne zavisi od cene.</p>
      <div className="fields">
        {field('Prodajna cena (RSD/kom)', price, setPrice, 1000)}
        {field('Nabavna cena (RSD/kom)', cost, setCost, 500)}
        {field('Količina (kom)', qty, setQty, 1)}
        {field('Operativni trošak (RSD/kom)', opex, setOpex, 500)}
      </div>
      <table aria-live="polite">
        <tbody>
          <tr><th>Prihod = cena × količina</th><td>{fmt.format(revenue)} RSD</td></tr>
          <tr><th>Bruto profit = prihod − trošak prodate robe</th><td>{fmt.format(gross)} RSD</td></tr>
          <tr><th>Bruto marža = bruto profit ÷ prihod × 100</th><td>{margin === null ? 'Nije definisana (prihod 0)' : `${fmt.format(margin)} %`}</td></tr>
          <tr><th>Doprinos posle navedenog operativnog troška</th><td>{fmt.format(remaining)} RSD</td></tr>
          <tr><th>Puni neto profit firme</th><td>[UNKNOWN] — nedostaju ostali rashodi, kamate i porezi</td></tr>
        </tbody>
      </table>
      <div aria-hidden="true">
        {items.map(([l, v]) => (
          <div key={l} style={{ margin: '6px 0' }}>
            <div className="row" style={{ justifyContent: 'space-between' }}><small>{l}</small><small>{fmt.format(v)} RSD</small></div>
            <div className={`bar ${v < 0 ? 'bad' : ''}`}><span style={{ width: `${(Math.abs(v) / scale) * 100}%` }} /></div>
          </div>
        ))}
      </div>
      <button type="button" onClick={() => { setPrice(60000); setCost(50000); setQty(1); setOpex(3000); }}>Vrati primer telefona</button>
    </div>
  );
}
