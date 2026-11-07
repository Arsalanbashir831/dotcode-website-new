import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Time and Fee Billing Software",
  description: "Bill by the hour, by milestone, a fixed fee or a monthly retainer, and turn billable work into invoices without retyping.",
  alternates: { canonical: "/features/time-and-fee-billing" },
  openGraph: {
    title: "Time and Fee Billing Software | QuickAccounts",
    description: "Bill by the hour, by milestone, a fixed fee or a monthly retainer, and turn billable work into invoices without retyping.",
    url: "/features/time-and-fee-billing",
  },
};

export default function TimeAndFeeBillingPage() {
  return (
    <SeoLandingPage
      path="/features/time-and-fee-billing"
      eyebrow="Time and fee billing"
      title="Bill the way you work"
      intro="Hourly rates, fixed fees, milestones or retainers. Turn billable work into invoices without retyping anything."
      description="Bill by the hour, by milestone, a fixed fee or a monthly retainer, and turn billable work into invoices without retyping."
      sections={[
        {
                "heading": "One place for every way you charge",
                "body": "Different clients pay in different ways. Bill by the hour, by milestone, as a fixed fee or as a monthly retainer, all from the same system."
        },
        {
                "heading": "From billable hours to invoice",
                "body": "Bill every hour you work. Billable work becomes an invoice without copying numbers between spreadsheets and documents."
        },
        {
                "heading": "See what you have billed",
                "body": "Keep track of what has been invoiced for each client and project, so nothing slips through unbilled."
        }
]}
      faqs={[
        {
                "question": "Can I bill hourly, fixed fee and retainers?",
                "answer": "Yes. Bill however you charge clients, and set up recurring invoices for monthly retainers and support contracts."
        },
        {
                "question": "Can I bill by milestone?",
                "answer": "Yes. Invoice at each project stage, such as design, build and delivery."
        },
        {
                "question": "How does setup work?",
                "answer": "We set up QuickAccounts for you, bring over your clients, vendors and opening balances, and train your team. Setup, data transfer and training are included."
        }
]}
    />
  );
}
