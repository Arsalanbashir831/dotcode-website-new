import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "ERP Implementation for Distributors | QuickAccounts",
  description: "Set up wholesale inventory, serial tracking, accounts and warranty workflows with guided implementation from Dotcode.",
  alternates: { canonical: "/implementation" },
};

export default function ImplementationPage() {
  return <SeoLandingPage eyebrow="Implementation for distributors" title="Move from scattered records to a working wholesale system" intro="Dotcode helps distributors map their current process, configure QuickAccounts, migrate supported records and train the team before go-live." sections={[
    { heading: "Start with the real workflow", body: "Review receiving, purchasing, sales, customer accounts, stock transfers and after-sales service before deciding what the system should contain." },
    { heading: "Prepare and migrate supported records", body: "Agree the source files, product fields and customer information that can be migrated. The scope should be confirmed before implementation begins." },
    { heading: "Train the people who use it", body: "Team training covers the daily records your business relies on, from stock entry and invoice lookup to serial-based warranty checks." },
  ]} faqs={[
    { question: "How long does implementation take?", answer: "Timing depends on your locations, data quality and workflow scope. Dotcode confirms the implementation plan after reviewing your operation." },
    { question: "Can you migrate our Excel records?", answer: "Supported data migration may be available. Share sample files during the demo so the scope can be assessed accurately." },
  ]} />;
}
