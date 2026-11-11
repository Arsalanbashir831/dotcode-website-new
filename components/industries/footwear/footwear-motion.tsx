"use client";

import { type ReactNode, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Scroll and entrance choreography for the footwear industry page.
 * Content is server-rendered and fully readable without JS; every effect
 * here is progressive and skipped for prefers-reduced-motion.
 */
export function FootwearMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    gsap.registerPlugin(ScrollTrigger);

    const isRtl = document.documentElement.dir === "rtl";
    const cleanups: (() => void)[] = [];
    let heroSettled = false;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* ---------- Hero entrance ---------- */
        const hero = gsap.timeline({ defaults: { ease: "power3.out" }, onComplete: () => { heroSettled = true; } });
        hero
          .from(".fw-breadcrumbs, .fw-badge", { y: 16, autoAlpha: 0, duration: 0.5, stagger: 0.08 })
          .from(".fw-word", { yPercent: 110, rotate: 4, duration: 0.8, stagger: 0.045 }, "-=.2")
          .from(".fw-intro", { y: 18, autoAlpha: 0, duration: 0.6 }, "-=.5")
          .from(".fw-hero-copy .fw-actions > *", { y: 14, autoAlpha: 0, duration: 0.5, stagger: 0.1 }, "-=.35")
          .from(".fw-proof li", { x: isRtl ? 12 : -12, autoAlpha: 0, duration: 0.4, stagger: 0.07 }, "-=.3")
          .from(".fw-stage-ring", { scale: 0.6, autoAlpha: 0, duration: 1.1, ease: "expo.out" }, 0.2)
          .from(".fw-pos-card", { y: 60, rotate: -8, autoAlpha: 0, duration: 0.9 }, 0.35)
          .from(".fw-sneaker", { x: isRtl ? 220 : -220, y: -40, rotate: -18, autoAlpha: 0, duration: 1.1, ease: "back.out(1.4)" }, 0.55)
          .from(".fw-chip", { scale: 0.4, autoAlpha: 0, duration: 0.6, stagger: 0.14, ease: "back.out(2)" }, 1.0);

        // Idle float on the hero pieces once they land.
        gsap.to(".fw-sneaker", { yPercent: -5, rotate: -2, duration: 2.6, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.7 });
        gsap.utils.toArray<HTMLElement>(".fw-chip").forEach((chip, i) => {
          gsap.to(chip, { yPercent: i % 2 ? 14 : -14, duration: 2.2 + i * 0.4, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.6 + i * 0.2 });
        });

        // Hero drifts away as you scroll past it.
        gsap.to(".fw-stage", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: ".fw-hero", start: "top top", end: "bottom top", scrub: true },
        });

        /* ---------- Marquee ---------- */
        const group = root.querySelector<HTMLElement>(".fw-marquee-group");
        if (group) {
          const marquee = gsap.to(".fw-marquee-track", {
            x: () => -group.offsetWidth,
            duration: () => group.offsetWidth / 60,
            ease: "none",
            repeat: -1,
          });
          // Pause the loop while it is off screen.
          ScrollTrigger.create({
            trigger: ".fw-marquee",
            start: "top bottom",
            end: "bottom top",
            onToggle: (self) => (self.isActive ? marquee.play() : marquee.pause()),
          });
        }

        /* ---------- Size matrix (plays once, no pin) ---------- */
        const total = root.querySelector<HTMLElement>(".fw-matrix-total");
        const totalValue = Number(total?.dataset.total ?? 0);
        const counter = { value: 0 };
        gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: { trigger: ".fw-size", start: "top 75%", once: true },
          onComplete: () => root.querySelector(".fw-matrix")?.classList.add("is-found"),
        })
          .from(".fw-size-copy > :not(.fw-size-shoe)", { y: 30, autoAlpha: 0, stagger: 0.08, duration: 0.6 })
          .from(".fw-matrix", { y: 50, autoAlpha: 0, duration: 0.7 }, 0)
          .from(".fw-size-shoe", { x: isRtl ? -80 : 80, rotate: 30, autoAlpha: 0, duration: 0.9, ease: "back.out(1.6)" }, 0.3)
          .from(".fw-cell", { scale: 0.5, autoAlpha: 0, duration: 0.35, stagger: { each: 0.02, grid: "auto", from: "start" } }, 0.35)
          .to(counter, {
            value: totalValue,
            duration: 0.9,
            ease: "power1.out",
            onUpdate: () => { if (total) total.textContent = String(Math.round(counter.value)); },
          }, 0.35)
          .fromTo(".fw-matrix-scan", { xPercent: isRtl ? 100 : -100, autoAlpha: 1 }, { xPercent: isRtl ? -100 : 100, autoAlpha: 0, duration: 0.8, ease: "none" }, 0.6)
          .to(".fw-cell.is-target", { scale: 1.18, duration: 0.5, ease: "back.out(2.5)" }, 1.2);

        /* ---------- Generic reveals ---------- */
        gsap.utils.toArray<HTMLElement>("[data-fw-reveal]").forEach((el) => {
          gsap.from(el, { y: 40, autoAlpha: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", once: true } });
        });

        /* ---------- Feature cards ---------- */
        gsap.from(".fw-feature", {
          y: 70,
          autoAlpha: 0,
          rotate: (i) => (i - 1) * 2,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: { trigger: ".fw-feature-grid", start: "top 80%", once: true },
        });
        gsap.from(".fw-mini-sizes span", {
          y: 16, autoAlpha: 0, duration: 0.4, stagger: 0.06, ease: "back.out(2)",
          scrollTrigger: { trigger: ".fw-feature-grid", start: "top 70%", once: true },
        });
        gsap.from(".fw-mini-receipt span", {
          x: isRtl ? 20 : -20, autoAlpha: 0, duration: 0.45, stagger: 0.15,
          scrollTrigger: { trigger: ".fw-feature-grid", start: "top 70%", once: true },
        });
        gsap.fromTo(".fw-transfer-dot", { left: "0%" }, { left: "100%", duration: 1.8, ease: "power1.inOut", repeat: -1, repeatDelay: 0.4 });

        /* ---------- Dashboard ---------- */
        gsap.fromTo(".fw-dash-frame",
          { rotateX: 22, y: 60, scale: 0.94 },
          { rotateX: 0, y: 0, scale: 1, ease: "none", scrollTrigger: { trigger: ".fw-dash-stage", start: "top 95%", end: "top 35%", scrub: true } },
        );
        const dashIn = { trigger: ".fw-dash-stage", start: "top 70%", once: true };
        const dash = gsap.timeline({ scrollTrigger: dashIn, defaults: { ease: "power3.out" } });
        dash
          .from(".fw-dash-side > span", { x: isRtl ? 16 : -16, autoAlpha: 0, duration: 0.4, stagger: 0.05 })
          .from(".fw-kpi", { y: 24, autoAlpha: 0, duration: 0.5, stagger: 0.08 }, 0.1)
          .from(".fw-dash-grid > .fw-widget", { y: 40, autoAlpha: 0, duration: 0.6, stagger: 0.1 }, 0.25)
          .from(".fw-bar", { scaleY: 0, duration: 0.7, stagger: 0.03, ease: "back.out(1.6)" }, 0.5)
          .from(".fw-donut-seg", { strokeDasharray: "0 100", duration: 0.9, stagger: 0.12, ease: "power2.out" }, 0.55)
          .from(".fw-alerts li, .fw-po li", { x: isRtl ? -20 : 20, autoAlpha: 0, duration: 0.4, stagger: 0.07 }, 0.7)
          .from(".fw-pl i b", { scaleX: 0, duration: 0.7, stagger: 0.12 }, 0.75)
          .from(".fw-profit", { scale: 0.9, autoAlpha: 0, duration: 0.5, ease: "back.out(2)" }, 1.1)
          .from(".fw-dash-shoe", { y: 80, rotate: 25, autoAlpha: 0, duration: 0.9, ease: "back.out(1.5)" }, 0.6)
          .from(".fw-dash-module", { y: 30, autoAlpha: 0, duration: 0.5, stagger: 0.08 }, 0.9);
        gsap.to(".fw-dash-shoe", { yPercent: -6, rotate: -3, duration: 2.8, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 2 });

        /* ---------- Stats ---------- */
        gsap.from(".fw-stat", {
          y: 40, autoAlpha: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".fw-stats", start: "top 85%", once: true },
        });
        gsap.from(".fw-stat strong", {
          scale: 0.5, duration: 0.9, stagger: 0.1, ease: "elastic.out(1, 0.6)",
          scrollTrigger: { trigger: ".fw-stats", start: "top 85%", once: true },
        });

        /* ---------- Steps ---------- */
        gsap.from(".fw-step-line > span", {
          scaleX: 0,
          ease: "none",
          scrollTrigger: { trigger: ".fw-step-wrap", start: "top 75%", end: "bottom 60%", scrub: true },
        });
        gsap.from(".fw-step", {
          y: 40, autoAlpha: 0, duration: 0.6, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ".fw-step-wrap", start: "top 80%", once: true },
        });

        /* ---------- CTA ---------- */
        gsap.from(".fw-cta-card", {
          scale: 0.92, autoAlpha: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: ".fw-cta", start: "top 80%", once: true },
        });
        gsap.fromTo(".fw-cta-shoe",
          { x: isRtl ? -120 : 120, rotate: 10 },
          { x: 0, rotate: -4, ease: "none", scrollTrigger: { trigger: ".fw-cta", start: "top bottom", end: "bottom top", scrub: true } },
        );
      });

      /* ---------- Desktop-only pinned scenes ---------- */
      mm.add("(min-width: 960px) and (prefers-reduced-motion: no-preference)", () => {
        // Mouse parallax on the hero stage.
        const stage = root.querySelector<HTMLElement>("[data-parallax-root]");
        if (stage) {
          const layers = gsap.utils.toArray<HTMLElement>("[data-depth]", stage).map((el) => ({
            depth: Number(el.dataset.depth) || 0.5,
            x: gsap.quickTo(el, "x", { duration: 0.8, ease: "power3.out" }),
            y: gsap.quickTo(el, "y", { duration: 0.8, ease: "power3.out" }),
          }));
          const onMove = (event: PointerEvent) => {
            if (!heroSettled) return;
            const rect = stage.getBoundingClientRect();
            const dx = (event.clientX - rect.left) / rect.width - 0.5;
            const dy = (event.clientY - rect.top) / rect.height - 0.5;
            layers.forEach((layer) => {
              layer.x(dx * 30 * layer.depth);
              layer.y(dy * 24 * layer.depth);
            });
          };
          const hero = root.querySelector<HTMLElement>(".fw-hero");
          hero?.addEventListener("pointermove", onMove);
          cleanups.push(() => hero?.removeEventListener("pointermove", onMove));
        }

        // PPC ads: horizontal scroll gallery.
        const track = root.querySelector<HTMLElement>(".fw-ads-track");
        const viewport = root.querySelector<HTMLElement>(".fw-ads-viewport");
        if (track && viewport) {
          const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
          gsap.to(track, {
            x: () => (isRtl ? distance() : -distance()),
            ease: "none",
            scrollTrigger: {
              trigger: ".fw-ads",
              start: "top top",
              end: () => `+=${distance()}`,
              pin: ".fw-ads-pin",
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          });
          gsap.from(".fw-ad", {
            y: 80, rotate: (i) => (i % 2 ? 4 : -4), autoAlpha: 0, duration: 0.9, stagger: 0.12, ease: "power3.out",
            scrollTrigger: { trigger: ".fw-ads", start: "top 70%", once: true },
          });
        }
      });

      /* ---------- Mobile fallbacks for the pinned scenes ---------- */
      mm.add("(max-width: 959px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".fw-ad").forEach((ad) => {
          gsap.from(ad, { y: 50, autoAlpha: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ad, start: "top 85%", once: true } });
        });
      });
    }, root);

    // Images and fonts can shift layout after first paint.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      cleanups.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
