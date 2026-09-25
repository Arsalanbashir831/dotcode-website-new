"use client";

import { useEffect, useState } from "react";

const words = ["Wholesellers", "Retailers", "E-commerce", "Production House"];

const transitionDuration = 350;
const wordDuration = 2400;

export const RotatingWords = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    let transitionTimer: ReturnType<typeof setTimeout>;
    const rotationTimer = setInterval(() => {
      setIsVisible(false);
      transitionTimer = setTimeout(() => {
        setActiveIndex((currentIndex) => (currentIndex + 1) % words.length);
        setIsVisible(true);
      }, transitionDuration);
    }, wordDuration);

    return () => {
      clearInterval(rotationTimer);
      clearTimeout(transitionTimer);
    };
  }, []);

  return (
    <span className="qa-rotating-word-slot">
      <span
        aria-hidden="true"
        className={`qa-rotating-word ${isVisible ? "is-visible" : ""}`}
      >
        {words[activeIndex]}
      </span>
      <span className="sr-only">
        Wholesellers, Retailers, E-commerce, and Manufacturing Production Houses
      </span>
    </span>
  );
};
