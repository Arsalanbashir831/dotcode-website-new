import { Check } from "lucide-react";

import { pricingPlans } from "@/components/landing/data/landing-content";
import { SectionHeading } from "@/components/landing/shared/section-heading";
import { Button } from "@/components/ui/button";
import { WHATSAPP_CONTACT_URL } from "@/lib/contact";

export const PricingSection = () => (
  <section className="qa-section bg-white" id="pricing">
    <div className="qa-container">
      <SectionHeading
        eyebrow="Straightforward licensing"
        title="Try it free. Own it when you’re ready."
        description="Start with a free 10-day trial, then purchase the software once for $1,500. No subscription and no per-user charges."
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
            <Button asChild variant={plan.isPopular ? "default" : "outline"}>
              <a
                href={WHATSAPP_CONTACT_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                {plan.cta}
              </a>
            </Button>
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
