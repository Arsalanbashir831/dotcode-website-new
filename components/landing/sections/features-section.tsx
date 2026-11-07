import { FeatureStack } from "@/components/landing/shared/feature-stack";
import { SectionHeading } from "@/components/landing/shared/section-heading";

export const FeaturesSection = () => (
  <section className="qa-section bg-white" id="features">
    <div className="qa-container">
      <SectionHeading
        eyebrow="Features at a glance"
        title="Everything a service business needs to manage its money"
        description="From the first invoice to the year-end report, without the complexity."
      />
      <FeatureStack />
    </div>
  </section>
);
