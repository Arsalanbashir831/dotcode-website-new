import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { MarketingHeader } from "@/components/landing/sections/marketing-header";
import { JsonLd } from "@/components/seo/json-ld";
import { pageSchema } from "@/lib/seo";

export type SeoLandingPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  path: string;
  description?: string;
  contentType?: "WebPage" | "BlogPosting";
  datePublished?: string;
  dateModified?: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  faqs: { question: string; answer: string }[];
};

const evidenceByPath: Record<string, {
  title: string;
  body: string;
  steps: [string, string][];
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  caption: string;
}> = {
  "/solutions/wholesale-inventory": {
    title: "From supplier order to sale-ready stock.",
    body: "A purchase order records the supplier, receiving location, product lines, costs and any unit serials. That structured receipt becomes the starting point for stock, sales and account records instead of another disconnected spreadsheet.",
    steps: [["Order", "Choose the supplier and destination."], ["Receive", "Confirm quantities and serialized units."], ["Reconcile", "Keep the purchase and payment context together."]],
    image: "/assets/feature3.png", imageWidth: 4070, imageHeight: 1998,
    alt: "QuickAccounts purchase order screen with supplier, warehouse, products, serials and payment method fields",
    caption: "Demo screen: a purchase order prepared for a specific supplier and stock destination.",
  },
  "/features/business-accounting": {
    title: "A customer ledger connected to operating records.",
    body: "The customer ledger brings invoices, receipts, returns and adjustments into one chronological balance. Staff can review the source reference and status instead of rebuilding an account from several files.",
    steps: [["Post", "Record the invoice, receipt or adjustment."], ["Review", "See debits, credits and the running balance."], ["Follow up", "Use aging and overdue information for account work."]],
    image: "/assets/feature5-ledger.png", imageWidth: 1672, imageHeight: 941,
    alt: "QuickAccounts customer ledger showing invoices, payments, balances and aging",
    caption: "Demo screen: a customer ledger with transaction history and balance summaries.",
  },
  "/features/multi-warehouse-inventory": {
    title: "Locations defined before stock begins to move.",
    body: "Each outlet or warehouse has a distinct record, type and code. Those locations can then be used consistently across purchases, sales and transfers, giving movement reports a clear origin and destination.",
    steps: [["Define", "Create the warehouse or retail outlet."], ["Assign", "Connect stock activity to the correct location."], ["Transfer", "Record movement between sites with a traceable route."]],
    image: "/assets/feature1.png", imageWidth: 1672, imageHeight: 941,
    alt: "QuickAccounts stores and warehouses screen with location records and an add-location form",
    caption: "Demo screen: warehouse and outlet records used by purchasing, sales and transfers.",
  },
  "/features/serial-number-tracking": {
    title: "A chronological trail for every serialized unit.",
    body: "The stock activity ledger shows whether a unit arrived, moved, sold or returned, along with its reference, location, counterparty and serial. A search can begin with the serial, barcode, SKU or transaction reference.",
    steps: [["Capture", "Record the serial as the unit enters stock."], ["Transact", "Link the unit to a sale or transfer reference."], ["Trace", "Search the chronology during service or audit work."]],
    image: "/assets/feature2.png", imageWidth: 4062, imageHeight: 2252,
    alt: "QuickAccounts stock activity ledger showing serialized sales, transfers and warranty returns",
    caption: "Demo screen: serialized stock activity across sales, transfers and returns.",
  },
  "/features/warranty-management": {
    title: "Warranty verification before an RMA decision.",
    body: "Staff can search a serial or invoice, review the matching customer, sale and warranty context, then record the inspection and resolution. The case status keeps the service trail visible through approval or rejection.",
    steps: [["Verify", "Match the unit with its invoice and customer."], ["Inspect", "Record the reported issue and decision."], ["Resolve", "Generate the RMA trail for repair or replacement."]],
    image: "/assets/feature4-rma.png", imageWidth: 1672, imageHeight: 941,
    alt: "QuickAccounts RMA screen showing serial verification, warranty status and claim stages",
    caption: "Demo screen: serial and invoice verification within an RMA case.",
  },
  "/features/pos-system-integration": {
    title: "Every counter sale reflected in one system.",
    body: "A POS bill captures the products, quantities, serials, customer and payment at the counter. Once synced, the same sale updates stock, serial history and the customer account, so counter and office staff work from the same records.",
    steps: [["Bill", "Select or scan products and record payment at the counter."], ["Sync", "Send the bill to your central stock and accounts automatically."], ["Review", "See updated quantities, serials and balances in the dashboard."]],
    image: "/assets/hero-section-image.png", imageWidth: 1672, imageHeight: 941,
    alt: "QuickAccounts dashboard showing sales totals and recent counter sales",
    caption: "Demo screen: sales totals and recent counter sales reflected in the central dashboard.",
  },
  "/industries/electronics-distributors": {
    title: "Serialized electronics remain traceable after the sale.",
    body: "Electronics teams can follow an individual unit through receipt, location transfer, sale and warranty return. The activity reference, customer or supplier, location and serial stay visible in one chronology for faster service checks.",
    steps: [["Receive", "Capture sellable units and their serials."], ["Dispatch", "Connect each unit to a sale and customer."], ["Support", "Use the serial history during warranty or RMA work."]],
    image: "/assets/feature2.png", imageWidth: 4062, imageHeight: 2252,
    alt: "QuickAccounts serialized electronics inventory activity across transfers, sales and returns",
    caption: "Demo screen: unit-level activity for electronics stock across locations and transactions.",
  },
  "/industries/computer-hardware-wholesalers": {
    title: "Unit-level records for RAM, drives and hardware.",
    body: "Hardware wholesalers often stock many visually identical units. Recording a serial against the purchase, location and sale lets staff distinguish the exact item returned and find the transaction that established its customer and service context.",
    steps: [["Identify", "Capture the manufacturer serial or barcode."], ["Locate", "Track the warehouse, outlet or customer record."], ["Investigate", "Open the linked transaction when a unit returns."]],
    image: "/assets/feature2.png", imageWidth: 4062, imageHeight: 2252,
    alt: "QuickAccounts serialized computer hardware stock ledger with transaction references",
    caption: "Demo screen: searchable serials and references for computer hardware stock.",
  },
  "/industries/multi-outlet-retailers": {
    title: "A defined stock location for every outlet.",
    body: "Retail outlets and central warehouses can be created as separate operating locations, each with its own code and responsible manager. Sales, purchasing and transfers can then use those records consistently instead of relying on informal branch names.",
    steps: [["Register", "Define each outlet and warehouse."], ["Operate", "Use the location on receipts and sales."], ["Move", "Trace transfers between the sending and receiving site."]],
    image: "/assets/feature1.png", imageWidth: 1672, imageHeight: 941,
    alt: "QuickAccounts multi-outlet and warehouse setup with location codes and managers",
    caption: "Demo screen: retail outlet and warehouse records for a multi-location operation.",
  },
  "/industries/merchandise-wholesalers": {
    title: "Purchasing structured around supplier and destination.",
    body: "A merchandise purchase order identifies the supplier, invoice details, expected delivery and the location receiving the goods. Product lines and payment context stay together so the stock increase has a clear commercial source.",
    steps: [["Select", "Choose the supplier and receiving warehouse."], ["Itemize", "Add products, quantities and purchase costs."], ["Receive", "Use the approved order to update stock records."]],
    image: "/assets/feature3.png", imageWidth: 4070, imageHeight: 1998,
    alt: "QuickAccounts wholesale purchase order with supplier, stock destination and product details",
    caption: "Demo screen: a supplier purchase prepared for receipt into wholesale inventory.",
  },
  "/industries/fmcg-wholesalers-distributors": {
    title: "High-volume receipts tied to the supplier and depot.",
    body: "An FMCG purchase order names the supplier, the product lines, the costs and the destination warehouse. Receiving against that record creates the stock increase, so a fast-moving consignment can still be traced back to its source.",
    steps: [["Order", "Select the supplier and receiving warehouse."], ["Receive", "Confirm the lines and quantities delivered."], ["Update", "Release the goods into sellable stock."]],
    image: "/assets/feature3.png", imageWidth: 4070, imageHeight: 1998,
    alt: "QuickAccounts purchase order for fast-moving consumer goods with supplier and warehouse details",
    caption: "Demo screen: a supplier purchase prepared for an FMCG warehouse.",
  },
  "/industries/clothing-garment-retailers-wholesalers": {
    title: "Each shop and stockroom has its own stock record.",
    body: "Outlets, stockrooms and warehouses are defined as separate locations with their own codes. Sales and transfers then reference the location that released or received the goods, which keeps branch stock accountable.",
    steps: [["Define", "Create a record for each shop and warehouse."], ["Assign", "Use the location on purchases and sales."], ["Transfer", "Move stock between sites with a reference."]],
    image: "/assets/feature1.png", imageWidth: 1672, imageHeight: 941,
    alt: "QuickAccounts stores and warehouses screen used to define retail outlets and stockrooms",
    caption: "Demo screen: outlet and warehouse records for a clothing retailer.",
  },
  "/industries/cosmetics-beauty-distributors": {
    title: "Salon and retailer balances in one ledger.",
    body: "Invoices, receipts and adjustments post to the customer ledger in chronological order. The team can review what a salon or reseller was billed, what has been paid and what remains outstanding without rebuilding the account from individual invoices.",
    steps: [["Invoice", "Post the sale to the customer account."], ["Record", "Capture the payment against the balance."], ["Review", "Use the running balance for follow-up."]],
    image: "/assets/feature5-ledger.png", imageWidth: 1672, imageHeight: 941,
    alt: "QuickAccounts customer ledger showing invoices, receipts and outstanding balances",
    caption: "Demo screen: a customer ledger with transaction history and balance summaries.",
  },
  "/industries/automotive-motorcycle-spare-parts": {
    title: "Part movements with a reference behind them.",
    body: "The stock activity record shows what happened to a product line: what arrived, what was sold, what moved between the counter and the back store, and which transaction each change belongs to.",
    steps: [["Look up", "Find the part by its product code."], ["Bill", "Connect the sale to the customer and invoice."], ["Trace", "Review the movement history when a part returns."]],
    image: "/assets/feature2.png", imageWidth: 4062, imageHeight: 2252,
    alt: "QuickAccounts stock activity ledger showing product movements and transaction references",
    caption: "Demo screen: stock activity across sales, transfers and returns.",
  },
  "/industries/grocery-stores-supermarkets": {
    title: "Counter sales reflected in the central record.",
    body: "Once a POS bill is synced, the same sale updates stock, the customer account where applicable and the sales totals in the dashboard. Counter and office staff then work from the same figures.",
    steps: [["Bill", "Record the products and payment at the till."], ["Sync", "Send the sale to central stock and accounts."], ["Review", "See updated totals and recent sales."]],
    image: "/assets/hero-section-image.png", imageWidth: 1672, imageHeight: 941,
    alt: "QuickAccounts dashboard showing sales totals and recent counter sales",
    caption: "Demo screen: sales totals and recent counter sales in the central dashboard.",
  },
  "/industries/building-materials-tiles-sanitary-ware": {
    title: "Bulk deliveries received against a named order.",
    body: "The purchase order records the supplier, the ordered lines, costs and the site receiving the material. Receiving against it updates stock at that location, so the yard can explain where a consignment came from.",
    steps: [["Prepare", "Record the supplier and destination site."], ["Receive", "Confirm quantities as the delivery arrives."], ["Release", "Update stock for the receiving location."]],
    image: "/assets/feature3.png", imageWidth: 4070, imageHeight: 1998,
    alt: "QuickAccounts purchase order with supplier, product lines and receiving warehouse",
    caption: "Demo screen: a supplier order prepared for a building material warehouse.",
  },
  "/industries/pharmaceutical-medical-supply": {
    title: "A searchable record for every stock movement.",
    body: "Product, supplier, location and transaction context stay attached to each stock movement. That structure gives the team a defined record to review when a purchase, sale or return is questioned later.",
    steps: [["Record", "Capture the purchase and receiving location."], ["Sell", "Connect the invoice to the customer account."], ["Review", "Open the history when a transaction is queried."]],
    image: "/assets/feature2.png", imageWidth: 4062, imageHeight: 2252,
    alt: "QuickAccounts stock activity ledger showing product, location and transaction records",
    caption: "Demo screen: structured stock activity for review and follow-up.",
  },
  "/industries/footwear-leather-goods": {
    title: "Shop stock and warehouse stock kept distinct.",
    body: "Each shop, stockroom and warehouse can be a separate location. Transfers record movement between them, and sales release stock from the site that actually served the customer.",
    steps: [["Set up", "Create location records for each site."], ["Sell", "Release stock from the serving outlet."], ["Move", "Transfer between shop and warehouse with a reference."]],
    image: "/assets/feature1.png", imageWidth: 1672, imageHeight: 941,
    alt: "QuickAccounts location setup screen for retail outlets and warehouses",
    caption: "Demo screen: outlet and warehouse records for a footwear retailer.",
  },
  "/industries/furniture-home-furnishing": {
    title: "Sales history for high-value purchases.",
    body: "Invoices keep the customer, the items billed and the amounts together. When a customer returns with a question about a furniture purchase, the office can open the original sale and its account entries.",
    steps: [["Invoice", "Record the sale against the customer."], ["Post", "Add the balance to the customer ledger."], ["Review", "Open the transaction during after-sales work."]],
    image: "/assets/feature5-ledger.png", imageWidth: 1672, imageHeight: 941,
    alt: "QuickAccounts customer ledger with invoice history and running balance",
    caption: "Demo screen: invoices and balances held against a customer account.",
  },
  "/industries/food-restaurant-supply": {
    title: "Purchasing that supports repeat supply.",
    body: "A purchase order captures the supplier, the lines and the receiving location for each delivery cycle. The stock increase then stays connected to the order, which keeps repeat purchasing grounded in actual records.",
    steps: [["Order", "Choose the supplier and storage location."], ["Receive", "Confirm what arrived against the order."], ["Repeat", "Use the record for the next supply cycle."]],
    image: "/assets/feature3.png", imageWidth: 4070, imageHeight: 1998,
    alt: "QuickAccounts purchase order with supplier, product lines and destination warehouse",
    caption: "Demo screen: a supplier order for a food service warehouse.",
  },
  "/industries/stationery-school-supply": {
    title: "A separate record for counter and bulk stock.",
    body: "Retail counters and bulk warehouses can hold the same catalogue in separate locations. Transfers move stock between them with a reference, and sales reduce the site that supplied the order.",
    steps: [["Define", "Set up the counter and the warehouse."], ["Transfer", "Move bulk stock between locations."], ["Sell", "Release stock from the supplying site."]],
    image: "/assets/feature1.png", imageWidth: 1672, imageHeight: 941,
    alt: "QuickAccounts warehouse and outlet setup for retail and bulk stock",
    caption: "Demo screen: separate location records for a counter and a bulk warehouse.",
  },
  "/industries/agricultural-supply": {
    title: "Regional depots under one stock record set.",
    body: "Each depot and central warehouse is defined as its own location. Purchases and transfers reference the sites involved, so seasonal stock can be followed between regions without informal records.",
    steps: [["Register", "Create records for each depot and warehouse."], ["Receive", "Assign incoming stock to the right site."], ["Transfer", "Record movement between regions."]],
    image: "/assets/feature1.png", imageWidth: 1672, imageHeight: 941,
    alt: "QuickAccounts warehouse records for regional depots and a central warehouse",
    caption: "Demo screen: location records for a multi-region supply operation.",
  },
};

export function SeoLandingPage({
  eyebrow,
  title,
  intro,
  path,
  description,
  contentType = "WebPage",
  datePublished,
  dateModified,
  sections,
  faqs,
}: SeoLandingPageProps) {
  const section = path.split("/").filter(Boolean)[0];
  const sectionHubs: Record<string, { label: string; href: string }> = {
    features: { label: "Features", href: "/features" },
    industries: { label: "Industries", href: "/industries" },
  };
  const hub = sectionHubs[section];
  const evidence = evidenceByPath[path] ?? {
    title: "A practical record trail from stock to service.",
    body: "A distributor can receive a serialized product, sell it against a customer account, find the original invoice later, and review a warranty or RMA request without rebuilding the history from separate spreadsheets.",
    steps: [["Receive", "Record products, quantities and serial numbers."], ["Sell", "Connect the item to the customer and invoice."], ["Resolve", "Verify warranty status and coordinate return or replacement."]] as [string, string][],
    image: "/assets/feature2.png", imageWidth: 4062, imageHeight: 2252,
    alt: "QuickAccounts stock activity and traceability workspace",
    caption: "Demo screen: stock movements and serialized-unit history in QuickAccounts.",
  };

  return (
    <main className="qa-site seo-page" id="top">
      <JsonLd data={pageSchema({ path, name: title, description: description ?? intro, type: contentType, datePublished, dateModified })} />
      <MarketingHeader />
      <article>
        <section className="seo-hero">
          <div className="qa-container">
            <nav className="seo-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              {hub ? <><span aria-hidden="true">/</span><Link href={hub.href}>{hub.label}</Link></> : null}
              <span aria-hidden="true">/</span><span aria-current="page">{title}</span>
            </nav>
            <p className="qa-eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="seo-intro">{intro}</p>
            {contentType === "BlogPosting" ? (
              <p className="seo-byline">Reviewed by Dotcode Solutions Product Team · Updated October 17, 2026</p>
            ) : null}
            <div className="seo-actions">
              <WhatsAppButton size="lg" />
              <Link href="/#contact">Talk to our team</Link>
            </div>
            <ul className="seo-proof">
              {["Free product demo", "Unlimited users", "Setup and team training included"].map((item) => (
                <li key={item}><Check aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>
        </section>
        <div className="qa-container seo-content">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
              {section.bullets ? (
                <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
              ) : null}
            </section>
          ))}
          <section className="seo-evidence" aria-labelledby="product-evidence-heading">
            <div>
              <p className="qa-eyebrow">Inside the workflow</p>
              <h2 id="product-evidence-heading">{evidence.title}</h2>
              <p>{evidence.body}</p>
              <ol>
                {evidence.steps.map(([label, text]) => <li key={label}><strong>{label}:</strong> {text}</li>)}
              </ol>
            </div>
            <figure>
              <Image src={evidence.image} alt={evidence.alt} width={evidence.imageWidth} height={evidence.imageHeight} sizes="(max-width: 900px) 100vw, 48vw" />
              <figcaption>{evidence.caption}</figcaption>
            </figure>
          </section>
          <nav className="seo-related-links" aria-label="Related QuickAccounts pages">
            <h2>Explore related workflows</h2>
            <div>
              <Link href="/features/serial-number-tracking">Serial number tracking</Link>
              <Link href="/features/warranty-management">Warranty and RMA management</Link>
              <Link href="/features/multi-warehouse-inventory">Multi-warehouse inventory</Link>
              <Link href="/features/business-accounting">Business accounting</Link>
              <Link href="/features/pos-system-integration">POS system integration</Link>
            </div>
          </nav>
          <section className="seo-cta">
            <h2>See whether QuickAccounts fits your workflow</h2>
            <p>Talk through your current records, team needs and setup before choosing a license.</p>
            <WhatsAppButton size="lg" />
          </section>
          <section className="seo-faq" aria-labelledby="seo-faq-heading">
            <h2 id="seo-faq-heading">Frequently asked questions</h2>
            {faqs.map(({ question, answer }) => (
              <details key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </section>
        </div>
      </article>
      <footer className="qa-footer"><div className="qa-container qa-footer-bottom">
        <p>© {new Date().getFullYear()} Dotcode Solutions</p>
        <Link href="/company">Our company</Link>
        <Link href="/">QuickAccounts home</Link>
        <a href="mailto:info@dotcodesolutions.com">info@dotcodesolutions.com</a>
      </div></footer>
    </main>
  );
}
