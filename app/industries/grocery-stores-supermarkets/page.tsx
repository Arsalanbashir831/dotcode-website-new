import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Grocery & Supermarket Software",
  description: "Connect counter sales, stock replenishment, supplier purchasing and cash records for grocery stores and supermarkets.",
  keywords: [
    "grocery store software",
    "supermarket inventory management",
    "grocery POS integration",
    "grocery stock replenishment software",
    "supermarket accounts and purchasing",
  ],
  alternates: { canonical: "/industries/grocery-stores-supermarkets" },
  openGraph: {
    title: "Grocery Store & Supermarket Software | Dotcode Solutions",
    description: "Keep counter sales, stock, supplier purchasing and cash records connected across grocery outlets.",
    url: "/industries/grocery-stores-supermarkets",
  },
};

export default function GrocerySupermarketsPage() {
  return <SeoLandingPage path="/industries/grocery-stores-supermarkets"
    eyebrow="Dotcode for grocery retail"
    title="Inventory and POS software for grocery stores and supermarkets"
    intro="Grocery retail leaves little room for slow answers. A till sale changes stock, a delivery changes stock again, and cash has to reconcile at the end of the day. Dotcode keeps those movements connected so the store, the stockroom and the office see the same figures."
    sections={[
      {
        heading: "Counter sales that update stock as they happen",
        body: "POS bills capture the products, quantities and payment at the till. Once synced, the sale updates the central stock record and the customer account where one applies, so the shop floor and the back office are not working from different totals.",
      },
      {
        heading: "Replenishment driven by stock records",
        body: "Purchases are recorded against a supplier and a receiving location, then become the basis for the stock increase. Reviews of what is on hand and what has been ordered help the team plan the next delivery instead of reacting to an empty shelf.",
        bullets: [
          "Supplier purchases tied to the receiving store or warehouse",
          "Stock records shared by the counter and the office",
          "Sales history that shows what is actually moving",
        ],
      },
      {
        heading: "Multiple outlets, one product catalogue",
        body: "Shops, stockrooms and central warehouses can be set up as separate locations with their own codes. Transfers between them are recorded with a reference, which is useful when stock is moved between branches or brought in from a distribution point.",
      },
      {
        heading: "Cash and accounts in the same system",
        body: "Cash movements, supplier balances and customer accounts sit alongside stock and sales. That makes daily reconciliation and account follow-up part of the same workflow, rather than a separate exercise at the end of the week. Dotcode provides setup, supported migration and team training.",
      },
    ]}
    faqs={[
      { question: "Can Dotcode connect with our current till setup?", answer: "POS integration connects counter sales to central stock and accounts. Share the till or POS software you use during the demo so the team can confirm the connection." },
      { question: "Can we manage several grocery outlets?", answer: "Yes. Each outlet and warehouse is a separate stock location, with transfers recorded between sites." },
      { question: "Does it record cash as well as stock?", answer: "Yes. Cash records, purchases, sales and customer or supplier balances are kept alongside the stock ledger." },
      { question: "Can it handle expiry dates or stock rotation?", answer: "Expiry and rotation requirements depend on your range and reporting. Bring those details to the guided demo so the team can confirm what the setup covers." },
    ]}
  />;
}
