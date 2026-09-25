import Image from "next/image";

import { WHATSAPP_CONTACT_URL } from "@/lib/contact";

const productLinks = [
  ["QuickAccounts", "#quickaccounts"],
  ["Features", "#features"],
  ["Pricing", "#pricing"],
  ["FAQs", "#faq"],
];

const companyLinks = [
  ["Partner program", "#partners"],
  ["How it works", "#process"],
  ["Book a demo", WHATSAPP_CONTACT_URL],
];

export const SiteFooter = () => (
  <footer className="qa-footer">
    <div className="qa-container qa-footer-main">
      <div className="qa-footer-brand">
        <Image
          src="/assets/dotcode-logo-light.png"
          width={1711}
          height={530}
          alt="Dotcode"
        />
        <p>
          QuickAccounts by Dotcode.
          <br />
          Practical software, set up for the way you work.
        </p>
        <span>Lahore, Pakistan · Serving businesses worldwide</span>
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
      <div className="qa-footer-contact">
        <p>Contact</p>
        <a href="mailto:hello@dotcode.dev">hello@dotcode.dev</a>
        <span>Wholesale accounting software</span>
        <span>Setup, migration and training</span>
      </div>
    </div>
    <div className="qa-container qa-footer-bottom">
      <p>© {new Date().getFullYear()} Dotcode. All rights reserved.</p>
      <p>QuickAccounts · Unlimited users</p>
    </div>
  </footer>
);
