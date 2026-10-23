import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Pharmaceutical Distributor Software",
  description: "Keep pharmaceutical and medical supply stock, supplier purchasing, customer invoices and account records organized in one system.",
  keywords: [
    "pharmaceutical distributor software",
    "medical supply inventory management",
    "pharma wholesale accounts software",
    "medical stock and invoice system",
    "pharmacy supply distributor records",
  ],
  alternates: { canonical: "/industries/pharmaceutical-medical-supply" },
  openGraph: {
    title: "Pharmaceutical & Medical Supply Software | Dotcode Solutions",
    description: "Organize pharmaceutical and medical supply purchasing, stock, invoices and customer account records in one workflow.",
    url: "/industries/pharmaceutical-medical-supply",
  },
};

export default function PharmaceuticalSupplyPage() {
  return <SeoLandingPage path="/industries/pharmaceutical-medical-supply"
    eyebrow="Dotcode for medical supply"
    title="Inventory and accounts software for pharmaceutical distributors"
    intro="Pharmaceutical and medical supply distribution needs dependable records: which supplier sent what, where it was received, which customer was invoiced and what remains on account. Dotcode brings those records together while your quality and regulatory procedures stay with your team."
    sections={[
      {
        heading: "Structured records for a sensitive product range",
        body: "Every product line, supplier purchase and customer invoice is recorded as a distinct entry. That structure makes it easier to trace a transaction later, whether the question comes from accounts, the warehouse or a customer.",
        bullets: [
          "Product records with consistent codes and supplier context",
          "Purchase and receipt records that name the receiving location",
          "Invoices connected to the customer and their account balance",
        ],
      },
      {
        heading: "Purchasing and receiving with supplier context",
        body: "Purchases are prepared for a specific supplier and destination, then received against that order. The stock increase stays attached to the commercial record, so quantities can be reviewed without reconstructing a delivery from emails and delivery notes.",
      },
      {
        heading: "Accounts for pharmacies, clinics and hospitals",
        body: "Institutional buyers often work on invoiced terms. Each invoice posts to the customer ledger with a running balance, giving the accounts team a clear view of outstanding amounts and the transaction history behind them.",
      },
      {
        heading: "Returns handled against the original invoice",
        body: "When stock is returned, staff can open the original sale and customer before recording the return. Stock and account entries are updated from the same transaction, keeping the paper trail and the warehouse count aligned. Dotcode provides setup, supported migration and team training.",
      },
    ]}
    faqs={[
      { question: "Does Dotcode handle batch numbers and expiry dates?", answer: "Batch and expiry requirements vary by product line and jurisdiction, so we do not want to overstate coverage. Bring your product list and reporting needs to the guided demo and the team will confirm what the setup covers." },
      { question: "Is this a regulatory compliance system?", answer: "No. Dotcode is a business records system for stock, purchasing, sales and accounts. Your quality-management and regulatory procedures remain with your own team." },
      { question: "Can we track stock across several warehouses?", answer: "Yes. Each warehouse or outlet is a separate stock location, and transfers between them are recorded with a reference." },
      { question: "Can we manage institutional customer accounts?", answer: "Yes. Invoiced sales post to a customer ledger with a running balance, so balances and transaction history can be reviewed together." },
    ]}
  />;
}
