import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Building Materials Dealer Software",
  description: "Manage tiles, sanitary ware and building material stock, supplier purchases, contractor accounts and sales invoices from one record.",
  keywords: [
    "building materials dealer software",
    "tiles and sanitary ware inventory",
    "construction material stock software",
    "contractor accounts software",
    "building supplies wholesale system",
  ],
  alternates: { canonical: "/industries/building-materials-tiles-sanitary-ware" },
  openGraph: {
    title: "Building Materials, Tiles & Sanitary Ware Software | Dotcode Solutions",
    description: "Track bulk building material stock, supplier purchasing and contractor account balances across warehouses.",
    url: "/industries/building-materials-tiles-sanitary-ware",
  },
};

export default function BuildingMaterialsPage() {
  return <SeoLandingPage path="/industries/building-materials-tiles-sanitary-ware"
    eyebrow="Dotcode for building materials"
    title="Stock and accounts software for building material dealers"
    intro="Building material dealers work with bulky stock, long supplier chains and customers who buy in phases. Dotcode keeps tile, sanitary ware and material records organized by location, and gives the office a clear view of contractor accounts and invoices."
    sections={[
      {
        heading: "Stock organized by product and location",
        body: "Each product line is held as its own record, with quantities tracked at the warehouse or yard that holds it. When stock is moved between sites, the transfer records the sending and receiving location so the count stays accountable.",
      },
      {
        heading: "Purchasing with the supplier trail intact",
        body: "A purchase record identifies the supplier, the lines ordered, the costs and the destination. Receiving against that record creates the stock increase, so the warehouse can later explain where a consignment came from and when it arrived.",
        bullets: [
          "Purchase orders prepared for a specific supplier and site",
          "Receiving that updates stock at the destination location",
          "Product records that carry the codes your counter uses",
        ],
      },
      {
        heading: "Accounts for contractors and trade buyers",
        body: "Project buying often runs on account and in several invoices. Each sale posts to the customer ledger with a running balance, so the dealer can review what a contractor has taken, what has been paid and what remains outstanding.",
      },
      {
        heading: "Returns, short deliveries and adjustments",
        body: "When goods come back or an invoice needs correction, the adjustment is recorded against the original sale and customer. Stock and account entries follow the same transaction, which keeps the yard and the office from working with different figures.",
      },
    ]}
    faqs={[
      { question: "Can we hold stock in a yard and a showroom?", answer: "Yes. Each yard, warehouse or showroom can be a separate stock location, with transfers recorded between them." },
      { question: "Does it support contractor accounts?", answer: "Yes. Invoices and payments post to a customer ledger with a running balance, so trade accounts are visible in one place." },
      { question: "How are returns and invoice corrections handled?", answer: "They are recorded against the original sale and customer, with stock and account records updated from the same transaction." },
      { question: "Can we see which products move most often?", answer: "Sales and stock records give you the history to review. The demo can show how the team typically reviews movement before the next purchase." },
    ]}
  />;
}
