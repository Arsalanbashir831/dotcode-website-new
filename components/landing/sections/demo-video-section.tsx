import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_DEMO_URL } from "@/lib/contact";

export const DemoVideoSection = () => {
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

          <div className="qa-demo-video-player qa-demo-evidence-panel">
            <Image src="/assets/feature5-ledger.png" alt="QuickAccounts ledger and stock workflow preview" width={1200} height={760} />
            <div className="qa-demo-evidence-copy">
              <p className="qa-eyebrow">Product walkthrough</p>
              <h2>See the records your team works with every day.</h2>
              <p>Review stock, serials, customer accounts and warranty workflows in a guided demo built around your operation.</p>
              <Link className="qa-button" href={WHATSAPP_DEMO_URL} target="_blank" rel="noopener noreferrer">Book a guided demo</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
