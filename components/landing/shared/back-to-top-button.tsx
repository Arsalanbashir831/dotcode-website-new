"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { getDictionary } from "@/components/i18n/dictionary";
import { useLocale } from "@/components/i18n/locale-provider";

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const label = getDictionary(useLocale()).common.backToTop;

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 600);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`qa-back-to-top ${isVisible ? "is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label={label}
      title={label}
    >
      <ArrowUp aria-hidden="true" />
    </button>
  );
};
