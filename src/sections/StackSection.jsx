import { Box, Database, Framer, Github } from "lucide-react";

const icons = {
  GitHub: Github,
  Framer,
  Supabase: Database,
  Vercel: Box,
};

export function StackSection({ title, items }) {
  return (
    <section className="stack-section">
      <div className="container">
        <p className="section-label">{title}</p>

        <div className="stack-list">
          {items.map((item) => {
            const Icon = icons[item];

            return (
              <div className="stack-item" key={item}>
                {Icon && <Icon size={20} />}
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
