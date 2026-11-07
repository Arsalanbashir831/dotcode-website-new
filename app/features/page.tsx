import type { Metadata } from "next";
import Link from "next/link";

import { MarketingHeader } from "@/components/landing/sections/marketing-header";
import { SiteFooter } from "@/components/landing/sections/site-footer";
import { JsonLd } from "@/components/seo/json-ld";
import { pageSchema } from "@/lib/seo";

const description =
  "Client invoicing, time and fee billing, recurring retainers, expense tracking and clear reports for service businesses.";

export const metadata: Metadata = {
  title: "Invoicing, Retainers & Project Profitability",
  description,
  alternates: { canonical: "/features" },
};

const features = [
  [
    "Client invoicing",
    "/features/client-invoicing",
    "Create branded invoices in seconds, add your terms and bank details, and record payments as they arrive."
  ],
  [
    "Time and fee billing",
    "/features/time-and-fee-billing",
    "Hourly rates, fixed fees, milestones or retainers. Turn billable work into invoices without retyping anything."
  ],
  [
    "Recurring billing",
    "/features/recurring-billing",
    "Set up monthly retainers, support contracts and subscriptions once. QuickAccounts sends them on schedule."
  ],
  [
    "Client balances",
    "/features/client-balances",
    "Every client has a running balance with invoices, payments and credits in date order. Aging shows who to chase first."
  ],
  [
    "Expense tracking",
    "/features/expense-tracking",
    "Log salaries, rent, software, travel and client-billable expenses by category and by project."
  ],
  [
    "Project profitability",
    "/features/project-profitability",
    "Compare what each client, matter or project earns against what it costs, so you price the next one right."
  ],
  [
    "Cash and bank",
    "/features/cash-and-bank",
    "Track every bank account and cash balance in one view. Record deposits, payments and transfers in a few clicks."
  ],
  [
    "Vendor bills",
    "/features/vendor-bills",
    "Record bills from contractors, landlords and software vendors, and see what's due this week."
  ],
  [
    "Reports",
    "/features/reports",
    "Profit and loss, balance sheet, cash flow and receivables aging, ready for partners, investors or your accountant."
  ],
  [
    "Multi-office",
    "/features/multi-office",
    "See each office's revenue, costs and cash separately or for the whole firm."
  ]
] as const;

export default function FeaturesPage() {
  return (
    <main className="qa-site seo-page">
      <JsonLd data={pageSchema({ path: "/features", name: "QuickAccounts features", description, type: "CollectionPage" })} />
      <MarketingHeader />
      <article className="qa-container seo-content blog-content">
        <nav className="seo-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Features</span></nav>
        <p className="qa-eyebrow">Features</p>
        <h1>Simple accounting tools for firms that bill clients</h1>
        <p className="seo-intro">QuickAccounts covers the money side of a service business, from the first invoice to the year-end report, without the complexity.</p>
        <div className="seo-hub-grid">
          {features.map(([title, href, summary]) => <section key={href}><h2><Link href={href}>{title}</Link></h2><p>{summary}</p></section>)}
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
