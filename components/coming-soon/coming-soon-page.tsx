"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";

import { WHATSAPP_CONTACT_URL } from "@/lib/contact";

const headlineWords = ["Something", "bright", "is", "taking", "shape."];

export const ComingSoonPage = () => {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .from(".cs-header", { y: -18, opacity: 0, duration: 0.65 })
        .from(
          ".cs-word",
          {
            yPercent: 115,
            rotate: 4,
            opacity: 0,
            duration: 0.85,
            stagger: 0.08,
          },
          "-=0.25",
        )
        .from(
          ".cs-intro > *",
          { y: 18, opacity: 0, duration: 0.58, stagger: 0.09 },
          "-=0.42",
        )
        .from(
          ".cs-footer",
          { y: 12, opacity: 0, duration: 0.5 },
          "-=0.25",
        );

      gsap.utils.toArray<HTMLElement>(".cs-shape").forEach((shape, index) => {
        gsap.to(shape, {
          x: index % 2 === 0 ? 14 : -12,
          y: index % 3 === 0 ? -18 : 16,
          rotate: index % 2 === 0 ? 9 : -8,
          duration: 3.2 + index * 0.45,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      gsap.to(".cs-orbit-dot", {
        rotate: 360,
        duration: 11,
        ease: "none",
        repeat: -1,
        transformOrigin: "50% 50%",
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  return (
    <main className="cs-page" ref={pageRef}>
      <div className="cs-grid" aria-hidden="true" />

      <div className="cs-shapes" aria-hidden="true">
        <span className="cs-shape cs-shape-circle" />
        <span className="cs-shape cs-shape-square" />
        <span className="cs-shape cs-shape-pill">NEW</span>
        <span className="cs-shape cs-shape-spark">✦</span>
        <span className="cs-shape cs-shape-ring">
          <i className="cs-orbit-dot" />
        </span>
      </div>

      <header className="cs-header">
        <Image
          src="/assets/dotcode-logo.png"
          width={1711}
          height={530}
          alt="Dotcode"
          priority
          className="cs-logo"
        />
        <span className="cs-status">
          <i aria-hidden="true" />
          Website update in progress
        </span>
      </header>

      <section className="cs-content" aria-labelledby="coming-soon-title">
        <h1 id="coming-soon-title">
          {headlineWords.map((word) => (
            <span className="cs-word-wrap" key={word}>
              <span className="cs-word">{word}</span>
            </span>
          ))}
        </h1>

        <div className="cs-intro">
          <p>
            We’re updating our website and polishing the final details. We’ll
            be live again very soon.
          </p>
          <a
            href={WHATSAPP_CONTACT_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            Need us now? Let’s talk
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="cs-footer">
        <span>Built with care by Dotcode</span>
        <span aria-hidden="true">Coming soon · Coming soon · Coming soon</span>
      </footer>
    </main>
  );
};
