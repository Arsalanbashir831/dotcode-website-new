import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "FMCG Distributor Software",
  description: "Manage fast-moving consumer goods stock, supplier purchasing, sales invoices and retailer accounts across warehouses in one connected workflow.",
  keywords: [
    "FMCG distributor software",
    "FMCG inventory management",
    "consumer goods wholesale software",
    "distributor stock and accounts software",
    "FMCG sales invoice software",
  ],
  alternates: { canonical: "/industries/fmcg-wholesalers-distributors" },
  openGraph: {
    title: "FMCG Distributor Software | Dotcode Solutions",
    description: "Keep a high-volume FMCG catalogue, supplier purchasing, stock across warehouses and retailer accounts in one system.",
    url: "/industries/fmcg-wholesalers-distributors",
  },
};

export default function FmcgWholesalersPage() {
  return <SeoLandingPage path="/industries/fmcg-wholesalers-distributors"
    eyebrow="Dotcode for FMCG trade"
    title="Inventory and accounts software for FMCG wholesalers"
    intro="FMCG distribution runs on volume and repetition: many product lines, frequent supplier receipts and retailers who expect accurate invoices. Dotcode keeps those records connected so stock, sales and account balances stay in step."
    sections={[
      {
        heading: "Keep a high-volume catalogue organized",
        body: "A consumer goods catalogue changes constantly as new lines arrive and old ones are discontinued. Product records give every item a consistent code and supplier context, so counter staff, warehouse teams and accounts work from the same description.",
        bullets: [
          "Product-level records instead of scattered SKU lists",
          "Supplier purchasing connected to the receiving location",
          "Sales invoices that update stock and the customer ledger together",
        ],
      },
      {
        heading: "Receive and replenish from clear purchase records",
        body: "A purchase order identifies the supplier, the expected lines, costs and the warehouse that will receive the goods. When the delivery is confirmed, the stock increase stays linked to that commercial source rather than appearing as an unexplained adjustment.",
      },
      {
        heading: "Sell to retailers and watch the account, not just the invoice",
        body: "FMCG wholesalers sell repeatedly to the same shops and resellers. Each invoice adds to the customer's running balance, and returns or adjustments post against the same account so the team can follow up on overdue amounts with the full history visible.",
      },
      {
        heading: "Run multiple warehouses from one system",
        body: "Stock can be organized by warehouse, depot or outlet, with transfers recorded between locations. Teams see where quantities sit before promising a delivery, and accounts can review sales, purchases and cash alongside the stock records. Dotcode handles setup, supported data migration and team training.",
      },
    ]}
    faqs={[
      { question: "Can Dotcode handle a large FMCG product catalogue?", answer: "Records are organized at product level so staff can search and bill the right line. Share your SKU count and product structure during the demo so the team can confirm the setup." },
      { question: "Can we manage stock in more than one warehouse?", answer: "Yes. Warehouses and outlets are defined as separate locations, and transfers between them can be recorded so stock movement stays traceable." },
      { question: "How are returns from retailers handled?", answer: "Returns can be connected to the original invoice and customer account, with the stock and balance updated from the same transaction." },
      { question: "Does it track batch numbers or expiry dates?", answer: "Batch and expiry needs vary by product line and by how you report on them. Bring your requirements to the guided demo and the team will confirm what the setup covers before you commit." },
    ]}
  />;
}
