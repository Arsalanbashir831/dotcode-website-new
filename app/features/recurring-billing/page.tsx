import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Recurring Billing for Retainers and Subscriptions",
  description: "Set up monthly retainers, support contracts and subscriptions once. QuickAccounts sends the invoices on schedule.",
  alternates: { canonical: "/features/recurring-billing" },
  openGraph: {
    title: "Recurring Billing for Retainers and Subscriptions | QuickAccounts",
    description: "Set up monthly retainers, support contracts and subscriptions once. QuickAccounts sends the invoices on schedule.",
    url: "/features/recurring-billing",
  },
};

export default function RecurringBillingPage() {
  return (
    <SeoLandingPage
      path="/features/recurring-billing"
      eyebrow="Recurring billing"
      title="Retainers that invoice themselves"
      intro="Set up monthly retainers, support contracts and subscriptions once. QuickAccounts sends them on schedule."
      description="Set up monthly retainers, support contracts and subscriptions once. QuickAccounts sends the invoices on schedule."
      sections={[
        {
                "heading": "Set it once",
                "body": "Pick the client, the amount and the schedule. QuickAccounts raises the invoice each period, so a retainer never goes unbilled because someone forgot."
        },
        {
                "heading": "Predictable income, less admin",
                "body": "Recurring invoices are the backbone of retainers, managed support and subscriptions. Automating them means less admin and steadier cash flow."
        },
        {
                "heading": "Mix recurring and one-off billing",
                "body": "Keep a monthly retainer running alongside one-off project invoices for the same client, and see both on one running balance."
        }
]}
      faqs={[
        {
                "question": "Can monthly retainers invoice automatically?",
                "answer": "Yes. Set up recurring invoices for monthly retainers and support contracts."
        },
        {
                "question": "Can I use it for subscriptions?",
                "answer": "Yes. Subscriptions can be set up as recurring invoices on the schedule you choose."
        },
        {
                "question": "How does setup work?",
                "answer": "We set up QuickAccounts for you, bring over your clients, vendors and opening balances, and train your team. Setup, data transfer and training are included."
        }
]}
    />
  );
}
