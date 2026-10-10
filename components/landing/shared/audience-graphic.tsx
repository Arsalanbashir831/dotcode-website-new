import {
  ArrowDownLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Boxes,
  Check,
  ClipboardList,
  Package,
  ShoppingBag,
  Store,
  Truck,
  Warehouse,
  Wallet,
} from "lucide-react";

import type { AudienceItem } from "@/components/landing/data/landing-content";

const graphicLabels = {
  wholesale: "Purchases, sales and payments organized together in the general ledger.",
  merchandise: "Example stock movement: 120 units received minus 45 sold leaves 75 available.",
  distribution: "A central warehouse connects to two outlets and a reserve warehouse, keeping transfers and stock records together.",
};

function WholesaleGraphic() {
  return (
    <div className="qa-trade-graphic">
      <div className="qa-graphic-topline"><span>THE DAILY BOOKS</span><span className="qa-graphic-status"><i />Connected records</span></div>
      <div className="qa-trade-flow">
        <div className="qa-trade-entries">
          {[
            { icon: ClipboardList, title: "Purchase", detail: "Supplier account", code: "PUR" },
            { icon: ShoppingBag, title: "Sale", detail: "Customer account", code: "INV" },
            { icon: Wallet, title: "Payment", detail: "Cash and bank", code: "PAY" },
          ].map(({ icon: Icon, title, detail, code }) => (
            <div className="qa-trade-entry" key={code}>
              <span className="qa-graphic-icon"><Icon /></span>
              <div><strong>{title}</strong><small>{detail}</small></div>
              <span className="qa-entry-code">{code}</span>
            </div>
          ))}
        </div>
        <div className="qa-trade-connector"><ArrowRight /></div>
        <div className="qa-ledger-sheet">
          <span className="qa-ledger-icon"><BookOpen /></span>
          <strong>General ledger</strong>
          <small>One clear record</small>
          <div className="qa-ledger-lines"><span /><span /><span /></div>
          <span className="qa-ledger-note"><Check />Organized</span>
        </div>
      </div>
      <div className="qa-graphic-footnote"><BookOpen />A complete view of your trading activity</div>
    </div>
  );
}

function MerchandiseGraphic() {
  return (
    <div className="qa-stock-graphic">
      <div className="qa-graphic-topline"><span>STOCK MOVEMENT</span><span>Example item</span></div>
      <div className="qa-stock-product">
        <div className="qa-product-cube"><Package /></div>
        <div><small>INVENTORY / ITEM 001</small><strong>Every unit accounted for.</strong></div>
        <span className="qa-stock-tag">In stock</span>
      </div>
      <div className="qa-stock-equation">
        <div><span><ArrowDownLeft />Received</span><strong>120<small>units</small></strong></div>
        <b>−</b>
        <div><span><ArrowUpRight />Sold</span><strong>45<small>units</small></strong></div>
        <b>=</b>
        <div className="qa-stock-available"><span><Boxes />Available</span><strong>75<small>units</small></strong></div>
      </div>
      <div className="qa-stock-track"><span /><span /></div>
      <div className="qa-stock-key"><span><i />Stock on hand</span><span><i />Goods sold</span></div>
    </div>
  );
}

function DistributionGraphic() {
  return (
    <div className="qa-distribution-graphic">
      <div className="qa-graphic-topline"><span>ONE BUSINESS. EVERY LOCATION.</span><span className="qa-graphic-status"><i />Connected</span></div>
      <div className="qa-location-network">
        <svg className="qa-location-paths" viewBox="0 0 600 240" preserveAspectRatio="none" fill="none">
          <path d="M180 120H280Q300 120 300 100V48Q300 28 320 28H395M300 120H395M300 120V192Q300 212 320 212H395" />
          <circle cx="300" cy="120" r="5" />
        </svg>
        <div className="qa-location-hub"><span><Warehouse /></span><strong>Central warehouse</strong><small>Your stock overview</small><div><Boxes />QuickAccounts</div></div>
        <div className="qa-location-branches">
          {[
            { icon: Store, title: "Outlet 01", detail: "Retail stock" },
            { icon: Store, title: "Outlet 02", detail: "Trade stock" },
            { icon: Warehouse, title: "Warehouse", detail: "Reserve stock" },
          ].map(({ icon: Icon, title, detail }) => (
            <div className="qa-location-node" key={title}><Icon /><div><strong>{title}</strong><small>{detail}</small></div><span /></div>
          ))}
        </div>
      </div>
      <div className="qa-graphic-footnote"><Truck />Stock transfers, with a record at every step</div>
    </div>
  );
}

export function AudienceGraphic({ kind }: { kind: AudienceItem["graphic"] }) {
  return (
    <div className={`qa-audience-media qa-audience-media-${kind}`} role="img" aria-label={graphicLabels[kind]}>
      <div aria-hidden="true">
        {kind === "wholesale" ? <WholesaleGraphic /> : kind === "merchandise" ? <MerchandiseGraphic /> : <DistributionGraphic />}
      </div>
    </div>
  );
}
