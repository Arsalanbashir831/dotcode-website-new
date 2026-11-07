import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  Building2,
  Check,
  GitBranch,
  ReceiptText,
  ShoppingCart,
  Users,
} from "lucide-react";

import { MarketingHeader } from "@/components/landing/sections/marketing-header";
import { SiteFooter } from "@/components/landing/sections/site-footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { getWhatsAppContactUrl } from "@/lib/contact";

const pageUrl = "https://dotcodesolutions.com/custom-erp-development";
const publishedDate = "2026-10-17";
const contactUrl = getWhatsAppContactUrl(
  "Hi, I’d like to discuss custom ERP development for my business.",
);

export const metadata: Metadata = {
  title: "Custom ERP Development",
  description:
    "Build custom ERP software for accounting, sales, purchase orders, teams, outlets and business-specific workflows with Dotcode Solutions.",
  keywords: [
    "custom ERP development",
    "custom business software development",
    "ERP software for internal operations",
    "custom accounting ERP",
    "sales and purchase order software",
    "team and outlet management software",
    "custom workflow software",
  ],
  alternates: { canonical: "/custom-erp-development" },
  openGraph: {
    title: "Custom ERP Development | Dotcode Solutions",
    description:
      "Custom business software shaped around your accounting, sales, purchasing, team, outlet and operational workflows.",
    url: "/custom-erp-development",
    type: "website",
  },
};

const modules = [
  {
    icon: BarChart3,
    title: "Accounting",
    body: "Connect charts of accounts, journals, expenses, payments, receivables and management reports to the transactions that create them.",
  },
  {
    icon: ReceiptText,
    title: "Sales",
    body: "Manage quotations, orders, invoices, returns, customer balances, pricing rules and approval steps in one sales workflow.",
  },
  {
    icon: ShoppingCart,
    title: "Purchase orders",
    body: "Control supplier requests, purchase orders, receiving, bills, payments and approvals with a traceable purchasing record.",
  },
  {
    icon: Users,
    title: "Team management",
    body: "Give each role the right access, assign work, track responsibility and keep operational activity connected to accountable users.",
  },
  {
    icon: Building2,
    title: "Outlet management",
    body: "Coordinate outlets, branches, warehouses, stock locations, transfers and location-level performance from one business system.",
  },
  {
    icon: GitBranch,
    title: "Custom business workflows",
    body: "Turn your approvals, exceptions, calculations, documents and handoffs into software that follows how your business operates.",
  },
];

const processSteps = [
  {
    name: "Map the operation",
    text: "Document users, records, approvals, exceptions, reports and integrations before defining the software scope.",
  },
  {
    name: "Define the first release",
    text: "Prioritize the modules and workflows that create the clearest operational value for the initial release.",
  },
  {
    name: "Design and build",
    text: "Create the interface, data model, permissions, automation and integrations in reviewable development stages.",
  },
  {
    name: "Test with real workflows",
    text: "Validate realistic scenarios with business users, correct gaps and prepare approved data for launch.",
  },
  {
    name: "Launch and improve",
    text: "Deploy the system, train users, monitor adoption and plan improvements from actual operational feedback.",
  },
];

const faqs = [
  {
    id: "what-is-custom-erp-development",
    question: "What is custom ERP development?",
    answer: "Custom ERP development creates business software around a company’s real processes, roles and data. The system can connect accounting, sales, purchasing, teams, outlets and specialized workflows without forcing every operation into a generic product structure.",
  },
  {
    id: "who-needs-custom-erp",
    question: "Which businesses need a custom ERP?",
    answer: "A custom ERP suits businesses with distinctive approvals, pricing, reporting, multi-location operations or industry-specific records. It is especially useful when spreadsheets and disconnected applications cause repeated entry, weak visibility or process gaps across departments.",
  },
  {
    id: "modules-in-custom-erp",
    question: "Which modules can a custom ERP include?",
    answer: "A custom ERP can include accounting, sales, purchase orders, inventory, team management, outlet management, reporting and custom workflows. The final module set should follow business priorities, user roles, compliance needs and the agreed first-release scope.",
  },
  {
    id: "custom-accounting-module",
    question: "Can the ERP include custom accounting?",
    answer: "Yes. A custom accounting module can cover ledgers, journals, expenses, receivables, payables, payments and financial reports. Accounting rules, currencies, taxes and approval controls must be defined during discovery and reviewed by the business’s finance specialists.",
  },
  {
    id: "sales-management-module",
    question: "Can the system manage sales operations?",
    answer: "Yes. Custom sales software can manage leads, quotations, sales orders, invoices, returns, pricing and customer balances. Permissions and approval rules can reflect sales teams, customer types, branches and the documents used in daily operations.",
  },
  {
    id: "purchase-order-management",
    question: "How does purchase order management work?",
    answer: "Purchase order management can connect supplier requests, approvals, orders, receiving, bills and payments. Each stage creates a traceable record, helping authorized users see what was requested, approved, received, invoiced and still outstanding.",
  },
  {
    id: "team-management-features",
    question: "What team management features are available?",
    answer: "Team management can include user roles, permissions, assignments, attendance, targets, approvals and activity histories. The exact features depend on whether the business needs operational coordination, human resources records, performance tracking or a combination of those functions.",
  },
  {
    id: "multiple-outlets",
    question: "Can one ERP manage multiple outlets?",
    answer: "Yes. One ERP can manage multiple outlets, branches or warehouses with location-specific permissions and records. Businesses can coordinate stock, sales, purchasing, transfers, cash activity and performance reporting while maintaining a consolidated operational view.",
  },
  {
    id: "custom-workflows",
    question: "Can Dotcode build custom business workflows?",
    answer: "Yes. Dotcode can translate defined approvals, calculations, documents, alerts, exceptions and handoffs into custom software workflows. Discovery is used to identify edge cases and confirm which decisions remain manual and which steps should be automated.",
  },
  {
    id: "integrate-existing-tools",
    question: "Can custom ERP software integrate existing tools?",
    answer: "Custom ERP software can integrate suitable accounting platforms, payment services, ecommerce systems, messaging tools or internal applications through available APIs and supported data formats. Integration feasibility depends on access, documentation, security requirements and the external provider’s limitations.",
  },
  {
    id: "erp-development-process",
    question: "What is the custom ERP development process?",
    answer: "The process starts with workflow discovery and scope definition. Dotcode then designs, builds and reviews the system in stages, tests realistic business scenarios, prepares approved data, trains users and supports a controlled launch with planned improvements.",
  },
  {
    id: "erp-development-time",
    question: "How long does custom ERP development take?",
    answer: "Delivery time depends on module count, workflow complexity, integrations, data migration and review speed. Dotcode estimates the schedule after discovery and can phase delivery so the business starts with a focused release before adding lower-priority capabilities.",
  },
  {
    id: "migrate-existing-data",
    question: "Can existing business data be migrated?",
    answer: "Supported data can be migrated after its format, quality, ownership and required history are reviewed. A migration plan defines field mapping, cleanup responsibility, validation and cutover steps. Unsupported or inconsistent source data may require additional preparation.",
  },
  {
    id: "erp-security-permissions",
    question: "How are security and permissions handled?",
    answer: "Security is designed around user roles, access boundaries, authentication, audit requirements and deployment needs. The agreed architecture can include role-based permissions, activity records, backups and protected integrations, with controls matched to the system’s risks and data sensitivity.",
  },
  {
    id: "start-custom-erp-project",
    question: "How do we start a custom ERP project?",
    answer: "Start by sharing the operational problems, current tools, user groups, required modules and highest-priority workflows. Dotcode can use an initial consultation to identify the discovery scope, technical constraints and a practical path toward the first release.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Custom ERP Development",
  serviceType: "Custom ERP and business software development",
  url: pageUrl,
  description:
    "Custom ERP development for accounting, sales, purchase orders, team management, outlet management and business-specific workflows.",
  provider: {
    "@type": "Organization",
    "@id": "https://dotcodesolutions.com/#organization",
    name: "Dotcode Solutions",
    url: "https://dotcodesolutions.com",
  },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Custom ERP modules",
    itemListElement: modules.map((module) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: module.title, description: module.body },
    })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  datePublished: publishedDate,
  dateModified: publishedDate,
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    datePublished: publishedDate,
    dateModified: publishedDate,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dotcodesolutions.com" },
    { "@type": "ListItem", position: 2, name: "Custom ERP Development", item: pageUrl },
  ],
};

export default function CustomErpDevelopmentPage() {
  const schemas = [serviceSchema, faqSchema, breadcrumbSchema];

  return (
    <main className="qa-site custom-erp-page" id="top">
      {schemas.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      ))}
      <MarketingHeader />

      <article>
        <section className="custom-erp-hero">
          <div className="qa-container custom-erp-hero-grid">
            <div>
              <p className="qa-eyebrow">Custom ERP development</p>
              <h1>Business software built around your internal operations</h1>
              <p className="custom-erp-overview">
                Dotcode builds custom ERP applications that connect accounting, sales, purchase orders, teams, outlets and business-specific workflows. Each system is planned around the records, approvals and responsibilities your operation already depends on.
              </p>
              <p className="custom-erp-updated">Last updated: October 17, 2026</p>
              <div className="custom-erp-actions">
                <WhatsAppButton href={contactUrl} size="lg" label="Discuss your ERP" />
                <a href="#modules">Explore modules</a>
              </div>
            </div>
            <aside className="custom-erp-summary" aria-label="Custom ERP project summary">
              <p>One connected system</p>
              <h2>Your processes become the product blueprint.</h2>
              <ul>
                {["Role-based access", "Connected operational records", "Business-specific approvals", "Phased delivery and review"].map((item) => (
                  <li key={item}><Check aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="custom-erp-section" id="modules">
          <div className="qa-container">
            <div className="custom-erp-heading">
              <p className="qa-eyebrow">Core capabilities</p>
              <h2>Choose the modules your business actually needs</h2>
              <p>Custom ERP modules share one data foundation, so teams can work from connected records instead of rebuilding context across separate tools.</p>
            </div>
            <div className="custom-erp-modules">
              {modules.map(({ icon: Icon, title, body }) => (
                <article key={title}>
                  <span><Icon aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="custom-erp-section custom-erp-fit">
          <div className="qa-container custom-erp-split">
            <div className="custom-erp-heading">
              <p className="qa-eyebrow">When custom software fits</p>
              <h2>Build when standard software cannot represent the operation</h2>
            </div>
            <div>
              <p>Custom ERP development is appropriate when essential workflows create a lasting competitive or operational requirement.</p>
              <ul>
                <li>Teams repeat the same data across spreadsheets and disconnected applications.</li>
                <li>Approvals, pricing or documents follow rules that generic systems cannot represent cleanly.</li>
                <li>Multiple outlets need shared visibility with different permissions and responsibilities.</li>
                <li>Management reporting depends on combining records from several departments.</li>
                <li>The business needs ownership of a system that can evolve with its operations.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="custom-erp-section" id="development-process">
          <div className="qa-container">
            <div className="custom-erp-heading">
              <p className="qa-eyebrow">Development process</p>
              <h2>From operational discovery to a controlled launch</h2>
              <p>A phased process makes decisions reviewable before they become expensive to change.</p>
            </div>
            <ol className="custom-erp-process">
              {processSteps.map((step, index) => (
                <li key={step.name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{step.name}</h3><p>{step.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="custom-erp-section custom-erp-scope">
          <div className="qa-container custom-erp-split">
            <div className="custom-erp-heading">
              <p className="qa-eyebrow">Scope and evidence</p>
              <h2>A reliable estimate starts with documented workflows</h2>
            </div>
            <div>
              <p>Dotcode confirms the architecture, schedule and cost after reviewing users, records, approvals, integrations and migration needs.</p>
              <dl>
                <div><dt>Method</dt><dd>Discovery sessions, workflow mapping, prioritized requirements and staged reviews.</dd></div>
                <div><dt>Inputs</dt><dd>Existing forms, spreadsheets, reports, user roles, sample records and integration documentation.</dd></div>
                <div><dt>Output</dt><dd>An agreed first-release scope with modules, responsibilities, constraints and acceptance criteria.</dd></div>
                <div><dt>Limitation</dt><dd>Final estimates require business-specific discovery; the page does not promise a universal price or timeline.</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="custom-erp-section custom-erp-cta">
          <div className="qa-container">
            <p className="qa-eyebrow">Start with your workflow</p>
            <h2>Tell us what your business needs to run better</h2>
            <p>Share your current tools, required modules, user groups and the operational problems your custom ERP should solve.</p>
            <WhatsAppButton href={contactUrl} size="lg" label="Discuss your ERP" />
          </div>
        </section>

        <section className="custom-erp-section custom-erp-faq" id="frequently-asked-questions">
          <div className="qa-container">
            <div className="custom-erp-heading">
              <p className="qa-eyebrow">Frequently asked questions</p>
              <h2>Custom ERP development questions</h2>
              <p>Answers reviewed on October 17, 2026.</p>
            </div>
            <div className="custom-erp-faq-list">
              {faqs.map(({ id, question, answer }) => (
                <details id={`faq-${id}`} key={id}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <nav className="qa-container custom-erp-related" aria-label="Related services and software">
          <h2>Explore related pages</h2>
          <div>
            <Link href="/implementation">ERP implementation</Link>
            <Link href="/features/business-accounting">Business accounting</Link>
            <Link href="/features/multi-warehouse-inventory">Multi-warehouse inventory</Link>
            <Link href="/solutions/wholesale-inventory">Wholesale inventory software</Link>
          </div>
        </nav>
      </article>

      <SiteFooter />
    </main>
  );
}
