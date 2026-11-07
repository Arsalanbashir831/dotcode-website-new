import {
  BarChart3,
  Banknote,
  CircleDollarSign,
  Clock,
  Database,
  FileText,
  GraduationCap,
  Landmark,
  PackageCheck,
  PieChart,
  Receipt,
  Repeat,
  Users,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  graphic:
    | "invoicing"
    | "billing"
    | "recurring"
    | "balances"
    | "expenses"
    | "profitability"
    | "cash"
    | "reports";
  href: string;
};

export type AudienceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

export const navigationItems = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#process" },
  { label: "FAQs", href: "#faq" },
];

export const valueItems = [
  { icon: CircleDollarSign, label: "One-time license. No renewal." },
  { icon: Users, label: "Unlimited users online." },
  { icon: PackageCheck, label: "Setup included." },
  { icon: Database, label: "Data transfer included." },
  { icon: GraduationCap, label: "Team training included." },
];

export const features: FeatureItem[] = [
  {
    icon: FileText,
    title: "Client invoicing",
    description:
      "Professional invoices in seconds, with your logo, terms and payment details.",
    graphic: "invoicing",
    href: "/features/client-invoicing",
  },
  {
    icon: Clock,
    title: "Fees, hours and retainers",
    description:
      "Bill by the hour, by milestone, a fixed fee or a monthly retainer.",
    graphic: "billing",
    href: "/features/time-and-fee-billing",
  },
  {
    icon: Repeat,
    title: "Recurring invoices",
    description:
      "Monthly retainers and subscriptions invoice themselves on schedule.",
    graphic: "recurring",
    href: "/features/recurring-billing",
  },
  {
    icon: WalletCards,
    title: "Client balances",
    description:
      "Every client's invoices and payments in one running balance, with overdue alerts.",
    graphic: "balances",
    href: "/features/client-balances",
  },
  {
    icon: Receipt,
    title: "Expense tracking",
    description:
      "Record rent, salaries, software, travel and client expenses by category.",
    graphic: "expenses",
    href: "/features/expense-tracking",
  },
  {
    icon: PieChart,
    title: "Project and client profitability",
    description:
      "See what each client or project earns against what it costs.",
    graphic: "profitability",
    href: "/features/project-profitability",
  },
  {
    icon: Landmark,
    title: "Cash and bank",
    description:
      "Know your cash position across every bank account at a glance.",
    graphic: "cash",
    href: "/features/cash-and-bank",
  },
  {
    icon: BarChart3,
    title: "Clear reports",
    description:
      "Profit and loss, balance sheet, cash flow and aging, ready for you or your accountant.",
    graphic: "reports",
    href: "/features/reports",
  },
];

export const audienceItems: AudienceItem[] = [
  {
    icon: Banknote,
    title: "Consulting firms",
    description:
      "Bill engagements and retainers, and see which clients drive your profit.",
    href: "/who-its-for/consulting-firms",
  },
  {
    icon: FileText,
    title: "Law firms",
    description:
      "Invoice by matter, track fees and disbursements, and follow up on unpaid bills.",
    href: "/who-its-for/law-firms",
  },
  {
    icon: Database,
    title: "Tech and software companies",
    description:
      "Bill projects, monthly support contracts and subscriptions in one place.",
    href: "/who-its-for/tech-and-software-companies",
  },
  {
    icon: Repeat,
    title: "Marketing and creative agencies",
    description:
      "Retainers, project fees and client expenses without the spreadsheet chaos.",
    href: "/who-its-for/marketing-and-creative-agencies",
  },
  {
    icon: Landmark,
    title: "Accounting and audit practices",
    description:
      "Keep your own firm's books as tidy as your clients'.",
    href: "/who-its-for/accounting-audit-and-tax-practices",
  },
  {
    icon: PieChart,
    title: "Architects, engineers and IT services",
    description: "Milestone billing and project costs, all accounted for.",
    href: "/who-its-for/architects-and-engineering-firms",
  },
];

export const setupSteps = [
  {
    title: "Setup",
    description:
      "We install and configure QuickAccounts around how your firm bills and gets paid.",
  },
  {
    title: "Data transfer",
    description:
      "We bring over your clients, vendors and opening balances from Excel, QuickBooks or other software.",
  },
  {
    title: "Team training",
    description:
      "We walk your team through the parts of QuickAccounts they'll use every day.",
  },
  {
    title: "Optional small changes",
    description:
      "If you need a small adjustment, we agree the scope and cost with you first.",
  },
];

export const processSteps = [
  {
    title: "Tell us how your firm bills",
    description:
      "A short call about your clients, fees and how you get paid.",
    details: [
      "Review how you bill today",
      "Agree what you want to track",
      "Plan a simple setup",
    ],
  },
  {
    title: "Pick your plan",
    description:
      "Online for your whole team, or offline on your own computer.",
    details: [
      "See the product in a free demo",
      "Online: $850 one time, plus $40/month hosting",
      "Offline: $1,200 one time, for one user",
    ],
  },
  {
    title: "We set it up and train you",
    description:
      "We bring in your clients, open balances and invoice templates, then walk your team through it.",
    details: [
      "Set up your invoice templates",
      "Bring in clients and open balances",
      "Train your team",
    ],
  },
  {
    title: "Start billing",
    description: "Invoice, track and report from day one.",
    details: [
      "Send your first invoice",
      "Record payments and expenses",
      "Get help when you need it",
    ],
  },
];

export const pricingPlans = [
  {
    name: "Free Demo",
    description:
      "See QuickAccounts in a free walkthrough built around how your firm works.",
    price: "Free",
    suffix: "guided demo",
    note: "No obligation",
    cta: "Try the Free Demo",
    message: "Hi, I'd like to book a QuickAccounts demo for my firm.",
    isDemo: true,
    isPopular: false,
    features: [
      "Client invoicing and recurring retainers",
      "Expenses, vendor bills and cash",
      "Client balances and overdue follow-up",
      "Profit by client or project",
      "Profit and loss, balance sheet and cash flow",
      "Talk through optional customization",
    ],
  },
  {
    name: "Online",
    description: "For firms with partners, staff or remote teams.",
    price: "$850",
    suffix: "one-time license",
    note: "Plus $40/month for hosting",
    cta: "Ask About the Online Plan",
    message:
      "Hi, I'm interested in the online QuickAccounts plan for $850 plus $40/month hosting.",
    isDemo: false,
    isPopular: true,
    features: [
      "Unlimited users",
      "Secure cloud hosting",
      "Automatic backups",
      "Setup and training included",
      "No yearly software renewal",
      "Customizations quoted separately",
    ],
  },
  {
    name: "Offline",
    description:
      "For solo consultants and practitioners who want data on their own computer.",
    price: "$1,200",
    suffix: "one-time license",
    note: "1 user · no monthly hosting",
    cta: "Ask About the Offline Plan",
    message: "Hi, I'm interested in the offline QuickAccounts plan for $1,200.",
    isDemo: false,
    isPopular: false,
    features: [
      "1 user",
      "Your data on your own hardware",
      "Setup and training included",
      "No yearly software renewal",
      "Customizations quoted separately",
    ],
  },
];

export const partnerOptions = [
  {
    title: "Referral Partner",
    rate: "3–5%",
    description:
      "Recommend QuickAccounts to the firms you work with. We handle the demo, sale, setup and support.",
  },
  {
    title: "Certified Reseller",
    rate: "3–5%",
    description:
      "Sell QuickAccounts directly and support service firms in your market.",
  },
];

export const faqItems = [
  {
    question: "Do I need to know accounting to use QuickAccounts?",
    answer:
      "No. It's built for founders and partners, not accountants. If you can send an invoice, you can use it, and we train you.",
  },
  {
    question: "What kinds of firms use it?",
    answer:
      "Consulting firms, law firms, tech and software companies, agencies, IT service providers, accounting practices, architects and other professional services.",
  },
  {
    question: "Can I bill hourly, fixed fee and retainers?",
    answer:
      "Yes. Bill however you charge clients, and set up recurring invoices for monthly retainers and support contracts.",
  },
  {
    question: "Can I see profit by client or project?",
    answer:
      "Yes. Tag income and expenses to a client or project and see what each one earns.",
  },
  {
    question: "Can my accountant use it too?",
    answer:
      "Yes. Give them access, or export your reports and ledgers.",
  },
  {
    question: "Can I move my data from Excel, QuickBooks or other software?",
    answer:
      "Yes. We bring over your clients, vendors and opening balances as part of setup.",
  },
  {
    question: "How many people can use it?",
    answer: "Online plan: unlimited users. Offline plan: one user.",
  },
  {
    question: "Is there a yearly fee?",
    answer:
      "No software renewal fee on either plan. The online plan has a $40/month hosting fee.",
  },
  {
    question: "Can you customise it for my firm?",
    answer:
      "Small changes are possible. We agree the scope and cost with you first.",
  },
];
