import { Phone, Send } from "lucide-react";

export function ContactPage({ content }) {
  return (
    <section className="page-section container contact-page">
      <div className="contact-grid">
        <div className="contact-info">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p>{content.subtitle}</p>

          <dl>
            <div>
              <dt>Correo</dt>
              <dd>{content.email}</dd>
            </div>

            <div>
              <dt>WhatsApp</dt>
              <dd>{content.phone}</dd>
            </div>

            <div>
              <dt>País</dt>
              <dd>{content.country}</dd>
            </div>
          </dl>

          <a
            className="button whatsapp-button"
            href="https://wa.me/50375910769"
            target="_blank"
            rel="noreferrer"
          >
            <Phone size={16} />
            WhatsApp directo
          </a>
        </div>

        <form className="contact-form">
          <label>
            Nombre completo
            <input type="text" placeholder="Juan Pérez" />
          </label>

          <label>
            Correo electrónico
            <input type="email" placeholder="juan@empresa.com" />
          </label>

          <label>
            Empresa
            <input type="text" placeholder="Mi Empresa S.A." />
          </label>

          <label>
            ¿Qué necesitas construir?
            <textarea rows="5" />
          </label>

          <button className="button button-primary" type="submit">
            <Send size={16} />
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
