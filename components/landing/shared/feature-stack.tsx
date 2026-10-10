"use client";

import { type CSSProperties, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

import { features } from "@/components/landing/data/landing-content";
import { FeatureGraphic } from "@/components/landing/shared/feature-graphic";

type StackCardStyle = CSSProperties & {
  "--stack-index": number;
};

export const FeatureStack = () => {
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
      {features.map(({ icon: Icon, title, description, graphic, href }, index) => (
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
                <Icon aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <Link
              href={href}
              className="qa-feature-stack-link"
            >
              Learn more <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="qa-feature-stack-media">
            <FeatureGraphic kind={graphic} />
          </div>
        </article>
      ))}
    </div>
  );
};
