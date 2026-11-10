"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

import { getDictionary } from "@/components/i18n/dictionary";
import { LanguageToggle, LocaleLink as Link, useLocale } from "@/components/i18n/locale-provider";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { WHATSAPP_DEMO_URL } from "@/lib/contact";

export type HeaderMenu = {
  id: "features" | "industries";
  label: string;
  eyebrow: string;
  title: string;
  linkHref: string;
  linkLabel: string;
  wide: boolean;
  items: { title: string; href: string; description: string }[];
};

/** Interactive header. Menus arrive already translated; hrefs are locale-free. */
export function MarketingHeaderClient({ menus }: { menus: HeaderMenu[] }) {
  const t = getDictionary(useLocale());
  const [activeMenu, setActiveMenu] = useState<HeaderMenu["id"] | null>(null);
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
        <Link href="/" aria-label={t.header.homeLabel} onClick={closeMenus}>
          <Image src="/assets/dotcode-logo.png" width={1711} height={530} alt="Dotcode Solutions" priority className="qa-logo" />
        </Link>
        <nav id="main-navigation" className={`qa-nav-links qa-primary-nav ${mobileOpen ? "is-open" : ""}`} aria-label={t.header.mainNavigation}>
          <Link href="/" onClick={closeMenus}>{t.common.home}</Link>
          {menus.map((menu) => (
            <div
              className="qa-nav-menu"
              key={menu.id}
              onMouseEnter={() => setActiveMenu(menu.id)}
              onMouseLeave={() => setActiveMenu((current) => current === menu.id ? null : current)}
              onFocus={() => setActiveMenu(menu.id)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setActiveMenu(null);
              }}
            >
              <button
                type="button"
                className="qa-nav-trigger"
                aria-expanded={activeMenu === menu.id}
                aria-controls={`mega-${menu.id}`}
                onClick={() => setActiveMenu((current) => current === menu.id ? null : menu.id)}
              >
                {menu.label}<ChevronDown aria-hidden="true" />
              </button>
              <div id={`mega-${menu.id}`} className={`qa-mega-menu ${menu.wide ? "mega-wide" : ""} ${activeMenu === menu.id ? "is-open" : ""}`}>
                <div className="qa-mega-inner">
                  <div className="qa-mega-intro">
                    <p className="qa-eyebrow">{menu.eyebrow}</p>
                    <h2>{menu.title}</h2>
                    <Link href={menu.linkHref} onClick={closeMenus}>
                      {menu.linkLabel} <ArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="qa-mega-links">
                    {menu.items.map((item) => (
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
          <Link href="/pricing" onClick={closeMenus}>{t.common.pricing}</Link>
          <Link href="/#process" onClick={closeMenus}>{t.common.howItWorks}</Link>
          <Link href="/company" onClick={closeMenus}>{t.common.about}</Link>
          <Link href="/#contact" onClick={closeMenus}>{t.common.contactUs}</Link>
        </nav>
        <div className="qa-nav-actions">
          <LanguageToggle />
          <WhatsAppButton href={WHATSAPP_DEMO_URL} className="qa-nav-demo" label={t.common.contactUs} />
          <button type="button" className="qa-menu-button" onClick={() => setMobileOpen((open) => !open)} aria-controls="main-navigation" aria-expanded={mobileOpen} aria-label={mobileOpen ? t.header.closeNavigation : t.header.openNavigation}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
