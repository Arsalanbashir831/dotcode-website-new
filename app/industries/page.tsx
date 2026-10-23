import type { Metadata } from "next";
import Link from "next/link";

import { MarketingHeader } from "@/components/landing/sections/marketing-header";
import { JsonLd } from "@/components/seo/json-ld";
import { pageSchema } from "@/lib/seo";

const description = "See how QuickAccounts supports inventory, purchasing, sales, accounts and after-sales workflows across distribution and retail sectors.";

export const metadata: Metadata = {
  title: "Industries Using QuickAccounts",
  description,
  alternates: { canonical: "/industries" },
};

const industries = [
  ["FMCG wholesalers & distributors", "/industries/fmcg-wholesalers-distributors", "Manage high-volume stock, supplier purchasing and retailer account balances."],
  ["Clothing & garment trade", "/industries/clothing-garment-retailers-wholesalers", "Coordinate garment stock across shops, stockrooms and wholesale warehouses."],
  ["Cosmetics & beauty distributors", "/industries/cosmetics-beauty-distributors", "Organize a broad beauty catalogue, salon accounts and return records."],
  ["Automotive & motorcycle parts", "/industries/automotive-motorcycle-spare-parts", "Look up parts, bill counter sales and track workshop account balances."],
  ["Grocery stores & supermarkets", "/industries/grocery-stores-supermarkets", "Connect counter sales, stock replenishment and supplier purchasing."],
  ["Building materials & sanitary ware", "/industries/building-materials-tiles-sanitary-ware", "Track bulk material stock, site orders and contractor accounts."],
  ["Pharmaceutical & medical supply", "/industries/pharmaceutical-medical-supply", "Keep purchasing, stock, invoices and institutional account records organized."],
  ["Footwear & leather goods", "/industries/footwear-leather-goods", "Manage shop and warehouse stock with invoice-linked exchanges."],
  ["Furniture & home furnishing", "/industries/furniture-home-furnishing", "Follow high-value stock across showrooms and warehouses."],
  ["Food & restaurant supply", "/industries/food-restaurant-supply", "Support repeat wholesale orders and customer account balances."],
  ["Stationery & school supply", "/industries/stationery-school-supply", "Plan seasonal buying and manage institutional customer accounts."],
  ["Agricultural supply", "/industries/agricultural-supply", "Track seasonal stock and dealer accounts across regional warehouses."],
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
    <article>
      <section className="seo-hero">
        <div className="qa-container">
          <nav className="seo-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Industries</span></nav>
          <p className="qa-eyebrow">Industry workflows</p>
          <h1>QuickAccounts for distributors and stock-led retailers</h1>
          <p className="seo-intro">The same inventory system needs different emphasis in different trades. Explore workflow pages for everyday consumer goods, clothing, grocery, building materials, food service and agriculture, alongside serialized electronics, hardware, multi-location retail and general wholesale operations.</p>
        </div>
      </section>
      <div className="qa-container seo-content">
        <div className="seo-hub-grid industries-hub-grid">
          {industries.map(([title, href, summary]) => <section key={href}><h2><Link href={href}>{title}</Link></h2><p>{summary}</p></section>)}
        </div>
      </div>
    </article>
  </main>;
}
