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
    metaTitle: "Free Open-Source Software, $50/Month Hosting",
    description:
      "Free, open-source business software for retail and wholesale. Pay only $50/month for hosting, with every feature, unlimited users, setup and training included.",
    eyebrow: "Pricing",
    title: "Free software. Just $50/month hosting.",
    intro:
      "Dotcode ERP is free and open source. No license fee, no per-user fees, no renewals. You only pay for hosting, and every feature is included.",
    sections: [
      {
        heading: "Software — free and open source",
        body: "No license fee, no yearly renewal and no per-user charges. Every feature is available to every business.",
        bullets: ["POS system", "Accounting", "Multiple outlets management", "Stock management", "Ledger tracking"],
      },
      {
        heading: "Hosting — $50/month",
        body: "We host Dotcode ERP for you, keep it secure and back it up, so every outlet and staff member can work in the same system.",
        bullets: ["All features included", "Unlimited users and outlets", "Secure cloud hosting", "Automatic backups"],
      },
      {
        heading: "What is always included",
        body: "Setup, data transfer of your items, stock, customers, suppliers and balances from Excel or your current software, and staff training. Small customizations are possible, and we agree the scope and cost with you first.",
      },
    ],
    faqs: [
      { question: "Is the software really free?", answer: "Yes. Dotcode ERP is free and open source. There is no license fee and no renewal fee." },
      { question: "What does the $50/month cover?", answer: "Secure cloud hosting, automatic backups and access to every feature for unlimited users and outlets." },
      { question: "Are any features locked behind a higher plan?", answer: "No. There is one plan, and every feature is included." },
      { question: "Can I see Dotcode ERP before I start?", answer: "Yes. Ask for a free demo and we will walk you through it, built around your outlets, stock and the way you sell." },
    ],
  },
  ur: {
    metaTitle: "مفت اوپن سورس سافٹ ویئر، $50 ماہانہ ہوسٹنگ",
    description:
      "ریٹیل اور ہول سیل کے لیے مفت، اوپن سورس بزنس سافٹ ویئر۔ صرف $50 ماہانہ ہوسٹنگ ادا کریں، تمام فیچرز، لامحدود یوزرز، سیٹ اپ اور ٹریننگ کے ساتھ۔",
    eyebrow: "قیمت",
    title: "مفت سافٹ ویئر۔ صرف $50 ماہانہ ہوسٹنگ۔",
    intro:
      "Dotcode ERP مفت اور اوپن سورس ہے۔ کوئی لائسنس فیس نہیں، کوئی فی یوزر فیس نہیں، کوئی تجدید نہیں۔ آپ صرف ہوسٹنگ ادا کرتے ہیں، اور تمام فیچرز شامل ہیں۔",
    sections: [
      {
        heading: "سافٹ ویئر — مفت اور اوپن سورس",
        body: "کوئی لائسنس فیس نہیں، کوئی سالانہ تجدید نہیں اور کوئی فی یوزر چارج نہیں۔ ہر فیچر ہر کاروبار کے لیے دستیاب ہے۔",
        bullets: ["POS سسٹم", "اکاؤنٹنگ", "متعدد آؤٹ لیٹس کا انتظام", "اسٹاک مینجمنٹ", "لیجر ٹریکنگ"],
      },
      {
        heading: "ہوسٹنگ — $50 ماہانہ",
        body: "ہم آپ کے لیے Dotcode ERP ہوسٹ کرتے ہیں، اسے محفوظ رکھتے ہیں اور بیک اپ لیتے ہیں، تاکہ ہر آؤٹ لیٹ اور اسٹاف ایک ہی سسٹم میں کام کر سکے۔",
        bullets: ["تمام فیچرز شامل", "لامحدود یوزرز اور آؤٹ لیٹس", "محفوظ کلاؤڈ ہوسٹنگ", "خودکار بیک اپ"],
      },
      {
        heading: "جو ہمیشہ شامل ہے",
        body: "سیٹ اپ، آپ کے آئٹمز، اسٹاک، کسٹمرز، سپلائرز اور بیلنس کی Excel یا موجودہ سافٹ ویئر سے منتقلی، اور اسٹاف ٹریننگ۔ چھوٹی کسٹمائزیشن ممکن ہے، اور ہم پہلے آپ کے ساتھ دائرہ کار اور لاگت طے کرتے ہیں۔",
      },
    ],
    faqs: [
      { question: "کیا سافٹ ویئر واقعی مفت ہے؟", answer: "جی ہاں۔ Dotcode ERP مفت اور اوپن سورس ہے۔ کوئی لائسنس فیس اور کوئی تجدید فیس نہیں۔" },
      { question: "$50 ماہانہ میں کیا شامل ہے؟", answer: "محفوظ کلاؤڈ ہوسٹنگ، خودکار بیک اپ اور لامحدود یوزرز اور آؤٹ لیٹس کے لیے تمام فیچرز تک رسائی۔" },
      { question: "کیا کوئی فیچر مہنگے پلان کے لیے بند ہے؟", answer: "نہیں۔ ایک ہی پلان ہے، اور اس میں تمام فیچرز شامل ہیں۔" },
      { question: "کیا میں شروع کرنے سے پہلے Dotcode ERP دیکھ سکتا ہوں؟", answer: "جی ہاں۔ مفت ڈیمو کے لیے کہیں، ہم آپ کے آؤٹ لیٹس، اسٹاک اور فروخت کے انداز کے مطابق دکھائیں گے۔" },
    ],
  },
};

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await readLocale(params);
  const copy = content[locale];
  const alternates = localeAlternates(locale, "/pricing");
  return {
    title: copy.metaTitle,
    description: copy.description,
    alternates,
    openGraph: { title: `${copy.metaTitle} | Dotcode ERP`, description: copy.description, url: alternates.canonical },
  };
}

export default async function PricingPage({ params }: LocaleParams) {
  const locale = await readLocale(params);
  const { eyebrow, title, intro, description, sections, faqs } = content[locale];
  return <SeoLandingPage locale={locale} path="/pricing" eyebrow={eyebrow} title={title} intro={intro} description={description} sections={sections} faqs={faqs} />;
}
