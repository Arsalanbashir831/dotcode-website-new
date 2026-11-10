import { ArrowLeftRight, Printer } from "lucide-react";

import type { FeatureGraphicKind } from "@/components/landing/data/catalog";


function Pos() {
  return (
    <div className="qa-vg qa-vg-invoice">
      <div className="qa-vg-invoice-head">
        <span className="qa-vg-logo">Q</span>
        <div>
          <strong>Sale #10482</strong>
          <small>Liberty outlet · Counter 2</small>
        </div>
        <span className="qa-vg-pill qa-vg-pill-warm">Paid</span>
      </div>
      <table className="qa-vg-table" style={{ marginTop: 14 }}>
        <thead><tr><th>Item</th><th>Qty</th><th>Amount</th></tr></thead>
        <tbody>
          <tr><td>Lawn 3-pc suit · M</td><td>1</td><td>4,500</td></tr>
          <tr><td>Kids kurta · 6Y</td><td>2</td><td>2,400</td></tr>
          <tr><td>Discount 5%</td><td></td><td className="is-credit">−300</td></tr>
        </tbody>
      </table>
      <div className="qa-vg-total"><span>Total</span><strong>Rs 6,600</strong></div>
      <div className="qa-vg-invoice-foot">
        <div className="qa-vg-chips">
          {["Cash", "Card", "Bank"].map((c, i) => (
            <span key={c} className={i === 0 ? "is-active" : undefined}>{c}</span>
          ))}
        </div>
        <span className="qa-vg-btn"><Printer />Print receipt</span>
      </div>
    </div>
  );
}

function Accounting() {
  const data = [[40, 28], [46, 30], [38, 31], [52, 33], [58, 34], [64, 36]];
  return (
    <div className="qa-vg">
      <div className="qa-vg-chips">
        {["Profit & loss", "Balance sheet", "Trial balance"].map((c, i) => (
          <span key={c} className={i === 0 ? "is-active" : undefined}>{c}</span>
        ))}
      </div>
      <div className="qa-vg-card">
        <div className="qa-vg-card-head"><strong>Sales vs expenses</strong><small>Last 6 months</small></div>
        <svg viewBox="0 0 260 100" className="qa-vg-svg" aria-hidden="true">
          {data.map(([sales, exp], i) => (
            <g key={i} transform={`translate(${10 + i * 42} 0)`}>
              <rect x="0" y={90 - sales} width="14" height={sales} rx="4" className="qa-vg-bar" />
              <rect x="17" y={90 - exp} width="14" height={exp} rx="4" className="qa-vg-bar-alt" />
            </g>
          ))}
        </svg>
        <div className="qa-vg-legend"><span><i className="rev" />Sales</span><span><i className="cost" />Expenses</span></div>
        <div className="qa-vg-total"><span>Net profit</span><strong>Rs 412,000</strong></div>
      </div>
    </div>
  );
}

function Outlets() {
  return (
    <div className="qa-vg">
      <div className="qa-vg-card">
        <div className="qa-vg-card-head"><strong>Today&apos;s sales</strong><span className="qa-vg-pill">3 outlets</span></div>
        <strong className="qa-vg-big">Rs 318,650</strong>
      </div>
      <div className="qa-vg-accounts">
        {[["Liberty", "182,400"], ["Gulberg", "96,250"], ["DHA", "40,000"]].map(([n, v]) => (
          <div key={n}><small>{n}</small><strong>{v}</strong></div>
        ))}
      </div>
      <div className="qa-vg-card qa-vg-retainer">
        <span className="qa-vg-icon"><ArrowLeftRight /></span>
        <div><strong>Transfer TR-0112</strong><small>Main warehouse → Gulberg</small></div>
        <strong className="qa-vg-amount">48 pcs</strong>
      </div>
    </div>
  );
}

function Stock() {
  const rows = [
    ["Men's sandal · 42", 18, 11, 120],
    ["Ladies pump · 37", 2, 0, 14],
    ["School shoe · 4", 26, 19, 240],
  ] as const;
  return (
    <div className="qa-vg">
      <div className="qa-vg-card">
        <div className="qa-vg-card-head"><strong>Stock by location</strong><span className="qa-vg-pill qa-vg-pill-warm">1 low</span></div>
        <table className="qa-vg-table qa-vg-stock">
          <thead><tr><th>Item</th><th>Liberty</th><th>Gulberg</th><th>Warehouse</th></tr></thead>
          <tbody>
            {rows.map(([name, a, b, w]) => (
              <tr key={name}>
                <td>{name}</td>
                <td className={a < 5 ? "is-low" : undefined}>{a}</td>
                <td className={b < 5 ? "is-low" : undefined}>{b}</td>
                <td>{w}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="qa-vg-card qa-vg-tagrow">
        <span className="qa-vg-pill qa-vg-pill-warm">Reorder</span>
        <small>Ladies pump · 37 below minimum of 6</small>
        <strong>Order 12</strong>
      </div>
    </div>
  );
}

function Ledger() {
  return (
    <div className="qa-vg">
      <div className="qa-vg-card">
        <div className="qa-vg-card-head"><strong>Al-Madina Traders</strong><span className="qa-vg-pill qa-vg-pill-warm">1 overdue</span></div>
        <table className="qa-vg-table qa-vg-ledger">
          <thead><tr><th>Date</th><th>Entry</th><th>Amount</th><th>Balance</th></tr></thead>
          <tbody>
            <tr><td>03 Oct</td><td>Credit sale</td><td>120,000</td><td>120,000</td></tr>
            <tr><td>19 Oct</td><td>Payment</td><td className="is-credit">−80,000</td><td>40,000</td></tr>
          </tbody>
        </table>
        <div className="qa-vg-total"><span>Receivable</span><strong>Rs 40,000</strong></div>
      </div>
      <div className="qa-vg-card">
        <div className="qa-vg-card-head"><strong>Receivables aging</strong></div>
        <div className="qa-vg-aging" aria-hidden="true">
          <span style={{ flex: 52 }} /><span style={{ flex: 26 }} /><span style={{ flex: 14 }} /><span style={{ flex: 8 }} />
        </div>
        <div className="qa-vg-legend"><span>Current</span><span>1–30</span><span>31–60</span><span>60+</span></div>
      </div>
    </div>
  );
}

const graphics: Record<FeatureGraphicKind, () => React.JSX.Element> = {
  pos: Pos,
  accounting: Accounting,
  outlets: Outlets,
  stock: Stock,
  ledger: Ledger,
};

/** `label` is the screen-reader description of the example screen. */
export function FeatureGraphic({ kind, label }: { kind: FeatureGraphicKind; label: string }) {
  const Graphic = graphics[kind];
  return (
    <div
      className="qa-feature-graphic qa-feature-graphic-accounting"
      role="img"
      aria-label={label}
    >
      <div aria-hidden="true">
        <Graphic />
      </div>
    </div>
  );
}
