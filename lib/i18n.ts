export const locales = ["en", "ur"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export type LocaleParams = { params: Promise<{ locale: string }> };

/** Reads the locale route param (the layout has already rejected unknown values). */
export async function readLocale(params: LocaleParams["params"]): Promise<Locale> {
  const { locale } = await params;
  return isLocale(locale) ? locale : defaultLocale;
}

export const localeDir =(locale: Locale) => (locale === "ur" ? "rtl" : "ltr");

/**
 * English lives at the site root ("/pricing"); Urdu under "/ur" ("/ur/pricing").
 * External links, mailto/tel links and bare hashes are returned unchanged.
 */
export function localizePath(locale: Locale, path: string) {
  if (locale === defaultLocale || !path.startsWith("/") || path.startsWith("//")) return path;
  if (path === "/") return "/ur";
  if (path.startsWith("/#") || path.startsWith("/?")) return `/ur${path.slice(1)}`;
  return `/ur${path}`;
}

/** Splits a pathname into its locale and the locale-free path. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return { locale, path: "/" };
    if (pathname.startsWith(`/${locale}/`)) return { locale, path: pathname.slice(locale.length + 1) };
  }
  return { locale: defaultLocale, path: pathname };
}

/** Canonical URL plus hreflang alternates for a page, for `metadata.alternates`. */
export function localeAlternates(locale: Locale, path: string) {
  return {
    canonical: localizePath(locale, path),
    languages: {
      en: path,
      ur: localizePath("ur", path),
      "x-default": path,
    },
  };
}
