"use client";

import { getDictionary } from "@/components/i18n/dictionary";
import { LocaleLink as Link, useLocale } from "@/components/i18n/locale-provider";

/** not-found.tsx receives no route params, so it reads the locale from context. */
export function NotFoundContent() {
  const t = getDictionary(useLocale()).notFound;
  return (
    <main className="qa-site seo-page">
      <section className="seo-hero">
        <div className="qa-container">
          <p className="qa-eyebrow">404</p>
          <h1>{t.title}</h1>
          <p className="seo-intro">{t.body}</p>
          <div className="seo-actions">
            <Link href="/">{t.home}</Link>
            <Link href="/features">{t.features}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
