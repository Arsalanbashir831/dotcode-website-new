import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Accounting Software for Architects & Engineering Firms",
  description: "Invoice by project stage, track subcontractor and site costs, and keep project cash flow positive.",
  alternates: { canonical: "/who-its-for/architects-and-engineering-firms" },
  openGraph: {
    title: "Accounting Software for Architects & Engineering Firms | QuickAccounts",
    description: "Invoice by project stage, track subcontractor and site costs, and keep project cash flow positive.",
    url: "/who-its-for/architects-and-engineering-firms",
  },
};

export default function ArchitectsAndEngineeringFirmsPage() {
  return (
    <SeoLandingPage
      path="/who-its-for/architects-and-engineering-firms"
      eyebrow="Architects and engineering firms"
      title="Milestone billing made simple"
      intro="Invoice by project stage, track subcontractor and site costs, and keep project cash flow positive."
      description="Invoice by project stage, track subcontractor and site costs, and keep project cash flow positive."
      sections={[
        {
                "heading": "Invoice by project stage",
                "body": "Bill at each milestone, from concept to completion, so work is paid for as it progresses."
        },
        {
                "heading": "Subcontractor and site costs",
                "body": "Record subcontractor fees and site costs against each project, so you always know what a project has cost so far."
        },
        {
                "heading": "Keep project cash flow positive",
                "body": "Compare billing and costs by project and watch cash across your bank accounts, so a project does not run ahead of its payments."
        }
]}
      faqs={[
        {
                "question": "Can I bill by milestone?",
                "answer": "Yes. Invoice at each project stage."
        },
        {
                "question": "Can I track costs per project?",
                "answer": "Yes. Tag expenses to a project and see its profit."
        },
        {
                "question": "How much does QuickAccounts cost?",
                "answer": "Pay once and use it for life. Online is $850 one-time plus $40/month hosting, with unlimited users. Offline is $1,200 one-time for one user. There is no yearly software renewal fee."
        }
]}
    />
  );
}
