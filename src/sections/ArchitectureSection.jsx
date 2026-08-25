import { CheckCircle2 } from "lucide-react";
import { TerminalPreview } from "../components/TerminalPreview";

export function ArchitectureSection({ content, theme }) {
  return (
    <section className="architecture-section container">
      <div className="architecture-grid">
        <TerminalPreview theme={theme} />

        <div className="architecture-copy">
          <h2>{content.title}</h2>
          <p>{content.description}</p>

          <ul>
            {content.benefits.map((benefit) => (
              <li key={benefit}>
                <CheckCircle2 size={16} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
