import { getDictionary } from "@/components/i18n/dictionary";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

export const SITE_URL = "https://dotcodesolutions.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const SOFTWARE_ID = `${SITE_URL}/#dotcode-erp`;

export const siteEntityGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Dotcode Solutions",
      legalName: "Dotcode Solutions",
      alternateName: "Dotcode",
      parentOrganization: {
        "@type": "Organization",
        name: "Lordevs LLC",
        address: {
          "@type": "PostalAddress",
          addressRegion: "New Mexico",
          addressCountry: "US",
        },
      },
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/dotcode-logo.png`,
      },
      email: "info@dotcodesolutions.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressCountry: "PK",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+923035555992",
        contactType: "sales",
        availableLanguage: "English",
      },
      sameAs: [
        "https://pk.linkedin.com/company/dotcode-solutions",
        "https://www.fiverr.com/sellers/dot_code",
        "https://www.upwork.com/freelancers/~01be48d2e9b5d45443",
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: "Dotcode Solutions",
      alternateName: ["Dotcode", "dotcodesolutions.com"],
      publisher: { "@id": ORGANIZATION_ID },
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      "@id": SOFTWARE_ID,
      name: "Dotcode ERP by Dotcode Solutions",
      alternateName: "Dotcode ERP",
      url: `${SITE_URL}/`,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Retail and wholesale business software: POS, inventory and accounting",
      operatingSystem: "Web",
      description:
        "Complete business software for retailers, wholesalers and distributors: POS system, accounting, multiple outlets management, stock management and customer and supplier ledger tracking.",
      publisher: { "@id": ORGANIZATION_ID },
      featureList: [
        "POS system",
        "Accounting",
        "Multiple outlets management",
        "Stock management",
        "Customer and supplier ledger tracking",
        "Profit and loss, balance sheet and trial balance reports",
      ],
      isAccessibleForFree: true,
      offers: [
        {
          "@type": "Offer",
          name: "Open-source software",
          price: "0",
          priceCurrency: "USD",
          description: "Dotcode ERP software is free and open source, with every feature included.",
        },
        {
          "@type": "Offer",
          name: "Managed hosting",
          price: "50",
          priceCurrency: "USD",
          category: "Monthly hosting",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "50",
            priceCurrency: "USD",
            unitCode: "MON",
          },
          description:
            "Secure cloud hosting with automatic backups, all features and unlimited users; setup, data transfer and training included.",
        },
      ],
    },
  ],
};

export function pageSchema({
  locale = "en",
  path,
  name,
  description,
  type = "WebPage",
  datePublished,
  dateModified,
}: {
  locale?: Locale;
  /** Locale-free path, e.g. "/pricing". */
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "CollectionPage" | "BlogPosting" | "AboutPage";
  datePublished?: string;
  dateModified?: string;
}) {
  const localUrl = (target: string) => `${SITE_URL}${localizePath(locale, target)}`;
  const url = localUrl(path);
  const section = path.split("/").filter(Boolean)[0];
  const { common } = getDictionary(locale);
  const sectionNames: Record<string, string> = {
    features: common.features,
    industries: common.industries,
  };
  const itemListElement: Record<string, unknown>[] = [
    {
      "@type": "ListItem",
      position: 1,
      name: common.home,
      item: localUrl("/"),
    },
  ];

  if (section && sectionNames[section]) {
    itemListElement.push({
      "@type": "ListItem",
      position: 2,
      name: sectionNames[section],
      item: localUrl(`/${section}`),
    });
  }

  itemListElement.push({
    "@type": "ListItem",
    position: itemListElement.length + 1,
    name,
    item: url,
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": SOFTWARE_ID },
        publisher: { "@id": ORGANIZATION_ID },
        inLanguage: locale,
        ...(datePublished ? { datePublished } : {}),
        ...(dateModified ? { dateModified } : {}),
        ...(type === "BlogPosting"
          ? { author: { "@type": "Organization", "@id": ORGANIZATION_ID, name: "Dotcode Solutions Product Team" } }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement,
      },
    ],
  };
}
