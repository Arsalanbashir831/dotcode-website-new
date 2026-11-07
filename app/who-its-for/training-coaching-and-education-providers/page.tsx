import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Accounting Software for Training & Coaching Providers",
  description: "Bill workshops, programmes and corporate training, and track trainer and venue costs.",
  alternates: { canonical: "/who-its-for/training-coaching-and-education-providers" },
  openGraph: {
    title: "Accounting Software for Training & Coaching Providers | QuickAccounts",
    description: "Bill workshops, programmes and corporate training, and track trainer and venue costs.",
    url: "/who-its-for/training-coaching-and-education-providers",
  },
};

export default function TrainingCoachingAndEducationProvidersPage() {
  return (
    <SeoLandingPage
      path="/who-its-for/training-coaching-and-education-providers"
      eyebrow="Training, coaching and education providers"
      title="Course fees in, costs out"
      intro="Bill workshops, programmes and corporate training, and track trainer and venue costs."
      description="Bill workshops, programmes and corporate training, and track trainer and venue costs."
      sections={[
        {
                "heading": "Bill workshops and programmes",
                "body": "Invoice course fees, corporate training and coaching packages, one-off or recurring."
        },
        {
                "heading": "Trainer and venue costs",
                "body": "Record trainer fees, venue hire and materials against each programme, so you see what each one costs to run."
        },
        {
                "heading": "See what each programme earns",
                "body": "Compare fees collected with costs for each programme, so you know which ones are worth repeating."
        }
]}
      faqs={[
        {
                "question": "Can I bill corporate training clients?",
                "answer": "Yes. Invoice workshops and programmes, and track client balances."
        },
        {
                "question": "Can I track costs per programme?",
                "answer": "Yes. Tag expenses to a project or programme."
        },
        {
                "question": "How much does QuickAccounts cost?",
                "answer": "Pay once and use it for life. Online is $850 one-time plus $40/month hosting, with unlimited users. Offline is $1,200 one-time for one user. There is no yearly software renewal fee."
        }
]}
    />
  );
}
