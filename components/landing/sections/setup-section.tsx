import { getDictionary } from "@/components/i18n/dictionary";
import { getLandingContent } from "@/components/landing/data/landing-content";
import type { Locale } from "@/lib/i18n";

export const SetupSection = ({ locale }: { locale: Locale }) => {
  const t = getDictionary(locale).setup;
  return (
    <section className="qa-section bg-white">
      <div className="qa-container qa-setup">
        <div data-reveal>
          <p className="qa-eyebrow">{t.eyebrow}</p>
          <h2>
            <span>{t.line1}</span>
            <span>{t.line2}</span>
          </h2>
          <p>{t.body}</p>
        </div>
        <div>
          {getLandingContent(locale).setupSteps.map(({ title, description }, index) => (
            <article className="qa-setup-row" key={title} data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
