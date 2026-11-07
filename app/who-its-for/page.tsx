import type { Metadata } from "next";
import Link from "next/link";

import { MarketingHeader } from "@/components/landing/sections/marketing-header";
import { SiteFooter } from "@/components/landing/sections/site-footer";
import { JsonLd } from "@/components/seo/json-ld";
import { pageSchema } from "@/lib/seo";

const description =
  "Accounting built for consulting firms, law firms, software companies, agencies, IT services and accounting practices.";

export const metadata: Metadata = {
  title: "Accounting Software for Professional Services",
  description,
  alternates: { canonical: "/who-its-for" },
};

const audiences = [
  [
    "Consulting firms",
    "/who-its-for/consulting-firms",
    "Bill every engagement, see every margin. Invoice retainers and project fees, track consultant costs and travel, and see which clients are most profitable."
  ],
  [
    "Law firms",
    "/who-its-for/law-firms",
    "Billing and books by matter. Invoice by client and matter, record fees and disbursements, track retainers received and chase overdue bills."
  ],
  [
    "Tech and software companies",
    "/who-its-for/tech-and-software-companies",
    "Projects, support contracts and subscriptions in one place. Bill development milestones, monthly support and SaaS subscriptions, and track salaries and cloud costs against revenue."
  ],
  [
    "IT services and managed service providers",
    "/who-its-for/it-services-and-managed-service-providers",
    "Recurring contracts, billed automatically. Monthly support retainers invoice themselves, while one-off projects and hardware pass-throughs stay easy to bill."
  ],
  [
    "Marketing, design and creative agencies",
    "/who-its-for/marketing-and-creative-agencies",
    "Retainers and project fees, without the chaos. Bill monthly retainers and campaign fees, track freelancer and ad costs, and see each client's real margin."
  ],
  [
    "Accounting, audit and tax practices",
    "/who-its-for/accounting-audit-and-tax-practices",
    "Run your own firm's books as well as your clients'. Bill engagements and annual fees, track staff costs and keep your firm's reports ready."
  ],
  [
    "Architects and engineering firms",
    "/who-its-for/architects-and-engineering-firms",
    "Milestone billing made simple. Invoice by project stage, track subcontractor and site costs, and keep project cash flow positive."
  ],
  [
    "Recruitment and staffing agencies",
    "/who-its-for/recruitment-and-staffing-agencies",
    "Placement fees and contractor billing, sorted. Invoice placement fees and contractor hours, and track what you pay out against what you bill."
  ],
  [
    "Training, coaching and education providers",
    "/who-its-for/training-coaching-and-education-providers",
    "Course fees in, costs out. Bill workshops, programmes and corporate training, and track trainer and venue costs."
  ]
] as const;

export default function WhoItsForPage() {
  return (
    <main className="qa-site seo-page">
      <JsonLd data={pageSchema({ path: "/who-its-for", name: "Who QuickAccounts is for", description, type: "CollectionPage" })} />
      <MarketingHeader />
      <article>
        <section className="seo-hero">
          <div className="qa-container">
            <nav className="seo-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Who it&apos;s for</span></nav>
            <p className="qa-eyebrow">Who it&apos;s for</p>
            <h1>Accounting software for firms that sell expertise</h1>
            <p className="seo-intro">When your business runs on people&apos;s time and know-how, the money side is about billing clients, controlling costs and getting paid on time. QuickAccounts makes that simple.</p>
          </div>
        </section>
        <div className="qa-container seo-content">
          <div className="seo-hub-grid industries-hub-grid">
            {audiences.map(([title, href, summary]) => <section key={href}><h2><Link href={href}>{title}</Link></h2><p>{summary}</p></section>)}
          </div>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
