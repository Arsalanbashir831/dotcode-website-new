import { FeatureStack } from "@/components/landing/shared/feature-stack";
import { SectionHeading } from "@/components/landing/shared/section-heading";

export const FeaturesSection = () => (
  <section className="qa-section bg-white" id="features">
    <div className="qa-container">
      <SectionHeading
        eyebrow="One system for your business operations"
        title="Manage inventory, trade and accounts in one place."
        description="QuickAccounts connects multi-outlet and warehouse stock, purchases and sales, serial tracking for warranty and RMA workflows, and financial records for retailers, wholesalers and distributors."
      />
      <FeatureStack />
    </div>
  </section>
);
