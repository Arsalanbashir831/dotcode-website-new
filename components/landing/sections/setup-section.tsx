import { setupSteps } from "@/components/landing/data/landing-content";

export const SetupSection = () => (
  <section className="qa-section bg-white">
    <div className="qa-container qa-setup">
      <div data-reveal>
        <p className="qa-eyebrow">Getting started</p>
        <h2>
          <span>Software is only useful when</span>
          <span>your team can put it to work.</span>
        </h2>
        <p>
          Dotcode helps you move from your current tools to QuickAccounts with a
          practical setup for your agreed workflow.
        </p>
      </div>
      <div>
        {setupSteps.map(({ title, description }, index) => (
          <article className="qa-setup-row" key={title} data-reveal>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
