import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { allIndustries, getCatalog, industryHref } from "@/components/landing/data/catalog";
import { FootwearIndustryPage } from "@/components/industries/footwear/footwear-page";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";
import { isLocale, localeAlternates } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return allIndustries.map(({ slug }) => ({ slug }));
}

async function load(params: Props["params"]) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return null;
  const catalog = getCatalog(locale);
  const industry = catalog.findIndustry(slug);
  return industry ? { locale, catalog, industry } : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const loaded = await load(params);
  if (!loaded) return {};
  const { locale, industry } = loaded;
  const alternates = localeAlternates(locale, industryHref(industry.slug));
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: industry.keywords,
    alternates,
    openGraph: {
      title: `${industry.metaTitle} | Dotcode ERP`,
      description: industry.metaDescription,
      url: alternates.canonical,
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const loaded = await load(params);
  if (!loaded) notFound();
  const { locale, catalog, industry } = loaded;

  if (industry.slug === "footwear-leather-goods") {
    return (
      <FootwearIndustryPage
        locale={locale}
        path={industryHref(industry.slug)}
        industry={industry}
        oneSystem={catalog.oneSystemSection}
        faqs={[...industry.faqs, ...catalog.commonIndustryFaqs]}
      />
    );
  }

  return (
    <SeoLandingPage
      locale={locale}
      path={industryHref(industry.slug)}
      eyebrow={industry.title}
      title={industry.h1}
      intro={industry.intro}
      description={industry.metaDescription}
      sections={[...industry.sections, catalog.oneSystemSection]}
      faqs={[...industry.faqs, ...catalog.commonIndustryFaqs]}
    />
  );
}
