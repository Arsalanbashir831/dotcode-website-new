import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Serial Number Tracking Software for Distributors",
  description: "Track serialized products from purchase and sale through invoice lookup and warranty verification with QuickAccounts for electronics distributors.",
  alternates: { canonical: "/features/serial-number-tracking" },
  openGraph: {
    title: "Serial Number Tracking Software | QuickAccounts",
    description: "Follow electronics and hardware products by serial number through sales, invoice lookup and warranty checks.",
    url: "/features/serial-number-tracking",
  },
};

export default function SerialNumberTrackingPage() {
  return <SeoLandingPage
    eyebrow="Product traceability for electronics and hardware"
    title="Serial number tracking software for electronics distributors"
    intro="Track serialized products from receipt to sale, then find the original invoice and product history when a customer needs support. QuickAccounts helps wholesalers connect serial records with everyday stock and sales workflows."
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
