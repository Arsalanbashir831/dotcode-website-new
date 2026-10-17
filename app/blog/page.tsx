import type { Metadata } from "next";
import Link from "next/link";
import { MarketingHeader } from "@/components/landing/sections/marketing-header";

export const metadata: Metadata = { title: "Wholesale Inventory and Warranty Guides", description: "Practical guides from Dotcode for distributors managing stock, serial numbers, warranties and ERP migration.", alternates: { canonical: "/blog" } };
export default function BlogPage() {
  return <main className="qa-site seo-page">
    <MarketingHeader />
    <article className="qa-container seo-content blog-content">
      <p className="qa-eyebrow">Resources</p>
      <h1>Practical guides for stock-led businesses</h1>
      <p className="seo-intro">Use these guides to improve inventory traceability, warranty handling and migration planning before choosing a system.</p>
      <nav className="seo-related-links" aria-label="Guides"><div>
        <Link href="/guides/warranty-claim-management">Warranty claim management</Link>
        <Link href="/guides/serial-number-inventory-tracking">Serial-number inventory tracking</Link>
        <Link href="/guides/excel-to-erp-migration">Excel to ERP migration</Link>
      </div></nav>
    </article>
    <footer className="qa-footer"><div className="qa-container qa-footer-bottom">
      <p>© {new Date().getFullYear()} Dotcode Solutions</p>
      <Link href="/">QuickAccounts home</Link>
    </div></footer>
  </main>;
}
