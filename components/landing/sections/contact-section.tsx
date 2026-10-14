import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";

import { WHATSAPP_DEMO_URL } from "@/lib/contact";
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
            <p className="qa-contact-kicker"><span aria-hidden="true" />Ready to streamline your business?</p>
            <h2>
              <span>Bring all your wholesale</span>
              <span><em>operations into one system.</em></span>
            </h2>
            <p>
              Manage stock, purchases, sales, customers, suppliers and accounting
              in one simple platform. No per-user fees. Just one powerful ERP.
            </p>
            <div className="qa-contact-actions">
              <a className="qa-contact-primary" href={WHATSAPP_DEMO_URL} target="_blank" rel="noopener noreferrer">
                Get a Demo <ArrowRight aria-hidden="true" />
              </a>
              <a className="qa-contact-secondary" href={WHATSAPP_DEMO_URL} target="_blank" rel="noopener noreferrer">
                <CalendarDays aria-hidden="true" /> Book Free Consultation
              </a>
            </div>
            <p className="qa-contact-details">
              Prefer email? <a href="mailto:arsalanbashir831@gmail.com">arsalanbashir831@gmail.com</a>
            </p>
          </div>

          <div className="qa-contact-visual">
            <Image
              className="qa-contact-image"
              src="/assets/cta-image.png"
              alt="QuickAccounts dashboard showing sales, purchases, stock value and product categories"
              fill
              sizes="(min-width: 769px) 55vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  </>
);
