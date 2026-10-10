import { Check } from "lucide-react";

import { pricingPlans } from "@/components/landing/data/landing-content";
import { SectionHeading } from "@/components/landing/shared/section-heading";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { getWhatsAppContactUrl, WHATSAPP_DEMO_URL } from "@/lib/contact";

export const PricingSection = () => (
  <section className="qa-section bg-white" id="pricing">
    <div className="qa-container">
      <SectionHeading
        eyebrow="Straightforward licensing"
        title="Check the demo. Own it when you’re ready."
        description="Explore QuickAccounts in a free guided demo, then purchase the software once for $850. No subscription and no per-user charges."
      />
      <div className="qa-pricing-grid">
        {pricingPlans.map((plan) => (
          <article
            className={`qa-price-card ${plan.isPopular ? "popular" : ""}`}
            key={plan.name}
            data-reveal
          >
            {plan.isPopular ? (
              <span className="qa-popular">POPULAR</span>
            ) : null}
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <div className="qa-price">
              <strong>{plan.price}</strong>
              <span>{plan.suffix}</span>
            </div>
            <small>{plan.note}</small>
            <WhatsAppButton
              href={plan.name === "Check Demo"
                ? WHATSAPP_DEMO_URL
                : getWhatsAppContactUrl(
                    `Hi, I’m interested in the QuickAccounts ${plan.name}. Please share the next steps.`,
                  )}
              label={plan.cta}
              theme={plan.name === "Check Demo" ? "orange" : "whatsapp"}
              showIcon={plan.name !== "Check Demo"}
            />
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="qa-footnote">
        <strong>Please note:</strong> Hosting is not included in the software
        purchase. Additional features and customizations are optional and quoted
        separately.
      </p>
    </div>
  </section>
);
