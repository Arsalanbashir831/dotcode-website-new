"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";

import { navigationItems } from "@/components/landing/data/landing-content";
import { Button } from "@/components/ui/button";
import { WHATSAPP_CONTACT_URL } from "@/lib/contact";

export const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="qa-header">
      <div className="qa-container qa-nav">
        <a href="#top" aria-label="Dotcode home">
          <Image
            src="/assets/dotcode-logo.png"
            width={1711}
            height={530}
            alt="Dotcode"
            priority
            className="qa-logo"
          />
        </a>
        <nav
          className={`qa-nav-links ${isMenuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <a
              href={WHATSAPP_CONTACT_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Book a Demo <ArrowRight className="size-4" />
            </a>
          </Button>
          <button
            className="qa-menu-button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
};
