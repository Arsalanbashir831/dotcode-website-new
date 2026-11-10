import Link from "next/link";

import { getDictionary } from "@/components/i18n/dictionary";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

export function ProductDefinitionSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <section className="qa-product-definition" aria-labelledby="what-is-dotcode-erp">
      <div className="qa-container">
        <p className="qa-eyebrow">{t.productDefinition.eyebrow}</p>
        <h2 id="what-is-dotcode-erp">{t.productDefinition.title}</h2>
        <p>{t.productDefinition.body}</p>
        <div className="qa-product-definition-links">
          <Link href={localizePath(locale, "/#contact")}>{t.common.bookFreeDemo}</Link>
          <Link href={localizePath(locale, "/industries")}>{t.productDefinition.industriesLink}</Link>
        </div>
      </div>
    </section>
  );
}
