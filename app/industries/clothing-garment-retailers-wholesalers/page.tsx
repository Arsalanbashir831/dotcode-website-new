import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Clothing Retail & Wholesale Software",
  description: "Organize garment stock, purchasing, counter sales and wholesale customer accounts across shops, stockrooms and warehouses.",
  keywords: [
    "clothing retailer software",
    "garment wholesale inventory software",
    "apparel stock management",
    "fashion retail accounts software",
    "clothing store POS and inventory",
  ],
  alternates: { canonical: "/industries/clothing-garment-retailers-wholesalers" },
  openGraph: {
    title: "Clothing Retail & Wholesale Software | Dotcode Solutions",
    description: "Manage garment catalogue records, shop and warehouse stock, counter sales and wholesale customer accounts in one workflow.",
    url: "/industries/clothing-garment-retailers-wholesalers",
  },
};

export default function ClothingGarmentPage() {
  return <SeoLandingPage path="/industries/clothing-garment-retailers-wholesalers"
    eyebrow="Dotcode for clothing and garment trade"
    title="Inventory software for clothing retailers and wholesalers"
    intro="Clothing businesses carry a wide, changing range across shop floors, stockrooms and wholesale warehouses. Dotcode gives each sellable line a clear record so purchasing, counter sales and trade accounts stay connected."
    sections={[
      {
        heading: "One catalogue for a changing range",
        body: "Seasonal intake means the catalogue is never static. Each sellable line is recorded with a code and supplier context, so staff can search the range quickly and buyers can see what was ordered from which supplier.",
        bullets: [
          "A single product record used by the counter and the office",
          "Supplier purchase history for each line",
          "Sales records that reflect what was actually billed",
        ],
      },
      {
        heading: "Shop floor, stockroom and warehouse in one view",
        body: "Retail outlets and storage locations can be set up separately, each with its own code and manager. Transfers between the stockroom and the shop, or between the warehouse and a branch, keep a direction and a reference instead of relying on informal notes.",
      },
      {
        heading: "Counter sales and trade accounts together",
        body: "Retail bills taken at the counter can sync to the central stock and account records, while wholesale orders can be invoiced against a customer account. Both paths update the same catalogue, so the team is not reconciling two sets of figures at month end.",
      },
      {
        heading: "Exchanges with the original sale in view",
        body: "When a customer returns an item, staff can trace it back to the original invoice and customer before deciding on an exchange or adjustment. The return posts against the stock record and, where relevant, the customer's balance so the paperwork matches the goods.",
      },
    ]}
    faqs={[
      { question: "How should we record styles with different colours and sizes?", answer: "Most retailers give each sellable line its own product code so staff bill the exact item. Share your item structure in the demo and the team will map it to the setup." },
      { question: "Can we manage several shops and a central warehouse?", answer: "Yes. Each outlet and warehouse is a separate stock location, and transfers between them can be recorded with a reference." },
      { question: "Does it support wholesale customer accounts?", answer: "Yes. Trade invoices can be posted to a customer ledger with a running balance, alongside the stock movement they create." },
      { question: "How are exchanges and returns recorded?", answer: "Returns are linked to the original sale and customer, then reflected in stock and account records. The demo can walk through a typical exchange from your shop." },
    ]}
  />;
}
