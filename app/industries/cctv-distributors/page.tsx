import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "CCTV Inventory and Warranty Software for Distributors",
  description: "Track CCTV cameras, NVRs, DVRs and accessories by serial number while managing stock, invoices, warranty claims and RMAs.",
  alternates: { canonical: "/industries/cctv-distributors" },
};

export default function CctvDistributorsPage() {
  return <SeoLandingPage eyebrow="For CCTV distribution teams" title="CCTV inventory and warranty workflows in one place" intro="Manage cameras, NVRs, DVRs and accessories from receiving through sale, serial lookup and after-sales support." sections={[
    { heading: "Handle similar products without losing traceability", body: "Keep model, quantity and serial details organized when stock arrives in batches and moves across warehouses or outlets." },
    { heading: "Make warranty checks easier for the service desk", body: "When a customer brings back a camera or recorder, staff can use the serial and invoice trail to review the original sale before handling the claim." },
    { heading: "Coordinate branches and customer accounts", body: "Connect stock movement, sales records and customer accounts so the team has a clearer view of each transaction." },
  ]} faqs={[
    { question: "Can QuickAccounts track CCTV serial numbers?", answer: "Yes. Serial number tracking can be used for CCTV products and related electronics workflows." },
    { question: "Can it support CCTV warranty claims?", answer: "QuickAccounts supports warranty and return workflows connected to product and sales records." },
  ]} />;
}
