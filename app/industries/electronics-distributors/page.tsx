import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "ERP and Inventory Software for Electronics Distributors",
  description: "Track electronics stock, serial numbers, warranty claims, returns and replacements with QuickAccounts software for distributors.",
  alternates: { canonical: "/industries/electronics-distributors" },
  openGraph: { title: "Inventory and Warranty Software for Electronics Distributors | QuickAccounts", description: "Track electronics products by serial number and connect warranty, return and replacement workflows with sales records.", url: "/industries/electronics-distributors" },
};

export default function ElectronicsDistributorsPage() {
  return <SeoLandingPage
    eyebrow="QuickAccounts for electronics trade"
    title="Inventory and warranty software for electronics distributors"
    intro="Manage electronics stock and purchase records, trace products by serial number, and give your team a clearer workflow for invoice checks, warranty inquiries, returns and replacements."
    sections={[
      { heading: "Trace individual units through your operation", body: "Serial number tracking helps an electronics distributor follow an individual item from stock receipt to sale. When a customer brings a product back, staff can look up its record and connect the unit to its sales invoice." },
      { heading: "Connect warranty service to the original sale", body: "Warranty and RMA work depends on product, invoice and customer details. QuickAccounts brings serial lookup, sales records and customer information together to help staff verify claims and coordinate returns or replacements." },
      { heading: "Keep trade operations and accounts together", body: "Alongside traceability and service workflows, QuickAccounts helps teams organize stock, purchases, cash, customer accounts and ledgers. Dotcode provides setup, supported data migration and team training." },
    ]}
    faqs={[
      { question: "Can electronics distributors track warranty claims by serial number?", answer: "Yes. QuickAccounts connects serial tracking and invoice lookup with warranty claim handling so staff can review product and sales information." },
      { question: "Can it manage returns and replacements?", answer: "Yes. QuickAccounts supports return and replacement workflows for distribution businesses." },
      { question: "How can I see whether it fits our process?", answer: "Book a WhatsApp demo with Dotcode and walk through receiving, sales, serial lookup and warranty scenarios from your operation." },
    ]}
  />;
}
