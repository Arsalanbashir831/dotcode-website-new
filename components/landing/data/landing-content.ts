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
    icon: Boxes,
    title: "Track your stock",
    description:
      "Keep product and merchandise records organized so your team can follow what the business has on hand.",
  },
  {
    icon: ClipboardList,
    title: "Record purchases",
    description:
      "Keep purchasing information together with your other day-to-day business records.",
  },
  {
    icon: Users,
    title: "Manage customer accounts",
    description:
      "Keep customer information and account balances easy for your team to find.",
  },
  {
    icon: WalletCards,
    title: "Keep cash and ledgers organized",
    description:
      "Maintain cash-in-hand records and clear account ledgers in one system.",
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
      "Start with a 10-day trial, then choose a monthly or lifetime license. Hosting is separate.",
    details: [
      "Compare three clear options",
      "No per-user license fees",
      "Confirm hosting separately",
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
    name: "10-Day Trial",
    description: "Explore QuickAccounts free for 10 days before you purchase.",
    price: "Free",
    suffix: "for 10 days",
    note: "No software license fee during your trial",
    cta: "Start Your Free Trial",
    isPopular: false,
    features: [
      "Unlimited users",
      "Full access to explore the software",
      "Free setup and business integration",
      "Free training for your team",
    ],
  },
  {
    name: "Software Purchase",
    description: "Own QuickAccounts with one simple, one-time payment.",
    price: "$1,500",
    suffix: "one time",
    note: "No subscription or software renewal fees",
    cta: "Purchase QuickAccounts",
    isPopular: true,
    features: [
      "Lifetime software access",
      "Unlimited users",
      "Free setup and business integration",
      "Free training for your team",
      "Optional features and customizations quoted separately",
      "3 Months of free support included",
      "Hosting/Cloud Storage costs excluded ( Estimated $30-40$/month )",
    ],
  },
];

export const partnerOptions = [
  {
    title: "Referral Partner",
    rate: "20–30%",
    description:
      "Introduce a business to Dotcode. We handle the demo, sale, setup and customer support.",
  },
  {
    title: "Certified Reseller",
    rate: "25–30%",
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
      "Start with a free 10-day trial, choose a monthly license at $45/month, or purchase a lifetime license for $1,200 with no renewal.",
  },
  {
    question: "Is hosting included?",
    answer:
      "No. Hosting is arranged and paid for separately. Recommended hosting is approximately $30/month.",
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
