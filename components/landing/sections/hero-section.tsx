import { Button } from "@/components/ui/button";
import Image from "next/image";
import { RotatingWords } from "@/components/landing/shared/rotating-words";
import { WHATSAPP_DEMO_URL } from "@/lib/contact";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export const HeroSection = () => (
  <section className="qa-hero" id="quickaccounts">
    <div className="qa-container qa-hero-grid">
      <div className="qa-hero-intro">
        <h1>
          <span className="qa-hero-heading-line">Inventory, Warranty &amp; RMA</span>
          <span className="qa-hero-heading-row">
            <span>Management for</span>
            <RotatingWords />
          </span>
        </h1>
        <p className="qa-hero-copy">
          Keep stock, purchases, customer accounts, cash and ledgers in one
          straightforward wholesale business system. Dotcode sets it up, helps
          migrate supported records and trains your team.
        </p>
        <div className="qa-hero-actions">
          <WhatsAppButton href={WHATSAPP_DEMO_URL} size="lg" />
          <Button asChild size="lg" variant="outline">
            <a href={WHATSAPP_DEMO_URL} target="_blank" rel="noopener noreferrer">Check Demo Application</a>
          </Button>
        </div>
      </div>
      <div className="qa-hero-visual" data-reveal>
        <Image
          src="/assets/hero-section-image.png"
          alt="QuickAccounts dashboard with sales, purchases, inventory, warranty and RMA records"
          width={1672}
          height={941}
          sizes="(min-width: 1280px) 1160px, calc(100vw - 40px)"
          priority
        />
      </div>
    </div>
  </section>
);
