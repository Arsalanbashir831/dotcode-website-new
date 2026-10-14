import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "RMA and Warranty Replacement Tracking Software",
  description: "Track distributor RMAs, warranty verification, returns and product replacements alongside serial and invoice records in QuickAccounts.",
  alternates: { canonical: "/features/rma-replacement-tracking" },
};

export default function RmaReplacementPage() {
  return <SeoLandingPage eyebrow="Returns and replacements" title="Keep every RMA connected to the product and sale" intro="QuickAccounts helps distributor teams trace a returned unit, verify its warranty context and coordinate a replacement without losing the original record." sections={[
    { heading: "Start from the returned product", body: "Use the product or serial record as the starting point for a return inquiry, then review the related invoice and customer details." },
    { heading: "Separate verification from resolution", body: "Document the claim, confirm the relevant product history and move the case toward return, repair or replacement according to your business process." },
    { heading: "Give service and sales the same context", body: "Keep after-sales conversations grounded in the same stock, customer and invoice records used by the rest of the operation." },
  ]} faqs={[
    { question: "Can RMA records be linked to serial numbers?", answer: "QuickAccounts supports workflows that connect serial records, invoices and warranty or return handling. Confirm your exact process in a demo." },
    { question: "Can we track replacements?", answer: "Replacement handling can be reviewed as part of the return and warranty workflow during your guided demo." },
  ]} />;
}
