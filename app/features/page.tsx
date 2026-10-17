import type { Metadata } from "next";
import Link from "next/link";

import { MarketingHeader } from "@/components/landing/sections/marketing-header";
import { JsonLd } from "@/components/seo/json-ld";
import { pageSchema } from "@/lib/seo";

const description = "Explore QuickAccounts inventory, serial tracking, warranty, RMA, warehouse and accounting workflows for distributors.";

export const metadata: Metadata = {
  title: "Wholesale Software Features",
  description,
  alternates: { canonical: "/features" },
};

const features = [
  ["Serial number tracking", "/features/serial-number-tracking", "Trace individual units from receiving to invoice lookup and after-sales service."],
  ["Warranty management", "/features/warranty-management", "Connect eligibility checks, customer records, returns and replacements."],
  ["RMA replacement tracking", "/features/rma-replacement-tracking", "Keep returned and replacement units connected to the original sale."],
  ["Multi-warehouse inventory", "/features/multi-warehouse-inventory", "Review stock and movements across warehouses, branches and outlets."],
  ["Business accounting", "/features/business-accounting", "Keep purchases, sales, cash, customer accounts and ledgers beside stock records."],
] as const;

export default function FeaturesPage() {
  return <main className="qa-site seo-page">
    <JsonLd data={pageSchema({ path: "/features", name: "QuickAccounts features", description, type: "CollectionPage" })} />
    <MarketingHeader />
    <article className="qa-container seo-content blog-content">
      <nav className="seo-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Features</span></nav>
      <p className="qa-eyebrow">Product capabilities</p>
      <h1>QuickAccounts features for stock-led businesses</h1>
      <p className="seo-intro">QuickAccounts connects the records a distributor uses before, during and after a sale. Explore how stock, serialized units, warehouse movement, accounts, warranty checks and RMA replacements fit into one operational trail.</p>
      <div className="seo-hub-grid">
        {features.map(([title, href, summary]) => <section key={href}><h2><Link href={href}>{title}</Link></h2><p>{summary}</p></section>)}
      </div>
    </article>
  </main>;
}
