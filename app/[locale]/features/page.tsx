import type { Metadata } from "next";
import Link from "next/link";

import { getDictionary } from "@/components/i18n/dictionary";
import { featureHref, getCatalog } from "@/components/landing/data/catalog";
import { MarketingHeader } from "@/components/landing/sections/marketing-header";
import { SiteFooter } from "@/components/landing/sections/site-footer";
import { JsonLd } from "@/components/seo/json-ld";
import { localeAlternates, localizePath, readLocale } from "@/lib/i18n";
import type { LocaleParams } from "@/lib/i18n";
import { pageSchema } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await readLocale(params);
  const t = getDictionary(locale).featuresHub;
  return {
    title: t.metaTitle,
    description: t.description,
    alternates: localeAlternates(locale, "/features"),
  };
}

export default async function FeaturesPage({ params }: LocaleParams) {
  const locale = await readLocale(params);
  const dictionary = getDictionary(locale);
  const t = dictionary.featuresHub;

  return (
    <main className="qa-site seo-page">
      <JsonLd data={pageSchema({ locale, path: "/features", name: t.schemaName, description: t.description, type: "CollectionPage" })} />
      <MarketingHeader locale={locale} />
      <article className="qa-container seo-content blog-content">
        <nav className="seo-breadcrumbs" aria-label={dictionary.common.breadcrumb}>
          <Link href={localizePath(locale, "/")}>{dictionary.common.home}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{dictionary.common.features}</span>
        </nav>
        <p className="qa-eyebrow">{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <p className="seo-intro">{t.intro}</p>
        <div className="seo-hub-grid">
          {getCatalog(locale).coreFeatures.map(({ slug, title, description: summary }) => (
            <section key={slug}><h2><Link href={localizePath(locale, featureHref(slug))}>{title}</Link></h2><p>{summary}</p></section>
          ))}
        </div>
      </article>
      <SiteFooter locale={locale} />
    </main>
  );
}
