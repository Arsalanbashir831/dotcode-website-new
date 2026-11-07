"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { WHATSAPP_DEMO_URL } from "@/lib/contact";

const menus = {
  Features: [
    { title: "Client invoicing", href: "/features/client-invoicing", description: "Branded invoices that get you paid faster." },
    { title: "Time and fee billing", href: "/features/time-and-fee-billing", description: "Hourly, fixed fee, milestone or retainer." },
    { title: "Recurring billing", href: "/features/recurring-billing", description: "Retainers that invoice themselves." },
    { title: "Client balances", href: "/features/client-balances", description: "See who owes you, and follow up." },
    { title: "Expense tracking", href: "/features/expense-tracking", description: "Know where your money goes." },
    { title: "Project profitability", href: "/features/project-profitability", description: "Know which clients are worth it." },
    { title: "Cash and bank", href: "/features/cash-and-bank", description: "Your cash position, always current." },
    { title: "Vendor bills", href: "/features/vendor-bills", description: "Stay on top of what you owe." },
    { title: "Reports", href: "/features/reports", description: "Your numbers, in plain view." },
    { title: "Multi-office", href: "/features/multi-office", description: "One firm, several offices." },
  ],
  "Who it's for": [
    { title: "Consulting firms", href: "/who-its-for/consulting-firms", description: "Bill every engagement, see every margin." },
    { title: "Law firms", href: "/who-its-for/law-firms", description: "Billing and books by matter." },
    { title: "Tech and software companies", href: "/who-its-for/tech-and-software-companies", description: "Projects, support and subscriptions in one place." },
    { title: "IT services and MSPs", href: "/who-its-for/it-services-and-managed-service-providers", description: "Recurring contracts, billed automatically." },
    { title: "Marketing and creative agencies", href: "/who-its-for/marketing-and-creative-agencies", description: "Retainers and project fees, without the chaos." },
    { title: "Accounting, audit and tax practices", href: "/who-its-for/accounting-audit-and-tax-practices", description: "Run your own firm's books too." },
    { title: "Architects and engineering firms", href: "/who-its-for/architects-and-engineering-firms", description: "Milestone billing made simple." },
    { title: "Recruitment and staffing agencies", href: "/who-its-for/recruitment-and-staffing-agencies", description: "Placement fees and contractor billing." },
    { title: "Training, coaching and education", href: "/who-its-for/training-coaching-and-education-providers", description: "Course fees in, costs out." },
  ],
} as const;

type MenuName = keyof typeof menus;

const menuSlug = (name: string) => name.toLowerCase().replace(/[^a-z]+/g, "-");

export function MarketingHeader() {
  const [activeMenu, setActiveMenu] = useState<MenuName | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setActiveMenu(null);
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenus = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  return (
    <header className="qa-header qa-marketing-header" ref={headerRef}>
      <div className="qa-container qa-nav">
        <Link href="/" aria-label="Dotcode home" onClick={closeMenus}>
          <Image src="/assets/dotcode-logo.png" width={1711} height={530} alt="Dotcode Solutions" priority className="qa-logo" />
        </Link>
        <nav id="main-navigation" className={`qa-nav-links qa-primary-nav ${mobileOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <Link href="/" onClick={closeMenus}>Home</Link>
          {(Object.keys(menus) as MenuName[]).map((menuName) => (
            <div
              className="qa-nav-menu"
              key={menuName}
              onMouseEnter={() => setActiveMenu(menuName)}
              onMouseLeave={() => setActiveMenu((current) => current === menuName ? null : current)}
              onFocus={() => setActiveMenu(menuName)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setActiveMenu(null);
              }}
            >
              <button
                type="button"
                className="qa-nav-trigger"
                aria-expanded={activeMenu === menuName}
                aria-controls={`mega-${menuSlug(menuName)}`}
                onClick={() => setActiveMenu((current) => current === menuName ? null : menuName)}
              >
                {menuName}<ChevronDown aria-hidden="true" />
              </button>
              <div id={`mega-${menuSlug(menuName)}`} className={`qa-mega-menu ${menuName === "Who it's for" ? "mega-wide" : ""} ${activeMenu === menuName ? "is-open" : ""}`}>
                <div className="qa-mega-inner">
                  <div className="qa-mega-intro">
                    <p className="qa-eyebrow">{menuName === "Features" ? "QuickAccounts features" : "Who it's for"}</p>
                    <h2>{menuName === "Features" ? "Simple tools for firms that bill clients." : "Built for firms that sell expertise."}</h2>
                    <Link href={menuName === "Features" ? "/features" : "/who-its-for"} onClick={closeMenus}>
                      {menuName === "Features" ? "Explore features" : "See who it's for"} <ArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="qa-mega-links">
                    {menus[menuName].map((item) => (
                      <Link href={item.href} key={item.href} onClick={closeMenus}>
                        <strong>{item.title}</strong>
                        <span>{item.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Link href="/pricing" onClick={closeMenus}>Pricing</Link>
          <Link href="/#process" onClick={closeMenus}>How it works</Link>
          <Link href="/company" onClick={closeMenus}>About</Link>
          <Link href="/#contact" onClick={closeMenus}>Contact Us</Link>
        </nav>
        <div className="qa-nav-actions">
          <WhatsAppButton href={WHATSAPP_DEMO_URL} className="qa-nav-demo" />
          <button type="button" className="qa-menu-button" onClick={() => setMobileOpen((open) => !open)} aria-controls="main-navigation" aria-expanded={mobileOpen} aria-label={mobileOpen ? "Close navigation" : "Open navigation"}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
