import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { MarketingHeader } from "@/components/landing/sections/marketing-header";
import { JsonLd } from "@/components/seo/json-ld";
import { pageSchema } from "@/lib/seo";

export type SeoLandingPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  path: string;
  description?: string;
  contentType?: "WebPage" | "BlogPosting";
  datePublished?: string;
  dateModified?: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  faqs: { question: string; answer: string }[];
};

type Evidence = {
  title: string;
  body: string;
  steps: [string, string][];
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  alt?: string;
  caption?: string;
};

const evidenceByPath: Record<string, Evidence> = {
  "/features/client-invoicing": {
    title: "From finished work to a paid invoice.",
    body: "Pick the client, add the fee, and QuickAccounts builds an invoice with your logo, terms and bank details. When the money arrives, you record the payment against the same invoice.",
    steps: [["Create", "Choose the client and add the work you are billing."], ["Send", "Share a branded invoice with your terms and payment details."], ["Record", "Log the payment so the client balance stays right."]],
  },
  "/features/time-and-fee-billing": {
    title: "One way to bill, however you charge.",
    body: "Some clients pay by the hour, others by milestone or a fixed fee. Each one can be billed from the same place, without retyping hours or amounts into a separate document.",
    steps: [["Choose", "Hourly, fixed fee, milestone or retainer."], ["Bill", "Turn the billable work into an invoice."], ["Track", "See what has been billed and what is still to come."]],
  },
  "/features/recurring-billing": {
    title: "Set it up once. It bills every month.",
    body: "Retainers, support contracts and subscriptions repeat on a schedule. Set the client, amount and day once, and the invoice goes out each period without anyone remembering to raise it.",
    steps: [["Set up", "Pick the client, amount and schedule."], ["Invoice", "QuickAccounts creates and sends it on time."], ["Follow", "Watch payments land against each retainer."]],
  },
  "/features/client-balances": {
    title: "A client account you can read at a glance.",
    body: "Each client has one running balance. Invoices, payments and credits sit in date order, so you can see what is owed without rebuilding the account from several files.",
    steps: [["Post", "Record the invoice, payment or credit."], ["Review", "See the running balance in date order."], ["Follow up", "Use aging to see who to chase first."]],
    image: "/assets/feature5-ledger.png", imageWidth: 1672, imageHeight: 941,
    alt: "QuickAccounts client ledger showing invoices, payments, balances and aging",
    caption: "Demo screen: a client ledger with transaction history and balance summaries.",
  },
  "/features/expense-tracking": {
    title: "Every cost, in the right place.",
    body: "Record salaries, rent, software, travel and client-billable expenses by category and by project. Month-end stops being a hunt through receipts and bank statements.",
    steps: [["Record", "Log the expense with a category."], ["Tag", "Link it to a client or project where it applies."], ["Review", "See where the money went, by category."]],
  },
  "/features/project-profitability": {
    title: "See what each client or project really earns.",
    body: "Tag income and expenses to a client, matter or project. QuickAccounts then compares what came in against what it cost, so the next quote is based on real margins.",
    steps: [["Tag", "Link income and expenses to a client or project."], ["Compare", "See revenue against cost side by side."], ["Price", "Use real margins to price the next job."]],
  },
  "/features/cash-and-bank": {
    title: "Every account in one view.",
    body: "Bank accounts and cash balances are listed together, with deposits, payments and transfers recorded in a few clicks. You always know what you can spend this week.",
    steps: [["Add", "Set up each bank account and cash balance."], ["Record", "Log deposits, payments and transfers."], ["See", "Check your total cash position at a glance."]],
  },
  "/features/vendor-bills": {
    title: "Know what is due, before it is late.",
    body: "Enter bills from contractors, landlords and software vendors as they arrive. A simple list shows what is due this week, so nothing is paid late or twice.",
    steps: [["Enter", "Record each bill from your vendors."], ["Schedule", "See what is due and when."], ["Pay", "Record the payment against the bill."]],
  },
  "/features/reports": {
    title: "Reports that are ready when you need them.",
    body: "Profit and loss, balance sheet, cash flow and receivables aging update as you record work. Share them with partners or investors, or send them straight to your accountant.",
    steps: [["Record", "Invoices, payments and expenses flow into the books."], ["Open", "Pick the report you need."], ["Share", "Send it to partners, investors or your accountant."]],
  },
  "/features/multi-office": {
    title: "Each office on its own, or all together.",
    body: "Set up each office as its own location. Revenue, costs and cash can be viewed per office for local managers, or combined for the whole firm.",
    steps: [["Add", "Create a record for each office."], ["Record", "Tag income and expenses to the right office."], ["Compare", "View one office or the whole firm."]],
  },
};

const defaultEvidence: Evidence = {
  title: "A clear trail from invoice to payment.",
  body: "A firm can raise an invoice for a client, record the payment when it arrives, track the costs behind the work and see the margin afterwards, all in one place instead of separate spreadsheets.",
  steps: [["Bill", "Invoice the client for fees, hours or a retainer."], ["Track", "Record payments and expenses as they happen."], ["Report", "See profit by client and project."]],
};

export function SeoLandingPage({
  eyebrow,
  title,
  intro,
  path,
  description,
  contentType = "WebPage",
  datePublished,
  dateModified,
  sections,
  faqs,
}: SeoLandingPageProps) {
  const section = path.split("/").filter(Boolean)[0];
  const sectionHubs: Record<string, { label: string; href: string }> = {
    features: { label: "Features", href: "/features" },
    "who-its-for": { label: "Who it's for", href: "/who-its-for" },
  };
  const hub = sectionHubs[section];
  const evidence = evidenceByPath[path] ?? defaultEvidence;

  return (
    <main className="qa-site seo-page" id="top">
      <JsonLd data={pageSchema({ path, name: title, description: description ?? intro, type: contentType, datePublished, dateModified })} />
      <MarketingHeader />
      <article>
        <section className="seo-hero">
          <div className="qa-container">
            <nav className="seo-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              {hub ? <><span aria-hidden="true">/</span><Link href={hub.href}>{hub.label}</Link></> : null}
              <span aria-hidden="true">/</span><span aria-current="page">{title}</span>
            </nav>
            <p className="qa-eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="seo-intro">{intro}</p>
            {contentType === "BlogPosting" ? (
              <p className="seo-byline">Reviewed by Dotcode Solutions Product Team · Updated October 17, 2026</p>
            ) : null}
            <div className="seo-actions">
              <WhatsAppButton size="lg" />
              <Link href="/#contact">Book a free demo</Link>
            </div>
            <ul className="seo-proof">
              {["Free demo", "Unlimited users online", "Setup and training included"].map((item) => (
                <li key={item}><Check aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>
        </section>
        <div className="qa-container seo-content">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
              {section.bullets ? (
                <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
              ) : null}
            </section>
          ))}
          <section className={`seo-evidence${evidence.image ? "" : " seo-evidence-text"}`} aria-labelledby="product-evidence-heading">
            <div>
              <p className="qa-eyebrow">How it works</p>
              <h2 id="product-evidence-heading">{evidence.title}</h2>
              <p>{evidence.body}</p>
              <ol>
                {evidence.steps.map(([label, text]) => <li key={label}><strong>{label}:</strong> {text}</li>)}
              </ol>
            </div>
            {evidence.image ? (
              <figure>
                <Image src={evidence.image} alt={evidence.alt ?? ""} width={evidence.imageWidth} height={evidence.imageHeight} sizes="(max-width: 900px) 100vw, 48vw" />
                <figcaption>{evidence.caption}</figcaption>
              </figure>
            ) : null}
          </section>
          <nav className="seo-related-links" aria-label="Related QuickAccounts pages">
            <h2>Explore more of QuickAccounts</h2>
            <div>
              <Link href="/features/client-invoicing">Client invoicing</Link>
              <Link href="/features/recurring-billing">Recurring billing</Link>
              <Link href="/features/client-balances">Client balances</Link>
              <Link href="/features/project-profitability">Project profitability</Link>
              <Link href="/features/reports">Reports</Link>
              <Link href="/who-its-for">Who it&apos;s for</Link>
            </div>
          </nav>
          <section className="seo-cta">
            <h2>See whether QuickAccounts fits your firm</h2>
            <p>Get a free walkthrough built around how your firm bills clients, then choose a plan.</p>
            <WhatsAppButton size="lg" />
          </section>
          <section className="seo-faq" aria-labelledby="seo-faq-heading">
            <h2 id="seo-faq-heading">Frequently asked questions</h2>
            {faqs.map(({ question, answer }) => (
              <details key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </section>
        </div>
      </article>
      <footer className="qa-footer"><div className="qa-container qa-footer-bottom">
        <p>© {new Date().getFullYear()} Dotcode Solutions</p>
        <Link href="/company">Our company</Link>
        <Link href="/">QuickAccounts home</Link>
        <a href="mailto:info@dotcodesolutions.com">info@dotcodesolutions.com</a>
      </div></footer>
    </main>
  );
}
