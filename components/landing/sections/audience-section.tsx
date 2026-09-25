import { ImageIcon } from "lucide-react";
import Image from "next/image";

import {
  audienceItems,
  type AudienceItem,
} from "@/components/landing/data/landing-content";
import { SectionHeading } from "@/components/landing/shared/section-heading";

const AudienceMedia = ({
  image,
  title,
}: Pick<AudienceItem, "image" | "title">) => (
  <div className="qa-audience-media">
    {image ? (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 769px) 50vw, 100vw"
      />
    ) : (
      <div className="qa-audience-placeholder">
        <ImageIcon aria-hidden="true" />
        <strong>{title} image</strong>
        <span>Add the image path in landing-content.ts</span>
      </div>
    )}
  </div>
);

export const AudienceSection = () => (
  <section className="qa-section qa-audience-section">
    <div className="qa-container">
      <SectionHeading
        isDark
        eyebrow="Made for merchandise businesses"
        title="Designed around buying, holding and selling goods."
        description="QuickAccounts focuses on practical stock and account records for trade-led businesses."
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
              </div>
              <AudienceMedia image={item.image} title={item.title} />
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
