export const SITE_URL = "https://dotcodesolutions.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const SOFTWARE_ID = `${SITE_URL}/#quickaccounts`;

export const siteEntityGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Dotcode Solutions",
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
        telephone: "+923071257828",
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
      alternateName: "dotcodesolutions.com",
      publisher: { "@id": ORGANIZATION_ID },
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      "@id": SOFTWARE_ID,
      name: "QuickAccounts by Dotcode Solutions",
      alternateName: "QuickAccounts",
      url: `${SITE_URL}/`,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Wholesale inventory, warranty and RMA software",
      operatingSystem: "Web",
      description:
        "Wholesale inventory, serial-number, warranty, RMA and accounting software for distributors and stock-led businesses.",
      publisher: { "@id": ORGANIZATION_ID },
      featureList: [
        "Wholesale inventory management",
        "Serial-number tracking",
        "Warranty and RMA management",
        "Multi-warehouse stock transfers",
        "Customer and supplier accounts",
        "Cash records and ledgers",
      ],
      offers: [
        {
          "@type": "Offer",
          name: "Offline single-user lifetime license",
          price: "1200",
          priceCurrency: "USD",
          category: "Lifetime software license",
          description:
            "One-time offline license for one user with local data storage; standard setup, supported migration and team training included.",
        },
        {
          "@type": "Offer",
          name: "Online unlimited-user lifetime license",
          price: "850",
          priceCurrency: "USD",
          category: "Lifetime software license",
          description:
            "One-time online license for unlimited users; mandatory hosting is billed separately at USD 40 per month; standard setup, supported migration and team training included.",
        },
      ],
    },
  ],
};

export function pageSchema({
  path,
  name,
  description,
  type = "WebPage",
  datePublished,
  dateModified,
}: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "CollectionPage" | "BlogPosting";
  datePublished?: string;
  dateModified?: string;
}) {
  const url = `${SITE_URL}${path}`;
  const section = path.split("/").filter(Boolean)[0];
  const sectionNames: Record<string, string> = {
    features: "Features",
    industries: "Industries",
    guides: "Guides",
    regions: "Regions",
    solutions: "Solutions",
  };
  const itemListElement: Record<string, unknown>[] = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
  ];

  if (section && sectionNames[section]) {
    itemListElement.push({
      "@type": "ListItem",
      position: 2,
      name: sectionNames[section],
      item: `${SITE_URL}/${section}`,
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
        inLanguage: "en",
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
