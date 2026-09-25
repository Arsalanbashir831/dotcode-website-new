"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "I’ve been working with Dotcode for over 6 months now, and the biggest reason I continue is trust. He’s clear with requirements, proposes practical solutions, and handles the work without unnecessary back-and-forth. I can rely on him to get things done without the stress of constantly following up.",
    name: "carolynmaya",
    role: "Fiverr client",
    company: "USA",
    platform: "fiverr",
  },
  {
    quote:
      "Working with Dotcode and their team has been the best decision. They really have a deep understanding of crafting an AI function. They don’t take shortcuts, they advise you at every step, and they make sure to include you. Hoping to work with him again soon. Thank you, Arsalan!",
    name: "Leena",
    role: "Fiverr client",
    company: "Saudi Arabia",
    platform: "fiverr",
  },
  {
    quote:
      "I loved the final product. It was per the requirements. The vendor suggested ideas to improve the product, and the final product exceeded expectations. The vendor also prepared good demos and improved the product as required. Thank you!",
    name: "Shambu Nath",
    role: "Founder of Parlezhub · Fiverr",
    company: "USA",
    platform: "fiverr",
  },
  {
    quote:
      "The UI design was very good and was completed on time, even with all the last-minute changes we wanted.",
    name: "Nibras",
    role: "Fiverr client",
    company: "UAE",
    platform: "fiverr",
  },
  {
    quote:
      "Working with Dotcode was a great experience! Their professionalism in software development is top-notch, and their quick responsiveness and proactive communication made collaboration a breeze.",
    name: "Alicia Persaud",
    role: "Founder of Mindhush · Fiverr",
    company: "Romania",
    platform: "fiverr",
  },
  {
    quote:
      "I have booked over 100+ Fiverr projects, and Dotcode and his team definitely belong among the top ones. He is a very fast developer, always understood the tasks perfectly, brought in valid recommendation points I didn’t even think of, and overall was a pleasure to work with. I am continuing to work with him.",
    name: "River",
    role: "Founder of Moveevent · Fiverr",
    company: "Switzerland",
    platform: "fiverr",
    featured: true,
  },
  {
    quote:
      "Dotcode and their QuickAccounts were outstanding! Their attention to detail and professionalism truly shined through. Proactive communication and excellent politeness made cooperation a breeze. Excellent work! They helped resolve critical issues and guided our startup in developing a proof of concept. Highly recommended!",
    name: "Salpeer",
    role: "Founder of Modelleaps · Fiverr",
    company: "USA",
    platform: "fiverr",
  },
  {
    quote:
      "I’ve been working with Dotcode for several months now, and he’s consistently excellent. Their team is responsive, goes above and beyond, and always makes sure to accommodate my needs. I trust his work completely and will continue using him for all future projects. Highly recommended!",
    name: "Raheem",
    role: "Project Manager at Cartwright King · Upwork",
    company: "UK",
    platform: "upwork",
  },
  {
    quote:
      "The Dotcode team is extremely knowledgeable and delivered outstanding work from start to finish. I really appreciated how proactive he was. He always kept me in the loop and even reached out with improved recommendations as the project evolved.",
    name: "Ryan",
    role: "Founder of Sunshine Offers · Upwork",
    company: "USA",
    platform: "upwork",
  },
];

export const TestimonialsSection = () => {
  const railRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);

  const updateControls = useCallback(() => {
    const rail = railRef.current;

    if (!rail) return;

    setCanScrollBack(rail.scrollLeft > 2);
    setCanScrollForward(
      rail.scrollLeft < rail.scrollWidth - rail.clientWidth - 2,
    );
  }, []);

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) return;

    updateControls();
    rail.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);

    return () => {
      rail.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, [updateControls]);

  const moveTestimonials = (direction: -1 | 1) => {
    const rail = railRef.current;
    const firstCard = rail?.querySelector<HTMLElement>(".qa-testimonial-card");

    if (!rail || !firstCard) return;

    const gap = Number.parseFloat(getComputedStyle(rail).columnGap) || 0;
    rail.scrollBy({
      left: direction * (firstCard.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="qa-testimonials-section" aria-labelledby="testimonials-title">
      <div className="qa-container qa-testimonials-topline">
        <div className="qa-testimonials-heading" data-reveal>
          <p className="qa-eyebrow">Testimonials</p>
          <h2 id="testimonials-title">
            <span>Don’t take our word for it.</span>
            <span>Hear it from our clients.</span>
          </h2>
        </div>

        <div className="qa-testimonial-controls" aria-label="Testimonial navigation">
          <button
            type="button"
            onClick={() => moveTestimonials(-1)}
            disabled={!canScrollBack}
            aria-label="Show previous testimonial"
          >
            <ArrowLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => moveTestimonials(1)}
            disabled={!canScrollForward}
            aria-label="Show next testimonial"
          >
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className="qa-testimonials-rail"
        aria-label="Client testimonials"
        ref={railRef}
      >
        {testimonials.map((testimonial) => (
          <blockquote
            className={`qa-testimonial-card ${testimonial.featured ? "featured" : ""}`}
            key={testimonial.name}
          >
            <div
              className={`qa-testimonial-avatar ${testimonial.platform}`}
              aria-hidden="true"
            >
              {testimonial.platform === "fiverr" ? "fiverr." : "upwork"}
            </div>
            <p>“{testimonial.quote}”</p>
            <footer>
              <strong>{testimonial.name}</strong>
              <span>
                {testimonial.role} · {testimonial.company}
              </span>
            </footer>
          </blockquote>
        ))}
      </div>

    </section>
  );
};
