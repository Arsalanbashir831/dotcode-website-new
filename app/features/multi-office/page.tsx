import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Multi-Office Accounting for Service Firms",
  description: "See each office's revenue, costs and cash separately or for the whole firm.",
  alternates: { canonical: "/features/multi-office" },
  openGraph: {
    title: "Multi-Office Accounting for Service Firms | QuickAccounts",
    description: "See each office's revenue, costs and cash separately or for the whole firm.",
    url: "/features/multi-office",
  },
};

export default function MultiOfficePage() {
  return (
    <SeoLandingPage
      path="/features/multi-office"
      eyebrow="Multi-office"
      title="One firm, several offices"
      intro="See each office's revenue, costs and cash separately or for the whole firm."
      description="See each office's revenue, costs and cash separately or for the whole firm."
      sections={[
        {
                "heading": "Each office, clearly separate",
                "body": "Set up every office as its own location and see its revenue, costs and cash on its own."
        },
        {
                "heading": "The whole firm at a glance",
                "body": "Combine all offices for a firm-wide view, ready for partners and leadership."
        },
        {
                "heading": "Online access for every office",
                "body": "The online plan includes unlimited users, so staff in every office can work in the same system."
        }
]}
      faqs={[
        {
                "question": "Can I see each office separately?",
                "answer": "Yes. View each office's revenue, costs and cash separately or for the whole firm."
        },
        {
                "question": "How many people can use it?",
                "answer": "Online plan: unlimited users. Offline plan: one user."
        },
        {
                "question": "How does setup work?",
                "answer": "We set up QuickAccounts for you, bring over your clients, vendors and opening balances, and train your team. Setup, data transfer and training are included."
        }
]}
    />
  );
}
