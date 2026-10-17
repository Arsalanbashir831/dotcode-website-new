import type { Metadata } from "next";
import Link from "next/link";

import { MarketingHeader } from "@/components/landing/sections/marketing-header";
import { JsonLd } from "@/components/seo/json-ld";
import { pageSchema } from "@/lib/seo";

const description = "Practical guides for distributors managing stock, serial numbers, warranties, RMAs and ERP migration.";

export const metadata: Metadata = {
  title: "Wholesale Inventory Guides",
  description,
  alternates: { canonical: "/blog" },
};

const guides = [
  ["Warranty claim management", "/guides/warranty-claim-management", "Build a repeatable claim trail from product identification and invoice verification through repair, replacement or rejection."],
  ["Serial-number inventory tracking", "/guides/serial-number-inventory-tracking", "Learn where to capture serials and how to connect each unit to stock, customer, invoice and warranty records."],
  ["Excel-to-ERP migration", "/guides/excel-to-erp-migration", "Prepare master data, transaction history and validation samples before moving a wholesale operation out of spreadsheets."],
] as const;

export default function BlogPage() {
  return <main className="qa-site seo-page">
    <JsonLd data={pageSchema({ path: "/blog", name: "Wholesale inventory guides", description, type: "CollectionPage" })} />
    <MarketingHeader />
    <article className="qa-container seo-content blog-content">
      <nav className="seo-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Guides</span></nav>
      <p className="qa-eyebrow">Resources</p>
      <h1>Practical guides for stock-led businesses</h1>
      <p className="seo-intro">These product-team guides explain the operational records behind reliable inventory and after-sales work. They focus on the decisions distributors need to make: how an individual unit is traced, what evidence a warranty team should check, how replacements remain connected to original sales, and how spreadsheet records should be prepared before an ERP migration. Each guide provides a concise process that can be adapted to the business’s own approval rules. Where a requirement depends on local tax, accounting or manufacturer policy, the guide says so instead of presenting a universal claim.</p>
      <div className="seo-hub-grid">
        {guides.map(([title, href, summary]) => <section key={href}><h2><Link href={href}>{title}</Link></h2><p>{summary}</p></section>)}
      </div>
    </article>
    <footer className="qa-footer"><div className="qa-container qa-footer-bottom"><p>© {new Date().getFullYear()} Dotcode Solutions</p><Link href="/">QuickAccounts home</Link></div></footer>
  </main>;
}
