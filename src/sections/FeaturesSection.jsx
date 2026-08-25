import { Layers, Shield, Sparkles, Zap } from "lucide-react";

const features = [
  {
    title: "Automatización de flujos",
    description:
      "Elimina tareas repetitivas con herramientas internas personalizadas.",
    icon: Layers,
  },
  {
    title: "Sincronización en tiempo real",
    description:
      "Capas de datos optimizadas para que tu equipo colabore sin fricción.",
    icon: Zap,
  },
  {
    title: "Seguridad primero",
    description:
      "Buenas prácticas de seguridad aplicadas en cada capa del sistema.",
    icon: Shield,
  },
  {
    title: "IA integrada",
    description:
      "Usamos IA donde aporta valor real, no como elemento decorativo.",
    icon: Sparkles,
  },
];

export function FeaturesSection() {
  return (
    <section className="features-section container">
      <div className="features-grid">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon">
                <Icon size={20} />
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
