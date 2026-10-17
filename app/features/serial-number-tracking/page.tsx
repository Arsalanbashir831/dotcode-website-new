import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Serial Number Tracking Software",
  description: "Track electronics by serial number from receiving to sale, invoice lookup, warranty checks and RMA service.",
  keywords: [
    "serial number tracking software",
    "CCTV serial number tracking",
    "hard drive serial tracking software",
    "RAM serial number management",
    "electronics serial number traceability",
    "invoice lookup by serial number",
    "serialized inventory management",
    "serial number tracking for distributors UAE",
    "product traceability software",
    "barcode serial tracking electronics",
  ],
  alternates: { canonical: "/features/serial-number-tracking" },
  openGraph: {
    title: "Serial Number Tracking Software for CCTV, RAM & Hard Drive Distributors | QuickAccounts",
    description: "Track CCTV cameras, RAM, HDDs and electronics by serial number. Find invoices and sales records instantly for warranty and support checks.",
    url: "/features/serial-number-tracking",
  },
};

export default function SerialNumberTrackingPage() {
  return <SeoLandingPage path="/features/serial-number-tracking"
    eyebrow="Product traceability for electronics and hardware"
    title="Serial number tracking software for electronics distributors"
    intro="Serial-number inventory tracking records the identity and transaction history of each individual product unit, not only the total quantity in stock. When a distributor receives CCTV cameras, RAM, hard drives or other electronics, staff capture each unit’s serial number and connect it to purchasing and inventory records. At sale, the serial is linked to the customer and invoice. If the product later returns for support, staff can search the serial to verify the original sale, review warranty information and record a repair, return, RMA or replacement. This creates a traceable record from receiving through after-sales service. Before choosing a system, distributors should verify barcode support, bulk serial entry, import formats, duplicate detection, permissions, reporting and how replacements remain linked to the original unit and claim. QuickAccounts can be demonstrated against these requirements before implementation."
    sections={[
      { heading: "Follow an individual product, not just a quantity", body: "For computer hardware, electronics and accessories, a total stock count may not be enough. Serial number records help staff identify a specific unit, trace its transaction history and answer questions about where it came from or when it was sold." },
      { heading: "Make invoice lookup part of the service workflow", body: "When a customer brings in a product, staff can use its serial number to find the associated sales record, review the invoice and check the information needed to resolve the inquiry. This helps keep product traceability connected to customer and sales records.", bullets: ["Record product serial numbers against inventory activity", "Find associated invoice and sales details", "Review product history when handling a customer inquiry"] },
      { heading: "Useful for high-volume distributor workflows", body: "Electronics and computer hardware distributors often handle many similar units and frequent support questions. A product demo can show how serial entry and lookup fit your specific receiving, sales and after-sales process." },
    ]}
    faqs={[
      { question: "Can QuickAccounts track products by serial number?", answer: "Yes. QuickAccounts supports serial number tracking for product traceability. Contact Dotcode to see the serial entry and lookup flow in a demo." },
      { question: "Can staff find the original invoice using a serial number?", answer: "The serial lookup workflow helps staff connect a product to sales and invoice details. Dotcode can demonstrate the steps for your team." },
      { question: "Who benefits from serial number tracking?", answer: "It is especially useful for electronics, computer hardware and accessories distributors who need to trace individual units and respond to product support inquiries." },
    ]}
  />;
}
