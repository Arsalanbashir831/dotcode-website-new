import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Client Balances and Overdue Invoice Tracking",
  description: "Every client has a running balance with invoices, payments and credits in date order. Aging shows who to chase first.",
  alternates: { canonical: "/features/client-balances" },
  openGraph: {
    title: "Client Balances and Overdue Invoice Tracking | QuickAccounts",
    description: "Every client has a running balance with invoices, payments and credits in date order. Aging shows who to chase first.",
    url: "/features/client-balances",
  },
};

export default function ClientBalancesPage() {
  return (
    <SeoLandingPage
      path="/features/client-balances"
      eyebrow="Client balances"
      title="See who owes you, and follow up"
      intro="Every client has a running balance with invoices, payments and credits in date order. Aging shows who to chase first."
      description="Every client has a running balance with invoices, payments and credits in date order. Aging shows who to chase first."
      sections={[
        {
                "heading": "One balance per client",
                "body": "Invoices, payments and credits sit together in date order. Open a client and see exactly what they owe and why."
        },
        {
                "heading": "Know who to chase first",
                "body": "Aging groups unpaid invoices by how overdue they are, so you follow up on the oldest and largest first and get paid faster."
        },
        {
                "heading": "Alerts for overdue invoices",
                "body": "Overdue alerts keep late payers visible, so follow-up does not depend on someone remembering."
        }
]}
      faqs={[
        {
                "question": "Can I see which invoices are overdue?",
                "answer": "Yes. Each client shows overdue alerts, and aging shows who to chase first."
        },
        {
                "question": "Can my accountant see client balances?",
                "answer": "Yes. Give them access, or export your reports and ledgers."
        },
        {
                "question": "How does setup work?",
                "answer": "We set up QuickAccounts for you, bring over your clients, vendors and opening balances, and train your team. Setup, data transfer and training are included."
        }
]}
    />
  );
}
