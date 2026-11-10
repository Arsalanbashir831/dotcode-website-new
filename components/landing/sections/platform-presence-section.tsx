import { ExternalLink, Globe2, Star } from "lucide-react";

import { fill, getDictionary } from "@/components/i18n/dictionary";
import type { Locale } from "@/lib/i18n";

const platformProfiles = [
  {
    platform: "fiverr",
    label: "fiverr.",
    name: "Fiverr",
    rating: "4.7",
    achievementKey: "fiverrAchievement",
    profileUrl: "https://www.fiverr.com/sellers/dot_code",
  },
  {
    platform: "upwork",
    label: "upwork",
    name: "Upwork",
    rating: "5.0",
    achievementKey: "upworkAchievement",
    profileUrl:
      "https://www.upwork.com/freelancers/~01be48d2e9b5d45443?mp_source=share",
  },
] as const;

export const PlatformPresenceSection = ({ locale }: { locale: Locale }) => {
  const t = getDictionary(locale).platformPresence;
  return (
    <section
      className="qa-platform-presence"
      aria-labelledby="platform-presence-title"
    >
      <div className="qa-container">
        <div className="qa-platform-presence-heading" data-reveal>
          <p className="qa-eyebrow">{t.eyebrow}</p>
          <h2 id="platform-presence-title">{t.title}</h2>
          <p>{t.description}</p>
        </div>

        <div className="qa-platform-proof-grid">
          <article className="qa-global-proof" data-reveal>
            <Globe2 aria-hidden="true" />
            <div>
              <strong>45+</strong>
              <span>{t.clientsServed}</span>
            </div>
          </article>

          {platformProfiles.map((profile) => (
            <article
              className={`qa-platform-proof ${profile.platform}`}
              key={profile.platform}
              data-reveal
            >
              <span className="qa-platform-proof-logo" dir="ltr">{profile.label}</span>
              <div className="qa-platform-rating">
                <strong>{profile.rating}</strong>
                <span>
                  <Star aria-hidden="true" fill="currentColor" />
                  {t.starRating}
                </span>
              </div>
              <p>{t[profile.achievementKey]}</p>
              <a
                href={profile.profileUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {fill(t.viewProfile, { name: profile.name })}
                <ExternalLink aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
