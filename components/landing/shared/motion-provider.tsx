"use client";

import { type ReactNode, useEffect, useRef } from "react";
import { animate } from "animejs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const MotionProvider = ({ children }: { children: ReactNode }) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".qa-kicker", { y: 14, opacity: 0, duration: 0.52 })
        .from(".qa-hero h1", { y: 24, opacity: 0, duration: 0.7 }, "-=.28")
        .from(".qa-hero-copy", { y: 15, opacity: 0, duration: 0.58 }, "-=.38")
        .from(
          ".qa-hero-actions > *",
          { y: 12, opacity: 0, duration: 0.48, stagger: 0.09 },
          "-=.3",
        )
        .from(
          ".qa-proof li",
          { y: 8, opacity: 0, duration: 0.38, stagger: 0.07 },
          "-=.28",
        )
        .from(
          ".qa-window",
          { y: 38, opacity: 0, scale: 0.988, duration: 0.82 },
          "-=.08",
        )
        .from(
          ".qa-float",
          { y: 12, opacity: 0, duration: 0.48, stagger: 0.1 },
          "-=.45",
        );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      animate(".qa-signal", {
        scale: [1, 1.24],
        opacity: [1, 0.62],
        duration: 1400,
        ease: "inOutSine",
        loop: true,
        alternate: true,
      });
    }, rootRef);

    return () => context.revert();
  }, []);

  return <div ref={rootRef}>{children}</div>;
};
