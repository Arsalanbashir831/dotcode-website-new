import { getLandingContent } from "@/components/landing/data/landing-content";
import { ProcessJourney } from "@/components/landing/shared/process-journey";
import type { Locale } from "@/lib/i18n";

export const ProcessSection = ({ locale }: { locale: Locale }) => (
  <section className="qa-section qa-process-section" id="process">
    <div className="qa-container">
      <ProcessJourney processSteps={getLandingContent(locale).processSteps} />
    </div>
  </section>
);
