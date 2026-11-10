import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";

import { getDictionary } from "@/components/i18n/dictionary";
import { ConsultationForm } from "@/components/landing/sections/consultation-form";
import { DEMO_APPLICATION_URL, WHATSAPP_DEMO_URL } from "@/lib/contact";
import type { Locale } from "@/lib/i18n";

export const ContactSection = ({ locale }: { locale: Locale }) => {
  const t = getDictionary(locale).contact;
  return (
    <>
      <section className="qa-consultation-section" id="contact">
        <div className="qa-container">
          <ConsultationForm />
        </div>
      </section>

      <section className="qa-contact" aria-label={t.sectionLabel}>
        <div className="qa-container">
          <div className="qa-contact-card">
            <div className="qa-contact-copy">
              <p className="qa-contact-kicker"><span aria-hidden="true" />{t.kicker}</p>
              <h2>
                <span>{t.line1}</span>
                <span><em>{t.line2}</em></span>
              </h2>
              <p>{t.body}</p>
              <div className="qa-contact-actions">
                <a className="qa-contact-primary" href={DEMO_APPLICATION_URL} target="_blank" rel="noopener noreferrer">
                  {t.primary} <ArrowRight aria-hidden="true" />
                </a>
                <a className="qa-contact-secondary" href={WHATSAPP_DEMO_URL} target="_blank" rel="noopener noreferrer">
                  <CalendarDays aria-hidden="true" /> {t.secondary}
                </a>
              </div>
              <p className="qa-contact-details">
                {t.preferEmail} <a href="mailto:info@dotcodesolutions.com">info@dotcodesolutions.com</a>
              </p>
            </div>

            <div className="qa-contact-visual">
              <Image
                className="qa-contact-image"
                src="/assets/cta-image.png"
                alt={t.imageAlt}
                fill
                sizes="(min-width: 769px) 55vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
