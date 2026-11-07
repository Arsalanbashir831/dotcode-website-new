import Image from "next/image";

import { WHATSAPP_CONTACT_URL } from "@/lib/contact";

const productLinks = [
  ["QuickAccounts", "/#quickaccounts"],
  ["Features", "/#features"],
  ["Client invoicing", "/features/client-invoicing"],
  ["Client balances", "/features/client-balances"],
  ["Project profitability", "/features/project-profitability"],
  ["Reports", "/features/reports"],
  ["Pricing", "/pricing"],
  ["Custom software", "/custom-software"],
  ["FAQs", "/#faq"],
];

const industryLinks = [
  ["Consulting firms", "/who-its-for/consulting-firms"],
  ["Law firms", "/who-its-for/law-firms"],
  ["Tech and software companies", "/who-its-for/tech-and-software-companies"],
  ["Marketing and creative agencies", "/who-its-for/marketing-and-creative-agencies"],
  ["All industries", "/who-its-for"],
];

const companyLinks = [
  ["Our company", "/company"],
  ["Partner program", "/#partners"],
  ["How it works", "/#process"],
  ["Contact Us", WHATSAPP_CONTACT_URL],
];

export const SiteFooter = () => (
  <footer className="qa-footer">
    <div className="qa-container qa-footer-main">
      <div className="qa-footer-brand">
        <Image
          src="/assets/dotcode-logo-light.png"
          width={1711}
          height={530}
          alt="Dotcode Solutions"
        />
        <p>
          QuickAccounts by Dotcode Solutions.
          <br />
          Simple accounting for firms that sell expertise.
        </p>
        <span>Headquarters: Lahore, Pakistan</span>
        <span>Operations office: New Mexico, USA</span>
      </div>

      <nav aria-label="Product links">
        <p>Product</p>
        {productLinks.map(([label, href]) => (
          <a href={href} key={label}>
            {label}
          </a>
        ))}
      </nav>
      <nav aria-label="Company links">
        <p>Company</p>
        {companyLinks.map(([label, href]) => (
          <a
            href={href}
            key={label}
            {...(href === WHATSAPP_CONTACT_URL
              ? { rel: "noopener noreferrer", target: "_blank" }
              : {})}
          >
            {label}
          </a>
        ))}
      </nav>
      <nav aria-label="Who it's for">
        <p>Who it&apos;s for</p>
        {industryLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
      </nav>
      <div className="qa-footer-contact">
        <p>Contact</p>
        <span>Email</span>
        <a href="mailto:info@dotcodesolutions.com">info@dotcodesolutions.com</a>
        <span>WhatsApp</span>
        <a href={WHATSAPP_CONTACT_URL} target="_blank" rel="noopener noreferrer">+92 303 555 5992</a>
        <span>Accounting software for service firms</span>
        <span>Setup, data transfer and training</span>
      </div>
    </div>
    <div className="qa-container qa-footer-bottom">
      <p>© {new Date().getFullYear()} Dotcode Solutions. All rights reserved.</p>
      <p>QuickAccounts · One-time license</p>
    </div>
  </footer>
);
