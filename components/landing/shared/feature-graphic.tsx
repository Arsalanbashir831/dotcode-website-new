import { Check, Repeat, Send } from "lucide-react";

import type { FeatureItem } from "@/components/landing/data/landing-content";

const descriptions: Record<FeatureItem["graphic"], string> = {
  invoicing:
    "Example invoice with three fee lines, a total of 4,800 due in 14 days, bank details and a send button.",
  billing:
    "Example timesheet: 32 billable hours across the week at 150 per hour gives an invoice of 4,800, alongside fixed fee, milestone and retainer options.",
  recurring:
    "Example schedule: a 2,500 retainer invoiced automatically each month, with the next invoice on the 1st.",
  balances:
    "Example client ledger: invoice of 12,000 less a payment of 8,000 leaves 4,000 outstanding, with an aging bar showing the overdue share.",
  expenses:
    "Example expense breakdown by category: salaries 14,200, rent 3,000, travel 1,240 and software 860.",
  profitability:
    "Example client profitability: three clients with revenue against cost and margin percentages.",
  cash:
    "Example cash position: a rising balance chart and three accounts totalling 35,300.",
  reports:
    "Example reports view: monthly revenue against expenses with a net profit of 9,400, and tabs for profit and loss, balance sheet and cash flow.",
};

function Invoicing() {
  return (
    <div className="qa-vg qa-vg-invoice">
      <div className="qa-vg-invoice-head">
        <span className="qa-vg-logo">N</span>
        <div>
          <strong>Invoice INV-0042</strong>
          <small>Issued 1 Nov · Due 15 Nov</small>
        </div>
        <span className="qa-vg-pill qa-vg-pill-warm">Due in 14 days</span>
      </div>
      <div className="qa-vg-billto"><small>BILL TO</small><strong>Northstar Consulting Ltd</strong></div>
      <table className="qa-vg-table">
        <thead><tr><th>Description</th><th>Qty</th><th>Amount</th></tr></thead>
        <tbody>
          <tr><td>Strategy workshop</td><td>1</td><td>2,400</td></tr>
          <tr><td>Advisory · 16 h × 100</td><td>16</td><td>1,600</td></tr>
          <tr><td>Travel (client billable)</td><td>1</td><td>800</td></tr>
        </tbody>
      </table>
      <div className="qa-vg-total"><span>Total</span><strong>4,800</strong></div>
      <div className="qa-vg-invoice-foot">
        <small>Pay by bank transfer · Net 14 days</small>
        <span className="qa-vg-btn"><Send />Send invoice</span>
      </div>
    </div>
  );
}

function Billing() {
  const days = [
    ["Mon", 6], ["Tue", 7], ["Wed", 5], ["Thu", 8], ["Fri", 6],
  ] as const;
  return (
    <div className="qa-vg">
      <div className="qa-vg-chips">
        {["Hourly", "Fixed fee", "Milestone", "Retainer"].map((c, i) => (
          <span key={c} className={i === 0 ? "is-active" : undefined}>{c}</span>
        ))}
      </div>
      <div className="qa-vg-card">
        <div className="qa-vg-card-head"><strong>Billable hours · this week</strong><small>32 h</small></div>
        <svg viewBox="0 -12 260 122" className="qa-vg-svg" aria-hidden="true">
          {days.map(([d, h], i) => (
            <g key={d} transform={`translate(${14 + i * 50} 0)`}>
              <rect x="0" y={88 - h * 10} width="30" height={h * 10} rx="6" className="qa-vg-bar" />
              <text x="15" y="104" textAnchor="middle" className="qa-vg-axis">{d}</text>
              <text x="15" y={82 - h * 10} textAnchor="middle" className="qa-vg-axis-strong">{h}</text>
            </g>
          ))}
        </svg>
      </div>
      <div className="qa-vg-equation">
        <span>32 h</span><b>×</b><span>150 / h</span><b>=</b><strong>4,800</strong>
      </div>
    </div>
  );
}

function Recurring() {
  const months = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return (
    <div className="qa-vg">
      <div className="qa-vg-card qa-vg-retainer">
        <span className="qa-vg-icon"><Repeat /></span>
        <div><strong>Monthly retainer</strong><small>Northstar Consulting · 1st of each month</small></div>
        <strong className="qa-vg-amount">2,500</strong>
      </div>
      <div className="qa-vg-timeline">
        {months.map((m, i) => (
          <div key={m} className={i < 5 ? "is-done" : "is-next"}>
            <span>{i < 5 ? <Check /> : <Repeat />}</span>
            <small>{m}</small>
          </div>
        ))}
      </div>
      <div className="qa-vg-card qa-vg-next">
        <small>NEXT INVOICE</small>
        <strong>1 Dec · created and sent automatically</strong>
      </div>
    </div>
  );
}

function Balances() {
  return (
    <div className="qa-vg">
      <div className="qa-vg-card">
        <div className="qa-vg-card-head"><strong>Northstar Consulting</strong><span className="qa-vg-pill qa-vg-pill-warm">1 overdue</span></div>
        <table className="qa-vg-table qa-vg-ledger">
          <thead><tr><th>Date</th><th>Entry</th><th>Amount</th><th>Balance</th></tr></thead>
          <tbody>
            <tr><td>03 Oct</td><td>INV-0038</td><td>12,000</td><td>12,000</td></tr>
            <tr><td>19 Oct</td><td>Payment</td><td className="is-credit">−8,000</td><td>4,000</td></tr>
          </tbody>
        </table>
        <div className="qa-vg-total"><span>Outstanding</span><strong>4,000</strong></div>
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

function Expenses() {
  const slices = [
    { name: "Salaries", value: 14200, color: "#f45a21" },
    { name: "Rent", value: 3000, color: "#ffb08a" },
    { name: "Travel", value: 1240, color: "#8a6e57" },
    { name: "Software", value: 860, color: "#d9cdbf" },
  ];
  const total = slices.reduce((n, s) => n + s.value, 0);
  const r = 42, c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div className="qa-vg">
      <div className="qa-vg-card qa-vg-donut">
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r={r} fill="none" stroke="#f3eee8" strokeWidth="16" />
          {slices.map((s) => {
            const len = (s.value / total) * c;
            const el = (
              <circle key={s.name} cx="60" cy="60" r={r} fill="none" stroke={s.color} strokeWidth="16"
                strokeDasharray={`${len - 2} ${c - len + 2}`} strokeDashoffset={-offset} transform="rotate(-90 60 60)" />
            );
            offset += len;
            return el;
          })}
          <text x="60" y="56" textAnchor="middle" className="qa-vg-axis">This month</text>
          <text x="60" y="73" textAnchor="middle" className="qa-vg-donut-total">19,300</text>
        </svg>
        <ul>
          {slices.map((s) => (
            <li key={s.name}><i style={{ background: s.color }} /><span>{s.name}</span><strong>{s.value.toLocaleString("en-US")}</strong></li>
          ))}
        </ul>
      </div>
      <div className="qa-vg-card qa-vg-tagrow">
        <span className="qa-vg-pill">Client-billable</span>
        <small>Travel · Northstar project</small>
        <strong>800</strong>
      </div>
    </div>
  );
}

function Profitability() {
  const rows = [
    { name: "Northstar", rev: 18000, cost: 11000 },
    { name: "Vertex Legal", rev: 12000, cost: 4800 },
    { name: "Atlas Group", rev: 9000, cost: 8100 },
  ];
  const max = 18000;
  return (
    <div className="qa-vg">
      <div className="qa-vg-card">
        <div className="qa-vg-card-head"><strong>Profit by client</strong><small>Revenue vs cost</small></div>
        {rows.map((r) => {
          const margin = Math.round(((r.rev - r.cost) / r.rev) * 100);
          return (
            <div className="qa-vg-prof" key={r.name}>
              <div className="qa-vg-prof-head"><span>{r.name}</span><b className={margin < 20 ? "is-low" : undefined}>{margin}% margin</b></div>
              <div className="qa-vg-prof-bars" aria-hidden="true">
                <span className="rev" style={{ width: `${(r.rev / max) * 100}%` }} />
                <span className="cost" style={{ width: `${(r.cost / max) * 100}%` }} />
              </div>
            </div>
          );
        })}
        <div className="qa-vg-legend"><span><i className="rev" />Revenue</span><span><i className="cost" />Cost</span></div>
      </div>
    </div>
  );
}

function Cash() {
  return (
    <div className="qa-vg">
      <div className="qa-vg-card">
        <div className="qa-vg-card-head"><strong>Total cash</strong><span className="qa-vg-pill">+8.4% this month</span></div>
        <strong className="qa-vg-big">35,300</strong>
        <svg viewBox="0 0 260 80" className="qa-vg-svg" aria-hidden="true">
          <defs>
            <linearGradient id="qa-cash-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#f45a21" stopOpacity=".25" /><stop offset="1" stopColor="#f45a21" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 62 L40 54 L80 58 L120 40 L160 44 L200 24 L260 14 L260 80 L0 80 Z" fill="url(#qa-cash-fill)" />
          <path d="M0 62 L40 54 L80 58 L120 40 L160 44 L200 24 L260 14" fill="none" stroke="#f45a21" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
          <circle cx="260" cy="14" r="4" fill="#f45a21" />
        </svg>
      </div>
      <div className="qa-vg-accounts">
        {[["Operating", "24,500"], ["Savings", "10,000"], ["Petty cash", "800"]].map(([n, v]) => (
          <div key={n}><small>{n}</small><strong>{v}</strong></div>
        ))}
      </div>
    </div>
  );
}

function Reports() {
  const data = [[40, 28], [46, 30], [38, 31], [52, 33], [58, 34], [64, 36]];
  return (
    <div className="qa-vg">
      <div className="qa-vg-chips">
        {["Profit & loss", "Balance sheet", "Cash flow"].map((c, i) => (
          <span key={c} className={i === 0 ? "is-active" : undefined}>{c}</span>
        ))}
      </div>
      <div className="qa-vg-card">
        <div className="qa-vg-card-head"><strong>Revenue vs expenses</strong><small>Last 6 months</small></div>
        <svg viewBox="0 0 260 100" className="qa-vg-svg" aria-hidden="true">
          {data.map(([rev, exp], i) => (
            <g key={i} transform={`translate(${10 + i * 42} 0)`}>
              <rect x="0" y={90 - rev} width="14" height={rev} rx="4" className="qa-vg-bar" />
              <rect x="17" y={90 - exp} width="14" height={exp} rx="4" className="qa-vg-bar-alt" />
            </g>
          ))}
        </svg>
        <div className="qa-vg-total"><span>Net profit</span><strong>9,400</strong></div>
      </div>
    </div>
  );
}

const graphics = {
  invoicing: Invoicing,
  billing: Billing,
  recurring: Recurring,
  balances: Balances,
  expenses: Expenses,
  profitability: Profitability,
  cash: Cash,
  reports: Reports,
};

export function FeatureGraphic({ kind }: { kind: FeatureItem["graphic"] }) {
  const Graphic = graphics[kind];
  return (
    <div
      className="qa-feature-graphic qa-feature-graphic-accounting"
      role="img"
      aria-label={descriptions[kind]}
    >
      <div aria-hidden="true">
        <Graphic />
      </div>
    </div>
  );
}
