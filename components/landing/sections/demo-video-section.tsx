import { Play } from "lucide-react";

// Paste the YouTube video ID here, for example: "dQw4w9WgXcQ".
const YOUTUBE_VIDEO_ID = "";

export const DemoVideoSection = () => {
  const embedUrl = YOUTUBE_VIDEO_ID
    ? "https://www.youtube-nocookie.com/embed/" +
      YOUTUBE_VIDEO_ID +
      "?rel=0"
    : null;

  return (
    <section className="qa-demo-video-section" aria-label="QuickAccounts software demo">
      <div className="qa-container">
        {/* <div className="qa-demo-video-heading" data-reveal>
          <p className="qa-eyebrow">Product walkthrough</p>
          <h2 id="demo-video-title">See QuickAccounts in action.</h2>
          <p>
            Watch a practical walkthrough of the software and see how your team
            can manage everyday wholesale records in one place.
          </p>
        </div> */}

        <div className="qa-demo-video-frame" data-reveal>
          {/* <div className="qa-demo-video-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <p>QuickAccounts software demo</p>
          </div> */}

          <div className="qa-demo-video-player">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title="QuickAccounts software demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <div className="qa-demo-video-placeholder">
                <span className="qa-demo-video-play" aria-hidden="true">
                  <Play fill="currentColor" />
                </span>
                <strong>Your software demo will play here.</strong>
                <p>
                  Add your YouTube video ID in{" "}
                  <code>demo-video-section.tsx</code>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
