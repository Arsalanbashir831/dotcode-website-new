import { FeatureStack } from "@/components/landing/shared/feature-stack";
import { SectionHeading } from "@/components/landing/shared/section-heading";

export const FeaturesSection = () => (
  <section className="qa-section bg-white" id="features">
    <div className="qa-container">
      <SectionHeading
        eyebrow="The essentials, together"
        title="Less searching. A clearer view of the work."
        description="Keep the everyday records behind your wholesale business organized in one straightforward system."
      />
      <FeatureStack />
    </div>
  </section>
);
