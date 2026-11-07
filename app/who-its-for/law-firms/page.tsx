import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Accounting & Billing Software for Law Firms",
  description: "Invoice by client and matter, track fees and disbursements, and get paid faster. Simple, one-time pricing.",
  alternates: { canonical: "/who-its-for/law-firms" },
  openGraph: {
    title: "Accounting & Billing Software for Law Firms | QuickAccounts",
    description: "Invoice by client and matter, track fees and disbursements, and get paid faster. Simple, one-time pricing.",
    url: "/who-its-for/law-firms",
  },
};

export default function LawFirmsPage() {
  return (
    <SeoLandingPage
      path="/who-its-for/law-firms"
      eyebrow="Law firms"
      title="Billing and books by matter"
      intro="Invoice by client and matter, record fees and disbursements, track retainers received and chase overdue bills."
      description="Invoice by client and matter, track fees and disbursements, and get paid faster. Simple, one-time pricing."
      sections={[
        {
                "heading": "Invoice by client and matter",
                "body": "Raise invoices against each matter, so what you bill and what you collect stays organised by client and case."
        },
        {
                "heading": "Fees and disbursements",
                "body": "Record your fees alongside disbursements and client expenses, so every invoice reflects the full cost of the matter."
        },
        {
                "heading": "Track retainers and chase overdue bills",
                "body": "Keep track of retainers received and see which bills are overdue, so you follow up on unpaid fees without delay."
        }
]}
      faqs={[
        {
                "question": "Can I invoice by matter?",
                "answer": "Yes. Tag income and expenses to a client or matter and invoice against it."
        },
        {
                "question": "Can I track fees and disbursements?",
                "answer": "Yes. Record fees and disbursements together, and see them in your reports. If you need trust or client-money accounting, confirm the exact setup in a demo."
        },
        {
                "question": "How much does QuickAccounts cost?",
                "answer": "Pay once and use it for life. Online is $850 one-time plus $40/month hosting, with unlimited users. Offline is $1,200 one-time for one user. There is no yearly software renewal fee."
        }
]}
    />
  );
}
