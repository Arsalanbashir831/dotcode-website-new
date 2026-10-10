import {
  Boxes,
  CircleDollarSign,
  ClipboardList,
  Database,
  GraduationCap,
  PackageCheck,
  ShoppingBag,
  Store,
  Truck,
  Users,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
};

export type AudienceItem = {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
};

export const navigationItems = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faq" },
];

export const valueItems = [
  { icon: CircleDollarSign, label: "Lifetime license. No renewal." },
  { icon: Users, label: "Unlimited users. No per-user fees." },
  { icon: PackageCheck, label: "Standard setup included." },
  { icon: Database, label: "Free Data migration service included." },
  { icon: GraduationCap, label: "Free Team training included." },
];

export const features: FeatureItem[] = [
  {
    icon: Store,
    title: "Manage Multiple Outlets and Warehouses",
    description:
      "Manage inventory across branches and warehouses, see location-level stock, and coordinate transfers as products move through your business.",
    image: {
      src: "/assets/feature1.png",
      alt: "QuickAccounts stores and warehouses screen with outlet and warehouse locations",
    },
  },
  {
    icon: Boxes,
    title: "Manage and Track Your Stock",
    description:
      "Keep product records and stock quantities organized so your team can review what is available and where it is held.",
    image: {
      src: "/assets/feature2.png",
      alt: "QuickAccounts stock workspace showing inventory activity, transfers, and serial traceability",
    },
  },
  {
    icon: ClipboardList,
    title: "Record Purchases and Sales",
    description:
      "Record buying and selling activity in a connected workflow, keeping transaction history alongside your inventory records.",
    image: {
      src: "/assets/feature3.png",
      alt: "QuickAccounts purchase order screen with supplier, delivery, and product details",
    },
  },
  {
    icon: PackageCheck,
    title: "Track Serials for Warranty and RMA Claims",
    description:
      "Trace individual products by serial number, find related sales details, and support warranty checks, returns, and replacements.",
    image: {
      src: "/assets/feature4-rma.png",
      alt: "QuickAccounts returns and warranty workspace with serial verification and RMA claims",
    },
  },
  {
    icon: WalletCards,
    title: "Manage Financial Accounts, Ledgers and Expenses",
    description:
      "Keep customer and vendor ledgers, cash records, and expense activity together with your inventory and sales operations.",
    image: {
      src: "/assets/feature5-ledger.png",
      alt: "QuickAccounts customer ledger showing invoice and payment history, balances, and outstanding amounts",
    },
  },
];

export const audienceItems: AudienceItem[] = [
  {
    icon: Store,
    label: "01 / WHOLESALERS",
    title: "Keep trading records together",
    description:
      "Organize purchases, stock, customer accounts, cash and ledgers for your wholesale operation.",
  },
  {
    icon: ShoppingBag,
    label: "02 / MERCHANDISE",
    title: "Follow your goods and accounts",
    description:
      "Keep records for the merchandise you buy and sell alongside stock and customer accounts.",
  },
  {
    icon: Truck,
    label: "03 / DISTRIBUTORS",
    title: "Bring daily records into one place",
    description:
      "Keep merchandise, purchasing and everyday account records organized for your team.",
  },
];

export const setupSteps = [
  {
    title: "Setup and integration",
    description:
      "We install and configure QuickAccounts around the workflow agreed for your business.",
  },
  {
    title: "Standard data migration",
    description:
      "We help move your existing business records from a supported file or tool into QuickAccounts.",
  },
  {
    title: "Team training",
    description:
      "We guide your team through the parts of QuickAccounts they’ll use in day-to-day work.",
  },
  {
    title: "Optional small changes",
    description:
      "If you need a small feature adjustment, we’ll review the request and agree on scope and cost first.",
  },
];

export const processSteps = [
  {
    title: "Tell us how you work",
    description:
      "Share your current tools, business records and the day-to-day tasks you want to organize.",
    details: [
      "Review your current workflow",
      "Identify the records you need",
      "Agree on a practical setup",
    ],
  },
  {
    title: "Choose a license",
    description:
      "Review the demo, then choose online or offline software. Online hosting costs about $30–$40 per month; offline software has no monthly charges.",
    details: [
      "See the product in a guided demo",
      "Online hosting: about $30–$40/month",
      "Offline software: no monthly charges",
    ],
  },
  {
    title: "Get set up and trained",
    description:
      "Dotcode installs the product, completes standard data migration and trains your team.",
    details: [
      "Configure your workspace",
      "Complete supported data migration",
      "Train your day-to-day users",
    ],
  },
  {
    title: "Get to work",
    description:
      "Use QuickAccounts with as many team members as your business needs, with no per-user fee.",
    details: [
      "Invite your whole team",
      "Keep daily records together",
      "Get help when you need it",
    ],
  },
];

export const pricingPlans = [
  {
    name: "Check Demo",
    description: "Get a guided look at QuickAccounts before choosing a license.",
    price: "Free",
    suffix: "product demo",
    note: "See the key workflows before you decide",
    cta: "View Demo",
    isPopular: false,
    features: [
      "Stock and purchase management",
      "Multi-warehouse inventory and stock transfers",
      "Serial number tracking and warranty workflows",
      "Returns and product replacements",
      "Customer accounts, cash and ledgers",
    ],
  },
  {
    name: "Software Purchase",
    description: "Own QuickAccounts with one simple, one-time payment.",
    price: "$850",
    suffix: "one time",
    note: "No subscription or software renewal fees",
    cta: "Contact Us",
    isPopular: true,
    features: [
      "Lifetime software access",
      "Unlimited users",
      "Free setup and business integration",
      "Free training for your team",
      "Optional features and customizations quoted separately",
      "3 Months of free support included",
      "For Online Software Hosting and cloud storage are separate (estimated $30–$40/month) for Offline Software Hosting there is no hosting fee",
    ],
  },
];

export const partnerOptions = [
  {
    title: "Referral Partner",
    rate: "3–5%",
    description:
      "Introduce a business to Dotcode. We handle the demo, sale, setup and customer support.",
  },
  {
    title: "Certified Reseller",
    rate: "3–5%",
    description:
      "Sell QuickAccounts directly and support customers in your market.",
  },
];

export const faqItems = [
  {
    question: "What does QuickAccounts help me manage?",
    answer:
      "QuickAccounts brings together core records for stock, purchases, cash, customer accounts and ledgers.",
  },
  {
    question: "Who is QuickAccounts designed for?",
    answer:
      "It is designed for wholesalers and merchandise businesses that need a straightforward way to organize everyday records.",
  },
  {
    question: "Do you charge extra for each user?",
    answer:
      "No. Your software license is not priced per user. Give access to all the team members your business needs.",
  },
  {
    question: "What license options are available?",
    answer:
      "Request a free guided product demo or purchase a lifetime software license for $850. There is no software renewal fee. Hosting depends on your online or offline setup.",
  },
  {
    question: "Is hosting included?",
    answer:
      "No. Hosting is arranged and paid for separately. The current estimate shown on this page is $30–$40 per month; confirm the right option with Dotcode for your setup.",
  },
  {
    question: "Are setup, data migration and training included?",
    answer:
      "Yes. Dotcode includes standard setup, supported data migration and team training.",
  },
  {
    question: "Can QuickAccounts be customized?",
    answer:
      "Small customizations may be possible. Dotcode confirms scope and cost before work begins.",
  },
];
