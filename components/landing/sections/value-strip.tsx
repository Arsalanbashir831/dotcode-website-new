"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import { valueItems } from "@/components/landing/data/landing-content";

const groupRepetitions = 6;
const pixelsPerSecond = 34;

type TickerTrackProps = {
  direction: "left" | "right";
};

const TickerContent = () => (
  <>
    {Array.from({ length: groupRepetitions }, (_, repetitionIndex) =>
      valueItems.map(({ label }) => (
        <span className="qa-ticker-item" key={`${repetitionIndex}-${label}`}>
          {label}
        </span>
      )),
    )}
  </>
);

const TickerTrack = ({ direction }: TickerTrackProps) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstGroupRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const firstGroup = firstGroupRef.current;

    if (!viewport || !track || !firstGroup) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let tween: gsap.core.Tween | undefined;
    let resizeFrame = 0;

    const createTween = () => {
      const previousProgress = tween?.progress() ?? 0;
      tween?.kill();

      if (mediaQuery.matches) {
        gsap.set(track, { clearProps: "transform" });
        return;
      }

      const distance = firstGroup.offsetWidth;
      if (distance <= 0) return;

      const startX = direction === "right" ? -distance : 0;
      const endX = direction === "right" ? 0 : -distance;

      gsap.set(track, { x: startX });
      tween = gsap.to(track, {
        x: endX,
        duration: distance / pixelsPerSecond,
        ease: "none",
        repeat: -1,
      });
      tween.progress(previousProgress);
    };

    const scheduleRebuild = () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(createTween);
    };

    const resizeObserver = new ResizeObserver(scheduleRebuild);
    resizeObserver.observe(viewport);
    resizeObserver.observe(firstGroup);
    mediaQuery.addEventListener("change", scheduleRebuild);
    scheduleRebuild();

    return () => {
      cancelAnimationFrame(resizeFrame);
      resizeObserver.disconnect();
      mediaQuery.removeEventListener("change", scheduleRebuild);
      tween?.kill();
      gsap.set(track, { clearProps: "transform" });
    };
  }, [direction]);

  return (
    <div
      className={`qa-ticker-row qa-ticker-row-${direction}`}
      ref={viewportRef}
    >
      <div className="qa-ticker-track" ref={trackRef} aria-hidden="true">
        <div className="qa-ticker-group" ref={firstGroupRef}>
          <TickerContent />
        </div>
        <div className="qa-ticker-group">
          <TickerContent />
        </div>
      </div>
    </div>
  );
};

export const ValueStrip = () => (
  <section className="qa-value-strip" aria-label="QuickAccounts benefits">
    <TickerTrack direction="left" />
    <TickerTrack direction="right" />
  </section>
);
