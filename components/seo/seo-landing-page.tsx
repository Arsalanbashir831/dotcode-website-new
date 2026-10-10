import Link from "next/link";
import { Check } from "lucide-react";

import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { MarketingHeader } from "@/components/landing/sections/marketing-header";

export type SeoLandingPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  faqs: { question: string; answer: string }[];
};

export function SeoLandingPage({
  eyebrow,
  title,
  intro,
  sections,
  faqs,
}: SeoLandingPageProps) {
  return (
    <main className="qa-site seo-page" id="top">
      <MarketingHeader />
      <article>
        <section className="seo-hero">
          <div className="qa-container">
            <p className="qa-eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="seo-intro">{intro}</p>
            <div className="seo-actions">
              <WhatsAppButton size="lg" />
              <Link href="/#pricing">See license options</Link>
            </div>
            <ul className="seo-proof">
              {["Free product demo", "Unlimited users", "Setup and team training included"].map((item) => (
                <li key={item}><Check aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>
        </section>
        <div className="qa-container seo-content">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
              {section.bullets ? (
                <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
              ) : null}
            </section>
          ))}
          <section className="seo-cta">
            <h2>See whether QuickAccounts fits your workflow</h2>
            <p>Talk through your current records, team needs and setup before choosing a license.</p>
            <WhatsAppButton size="lg" />
          </section>
          <section className="seo-faq" aria-labelledby="seo-faq-heading">
            <h2 id="seo-faq-heading">Frequently asked questions</h2>
            {faqs.map(({ question, answer }) => (
              <details key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </section>
        </div>
      </article>
      <footer className="qa-footer"><div className="qa-container qa-footer-bottom">
        <p>© {new Date().getFullYear()} Dotcode Solutions</p>
        <Link href="/">QuickAccounts home</Link>
        <a href="mailto:hello@dotcode.dev">hello@dotcode.dev</a>
      </div></footer>
    </main>
  );
}
