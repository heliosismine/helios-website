import { ArrowRight, MessageSquare } from "lucide-react";

export function HeroSection({ content, onNavigate }) {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <p className="eyebrow">{content.eyebrow}</p>

        <h1>{content.title}</h1>

        <p className="hero-description">{content.subtitle}</p>

        <div className="hero-actions">
          <button
            className="button button-primary"
            onClick={() => onNavigate("servicios")}
          >
            {content.primaryCta}
            <ArrowRight size={15} />
          </button>

          <button
            className="button button-secondary"
            onClick={() => onNavigate("contacto")}
          >
            <MessageSquare size={15} />
            {content.secondaryCta}
          </button>
        </div>

        <div className="hero-stats">
          {content.stats.map((stat) => (
            <div key={stat.label} className="stat">
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
s;
