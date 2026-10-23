"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { WHATSAPP_DEMO_URL } from "@/lib/contact";

const menus = {
  Features: [
    { title: "Wholesale inventory", href: "/solutions/wholesale-inventory", description: "Organize stock, purchases and customer accounts for trade." },
    { title: "Multi-warehouse inventory", href: "/features/multi-warehouse-inventory", description: "See stock across warehouses, outlets and branches." },
    { title: "Serial number tracking", href: "/features/serial-number-tracking", description: "Trace individual products from receiving to invoice lookup." },
    { title: "Warranty and RMA", href: "/features/warranty-management", description: "Connect warranty checks, returns and replacements to sales records." },
    { title: "Business accounting", href: "/features/business-accounting", description: "Keep cash, customer accounts and ledgers alongside stock." },
    { title: "POS system integration", href: "/features/pos-system-integration", description: "Sync counter sales with stock, serials and customer accounts." },
  ],
  Industries: [
    { title: "FMCG wholesalers & distributors", href: "/industries/fmcg-wholesalers-distributors", description: "High-volume stock, supplier purchasing and retailer accounts." },
    { title: "Clothing & garment trade", href: "/industries/clothing-garment-retailers-wholesalers", description: "Retail and wholesale stock across shops and warehouses." },
    { title: "Cosmetics & beauty distributors", href: "/industries/cosmetics-beauty-distributors", description: "Large catalogues, salon accounts and return records." },
    { title: "Automotive & motorcycle parts", href: "/industries/automotive-motorcycle-spare-parts", description: "Part lookup, counter sales and workshop accounts." },
    { title: "Grocery stores & supermarkets", href: "/industries/grocery-stores-supermarkets", description: "Counter sales synced with stock and replenishment." },
    { title: "Building materials & sanitary ware", href: "/industries/building-materials-tiles-sanitary-ware", description: "Bulk stock, site orders and contractor accounts." },
    { title: "Pharmaceutical & medical supply", href: "/industries/pharmaceutical-medical-supply", description: "Organized purchasing, sales and account records." },
    { title: "Footwear & leather goods", href: "/industries/footwear-leather-goods", description: "Retail and trade stock with invoice-linked exchanges." },
    { title: "Furniture & home furnishing", href: "/industries/furniture-home-furnishing", description: "Showroom and warehouse stock for high-value items." },
    { title: "Food & restaurant supply", href: "/industries/food-restaurant-supply", description: "Repeat wholesale orders and customer account balances." },
    { title: "Stationery & school supply", href: "/industries/stationery-school-supply", description: "Seasonal buying and institutional customer accounts." },
    { title: "Agricultural supply", href: "/industries/agricultural-supply", description: "Seasonal stock and dealer accounts across regions." },
    { title: "Electronics distributors", href: "/industries/electronics-distributors", description: "Serial traceability and after-sales workflows for electronics trade." },
    { title: "Computer hardware wholesalers", href: "/industries/computer-hardware-wholesalers", description: "Manage hardware stock, sales records and warranty inquiries." },
    { title: "Multi-outlet retailers", href: "/industries/multi-outlet-retailers", description: "Coordinate product records and accounts across retail branches." },
    { title: "General merchandise wholesalers", href: "/industries/merchandise-wholesalers", description: "Keep purchasing, stock and customer ledgers in one workflow." },
  ],
} as const;

type MenuName = keyof typeof menus;

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
          <Link href="/company" onClick={closeMenus}>Our Company</Link>
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
                aria-controls={`mega-${menuName.toLowerCase()}`}
                onClick={() => setActiveMenu((current) => current === menuName ? null : menuName)}
              >
                {menuName}<ChevronDown aria-hidden="true" />
              </button>
              <div id={`mega-${menuName.toLowerCase()}`} className={`qa-mega-menu ${menuName === "Industries" ? "mega-wide" : ""} ${activeMenu === menuName ? "is-open" : ""}`}>
                <div className="qa-mega-inner">
                  <div className="qa-mega-intro">
                    <p className="qa-eyebrow">QuickAccounts {menuName.toLowerCase()}</p>
                    <h2>{menuName === "Features" ? "The workflows behind your daily trade." : "Made for stock-led businesses."}</h2>
                    <Link href={menuName === "Features" ? "/features" : "/industries"} onClick={closeMenus}>
                      Explore {menuName.toLowerCase()} <ArrowRight aria-hidden="true" />
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
          <Link href="/#process" onClick={closeMenus}>How it works</Link>
          <Link href="/custom-erp-development" onClick={closeMenus}>Custom ERP Development</Link>
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
