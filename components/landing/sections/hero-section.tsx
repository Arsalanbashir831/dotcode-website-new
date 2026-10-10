import { Button } from "@/components/ui/button";
import { RotatingWords } from "@/components/landing/shared/rotating-words";
import { WHATSAPP_DEMO_URL } from "@/lib/contact";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export const HeroSection = () => (
  <section className="qa-hero" id="quickaccounts">
    <div className="qa-container qa-hero-grid">
      <div className="qa-hero-intro">
        <h1>
          <span className="qa-hero-heading-line">Inventory Management</span>
          <span className="qa-hero-heading-row">
            <span>Software for</span>
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
            <a href="">Check Demo Application</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
