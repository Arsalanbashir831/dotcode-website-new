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
  const sectionNames: Record<string, string> = {
    features: "Features",
    guides: "Guides",
    industries: "Industries",
    regions: "Regions",
    solutions: "Solutions",
  };
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
              {sectionNames[section] ? <><span aria-hidden="true">/</span><Link href={`/${section}`}>{sectionNames[section]}</Link></> : null}
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
        <Link href="/">QuickAccounts home</Link>
        <a href="mailto:info@dotcodesolutions.com">info@dotcodesolutions.com</a>
      </div></footer>
    </main>
  );
}
