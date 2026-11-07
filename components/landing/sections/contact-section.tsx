import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";

import { DEMO_APPLICATION_URL, WHATSAPP_DEMO_URL } from "@/lib/contact";
import { ConsultationForm } from "@/components/landing/sections/consultation-form";

export const ContactSection = () => (
  <>
    <section className="qa-consultation-section" id="contact">
      <div className="qa-container">
        <ConsultationForm />
      </div>
    </section>

    <section className="qa-contact" aria-label="Contact Dotcode">
      <div className="qa-container">
        <div className="qa-contact-card">
          <div className="qa-contact-copy">
            <p className="qa-contact-kicker"><span aria-hidden="true" />Ready for simpler books?</p>
            <h2>
              <span>Less time on billing and books.</span>
              <span><em>More time with clients.</em></span>
            </h2>
            <p>
              See QuickAccounts in action with a free walkthrough built around how your firm works.
            </p>
            <div className="qa-contact-actions">
              <a className="qa-contact-primary" href={DEMO_APPLICATION_URL} target="_blank" rel="noopener noreferrer">
                Get a Free Demo <ArrowRight aria-hidden="true" />
              </a>
              <a className="qa-contact-secondary" href={WHATSAPP_DEMO_URL} target="_blank" rel="noopener noreferrer">
                <CalendarDays aria-hidden="true" /> Book a Free Consultation
              </a>
            </div>
            <p className="qa-contact-details">
              Prefer email? <a href="mailto:info@dotcodesolutions.com">info@dotcodesolutions.com</a>
            </p>
          </div>

          <div className="qa-contact-visual">
            <Image
              className="qa-contact-image"
              src="/assets/cta-image.png"
              alt="QuickAccounts dashboard showing sales and purchases"
              fill
              sizes="(min-width: 769px) 55vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  </>
);
