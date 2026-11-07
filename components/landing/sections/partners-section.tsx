import { partnerOptions } from "@/components/landing/data/landing-content";
import { SectionHeading } from "@/components/landing/shared/section-heading";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export const PartnersSection = () => (
  <section className="qa-section bg-[#F4F1ED]" id="partners">
    <div className="qa-container">
      <SectionHeading
        eyebrow="Partner with Dotcode Solutions"
        title="Recommend QuickAccounts to the firms you work with."
        description="Earn 3–5% of every license. Ideal for accountants, bookkeepers, business consultants and IT service providers."
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
        <WhatsAppButton />
      </div>
    </div>
  </section>
);
