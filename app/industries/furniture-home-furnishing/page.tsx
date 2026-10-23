import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Furniture & Home Furnishing Software",
  description: "Track furniture and home furnishing stock, showroom and warehouse locations, sales invoices and customer account balances.",
  keywords: [
    "furniture store software",
    "home furnishing inventory management",
    "furniture wholesale accounts software",
    "showroom stock management",
    "furniture sales and stock records",
  ],
  alternates: { canonical: "/industries/furniture-home-furnishing" },
  openGraph: {
    title: "Furniture & Home Furnishing Software | Dotcode Solutions",
    description: "Manage high-value furniture stock across showrooms and warehouses, with invoice-linked sales and customer account balances.",
    url: "/industries/furniture-home-furnishing",
  },
};

export default function FurnitureHomePage() {
  return <SeoLandingPage path="/industries/furniture-home-furnishing"
    eyebrow="Dotcode for furniture retail"
    title="Inventory software for furniture and home furnishing businesses"
    intro="Furniture and home furnishing businesses deal in fewer, higher-value items where every unit matters. Dotcode keeps showroom and warehouse stock distinct, and makes the sale, customer and invoice easy to trace when a question comes up weeks later."
    sections={[
      {
        heading: "High-value stock with a clear location",
        body: "A display piece in the showroom and the same model in the warehouse are different stock positions. Defining each site as a location lets the team see where a unit is before confirming it to a customer, and transfers record the movement between showroom and store.",
      },
      {
        heading: "A sale record you can return to",
        body: "Each invoice keeps the customer, the items billed and the location that released the stock together. When a customer asks about an order, the team can open the sale instead of reconstructing it from delivery notes and messages.",
        bullets: [
          "Invoices connected to the customer and their account",
          "Stock released from a named showroom or warehouse",
          "Transaction history available for after-sales questions",
        ],
      },
      {
        heading: "Accounts for retail and trade buyers",
        body: "Interior designers, offices and resellers often buy on account. Invoices post to a customer ledger with a running balance, so the business can review outstanding amounts and the sales behind them in one place.",
      },
      {
        heading: "Returns, exchanges and adjustments",
        body: "Furniture returns often involve a replacement or a price adjustment. The return is recorded against the original sale and customer, with stock and account entries updated from the same transaction. Dotcode provides setup, supported migration and team training.",
      },
    ]}
    faqs={[
      { question: "Can we separate showroom and warehouse stock?", answer: "Yes. Each showroom, warehouse or store can be a separate stock location, with transfers recorded between them." },
      { question: "Does it support trade customer accounts?", answer: "Yes. Invoiced sales post to a customer ledger with a running balance, alongside the stock movement." },
      { question: "How are furniture returns and exchanges recorded?", answer: "They are linked to the original invoice and customer, so stock and account records stay consistent." },
      { question: "Can we manage more than one branch?", answer: "Yes. Locations are defined separately and stock movement between branches is recorded with a reference." },
    ]}
  />;
}
