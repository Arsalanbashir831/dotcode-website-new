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
        title={
          <>
            No-Subscription ERP Software
            <br />
            for Wholesale Businesses
          </>
        }
        description="Explore QuickAccounts ERP for inventory, purchasing, sales and accounts. Choose an offline or online lifetime license, then discuss customizations for your workflow."
      />
      <div className="qa-pricing-grid">
        {pricingPlans.map((plan) => (
          <article
            className={`qa-price-card ${plan.isPopular ? "popular" : ""}`}
            key={plan.name}
            data-reveal
          >
            {plan.isPopular ? (
              <span className="qa-popular">ONLINE · UNLIMITED USERS</span>
            ) : null}
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <div className="qa-price">
              <strong>{plan.price}</strong>
              <span>{plan.suffix}</span>
            </div>
            <small>{plan.note}</small>
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
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="qa-footnote">
        <strong>Please note:</strong> All prices are in USD. The offline license
        is for one user and stores data on your hardware. Online hosting is
        billed separately at $40 per month. Customizations are quoted
        separately.
      </p>
    </div>
  </section>
);
