import { CircleDollarSign, Database, GraduationCap, PackageCheck, Users } from "lucide-react";

import { featureHref, getCatalog } from "@/components/landing/data/catalog";
import type { CoreFeature } from "@/components/landing/data/catalog";
import type { Locale } from "@/lib/i18n";

export type FeatureItem = Pick<CoreFeature, "icon" | "title" | "description" | "graphic"> & {
  href: string;
};

type Step = { title: string; description: string };
type ProcessStep = Step & { details: string[] };
type PricingPlan = {
  name: string;
  description: string;
  price: string;
  suffix: string;
  note: string;
  cta: string;
  /** WhatsApp message to the sales team; kept in English for the team. */
  message: string;
  isDemo: boolean;
  isPopular: boolean;
  features: string[];
};
type Faq = { question: string; answer: string };

type LandingCopy = {
  valueLabels: string[];
  setupSteps: Step[];
  processSteps: ProcessStep[];
  pricingPlans: PricingPlan[];
  partnerOptions: { title: string; rate: string; description: string }[];
  faqItems: Faq[];
};

const valueIcons = [CircleDollarSign, Users, PackageCheck, Database, GraduationCap];

const en: LandingCopy = {
  valueLabels: [
    "Free and open source. Just $50/month hosting.",
    "Unlimited users online.",
    "POS, stock, ledgers and accounts in one.",
    "Data transfer included.",
    "Staff training included.",
  ],
  setupSteps: [
    {
      title: "Setup",
      description:
        "We configure Dotcode ERP around your outlets, warehouses, counters and the way you sell.",
    },
    {
      title: "Data transfer",
      description:
        "We bring over your items, customers, suppliers, opening stock and khata balances from Excel or your current software.",
    },
    {
      title: "Staff training",
      description:
        "We train your cashiers, store managers and accounts team on the parts they use every day.",
    },
    {
      title: "Optional small changes",
      description:
        "If you need a small adjustment for your trade, we agree the scope and cost with you first.",
    },
  ],
  processSteps: [
    {
      title: "Tell us how your business runs",
      description:
        "A short call about your outlets, stock, customers and how you sell, retail, wholesale or both.",
      details: [
        "Review your outlets and warehouses",
        "Understand your billing and credit sales",
        "Plan a simple setup",
      ],
    },
    {
      title: "Start for free",
      description:
        "The software is free and open source. You only pay $50/month for hosting.",
      details: [
        "See the product in a free demo",
        "No license fee, ever",
        "Hosting: $50/month with every feature included",
      ],
    },
    {
      title: "We set it up and train your staff",
      description:
        "We load your items, opening stock, customers and suppliers, then train your counter and accounts teams.",
      details: [
        "Set up outlets, counters and users",
        "Bring in stock and ledger balances",
        "Train cashiers and managers",
      ],
    },
    {
      title: "Start selling",
      description: "Bill, track stock and see your numbers from day one.",
      details: [
        "Make your first sale at the counter",
        "Record purchases and payments",
        "Get help when you need it",
      ],
    },
  ],
  pricingPlans: [
    {
      name: "Free Demo",
      description:
        "See Dotcode ERP in a free walkthrough built around your shop, outlets or warehouse.",
      price: "Free",
      suffix: "guided demo",
      note: "No obligation",
      cta: "Try the Free Demo",
      message: "Hi, I'd like to book a Dotcode ERP demo for my business.",
      isDemo: true,
      isPopular: false,
      features: [
        "POS billing and receipts",
        "Stock across outlets and warehouses",
        "Customer and supplier ledgers",
        "Full accounting and reports",
        "Multi-outlet control",
        "Talk through optional customization",
      ],
    },
    {
      name: "Hosted",
      description:
        "Free, open-source software. We host it, back it up and keep it running for you.",
      price: "$50",
      suffix: "per month",
      note: "Hosting only · no license fee",
      cta: "Get Started for $50/month",
      message: "Hi, I'd like to get started with Dotcode ERP hosting for $50/month.",
      isDemo: false,
      isPopular: true,
      features: [
        "All features included",
        "POS, accounting, outlets, stock and ledgers",
        "Unlimited users and outlets",
        "Secure cloud hosting and automatic backups",
        "Setup and training included",
        "Customizations quoted separately",
      ],
    },
  ],
  partnerOptions: [
    {
      title: "Referral Partner",
      rate: "3–5%",
      description:
        "Recommend Dotcode ERP to the shops, distributors and wholesalers you work with. We handle the demo, sale, setup and support.",
    },
    {
      title: "Certified Reseller",
      rate: "3–5%",
      description:
        "Sell Dotcode ERP directly and support retailers and wholesalers in your city or market.",
    },
  ],
  faqItems: [
    {
      question: "What does Dotcode ERP include?",
      answer:
        "POS billing, stock management, multiple outlet management, customer and supplier ledgers (khata) and full accounting, all in one system.",
    },
    {
      question: "Which businesses use it?",
      answer:
        "Retailers, wholesalers and distributors across clothing, garments, fabric, footwear, food and beverage, bakeries, grocery, FMCG, pharmacy, cosmetics, mobile phones, electronics, hardware, building materials, auto parts, furniture, stationery, agri inputs and commodity trading.",
    },
    {
      question: "Can I run several shops and a warehouse?",
      answer:
        "Yes. Each outlet and warehouse has its own stock and sales, you can transfer stock between them, and the owner sees everything together.",
    },
    {
      question: "Can I sell on credit and keep a khata?",
      answer:
        "Yes. Credit sales post to the customer's ledger automatically, and supplier purchases post to the supplier's ledger, each with a running balance and aging.",
    },
    {
      question: "Do I need to know accounting to use it?",
      answer:
        "No. Your sales, purchases and payments update the books automatically. If you can bill a customer, you can use it, and we train your staff.",
    },
    {
      question: "Can you move my data from Excel or my current software?",
      answer:
        "Yes. We bring over your items, opening stock, customers, suppliers and balances as part of setup.",
    },
    {
      question: "How many people can use it?",
      answer: "Unlimited users across all your outlets, with no per-user fees.",
    },
    {
      question: "How much does it cost?",
      answer:
        "The software is free and open source, with no license or renewal fee. You only pay $50/month for hosting, and every feature is included.",
    },
    {
      question: "Can you customise it for my trade?",
      answer: "Small changes are possible. We agree the scope and cost with you first.",
    },
  ],
};

const ur: LandingCopy = {
  valueLabels: [
    "مفت اور اوپن سورس۔ صرف $50 ماہانہ ہوسٹنگ۔",
    "لامحدود آن لائن یوزرز۔",
    "POS، اسٹاک، لیجر اور اکاؤنٹس ایک جگہ۔",
    "ڈیٹا کی منتقلی شامل۔",
    "اسٹاف ٹریننگ شامل۔",
  ],
  setupSteps: [
    {
      title: "سیٹ اپ",
      description:
        "ہم Dotcode ERP کو آپ کے آؤٹ لیٹس، گوداموں، کاؤنٹرز اور فروخت کے انداز کے مطابق ترتیب دیتے ہیں۔",
    },
    {
      title: "ڈیٹا کی منتقلی",
      description:
        "ہم آپ کے آئٹمز، کسٹمرز، سپلائرز، ابتدائی اسٹاک اور کھاتوں کے بیلنس Excel یا موجودہ سافٹ ویئر سے منتقل کرتے ہیں۔",
    },
    {
      title: "اسٹاف ٹریننگ",
      description:
        "ہم آپ کے کیشیئرز، اسٹور مینیجرز اور اکاؤنٹس ٹیم کو وہ حصے سکھاتے ہیں جو وہ روزانہ استعمال کرتے ہیں۔",
    },
    {
      title: "اختیاری چھوٹی تبدیلیاں",
      description:
        "اگر آپ کے کاروبار کے لیے کسی چھوٹی تبدیلی کی ضرورت ہو تو ہم پہلے آپ کے ساتھ دائرہ کار اور لاگت طے کرتے ہیں۔",
    },
  ],
  processSteps: [
    {
      title: "ہمیں اپنے کاروبار کے بارے میں بتائیں",
      description:
        "آپ کے آؤٹ لیٹس، اسٹاک، گاہکوں اور فروخت کے انداز (ریٹیل، ہول سیل یا دونوں) کے بارے میں ایک مختصر کال۔",
      details: [
        "آپ کے آؤٹ لیٹس اور گوداموں کا جائزہ",
        "آپ کی بلنگ اور ادھار فروخت کو سمجھنا",
        "آسان سیٹ اپ کی منصوبہ بندی",
      ],
    },
    {
      title: "مفت شروع کریں",
      description:
        "سافٹ ویئر مفت اور اوپن سورس ہے۔ آپ صرف $50 ماہانہ ہوسٹنگ ادا کرتے ہیں۔",
      details: [
        "مفت ڈیمو میں پروڈکٹ دیکھیں",
        "کبھی کوئی لائسنس فیس نہیں",
        "ہوسٹنگ: $50 ماہانہ، تمام فیچرز کے ساتھ",
      ],
    },
    {
      title: "ہم سیٹ اپ کر کے اسٹاف کو ٹریننگ دیتے ہیں",
      description:
        "ہم آپ کے آئٹمز، ابتدائی اسٹاک، کسٹمرز اور سپلائرز لوڈ کرتے ہیں، پھر کاؤنٹر اور اکاؤنٹس ٹیم کو ٹریننگ دیتے ہیں۔",
      details: [
        "آؤٹ لیٹس، کاؤنٹرز اور یوزرز کا سیٹ اپ",
        "اسٹاک اور لیجر بیلنس کی منتقلی",
        "کیشیئرز اور مینیجرز کی ٹریننگ",
      ],
    },
    {
      title: "فروخت شروع کریں",
      description: "پہلے دن سے بل بنائیں، اسٹاک دیکھیں اور اپنے اعداد و شمار جانیں۔",
      details: [
        "کاؤنٹر پر پہلی فروخت کریں",
        "خریداری اور ادائیگیاں درج کریں",
        "ضرورت پڑنے پر مدد حاصل کریں",
      ],
    },
  ],
  pricingPlans: [
    {
      name: "مفت ڈیمو",
      description:
        "اپنی دکان، آؤٹ لیٹس یا گودام کے مطابق مفت ڈیمو میں Dotcode ERP دیکھیں۔",
      price: "مفت",
      suffix: "رہنمائی کے ساتھ ڈیمو",
      note: "کوئی پابندی نہیں",
      cta: "مفت ڈیمو آزمائیں",
      message: "Hi, I'd like to book a Dotcode ERP demo for my business.",
      isDemo: true,
      isPopular: false,
      features: [
        "POS بلنگ اور رسیدیں",
        "آؤٹ لیٹس اور گوداموں میں اسٹاک",
        "کسٹمر اور سپلائر لیجر",
        "مکمل اکاؤنٹنگ اور رپورٹس",
        "متعدد آؤٹ لیٹس کا کنٹرول",
        "اختیاری کسٹمائزیشن پر بات چیت",
      ],
    },
    {
      name: "ہوسٹڈ",
      description:
        "مفت، اوپن سورس سافٹ ویئر۔ ہم اسے ہوسٹ کرتے ہیں، بیک اپ رکھتے ہیں اور چلاتے رہتے ہیں۔",
      price: "$50",
      suffix: "ماہانہ",
      note: "صرف ہوسٹنگ · کوئی لائسنس فیس نہیں",
      cta: "$50 ماہانہ میں شروع کریں",
      message: "Hi, I'd like to get started with Dotcode ERP hosting for $50/month.",
      isDemo: false,
      isPopular: true,
      features: [
        "تمام فیچرز شامل",
        "POS، اکاؤنٹنگ، آؤٹ لیٹس، اسٹاک اور لیجر",
        "لامحدود یوزرز اور آؤٹ لیٹس",
        "محفوظ کلاؤڈ ہوسٹنگ اور خودکار بیک اپ",
        "سیٹ اپ اور ٹریننگ شامل",
        "کسٹمائزیشن کی قیمت الگ سے",
      ],
    },
  ],
  partnerOptions: [
    {
      title: "ریفرل پارٹنر",
      rate: "3–5%",
      description:
        "Dotcode ERP اپنی جاننے والی دکانوں، ڈسٹری بیوٹرز اور ہول سیلرز کو تجویز کریں۔ ڈیمو، فروخت، سیٹ اپ اور سپورٹ ہم سنبھالتے ہیں۔",
    },
    {
      title: "سرٹیفائیڈ ری سیلر",
      rate: "3–5%",
      description:
        "Dotcode ERP براہِ راست فروخت کریں اور اپنے شہر یا مارکیٹ کے ریٹیلرز اور ہول سیلرز کو سپورٹ دیں۔",
    },
  ],
  faqItems: [
    {
      question: "Dotcode ERP میں کیا شامل ہے؟",
      answer:
        "POS بلنگ، اسٹاک مینجمنٹ، متعدد آؤٹ لیٹس کا انتظام، کسٹمر اور سپلائر لیجر (کھاتہ) اور مکمل اکاؤنٹنگ، سب ایک سسٹم میں۔",
    },
    {
      question: "کون سے کاروبار اسے استعمال کرتے ہیں؟",
      answer:
        "کپڑے، گارمنٹس، فیبرک، جوتے، کھانے پینے، بیکری، گروسری، FMCG، فارمیسی، کاسمیٹکس، موبائل فون، الیکٹرانکس، ہارڈ ویئر، تعمیراتی سامان، آٹو پارٹس، فرنیچر، اسٹیشنری، زرعی سامان اور اجناس کی تجارت کرنے والے ریٹیلرز، ہول سیلرز اور ڈسٹری بیوٹرز۔",
    },
    {
      question: "کیا میں کئی دکانیں اور ایک گودام چلا سکتا ہوں؟",
      answer:
        "جی ہاں۔ ہر آؤٹ لیٹ اور گودام کا اپنا اسٹاک اور فروخت ہوتی ہے، آپ ان کے درمیان اسٹاک منتقل کر سکتے ہیں، اور مالک سب کچھ ایک ساتھ دیکھتا ہے۔",
    },
    {
      question: "کیا میں ادھار پر بیچ کر کھاتہ رکھ سکتا ہوں؟",
      answer:
        "جی ہاں۔ ادھار فروخت خود بخود گاہک کے لیجر میں اور سپلائر سے خریداری سپلائر کے لیجر میں درج ہوتی ہے، ہر ایک میں جاری بیلنس اور واجبات کی مدت کے ساتھ۔",
    },
    {
      question: "کیا اسے استعمال کرنے کے لیے اکاؤنٹنگ آنی چاہیے؟",
      answer:
        "نہیں۔ آپ کی فروخت، خریداری اور ادائیگیاں کھاتے خود اپ ڈیٹ کرتی ہیں۔ اگر آپ گاہک کا بل بنا سکتے ہیں تو اسے استعمال کر سکتے ہیں، اور ہم اسٹاف کو ٹریننگ دیتے ہیں۔",
    },
    {
      question: "کیا آپ میرا ڈیٹا Excel یا موجودہ سافٹ ویئر سے منتقل کر سکتے ہیں؟",
      answer:
        "جی ہاں۔ سیٹ اپ کے دوران ہم آپ کے آئٹمز، ابتدائی اسٹاک، کسٹمرز، سپلائرز اور بیلنس منتقل کرتے ہیں۔",
    },
    {
      question: "کتنے لوگ اسے استعمال کر سکتے ہیں؟",
      answer: "آپ کے تمام آؤٹ لیٹس میں لامحدود یوزرز، کوئی فی یوزر فیس نہیں۔",
    },
    {
      question: "اس کی قیمت کتنی ہے؟",
      answer:
        "سافٹ ویئر مفت اور اوپن سورس ہے، کوئی لائسنس یا تجدید فیس نہیں۔ آپ صرف $50 ماہانہ ہوسٹنگ ادا کرتے ہیں، اور تمام فیچرز شامل ہیں۔",
    },
    {
      question: "کیا آپ اسے میرے کاروبار کے مطابق بدل سکتے ہیں؟",
      answer: "چھوٹی تبدیلیاں ممکن ہیں۔ ہم پہلے آپ کے ساتھ دائرہ کار اور لاگت طے کرتے ہیں۔",
    },
  ],
};

export function getLandingContent(locale: Locale) {
  const copy = locale === "ur" ? ur : en;
  const features: FeatureItem[] = getCatalog(locale).coreFeatures.map(
    ({ icon, title, description, graphic, slug }) => ({
      icon,
      title,
      description,
      graphic,
      href: featureHref(slug),
    }),
  );
  return {
    ...copy,
    features,
    valueItems: copy.valueLabels.map((label, index) => ({ icon: valueIcons[index], label })),
  };
}
