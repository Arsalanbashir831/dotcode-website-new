import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Client Invoicing Software for Service Firms",
  description: "Create branded client invoices in seconds with your terms and bank details, and record payments as they arrive. Simple, one-time pricing.",
  alternates: { canonical: "/features/client-invoicing" },
  openGraph: {
    title: "Client Invoicing Software for Service Firms | QuickAccounts",
    description: "Create branded client invoices in seconds with your terms and bank details, and record payments as they arrive. Simple, one-time pricing.",
    url: "/features/client-invoicing",
  },
};

export default function ClientInvoicingPage() {
  return (
    <SeoLandingPage
      path="/features/client-invoicing"
      eyebrow="Client invoicing"
      title="Invoices that get you paid faster"
      intro="Create branded invoices in seconds, add your terms and bank details, and record payments as they arrive."
      description="Create branded client invoices in seconds with your terms and bank details, and record payments as they arrive. Simple, one-time pricing."
      sections={[
        {
                "heading": "Professional invoices without the effort",
                "body": "Add your logo, payment terms and bank details once. After that, every invoice goes out looking the same and looking right. No retyping, no copying from an old document."
        },
        {
                "heading": "Record payments against the invoice",
                "body": "When a client pays, log it against the invoice. The invoice shows as paid and the client balance updates, so you never wonder who has paid and who has not."
        },
        {
                "heading": "Built for firms that bill for expertise",
                "body": "Invoice for consulting fees, legal matters, development projects or campaigns. Everything you bill sits in one place, ready for reports and for your accountant."
        }
]}
      faqs={[
        {
                "question": "Can I add my logo and payment details?",
                "answer": "Yes. Your logo, terms and bank details appear on every invoice."
        },
        {
                "question": "Can I record part payments?",
                "answer": "Confirm how part payments are handled for your setup during the demo. Payments are recorded against each invoice and flow into the client balance."
        },
        {
                "question": "How does setup work?",
                "answer": "We set up QuickAccounts for you, bring over your clients, vendors and opening balances, and train your team. Setup, data transfer and training are included."
        }
]}
    />
  );
}
