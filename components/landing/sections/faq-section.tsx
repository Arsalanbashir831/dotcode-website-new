import { PriceText } from "@/components/currency/currency-provider";
import { getDictionary } from "@/components/i18n/dictionary";
import { getLandingContent } from "@/components/landing/data/landing-content";
import type { Locale } from "@/lib/i18n";

export const FaqSection = ({ locale }: { locale: Locale }) => {
  const t = getDictionary(locale).faq;
  return (
    <section className="qa-section bg-white" id="faq">
      <div className="qa-container qa-faq">
        <div data-reveal>
          <p className="qa-eyebrow">{t.eyebrow}</p>
          <h2>
            <span>{t.line1}</span>
            <span>{t.line2}</span>
          </h2>
          <p>{t.body}</p>
        </div>
        <div>
          {getLandingContent(locale).faqItems.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}</summary>
              <p><PriceText>{answer}</PriceText></p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
