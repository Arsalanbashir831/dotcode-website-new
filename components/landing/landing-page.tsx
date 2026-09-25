import { AudienceSection } from "@/components/landing/sections/audience-section";
import { ContactSection } from "@/components/landing/sections/contact-section";
import { DemoVideoSection } from "@/components/landing/sections/demo-video-section";
import { FaqSection } from "@/components/landing/sections/faq-section";
import { FeaturesSection } from "@/components/landing/sections/features-section";
import { HeroSection } from "@/components/landing/sections/hero-section";
import { PartnersSection } from "@/components/landing/sections/partners-section";
import { PlatformPresenceSection } from "@/components/landing/sections/platform-presence-section";
import { PricingSection } from "@/components/landing/sections/pricing-section";
import { ProcessSection } from "@/components/landing/sections/process-section";
import { SetupSection } from "@/components/landing/sections/setup-section";
import { SiteFooter } from "@/components/landing/sections/site-footer";
import { SiteHeader } from "@/components/landing/sections/site-header";
import { TestimonialsSection } from "@/components/landing/sections/testimonials-section";
import { ValueStrip } from "@/components/landing/sections/value-strip";
import { BackToTopButton } from "@/components/landing/shared/back-to-top-button";
import { MotionProvider } from "@/components/landing/shared/motion-provider";

export const LandingPage = () => (
  <MotionProvider>
    <main id="top" className="qa-site">
      <SiteHeader />
      <HeroSection />
      <DemoVideoSection />
      {/* <ClientLogosSection /> */}
      <ValueStrip />

      <FeaturesSection />
      
      <AudienceSection />
     
      <TestimonialsSection />
        <PlatformPresenceSection />
     
      <ProcessSection />
      <SetupSection />
      <PricingSection />
      <FaqSection />
      <PartnersSection />
      <ContactSection />
      <SiteFooter />
      <BackToTopButton />
    </main>
  </MotionProvider>
);
