import Image from "next/image";

import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export const ContactSection = () => (
  <section className="qa-contact" id="contact">
    <div className="qa-container">
      <div className="qa-contact-card">
        <div className="qa-contact-copy">
          <p className="qa-contact-kicker">Let’s talk about your business</p>
          <h2>
            <span>Bring all wholesale records</span>
            <span>into one clear system.</span>
          </h2>
          <p>
            See stock, purchases, customer accounts, cash and ledgers in one
            place. Book a free demo and we’ll help you confirm the right setup.
          </p>
          <div className="qa-contact-actions">
            <WhatsAppButton size="lg" />
          </div>
        </div>

        <div className="qa-contact-visual">
          <Image
            className="qa-contact-image"
            src="/assets/cta-workflow-visual.png"
            alt="Dotcode connects stock, purchases, cash, accounts and ledgers in one business system"
            fill
            sizes="(min-width: 769px) 55vw, 100vw"
          />
        </div>
      </div>
    </div>
  </section>
);
