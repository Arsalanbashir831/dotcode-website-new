"use client";

import { PriceText } from "@/components/currency/currency-provider";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Check, Play, Star } from "lucide-react";
import { DEMO_APPLICATION_URL, WHATSAPP_DEMO_URL } from "@/lib/contact";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { getDictionary } from "@/components/i18n/dictionary";
import { useLocale } from "@/components/i18n/locale-provider";

// Flip to true to show the product video preview and modal in the hero again.
const SHOW_PRODUCT_VIDEO = false;

const youtubeVideoId = "LiBz35AcQLM";
const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`;

export const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const t = getDictionary(useLocale());

  useEffect(() => {
    if (!isVideoOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsVideoOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [isVideoOpen]);

  return <section className="qa-hero" id="dotcode-erp">
    <div className="qa-container qa-hero-grid">
      <div className="qa-hero-intro qa-hero-card">
        <h1>
          <span className="qa-hero-heading-line">{t.hero.line1}</span>
          <span className="qa-hero-heading-row">
            <span>{t.hero.line2}</span>
          </span>
        </h1>
        <p className="qa-hero-copy">{t.hero.copy}</p>
        <div className="qa-hero-actions">
          <WhatsAppButton href={WHATSAPP_DEMO_URL} size="lg" label={t.hero.whatsapp} />
          <Button asChild size="lg" variant="outline">
            <a href={DEMO_APPLICATION_URL} target="_blank" rel="noopener noreferrer">{t.common.tryFreeDemo}</a>
          </Button>
        </div>
        <div className="qa-hero-proof">
          <span className="qa-hero-stars" aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => <Star key={i} fill="currentColor" />)}
          </span>
          <p><strong>{t.hero.ratings}</strong><br />{t.hero.clients}</p>
        </div>
        <div className="qa-hero-loved">
          <p><span>{t.hero.pricingNote}</span></p>
          <ul>
            {t.hero.highlights.map((item) => (
              <li key={item}><Check aria-hidden="true" /><PriceText>{item}</PriceText></li>
            ))}
          </ul>
        </div>
      </div>
      {SHOW_PRODUCT_VIDEO && <div className="qa-hero-visual" data-reveal>
        <button type="button" className="qa-hero-video-trigger" aria-label="Play the Dotcode ERP product video" onClick={() => setIsVideoOpen(true)}>
          <Image
            className="qa-hero-video"
            src="/assets/hero-section-image.png"
            alt="Dotcode ERP dashboard product video preview"
              width={1672}
              height={941}
            sizes="(min-width: 1200px) 1160px, 100vw"
            priority
          />
          <span className="qa-hero-video-overlay" aria-hidden="true">
            <span className="qa-hero-video-play-icon"><Play aria-hidden="true" /></span>
            <span>Watch with sound</span>
          </span>
        </button>
      </div>}
    </div>
    {SHOW_PRODUCT_VIDEO && isVideoOpen && (
      <div className="qa-video-modal" role="dialog" aria-modal="true" aria-label="Dotcode ERP product video" onClick={() => setIsVideoOpen(false)}>
        <div className="qa-video-modal-content" onClick={(event) => event.stopPropagation()}>
          <button type="button" className="qa-video-modal-close" aria-label="Close video" onClick={() => setIsVideoOpen(false)}>×</button>
          <iframe className="qa-video-modal-player" src={youtubeEmbedUrl} title="Dotcode ERP product video" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
        </div>
      </div>
    )}
  </section>;
};
