import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Client and Project Profitability Software",
  description: "Compare what each client, matter or project earns against what it costs, so you price the next one right.",
  alternates: { canonical: "/features/project-profitability" },
  openGraph: {
    title: "Client and Project Profitability Software | QuickAccounts",
    description: "Compare what each client, matter or project earns against what it costs, so you price the next one right.",
    url: "/features/project-profitability",
  },
};

export default function ProjectProfitabilityPage() {
  return (
    <SeoLandingPage
      path="/features/project-profitability"
      eyebrow="Project profitability"
      title="Know which clients are worth it"
      intro="Compare what each client, matter or project earns against what it costs, so you price the next one right."
      description="Compare what each client, matter or project earns against what it costs, so you price the next one right."
      sections={[
        {
                "heading": "See your real margins",
                "body": "Tag income and expenses to a client, matter or project. QuickAccounts shows what each one earns after what it costs."
        },
        {
                "heading": "Price the next job with confidence",
                "body": "Past margins show which work pays and which does not, so you quote the next engagement on evidence instead of guesswork."
        },
        {
                "heading": "Decide where to spend your time",
                "body": "Some clients bring revenue but little profit. Seeing the difference helps you choose who to grow, reprice or let go."
        }
]}
      faqs={[
        {
                "question": "Can I see profit by client or project?",
                "answer": "Yes. Tag income and expenses to a client or project and see what each one earns."
        },
        {
                "question": "Does it work for matters and engagements?",
                "answer": "Yes. Use clients, matters, engagements or projects, whichever fits your firm."
        },
        {
                "question": "How does setup work?",
                "answer": "We set up QuickAccounts for you, bring over your clients, vendors and opening balances, and train your team. Setup, data transfer and training are included."
        }
]}
    />
  );
}
