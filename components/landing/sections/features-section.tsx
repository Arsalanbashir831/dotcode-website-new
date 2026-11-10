import { fill, getDictionary } from "@/components/i18n/dictionary";
import { getLandingContent } from "@/components/landing/data/landing-content";
import { FeatureStack } from "@/components/landing/shared/feature-stack";
import { SectionHeading } from "@/components/landing/shared/section-heading";
import type { Locale } from "@/lib/i18n";

export const FeaturesSection = ({ locale }: { locale: Locale }) => {
  const t = getDictionary(locale);
  const items = getLandingContent(locale).features.map(({ icon: Icon, title, description, graphic, href }) => ({
    icon: <Icon aria-hidden="true" />,
    title,
    description,
    graphic,
    graphicLabel: t.featureGraphics[graphic],
    href,
    linkLabel: fill(t.featuresSection.explore, { title }),
  }));

  return (
    <section className="qa-section bg-white" id="features">
      <div className="qa-container">
        <SectionHeading
          eyebrow={t.featuresSection.eyebrow}
          title={t.featuresSection.title}
          description={t.featuresSection.description}
        />
        <FeatureStack items={items} />
      </div>
    </section>
  );
};
