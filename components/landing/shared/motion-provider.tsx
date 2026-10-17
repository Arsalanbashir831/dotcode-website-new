"use client";

import { type ReactNode, useEffect, useRef } from "react";
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
        .from(".qa-hero h1", { y: 24, opacity: 0, duration: 0.7 })
        .from(".qa-hero-copy", { y: 15, opacity: 0, duration: 0.58 }, "-=.38")
        .from(
          ".qa-hero-actions > *",
          { y: 12, opacity: 0, duration: 0.48, stagger: 0.09 },
          "-=.3",
        );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });
    }, rootRef);

    return () => context.revert();
  }, []);

  return <div ref={rootRef}>{children}</div>;
};
