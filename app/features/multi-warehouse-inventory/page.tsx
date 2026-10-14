import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Multi-Warehouse & Multi-Branch Inventory Software for Wholesale Distributors | UAE, Pakistan",
  description: "QuickAccounts manages stock across multiple warehouses, godowns and outlets for electronics, CCTV and hardware distributors in UAE, Pakistan, UK and USA. Track inventory, transfers and purchases across all your locations in one system.",
  keywords: [
    "multi-warehouse inventory management",
    "multi-branch stock management software",
    "godown management software Pakistan",
    "multi-location inventory UAE",
    "warehouse stock management for distributors",
    "branch inventory tracking software",
    "stock transfer between warehouses",
    "wholesale warehouse management software",
    "multi-outlet inventory control",
    "distributor warehouse software UK",
  ],
  alternates: { canonical: "/features/multi-warehouse-inventory" },
  openGraph: {
    title: "Multi-Warehouse Inventory Software for Wholesale Distributors | QuickAccounts",
    description: "Track and transfer stock across multiple warehouses, godowns and branches for electronics, CCTV and hardware distributors in UAE, Pakistan, UK and USA.",
    url: "/features/multi-warehouse-inventory",
  },
};

export default function MultiWarehouseInventoryPage() {
  return <SeoLandingPage
    eyebrow="Stock control across locations"
    title="Multi-warehouse inventory management for wholesalers and distributors"
    intro="Get a clearer view of stock across warehouses, outlets and branches. QuickAccounts helps distribution teams organize stock records and stock movements alongside purchasing and customer account workflows."
    sections={[
      { heading: "Know where stock is held", body: "When a business sells from several locations, staff need to understand what is available and where it is held. QuickAccounts is designed to help teams keep location stock records together, so the team can review inventory across its operation." },
      { heading: "Keep transfers connected to daily operations", body: "Stock movement affects purchasing, selling and reconciliation. Keep warehouse transfers part of the same operational picture as purchase records and customer accounts, helping staff follow stock as it moves between locations.", bullets: ["Review inventory by warehouse or outlet", "Coordinate stock movement between locations", "Keep purchasing and account records alongside inventory workflows"] },
      { heading: "Built for wholesale and branch operations", body: "A distributor or retailer can use a demo to walk through its own warehouses, outlets, user roles and stock transfer process. Dotcode can confirm the intended setup and migration scope before implementation." },
    ]}
    faqs={[
      { question: "Can I manage stock across multiple warehouses?", answer: "QuickAccounts supports multi-location stock management. Contact Dotcode to review your warehouse and outlet structure in a product demo." },
      { question: "Can staff record stock transfers between locations?", answer: "Stock transfer workflows can be reviewed during the demo so Dotcode can confirm how the process maps to your operation." },
      { question: "Does setup and training come with the software?", answer: "Standard setup, supported data migration and team training are included. Hosting is separate." },
    ]}
  />;
}
