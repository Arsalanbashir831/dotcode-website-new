import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Check, Code2, Download, FileText, MapPin } from "lucide-react";

import { MarketingHeader } from "@/components/landing/sections/marketing-header";
import { SiteFooter } from "@/components/landing/sections/site-footer";
import { JsonLd } from "@/components/seo/json-ld";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { pageSchema } from "@/lib/seo";

const description =
  "Dotcode is operated by Lordevs LLC through its New Mexico branch, with product engineering, implementation and support delivered by the Dotcode Pakistan Branch in Lahore.";

const LORDEVS_FORMATION_PATH = "/assets/lordevs-llc-formation-document.pdf";
const DOTCODE_INCORPORATION_PATH = "/assets/dotcode-smc-private-limited-incorporation-certificate.pdf";

export const metadata: Metadata = {
  title: "Our Company",
  description,
  alternates: { canonical: "/company" },
  openGraph: {
    title: "Our Company | Dotcode Solutions",
    description:
      "Learn about Dotcode's parent company Lordevs LLC in New Mexico and the Dotcode Pakistan Branch in Lahore.",
    url: "/company",
  },
};

export default function CompanyPage() {
  return (
    <main className="qa-site seo-page company-page" id="top">
      <JsonLd
        data={pageSchema({
          path: "/company",
          name: "Our Company",
          description,
          type: "AboutPage",
        })}
      />
      <MarketingHeader />
      <article>
        <section className="seo-hero">
          <div className="qa-container">
            <nav className="seo-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Our Company</span>
            </nav>
            <p className="qa-eyebrow">Our company</p>
            <h1>The company behind Dotcode</h1>
            <p className="seo-intro">
              Dotcode is inventory, POS, serial-number, warranty and accounting
              software for electronics and hardware distributors. The company
              operates through two branches: Lordevs LLC in New Mexico and the
              Dotcode Pakistan Branch in Lahore, registered as Dotcode
              (SMC-Private) Limited.
            </p>
            <div className="seo-actions">
              <WhatsAppButton size="lg" label="Talk to our team" />
              <a href="#certificate">Company documents</a>
            </div>
            <ul className="seo-proof">
              <li><Check aria-hidden="true" />Parent company: Lordevs LLC</li>
              <li><Check aria-hidden="true" />US branch: New Mexico</li>
              <li><Check aria-hidden="true" />Product and delivery: Lahore, Pakistan</li>
            </ul>
          </div>
        </section>

        <div className="qa-container company-content">
          <section className="company-overview" aria-labelledby="company-overview-heading">
            <div>
              <p className="qa-eyebrow">Who we are</p>
              <h2 id="company-overview-heading">Software built around the way distributors work</h2>
              <p>
                Dotcode connects purchasing, sales, POS billing, warehouse
                stock, serial records, warranty and RMA, customer and supplier
                accounts, cash records and product service history in one
                system. It is built for electronics and hardware retailers,
                wholesalers and distributors who need to trace stock beyond a
                quantity on hand.
              </p>
              <p>
                Our teams own the product, the implementation and the support
                behind it. Standard setup, supported data migration and team
                training are included, and a guided demo is the best place to
                confirm how Dotcode fits your operation.
              </p>
              <div className="company-links">
                <Link href="/features">Explore the platform <ArrowRight aria-hidden="true" /></Link>
                <Link href="/implementation">Review implementation <ArrowRight aria-hidden="true" /></Link>
              </div>
            </div>
            <dl className="company-facts">
              <div><dt>Parent company</dt><dd>Lordevs LLC</dd></div>
              <div><dt>US branch</dt><dd>New Mexico, USA</dd></div>
              <div><dt>Pakistan entity</dt><dd>Dotcode (SMC-Private) Limited, Lahore</dd></div>
              <div><dt>Focus</dt><dd>Electronics and hardware distribution</dd></div>
            </dl>
          </section>

          <section className="company-branches" aria-labelledby="branches-heading">
            <div className="company-section-heading">
              <p className="qa-eyebrow">Our branches</p>
              <h2 id="branches-heading">Two branches, one operating team</h2>
            </div>
            <div className="company-branch-grid">
              <article className="company-branch">
                <span className="company-branch-tag">Parent company</span>
                <div className="company-branch-icon"><Building2 aria-hidden="true" /></div>
                <h3>Lordevs LLC</h3>
                <p className="company-branch-location"><MapPin aria-hidden="true" />New Mexico, USA</p>
                <p>
                  Lordevs LLC is the parent company of Dotcode. Our New Mexico
                  branch represents the company&apos;s United States presence
                  and the corporate side of the business, supporting customers
                  and partners who work with Dotcode internationally.
                </p>
                <ul>
                  <li>Parent company of the Dotcode brand</li>
                  <li>United States branch based in New Mexico</li>
                  <li>Corporate and commercial relationships</li>
                </ul>
              </article>
              <article className="company-branch">
                <span className="company-branch-tag">Product and delivery</span>
                <div className="company-branch-icon"><Code2 aria-hidden="true" /></div>
                <h3>Dotcode Pakistan Branch</h3>
                <p className="company-branch-location"><MapPin aria-hidden="true" />Lahore, Pakistan</p>
                <p>
                  The Dotcode Pakistan Branch is where the platform is built and
                  delivered. Registered in Pakistan as Dotcode (SMC-Private)
                  Limited, the Lahore team works across product engineering,
                  implementation, supported migration, team training and
                  ongoing customer support.
                </p>
                <ul>
                  <li>Product engineering and development</li>
                  <li>Implementation, migration and training</li>
                  <li>Day-to-day customer support</li>
                </ul>
              </article>
            </div>
          </section>

          <section className="company-certificate" id="certificate" aria-labelledby="certificate-heading">
            <div>
              <p className="qa-eyebrow">Corporate information</p>
              <h2 id="certificate-heading">Company registration documents</h2>
              <p>
                Download the incorporation documents for Lordevs LLC, the parent
                company behind Dotcode, and Dotcode (SMC-Private) Limited, the
                company&apos;s Pakistan entity. Both are provided as PDFs for
                customers, partners and procurement teams who need to verify
                corporate registration.
              </p>
              <p className="company-certificate-meta">PDF · Public corporate records</p>
            </div>
            <div className="company-documents">
              <a className="company-document" href={LORDEVS_FORMATION_PATH} download>
                <span className="company-document-icon"><FileText aria-hidden="true" /></span>
                <span className="company-document-copy">
                  <strong>Lordevs LLC formation document</strong>
                  <small>New Mexico Articles of Organization · Filed November 2025</small>
                </span>
                <Download aria-hidden="true" />
              </a>
              <a className="company-document" href={DOTCODE_INCORPORATION_PATH} download>
                <span className="company-document-icon"><FileText aria-hidden="true" /></span>
                <span className="company-document-copy">
                  <strong>Dotcode (SMC-Private) Limited certificate</strong>
                  <small>SECP certificate of incorporation · January 2026</small>
                </span>
                <Download aria-hidden="true" />
              </a>
            </div>
          </section>

          <section className="company-cta" aria-labelledby="company-cta-heading">
            <div>
              <p className="qa-eyebrow">Work with us</p>
              <h2 id="company-cta-heading">Talk to the team behind Dotcode</h2>
              <p>
                See how Dotcode handles your stock, serials, warranty and
                account records in a guided demo, or reach out to either branch.
              </p>
            </div>
            <div className="company-cta-actions">
              <WhatsAppButton size="lg" theme="orange" label="Book a guided demo" />
              <a href="mailto:info@dotcodesolutions.com">info@dotcodesolutions.com</a>
            </div>
          </section>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
