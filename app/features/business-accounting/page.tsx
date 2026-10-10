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
    intro="QuickAccounts helps trade-led businesses keep stock, purchases, customer accounts, cash and ledgers organized together. Choose a single-user offline license or online access with unlimited users."
    sections={[
      { heading: "Connect stock and everyday accounts", body: "A wholesale operation depends on more than stock counts. Teams also need purchase records, customer information, cash records and account ledgers. QuickAccounts brings these day-to-day records into one system so they are easier for the team to find." },
      { heading: "Get help moving from your current process", body: "Dotcode reviews your workflow, configures the system, supports migration from eligible files or tools, and trains your team. Migration scope and any optional customization should be confirmed during the demo." },
      { heading: "Licensing and hosting", body: "Start with a free guided demo. The offline single-user lifetime license is $1,200 one time, with data stored on your hardware. The online unlimited-user lifetime license is $850 one time, plus $40 per month for hosting." },
    ]}
    faqs={[
      { question: "Does QuickAccounts include bookkeeping and ledgers?", answer: "The product supports cash records, customer accounts and ledgers alongside stock and purchase records. Discuss your specific accounting workflow with Dotcode." },
      { question: "How many users can access QuickAccounts?", answer: "The online license includes unlimited users. The offline license is for a single user, typically the business owner." },
      { question: "Can I see the software before buying?", answer: "Yes. Contact Dotcode to arrange a free guided product demo and review setup details." },
    ]}
  />;
}
