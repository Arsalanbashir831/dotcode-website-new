import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Accounting Software for Consulting Firms",
  description: "Invoice retainers and project fees, track consultant costs and travel, and see which clients are most profitable. Simple, one-time pricing.",
  alternates: { canonical: "/who-its-for/consulting-firms" },
  openGraph: {
    title: "Accounting Software for Consulting Firms | QuickAccounts",
    description: "Invoice retainers and project fees, track consultant costs and travel, and see which clients are most profitable. Simple, one-time pricing.",
    url: "/who-its-for/consulting-firms",
  },
};

export default function ConsultingFirmsPage() {
  return (
    <SeoLandingPage
      path="/who-its-for/consulting-firms"
      eyebrow="Consulting firms"
      title="Bill every engagement, see every margin"
      intro="Invoice retainers and project fees, track consultant costs and travel, and see which clients are most profitable."
      description="Invoice retainers and project fees, track consultant costs and travel, and see which clients are most profitable. Simple, one-time pricing."
      sections={[
        {
                "heading": "Bill engagements and retainers",
                "body": "Invoice by the hour, by milestone, a fixed fee or a monthly retainer, so every engagement is billed the way you agreed it."
        },
        {
                "heading": "Track consultant costs and travel",
                "body": "Record salaries, subcontractor fees, travel and client-billable expenses by project, so costs sit next to the revenue they relate to."
        },
        {
                "heading": "See which clients drive your profit",
                "body": "Compare what each client earns against what it costs. You will know who to grow and who to reprice."
        }
]}
      faqs={[
        {
                "question": "Can I bill retainers and project fees?",
                "answer": "Yes. Bill however you charge clients, and set up recurring invoices for monthly retainers."
        },
        {
                "question": "Can I see profit by client?",
                "answer": "Yes. Tag income and expenses to a client and see what each one earns."
        },
        {
                "question": "How much does QuickAccounts cost?",
                "answer": "Pay once and use it for life. Online is $850 one-time plus $40/month hosting, with unlimited users. Offline is $1,200 one-time for one user. There is no yearly software renewal fee."
        }
]}
    />
  );
}
