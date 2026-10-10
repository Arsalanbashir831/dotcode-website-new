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
  graphic: "locations" | "stock" | "trading" | "serials" | "accounts";
  href: string;
};

export type AudienceItem = {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  graphic: "wholesale" | "merchandise" | "distribution";
  href: string;
  linkLabel: string;
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
    title: "Outlets and warehouses",
    description:
      "Manage inventory across branches and warehouses, see location-level stock, and coordinate transfers as products move through your business.",
    graphic: "locations",
    href: "/features/multi-warehouse-inventory",
  },
  {
    icon: Boxes,
    title: "Stock tracking",
    description:
      "Keep product records and stock quantities organized so your team can review what is available and where it is held.",
    graphic: "stock",
    href: "/solutions/wholesale-inventory",
  },
  {
    icon: ClipboardList,
    title: "Purchases and sales",
    description:
      "Record buying and selling activity in a connected workflow, keeping transaction history alongside your inventory records.",
    graphic: "trading",
    href: "/solutions/wholesale-inventory",
  },
  {
    icon: PackageCheck,
    title: "Serials and warranty claims",
    description:
      "Trace individual products by serial number, find related sales details, and support warranty checks, returns, and replacements.",
    graphic: "serials",
    href: "/features/serial-number-tracking",
  },
  {
    icon: WalletCards,
    title: "Accounts and ledgers",
    description:
      "Keep customer and vendor ledgers, cash records, and expense activity together with your inventory and sales operations.",
    graphic: "accounts",
    href: "/features/business-accounting",
  },
];

export const audienceItems: AudienceItem[] = [
  {
    icon: Store,
    label: "01 / WHOLESALERS",
    title: "From purchase to payment.",
    description:
      "Keep supplier purchases, customer sales and payments connected to the accounts behind every trade.",
    graphic: "wholesale",
    href: "/solutions/wholesale-inventory",
    linkLabel: "Explore wholesale tools",
  },
  {
    icon: ShoppingBag,
    label: "02 / MERCHANDISE",
    title: "Know what’s in stock.",
    description:
      "Follow the goods you receive, hold and sell, with stock movements and customer records in one place.",
    graphic: "merchandise",
    href: "/industries/merchandise-wholesalers",
    linkLabel: "Explore merchandise tools",
  },
  {
    icon: Truck,
    label: "03 / DISTRIBUTORS",
    title: "Keep every location connected.",
    description:
      "See stock across warehouses and outlets. Coordinate transfers and keep your team working from the same business records.",
    graphic: "distribution",
    href: "/features/multi-warehouse-inventory",
    linkLabel: "Explore multiple locations",
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
      "Review the demo, then choose an offline single-user license or online access for your team. Online hosting is $40 per month.",
    details: [
      "See the product in a guided demo",
      "Offline: $1,200 one time, for one user",
      "Online: $850 one time, plus $40/month hosting",
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
      "Use QuickAccounts with the owner-only offline license or give your full team access through the online setup.",
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
    description:
      "See QuickAccounts in a guided demo before choosing your setup.",
    price: "Free",
    suffix: "guided demo",
    note: "Explore the core workflows and available features",
    cta: "View Demo",
    message: "Hi, I’d like to book a QuickAccounts demo for my business.",
    isDemo: true,
    isPopular: false,
    features: [
      "Inventory, purchases and sales",
      "Outlets, warehouses and stock transfers",
      "Serial number and warranty tracking",
      "Returns and product replacements",
      "Customer accounts, cash and ledgers",
      "Discuss optional customization",
    ],
  },
  {
    name: "Online ERP Software License",
    description: "Cloud hosted access for you and your whole team.",
    price: "$850",
    suffix: "one-time lifetime license",
    note: "Plus $40/month for online hosting",
    cta: "Ask About Online Setup",
    message:
      "Hi, I’m interested in the online QuickAccounts license for $850 plus $40/month hosting.",
    isDemo: false,
    isPopular: true,
    features: [
      "Full inventory, purchasing and sales features",
      "Multi-warehouse stock and transfers",
      "Serial tracking, warranty and returns",
      "Customer accounts, cash and ledgers",
      "Unlimited users across your team",
      "Lifetime software license with no renewal fee",
      "$40/month hosting, billed separately",
      "Standard setup and team training included",
      "Customizations quoted separately",
    ],
  },
  {
    name: "Offline ERP Software License",
    description:
      "Installed on your hardware, with business data stored locally.",
    price: "$1,200",
    suffix: "one-time lifetime license",
    note: "One user · no monthly hosting cost",
    cta: "Ask About Offline Setup",
    message:
      "Hi, I’m interested in the offline QuickAccounts license for $1,200.",
    isDemo: false,
    isPopular: false,
    features: [
      "Full inventory, purchasing and sales features",
      "Multi-warehouse stock and transfers",
      "Serial tracking, warranty and returns",
      "Customer accounts, cash and ledgers",
      "Single-user access for the owner",
      "Data stored on your own hardware",
      "Lifetime software license with no renewal fee",
      "Standard setup and team training included",
      "Customizations quoted separately",
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
      "The online license includes unlimited users. The offline license is for one user, typically the business owner.",
  },
  {
    question: "What license options are available?",
    answer:
      "Start with a free guided demo. The offline single-user lifetime license is $1,200 one time. The online unlimited-user lifetime license is $850 one time, plus $40 per month for hosting. Neither license has a software renewal fee.",
  },
  {
    question: "Is hosting included?",
    answer:
      "Online hosting is $40 per month and billed separately from the $850 software license. The offline license stores data on your hardware and has no monthly hosting cost.",
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
