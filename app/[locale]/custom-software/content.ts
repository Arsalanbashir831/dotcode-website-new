import type { Locale } from "@/lib/i18n";

type Item = { title: string; body: string };
type Faq = { id: string; question: string; answer: string };

export type CustomSoftwareCopy = {
  metaTitle: string;
  metaDescription: string;
  ogDescription: string;
  keywords: string[];
  whatsappMessage: string;
  eyebrow: string;
  title: string;
  overview: string;
  updated: string;
  discuss: string;
  exploreLink: string;
  summaryLabel: string;
  summaryKicker: string;
  summaryTitle: string;
  summaryPoints: string[];
  toolsEyebrow: string;
  toolsTitle: string;
  toolsBody: string;
  /** Same order as the icons in the page. */
  tools: Item[];
  fitEyebrow: string;
  fitTitle: string;
  fitIntro: string;
  fitPoints: string[];
  processEyebrow: string;
  processTitle: string;
  processBody: string;
  processSteps: Item[];
  scopeEyebrow: string;
  scopeTitle: string;
  scopeBody: string;
  scopeFacts: [string, string][];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
  faqEyebrow: string;
  faqTitle: string;
  faqReviewed: string;
  faqs: Faq[];
  relatedLabel: string;
  relatedTitle: string;
  related: [string, string][];
  schemaName: string;
  schemaServiceType: string;
  schemaDescription: string;
  schemaCatalogName: string;
};

/* FAQ ids stay identical across languages so #faq-… anchors keep working. */
export const customSoftwareContent: Record<Locale, CustomSoftwareCopy> = {
  en: {
    metaTitle: "Custom Software Development",
    metaDescription:
      "Build custom business software for accounting, sales, vendor bills, teams, offices and business-specific processes with Dotcode Solutions.",
    ogDescription:
      "Custom business software shaped around your accounting, sales, billing, team, office and operational processes.",
    keywords: [
      "custom software development",
      "custom business software development",
      "business software for internal operations",
      "custom accounting software",
      "sales and billing software",
      "team and office management software",
      "custom process software",
    ],
    whatsappMessage: "Hi, I’d like to discuss custom software development for my business.",
    eyebrow: "Custom software development",
    title: "Business software built around your internal operations",
    overview:
      "Dotcode builds custom business software that connect accounting, sales, vendor bills, teams, offices and business-specific processes. Each system is planned around the records, approvals and responsibilities your operation already depends on.",
    updated: "Last updated: November 7, 2026",
    discuss: "Discuss your project",
    exploreLink: "Explore what we build",
    summaryLabel: "Custom software project summary",
    summaryKicker: "One connected system",
    summaryTitle: "Your processes become the product blueprint.",
    summaryPoints: ["Role-based access", "Connected operational records", "Business-specific approvals", "Phased delivery and review"],
    toolsEyebrow: "Core capabilities",
    toolsTitle: "Choose the tools your business actually needs",
    toolsBody:
      "Custom software tools share one data foundation, so teams can work from connected records instead of rebuilding context across separate tools.",
    tools: [
      { title: "Accounting", body: "Connect charts of accounts, journals, expenses, payments, receivables and management reports to the transactions that create them." },
      { title: "Sales", body: "Manage quotations, orders, invoices, returns, customer balances, pricing rules and approval steps in one sales process." },
      { title: "Vendor bills and approvals", body: "Control vendor requests, orders, bills, payments and approvals with a traceable record." },
      { title: "Team management", body: "Give each role the right access, assign work, track responsibility and keep operational activity connected to accountable users." },
      { title: "Office and branch management", body: "Coordinate offices, branches and location-level performance from one business system." },
      { title: "Custom business processes", body: "Turn your approvals, exceptions, calculations, documents and handoffs into software that follows how your business operates." },
    ],
    fitEyebrow: "When custom software fits",
    fitTitle: "Build when standard software cannot represent the operation",
    fitIntro: "Custom software development is appropriate when essential processes create a lasting competitive or operational requirement.",
    fitPoints: [
      "Teams repeat the same data across spreadsheets and disconnected applications.",
      "Approvals, pricing or documents follow rules that generic systems cannot represent cleanly.",
      "Multiple offices need shared visibility with different permissions and responsibilities.",
      "Management reporting depends on combining records from several departments.",
      "The business needs ownership of a system that can evolve with its operations.",
    ],
    processEyebrow: "Development process",
    processTitle: "From operational discovery to a controlled launch",
    processBody: "A phased process makes decisions reviewable before they become expensive to change.",
    processSteps: [
      { title: "Map the operation", body: "Document users, records, approvals, exceptions, reports and integrations before defining the software scope." },
      { title: "Define the first release", body: "Prioritize the tools and processes that create the clearest operational value for the initial release." },
      { title: "Design and build", body: "Create the interface, data model, permissions, automation and integrations in reviewable development stages." },
      { title: "Test with real processes", body: "Validate realistic scenarios with business users, correct gaps and prepare approved data for launch." },
      { title: "Launch and improve", body: "Deploy the system, train users, monitor adoption and plan improvements from actual operational feedback." },
    ],
    scopeEyebrow: "Scope and evidence",
    scopeTitle: "A reliable estimate starts with documented processes",
    scopeBody: "Dotcode confirms the architecture, schedule and cost after reviewing users, records, approvals, integrations and migration needs.",
    scopeFacts: [
      ["Method", "Discovery sessions, process mapping, prioritized requirements and staged reviews."],
      ["Inputs", "Existing forms, spreadsheets, reports, user roles, sample records and integration documentation."],
      ["Output", "An agreed first-release scope with tools, responsibilities, constraints and acceptance criteria."],
      ["Limitation", "Final estimates require business-specific discovery; the page does not promise a universal price or timeline."],
    ],
    ctaEyebrow: "Start with your process",
    ctaTitle: "Tell us what your business needs to run better",
    ctaBody: "Share your current tools, the features you need, user groups and the operational problems your custom software should solve.",
    faqEyebrow: "Frequently asked questions",
    faqTitle: "Custom software development questions",
    faqReviewed: "Answers reviewed on November 7, 2026.",
    faqs: [
      { id: "what-is-custom-software-development", question: "What is custom software development?", answer: "Custom software development creates business software around a company’s real processes, roles and data. The system can connect accounting, sales, billing, teams, offices and specialized processes without forcing every operation into a generic product structure." },
      { id: "who-needs-custom-software", question: "Which businesses need a custom software?", answer: "A custom software suits businesses with distinctive approvals, pricing, reporting, multi-office operations or industry-specific records. It is especially useful when spreadsheets and disconnected applications cause repeated entry, weak visibility or process gaps across departments." },
      { id: "tools-in-custom-software", question: "Which tools can a custom software include?", answer: "A custom software can include accounting, sales, vendor bills, team management, office management, reporting and custom processes. The final tool set should follow business priorities, user roles, compliance needs and the agreed first-release scope." },
      { id: "custom-accounting-tool", question: "Can the software include custom accounting?", answer: "Yes. A custom accounting tool can cover ledgers, journals, expenses, receivables, payables, payments and financial reports. Accounting rules, currencies, taxes and approval controls must be defined during discovery and reviewed by the business’s finance specialists." },
      { id: "sales-management-tool", question: "Can the system manage sales operations?", answer: "Yes. Custom sales software can manage leads, quotations, sales orders, invoices, returns, pricing and customer balances. Permissions and approval rules can reflect sales teams, customer types, branches and the documents used in daily operations." },
      { id: "vendor-bill-management", question: "How does vendor bill management work?", answer: "Vendor bill management can connect vendor requests, approvals, orders, receiving, bills and payments. Each stage creates a traceable record, helping authorized users see what was requested, approved, received, invoiced and still outstanding." },
      { id: "team-management-features", question: "What team management features are available?", answer: "Team management can include user roles, permissions, assignments, attendance, targets, approvals and activity histories. The exact features depend on whether the business needs operational coordination, human resources records, performance tracking or a combination of those functions." },
      { id: "multiple-offices", question: "Can one system manage multiple offices?", answer: "Yes. One system can manage multiple offices or branches with location-specific permissions and records. Businesses can coordinate sales, billing, cash activity and performance reporting while maintaining a consolidated operational view." },
      { id: "custom-processes", question: "Can Dotcode build custom business processes?", answer: "Yes. Dotcode can translate defined approvals, calculations, documents, alerts, exceptions and handoffs into custom software processes. Discovery is used to identify edge cases and confirm which decisions remain manual and which steps should be automated." },
      { id: "integrate-existing-tools", question: "Can custom business software integrate existing tools?", answer: "Custom business software can integrate suitable accounting platforms, payment services, ecommerce systems, messaging tools or internal applications through available APIs and supported data formats. Integration feasibility depends on access, documentation, security requirements and the external provider’s limitations." },
      { id: "software-development-process", question: "What is the custom software development process?", answer: "The process starts with process discovery and scope definition. Dotcode then designs, builds and reviews the system in stages, tests realistic business scenarios, prepares approved data, trains users and supports a controlled launch with planned improvements." },
      { id: "software-development-time", question: "How long does custom software development take?", answer: "Delivery time depends on tool count, process complexity, integrations, data migration and review speed. Dotcode estimates the schedule after discovery and can phase delivery so the business starts with a focused release before adding lower-priority capabilities." },
      { id: "migrate-existing-data", question: "Can existing business data be migrated?", answer: "Supported data can be migrated after its format, quality, ownership and required history are reviewed. A migration plan defines field mapping, cleanup responsibility, validation and cutover steps. Unsupported or inconsistent source data may require additional preparation." },
      { id: "security-and-permissions", question: "How are security and permissions handled?", answer: "Security is designed around user roles, access boundaries, authentication, audit requirements and deployment needs. The agreed architecture can include role-based permissions, activity records, backups and protected integrations, with controls matched to the system’s risks and data sensitivity." },
      { id: "start-a-custom-software-project", question: "How do we start a custom software project?", answer: "Start by sharing the operational problems, current tools, user groups, required tools and highest-priority processes. Dotcode can use an initial consultation to identify the discovery scope, technical constraints and a practical path toward the first release." },
    ],
    relatedLabel: "Related services and software",
    relatedTitle: "Explore related pages",
    related: [
      ["Setup, data transfer and training", "/implementation"],
      ["Dotcode ERP features", "/features"],
      ["Industries", "/industries"],
      ["Pricing", "/pricing"],
    ],
    schemaName: "Custom Software Development",
    schemaServiceType: "Custom business software development",
    schemaDescription:
      "Custom software development for accounting, sales, vendor bills, team management, office management and business-specific processes.",
    schemaCatalogName: "Custom software tools",
  },
  ur: {
    metaTitle: "کسٹم سافٹ ویئر ڈیولپمنٹ",
    metaDescription:
      "Dotcode Solutions کے ساتھ اکاؤنٹنگ، سیلز، سپلائر بلز، ٹیموں، دفاتر اور اپنے کاروبار کے مخصوص طریقہ کار کے لیے کسٹم بزنس سافٹ ویئر بنوائیں۔",
    ogDescription:
      "آپ کی اکاؤنٹنگ، سیلز، بلنگ، ٹیم، دفتر اور آپریشنل طریقہ کار کے مطابق بنایا گیا کسٹم بزنس سافٹ ویئر۔",
    keywords: [
      "کسٹم سافٹ ویئر ڈیولپمنٹ",
      "کسٹم بزنس سافٹ ویئر",
      "کسٹم اکاؤنٹنگ سافٹ ویئر",
      "سیلز اور بلنگ سافٹ ویئر",
      "custom software development",
    ],
    whatsappMessage: "Hi, I’d like to discuss custom software development for my business.",
    eyebrow: "کسٹم سافٹ ویئر ڈیولپمنٹ",
    title: "آپ کے اندرونی کام کے مطابق بنا بزنس سافٹ ویئر",
    overview:
      "Dotcode ایسا کسٹم بزنس سافٹ ویئر بناتا ہے جو اکاؤنٹنگ، سیلز، سپلائر بلز، ٹیموں، دفاتر اور کاروبار کے مخصوص طریقہ کار کو آپس میں جوڑتا ہے۔ ہر سسٹم اُن ریکارڈز، منظوریوں اور ذمہ داریوں کے گرد ترتیب دیا جاتا ہے جن پر آپ کا کام پہلے سے چل رہا ہے۔",
    updated: "آخری اپ ڈیٹ: 7 نومبر 2026",
    discuss: "اپنے پراجیکٹ پر بات کریں",
    exploreLink: "دیکھیں ہم کیا بناتے ہیں",
    summaryLabel: "کسٹم سافٹ ویئر پراجیکٹ کا خلاصہ",
    summaryKicker: "ایک جڑا ہوا سسٹم",
    summaryTitle: "آپ کا طریقہ کار، پروڈکٹ کا نقشہ بن جاتا ہے۔",
    summaryPoints: ["عہدے کے مطابق رسائی", "آپس میں جڑے ریکارڈ", "کاروبار کے مطابق منظوری کا نظام", "مرحلہ وار ڈیلیوری اور جائزہ"],
    toolsEyebrow: "بنیادی صلاحیتیں",
    toolsTitle: "وہ ٹولز چنیں جن کی آپ کے کاروبار کو واقعی ضرورت ہے",
    toolsBody:
      "کسٹم سافٹ ویئر کے تمام ٹولز ایک ہی ڈیٹا پر چلتے ہیں، تاکہ ٹیمیں الگ الگ ٹولز میں معلومات دوبارہ جوڑنے کی بجائے جڑے ہوئے ریکارڈ سے کام کریں۔",
    tools: [
      { title: "اکاؤنٹنگ", body: "اکاؤنٹس کا چارٹ، جرنلز، اخراجات، ادائیگیاں، وصولیاں اور انتظامی رپورٹس اُن لین دین سے جوڑیں جن سے وہ بنتی ہیں۔" },
      { title: "سیلز", body: "کوٹیشن، آرڈرز، انوائسز، واپسی، گاہکوں کے بیلنس، قیمتوں کے اصول اور منظوری کے مراحل ایک ہی سیلز عمل میں سنبھالیں۔" },
      { title: "سپلائر بلز اور منظوریاں", body: "سپلائر کی درخواستیں، آرڈرز، بلز، ادائیگیاں اور منظوریاں قابلِ سراغ ریکارڈ کے ساتھ کنٹرول کریں۔" },
      { title: "ٹیم مینجمنٹ", body: "ہر عہدے کو صحیح رسائی دیں، کام سونپیں، ذمہ داری طے کریں اور آپریشنل سرگرمی کو ذمہ دار یوزرز سے جوڑے رکھیں۔" },
      { title: "دفتر اور برانچ مینجمنٹ", body: "دفاتر، برانچوں اور ہر جگہ کی کارکردگی کو ایک بزنس سسٹم سے مربوط کریں۔" },
      { title: "کسٹم کاروباری طریقہ کار", body: "اپنی منظوریوں، استثنائی صورتوں، حسابات، دستاویزات اور کام کی منتقلی کو ایسے سافٹ ویئر میں بدلیں جو آپ کے کاروبار کے طریقے پر چلے۔" },
    ],
    fitEyebrow: "کسٹم سافٹ ویئر کب موزوں ہے",
    fitTitle: "تب بنوائیں جب عام سافٹ ویئر آپ کا کام صحیح طرح نہ سنبھال سکے",
    fitIntro: "کسٹم سافٹ ویئر ڈیولپمنٹ تب موزوں ہے جب اہم کاروباری طریقہ کار سے ایک دیرپا مسابقتی یا آپریشنل ضرورت پیدا ہو۔",
    fitPoints: [
      "ٹیمیں ایک ہی ڈیٹا اسپریڈ شیٹس اور الگ الگ ایپس میں بار بار درج کرتی ہیں۔",
      "منظوریاں، قیمتیں یا دستاویزات ایسے اصولوں پر چلتی ہیں جو عام سسٹم صاف طرح نہیں سنبھال پاتے۔",
      "کئی دفاتر کو مختلف اجازتوں اور ذمہ داریوں کے ساتھ مشترکہ معلومات چاہییں۔",
      "انتظامی رپورٹنگ کئی شعبوں کے ریکارڈ ملانے پر منحصر ہے۔",
      "کاروبار کو ایسے سسٹم کی ملکیت چاہیے جو اس کے کام کے ساتھ بدل سکے۔",
    ],
    processEyebrow: "ڈیولپمنٹ کا طریقہ کار",
    processTitle: "کام کو سمجھنے سے لے کر منظم لانچ تک",
    processBody: "مرحلہ وار عمل فیصلوں کو اس سے پہلے قابلِ جائزہ بناتا ہے کہ انہیں بدلنا مہنگا پڑے۔",
    processSteps: [
      { title: "کام کا نقشہ بنائیں", body: "سافٹ ویئر کا دائرہ طے کرنے سے پہلے یوزرز، ریکارڈ، منظوریاں، استثنائی صورتیں، رپورٹس اور انٹیگریشنز درج کریں۔" },
      { title: "پہلی ریلیز طے کریں", body: "اُن ٹولز اور طریقوں کو ترجیح دیں جو پہلی ریلیز میں سب سے واضح فائدہ دیں۔" },
      { title: "ڈیزائن اور تیاری", body: "انٹرفیس، ڈیٹا ماڈل، اجازتیں، آٹومیشن اور انٹیگریشنز قابلِ جائزہ مراحل میں تیار کریں۔" },
      { title: "اصل کام پر ٹیسٹ", body: "کاروباری یوزرز کے ساتھ حقیقی صورتحال پرکھیں، کمیاں دور کریں اور لانچ کے لیے منظور شدہ ڈیٹا تیار کریں۔" },
      { title: "لانچ اور بہتری", body: "سسٹم لانچ کریں، یوزرز کو ٹریننگ دیں، استعمال پر نظر رکھیں اور حقیقی فیڈبیک سے بہتری کی منصوبہ بندی کریں۔" },
    ],
    scopeEyebrow: "دائرہ کار اور شواہد",
    scopeTitle: "قابلِ اعتماد تخمینہ درج شدہ طریقہ کار سے شروع ہوتا ہے",
    scopeBody: "یوزرز، ریکارڈ، منظوریوں، انٹیگریشنز اور ڈیٹا کی منتقلی کی ضروریات کا جائزہ لینے کے بعد Dotcode ڈھانچہ، شیڈول اور لاگت طے کرتا ہے۔",
    scopeFacts: [
      ["طریقہ", "جائزہ سیشنز، طریقہ کار کا نقشہ، ترجیحی ضروریات اور مرحلہ وار جائزے۔"],
      ["معلومات", "موجودہ فارمز، اسپریڈ شیٹس، رپورٹس، یوزر عہدے، نمونہ ریکارڈ اور انٹیگریشن دستاویزات۔"],
      ["نتیجہ", "ٹولز، ذمہ داریوں، حدود اور قبولیت کے معیار کے ساتھ پہلی ریلیز کا طے شدہ دائرہ۔"],
      ["حد", "حتمی تخمینے کے لیے کاروبار کا مخصوص جائزہ ضروری ہے؛ یہ صفحہ کسی عمومی قیمت یا مدت کا وعدہ نہیں کرتا۔"],
    ],
    ctaEyebrow: "اپنے طریقہ کار سے شروع کریں",
    ctaTitle: "بتائیں آپ کے کاروبار کو بہتر چلنے کے لیے کیا چاہیے",
    ctaBody: "اپنے موجودہ ٹولز، مطلوبہ فیچرز، یوزر گروپس اور وہ آپریشنل مسائل بتائیں جو آپ کا کسٹم سافٹ ویئر حل کرے۔",
    faqEyebrow: "عام سوالات",
    faqTitle: "کسٹم سافٹ ویئر ڈیولپمنٹ کے بارے میں سوالات",
    faqReviewed: "جوابات کا جائزہ 7 نومبر 2026 کو لیا گیا۔",
    faqs: [
      { id: "what-is-custom-software-development", question: "کسٹم سافٹ ویئر ڈیولپمنٹ کیا ہے؟", answer: "کسٹم سافٹ ویئر ڈیولپمنٹ کسی کمپنی کے اصل طریقہ کار، عہدوں اور ڈیٹا کے گرد بزنس سافٹ ویئر بناتی ہے۔ یہ سسٹم اکاؤنٹنگ، سیلز، بلنگ، ٹیموں، دفاتر اور مخصوص طریقوں کو جوڑ سکتا ہے، بغیر ہر کام کو کسی عمومی پروڈکٹ کے ڈھانچے میں زبردستی ڈالے۔" },
      { id: "who-needs-custom-software", question: "کن کاروباروں کو کسٹم سافٹ ویئر کی ضرورت ہوتی ہے؟", answer: "کسٹم سافٹ ویئر اُن کاروباروں کے لیے موزوں ہے جن کی منظوریاں، قیمتیں، رپورٹنگ، کئی دفاتر کا کام یا انڈسٹری کے مخصوص ریکارڈ منفرد ہوں۔ یہ خاص طور پر تب مفید ہے جب اسپریڈ شیٹس اور الگ الگ ایپس کی وجہ سے ڈیٹا بار بار درج ہو، معلومات واضح نہ ہوں یا شعبوں کے درمیان خلا رہ جائے۔" },
      { id: "tools-in-custom-software", question: "کسٹم سافٹ ویئر میں کون سے ٹولز شامل ہو سکتے ہیں؟", answer: "کسٹم سافٹ ویئر میں اکاؤنٹنگ، سیلز، سپلائر بلز، ٹیم مینجمنٹ، دفتر کا انتظام، رپورٹنگ اور کسٹم طریقہ کار شامل ہو سکتے ہیں۔ حتمی ٹولز کاروبار کی ترجیحات، یوزر عہدوں، قانونی ضروریات اور طے شدہ پہلی ریلیز کے مطابق ہونے چاہییں۔" },
      { id: "custom-accounting-tool", question: "کیا سافٹ ویئر میں کسٹم اکاؤنٹنگ شامل ہو سکتی ہے؟", answer: "جی ہاں۔ کسٹم اکاؤنٹنگ ٹول لیجر، جرنلز، اخراجات، وصولیاں، واجبات، ادائیگیاں اور مالیاتی رپورٹس کا احاطہ کر سکتا ہے۔ اکاؤنٹنگ کے اصول، کرنسیاں، ٹیکس اور منظوری کے کنٹرول جائزے کے دوران طے ہونے چاہییں اور کاروبار کے مالیاتی ماہرین سے منظور کروانے چاہییں۔" },
      { id: "sales-management-tool", question: "کیا سسٹم سیلز کا کام سنبھال سکتا ہے؟", answer: "جی ہاں۔ کسٹم سیلز سافٹ ویئر لیڈز، کوٹیشن، سیلز آرڈرز، انوائسز، واپسی، قیمتیں اور گاہکوں کے بیلنس سنبھال سکتا ہے۔ اجازتیں اور منظوری کے اصول سیلز ٹیموں، گاہکوں کی اقسام، برانچوں اور روزمرہ دستاویزات کے مطابق ہو سکتے ہیں۔" },
      { id: "vendor-bill-management", question: "سپلائر بلز کا انتظام کیسے ہوتا ہے؟", answer: "سپلائر بلز کا انتظام درخواستوں، منظوریوں، آرڈرز، مال کی وصولی، بلز اور ادائیگیوں کو جوڑ سکتا ہے۔ ہر مرحلہ قابلِ سراغ ریکارڈ بناتا ہے، جس سے مجاز یوزرز دیکھ سکتے ہیں کیا مانگا گیا، منظور ہوا، وصول ہوا، بل ہوا اور کیا ابھی باقی ہے۔" },
      { id: "team-management-features", question: "ٹیم مینجمنٹ کے کون سے فیچرز دستیاب ہیں؟", answer: "ٹیم مینجمنٹ میں یوزر عہدے، اجازتیں، کام کی تقسیم، حاضری، اہداف، منظوریاں اور سرگرمی کی تاریخ شامل ہو سکتی ہے۔ اصل فیچرز اس پر منحصر ہیں کہ کاروبار کو آپریشنل رابطہ، HR ریکارڈ، کارکردگی کی نگرانی یا ان سب کا امتزاج چاہیے۔" },
      { id: "multiple-offices", question: "کیا ایک سسٹم کئی دفاتر سنبھال سکتا ہے؟", answer: "جی ہاں۔ ایک سسٹم ہر جگہ کی مخصوص اجازتوں اور ریکارڈ کے ساتھ کئی دفاتر یا برانچیں سنبھال سکتا ہے۔ کاروبار سیلز، بلنگ، کیش اور کارکردگی کی رپورٹنگ کو مربوط کر سکتے ہیں اور ساتھ ہی پورے کام کی مجموعی تصویر دیکھ سکتے ہیں۔" },
      { id: "custom-processes", question: "کیا Dotcode کسٹم کاروباری طریقہ کار بنا سکتا ہے؟", answer: "جی ہاں۔ Dotcode طے شدہ منظوریوں، حسابات، دستاویزات، الرٹس، استثنائی صورتوں اور کام کی منتقلی کو کسٹم سافٹ ویئر میں ڈھال سکتا ہے۔ جائزے کے دوران خاص صورتیں پہچانی جاتی ہیں اور طے کیا جاتا ہے کون سے فیصلے دستی رہیں گے اور کون سے مراحل خودکار ہوں گے۔" },
      { id: "integrate-existing-tools", question: "کیا کسٹم بزنس سافٹ ویئر موجودہ ٹولز سے جڑ سکتا ہے؟", answer: "کسٹم بزنس سافٹ ویئر دستیاب APIs اور سپورٹڈ ڈیٹا فارمیٹس کے ذریعے موزوں اکاؤنٹنگ پلیٹ فارمز، پیمنٹ سروسز، ای کامرس سسٹمز، میسجنگ ٹولز یا اندرونی ایپس سے جڑ سکتا ہے۔ یہ رسائی، دستاویزات، سیکیورٹی کی ضروریات اور بیرونی فراہم کنندہ کی حدود پر منحصر ہے۔" },
      { id: "software-development-process", question: "کسٹم سافٹ ویئر ڈیولپمنٹ کا طریقہ کار کیا ہے؟", answer: "عمل طریقہ کار کے جائزے اور دائرہ کار طے کرنے سے شروع ہوتا ہے۔ پھر Dotcode مرحلہ وار سسٹم ڈیزائن، تیار اور جائزہ کرتا ہے، حقیقی کاروباری صورتحال پر ٹیسٹ کرتا ہے، منظور شدہ ڈیٹا تیار کرتا ہے، یوزرز کو ٹریننگ دیتا ہے اور منصوبہ بند بہتری کے ساتھ منظم لانچ میں مدد کرتا ہے۔" },
      { id: "software-development-time", question: "کسٹم سافٹ ویئر بنانے میں کتنا وقت لگتا ہے؟", answer: "ڈیلیوری کا وقت ٹولز کی تعداد، طریقہ کار کی پیچیدگی، انٹیگریشنز، ڈیٹا کی منتقلی اور جائزے کی رفتار پر منحصر ہے۔ Dotcode جائزے کے بعد شیڈول کا تخمینہ لگاتا ہے اور ڈیلیوری مرحلوں میں کر سکتا ہے تاکہ کاروبار پہلے ایک مرکوز ریلیز سے شروع کرے اور کم ترجیحی صلاحیتیں بعد میں شامل ہوں۔" },
      { id: "migrate-existing-data", question: "کیا موجودہ کاروباری ڈیٹا منتقل ہو سکتا ہے؟", answer: "سپورٹڈ ڈیٹا اس کے فارمیٹ، معیار، ملکیت اور مطلوبہ تاریخ کے جائزے کے بعد منتقل کیا جا سکتا ہے۔ منتقلی کا منصوبہ فیلڈ میپنگ، صفائی کی ذمہ داری، تصدیق اور تبدیلی کے مراحل طے کرتا ہے۔ غیر سپورٹڈ یا بے ترتیب ڈیٹا کے لیے اضافی تیاری درکار ہو سکتی ہے۔" },
      { id: "security-and-permissions", question: "سیکیورٹی اور اجازتیں کیسے سنبھالی جاتی ہیں؟", answer: "سیکیورٹی یوزر عہدوں، رسائی کی حدود، تصدیق، آڈٹ کی ضروریات اور ڈیپلائمنٹ کے مطابق ڈیزائن کی جاتی ہے۔ طے شدہ ڈھانچے میں عہدے کے مطابق اجازتیں، سرگرمی کا ریکارڈ، بیک اپ اور محفوظ انٹیگریشنز شامل ہو سکتی ہیں، جن کے کنٹرول سسٹم کے خطرات اور ڈیٹا کی حساسیت کے مطابق ہوں۔" },
      { id: "start-a-custom-software-project", question: "کسٹم سافٹ ویئر پراجیکٹ کیسے شروع کریں؟", answer: "اپنے آپریشنل مسائل، موجودہ ٹولز، یوزر گروپس، مطلوبہ ٹولز اور سب سے اہم طریقہ کار بتا کر شروع کریں۔ Dotcode ابتدائی مشاورت میں جائزے کا دائرہ، تکنیکی حدود اور پہلی ریلیز کی طرف عملی راستہ طے کر سکتا ہے۔" },
    ],
    relatedLabel: "متعلقہ سروسز اور سافٹ ویئر",
    relatedTitle: "متعلقہ صفحات دیکھیں",
    related: [
      ["سیٹ اپ، ڈیٹا کی منتقلی اور ٹریننگ", "/implementation"],
      ["Dotcode ERP کے فیچرز", "/features"],
      ["انڈسٹریز", "/industries"],
      ["قیمت", "/pricing"],
    ],
    schemaName: "کسٹم سافٹ ویئر ڈیولپمنٹ",
    schemaServiceType: "کسٹم بزنس سافٹ ویئر ڈیولپمنٹ",
    schemaDescription:
      "اکاؤنٹنگ، سیلز، سپلائر بلز، ٹیم مینجمنٹ، دفتر کے انتظام اور کاروبار کے مخصوص طریقہ کار کے لیے کسٹم سافٹ ویئر ڈیولپمنٹ۔",
    schemaCatalogName: "کسٹم سافٹ ویئر ٹولز",
  },
};
