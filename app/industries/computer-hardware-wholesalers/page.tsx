import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Computer Hardware Inventory Software",
  description: "Track RAM, drives and computer hardware by serial number while managing stock, branches, warranty claims and accounts.",
  keywords: [
    "RAM wholesaler inventory software",
    "hard drive distributor stock management",
    "computer hardware wholesaler software",
    "computer parts dealer software UAE",
    "computer accessories distributor Pakistan",
    "serial number tracking RAM hard drives",
    "processor wholesaler inventory management",
    "SSD HDD serial tracking software",
    "computer hardware warranty management",
    "IT hardware distributor software UK",
  ],
  alternates: { canonical: "/industries/computer-hardware-wholesalers" },
  openGraph: { title: "Inventory Software for RAM, Hard Drive & Computer Hardware Wholesalers | QuickAccounts", description: "Track RAM, HDDs, SSDs and computer parts by serial number. Manage warranty claims, stock and purchases for computer hardware wholesalers in UAE, Pakistan, UK and USA.", url: "/industries/computer-hardware-wholesalers" },
};

export default function ComputerHardwareWholesalersPage() {
  return <SeoLandingPage path="/industries/computer-hardware-wholesalers"
    eyebrow="QuickAccounts for computer hardware wholesalers"
    title="Computer hardware inventory software with serial traceability"
    intro="Keep hardware stock and purchase records organized, trace individual components and devices by serial number, and help staff find invoice details when a customer needs warranty support."
    sections={[
      { heading: "Identify the exact product sold", body: "Computer hardware distributors handle many similar models and units. Serial number records give staff a way to distinguish an individual device and follow its transaction history when checking a return or support request." },
      { heading: "Make support and returns easier to follow", body: "Connect product identification to sales and invoice records. Staff can review the original sale, verify warranty details and coordinate return or replacement handling with useful context in view." },
      { heading: "One place for everyday wholesale records", body: "QuickAccounts also brings stock, purchasing, customer accounts, cash and ledgers into one operational system. Dotcode supports setup, standard migration and training to help your team get started." },
    ]}
    faqs={[
      { question: "Can the system find an invoice from a serial number?", answer: "Yes. Serial lookup connects the product to the related sales and invoice details for warranty and support checks." },
      { question: "Is it designed for computer accessories and components too?", answer: "QuickAccounts is positioned for computer hardware and accessories distributors that need stock records and serial traceability." },
      { question: "How do I request a demo?", answer: "Use the Book a Demo button to start a WhatsApp conversation with Dotcode and request a walkthrough for your hardware workflow." },
    ]}
  />;
}
