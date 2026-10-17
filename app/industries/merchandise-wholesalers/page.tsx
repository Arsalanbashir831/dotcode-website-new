import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Merchandise Wholesale Software",
  description: "Manage stock, purchases, customer ledgers and accounts for general merchandise wholesale operations in one system.",
  keywords: [
    "wholesale stock management software",
    "general merchandise inventory software",
    "goods wholesaler software Pakistan",
    "wholesale business software UAE",
    "stock and accounts software for traders",
    "merchandise dealer software",
    "wholesale ledger management software",
    "trading business software Pakistan",
    "goods distributor software UAE",
    "wholesale purchase management software",
  ],
  alternates: { canonical: "/industries/merchandise-wholesalers" },
  openGraph: { title: "Wholesale Stock Management Software for General Merchandise Dealers | QuickAccounts", description: "Organize stock, purchases, customer accounts and ledgers for wholesale merchandise businesses in UAE, Pakistan, UK and USA.", url: "/industries/merchandise-wholesalers" },
};

export default function MerchandiseWholesalersPage() {
  return <SeoLandingPage path="/industries/merchandise-wholesalers"
    eyebrow="QuickAccounts for merchandise wholesalers"
    title="General merchandise inventory software for wholesale businesses"
    intro="Organize product stock, purchases, customer accounts, cash and ledgers in one straightforward system for businesses that buy and sell merchandise."
    sections={[
      { heading: "Keep buying, stock and selling records connected", body: "General merchandise wholesalers manage a wide mix of goods and customer accounts. QuickAccounts brings product records and purchasing together with the everyday account information the business uses to trade." },
      { heading: "Give your staff one clear place to work", body: "Customer balances, cash records and ledgers sit alongside stock and purchase activity. Dotcode configures the product around your current workflow and supports your staff through setup and training." },
      { heading: "Start with a guided demo", body: "See QuickAccounts in a free guided demo, then choose the one-time software license if it fits. Standard setup, supported data migration and team training are included; online hosting is separate, while offline software has no monthly hosting fee." },
    ]}
    faqs={[
      { question: "Who is QuickAccounts for?", answer: "QuickAccounts is designed for wholesalers and merchandise businesses that need practical inventory and day-to-day account records." },
      { question: "What business records can it organize?", answer: "It brings together stock, purchases, customer accounts, cash and ledgers." },
      { question: "Can I see the software before purchasing?", answer: "Yes. Contact Dotcode on WhatsApp to arrange a free guided demo." },
    ]}
  />;
}
