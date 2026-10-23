import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Footwear & Leather Goods Software",
  description: "Manage footwear and leather goods stock, purchasing, retail and wholesale sales, exchanges and customer accounts in one system.",
  keywords: [
    "footwear retail software",
    "leather goods inventory management",
    "shoe store stock software",
    "footwear wholesale accounts system",
    "shoe shop POS and inventory",
  ],
  alternates: { canonical: "/industries/footwear-leather-goods" },
  openGraph: {
    title: "Footwear & Leather Goods Software | Dotcode Solutions",
    description: "Track footwear and leather goods stock across shops and warehouses, with invoice-linked exchanges and trade accounts.",
    url: "/industries/footwear-leather-goods",
  },
};

export default function FootwearLeatherPage() {
  return <SeoLandingPage path="/industries/footwear-leather-goods"
    eyebrow="Dotcode for footwear and leather"
    title="Inventory software for footwear and leather goods retailers"
    intro="Footwear and leather goods ranges are deep and frequently refreshed. Dotcode gives every sellable line a clear record, connects shop and warehouse stock, and keeps exchanges and trade account balances tied to the original sale."
    sections={[
      {
        heading: "Catalogue clarity across a wide range",
        body: "Brands, styles and finishes multiply quickly on the shelf. Each sellable line is held as a product record with its own code and supplier context, so staff can find the item a customer describes and bill it accurately.",
      },
      {
        heading: "Shop, stockroom and warehouse stock",
        body: "Retail outlets and storage locations are set up separately, each with its own code. Transfers between the stockroom and the shop, or between the warehouse and a branch, keep a reference and a direction instead of relying on memory.",
        bullets: [
          "Separate stock records for each outlet and warehouse",
          "Transfers recorded with a sending and receiving site",
          "Sales that update the stock record at the point of billing",
        ],
      },
      {
        heading: "Retail counters and wholesale accounts",
        body: "Counter bills and invoiced trade sales can run from the same catalogue. Trade invoices post to a customer ledger with a running balance, so wholesale buyers and their outstanding amounts stay visible to the accounts team.",
      },
      {
        heading: "Exchanges with the original sale in view",
        body: "A size or style exchange starts with the original invoice. Staff can see the customer, the item billed and the price paid before recording the exchange, and the stock record follows the same transaction. Dotcode provides setup, supported migration and training.",
      },
    ]}
    faqs={[
      { question: "How do we record different sizes and colours?", answer: "Most footwear retailers give each sellable line its own product code so the exact item is billed. Share your item structure during the demo and the team will map it to the setup." },
      { question: "Can we manage several shoe shops and a warehouse?", answer: "Yes. Locations are defined separately, and transfers between shops and the warehouse are recorded with a reference." },
      { question: "Does it support wholesale footwear accounts?", answer: "Yes. Trade invoices post to a customer ledger with a running balance alongside the stock movement." },
      { question: "How are exchanges handled?", answer: "The original invoice and customer are opened first, then the exchange is recorded so stock and account records stay consistent." },
    ]}
  />;
}
