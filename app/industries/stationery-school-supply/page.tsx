import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Stationery & School Supply Software",
  description: "Manage stationery and school supply stock, seasonal purchasing, bulk sales, invoices and institutional customer accounts.",
  keywords: [
    "stationery distributor software",
    "school supply inventory management",
    "stationery wholesale accounts software",
    "office supply stock system",
    "seasonal stock planning software",
  ],
  alternates: { canonical: "/industries/stationery-school-supply" },
  openGraph: {
    title: "Stationery & School Supply Software | Dotcode Solutions",
    description: "Plan seasonal stock, invoice bulk orders and keep school and office customer account balances in one system.",
    url: "/industries/stationery-school-supply",
  },
};

export default function StationerySchoolSupplyPage() {
  return <SeoLandingPage path="/industries/stationery-school-supply"
    eyebrow="Dotcode for stationery distribution"
    title="Inventory software for stationery and school supply distributors"
    intro="Stationery distribution moves to a school-year rhythm. Demand builds before term, bulk orders arrive from institutions, and the rest of the year runs on steady replenishment. Dotcode keeps purchasing, stock, invoices and customer accounts together through both phases."
    sections={[
      {
        heading: "Seasonal buying from a clear record",
        body: "When the buying season starts, past stock and sales records give the team something concrete to plan from. Purchase orders name the supplier, the lines and the receiving location, so the stock increase can be traced back to the decision behind it.",
      },
      {
        heading: "Bulk orders for schools and offices",
        body: "Institutional orders are usually larger and invoiced rather than paid at a counter. Each invoice records the customer, the lines supplied and the stock location that released them, giving the office a complete sale record to return to.",
        bullets: [
          "Invoiced sales connected to the customer account",
          "Stock released from a named shop or warehouse",
          "Product records staff can search by code",
        ],
      },
      {
        heading: "Stock across shop and warehouse",
        body: "A retail counter and a bulk warehouse serve different customers from the same catalogue. Defining them as separate locations lets the team see where quantities sit, and transfers record movement between the two with a reference.",
      },
      {
        heading: "Returns and exchanges after the season",
        body: "Unsold or incorrect items can come back once the term has started. Returns are recorded against the original invoice and customer, with stock and account entries updated from the same transaction. Dotcode provides setup, supported migration and team training.",
      },
    ]}
    faqs={[
      { question: "Can we plan stock around the school season?", answer: "Purchasing and sales records give you the history to plan from, and purchase orders keep the seasonal intake traceable to each supplier." },
      { question: "Does it support institutional customer accounts?", answer: "Yes. Invoiced sales post to a customer ledger with a running balance, so school and office accounts can be reviewed together." },
      { question: "Can we run a retail counter and a bulk warehouse?", answer: "Yes. They can be separate stock locations, with transfers recorded between them." },
      { question: "How are returns after the season handled?", answer: "Returns link to the original invoice and customer, with stock and account records updated from the same transaction." },
    ]}
  />;
}
