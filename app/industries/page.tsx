import type { Metadata } from "next";
import Link from "next/link";

import { MarketingHeader } from "@/components/landing/sections/marketing-header";
import { JsonLd } from "@/components/seo/json-ld";
import { pageSchema } from "@/lib/seo";

const description = "See how QuickAccounts supports inventory, serial, warranty and account workflows across distribution and retail sectors.";

export const metadata: Metadata = {
  title: "Industries Using QuickAccounts",
  description,
  alternates: { canonical: "/industries" },
};

const industries = [
  ["Electronics distributors", "/industries/electronics-distributors", "Trace electronics stock, sales, serials and warranty cases."],
  ["CCTV distributors", "/industries/cctv-distributors", "Manage cameras, recorders, accessories, invoices and after-sales work."],
  ["Computer hardware wholesalers", "/industries/computer-hardware-wholesalers", "Follow RAM, drives and other hardware by stock and serial record."],
  ["Hard-drive distributors", "/industries/hard-drive-distributors", "Connect drive serials to receiving, sales and warranty inquiries."],
  ["Multi-outlet retailers", "/industries/multi-outlet-retailers", "Coordinate inventory and accounts across branches and outlets."],
  ["Merchandise wholesalers", "/industries/merchandise-wholesalers", "Organize general stock, purchasing and customer accounts."],
] as const;

export default function IndustriesPage() {
  return <main className="qa-site seo-page">
    <JsonLd data={pageSchema({ path: "/industries", name: "Industries using QuickAccounts", description, type: "CollectionPage" })} />
    <MarketingHeader />
    <article className="qa-container seo-content blog-content">
      <nav className="seo-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Industries</span></nav>
      <p className="qa-eyebrow">Industry workflows</p>
      <h1>QuickAccounts for distributors and stock-led retailers</h1>
      <p className="seo-intro">The same inventory system needs different emphasis in different trades. Explore workflow pages for serialized electronics, CCTV, computer hardware, multi-location retail and general wholesale operations.</p>
      <div className="seo-hub-grid">
        {industries.map(([title, href, summary]) => <section key={href}><h2><Link href={href}>{title}</Link></h2><p>{summary}</p></section>)}
      </div>
    </article>
  </main>;
}
