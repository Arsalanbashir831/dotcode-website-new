import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { audienceItems } from "@/components/landing/data/landing-content";
import { SectionHeading } from "@/components/landing/shared/section-heading";

export const AudienceSection = () => (
  <section className="qa-section qa-audience-section" id="who-its-for">
    <div className="qa-container">
      <SectionHeading
        isDark
        eyebrow="Who it's for"
        title="Built for firms that bill for their expertise"
        description="When your business runs on people's time and know-how, the money side is about billing clients, controlling costs and getting paid on time."
      />
      <div className="qa-audience-grid qa-audience-grid-simple">
        {audienceItems.map(({ icon: Icon, title, description, href }) => (
          <article className="qa-audience-card qa-audience-card-simple" key={href} data-reveal>
            <div className="qa-audience-copy">
              <div className="qa-audience-title">
                <span><Icon aria-hidden="true" /></span>
                <h3>{title}</h3>
              </div>
              <p>{description}</p>
              <Link className="qa-audience-link" href={href}>
                Learn more<ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
      <p className="qa-audience-all"><Link href="/who-its-for">See all industries we serve</Link></p>
    </div>
  </section>
);
