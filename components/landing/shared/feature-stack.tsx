"use client";

import { type CSSProperties, type ReactNode, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

import type { FeatureGraphicKind } from "@/components/landing/data/catalog";
import { LocaleLink as Link } from "@/components/i18n/locale-provider";
import { FeatureGraphic } from "@/components/landing/shared/feature-graphic";

type StackCardStyle = CSSProperties & {
  "--stack-index": number;
};

export type FeatureStackItem = {
  icon: ReactNode;
  title: string;
  description: string;
  graphic: FeatureGraphicKind;
  graphicLabel: string;
  href: string;
  linkLabel: string;
};

export const FeatureStack = ({ items }: { items: FeatureStackItem[] }) => {
  const stackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;

    gsap.registerPlugin(ScrollTrigger);
    let resizeFrame = 0;
    const resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    });

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add(
        "(min-width: 769px) and (prefers-reduced-motion: no-preference)",
        () => {
          const cards = gsap.utils.toArray<HTMLElement>(
            ".qa-feature-stack-card",
          );

          cards.forEach((card, index) => {
            gsap.fromTo(
              card,
              { y: 90, scale: 0.97 },
              {
                y: 0,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "top 62%",
                  scrub: 0.65,
                },
              },
            );

            const nextCard = cards[index + 1];
            if (!nextCard) return;

            gsap.to(card, {
              scale: 0.94,
              ease: "none",
              transformOrigin: "center top",
              scrollTrigger: {
                trigger: nextCard,
                start: "top 82%",
                end: "top 20%",
                scrub: 0.65,
              },
            });
          });
        },
      );

      resizeObserver.observe(stack);
    }, stack);

    return () => {
      cancelAnimationFrame(resizeFrame);
      resizeObserver.disconnect();
      context.revert();
    };
  }, []);

  return (
    <div className="qa-feature-stack" ref={stackRef}>
      {items.map(({ icon, title, description, graphic, graphicLabel, href, linkLabel }, index) => (
        <article
          className="qa-feature-stack-card"
          data-feature-card
          key={title}
          style={{ "--stack-index": index } as StackCardStyle}
        >
          <div className="qa-feature-stack-copy">
            <span className="qa-feature-stack-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <span className="qa-feature-stack-icon">
                {icon}
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <Link
              href={href}
              className="qa-feature-stack-link"
            >
              {linkLabel} <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="qa-feature-stack-media">
            <FeatureGraphic kind={graphic} label={graphicLabel} />
          </div>
        </article>
      ))}
    </div>
  );
};
