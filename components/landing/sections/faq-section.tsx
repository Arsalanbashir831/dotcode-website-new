import { faqItems } from "@/components/landing/data/landing-content";

export const FaqSection = () => (
  <section className="qa-section bg-white" id="faq">
    <div className="qa-container qa-faq">
      <div data-reveal>
        <p className="qa-eyebrow">FAQs</p>
        <h2>
          <span>Clear answers before</span>
          <span>you choose.</span>
        </h2>
        <p>
          Learn how QuickAccounts licensing, setup and hosting work for your
          business.
        </p>
      </div>
      <div>
        {faqItems.map(({ question, answer }) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
