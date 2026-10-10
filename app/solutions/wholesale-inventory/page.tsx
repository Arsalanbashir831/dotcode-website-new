import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Wholesale Inventory Software for Stock and Accounts",
  description: "Organize stock, purchases, customer accounts, cash and ledgers with QuickAccounts wholesale business software. Includes setup, supported migration and team training.",
  alternates: { canonical: "/solutions/wholesale-inventory" },
  openGraph: {
    title: "Wholesale Inventory Software | QuickAccounts",
    description: "Keep wholesale stock, purchases and business accounts organized in one straightforward system.",
    url: "/solutions/wholesale-inventory",
  },
};

export default function WholesaleInventoryPage() {
  return <SeoLandingPage
    eyebrow="QuickAccounts for wholesalers"
    title="Wholesale inventory software for everyday stock and accounts"
    intro="QuickAccounts brings stock records, purchases, customer accounts, cash and ledgers together for trade-led businesses. Dotcode helps configure the system, migrate supported records and train your team."
    sections={[
      { heading: "Keep your wholesale records together", body: "When stock, purchases and customer balances live across separate tools or spreadsheets, routine work can mean searching in several places. QuickAccounts is designed to keep these core business records together in one system.", bullets: ["Maintain product and merchandise stock records", "Record purchasing alongside other business activity", "Find customer accounts, cash records and ledgers in one place"] },
      { heading: "A practical setup for your business", body: "Dotcode starts by understanding the records and tasks your team handles. The team then configures QuickAccounts, helps move data from supported files or tools, and provides training for day-to-day users." },
      { heading: "Is it right for your operation?", body: "QuickAccounts is aimed at wholesalers and merchandise businesses looking for straightforward stock and account records. A demo is the best way to confirm that its current workflows match your operation. Discuss branch, warehouse, serial tracking or warranty requirements directly with Dotcode before making a decision." },
    ]}
    faqs={[
      { question: "What can wholesalers manage in QuickAccounts?", answer: "QuickAccounts supports core records for stock, purchases, cash, customer accounts and ledgers." },
      { question: "Does the license include setup and training?", answer: "Standard setup, supported data migration and team training are included. Hosting and any optional customizations are separate." },
      { question: "How much does QuickAccounts cost?", answer: "The offline single-user lifetime license is $1,200 one time. The online unlimited-user lifetime license is $850 one time, plus $40 per month for hosting. A guided demo is free." },
    ]}
  />;
}
