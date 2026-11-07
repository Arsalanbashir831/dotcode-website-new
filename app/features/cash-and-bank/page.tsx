import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Cash and Bank Account Tracking",
  description: "Track every bank account and cash balance in one view. Record deposits, payments and transfers in a few clicks.",
  alternates: { canonical: "/features/cash-and-bank" },
  openGraph: {
    title: "Cash and Bank Account Tracking | QuickAccounts",
    description: "Track every bank account and cash balance in one view. Record deposits, payments and transfers in a few clicks.",
    url: "/features/cash-and-bank",
  },
};

export default function CashAndBankPage() {
  return (
    <SeoLandingPage
      path="/features/cash-and-bank"
      eyebrow="Cash and bank"
      title="Your cash position, always current"
      intro="Track every bank account and cash balance in one view. Record deposits, payments and transfers in a few clicks."
      description="Track every bank account and cash balance in one view. Record deposits, payments and transfers in a few clicks."
      sections={[
        {
                "heading": "Every account in one view",
                "body": "See your bank accounts and cash balances together, so you know your cash position at a glance."
        },
        {
                "heading": "Deposits, payments and transfers",
                "body": "Record money in, money out and moves between accounts in a few clicks."
        },
        {
                "heading": "Plan with real numbers",
                "body": "Knowing what you have today makes it easier to plan payroll, vendor payments and growth."
        }
]}
      faqs={[
        {
                "question": "Can I track more than one bank account?",
                "answer": "Yes. Track every bank account and cash balance in one view."
        },
        {
                "question": "Can I record transfers between accounts?",
                "answer": "Yes. Deposits, payments and transfers can be recorded in a few clicks."
        },
        {
                "question": "How does setup work?",
                "answer": "We set up QuickAccounts for you, bring over your clients, vendors and opening balances, and train your team. Setup, data transfer and training are included."
        }
]}
    />
  );
}
