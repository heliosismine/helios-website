import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar({
  theme,
  toggleTheme,
  currentPage,
  onNavigate,
  menuOpen,
  setMenuOpen,
}) {
  const links = [
    ["inicio", "Inicio"],
    ["servicios", "Servicios"],
    ["proceso", "Proceso"],
    ["contacto", "Contacto"],
  ];

  return (
    <header className="site-header">
      <div className="container navbar">
        <button
          className="brand"
          onClick={() => onNavigate("inicio")}
          aria-label="Ir al inicio"
        >
          <img src="/logo.png" alt="Helios" />
          <span>Helios</span>
        </button>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map(([id, label]) => (
            <button
              key={id}
              className={currentPage === id ? "active" : ""}
              onClick={() => onNavigate(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="navbar-actions">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          <button
            className="button button-primary desktop-cta"
            onClick={() => onNavigate("contacto")}
          >
            Hablemos
          </button>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Menú móvil">
          {links.map(([id, label]) => (
            <button key={id} onClick={() => onNavigate(id)}>
              {label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
