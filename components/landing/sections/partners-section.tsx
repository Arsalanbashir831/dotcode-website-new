import { partnerOptions } from "@/components/landing/data/landing-content";
import { SectionHeading } from "@/components/landing/shared/section-heading";
import { Button } from "@/components/ui/button";
import { WHATSAPP_CONTACT_URL } from "@/lib/contact";

export const PartnersSection = () => (
  <section className="qa-section bg-[#F4F1ED]" id="partners">
    <div className="qa-container">
      <SectionHeading
        eyebrow="Partner with Dotcode"
        title="Give your clients a practical software option."
        description="Recommend or resell QuickAccounts to wholesalers and merchandise businesses."
      />
      <div className="qa-partner-grid">
        {partnerOptions.map(({ title, rate, description }) => (
          <article key={title} data-reveal>
            <h3>{title}</h3>
            <p>{description}</p>
            <strong>{rate}</strong>
            <span> of eligible license revenue</span>
            <ul>
              <li>Product and sales resources</li>
              <li>Clear, agreed partner terms</li>
              <li>Earn more as your customer base grows</li>
            </ul>
          </article>
        ))}
      </div>
      <div className="qa-white-label">
        <div>
          <h3>Interested in selling under your own brand?</h3>
          <p>
            White-label licensing may be available to qualified partners under
            agreed terms.
          </p>
        </div>
        <Button asChild>
          <a
            href={WHATSAPP_CONTACT_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            Ask About White-Label Licensing
          </a>
        </Button>
      </div>
    </div>
  </section>
);
