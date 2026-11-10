import Image from "next/image";
import Link from "next/link";

import { getDictionary } from "@/components/i18n/dictionary";
import { featureHref, getCatalog, industryHref } from "@/components/landing/data/catalog";
import { WHATSAPP_CONTACT_URL } from "@/lib/contact";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

const footerIndustrySlugs = [
  "clothing-boutiques",
  "garment-manufacturers-wholesalers",
  "footwear-leather-goods",
  "restaurants-cafes-fast-food",
  "grocery-stores-supermarkets",
  "fmcg-distributors",
  "pharmacies-medical-stores",
];

export const SiteFooter = ({ locale }: { locale: Locale }) => {
  const t = getDictionary(locale);
  const f = t.footer;
  const catalog = getCatalog(locale);
  const href = (path: string) => localizePath(locale, path);

  const productLinks: [string, string][] = [
    ["Dotcode ERP", href("/#dotcode-erp")],
    ...catalog.coreFeatures.map(({ title, slug }): [string, string] => [title, href(featureHref(slug))]),
    [t.common.pricing, href("/pricing")],
    [f.customSoftware, href("/custom-software")],
    [f.faqs, href("/#faq")],
  ];

  const industryLinks: [string, string][] = [
    ...footerIndustrySlugs.flatMap((slug): [string, string][] => {
      const item = catalog.findIndustry(slug);
      return item ? [[item.title, href(industryHref(slug))]] : [];
    }),
    [f.allIndustries, href("/industries")],
  ];

  const companyLinks: [string, string][] = [
    [t.common.ourCompany, href("/company")],
    [f.partnerProgram, href("/#partners")],
    [t.common.howItWorks, href("/#process")],
  ];

  return (
    <footer className="qa-footer">
      <div className="qa-container qa-footer-main">
        <div className="qa-footer-brand">
          <Image
            src="/assets/dotcode-logo-light.png"
            width={1711}
            height={530}
            alt="Dotcode Solutions"
          />
          <p>
            {f.byline}
            <br />
            {f.tagline}
          </p>
          <span>{f.headquarters}</span>
          <span>{f.operations}</span>
        </div>

        <nav aria-label={f.productLinks}>
          <p>{f.product}</p>
          {productLinks.map(([label, link]) => <Link href={link} key={link}>{label}</Link>)}
        </nav>
        <nav aria-label={f.companyLinks}>
          <p>{f.company}</p>
          {companyLinks.map(([label, link]) => <Link href={link} key={link}>{label}</Link>)}
          <a href={WHATSAPP_CONTACT_URL} rel="noopener noreferrer" target="_blank">{t.common.contactUs}</a>
        </nav>
        <nav aria-label={f.industries}>
          <p>{f.industries}</p>
          {industryLinks.map(([label, link]) => <Link href={link} key={link}>{label}</Link>)}
        </nav>
        <div className="qa-footer-contact">
          <p>{f.contact}</p>
          <span>{f.email}</span>
          <a href="mailto:info@dotcodesolutions.com">info@dotcodesolutions.com</a>
          <span>{f.whatsapp}</span>
          <a href={WHATSAPP_CONTACT_URL} target="_blank" rel="noopener noreferrer" dir="ltr">+92 303 555 5992</a>
          <span>{f.line1}</span>
          <span>{f.line2}</span>
        </div>
      </div>
      <div className="qa-container qa-footer-bottom">
        <p>© {new Date().getFullYear()} Dotcode Solutions. {f.rights}</p>
        <p>{f.bottomTag}</p>
      </div>
    </footer>
  );
};
