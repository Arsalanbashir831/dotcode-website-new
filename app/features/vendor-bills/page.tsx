import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Vendor Bills and Payables Tracking",
  description: "Record bills from contractors, landlords and software vendors, and see what is due this week.",
  alternates: { canonical: "/features/vendor-bills" },
  openGraph: {
    title: "Vendor Bills and Payables Tracking | QuickAccounts",
    description: "Record bills from contractors, landlords and software vendors, and see what is due this week.",
    url: "/features/vendor-bills",
  },
};

export default function VendorBillsPage() {
  return (
    <SeoLandingPage
      path="/features/vendor-bills"
      eyebrow="Vendor bills"
      title="Stay on top of what you owe"
      intro="Record bills from contractors, landlords and software vendors, and see what's due this week."
      description="Record bills from contractors, landlords and software vendors, and see what is due this week."
      sections={[
        {
                "heading": "Record bills as they arrive",
                "body": "Enter bills from contractors, landlords, software vendors and other vendors in one list."
        },
        {
                "heading": "See what is due",
                "body": "A clear view of what is due this week helps you pay on time and avoid late fees."
        },
        {
                "heading": "Keep payables and cash together",
                "body": "Record payments against each bill so what you owe and what you have stay in step."
        }
]}
      faqs={[
        {
                "question": "Can I track bills from contractors?",
                "answer": "Yes. Record bills from contractors, landlords and software vendors."
        },
        {
                "question": "Will I see what is due soon?",
                "answer": "Yes. You can see what is due this week."
        },
        {
                "question": "How does setup work?",
                "answer": "We set up QuickAccounts for you, bring over your clients, vendors and opening balances, and train your team. Setup, data transfer and training are included."
        }
]}
    />
  );
}
