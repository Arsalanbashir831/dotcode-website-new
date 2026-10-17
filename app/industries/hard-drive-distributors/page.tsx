import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Hard Drive Inventory Software",
  description: "Manage hard drive stock, serial numbers, sales records and warranty inquiries for computer hardware distributors.",
  alternates: { canonical: "/industries/hard-drive-distributors" },
};

export default function HardDriveDistributorsPage() {
  return <SeoLandingPage path="/industries/hard-drive-distributors" eyebrow="For storage hardware distributors" title="Hard drive inventory and serial tracking that follows the unit" intro="Keep high-volume drive stock organized and give your team a reliable trail from receiving to invoice lookup and warranty handling." sections={[
    { heading: "Record units as they arrive", body: "Organize products and serials as stock enters the business, with location-level visibility for warehouses and outlets." },
    { heading: "Find the original sale quickly", body: "When a drive is returned or questioned, connect its serial record to the customer and invoice information your team needs." },
    { heading: "Keep purchasing and accounts alongside stock", body: "Use one operational view for product records, purchasing, sales, customer accounts and after-sales questions." },
  ]} faqs={[
    { question: "Can hard drives be tracked by serial number?", answer: "Yes. QuickAccounts supports serial number tracking for computer hardware and electronics products." },
    { question: "Can staff find warranty information from a serial?", answer: "Serial lookup can help connect a unit to its sales and invoice history; review the exact workflow in a demo." },
  ]} />;
}
