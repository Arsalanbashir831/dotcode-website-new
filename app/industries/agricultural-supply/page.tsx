import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Agricultural Supply Distributor Software",
  description: "Track agricultural input and supply stock, seasonal purchasing, dealer accounts and sales invoices across regional warehouses.",
  keywords: [
    "agricultural supply distributor software",
    "agri input inventory management",
    "farm supply wholesale accounts",
    "agricultural stock and invoicing system",
    "dealer accounts software",
  ],
  alternates: { canonical: "/industries/agricultural-supply" },
  openGraph: {
    title: "Agricultural Supply Software | Dotcode Solutions",
    description: "Manage seasonal agricultural stock, regional warehouses, dealer accounts and invoices in one connected workflow.",
    url: "/industries/agricultural-supply",
  },
};

export default function AgriculturalSupplyPage() {
  return <SeoLandingPage path="/industries/agricultural-supply"
    eyebrow="Dotcode for agricultural supply"
    title="Inventory software for agricultural supply distributors"
    intro="Agricultural supply follows the crop calendar. Demand concentrates around sowing and harvest, stock sits across regional warehouses, and dealers buy on account. Dotcode keeps those threads together so the office can answer stock and balance questions during the busiest weeks."
    sections={[
      {
        heading: "Seasonal purchasing with a supplier trail",
        body: "Purchases are prepared for a specific supplier, with the lines, costs and receiving location recorded before the goods arrive. Receiving against that order creates the stock increase, so a consignment can be traced back to its source when questions come up.",
      },
      {
        heading: "Stock across regional warehouses",
        body: "Regional depots and central warehouses can be separate stock locations, each with its own code. Transfers record what moved between sites and when, which helps the team decide where to send the next delivery.",
        bullets: [
          "Separate records for each depot or warehouse",
          "Transfers with a sending and receiving location",
          "Purchases tied to the site that receives the goods",
        ],
      },
      {
        heading: "Dealer and grower accounts",
        body: "Dealers and larger growers often buy across a season and settle in stages. Invoices post to the customer ledger with a running balance, so outstanding amounts and the sales behind them can be reviewed in one place.",
      },
      {
        heading: "Returns and replacements",
        body: "When stock is returned or replaced, staff can open the original sale and customer first. The return is recorded against that transaction, and stock and account entries follow so the depot and the office stay aligned. Dotcode provides setup, supported migration and training.",
      },
    ]}
    faqs={[
      { question: "Can we plan purchases around the season?", answer: "Purchase records and sales history give the team a basis for seasonal planning, and each order stays traceable to its supplier and receiving site." },
      { question: "Can we manage stock in several regional warehouses?", answer: "Yes. Each depot or warehouse is a separate stock location, with transfers recorded between them." },
      { question: "Does it support dealer accounts?", answer: "Yes. Invoiced sales post to a customer ledger with a running balance, so dealer balances are visible alongside their transaction history." },
      { question: "Does it handle regulated agricultural products?", answer: "Record requirements for regulated inputs vary by product and jurisdiction. Bring your needs to the guided demo so the team can confirm what the setup covers; regulatory procedures remain with your own team." },
    ]}
  />;
}
