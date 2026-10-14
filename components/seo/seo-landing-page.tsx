import Link from "next/link";
import Image from "next/image";
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
              <Link href="/#contact">Talk to our team</Link>
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
          <section className="seo-evidence" aria-labelledby="product-evidence-heading">
            <div>
              <p className="qa-eyebrow">Inside the workflow</p>
              <h2 id="product-evidence-heading">A practical record trail from stock to service.</h2>
              <p>For example, a distributor can receive a serialized camera, sell it against a customer account, find the original invoice later, and review the warranty or RMA request without rebuilding the history from separate spreadsheets.</p>
              <ol>
                <li><strong>Receive:</strong> record products, quantities and serial numbers.</li>
                <li><strong>Sell:</strong> connect the item to the customer and invoice.</li>
                <li><strong>Resolve:</strong> verify warranty status and coordinate return or replacement.</li>
              </ol>
            </div>
            <Image src="/assets/feature1.png" alt="QuickAccounts inventory workflow preview" width={900} height={650} />
          </section>
          <nav className="seo-related-links" aria-label="Related QuickAccounts pages">
            <h2>Explore related workflows</h2>
            <div>
              <Link href="/features/serial-number-tracking">Serial number tracking</Link>
              <Link href="/features/warranty-management">Warranty and RMA management</Link>
              <Link href="/features/multi-warehouse-inventory">Multi-warehouse inventory</Link>
              <Link href="/features/business-accounting">Business accounting</Link>
            </div>
          </nav>
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
        <a href="mailto:arsalanbashir831@gmail.com">arsalanbashir831@gmail.com</a>
      </div></footer>
    </main>
  );
}
