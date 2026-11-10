import { PriceText } from "@/components/currency/currency-provider";
import { Check } from "lucide-react";

import { getLandingContent } from "@/components/landing/data/landing-content";
import type { Locale } from "@/lib/i18n";
import { SectionHeading } from "@/components/landing/shared/section-heading";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { getWhatsAppContactUrl, WHATSAPP_DEMO_URL } from "@/lib/contact";

/** Not currently rendered; kept for a future pricing block. Headings are English only. */
export const PricingSection = ({ locale = "en" }: { locale?: Locale }) => (
  <section className="qa-section bg-white" id="pricing">
    <div className="qa-container">
      <SectionHeading
        eyebrow="Straightforward licensing"
        title={
          <>
            Free software.
            <br />
            Just $50/month hosting.
          </>
        }
        description="Dotcode ERP is free and open source. Pay only for hosting, with every feature, unlimited users and setup included."
      />
      <div className="qa-pricing-grid qa-pricing-grid-two">
        {getLandingContent(locale).pricingPlans.map((plan) => (
          <article
            className={`qa-price-card ${plan.isPopular ? "popular" : ""}`}
            key={plan.name}
            data-reveal
          >
            {plan.isPopular ? (
              <span className="qa-popular">ALL FEATURES · UNLIMITED USERS</span>
            ) : null}
            <h3>{plan.name}</h3>
            <p><PriceText>{plan.description}</PriceText></p>
            <div className="qa-price">
              <strong><PriceText>{plan.price}</PriceText></strong>
              <span>{plan.suffix}</span>
            </div>
            <small><PriceText>{plan.note}</PriceText></small>
            <WhatsAppButton
              className="qa-price-card-cta"
              href={
                plan.isDemo
                  ? WHATSAPP_DEMO_URL
                  : getWhatsAppContactUrl(plan.message)
              }
              label={plan.cta}
              theme={plan.isDemo ? "orange" : "whatsapp"}
              showIcon={!plan.isDemo}
            />
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check />
                  <PriceText>{feature}</PriceText>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="qa-footnote">
        <strong>Please note:</strong>{" "}
        <PriceText>
          {"All prices are in USD. The software is free and open source with no license fee. Hosting is billed at $50 per month. Customizations are quoted separately."}
        </PriceText>
      </p>
    </div>
  </section>
);
