import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "QuickAccounts Pricing for Wholesale Distributors",
  description: "Compare QuickAccounts offline and online licensing for wholesale inventory, serial tracking, warranty and RMA workflows.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return <SeoLandingPage
    eyebrow="Simple licensing"
    title="Choose the setup that fits your operation"
    intro="Start with a guided demo, then choose the QuickAccounts setup that matches your team, locations and hosting needs."
    sections={[
      { heading: "Offline single-user license — $1,200 one time", body: "Keep the software and records on your own hardware for a single user. This option suits a business that wants local access without a recurring hosting fee." },
      { heading: "Online unlimited-user license — $850 one time", body: "Give your team online access with unlimited users. Hosting is $40 per month. Review your locations, permissions and workflow with Dotcode before setup." },
      { heading: "What is included", body: "Standard setup, supported data migration and team training are included. Any optional customization or migration scope should be confirmed during the demo." },
    ]}
    faqs={[
      { question: "Can I see QuickAccounts before choosing a license?", answer: "Yes. Contact Dotcode to arrange a free guided demo around your inventory, serial and warranty workflow." },
      { question: "Are there per-user fees?", answer: "The online license is described as unlimited-user access; hosting is charged separately at $40 per month." },
    ]}
  />;
}
