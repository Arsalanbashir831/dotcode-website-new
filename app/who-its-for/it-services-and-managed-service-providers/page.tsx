import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Accounting Software for IT Services & MSPs",
  description: "Monthly support retainers invoice themselves, while one-off projects and hardware pass-throughs stay easy to bill.",
  alternates: { canonical: "/who-its-for/it-services-and-managed-service-providers" },
  openGraph: {
    title: "Accounting Software for IT Services & MSPs | QuickAccounts",
    description: "Monthly support retainers invoice themselves, while one-off projects and hardware pass-throughs stay easy to bill.",
    url: "/who-its-for/it-services-and-managed-service-providers",
  },
};

export default function ItServicesAndManagedServiceProvidersPage() {
  return (
    <SeoLandingPage
      path="/who-its-for/it-services-and-managed-service-providers"
      eyebrow="IT services and managed service providers"
      title="Recurring contracts, billed automatically"
      intro="Monthly support retainers invoice themselves, while one-off projects and hardware pass-throughs stay easy to bill."
      description="Monthly support retainers invoice themselves, while one-off projects and hardware pass-throughs stay easy to bill."
      sections={[
        {
                "heading": "Recurring contracts on autopilot",
                "body": "Support contracts and managed services repeat every month. Set them up once and QuickAccounts invoices them on schedule."
        },
        {
                "heading": "Projects and pass-through costs",
                "body": "Bill one-off projects and pass hardware or licence costs through to clients, without separate paperwork."
        },
        {
                "heading": "Know which contracts pay",
                "body": "Compare what each client pays with what it costs to serve, so you price contracts on real numbers."
        }
]}
      faqs={[
        {
                "question": "Can monthly support contracts invoice automatically?",
                "answer": "Yes. Set up recurring invoices for monthly retainers and support contracts."
        },
        {
                "question": "Can I see profit per client?",
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
