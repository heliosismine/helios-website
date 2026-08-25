import { ArrowRight } from "lucide-react";
import { services } from "../data/services";

export function ServicesPage({ onNavigate }) {
  return (
    <section className="page-section container">
      <header className="page-intro">
        <p className="eyebrow">Lo que hacemos</p>
        <h1>Tres pilares. Una visión.</h1>
        <p>
          Cada servicio está diseñado para resolver un problema real de tu
          negocio con precisión y elegancia.
        </p>
      </header>

      <div className="services-list">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article className="service-card" key={service.id}>
              <div className="service-heading">
                <span className="service-number">{service.number}</span>

                <div>
                  <div
                    className="service-icon"
                    style={{ color: service.color }}
                  >
                    <Icon size={22} />
                  </div>

                  <h2>{service.title}</h2>
                  <span className="service-category">{service.category}</span>
                </div>
              </div>

              <p className="service-description">{service.description}</p>

              <div className="service-points">
                {service.points.map((point) => (
                  <span key={point}>• {point}</span>
                ))}

                <button
                  className="text-link"
                  onClick={() => onNavigate("contacto")}
                >
                  Solicitar este servicio
                  <ArrowRight size={14} />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
