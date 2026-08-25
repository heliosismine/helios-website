import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useTheme } from "./hooks/useTheme";
import { HomePage } from "./sections/HomePage";
import { ServicesPage } from "./sections/ServicesPage";
import { ProcessPage } from "./sections/ProcessPage";
import { ContactPage } from "./sections/ContactPage";
import { content } from "./data/content";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [currentPage, setCurrentPage] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "servicios":
        return <ServicesPage onNavigate={navigate} />;

      case "proceso":
        return <ProcessPage />;

      case "contacto":
        return <ContactPage content={content.contact} />;

      default:
        return (
          <HomePage content={content} theme={theme} onNavigate={navigate} />
        );
    }
  };

  return (
    <div className={`app theme-${theme}`}>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        currentPage={currentPage}
        onNavigate={navigate}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrolled={scrolled}
      />

      <main>{renderPage()}</main>

      <Footer content={content.footer} onNavigate={navigate} />
    </div>
  );
}
