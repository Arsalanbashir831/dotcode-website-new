import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Accounting Software for Marketing & Creative Agencies",
  description: "Bill monthly retainers and campaign fees, track freelancer and ad costs, and see each client's real margin.",
  alternates: { canonical: "/who-its-for/marketing-and-creative-agencies" },
  openGraph: {
    title: "Accounting Software for Marketing & Creative Agencies | QuickAccounts",
    description: "Bill monthly retainers and campaign fees, track freelancer and ad costs, and see each client's real margin.",
    url: "/who-its-for/marketing-and-creative-agencies",
  },
};

export default function MarketingAndCreativeAgenciesPage() {
  return (
    <SeoLandingPage
      path="/who-its-for/marketing-and-creative-agencies"
      eyebrow="Marketing, design and creative agencies"
      title="Retainers and project fees, without the chaos"
      intro="Bill monthly retainers and campaign fees, track freelancer and ad costs, and see each client's real margin."
      description="Bill monthly retainers and campaign fees, track freelancer and ad costs, and see each client's real margin."
      sections={[
        {
                "heading": "Retainers and campaign fees",
                "body": "Invoice monthly retainers automatically and bill campaigns and projects when the work is done."
        },
        {
                "heading": "Freelancer and ad costs",
                "body": "Record freelancer fees and ad spend against each client, so the cost of every campaign is visible."
        },
        {
                "heading": "Each client's real margin",
                "body": "See what a client pays against what it costs you to deliver. No more guessing which accounts are profitable."
        }
]}
      faqs={[
        {
                "question": "Can I bill retainers and campaign fees?",
                "answer": "Yes. Set up recurring invoices for retainers and invoice campaigns as needed."
        },
        {
                "question": "Can I track freelancer costs per client?",
                "answer": "Yes. Tag expenses to a client or project and see the margin."
        },
        {
                "question": "How much does QuickAccounts cost?",
                "answer": "Pay once and use it for life. Online is $850 one-time plus $40/month hosting, with unlimited users. Offline is $1,200 one-time for one user. There is no yearly software renewal fee."
        }
]}
    />
  );
}
