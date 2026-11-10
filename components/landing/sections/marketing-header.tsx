import { fill, getDictionary } from "@/components/i18n/dictionary";
import { featureHref, getCatalog, industryHref } from "@/components/landing/data/catalog";
import { MarketingHeaderClient } from "@/components/landing/sections/marketing-header-client";
import type { HeaderMenu } from "@/components/landing/sections/marketing-header-client";
import type { Locale } from "@/lib/i18n";

const menuIndustrySlugs = [
  "clothing-boutiques",
  "garment-manufacturers-wholesalers",
  "fabric-textile-shops",
  "footwear-leather-goods",
  "restaurants-cafes-fast-food",
  "bakeries-sweet-shops",
  "grocery-stores-supermarkets",
  "fmcg-distributors",
  "pharmacies-medical-stores",
  "mobile-phones-accessories",
  "hardware-paint-sanitary",
  "auto-parts",
];

/** Builds the translated menus on the server so catalog copy stays out of the client bundle. */
export function MarketingHeader({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const catalog = getCatalog(locale);

  const menus: HeaderMenu[] = [
    {
      id: "features",
      label: t.common.features,
      eyebrow: t.header.featuresEyebrow,
      title: t.header.featuresTitle,
      linkHref: "/features",
      linkLabel: t.header.featuresLink,
      wide: false,
      items: catalog.coreFeatures.map(({ title, slug, tagline }) => ({
        title,
        href: featureHref(slug),
        description: tagline,
      })),
    },
    {
      id: "industries",
      label: t.common.industries,
      eyebrow: t.header.industriesEyebrow,
      title: t.header.industriesTitle,
      linkHref: "/industries",
      linkLabel: fill(t.header.industriesLink, { count: catalog.allIndustries.length }),
      wide: true,
      items: menuIndustrySlugs.flatMap((slug) => {
        const item = catalog.findIndustry(slug);
        return item ? [{ title: item.title, href: industryHref(slug), description: item.summary }] : [];
      }),
    },
  ];

  return <MarketingHeaderClient menus={menus} />;
}
