import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Accounting Software for Accounting & Audit Practices",
  description: "Bill engagements and annual fees, track staff costs and keep your firm's reports ready.",
  alternates: { canonical: "/who-its-for/accounting-audit-and-tax-practices" },
  openGraph: {
    title: "Accounting Software for Accounting & Audit Practices | QuickAccounts",
    description: "Bill engagements and annual fees, track staff costs and keep your firm's reports ready.",
    url: "/who-its-for/accounting-audit-and-tax-practices",
  },
};

export default function AccountingAuditAndTaxPracticesPage() {
  return (
    <SeoLandingPage
      path="/who-its-for/accounting-audit-and-tax-practices"
      eyebrow="Accounting, audit and tax practices"
      title="Run your own firm's books as well as your clients'"
      intro="Bill engagements and annual fees, track staff costs and keep your firm's reports ready."
      description="Bill engagements and annual fees, track staff costs and keep your firm's reports ready."
      sections={[
        {
                "heading": "Bill engagements and annual fees",
                "body": "Invoice audits, tax work and recurring annual fees, with recurring invoices for the clients you serve all year."
        },
        {
                "heading": "Track staff costs",
                "body": "Record salaries and other costs so you can see what each engagement really earns."
        },
        {
                "heading": "Keep your firm's reports ready",
                "body": "Profit and loss, balance sheet and cash flow stay current, so you can see how your own practice is doing."
        }
]}
      faqs={[
        {
                "question": "Is this software for my clients' books?",
                "answer": "QuickAccounts is for running your own firm's finances: invoicing, expenses, cash and reports."
        },
        {
                "question": "Can I see profit by engagement?",
                "answer": "Yes. Tag income and expenses to a client or engagement."
        },
        {
                "question": "How much does QuickAccounts cost?",
                "answer": "Pay once and use it for life. Online is $850 one-time plus $40/month hosting, with unlimited users. Offline is $1,200 one-time for one user. There is no yearly software renewal fee."
        }
]}
    />
  );
}
