import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Multi-Outlet Retail Inventory Management Software",
  description: "Coordinate product stock, purchases, customer accounts and branch records across multiple retail outlets with QuickAccounts.",
  alternates: { canonical: "/industries/multi-outlet-retailers" },
  openGraph: { title: "Multi-Outlet Retail Inventory Management | QuickAccounts", description: "Coordinate product stock, transfers and account records across stores and warehouses.", url: "/industries/multi-outlet-retailers" },
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
