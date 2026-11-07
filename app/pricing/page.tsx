import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

const description =
  "Pay once, use it for life. Online from $850 + $40/month hosting, or offline for $1,200. Setup and training included.";

export const metadata: Metadata = {
  title: "Simple, One-Time Pricing",
  description,
  alternates: { canonical: "/pricing" },
  openGraph: { title: "Simple, One-Time Pricing | QuickAccounts", description, url: "/pricing" },
};

export default function PricingPage() {
  return (
    <SeoLandingPage
      path="/pricing"
      eyebrow="Pricing"
      title="Simple pricing. Pay once, use it for life."
      intro="No per-user fees, no yearly renewals. Setup, data transfer and training are always included."
      description={description}
      sections={[
        {
          heading: "Online — $850 one-time + $40/month hosting",
          body: "Best for firms with partners, staff or remote teams.",
          bullets: ["Unlimited users", "Secure cloud hosting", "Automatic backups", "Setup and training included"],
        },
        {
          heading: "Offline — $1,200 one-time",
          body: "Best for solo consultants and practitioners who want their data on their own computer.",
          bullets: ["1 user", "Your data on your own hardware", "Setup and training included"],
        },
        {
          heading: "What is always included",
          body: "Setup, data transfer from Excel, QuickBooks or other software, and training for your team come with both plans. Small customizations are possible, and we agree the scope and cost with you first.",
        },
      ]}
      faqs={[
        { question: "Is there a yearly fee?", answer: "No software renewal fee on either plan. The online plan has a $40/month hosting fee." },
        { question: "How many people can use it?", answer: "Online plan: unlimited users. Offline plan: one user." },
        { question: "Can I see QuickAccounts before choosing a plan?", answer: "Yes. Ask for a free demo and we will walk you through it, built around how your firm bills clients." },
      ]}
    />
  );
}
