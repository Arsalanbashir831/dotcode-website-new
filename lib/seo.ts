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
      name: "QuickAccounts by Dotcode Solutions",
      alternateName: "QuickAccounts",
      url: `${SITE_URL}/`,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Accounting software for consulting and service firms",
      operatingSystem: "Web",
      description:
        "Easy accounting software for consulting firms, law firms, tech companies, agencies and other service businesses: client invoicing, retainers, expenses, project profitability and reports.",
      publisher: { "@id": ORGANIZATION_ID },
      featureList: [
        "Client invoicing",
        "Hourly, fixed-fee, milestone and retainer billing",
        "Recurring invoices",
        "Client balances and aging",
        "Expense tracking",
        "Project and client profitability",
        "Cash and bank accounts",
        "Profit and loss, balance sheet and cash flow reports",
      ],
      offers: [
        {
          "@type": "Offer",
          name: "Offline single-user license",
          price: "1200",
          priceCurrency: "USD",
          category: "One-time software license",
          description:
            "One-time offline license for one user with data on your own computer; setup, data transfer and training included.",
        },
        {
          "@type": "Offer",
          name: "Online unlimited-user license",
          price: "850",
          priceCurrency: "USD",
          category: "One-time software license",
          description:
            "One-time online license for unlimited users; hosting is billed separately at USD 40 per month; setup, data transfer and training included.",
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
  type?: "WebPage" | "CollectionPage" | "BlogPosting" | "AboutPage";
  datePublished?: string;
  dateModified?: string;
}) {
  const url = `${SITE_URL}${path}`;
  const section = path.split("/").filter(Boolean)[0];
  const sectionNames: Record<string, string> = {
    features: "Features",
    "who-its-for": "Who it's for",
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
