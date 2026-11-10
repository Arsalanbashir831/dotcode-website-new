import Link from "next/link";
import { Check } from "lucide-react";

import { PriceText } from "@/components/currency/currency-provider";
import { getDictionary } from "@/components/i18n/dictionary";
import { featureHref, getCatalog } from "@/components/landing/data/catalog";
import type { Evidence } from "@/components/landing/data/catalog";
import { MarketingHeader } from "@/components/landing/sections/marketing-header";
import { JsonLd } from "@/components/seo/json-ld";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { pageSchema } from "@/lib/seo";

export type SeoLandingPageProps = {
  locale: Locale;
  eyebrow: string;
  title: string;
  intro: string;
  /** Locale-free path, e.g. "/pricing". */
  path: string;
  description?: string;
  contentType?: "WebPage" | "BlogPosting";
  datePublished?: string;
  dateModified?: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  faqs: { question: string; answer: string }[];
  evidence?: Evidence;
};

export function SeoLandingPage({
  locale,
  eyebrow,
  title,
  intro,
  path,
  description,
  contentType = "WebPage",
  datePublished,
  dateModified,
  sections,
  faqs,
  evidence,
}: SeoLandingPageProps) {
  const t = getDictionary(locale);
  const href = (target: string) => localizePath(locale, target);
  const shownEvidence = evidence ?? t.seoPage.defaultEvidence;

  const section = path.split("/").filter(Boolean)[0];
  const sectionHubs: Record<string, { label: string; href: string }> = {
    features: { label: t.common.features, href: "/features" },
    industries: { label: t.common.industries, href: "/industries" },
  };
  const hub = sectionHubs[section];

  return (
    <main className="qa-site seo-page" id="top">
      <JsonLd data={pageSchema({ locale, path, name: title, description: description ?? intro, type: contentType, datePublished, dateModified })} />
      <MarketingHeader locale={locale} />
      <article>
        <section className="seo-hero">
          <div className="qa-container">
            <nav className="seo-breadcrumbs" aria-label={t.common.breadcrumb}>
              <Link href={href("/")}>{t.common.home}</Link>
              {hub ? <><span aria-hidden="true">/</span><Link href={href(hub.href)}>{hub.label}</Link></> : null}
              <span aria-hidden="true">/</span><span aria-current="page"><PriceText>{title}</PriceText></span>
            </nav>
            <p className="qa-eyebrow">{eyebrow}</p>
            <h1><PriceText>{title}</PriceText></h1>
            <p className="seo-intro"><PriceText>{intro}</PriceText></p>
            {contentType === "BlogPosting" ? <p className="seo-byline">{t.seoPage.byline}</p> : null}
            <div className="seo-actions">
              <WhatsAppButton size="lg" label={t.common.contactUs} />
              <Link href={href("/#contact")}>{t.common.bookFreeDemo}</Link>
            </div>
            <ul className="seo-proof">
              {t.seoPage.proof.map((item) => (
                <li key={item}><Check aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>
        </section>
        <div className="qa-container seo-content">
          {sections.map((item) => (
            <section key={item.heading}>
              <h2><PriceText>{item.heading}</PriceText></h2>
              <p><PriceText>{item.body}</PriceText></p>
              {item.bullets ? (
                <ul>{item.bullets.map((bullet) => <li key={bullet}><PriceText>{bullet}</PriceText></li>)}</ul>
              ) : null}
            </section>
          ))}
          <section className="seo-evidence seo-evidence-text" aria-labelledby="product-evidence-heading">
            <div>
              <p className="qa-eyebrow">{t.seoPage.howItWorks}</p>
              <h2 id="product-evidence-heading">{shownEvidence.title}</h2>
              <p>{shownEvidence.body}</p>
              <ol>
                {shownEvidence.steps.map(([label, text]) => <li key={label}><strong>{label}:</strong> {text}</li>)}
              </ol>
            </div>
          </section>
          <nav className="seo-related-links" aria-label={t.seoPage.relatedLabel}>
            <h2>{t.seoPage.relatedTitle}</h2>
            <div>
              {getCatalog(locale).coreFeatures.filter(({ slug }) => featureHref(slug) !== path).map(({ slug, title: featureTitle }) => (
                <Link href={href(featureHref(slug))} key={slug}>{featureTitle}</Link>
              ))}
              <Link href={href("/industries")}>{t.common.industries}</Link>
            </div>
          </nav>
          <section className="seo-cta">
            <h2>{t.seoPage.ctaTitle}</h2>
            <p>{t.seoPage.ctaBody}</p>
            <WhatsAppButton size="lg" label={t.common.contactUs} />
          </section>
          <section className="seo-faq" aria-labelledby="seo-faq-heading">
            <h2 id="seo-faq-heading">{t.seoPage.faqTitle}</h2>
            {faqs.map(({ question, answer }) => (
              <details key={question}><summary><PriceText>{question}</PriceText></summary><p><PriceText>{answer}</PriceText></p></details>
            ))}
          </section>
        </div>
      </article>
      <footer className="qa-footer"><div className="qa-container qa-footer-bottom">
        <p>© {new Date().getFullYear()} Dotcode Solutions</p>
        <Link href={href("/company")}>{t.common.ourCompany}</Link>
        <Link href={href("/")}>{t.common.productHome}</Link>
        <a href="mailto:info@dotcodesolutions.com">info@dotcodesolutions.com</a>
      </div></footer>
    </main>
  );
}
