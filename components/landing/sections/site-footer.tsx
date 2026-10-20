import Image from "next/image";

import { WHATSAPP_CONTACT_URL } from "@/lib/contact";

const productLinks = [
  ["QuickAccounts", "/#quickaccounts"],
  ["Features", "/#features"],
  ["Wholesale inventory", "/solutions/wholesale-inventory"],
  ["Stock and accounts", "/features/business-accounting"],
  ["Multi-warehouse inventory", "/features/multi-warehouse-inventory"],
  ["Serial number tracking", "/features/serial-number-tracking"],
  ["Warranty and RMA", "/features/warranty-management"],
  ["Custom ERP development", "/custom-erp-development"],
  ["FAQs", "/#faq"],
];

const industryLinks = [
  ["Electronics distributors", "/industries/electronics-distributors"],
  ["Computer hardware wholesalers", "/industries/computer-hardware-wholesalers"],
  ["Multi-outlet retailers", "/industries/multi-outlet-retailers"],
  ["Merchandise wholesalers", "/industries/merchandise-wholesalers"],
];

const companyLinks = [
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
          Practical software, set up for the way you work.
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
      <nav aria-label="Industries served">
        <p>Industries</p>
        {industryLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
      </nav>
      <div className="qa-footer-contact">
        <p>Contact</p>
        <span>Email</span>
        <a href="mailto:arsalanbashir831@gmail.com">hell@dotcodesolutions.com</a>
        <span>WhatsApp</span>
        <a href={WHATSAPP_CONTACT_URL} target="_blank" rel="noopener noreferrer">+92 303 555 5992</a>
        <span>Wholesale accounting software</span>
        <span>Setup, migration and training</span>
      </div>
    </div>
    <div className="qa-container qa-footer-bottom">
      <p>© {new Date().getFullYear()} Dotcode Solutions. All rights reserved.</p>
      <p>QuickAccounts · Unlimited users</p>
    </div>
  </footer>
);
