import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { coreFeatures, featureHref, getCatalog } from "@/components/landing/data/catalog";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";
import { isLocale, localeAlternates } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return coreFeatures.map(({ slug }) => ({ slug }));
}

async function load(params: Props["params"]) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return null;
  const feature = getCatalog(locale).findFeature(slug);
  return feature ? { locale, feature } : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const loaded = await load(params);
  if (!loaded) return {};
  const { locale, feature } = loaded;
  const alternates = localeAlternates(locale, featureHref(feature.slug));
  return {
    title: feature.metaTitle,
    description: feature.metaDescription,
    alternates,
    openGraph: {
      title: `${feature.metaTitle} | Dotcode ERP`,
      description: feature.metaDescription,
      url: alternates.canonical,
    },
  };
}

export default async function FeaturePage({ params }: Props) {
  const loaded = await load(params);
  if (!loaded) notFound();
  const { locale, feature } = loaded;

  return (
    <SeoLandingPage
      locale={locale}
      path={featureHref(feature.slug)}
      eyebrow={feature.title}
      title={feature.h1}
      intro={feature.intro}
      description={feature.metaDescription}
      sections={feature.sections}
      evidence={feature.evidence}
      faqs={feature.faqs}
    />
  );
}
