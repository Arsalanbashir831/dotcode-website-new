import { ExternalLink, Globe2, Star } from "lucide-react";

const platformProfiles = [
  {
    platform: "fiverr",
    label: "fiverr.",
    rating: "4.7",
    ratingLabel: "star rating",
    achievement: "Level Two Seller",
    profileUrl: "https://www.fiverr.com/sellers/dot_code",
  },
  {
    platform: "upwork",
    label: "upwork",
    rating: "5.0",
    ratingLabel: "star rating",
    achievement: "100% Job Success",
    profileUrl:
      "https://www.upwork.com/freelancers/~01be48d2e9b5d45443?mp_source=share",
  },
];

export const PlatformPresenceSection = () => (
  <section
    className="qa-platform-presence"
    aria-labelledby="platform-presence-title"
  >
    <div className="qa-container">
      <div className="qa-platform-presence-heading" data-reveal>
        <p className="qa-eyebrow">Our platform presence</p>
        <h2 id="platform-presence-title">
          Trusted on Fiverr and Upwork.
        </h2>
        <p>
          A strong international track record, backed by independently rated
          client work.
        </p>
      </div>

      <div className="qa-platform-proof-grid">
        <article className="qa-global-proof" data-reveal>
          <Globe2 aria-hidden="true" />
          <div>
            <strong>45+</strong>
            <span>clients served across the world</span>
          </div>
        </article>

        {platformProfiles.map((profile) => (
          <article
            className={`qa-platform-proof ${profile.platform}`}
            key={profile.platform}
            data-reveal
          >
            <span className="qa-platform-proof-logo">{profile.label}</span>
            <div className="qa-platform-rating">
              <strong>{profile.rating}</strong>
              <span>
                <Star aria-hidden="true" fill="currentColor" />
                {profile.ratingLabel}
              </span>
            </div>
            <p>{profile.achievement}</p>
            <a
              href={profile.profileUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              View {profile.label.replace(".", "")} profile
              <ExternalLink aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);
