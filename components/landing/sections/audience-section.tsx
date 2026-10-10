import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import {
  audienceItems,
} from "@/components/landing/data/landing-content";
import { AudienceGraphic } from "@/components/landing/shared/audience-graphic";
import { SectionHeading } from "@/components/landing/shared/section-heading";

export const AudienceSection = () => (
  <section className="qa-section qa-audience-section">
    <div className="qa-container">
      <SectionHeading
        isDark
        eyebrow="Made for merchandise businesses"
        title="Your trade. Your stock. All connected."
        description="From the first purchase to the final payment, QuickAccounts brings the daily work of trading businesses together."
      />
      <div className="qa-audience-grid">
        {audienceItems.map((item, index) => {
          const Icon = item.icon;
          const isWide = index === audienceItems.length - 1;

          return (
            <article
              className={`qa-audience-card ${isWide ? "qa-audience-card-wide" : ""}`}
              key={item.label}
              data-reveal
            >
              <div className="qa-audience-copy">
                <p className="qa-audience-label">{item.label}</p>
                <div className="qa-audience-title">
                  <span>
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
                <Link className="qa-audience-link" href={item.href}>
                  {item.linkLabel}<ArrowUpRight aria-hidden="true" />
                </Link>
              </div>
              <AudienceGraphic kind={item.graphic} />
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
