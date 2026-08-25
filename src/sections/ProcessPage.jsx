const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendemos tu problema, tu equipo y tus metas antes de escribir una sola línea de código.",
  },
  {
    number: "02",
    title: "Arquitectura",
    description:
      "Diseñamos la solución técnica y la validamos contigo antes de construir.",
  },
  {
    number: "03",
    title: "Construcción",
    description:
      "Desarrollamos en ciclos cortos con entregas continuas para que siempre veas el avance.",
  },
  {
    number: "04",
    title: "Lanzamiento",
    description:
      "Desplegamos, documentamos y te acompañamos durante la transición al producto final.",
  },
];

export function ProcessPage() {
  return (
    <section className="page-section container">
      <header className="page-intro">
        <p className="eyebrow">Cómo trabajamos</p>
        <h1>Un proceso claro, sin sorpresas.</h1>
      </header>

      <div className="process-grid">
        {steps.map((step) => (
          <article className="process-card" key={step.number}>
            <span className="process-number">{step.number}</span>
            <span className="process-label">Paso {step.number}</span>
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </article>
        ))}
      </div>

      <section className="why-helios">
        <h2>Por qué Helios.</h2>

        <div className="values-grid">
          <div>
            <h3>Transparencia total</h3>
            <p>
              Siempre sabrás en qué etapa está tu proyecto y qué viene después.
            </p>
          </div>

          <div>
            <h3>Código que perdura</h3>
            <p>Escribimos código limpio, documentado y mantenible.</p>
          </div>

          <div>
            <h3>Basado en El Salvador</h3>
            <p>
              Conocemos el mercado local y estamos disponibles en tu horario.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
