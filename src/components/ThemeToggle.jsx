import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === "dark";

  return (
    <button
      className={`theme-toggle ${isDark ? "is-dark" : ""}`}
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      aria-pressed={isDark}
    >
      <span>{isDark ? <Moon size={13} /> : <Sun size={13} />}</span>
    </button>
  );
}
