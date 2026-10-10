import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Inventory and Accounting Records for Wholesalers",
  description: "Keep wholesale stock, purchases, customer accounts, cash and ledgers organized with QuickAccounts business software.",
  alternates: { canonical: "/features/business-accounting" },
  openGraph: {
    title: "Wholesale Inventory and Accounting Records | QuickAccounts",
    description: "Connect everyday stock, purchase and customer account records in one straightforward business system.",
    url: "/features/business-accounting",
  },
};

export default function BusinessAccountingPage() {
  return <SeoLandingPage
    eyebrow="Business records in one place"
    title="Wholesale inventory software with customer accounts and ledgers"
    intro="QuickAccounts helps trade-led businesses keep stock, purchases, customer accounts, cash and ledgers organized together, without adding a separate per-user license fee."
    sections={[
      { heading: "Connect stock and everyday accounts", body: "A wholesale operation depends on more than stock counts. Teams also need purchase records, customer information, cash records and account ledgers. QuickAccounts brings these day-to-day records into one system so they are easier for the team to find." },
      { heading: "Get help moving from your current process", body: "Dotcode reviews your workflow, configures the system, supports migration from eligible files or tools, and trains your team. Migration scope and any optional customization should be confirmed during the demo." },
      { heading: "Licensing and hosting", body: "Request a free guided demo or choose the one-time $850 software purchase, with unlimited users. Online hosting is estimated at $30–$40 per month; offline software has no monthly hosting fee." },
    ]}
    faqs={[
      { question: "Does QuickAccounts include bookkeeping and ledgers?", answer: "The product supports cash records, customer accounts and ledgers alongside stock and purchase records. Discuss your specific accounting workflow with Dotcode." },
      { question: "Are there per-user license charges?", answer: "The published offer includes unlimited users without a per-user software fee." },
      { question: "Can I see the software before buying?", answer: "Yes. Contact Dotcode to arrange a free guided product demo and review setup details." },
    ]}
  />;
}
