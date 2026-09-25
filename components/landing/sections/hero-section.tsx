import { Button } from "@/components/ui/button";
import { RotatingWords } from "@/components/landing/shared/rotating-words";
import { WHATSAPP_CONTACT_URL } from "@/lib/contact";

export const HeroSection = () => (
  <section className="qa-hero" id="quickaccounts">
    <div className="qa-container qa-hero-grid">
      <div className="qa-hero-intro">
        <h1>
          <span className="qa-hero-heading-line">Make Accounting</span>
          <span className="qa-hero-heading-row">
            <span>Easy for</span>
            <RotatingWords />
          </span>
        </h1>
        <p className="qa-hero-copy">
          Keep stock, purchases, customer accounts and cash in one simple system
          built around the way you trade. Dotcode sets it up for your business
          and helps your team get started.
        </p>
        <div className="qa-hero-actions">
          <Button asChild size="lg">
            <a
              href={WHATSAPP_CONTACT_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Contact Our Team
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a
              href={WHATSAPP_CONTACT_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              See license options
            </a>
          </Button>
        </div>
        {/* <ul className="qa-proof">
          <li>Unlimited users</li>
          <li>Setup included</li>
          <li>Data migration and training</li>
        </ul> */}
      </div>
      {/* <div className="qa-stage">
        <div className="qa-float qa-float-left">
          <span>∞</span>
          <div>
            <strong>Unlimited users</strong>
            <small>No per-user charge</small>
          </div>
        </div>
        <div className="qa-float qa-float-right">
          <span>✓</span>
          <div>
            <strong>Setup included</strong>
            <small>Migration and training too</small>
          </div>
        </div>
        <div
          className="qa-window"
          role="img"
          aria-label="Illustrative QuickAccounts workspace preview"
        >
          <div className="qa-workspace-top">
            <div className="flex items-center gap-3">
              <b className="qa-mark">QA</b>
              <span className="text-sm font-extrabold">
                QuickAccounts
                <small className="block text-[9px] tracking-widest text-[#88817b]">
                  WHOLESALE WORKSPACE
                </small>
              </span>
            </div>
            <span className="flex items-center gap-2 text-xs text-[#77716b]">
              <i className="qa-signal" /> Example preview
            </span>
          </div>
          <div className="qa-workspace-layout">
            <aside className="qa-workspace-nav">
              <p>WORKSPACE</p>
              {workspaceNavigation.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </aside>
            <div className="qa-workspace-main">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-extrabold tracking-widest text-[#918a84]">
                    QUICK VIEW
                  </p>
                  <h2 className="text-lg font-bold tracking-tight">
                    Your trading records
                  </h2>
                </div>
                <span className="qa-sample">Sample workspace</span>
              </div>
              <div className="qa-summary">
                {workspaceSummaries.map(([label, title]) => (
                  <article key={label}>
                    <div className="flex justify-between text-xs text-[#77716b]">
                      <span>{label}</span>
                      <b>▦</b>
                    </div>
                    <strong>{title}</strong>
                    <small>Everything easy to find.</small>
                  </article>
                ))}
              </div>
              <div className="qa-records">
                <div>
                  <strong>Recent records</strong>
                  <span>Illustrative sample</span>
                </div>
                {recentRecords.map(([letter, label]) => (
                  <div key={label}>
                    <span className="qa-record-icon">{letter}</span>
                    <strong>{label}</strong>
                    <small>Example entry</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </section>
);
