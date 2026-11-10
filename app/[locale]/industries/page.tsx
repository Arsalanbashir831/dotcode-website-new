import type { Metadata } from "next";
import Link from "next/link";

import { fill, getDictionary } from "@/components/i18n/dictionary";
import { getCatalog, industryHref } from "@/components/landing/data/catalog";
import { MarketingHeader } from "@/components/landing/sections/marketing-header";
import { SiteFooter } from "@/components/landing/sections/site-footer";
import { JsonLd } from "@/components/seo/json-ld";
import { localeAlternates, localizePath, readLocale } from "@/lib/i18n";
import type { LocaleParams } from "@/lib/i18n";
import { pageSchema } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await readLocale(params);
  const t = getDictionary(locale).industriesHub;
  return {
    title: t.metaTitle,
    description: t.description,
    alternates: localeAlternates(locale, "/industries"),
  };
}

export default async function IndustriesPage({ params }: LocaleParams) {
  const locale = await readLocale(params);
  const dictionary = getDictionary(locale);
  const t = dictionary.industriesHub;
  const catalog = getCatalog(locale);

  return (
    <main className="qa-site seo-page">
      <JsonLd data={pageSchema({ locale, path: "/industries", name: t.schemaName, description: t.description, type: "CollectionPage" })} />
      <MarketingHeader locale={locale} />
      <article>
        <section className="seo-hero">
          <div className="qa-container">
            <nav className="seo-breadcrumbs" aria-label={dictionary.common.breadcrumb}>
              <Link href={localizePath(locale, "/")}>{dictionary.common.home}</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{dictionary.common.industries}</span>
            </nav>
            <p className="qa-eyebrow">{t.eyebrow}</p>
            <h1>{fill(t.title, { count: catalog.allIndustries.length })}</h1>
            <p className="seo-intro">{t.intro}</p>
          </div>
        </section>
        <div className="qa-container seo-content">
          {catalog.industryGroups.map(({ name, description: groupDescription, industries }) => (
            <section className="seo-hub-group" key={name}>
              <h2>{name}</h2>
              <p>{groupDescription}</p>
              <div className="seo-hub-grid industries-hub-grid">
                {industries.map(({ slug, title, summary }) => (
                  <section key={slug}><h3><Link href={localizePath(locale, industryHref(slug))}>{title}</Link></h3><p>{summary}</p></section>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
      <SiteFooter locale={locale} />
    </main>
  );
}
