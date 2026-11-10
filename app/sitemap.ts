import type { MetadataRoute } from "next";

import {
  allIndustries,
  coreFeatures,
  featureHref,
  industryHref,
} from "@/components/landing/data/catalog";
import { localizePath, locales } from "@/lib/i18n";

const BASE_URL = "https://dotcodesolutions.com";
const LAST_CONTENT_UPDATE = new Date("2026-11-10T00:00:00.000Z");

// Feature and industry routes come from the catalog, so new entries there are
// added to the sitemap automatically. Add other new pages here.
const routes = [
  "/",
  "/features",
  "/industries",
  "/pricing",
  "/implementation",
  "/company",
  "/custom-software",
  ...coreFeatures.map(({ slug }) => featureHref(slug)),
  ...allIndustries.map(({ slug }) => industryHref(slug)),
];

// Every page exists in English and Urdu; each entry lists both versions.
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [locale, `${BASE_URL}${localizePath(locale, route)}`]),
    );
    return locales.map((locale) => ({
      url: `${BASE_URL}${localizePath(locale, route)}`,
      lastModified: LAST_CONTENT_UPDATE,
      alternates: { languages },
    }));
  });
}
