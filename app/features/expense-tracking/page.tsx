import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Expense Tracking for Service Businesses",
  description: "Log salaries, rent, software, travel and client-billable expenses by category and by project.",
  alternates: { canonical: "/features/expense-tracking" },
  openGraph: {
    title: "Expense Tracking for Service Businesses | QuickAccounts",
    description: "Log salaries, rent, software, travel and client-billable expenses by category and by project.",
    url: "/features/expense-tracking",
  },
};

export default function ExpenseTrackingPage() {
  return (
    <SeoLandingPage
      path="/features/expense-tracking"
      eyebrow="Expense tracking"
      title="Know where your money goes"
      intro="Log salaries, rent, software, travel and client-billable expenses by category and by project."
      description="Log salaries, rent, software, travel and client-billable expenses by category and by project."
      sections={[
        {
                "heading": "Record every cost by category",
                "body": "Salaries, rent, software, travel and more. Categories make it easy to see where money goes each month."
        },
        {
                "heading": "Tie costs to clients and projects",
                "body": "Tag an expense to a client or project and it feeds straight into profitability, so you see the real cost of each engagement."
        },
        {
                "heading": "Less hunting at month-end",
                "body": "With costs recorded as they happen, reports are ready when you need them instead of after a scramble."
        }
]}
      faqs={[
        {
                "question": "Can I track client expenses separately?",
                "answer": "Yes. Tag expenses to a client or project to see the cost of each."
        },
        {
                "question": "Can I see expenses by category?",
                "answer": "Yes. Expenses are recorded by category and appear in your reports."
        },
        {
                "question": "How does setup work?",
                "answer": "We set up QuickAccounts for you, bring over your clients, vendors and opening balances, and train your team. Setup, data transfer and training are included."
        }
]}
    />
  );
}
