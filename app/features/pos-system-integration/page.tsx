import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "POS System Integration",
  description: "Connect counter sales from your POS system so every bill updates stock, serial numbers, customer accounts and ledgers in QuickAccounts.",
  alternates: { canonical: "/features/pos-system-integration" },
  openGraph: {
    title: "POS System Integration | QuickAccounts",
    description: "Sync every counter sale with stock, serials, customer accounts and ledgers in one connected system.",
    url: "/features/pos-system-integration",
  },
};

export default function PosSystemIntegrationPage() {
  return <SeoLandingPage path="/features/pos-system-integration"
    eyebrow="Counter sales and records"
    title="POS system integration that updates stock and accounts as you sell"
    intro="QuickAccounts connects counter billing with the rest of your operation. Each POS sale updates stock quantities, serial records, customer accounts and cash records, so electronics and hardware retailers, wholesalers and distributors work from one system."
    sections={[
      { heading: "Every counter sale updates your records", body: "A bill raised at the counter feeds the same records your office relies on. Stock quantities, customer accounts and cash entries reflect the sale without a second round of data entry." },
      { heading: "Keep serialized products traceable at the point of sale", body: "Attach serial numbers while billing so each unit stays connected to its invoice and customer. That record supports warranty checks, returns and replacements long after the counter sale." },
      { heading: "Licensing and hosting", body: "Start with a free guided demo. Choose an offline single-user lifetime license with local data storage, or an online unlimited-user lifetime license with monthly hosting. Confirm pricing, setup and integration details with Dotcode during the demo." },
    ]}
    faqs={[
      { question: "Does the POS integration replace my existing POS system?", answer: "QuickAccounts can work alongside your current counter billing setup or serve as the billing workflow itself. Discuss your current POS, hardware and integration preferences during the guided demo." },
      { question: "What updates when a POS sale is recorded?", answer: "Stock quantities, serial records, the customer account and cash records reflect the sale in one connected record trail, visible to counter and office staff alike." },
      { question: "Can I see the software before buying?", answer: "Yes. Contact Dotcode to arrange a free guided product demo and review setup details." },
    ]}
  />;
}
