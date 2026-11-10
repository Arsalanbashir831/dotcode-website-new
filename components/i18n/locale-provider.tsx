"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext } from "react";
import type { ComponentProps, ReactNode } from "react";

import { defaultLocale, localizePath, splitLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

const LocaleContext = createContext<Locale>(defaultLocale);

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export const useLocale = () => useContext(LocaleContext);

/** next/link that keeps visitors in their current language. */
export function LocaleLink({ href, ...props }: ComponentProps<typeof Link>) {
  const locale = useLocale();
  return <Link href={typeof href === "string" ? localizePath(locale, href) : href} {...props} />;
}

/** Switches the current page between English and Urdu. */
export function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale();
  // Normalising through splitLocale gives the same result whether the router
  // reports the public URL ("/pricing") or the internal one ("/en/pricing").
  const { path } = splitLocale(usePathname() ?? "/");
  const target = locale === "ur" ? "en" : "ur";

  return (
    <a
      className={`qa-lang-toggle ${className ?? ""}`}
      href={localizePath(target, path)}
      hrefLang={target}
      lang={target}
      aria-label={target === "ur" ? "اردو میں دیکھیں (View in Urdu)" : "View in English (انگریزی میں دیکھیں)"}
    >
      {target === "ur" ? "اردو" : "English"}
    </a>
  );
}
