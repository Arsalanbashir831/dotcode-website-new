"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { RotatingWords } from "@/components/landing/shared/rotating-words";
import { DEMO_APPLICATION_URL, WHATSAPP_DEMO_URL } from "@/lib/contact";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const youtubeVideoId = "LiBz35AcQLM";
const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`;
const youtubeThumbnailUrl = `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`;

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
      <div className="qa-hero-intro">
        <h1>
          <span className="qa-hero-heading-line">Inventory, Warranty &amp; RMA</span>
          <span className="qa-hero-heading-row">
            <span>Management for</span>
            <RotatingWords />
          </span>
        </h1>
        <p className="qa-hero-copy">
          Keep stock, purchases, customer accounts, cash and ledgers in one
          straightforward wholesale business system. Dotcode sets it up, helps
          migrate supported records and trains your team.
        </p>
        <div className="qa-hero-actions">
          <WhatsAppButton href={WHATSAPP_DEMO_URL} size="lg" />
          <Button asChild size="lg" variant="outline">
            <a href={DEMO_APPLICATION_URL} target="_blank" rel="noopener noreferrer">Check Demo Application</a>
          </Button>
        </div>
      </div>
      <div className="qa-hero-visual" data-reveal>
        <button type="button" className="qa-hero-video-trigger" aria-label="Play the QuickAccounts product video" onClick={() => setIsVideoOpen(true)}>
          <img className="qa-hero-video" src={youtubeThumbnailUrl} alt="QuickAccounts product video preview" />
          <span className="qa-hero-video-overlay" aria-hidden="true">
            <span className="qa-hero-video-play-icon">▶</span>
            <span>Watch with sound</span>
          </span>
        </button>
      </div>
    </div>
    {isVideoOpen && (
      <div className="qa-video-modal" role="dialog" aria-modal="true" aria-label="QuickAccounts product video" onClick={() => setIsVideoOpen(false)}>
        <div className="qa-video-modal-content" onClick={(event) => event.stopPropagation()}>
          <button type="button" className="qa-video-modal-close" aria-label="Close video" onClick={() => setIsVideoOpen(false)}>×</button>
          <iframe className="qa-video-modal-player" src={youtubeEmbedUrl} title="QuickAccounts product video" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
        </div>
      </div>
    )}
  </section>;
};
