"use client";

import { type CSSProperties, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

import { processSteps } from "@/components/landing/data/landing-content";

type ProcessCardStyle = CSSProperties & {
  "--process-card-index": number;
};

export const ProcessJourney = () => {
  const journeyRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const journey = journeyRef.current;
    const panel = panelRef.current;
    if (!journey || !panel) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add(
        "(min-width: 769px) and (prefers-reduced-motion: no-preference)",
        () => {
          const steps = gsap.utils.toArray<HTMLElement>("[data-process-step]");
          const cards = gsap.utils.toArray<HTMLElement>("[data-process-card]");
          const progress = panel.querySelector<HTMLElement>(
            ".qa-process-progress-fill",
          );

          gsap.set(steps.slice(1), { opacity: 0.34 });
          gsap.set(cards, {
            y: (index) => index * 12,
            rotate: (index) => (index % 2 === 0 ? -1.2 : 1.2),
            scale: (index) => 1 - index * 0.018,
            zIndex: (index) => cards.length - index,
          });
          gsap.set(cards[0], { y: 0, rotate: 0, scale: 1 });
          if (progress) gsap.set(progress, { scaleY: 0 });

          const timeline = gsap.timeline({
            defaults: { ease: "power2.inOut" },
            scrollTrigger: {
              trigger: journey,
              start: "top top+=88",
              end: "bottom bottom-=60",
              scrub: 1.35,
              invalidateOnRefresh: true,
            },
          });

          timeline.to({}, { duration: 0.8 });

          processSteps.slice(1).forEach((_, index) => {
            const previousIndex = index;
            const nextIndex = index + 1;

            timeline
              .to(steps[previousIndex], { opacity: 0.34, duration: 0.35 })
              .to(steps[nextIndex], { opacity: 1, duration: 0.35 }, "<")
              .to(
                cards[previousIndex],
                {
                  y: -64,
                  rotate: -2.5,
                  scale: 0.965,
                  opacity: 0,
                  duration: 0.55,
                },
                "<",
              )
              .set(cards[nextIndex], { zIndex: cards.length + nextIndex }, "<")
              .to(
                cards[nextIndex],
                { y: 0, rotate: 0, scale: 1, opacity: 1, duration: 0.55 },
                "<",
              )
              .to({}, { duration: 0.7 });
          });

          if (progress) {
            gsap.to(progress, {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: journey,
                start: "top top+=88",
                end: "bottom bottom-=60",
                scrub: 1.35,
              },
            });
          }
        },
      );
    }, journey);

    return () => context.revert();
  }, []);

  return (
    <div className="qa-process-journey" ref={journeyRef}>
      <div className="qa-process-panel" ref={panelRef}>
        <div className="qa-process-intro">
          <div>
            <p className="qa-process-kicker">How it works</p>
            <h2>
              <span>From first conversation</span>
              <span>to your team’s first day.</span>
            </h2>
          </div>
          <p>
            Four practical steps take you from an initial workflow review to a
            configured system your whole team can use.
          </p>
        </div>
        <div className="qa-process-body">
          <div className="qa-process-steps">
            {processSteps.map(({ title, description }, index) => (
              <article data-process-step key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="qa-process-progress" aria-hidden="true">
            <span className="qa-process-progress-fill" />
          </div>
          <div className="qa-process-card-stack">
            {processSteps.map(({ title, description, details }, index) => (
              <article
                className="qa-process-card"
                data-process-card
                key={title}
                style={{ "--process-card-index": index } as ProcessCardStyle}
              >
                <p>STEP {String(index + 1).padStart(2, "0")}</p>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                  {details.map((detail) => (
                    <li key={detail}>
                      <Check aria-hidden="true" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
