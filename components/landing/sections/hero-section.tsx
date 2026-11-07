"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Check, Play, Star } from "lucide-react";
import { DEMO_APPLICATION_URL, WHATSAPP_DEMO_URL } from "@/lib/contact";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

// Flip to true to show the product video preview and modal in the hero again.
const SHOW_PRODUCT_VIDEO = false;

const youtubeVideoId = "LiBz35AcQLM";
const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`;

export const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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

  return <section className="qa-hero" id="quickaccounts">
    <div className="qa-container qa-hero-grid">
      <div className="qa-hero-intro qa-hero-card">
        <h1>
          <span className="qa-hero-heading-line">Easy accounting software</span>
          <span className="qa-hero-heading-row">
            <span>for consulting and service firms</span>
          </span>
        </h1>
        <p className="qa-hero-copy">
          Bill clients, track every expense and see which projects actually
          make money. QuickAccounts keeps the books simple for law firms, tech
          companies, agencies and consultancies, so you can focus on client
          work. No accounting degree needed.
        </p>
        <div className="qa-hero-actions">
          <WhatsAppButton href={WHATSAPP_DEMO_URL} size="lg" label="Talk to Us on WhatsApp" />
          <Button asChild size="lg" variant="outline">
            <a href={DEMO_APPLICATION_URL} target="_blank" rel="noopener noreferrer">Try the Free Demo</a>
          </Button>
        </div>
        <div className="qa-hero-proof">
          <span className="qa-hero-stars" aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => <Star key={i} fill="currentColor" />)}
          </span>
          <p><strong>5.0 on Upwork · 4.7 on Fiverr</strong><br />45+ clients served worldwide</p>
        </div>
        <div className="qa-hero-loved">
          <p><span>Simple pricing, no surprises</span></p>
          <ul>
            {["One-time license", "Unlimited users online", "Setup and training included", "No accounting degree needed"].map((item) => (
              <li key={item}><Check aria-hidden="true" />{item}</li>
            ))}
          </ul>
        </div>
      </div>
      {SHOW_PRODUCT_VIDEO && <div className="qa-hero-visual" data-reveal>
        <button type="button" className="qa-hero-video-trigger" aria-label="Play the QuickAccounts product video" onClick={() => setIsVideoOpen(true)}>
          <Image
            className="qa-hero-video"
            src="/assets/hero-section-image.png"
            alt="QuickAccounts dashboard product video preview"
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
      <div className="qa-video-modal" role="dialog" aria-modal="true" aria-label="QuickAccounts product video" onClick={() => setIsVideoOpen(false)}>
        <div className="qa-video-modal-content" onClick={(event) => event.stopPropagation()}>
          <button type="button" className="qa-video-modal-close" aria-label="Close video" onClick={() => setIsVideoOpen(false)}>×</button>
          <iframe className="qa-video-modal-player" src={youtubeEmbedUrl} title="QuickAccounts product video" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
        </div>
      </div>
    )}
  </section>;
};
