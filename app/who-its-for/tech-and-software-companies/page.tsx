import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Accounting Software for Tech & Software Companies",
  description: "Bill projects, support contracts and subscriptions, and track costs against revenue in one easy app.",
  alternates: { canonical: "/who-its-for/tech-and-software-companies" },
  openGraph: {
    title: "Accounting Software for Tech & Software Companies | QuickAccounts",
    description: "Bill projects, support contracts and subscriptions, and track costs against revenue in one easy app.",
    url: "/who-its-for/tech-and-software-companies",
  },
};

export default function TechAndSoftwareCompaniesPage() {
  return (
    <SeoLandingPage
      path="/who-its-for/tech-and-software-companies"
      eyebrow="Tech and software companies"
      title="Projects, support contracts and subscriptions in one place"
      intro="Bill development milestones, monthly support and SaaS subscriptions, and track salaries and cloud costs against revenue."
      description="Bill projects, support contracts and subscriptions, and track costs against revenue in one easy app."
      sections={[
        {
                "heading": "Bill projects and milestones",
                "body": "Invoice development work by milestone, fixed fee or hourly rate, so each stage of a project is billed on time."
        },
        {
                "heading": "Monthly support and subscriptions",
                "body": "Set up support contracts and subscriptions as recurring invoices, so they go out on schedule without extra work."
        },
        {
                "heading": "Salaries and cloud costs against revenue",
                "body": "Record salaries, software and cloud costs, and compare them with what each client or product brings in."
        }
]}
      faqs={[
        {
                "question": "Can I bill subscriptions?",
                "answer": "Yes. Set up subscriptions as recurring invoices on the schedule you choose."
        },
        {
                "question": "Can I track software and cloud costs?",
                "answer": "Yes. Record software and other costs by category and tag them to a client or project."
        },
        {
                "question": "How much does QuickAccounts cost?",
                "answer": "Pay once and use it for life. Online is $850 one-time plus $40/month hosting, with unlimited users. Offline is $1,200 one-time for one user. There is no yearly software renewal fee."
        }
]}
    />
  );
}
