import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  Building2,
  Check,
  GitBranch,
  ReceiptText,
  ShoppingCart,
  Users,
} from "lucide-react";

import { getDictionary } from "@/components/i18n/dictionary";
import { MarketingHeader } from "@/components/landing/sections/marketing-header";
import { SiteFooter } from "@/components/landing/sections/site-footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { getWhatsAppContactUrl } from "@/lib/contact";
import { localeAlternates, localizePath, readLocale } from "@/lib/i18n";
import type { LocaleParams } from "@/lib/i18n";
import { SITE_URL } from "@/lib/seo";

import { customSoftwareContent } from "./content";

const publishedDate = "2026-11-07";
const toolIcons = [BarChart3, ReceiptText, ShoppingCart, Users, Building2, GitBranch];

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await readLocale(params);
  const c = customSoftwareContent[locale];
  const alternates = localeAlternates(locale, "/custom-software");
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: c.keywords,
    alternates,
    openGraph: {
      title: `${c.metaTitle} | Dotcode Solutions`,
      description: c.ogDescription,
      url: alternates.canonical,
      type: "website",
    },
  };
}

export default async function CustomSoftwarePage({ params }: LocaleParams) {
  const locale = await readLocale(params);
  const c = customSoftwareContent[locale];
  const { common } = getDictionary(locale);
  const href = (path: string) => localizePath(locale, path);
  const pageUrl = `${SITE_URL}${href("/custom-software")}`;
  const contactUrl = getWhatsAppContactUrl(c.whatsappMessage);

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: c.schemaName,
      serviceType: c.schemaServiceType,
      url: pageUrl,
      inLanguage: locale,
      description: c.schemaDescription,
      provider: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Dotcode Solutions",
        url: SITE_URL,
      },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: c.schemaCatalogName,
        itemListElement: c.tools.map((tool) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: tool.title, description: tool.body },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: locale,
      datePublished: publishedDate,
      dateModified: publishedDate,
      mainEntity: c.faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        datePublished: publishedDate,
        dateModified: publishedDate,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: common.home, item: `${SITE_URL}${href("/")}` },
        { "@type": "ListItem", position: 2, name: c.schemaName, item: pageUrl },
      ],
    },
  ];

  return (
    <main className="qa-site custom-erp-page" id="top">
      {schemas.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      ))}
      <MarketingHeader locale={locale} />

      <article>
        <section className="custom-erp-hero">
          <div className="qa-container custom-erp-hero-grid">
            <div>
              <p className="qa-eyebrow">{c.eyebrow}</p>
              <h1>{c.title}</h1>
              <p className="custom-erp-overview">{c.overview}</p>
              <p className="custom-erp-updated">{c.updated}</p>
              <div className="custom-erp-actions">
                <WhatsAppButton href={contactUrl} size="lg" label={c.discuss} />
                <a href="#tools">{c.exploreLink}</a>
              </div>
            </div>
            <aside className="custom-erp-summary" aria-label={c.summaryLabel}>
              <p>{c.summaryKicker}</p>
              <h2>{c.summaryTitle}</h2>
              <ul>
                {c.summaryPoints.map((item) => (
                  <li key={item}><Check aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="custom-erp-section" id="tools">
          <div className="qa-container">
            <div className="custom-erp-heading">
              <p className="qa-eyebrow">{c.toolsEyebrow}</p>
              <h2>{c.toolsTitle}</h2>
              <p>{c.toolsBody}</p>
            </div>
            <div className="custom-erp-modules">
              {c.tools.map(({ title, body }, index) => {
                const Icon = toolIcons[index];
                return (
                  <article key={title}>
                    <span><Icon aria-hidden="true" /></span>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="custom-erp-section custom-erp-fit">
          <div className="qa-container custom-erp-split">
            <div className="custom-erp-heading">
              <p className="qa-eyebrow">{c.fitEyebrow}</p>
              <h2>{c.fitTitle}</h2>
            </div>
            <div>
              <p>{c.fitIntro}</p>
              <ul>{c.fitPoints.map((point) => <li key={point}>{point}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="custom-erp-section" id="development-process">
          <div className="qa-container">
            <div className="custom-erp-heading">
              <p className="qa-eyebrow">{c.processEyebrow}</p>
              <h2>{c.processTitle}</h2>
              <p>{c.processBody}</p>
            </div>
            <ol className="custom-erp-process">
              {c.processSteps.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{step.title}</h3><p>{step.body}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="custom-erp-section custom-erp-scope">
          <div className="qa-container custom-erp-split">
            <div className="custom-erp-heading">
              <p className="qa-eyebrow">{c.scopeEyebrow}</p>
              <h2>{c.scopeTitle}</h2>
            </div>
            <div>
              <p>{c.scopeBody}</p>
              <dl>
                {c.scopeFacts.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}
              </dl>
            </div>
          </div>
        </section>

        <section className="custom-erp-section custom-erp-cta">
          <div className="qa-container">
            <p className="qa-eyebrow">{c.ctaEyebrow}</p>
            <h2>{c.ctaTitle}</h2>
            <p>{c.ctaBody}</p>
            <WhatsAppButton href={contactUrl} size="lg" label={c.discuss} />
          </div>
        </section>

        <section className="custom-erp-section custom-erp-faq" id="frequently-asked-questions">
          <div className="qa-container">
            <div className="custom-erp-heading">
              <p className="qa-eyebrow">{c.faqEyebrow}</p>
              <h2>{c.faqTitle}</h2>
              <p>{c.faqReviewed}</p>
            </div>
            <div className="custom-erp-faq-list">
              {c.faqs.map(({ id, question, answer }) => (
                <details id={`faq-${id}`} key={id}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <nav className="qa-container custom-erp-related" aria-label={c.relatedLabel}>
          <h2>{c.relatedTitle}</h2>
          <div>
            {c.related.map(([label, path]) => <Link href={href(path)} key={path}>{label}</Link>)}
          </div>
        </nav>
      </article>

      <SiteFooter locale={locale} />
    </main>
  );
}
