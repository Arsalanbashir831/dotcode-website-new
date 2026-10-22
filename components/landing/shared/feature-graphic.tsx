import {
  ArrowRight,
  Boxes,
  Check,
  ClipboardCheck,
  Headphones,
  Laptop,
  MonitorSmartphone,
  Package,
  ReceiptText,
  ScanLine,
  ShieldCheck,
  ShoppingBag,
  Store,
  Warehouse,
} from "lucide-react";

import type { FeatureItem } from "@/components/landing/data/landing-content";

const descriptions = {
  locations:
    "One central warehouse connects to a main outlet, a second outlet and a reserve warehouse.",
  stock:
    "Example stock overview showing 48 laptops, 120 accessories and 36 components available.",
  trading:
    "A supplier purchase adds goods to your stock. A customer sale records goods leaving stock.",
  pos:
    "A POS counter sale syncs to your central stock and updates the customer account.",
  serials:
    "Look up a product serial, check its warranty and record a return or replacement claim.",
  accounts:
    "Example customer account: an invoice of 12,000 minus a payment of 8,000 leaves an outstanding balance of 4,000.",
};

function Locations() {
  return (
    <div className="qa-fg-locations">
      <div className="qa-fg-hub">
        <span className="qa-fg-icon qa-fg-icon-primary">
          <Warehouse />
        </span>
        <strong>Central warehouse</strong>
        <span>One stock overview</span>
      </div>
      <div className="qa-fg-branches">
        {[
          { icon: Store, name: "Main outlet" },
          { icon: Store, name: "Outlet 02" },
          { icon: Warehouse, name: "Warehouse" },
        ].map(({ icon: Icon, name }) => (
          <div className="qa-fg-location" key={name}>
            <Icon />
            <strong>{name}</strong>
          </div>
        ))}
      </div>
      <p className="qa-fg-caption">Every location. One connected business.</p>
    </div>
  );
}

function Stock() {
  return (
    <div className="qa-fg-sheet">
      <div className="qa-fg-sheet-heading">
        <span className="qa-fg-icon">
          <Boxes />
        </span>
        <strong>Stock at a glance</strong>
      </div>
      <div className="qa-fg-stock-label">
        <span>Product</span>
        <span>Available</span>
      </div>
      {[
        { icon: Laptop, name: "Laptops", count: "48" },
        { icon: Headphones, name: "Accessories", count: "120" },
        { icon: Package, name: "Components", count: "36" },
      ].map(({ icon: Icon, name, count }) => (
        <div className="qa-fg-stock-row" key={name}>
          <span className="qa-fg-product-icon">
            <Icon />
          </span>
          <strong>{name}</strong>
          <span className="qa-fg-quantity">
            {count}
            <small>units</small>
          </span>
        </div>
      ))}
      <span className="qa-fg-example">Example inventory</span>
    </div>
  );
}

function Trading() {
  return (
    <div className="qa-fg-trading">
      <div className="qa-fg-trade-route">
        <div>
          <span className="qa-fg-icon">
            <Warehouse />
          </span>
          <strong>Supplier</strong>
        </div>
        <ArrowRight className="qa-fg-arrow" />
        <div>
          <span className="qa-fg-icon qa-fg-icon-primary">
            <Boxes />
          </span>
          <strong>Your stock</strong>
        </div>
        <ArrowRight className="qa-fg-arrow" />
        <div>
          <span className="qa-fg-icon">
            <ShoppingBag />
          </span>
          <strong>Customer</strong>
        </div>
      </div>
      <div className="qa-fg-receipts">
        <div>
          <span>01 / PURCHASE</span>
          <strong>Goods received</strong>
          <small>
            <Check />
            Purchase recorded
          </small>
        </div>
        <div>
          <span>02 / SALE</span>
          <strong>Goods sold</strong>
          <small>
            <Check />
            Sale recorded
          </small>
        </div>
      </div>
      <p className="qa-fg-caption">
        A clear record of what comes in and goes out.
      </p>
    </div>
  );
}

function Pos() {
  return (
    <div className="qa-fg-trading">
      <div className="qa-fg-trade-route">
        <div>
          <span className="qa-fg-icon">
            <MonitorSmartphone />
          </span>
          <strong>POS counter</strong>
        </div>
        <ArrowRight className="qa-fg-arrow" />
        <div>
          <span className="qa-fg-icon qa-fg-icon-primary">
            <Boxes />
          </span>
          <strong>Your stock</strong>
        </div>
        <ArrowRight className="qa-fg-arrow" />
        <div>
          <span className="qa-fg-icon">
            <ReceiptText />
          </span>
          <strong>Accounts</strong>
        </div>
      </div>
      <div className="qa-fg-receipts">
        <div>
          <span>01 / POS BILL</span>
          <strong>Sale at counter</strong>
          <small>
            <Check />
            Bill synced
          </small>
        </div>
        <div>
          <span>02 / UPDATE</span>
          <strong>Stock and ledger</strong>
          <small>
            <Check />
            Updated automatically
          </small>
        </div>
      </div>
      <p className="qa-fg-caption">
        Every counter sale, reflected everywhere.
      </p>
    </div>
  );
}

function Serials() {
  return (
    <div className="qa-fg-serials">
      <div className="qa-fg-serial-tag">
        <span className="qa-fg-serial-label">PRODUCT SERIAL</span>
        <div className="qa-fg-barcode" />
        <strong>QA–00128</strong>
        <span className="qa-fg-verified">
          <ShieldCheck />
          Linked to its sales record
        </span>
      </div>
      <div className="qa-fg-serial-steps">
        {[
          { icon: ScanLine, name: "Find serial" },
          { icon: ShieldCheck, name: "Check warranty" },
          { icon: ClipboardCheck, name: "Record claim" },
        ].map(({ icon: Icon, name }) => (
          <div key={name}>
            <span>
              <Icon />
            </span>
            <strong>{name}</strong>
          </div>
        ))}
      </div>
      <p className="qa-fg-caption">Trace the product. Resolve the claim.</p>
    </div>
  );
}

function Accounts() {
  return (
    <div className="qa-fg-sheet qa-fg-account">
      <span className="qa-fg-serial-label">CUSTOMER ACCOUNT</span>
      <strong className="qa-fg-account-title">Every entry adds up.</strong>
      <div className="qa-fg-account-row">
        <span>Sales invoice</span>
        <strong>12,000</strong>
      </div>
      <div className="qa-fg-account-row">
        <span>Payment received</span>
        <strong>−8,000</strong>
      </div>
      <div className="qa-fg-balance">
        <span>Outstanding balance</span>
        <strong>4,000</strong>
      </div>
      <span className="qa-fg-example">Illustrative account entries</span>
    </div>
  );
}

const graphics = {
  locations: Locations,
  stock: Stock,
  trading: Trading,
  pos: Pos,
  serials: Serials,
  accounts: Accounts,
};

export function FeatureGraphic({ kind }: { kind: FeatureItem["graphic"] }) {
  const Graphic = graphics[kind];
  return (
    <div
      className={`qa-feature-graphic qa-feature-graphic-${kind}`}
      role="img"
      aria-label={descriptions[kind]}
    >
      <div aria-hidden="true">
        <Graphic />
      </div>
    </div>
  );
}
