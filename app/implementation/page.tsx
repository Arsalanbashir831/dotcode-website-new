import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

const description =
  "We set up QuickAccounts for your firm, bring over your clients and opening balances, and train your team, so you are running in days, not months.";

export const metadata: Metadata = {
  title: "Setup, Data Transfer and Training",
  description,
  alternates: { canonical: "/implementation" },
};

export default function ImplementationPage() {
  return (
    <SeoLandingPage
      path="/implementation"
      eyebrow="Getting started"
      title="Up and running in days, not months"
      intro="We set up QuickAccounts for you, bring over your records and train your team, so you can start billing quickly."
      description={description}
      sections={[
        { heading: "Tell us how your firm bills", body: "A short call about your clients, fees and how you get paid. We use it to set up QuickAccounts around the way you work." },
        { heading: "We bring over your records", body: "We bring in your clients, vendors, open balances and invoice templates from Excel, QuickBooks or other software." },
        { heading: "We train your team", body: "We walk your team through the parts of QuickAccounts they will use every day. Setup, data transfer and training are included in both plans." },
      ]}
      faqs={[
        { question: "How long does setup take?", answer: "Most firms are up and running in days. We confirm the plan after a short call about how you bill." },
        { question: "Can you move my data from Excel or QuickBooks?", answer: "Yes. We bring over your clients, vendors and opening balances as part of setup." },
      ]}
    />
  );
}
