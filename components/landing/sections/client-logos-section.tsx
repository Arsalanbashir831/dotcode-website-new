const clientLogos = [
  { name: "Northstar", mark: "✦" },
  { name: "Vertex", mark: "◆" },
  { name: "Aperture", mark: "◉" },
  { name: "Summit", mark: "▲" },
  { name: "Brightline", mark: "═" },
  { name: "Oak & Co.", mark: "●" },
  { name: "Meridian", mark: "M" },
  { name: "Atlas", mark: "A" },
];

const LogoSet = ({ hidden = false }: { hidden?: boolean }) => (
  <div className="qa-client-logo-set" aria-hidden={hidden || undefined}>
    {clientLogos.map((client) => (
      <div
        className="qa-client-logo"
        key={client.name}
        aria-label={`${client.name} logo placeholder`}
      >
        <span aria-hidden="true">{client.mark}</span>
        <strong>{client.name}</strong>
      </div>
    ))}
  </div>
);

export const ClientLogosSection = () => (
  <section
    className="qa-client-logos-section"
    aria-labelledby="client-logos-title"
  >
    <div className="qa-container">
      <div className="qa-client-logos-heading">
        <span>Client trust</span>
        <p id="client-logos-title">
          Built alongside teams that keep goods moving.
        </p>
      </div>
    </div>

    <div className="qa-client-logo-marquee" role="region" aria-label="Client logos">
      <div className="qa-client-logo-track">
        <LogoSet />
        <LogoSet hidden />
      </div>
    </div>

    <div className="qa-container">
      <p className="qa-client-logo-note">
        Placeholder marks—ready to be replaced with your client logos.
      </p>
    </div>
  </section>
);
