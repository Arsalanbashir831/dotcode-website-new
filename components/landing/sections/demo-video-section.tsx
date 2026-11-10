import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_DEMO_URL } from "@/lib/contact";

export const DemoVideoSection = () => {
  return (
    <section className="qa-demo-video-section" aria-label="Dotcode ERP software demo">
      <div className="qa-container">
        {/* <div className="qa-demo-video-heading" data-reveal>
          <p className="qa-eyebrow">Product walkthrough</p>
          <h2 id="demo-video-title">See Dotcode ERP in action.</h2>
          <p>
            Watch a practical walkthrough of the software and see how your team
            can manage sales, stock, ledgers and reports in one place.
          </p>
        </div> */}

        <div className="qa-demo-video-frame" data-reveal>
          {/* <div className="qa-demo-video-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <p>Dotcode ERP software demo</p>
          </div> */}

          <div className="qa-demo-video-player qa-demo-evidence-panel">
            <Image src="/assets/feature5-ledger.png" alt="Dotcode ERP customer ledger preview" width={1200} height={760} />
            <div className="qa-demo-evidence-copy">
              <p className="qa-eyebrow">Product walkthrough</p>
              <h2>See your business numbers in plain view.</h2>
              <p>Review POS sales, stock, ledgers and reports in a free demo built around your business.</p>
              <Link className="qa-button" href={WHATSAPP_DEMO_URL} target="_blank" rel="noopener noreferrer">Book a free demo</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
