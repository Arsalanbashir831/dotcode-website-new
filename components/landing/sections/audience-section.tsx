import Link from "next/link";

import { getDictionary } from "@/components/i18n/dictionary";
import { getCatalog, industryHref } from "@/components/landing/data/catalog";
import { SectionHeading } from "@/components/landing/shared/section-heading";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

export const AudienceSection = ({ locale }: { locale: Locale }) => {
  const t = getDictionary(locale);
  return (
    <section className="qa-section qa-audience-section" id="industries">
      <div className="qa-container">
        <SectionHeading
          isDark
          eyebrow={t.audience.eyebrow}
          title={t.audience.title}
          description={t.audience.description}
        />
        <div className="qa-audience-grid qa-audience-grid-simple">
          {getCatalog(locale).industryGroups.map(({ icon: Icon, name, description, industries }) => (
            <article className="qa-audience-card qa-audience-card-simple" key={name} data-reveal>
              <div className="qa-audience-copy">
                <div className="qa-audience-title">
                  <span><Icon aria-hidden="true" /></span>
                  <h3>{name}</h3>
                </div>
                <p>{description}</p>
                <ul className="qa-industry-links">
                  {industries.map(({ slug, title }) => (
                    <li key={slug}><Link href={localizePath(locale, industryHref(slug))}>{title}</Link></li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <p className="qa-audience-all"><Link href={localizePath(locale, "/industries")}>{t.audience.allLink}</Link></p>
      </div>
    </section>
  );
};
