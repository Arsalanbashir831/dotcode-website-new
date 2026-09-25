import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WHATSAPP_CONTACT_URL } from "@/lib/contact";

const systemNodes = ["Stock", "Purchases", "Cash", "Accounts", "Ledgers"];

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
            <Button asChild size="lg">
              <a
                href={WHATSAPP_CONTACT_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                Explore License Options <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={WHATSAPP_CONTACT_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                Book a free demo
              </a>
            </Button>
          </div>
        </div>

        <div className="qa-contact-visual" aria-hidden="true">
          <div className="qa-contact-orbit qa-contact-orbit-outer" />
          <div className="qa-contact-orbit qa-contact-orbit-inner" />
          <div className="qa-contact-core">
            <span>QA</span>
            <small>ONE CLEAR SYSTEM</small>
          </div>
          {systemNodes.map((node, index) => (
            <span
              className={`qa-contact-node qa-contact-node-${index + 1}`}
              key={node}
            >
              {node}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);
