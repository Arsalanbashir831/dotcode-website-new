import type { Metadata } from "next";

import { SeoLandingPage } from "@/components/seo/seo-landing-page";
import type { SeoLandingPageProps } from "@/components/seo/seo-landing-page";
import { localeAlternates, readLocale } from "@/lib/i18n";
import type { Locale, LocaleParams } from "@/lib/i18n";

type PageCopy = Pick<SeoLandingPageProps, "eyebrow" | "title" | "intro" | "sections" | "faqs"> & {
  metaTitle: string;
  description: string;
};

const content: Record<Locale, PageCopy> = {
  en: {
    metaTitle: "Setup, Data Transfer and Training",
    description:
      "We set up Dotcode ERP for your shops and warehouses, bring over your items, stock and khata balances, and train your staff, so you are running in days, not months.",
    eyebrow: "Getting started",
    title: "Up and running in days, not months",
    intro:
      "We set up Dotcode ERP for you, bring over your items, stock and balances and train your staff, so you can start selling quickly.",
    sections: [
      { heading: "Tell us how your business runs", body: "A short call about your outlets, warehouses, counters and how you sell, retail, wholesale or both. We use it to set up Dotcode ERP around the way you work." },
      { heading: "We bring over your records", body: "We bring in your items, opening stock, customers, suppliers and khata balances from Excel or your current software." },
      { heading: "We train your team", body: "We train your cashiers, store managers and accounts team on the parts of Dotcode ERP they will use every day. Setup, data transfer and training are included with hosting." },
    ],
    faqs: [
      { question: "How long does setup take?", answer: "Most businesses are up and running in days. We confirm the plan after a short call about your outlets and stock." },
      { question: "Can you move my data from Excel or my current software?", answer: "Yes. We bring over your items, stock, customers, suppliers and opening balances as part of setup." },
    ],
  },
  ur: {
    metaTitle: "سیٹ اپ، ڈیٹا کی منتقلی اور ٹریننگ",
    description:
      "ہم آپ کی دکانوں اور گوداموں کے لیے Dotcode ERP سیٹ اپ کرتے ہیں، آپ کے آئٹمز، اسٹاک اور کھاتوں کے بیلنس منتقل کرتے ہیں اور اسٹاف کو ٹریننگ دیتے ہیں، تاکہ آپ مہینوں نہیں، دنوں میں کام شروع کر دیں۔",
    eyebrow: "آغاز",
    title: "مہینوں نہیں، دنوں میں کام شروع",
    intro:
      "ہم آپ کے لیے Dotcode ERP سیٹ اپ کرتے ہیں، آپ کے آئٹمز، اسٹاک اور بیلنس منتقل کرتے ہیں اور اسٹاف کو ٹریننگ دیتے ہیں، تاکہ آپ جلد فروخت شروع کر سکیں۔",
    sections: [
      { heading: "ہمیں اپنے کاروبار کے بارے میں بتائیں", body: "آپ کے آؤٹ لیٹس، گوداموں، کاؤنٹرز اور فروخت کے انداز (ریٹیل، ہول سیل یا دونوں) کے بارے میں ایک مختصر کال۔ اسی کی بنیاد پر ہم Dotcode ERP کو آپ کے کام کے مطابق ترتیب دیتے ہیں۔" },
      { heading: "ہم آپ کا ریکارڈ منتقل کرتے ہیں", body: "ہم آپ کے آئٹمز، ابتدائی اسٹاک، کسٹمرز، سپلائرز اور کھاتوں کے بیلنس Excel یا موجودہ سافٹ ویئر سے لاتے ہیں۔" },
      { heading: "ہم آپ کی ٹیم کو ٹریننگ دیتے ہیں", body: "ہم آپ کے کیشیئرز، اسٹور مینیجرز اور اکاؤنٹس ٹیم کو Dotcode ERP کے وہ حصے سکھاتے ہیں جو وہ روزانہ استعمال کریں گے۔ سیٹ اپ، ڈیٹا کی منتقلی اور ٹریننگ ہوسٹنگ کے ساتھ شامل ہیں۔" },
    ],
    faqs: [
      { question: "سیٹ اپ میں کتنا وقت لگتا ہے؟", answer: "زیادہ تر کاروبار چند دنوں میں کام شروع کر دیتے ہیں۔ آپ کے آؤٹ لیٹس اور اسٹاک کے بارے میں مختصر کال کے بعد ہم منصوبہ طے کرتے ہیں۔" },
      { question: "کیا آپ میرا ڈیٹا Excel یا موجودہ سافٹ ویئر سے منتقل کر سکتے ہیں؟", answer: "جی ہاں۔ سیٹ اپ کے دوران ہم آپ کے آئٹمز، اسٹاک، کسٹمرز، سپلائرز اور ابتدائی بیلنس منتقل کرتے ہیں۔" },
    ],
  },
};

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await readLocale(params);
  const copy = content[locale];
  return {
    title: copy.metaTitle,
    description: copy.description,
    alternates: localeAlternates(locale, "/implementation"),
  };
}

export default async function ImplementationPage({ params }: LocaleParams) {
  const locale = await readLocale(params);
  const { eyebrow, title, intro, description, sections, faqs } = content[locale];
  return <SeoLandingPage locale={locale} path="/implementation" eyebrow={eyebrow} title={title} intro={intro} description={description} sections={sections} faqs={faqs} />;
}
