import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Spare Parts Dealer Software",
  description: "Track automotive and motorcycle spare-parts stock, supplier purchasing, counter sales, returns and workshop customer accounts.",
  keywords: [
    "spare parts dealer software",
    "auto parts inventory management",
    "motorcycle parts stock software",
    "automotive parts wholesale system",
    "workshop customer accounts software",
  ],
  alternates: { canonical: "/industries/automotive-motorcycle-spare-parts" },
  openGraph: {
    title: "Automotive & Motorcycle Spare Parts Software | Dotcode Solutions",
    description: "Find part numbers quickly, manage counter and back-store stock, and keep workshop customer accounts in one system.",
    url: "/industries/automotive-motorcycle-spare-parts",
  },
};

export default function AutomotivePartsPage() {
  return <SeoLandingPage path="/industries/automotive-motorcycle-spare-parts"
    eyebrow="Dotcode for spare-parts trade"
    title="Inventory software for automotive and motorcycle parts dealers"
    intro="Parts counters are judged on speed and accuracy. Staff need to find the right item, bill it correctly and know whether it is on the shelf or in the back store. Dotcode connects part records, stock locations and workshop accounts so those answers are always at hand."
    sections={[
      {
        heading: "Find the right part at the counter",
        body: "Each part is held as a product record with its own code, so counter staff can search by the reference they already use and see the matching item, price and stock position before promising it to a customer.",
      },
      {
        heading: "Counter stock and back store in one picture",
        body: "The shop counter and the back store can be separate stock locations. Sales reduce the counter record, transfers move stock between locations, and the team can see where a part sits instead of walking to check.",
        bullets: [
          "Separate records for counter and back-store stock",
          "Transfers with a sending and receiving location",
          "Sales that update stock at the point of billing",
        ],
      },
      {
        heading: "Accounts for workshops and trade buyers",
        body: "Mechanics and workshops often buy on account. Invoices post to a customer ledger with a running balance, so the dealer can review what each workshop owes and follow up with the invoice references in front of them.",
      },
      {
        heading: "Returns and replacement exchanges",
        body: "When a part comes back, staff can open the original invoice and customer before recording a return or replacement. The stock and account entries are created from the same record, which keeps the parts counter and the office aligned.",
      },
    ]}
    faqs={[
      { question: "Can we search stock by part number?", answer: "Yes. Product records carry the code your team uses, so staff can look up a part during a counter conversation. Share your numbering approach in the demo." },
      { question: "Can we track stock at the counter and in the back store?", answer: "Yes. They can be defined as separate locations, with transfers recorded between them." },
      { question: "Does it support workshop accounts?", answer: "Yes. Invoices and payments post to a customer ledger with a running balance, so trade balances are visible in one place." },
      { question: "How are parts returns handled?", answer: "Returns are connected to the original invoice and customer, then reflected in stock and account records." },
    ]}
  />;
}
