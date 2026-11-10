import { getDictionary } from "@/components/i18n/dictionary";
import { getLandingContent } from "@/components/landing/data/landing-content";
import { AudienceSection } from "@/components/landing/sections/audience-section";
import { ContactSection } from "@/components/landing/sections/contact-section";
import { FaqSection } from "@/components/landing/sections/faq-section";
import { FeaturesSection } from "@/components/landing/sections/features-section";
import { HeroSection } from "@/components/landing/sections/hero-section";
import { MarketingHeader } from "@/components/landing/sections/marketing-header";
import { PartnersSection } from "@/components/landing/sections/partners-section";
import { PlatformPresenceSection } from "@/components/landing/sections/platform-presence-section";
import { ProcessSection } from "@/components/landing/sections/process-section";
import { ProductDefinitionSection } from "@/components/landing/sections/product-definition-section";
import { SetupSection } from "@/components/landing/sections/setup-section";
import { SiteFooter } from "@/components/landing/sections/site-footer";
import { TestimonialsSection } from "@/components/landing/sections/testimonials-section";
import { ValueStrip } from "@/components/landing/sections/value-strip";
import { BackToTopButton } from "@/components/landing/shared/back-to-top-button";
import { MotionProvider } from "@/components/landing/shared/motion-provider";
import type { Locale } from "@/lib/i18n";

export const LandingPage = ({ locale }: { locale: Locale }) => {
  const content = getLandingContent(locale);
  const t = getDictionary(locale);

  return (
    <MotionProvider>
      <main id="top" className="qa-site">
        <MarketingHeader locale={locale} />
        <HeroSection />
        <ProductDefinitionSection locale={locale} />
        <ValueStrip labels={content.valueLabels} label={t.valueStrip.label} />
        <FeaturesSection locale={locale} />
        <AudienceSection locale={locale} />
        <TestimonialsSection />
        <PlatformPresenceSection locale={locale} />
        <ProcessSection locale={locale} />
        <SetupSection locale={locale} />
        <FaqSection locale={locale} />
        <PartnersSection locale={locale} />
        <ContactSection locale={locale} />
        <SiteFooter locale={locale} />
        <BackToTopButton />
      </main>
    </MotionProvider>
  );
};
