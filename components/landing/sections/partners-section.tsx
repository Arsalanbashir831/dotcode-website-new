import { getDictionary } from "@/components/i18n/dictionary";
import { getLandingContent } from "@/components/landing/data/landing-content";
import { SectionHeading } from "@/components/landing/shared/section-heading";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import type { Locale } from "@/lib/i18n";

export const PartnersSection = ({ locale }: { locale: Locale }) => {
  const dictionary = getDictionary(locale);
  const t = dictionary.partners;
  return (
    <section className="qa-section bg-[#F4F1ED]" id="partners">
      <div className="qa-container">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />
        <div className="qa-partner-grid">
          {getLandingContent(locale).partnerOptions.map(({ title, rate, description }) => (
            <article key={title} data-reveal>
              <h3>{title}</h3>
              <p>{description}</p>
              <strong dir="ltr">{rate}</strong>
              <span>{t.rateSuffix}</span>
              <ul>
                {t.perks.map((perk) => <li key={perk}>{perk}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="qa-white-label">
          <div>
            <h3>{t.whiteLabelTitle}</h3>
            <p>{t.whiteLabelBody}</p>
          </div>
          <WhatsAppButton label={dictionary.common.contactUs} />
        </div>
      </div>
    </section>
  );
};
