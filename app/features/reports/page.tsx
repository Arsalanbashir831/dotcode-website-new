import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Profit and Loss, Balance Sheet and Cash Flow Reports",
  description: "Profit and loss, balance sheet, cash flow and receivables aging, ready for partners, investors or your accountant.",
  alternates: { canonical: "/features/reports" },
  openGraph: {
    title: "Profit and Loss, Balance Sheet and Cash Flow Reports | QuickAccounts",
    description: "Profit and loss, balance sheet, cash flow and receivables aging, ready for partners, investors or your accountant.",
    url: "/features/reports",
  },
};

export default function ReportsPage() {
  return (
    <SeoLandingPage
      path="/features/reports"
      eyebrow="Reports"
      title="Your numbers, in plain view"
      intro="Profit and loss, balance sheet, cash flow and receivables aging, ready for partners, investors or your accountant."
      description="Profit and loss, balance sheet, cash flow and receivables aging, ready for partners, investors or your accountant."
      sections={[
        {
                "heading": "The reports firms actually use",
                "body": "Profit and loss, balance sheet, cash flow and receivables aging, all from the invoices, payments and expenses you record."
        },
        {
                "heading": "Ready for partners and investors",
                "body": "Share clear numbers at your partner meeting or in an investor update without rebuilding them in a spreadsheet."
        },
        {
                "heading": "Ready for your accountant",
                "body": "Give your accountant access, or export your reports and ledgers. Year-end gets simpler."
        }
]}
      faqs={[
        {
                "question": "Which reports are included?",
                "answer": "Profit and loss, balance sheet, cash flow and receivables aging."
        },
        {
                "question": "Can my accountant use it too?",
                "answer": "Yes. Give them access, or export your reports and ledgers."
        },
        {
                "question": "How does setup work?",
                "answer": "We set up QuickAccounts for you, bring over your clients, vendors and opening balances, and train your team. Setup, data transfer and training are included."
        }
]}
    />
  );
}
