import { setupSteps } from "@/components/landing/data/landing-content";

export const SetupSection = () => (
  <section className="qa-section bg-white">
    <div className="qa-container qa-setup">
      <div data-reveal>
        <p className="qa-eyebrow">Getting started</p>
        <h2>
          <span>Software only helps when</span>
          <span>your team can use it.</span>
        </h2>
        <p>
          We set it up, bring over your records and train your staff, so you can start billing quickly.
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
