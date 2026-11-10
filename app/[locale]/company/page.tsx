import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Check, Code2, Download, FileText, MapPin } from "lucide-react";

import { getDictionary } from "@/components/i18n/dictionary";
import { MarketingHeader } from "@/components/landing/sections/marketing-header";
import { SiteFooter } from "@/components/landing/sections/site-footer";
import { JsonLd } from "@/components/seo/json-ld";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { localeAlternates, localizePath, readLocale } from "@/lib/i18n";
import type { Locale, LocaleParams } from "@/lib/i18n";
import { pageSchema } from "@/lib/seo";

const LORDEVS_FORMATION_PATH = "/assets/lordevs-llc-formation-document.pdf";
const DOTCODE_INCORPORATION_PATH = "/assets/dotcode-smc-private-limited-incorporation-certificate.pdf";

type Branch = { tag: string; title: string; location: string; body: string; points: string[] };

const content: Record<Locale, {
  metaTitle: string;
  description: string;
  ogDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  talk: string;
  documentsLink: string;
  proof: string[];
  whoEyebrow: string;
  whoTitle: string;
  whoBody: string[];
  featuresLink: string;
  setupLink: string;
  facts: [string, string][];
  branchesEyebrow: string;
  branchesTitle: string;
  branches: [Branch, Branch];
  docsEyebrow: string;
  docsTitle: string;
  docsBody: string;
  docsMeta: string;
  documents: [{ title: string; meta: string }, { title: string; meta: string }];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
}> = {
  en: {
    metaTitle: "Our Company",
    description:
      "Dotcode builds Dotcode ERP, complete business software for retailers, wholesalers and distributors. It is operated by Lordevs LLC (New Mexico) with product, setup and support delivered from Lahore.",
    ogDescription:
      "Learn about Dotcode's parent company Lordevs LLC in New Mexico and the Dotcode Pakistan Branch in Lahore.",
    eyebrow: "Our company",
    title: "The company behind Dotcode",
    intro:
      "Dotcode builds Dotcode ERP, complete business software for retailers, wholesalers and distributors. The company operates through two branches: Lordevs LLC in New Mexico and the Dotcode Pakistan Branch in Lahore, registered as Dotcode (SMC-Private) Limited.",
    talk: "Talk to our team",
    documentsLink: "Company documents",
    proof: ["Parent company: Lordevs LLC", "US branch: New Mexico", "Product and delivery: Lahore, Pakistan"],
    whoEyebrow: "Who we are",
    whoTitle: "One system for retail and wholesale businesses",
    whoBody: [
      "Dotcode builds Dotcode ERP for shops, outlets, wholesalers and distributors who want POS, stock, ledgers and accounts in one system instead of registers and spreadsheets. Our team sets you up, moves your records over, trains your staff and stays with you for support.",
      "Setup, data transfer and training are included, and a free demo is the best place to see how Dotcode ERP fits your business.",
    ],
    featuresLink: "Explore features",
    setupLink: "Setup and training",
    facts: [
      ["Parent company", "Lordevs LLC"],
      ["US branch", "New Mexico, USA"],
      ["Pakistan entity", "Dotcode (SMC-Private) Limited, Lahore"],
      ["Focus", "Business software for retail and wholesale"],
    ],
    branchesEyebrow: "Our branches",
    branchesTitle: "Two branches, one operating team",
    branches: [
      {
        tag: "Parent company",
        title: "Lordevs LLC",
        location: "New Mexico, USA",
        body: "Lordevs LLC is the parent company of Dotcode. Our New Mexico branch represents the company's United States presence and the corporate side of the business, supporting customers and partners who work with Dotcode internationally.",
        points: ["Parent company of the Dotcode brand", "United States branch based in New Mexico", "Corporate and commercial relationships"],
      },
      {
        tag: "Product and delivery",
        title: "Dotcode Pakistan Branch",
        location: "Lahore, Pakistan",
        body: "The Dotcode Pakistan Branch is where the platform is built and delivered. Registered in Pakistan as Dotcode (SMC-Private) Limited, the Lahore team works across product engineering, setup, data transfer, team training and ongoing customer support.",
        points: ["Product engineering and development", "Setup, data transfer and training", "Day-to-day customer support"],
      },
    ],
    docsEyebrow: "Corporate information",
    docsTitle: "Company registration documents",
    docsBody:
      "Download the incorporation documents for Lordevs LLC, the parent company behind Dotcode, and Dotcode (SMC-Private) Limited, the company's Pakistan entity. Both are provided as PDFs for customers, partners and procurement teams who need to verify corporate registration.",
    docsMeta: "PDF · Public corporate records",
    documents: [
      { title: "Lordevs LLC formation document", meta: "New Mexico Articles of Organization · Filed November 2025" },
      { title: "Dotcode (SMC-Private) Limited certificate", meta: "SECP certificate of incorporation · January 2026" },
    ],
    ctaEyebrow: "Work with us",
    ctaTitle: "Talk to the team behind Dotcode",
    ctaBody: "See how Dotcode ERP handles your POS, stock, ledgers and reports in a free demo, or reach out to either branch.",
    ctaButton: "Book a free demo",
  },
  ur: {
    metaTitle: "ہماری کمپنی",
    description:
      "Dotcode، ریٹیلرز، ہول سیلرز اور ڈسٹری بیوٹرز کے لیے مکمل بزنس سافٹ ویئر Dotcode ERP بناتا ہے۔ اسے Lordevs LLC (نیو میکسیکو) چلاتی ہے، جبکہ پروڈکٹ، سیٹ اپ اور سپورٹ لاہور سے فراہم کی جاتی ہے۔",
    ogDescription:
      "Dotcode کی پیرنٹ کمپنی Lordevs LLC (نیو میکسیکو) اور لاہور میں Dotcode پاکستان برانچ کے بارے میں جانیں۔",
    eyebrow: "ہماری کمپنی",
    title: "Dotcode کے پیچھے کی کمپنی",
    intro:
      "Dotcode، ریٹیلرز، ہول سیلرز اور ڈسٹری بیوٹرز کے لیے مکمل بزنس سافٹ ویئر Dotcode ERP بناتا ہے۔ کمپنی دو برانچوں کے ذریعے کام کرتی ہے: نیو میکسیکو میں Lordevs LLC اور لاہور میں Dotcode پاکستان برانچ، جو Dotcode (SMC-Private) Limited کے نام سے رجسٹرڈ ہے۔",
    talk: "ہماری ٹیم سے بات کریں",
    documentsLink: "کمپنی کے دستاویزات",
    proof: ["پیرنٹ کمپنی: Lordevs LLC", "امریکی برانچ: نیو میکسیکو", "پروڈکٹ اور سروس: لاہور، پاکستان"],
    whoEyebrow: "ہم کون ہیں",
    whoTitle: "ریٹیل اور ہول سیل کاروبار کے لیے ایک سسٹم",
    whoBody: [
      "Dotcode، Dotcode ERP اُن دکانوں، آؤٹ لیٹس، ہول سیلرز اور ڈسٹری بیوٹرز کے لیے بناتا ہے جو رجسٹروں اور اسپریڈ شیٹس کی بجائے POS، اسٹاک، کھاتے اور اکاؤنٹس ایک سسٹم میں چاہتے ہیں۔ ہماری ٹیم سیٹ اپ کرتی ہے، آپ کا ریکارڈ منتقل کرتی ہے، اسٹاف کو ٹریننگ دیتی ہے اور سپورٹ کے لیے ساتھ رہتی ہے۔",
      "سیٹ اپ، ڈیٹا کی منتقلی اور ٹریننگ شامل ہیں، اور مفت ڈیمو یہ دیکھنے کا بہترین طریقہ ہے کہ Dotcode ERP آپ کے کاروبار کے لیے کیسا ہے۔",
    ],
    featuresLink: "فیچرز دیکھیں",
    setupLink: "سیٹ اپ اور ٹریننگ",
    facts: [
      ["پیرنٹ کمپنی", "Lordevs LLC"],
      ["امریکی برانچ", "نیو میکسیکو، امریکہ"],
      ["پاکستانی ادارہ", "Dotcode (SMC-Private) Limited، لاہور"],
      ["توجہ", "ریٹیل اور ہول سیل کے لیے بزنس سافٹ ویئر"],
    ],
    branchesEyebrow: "ہماری برانچیں",
    branchesTitle: "دو برانچیں، ایک ٹیم",
    branches: [
      {
        tag: "پیرنٹ کمپنی",
        title: "Lordevs LLC",
        location: "نیو میکسیکو، امریکہ",
        body: "Lordevs LLC، Dotcode کی پیرنٹ کمپنی ہے۔ ہماری نیو میکسیکو برانچ امریکہ میں کمپنی کی موجودگی اور کاروبار کے کارپوریٹ پہلو کی نمائندگی کرتی ہے، اور بین الاقوامی سطح پر Dotcode کے ساتھ کام کرنے والے گاہکوں اور پارٹنرز کی معاونت کرتی ہے۔",
        points: ["Dotcode برانڈ کی پیرنٹ کمپنی", "نیو میکسیکو میں امریکی برانچ", "کارپوریٹ اور تجارتی تعلقات"],
      },
      {
        tag: "پروڈکٹ اور سروس",
        title: "Dotcode پاکستان برانچ",
        location: "لاہور، پاکستان",
        body: "Dotcode پاکستان برانچ وہ جگہ ہے جہاں پلیٹ فارم بنایا اور فراہم کیا جاتا ہے۔ پاکستان میں Dotcode (SMC-Private) Limited کے نام سے رجسٹرڈ، لاہور کی ٹیم پروڈکٹ انجینئرنگ، سیٹ اپ، ڈیٹا کی منتقلی، ٹیم ٹریننگ اور مسلسل کسٹمر سپورٹ پر کام کرتی ہے۔",
        points: ["پروڈکٹ انجینئرنگ اور ڈیولپمنٹ", "سیٹ اپ، ڈیٹا کی منتقلی اور ٹریننگ", "روزمرہ کسٹمر سپورٹ"],
      },
    ],
    docsEyebrow: "کارپوریٹ معلومات",
    docsTitle: "کمپنی کی رجسٹریشن کے دستاویزات",
    docsBody:
      "Dotcode کی پیرنٹ کمپنی Lordevs LLC اور کمپنی کے پاکستانی ادارے Dotcode (SMC-Private) Limited کے رجسٹریشن دستاویزات ڈاؤن لوڈ کریں۔ دونوں PDF میں دستیاب ہیں، اُن گاہکوں، پارٹنرز اور پروکیورمنٹ ٹیموں کے لیے جنہیں کارپوریٹ رجسٹریشن کی تصدیق کرنی ہو۔",
    docsMeta: "PDF · عوامی کارپوریٹ ریکارڈ",
    documents: [
      { title: "Lordevs LLC کا قیام نامہ", meta: "نیو میکسیکو آرٹیکلز آف آرگنائزیشن · نومبر 2025 میں جمع" },
      { title: "Dotcode (SMC-Private) Limited کا سرٹیفکیٹ", meta: "SECP سرٹیفکیٹ آف انکارپوریشن · جنوری 2026" },
    ],
    ctaEyebrow: "ہمارے ساتھ کام کریں",
    ctaTitle: "Dotcode کی ٹیم سے بات کریں",
    ctaBody: "مفت ڈیمو میں دیکھیں کہ Dotcode ERP آپ کا POS، اسٹاک، کھاتے اور رپورٹس کیسے سنبھالتا ہے، یا کسی بھی برانچ سے رابطہ کریں۔",
    ctaButton: "مفت ڈیمو بک کریں",
  },
};

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await readLocale(params);
  const copy = content[locale];
  const alternates = localeAlternates(locale, "/company");
  return {
    title: copy.metaTitle,
    description: copy.description,
    alternates,
    openGraph: { title: `${copy.metaTitle} | Dotcode Solutions`, description: copy.ogDescription, url: alternates.canonical },
  };
}

export default async function CompanyPage({ params }: LocaleParams) {
  const locale = await readLocale(params);
  const c = content[locale];
  const { common } = getDictionary(locale);
  const href = (path: string) => localizePath(locale, path);
  const branchIcons = [Building2, Code2];
  const documentPaths = [LORDEVS_FORMATION_PATH, DOTCODE_INCORPORATION_PATH];

  return (
    <main className="qa-site seo-page company-page" id="top">
      <JsonLd data={pageSchema({ locale, path: "/company", name: c.metaTitle, description: c.description, type: "AboutPage" })} />
      <MarketingHeader locale={locale} />
      <article>
        <section className="seo-hero">
          <div className="qa-container">
            <nav className="seo-breadcrumbs" aria-label={common.breadcrumb}>
              <Link href={href("/")}>{common.home}</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{c.metaTitle}</span>
            </nav>
            <p className="qa-eyebrow">{c.eyebrow}</p>
            <h1>{c.title}</h1>
            <p className="seo-intro">{c.intro}</p>
            <div className="seo-actions">
              <WhatsAppButton size="lg" label={c.talk} />
              <a href="#certificate">{c.documentsLink}</a>
            </div>
            <ul className="seo-proof">
              {c.proof.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
        </section>

        <div className="qa-container company-content">
          <section className="company-overview" aria-labelledby="company-overview-heading">
            <div>
              <p className="qa-eyebrow">{c.whoEyebrow}</p>
              <h2 id="company-overview-heading">{c.whoTitle}</h2>
              {c.whoBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="company-links">
                <Link href={href("/features")}>{c.featuresLink} <ArrowRight aria-hidden="true" /></Link>
                <Link href={href("/implementation")}>{c.setupLink} <ArrowRight aria-hidden="true" /></Link>
              </div>
            </div>
            <dl className="company-facts">
              {c.facts.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}
            </dl>
          </section>

          <section className="company-branches" aria-labelledby="branches-heading">
            <div className="company-section-heading">
              <p className="qa-eyebrow">{c.branchesEyebrow}</p>
              <h2 id="branches-heading">{c.branchesTitle}</h2>
            </div>
            <div className="company-branch-grid">
              {c.branches.map((branch, index) => {
                const Icon = branchIcons[index];
                return (
                  <article className="company-branch" key={branch.title}>
                    <span className="company-branch-tag">{branch.tag}</span>
                    <div className="company-branch-icon"><Icon aria-hidden="true" /></div>
                    <h3>{branch.title}</h3>
                    <p className="company-branch-location"><MapPin aria-hidden="true" />{branch.location}</p>
                    <p>{branch.body}</p>
                    <ul>{branch.points.map((point) => <li key={point}>{point}</li>)}</ul>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="company-certificate" id="certificate" aria-labelledby="certificate-heading">
            <div>
              <p className="qa-eyebrow">{c.docsEyebrow}</p>
              <h2 id="certificate-heading">{c.docsTitle}</h2>
              <p>{c.docsBody}</p>
              <p className="company-certificate-meta">{c.docsMeta}</p>
            </div>
            <div className="company-documents">
              {c.documents.map((document, index) => (
                <a className="company-document" href={documentPaths[index]} download key={documentPaths[index]}>
                  <span className="company-document-icon"><FileText aria-hidden="true" /></span>
                  <span className="company-document-copy">
                    <strong>{document.title}</strong>
                    <small>{document.meta}</small>
                  </span>
                  <Download aria-hidden="true" />
                </a>
              ))}
            </div>
          </section>

          <section className="company-cta" aria-labelledby="company-cta-heading">
            <div>
              <p className="qa-eyebrow">{c.ctaEyebrow}</p>
              <h2 id="company-cta-heading">{c.ctaTitle}</h2>
              <p>{c.ctaBody}</p>
            </div>
            <div className="company-cta-actions">
              <WhatsAppButton size="lg" theme="orange" label={c.ctaButton} />
              <a href="mailto:info@dotcodesolutions.com">info@dotcodesolutions.com</a>
            </div>
          </section>
        </div>
      </article>
      <SiteFooter locale={locale} />
    </main>
  );
}
