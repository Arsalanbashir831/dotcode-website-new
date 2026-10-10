import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Warranty Claim and RMA Management for Distributors",
  description: "Manage warranty inquiries, verify product serials and invoices, and coordinate returns and replacements for wholesale distributors with QuickAccounts.",
  alternates: { canonical: "/features/warranty-management" },
  openGraph: {
    title: "Warranty and RMA Management | QuickAccounts",
    description: "Connect warranty verification, product traceability, invoice lookup and replacement workflows for distributors.",
    url: "/features/warranty-management",
  },
};

export default function WarrantyManagementPage() {
  return <SeoLandingPage
    eyebrow="After-sales support for distributors"
    title="Warranty claim and RMA management for wholesale distributors"
    intro="Bring product traceability, invoice lookup and customer service together when handling warranty claims, returns and replacements. QuickAccounts supports distributor workflows for electronics, hardware and accessories businesses."
    sections={[
      { heading: "Resolve warranty inquiries with the right records", body: "A warranty request often starts with a product serial number and a customer asking when it was sold. Connect serial lookup with invoice and customer records so staff can review the relevant transaction before deciding the next step." },
      { heading: "Coordinate returns and replacements", body: "Keep the return or replacement process connected to the original sale and product history. Staff can follow an inquiry through verification, return handling and replacement so the team has the context it needs when speaking with the customer.", bullets: ["Verify a product against its serial record", "Find related invoice and customer information", "Track return and replacement handling as part of the service workflow"] },
      { heading: "Designed around real distributor service desks", body: "High-volume wholesalers need quick answers without searching multiple systems. In a demo, Dotcode can walk through a warranty or RMA example from the customer inquiry to verification and resolution." },
    ]}
    faqs={[
      { question: "Can QuickAccounts help manage warranty claims?", answer: "Yes. QuickAccounts supports warranty verification and claim handling workflows connected to product and sales records." },
      { question: "Does it support returns and replacements?", answer: "QuickAccounts supports distributor return and product replacement workflows. Ask Dotcode to demonstrate the process for your current policy." },
      { question: "How does serial tracking help with warranty checks?", answer: "A serial number can help staff identify an individual unit and locate the associated invoice and product history during a warranty inquiry." },
    ]}
  />;
}
