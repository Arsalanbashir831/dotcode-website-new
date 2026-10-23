import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Cosmetics Distributor Software",
  description: "Manage beauty and cosmetics stock, supplier purchasing, salon and retailer accounts, invoices and returns in one connected system.",
  keywords: [
    "cosmetics distributor software",
    "beauty product inventory software",
    "cosmetics wholesale accounts software",
    "salon supply distributor system",
    "beauty stock and invoice management",
  ],
  alternates: { canonical: "/industries/cosmetics-beauty-distributors" },
  openGraph: {
    title: "Cosmetics Distributor Software | Dotcode Solutions",
    description: "Organize a large cosmetics catalogue, supplier purchasing, stock by location and salon or retailer account balances.",
    url: "/industries/cosmetics-beauty-distributors",
  },
};

export default function CosmeticsBeautyPage() {
  return <SeoLandingPage path="/industries/cosmetics-beauty-distributors"
    eyebrow="Dotcode for beauty distribution"
    title="Inventory and accounts software for cosmetics distributors"
    intro="Cosmetics distribution combines a broad catalogue with many small, repeat customers: salons, beauty stores and resellers. Dotcode keeps product records, stock, invoices and account balances in one place so the team can answer questions without hunting through files."
    sections={[
      {
        heading: "A catalogue built for many small lines",
        body: "Beauty ranges often contain hundreds of similar-looking items across brands and pack sizes. Recording each line as its own product entry gives staff a consistent code to search, bill and reorder, and keeps the supplier behind each line visible.",
      },
      {
        heading: "Purchasing and stock by location",
        body: "Supplier purchases are recorded against a destination warehouse or outlet. When goods arrive, the stock increase stays connected to the order and supplier, and transfers between storage locations keep a reference for the sending and receiving site.",
      },
      {
        heading: "Accounts for salons, stores and resellers",
        body: "Trade customers buy on repeating cycles. Invoices post to the customer ledger with a running balance, so the team can review what has been billed, what has been paid and which accounts need a follow-up, without rebuilding the position from invoices.",
      },
      {
        heading: "Returns without losing the trail",
        body: "If a customer returns a product, the return can be linked to the original invoice and customer. Stock and, where relevant, the account balance are updated from that transaction, leaving a record that can be reviewed later. Dotcode provides setup, supported migration and training for the team.",
      },
    ]}
    faqs={[
      { question: "Can Dotcode manage hundreds of cosmetics product lines?", answer: "Yes. Records are organized at product level with codes and supplier context. Share your catalogue size in the demo so the team can confirm the setup." },
      { question: "Does it handle batch numbers and expiry dates?", answer: "Requirements vary by product and market, so we prefer to confirm rather than assume. Bring your labelling and reporting needs to the guided demo and the team will explain what the setup covers." },
      { question: "Can we sell to both retail customers and salons?", answer: "Yes. Counter sales and invoiced trade sales can run from the same catalogue, with trade balances tracked on the customer ledger." },
      { question: "How do returns affect stock and accounts?", answer: "A return is recorded against the original sale and customer, and the stock and account records are updated from the same transaction." },
    ]}
  />;
}
