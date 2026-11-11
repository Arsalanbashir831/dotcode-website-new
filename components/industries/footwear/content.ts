import type { Locale } from "@/lib/i18n";

export type FootwearAd = { src: string; width: number; height: number; alt: string; format: string; caption: string };

export type DashboardCopy = {
  eyebrow: string;
  title: string;
  body: string;
  frameLabel: string;
  appTitle: string;
  filter: string;
  nav: string[];
  kpis: { label: string; value: string; delta: string; up: boolean }[];
  sales: { title: string; total: string; days: string[]; outlets: [string, string] };
  stock: { title: string; donutLabel: string; categories: [string, number][]; alerts: { article: string; detail: string; qty: string; status: string }[] };
  purchases: { title: string; rows: { supplier: string; po: string; amount: string; status: string; tone: "ok" | "wait" | "part" }[]; payableLabel: string; payable: string };
  accounts: { title: string; rows: [string, string][]; profitLabel: string; profit: string; balances: [string, string][] };
  modules: { title: string; body: string; slug: string }[];
};

export type FootwearCopy = {
  heroBadge: string;
  whatsapp: string;
  heroVisualLabel: string;
  sneakerAlt: string;
  heroCard: { article: string; inStock: string; outlets: [string, string][] };
  heroChips: { label: string; value: string }[];
  marquee: string[];
  marqueeLabel: string;
  sizeEyebrow: string;
  sizeLegend: { available: string; low: string; out: string };
  sizeTotal: string;
  sizeColours: string[];
  dashboard: DashboardCopy;
  featureEyebrow: string;
  featureTitle: string;
  featureVisuals: { exchange: [string, string, string]; transfer: [string, string, string] };
  adsEyebrow: string;
  adsTitle: string;
  adsBody: string;
  ads: FootwearAd[];
  stats: { value: string; label: string }[];
  stepsEyebrow: string;
  stepsTitle: string;
  steps: { title: string; body: string }[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
  faqEyebrow: string;
  faqTitle: string;
  relatedTitle: string;
  whatsappMessage: string;
};

const adFiles = {
  stock: { src: "/assets/industries/footwear/ad-size-in-stock.svg", width: 1200, height: 628 },
  exchange: { src: "/assets/industries/footwear/ad-exchange.svg", width: 1080, height: 1080 },
  outlets: { src: "/assets/industries/footwear/ad-every-outlet.svg", width: 1200, height: 628 },
};

export const footwearContent: Record<Locale, FootwearCopy> = {
  en: {
    heroBadge: "Built for shoe stores and leather brands",
    whatsapp: "Book a free demo",
    heroVisualLabel: "Dotcode ERP showing stock for one shoe article across sizes and outlets",
    sneakerAlt: "Pair of green, white and mustard leather sneakers",
    heroCard: {
      article: "Article A-2041 · Runner",
      inStock: "In stock",
      outlets: [["Gulberg", "3 pairs"], ["DHA Phase 6", "2 pairs"], ["Warehouse", "14 pairs"]],
    },
    heroChips: [
      { label: "Size 42 · Black", value: "Found at 3 branches" },
      { label: "Exchange", value: "41 → 42, nothing due" },
      { label: "Transfer", value: "Warehouse → DHA · 24 pairs" },
    ],
    marquee: ["Sneakers", "Formal shoes", "Sandals & chappals", "Kids' footwear", "Khussas", "Handbags", "Wallets", "Belts", "Leather jackets", "Travel bags"],
    marqueeLabel: "Products Dotcode ERP handles",
    sizeEyebrow: "Size and colour matrix",
    sizeLegend: { available: "In stock", low: "Running low", out: "Sold out" },
    sizeTotal: "pairs in this article",
    sizeColours: ["Black", "White", "Tan"],
    dashboard: {
      eyebrow: "One dashboard",
      title: "Stock, sales, purchases and accounts on one screen.",
      body: "The owner's dashboard pulls every outlet together. See what sold today, which sizes are running out, what is on order from suppliers, and what the business actually earned.",
      frameLabel: "Dotcode ERP dashboard for a footwear business with sales, stock, purchase and accounting widgets",
      appTitle: "Dashboard",
      filter: "All outlets · This week",
      nav: ["Dashboard", "POS", "Stock", "Purchases", "Accounts", "Reports"],
      kpis: [
        { label: "Sales today", value: "Rs 284,500", delta: "+12% vs last week", up: true },
        { label: "Pairs sold", value: "186", delta: "+24 pairs", up: true },
        { label: "Stock value", value: "Rs 4.8M", delta: "3,412 pairs", up: true },
        { label: "Payables due", value: "Rs 403,000", delta: "2 suppliers", up: false },
      ],
      sales: { title: "Sales by outlet", total: "Rs 1.62M this week", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], outlets: ["Gulberg", "DHA Phase 6"] },
      stock: {
        title: "Stock alerts",
        donutLabel: "by category",
        categories: [["Sneakers", 42], ["Formal", 28], ["Sandals", 18], ["Bags", 12]],
        alerts: [
          { article: "Runner · Black", detail: "Size 42 · Gulberg", qty: "1 left", status: "Reorder" },
          { article: "Oxford · Tan", detail: "Size 41 · DHA", qty: "2 left", status: "Low" },
          { article: "Tote bag · Brown", detail: "Warehouse", qty: "0 left", status: "Out" },
        ],
      },
      purchases: {
        title: "Purchase orders",
        rows: [
          { supplier: "Leather supplier · Lahore", po: "PO-0318", amount: "Rs 420,000", status: "Received", tone: "ok" },
          { supplier: "Footwear maker · Sialkot", po: "PO-0321", amount: "Rs 265,000", status: "Pending", tone: "wait" },
          { supplier: "Sole supplier · Karachi", po: "PO-0324", amount: "Rs 138,000", status: "Partial", tone: "part" },
        ],
        payableLabel: "Payable to suppliers",
        payable: "Rs 403,000",
      },
      accounts: {
        title: "Profit and loss · this month",
        rows: [["Sales", "Rs 6.4M"], ["Cost of goods", "− Rs 3.9M"], ["Expenses", "− Rs 1.3M"]],
        profitLabel: "Net profit",
        profit: "Rs 1.2M",
        balances: [["Cash in hand", "Rs 312,000"], ["Bank", "Rs 2.1M"]],
      },
      modules: [
        { title: "Stock", body: "Pairs by article, size, colour and outlet, with low-stock alerts.", slug: "stock-management" },
        { title: "Sales", body: "Fast POS billing, exchanges and wholesale invoices for every outlet.", slug: "pos-system" },
        { title: "Purchases", body: "Supplier orders, goods received and payables in each supplier's ledger.", slug: "ledger-tracking" },
        { title: "Accounting", body: "Cash, bank, expenses and profit and loss, updated by every sale.", slug: "accounting" },
      ],
    },
    featureEyebrow: "Made for the shoe counter",
    featureTitle: "The three things footwear stores get asked every day.",
    featureVisuals: {
      exchange: ["Returned · size 41", "Issued · size 42", "Balance due 0.00"],
      transfer: ["Warehouse", "24 pairs", "DHA Phase 6"],
    },
    adsEyebrow: "As seen in our ads",
    adsTitle: "What your customers and staff actually notice.",
    adsBody: "Every claim in these ads is a screen in Dotcode ERP. Scroll through the campaigns, then try it on your own stock in a free demo.",
    ads: [
      { ...adFiles.stock, alt: "Ad: Size 42? In stock at 3 branches. Shoe store POS with stock by article, size and colour.", format: "Display · 1200 × 628", caption: "Find any size at any branch from the counter." },
      { ...adFiles.exchange, alt: "Ad: Wrong size? Swapped in seconds. Exchange receipt showing size 41 returned and size 42 issued.", format: "Social feed · 1080 × 1080", caption: "Size exchanges that keep stock and cash right." },
      { ...adFiles.outlets, alt: "Ad: Every pair. Every outlet. One system. Stock counts for Gulberg, DHA and the warehouse.", format: "Display · 1200 × 628", caption: "Shops, warehouse and wholesale on one stock." },
    ],
    stats: [
      { value: "5", label: "core tools in one system: POS, stock, outlets, ledgers, accounts" },
      { value: "∞", label: "outlets, warehouses and users, with no per-seat fee" },
      { value: "$50", label: "a month for hosting, with every feature included" },
      { value: "0", label: "licence or renewal fees. Setup and training included" },
    ],
    stepsEyebrow: "How it works",
    stepsTitle: "From first pair to final accounts.",
    steps: [
      { title: "Add your articles", body: "Set up each article with its sizes and colours. We bring over your existing items, customers and opening stock." },
      { title: "Bill at the counter", body: "Scan or search the article, pick the size, and print the receipt. The pair leaves that outlet's stock at once." },
      { title: "Swap, transfer, sell wholesale", body: "Exchange sizes against the original bill, move pairs between outlets, and invoice wholesale buyers on credit." },
      { title: "See every branch", body: "Sales, stock, ledgers and profit for each outlet and for the whole business, in one place." },
    ],
    ctaEyebrow: "Free demo",
    ctaTitle: "See your own articles, sizes and outlets in Dotcode ERP.",
    ctaBody: "Send us a message on WhatsApp. We'll set up a demo around how your shoe store works, with no commitment.",
    faqEyebrow: "FAQ",
    faqTitle: "Questions footwear owners ask us",
    relatedTitle: "Explore Dotcode ERP",
    whatsappMessage: "Hi, I run a footwear / leather goods business and would like a Dotcode ERP demo.",
  },
  ur: {
    heroBadge: "جوتوں کی دکانوں اور لیدر برانڈز کے لیے",
    whatsapp: "مفت ڈیمو بک کریں",
    heroVisualLabel: "Dotcode ERP میں ایک آرٹیکل کا اسٹاک، سائز اور آؤٹ لیٹس کے حساب سے",
    sneakerAlt: "سبز، سفید اور سرسوں رنگ کے لیدر جوگرز کا جوڑا",
    heroCard: {
      article: "آرٹیکل A-2041 · رنر",
      inStock: "اسٹاک میں",
      outlets: [["گلبرگ", "3 جوڑے"], ["ڈی ایچ اے فیز 6", "2 جوڑے"], ["گودام", "14 جوڑے"]],
    },
    heroChips: [
      { label: "سائز 42 · کالا", value: "3 برانچوں میں موجود" },
      { label: "تبادلہ", value: "41 ← 42، کوئی رقم باقی نہیں" },
      { label: "ٹرانسفر", value: "گودام ← ڈی ایچ اے · 24 جوڑے" },
    ],
    marquee: ["جوگرز", "فارمل جوتے", "سینڈل اور چپل", "بچوں کے جوتے", "کھسے", "ہینڈ بیگ", "بٹوے", "بیلٹ", "لیدر جیکٹس", "ٹریول بیگ"],
    marqueeLabel: "Dotcode ERP میں چلنے والی مصنوعات",
    sizeEyebrow: "سائز اور رنگ کا میٹرکس",
    sizeLegend: { available: "اسٹاک میں", low: "کم رہ گیا", out: "ختم" },
    sizeTotal: "جوڑے اس آرٹیکل میں",
    sizeColours: ["کالا", "سفید", "براؤن"],
    dashboard: {
      eyebrow: "ایک ڈیش بورڈ",
      title: "اسٹاک، سیل، خریداری اور اکاؤنٹس ایک ہی اسکرین پر۔",
      body: "مالک کا ڈیش بورڈ تمام آؤٹ لیٹس کو اکٹھا دکھاتا ہے۔ آج کیا بکا، کون سے سائز ختم ہو رہے ہیں، سپلائرز سے کیا منگوایا ہے، اور کاروبار نے اصل میں کتنا کمایا۔",
      frameLabel: "جوتوں کے کاروبار کے لیے Dotcode ERP ڈیش بورڈ، سیل، اسٹاک، خریداری اور اکاؤنٹس کے ساتھ",
      appTitle: "ڈیش بورڈ",
      filter: "تمام آؤٹ لیٹس · اس ہفتے",
      nav: ["ڈیش بورڈ", "POS", "اسٹاک", "خریداری", "اکاؤنٹس", "رپورٹس"],
      kpis: [
        { label: "آج کی سیل", value: "Rs 284,500", delta: "پچھلے ہفتے سے 12%+", up: true },
        { label: "بکے جوڑے", value: "186", delta: "24 جوڑے زیادہ", up: true },
        { label: "اسٹاک کی مالیت", value: "Rs 4.8M", delta: "3,412 جوڑے", up: true },
        { label: "واجب الادا", value: "Rs 403,000", delta: "2 سپلائرز", up: false },
      ],
      sales: { title: "آؤٹ لیٹ وار سیل", total: "اس ہفتے Rs 1.62M", days: ["پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ", "اتوار"], outlets: ["گلبرگ", "ڈی ایچ اے فیز 6"] },
      stock: {
        title: "اسٹاک الرٹس",
        donutLabel: "کیٹیگری وار",
        categories: [["جوگرز", 42], ["فارمل", 28], ["سینڈل", 18], ["بیگ", 12]],
        alerts: [
          { article: "رنر · کالا", detail: "سائز 42 · گلبرگ", qty: "1 باقی", status: "منگوائیں" },
          { article: "آکسفورڈ · براؤن", detail: "سائز 41 · ڈی ایچ اے", qty: "2 باقی", status: "کم" },
          { article: "ٹوٹ بیگ · براؤن", detail: "گودام", qty: "0 باقی", status: "ختم" },
        ],
      },
      purchases: {
        title: "پرچیز آرڈرز",
        rows: [
          { supplier: "لیدر سپلائر · لاہور", po: "PO-0318", amount: "Rs 420,000", status: "وصول", tone: "ok" },
          { supplier: "فٹ ویئر میکر · سیالکوٹ", po: "PO-0321", amount: "Rs 265,000", status: "زیر التوا", tone: "wait" },
          { supplier: "سول سپلائر · کراچی", po: "PO-0324", amount: "Rs 138,000", status: "جزوی", tone: "part" },
        ],
        payableLabel: "سپلائرز کو واجب الادا",
        payable: "Rs 403,000",
      },
      accounts: {
        title: "نفع و نقصان · اس مہینے",
        rows: [["سیل", "Rs 6.4M"], ["مال کی لاگت", "− Rs 3.9M"], ["اخراجات", "− Rs 1.3M"]],
        profitLabel: "خالص منافع",
        profit: "Rs 1.2M",
        balances: [["کیش", "Rs 312,000"], ["بینک", "Rs 2.1M"]],
      },
      modules: [
        { title: "اسٹاک", body: "آرٹیکل، سائز، رنگ اور آؤٹ لیٹ کے حساب سے جوڑے، کم اسٹاک الرٹس کے ساتھ۔", slug: "stock-management" },
        { title: "سیل", body: "ہر آؤٹ لیٹ کے لیے تیز POS بلنگ، تبادلے اور ہول سیل انوائس۔", slug: "pos-system" },
        { title: "خریداری", body: "سپلائر آرڈرز، وصول شدہ مال اور ہر سپلائر کے کھاتے میں واجبات۔", slug: "ledger-tracking" },
        { title: "اکاؤنٹنگ", body: "کیش، بینک، اخراجات اور نفع و نقصان، ہر سیل سے خود اپ ڈیٹ۔", slug: "accounting" },
      ],
    },
    featureEyebrow: "جوتوں کے کاؤنٹر کے لیے بنا",
    featureTitle: "وہ تین سوال جو جوتوں کی دکان پر روز پوچھے جاتے ہیں۔",
    featureVisuals: {
      exchange: ["واپس · سائز 41", "دیا گیا · سائز 42", "باقی رقم 0.00"],
      transfer: ["گودام", "24 جوڑے", "ڈی ایچ اے فیز 6"],
    },
    adsEyebrow: "ہمارے اشتہارات میں",
    adsTitle: "وہ چیزیں جو آپ کے گاہک اور اسٹاف واقعی محسوس کرتے ہیں۔",
    adsBody: "ان اشتہارات کی ہر بات Dotcode ERP کی ایک اسکرین ہے۔ مہمات دیکھیں، پھر مفت ڈیمو میں اپنے اسٹاک پر آزمائیں۔",
    ads: [
      { ...adFiles.stock, alt: "اشتہار: سائز 42؟ 3 برانچوں میں موجود۔ آرٹیکل، سائز اور رنگ کے حساب سے اسٹاک والا POS۔", format: "ڈسپلے · 1200 × 628", caption: "کاؤنٹر سے کسی بھی برانچ میں کوئی بھی سائز تلاش کریں۔" },
      { ...adFiles.exchange, alt: "اشتہار: غلط سائز؟ سیکنڈوں میں تبدیل۔ تبادلے کی رسید جس میں سائز 41 واپس اور 42 دیا گیا۔", format: "سوشل فیڈ · 1080 × 1080", caption: "سائز کا تبادلہ، اسٹاک اور کیش دونوں درست۔" },
      { ...adFiles.outlets, alt: "اشتہار: ہر جوڑا، ہر آؤٹ لیٹ، ایک سسٹم۔ گلبرگ، ڈی ایچ اے اور گودام کا اسٹاک۔", format: "ڈسپلے · 1200 × 628", caption: "دکانیں، گودام اور ہول سیل ایک ہی اسٹاک پر۔" },
    ],
    stats: [
      { value: "5", label: "بنیادی ٹولز ایک سسٹم میں: POS، اسٹاک، آؤٹ لیٹس، کھاتے، اکاؤنٹس" },
      { value: "∞", label: "آؤٹ لیٹس، گودام اور یوزرز، فی یوزر کوئی فیس نہیں" },
      { value: "$50", label: "ماہانہ ہوسٹنگ، تمام فیچرز شامل" },
      { value: "0", label: "لائسنس یا تجدید فیس۔ سیٹ اپ اور ٹریننگ شامل" },
    ],
    stepsEyebrow: "یہ کیسے کام کرتا ہے",
    stepsTitle: "پہلے جوڑے سے آخری حساب تک۔",
    steps: [
      { title: "اپنے آرٹیکلز شامل کریں", body: "ہر آرٹیکل اس کے سائز اور رنگوں کے ساتھ بنائیں۔ آپ کے موجودہ آئٹمز، گاہک اور ابتدائی اسٹاک ہم منتقل کرتے ہیں۔" },
      { title: "کاؤنٹر پر بل بنائیں", body: "آرٹیکل اسکین یا تلاش کریں، سائز چنیں اور رسید پرنٹ کریں۔ جوڑا فوراً اس آؤٹ لیٹ کے اسٹاک سے نکل جاتا ہے۔" },
      { title: "تبادلہ، ٹرانسفر، ہول سیل", body: "اصل بل پر سائز بدلیں، آؤٹ لیٹس کے درمیان جوڑے بھیجیں، اور ہول سیل خریداروں کو ادھار انوائس کریں۔" },
      { title: "ہر برانچ دیکھیں", body: "ہر آؤٹ لیٹ اور پورے کاروبار کی سیل، اسٹاک، کھاتے اور منافع ایک جگہ۔" },
    ],
    ctaEyebrow: "مفت ڈیمو",
    ctaTitle: "اپنے آرٹیکلز، سائز اور آؤٹ لیٹس Dotcode ERP میں دیکھیں۔",
    ctaBody: "ہمیں واٹس ایپ پر پیغام بھیجیں۔ ہم آپ کی دکان کے طریقے کے مطابق ڈیمو تیار کریں گے، بغیر کسی پابندی کے۔",
    faqEyebrow: "سوالات",
    faqTitle: "جوتوں کے کاروباری ہم سے یہ پوچھتے ہیں",
    relatedTitle: "Dotcode ERP دیکھیں",
    whatsappMessage: "السلام علیکم، میرا جوتوں / لیدر کا کاروبار ہے اور مجھے Dotcode ERP کا ڈیمو چاہیے۔",
  },
};
