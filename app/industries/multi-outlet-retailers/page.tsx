import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Multi-Branch Retail Inventory Software for Electronics & Hardware Dealers | UAE, Pakistan",
  description: "QuickAccounts helps electronics and hardware retailers with multiple branches or outlets track stock, transfers, purchases and customer accounts across all locations. Ideal for CCTV retailers, computer accessory stores and hardware dealers in UAE, Pakistan and UK.",
  keywords: [
    "multi-branch inventory management software",
    "multi-outlet retail software UAE",
    "electronics retail stock management",
    "multi-location inventory Pakistan",
    "stock transfer between branches software",
    "retail stock management UAE",
    "hardware store multi-outlet software",
    "computer shop inventory software",
    "branch stock control software",
    "CCTV retail stock management",
  ],
  alternates: { canonical: "/industries/multi-outlet-retailers" },
  openGraph: { title: "Multi-Branch Retail Inventory Software for Electronics & Hardware Dealers | QuickAccounts", description: "Track and transfer stock across multiple outlets and branches. Manage electronics, CCTV and hardware retail operations in UAE, Pakistan and UK.", url: "/industries/multi-outlet-retailers" },
};

export default function MultiOutletRetailersPage() {
  return <SeoLandingPage
    eyebrow="QuickAccounts for multi-outlet retail"
    title="Inventory management software for retailers with multiple outlets"
    intro="Keep product stock visible across stores and warehouses, coordinate stock transfers and keep purchasing and account records organized as your retail operation grows."
    sections={[
      { heading: "Coordinate stock across branches", body: "When several stores share stock, teams need a dependable view of what each location holds. QuickAccounts supports multi-location stock records and transfer workflows so staff can coordinate inventory between branches." },
      { heading: "Keep branch activity connected", body: "Bring stock and purchase records together with customer accounts, cash and ledgers. A connected view helps teams manage routine trading work across outlets without switching between separate records." },
      { heading: "Configure around your store network", body: "Dotcode reviews your branch structure and current workflow, then sets up QuickAccounts, helps migrate supported records and trains the team. Confirm your location and reporting needs during the demo." },
    ]}
    faqs={[
      { question: "Can QuickAccounts manage inventory across multiple outlets?", answer: "Yes. QuickAccounts supports multi-outlet and multi-warehouse inventory management." },
      { question: "Can stock move between branches?", answer: "Yes. Teams can coordinate stock transfers between locations as part of their inventory workflow." },
      { question: "What is included when we get started?", answer: "Standard setup, supported data migration and team training are included with the published software offer. Hosting is separate." },
    ]}
  />;
}
