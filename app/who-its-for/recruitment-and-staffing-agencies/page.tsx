import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Accounting Software for Recruitment & Staffing Agencies",
  description: "Invoice placement fees and contractor hours, and track what you pay out against what you bill.",
  alternates: { canonical: "/who-its-for/recruitment-and-staffing-agencies" },
  openGraph: {
    title: "Accounting Software for Recruitment & Staffing Agencies | QuickAccounts",
    description: "Invoice placement fees and contractor hours, and track what you pay out against what you bill.",
    url: "/who-its-for/recruitment-and-staffing-agencies",
  },
};

export default function RecruitmentAndStaffingAgenciesPage() {
  return (
    <SeoLandingPage
      path="/who-its-for/recruitment-and-staffing-agencies"
      eyebrow="Recruitment and staffing agencies"
      title="Placement fees and contractor billing, sorted"
      intro="Invoice placement fees and contractor hours, and track what you pay out against what you bill."
      description="Invoice placement fees and contractor hours, and track what you pay out against what you bill."
      sections={[
        {
                "heading": "Placement fees and contractor hours",
                "body": "Invoice one-off placement fees and bill contractor hours to clients from the same system."
        },
        {
                "heading": "What you pay against what you bill",
                "body": "Record contractor payments and compare them with what you invoice, so margins are clear."
        },
        {
                "heading": "See who owes you",
                "body": "Client balances and aging show which invoices are overdue, so follow-up is quick."
        }
]}
      faqs={[
        {
                "question": "Can I invoice contractor hours?",
                "answer": "Yes. Bill hours at an hourly rate, and turn billable work into invoices."
        },
        {
                "question": "Can I see margin per client?",
                "answer": "Yes. Tag income and expenses to a client to see what each one earns."
        },
        {
                "question": "How much does QuickAccounts cost?",
                "answer": "Pay once and use it for life. Online is $850 one-time plus $40/month hosting, with unlimited users. Offline is $1,200 one-time for one user. There is no yearly software renewal fee."
        }
]}
    />
  );
}
