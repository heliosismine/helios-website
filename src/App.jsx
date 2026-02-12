import React, { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import {
  Terminal,
  ChevronRight,
  ArrowRight,
  LayoutTemplate,
  Server,
  Code,
  Menu,
  X,
  Zap,
  MessageSquare,
  Command,
  Send,
  Phone,
  Layers,
  Shield,
  MousePointer2,
  Box,
  Github,
  Framer,
  Database as DatabaseIcon,
  Globe,
  Monitor,
} from "lucide-react";

/**
 * translations: Dictionary for English and Spanish content
 */
const translations = {
  en: {
    nav: {
      brand: "Helios",
      home: "Overview",
      services: "Capabilities",
      contact: "Contact",
      lang: "ES",
    },
    hero: {
      badge: "System Online",
      title: "Built for speed.",
      title2: "Designed for scale.",
      description:
        "Helios engineers bespoke software and Notion operating systems. We turn chaos into linear, high-performance architectures.",
      cta_primary: "Start Building",
      cta_secondary: "Contact Us",
    },
    tech_stack: "Powering modern teams with cutting-edge stack",
    features: {
      title: "Engineered to perfection",
      subtitle:
        "Software as it should be. Fast, reliable, and beautifully functional.",
      f1: "Workflow Automation",
      f1_d: "Eliminate repetitive tasks with custom internal tooling.",
      f2: "Real-time Sync",
      f2_d: "Optimized data layers for instant collaboration.",
      f3: "Security First",
      f3_d: "Enterprise-grade encryption for your company's data.",
    },
    terminal: {
      title: "helios-cli — -zsh — 80x24",
      line1: "npm install @helios/core",
      line2: "✔ Core modules initialized",
      line3: "✔ SaaS_Architecture loaded",
      line4: "Waiting for user command...",
    },
    services: {
      title: "The Helios Protocol",
      subtitle: "Three pillars of modern digital infrastructure.",
      items: [
        {
          id: 1,
          title: "Notion Systems",
          desc: "We don't just make templates. We engineer operating systems for your business logic.",
          tag: "Workflow",
        },
        {
          id: 2,
          title: "SaaS Engineering",
          desc: "From zero to IPO. Scalable, multi-tenant architectures built on the edge.",
          tag: "Scale",
        },
        {
          id: 3,
          title: "Bespoke Software",
          desc: "When off-the-shelf isn't enough. Custom tools for unique problems.",
          tag: "Custom",
        },
      ],
    },
    contact: {
      title: "Get in touch",
      subtitle: "Let's build something extraordinary together.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      whatsapp: "Chat on WhatsApp",
    },
    footer: {
      rights:
        "2024 AVA. Helios is my branding and trademark. All rights reserved.",
    },
  },
  es: {
    nav: {
      brand: "Helios",
      home: "Resumen",
      services: "Capacidades",
      contact: "Contacto",
      lang: "EN",
    },
    hero: {
      badge: "Sistema v3.0 En Línea",
      title: "Hecho para velocidad.",
      title2: "Diseñado para escalar.",
      description:
        "Helios diseña software a medida y sistemas operativos Notion. Transformamos el caos en arquitecturas lineales de alto rendimiento.",
      cta_primary: "Empezar",
      cta_secondary: "Contáctanos",
    },
    tech_stack: "Impulsando equipos modernos con tecnología de punta",
    features: {
      title: "Ingeniería a la perfección",
      subtitle:
        "Software como debe ser. Rápido, confiable y hermosamente funcional.",
      f1: "Automatización de Flujo",
      f1_d: "Elimina tareas repetitivas con herramientas internas personalizadas.",
      f2: "Sincronización Real",
      f2_d: "Capas de datos optimizadas para colaboración instantánea.",
      f3: "Seguridad Primero",
      f3_d: "Encriptación de grado empresarial para los datos de tu empresa.",
    },
    terminal: {
      title: "helios-cli — -zsh — 80x24",
      line1: "npm install @helios/core",
      line2: "✔ Módulos centrales iniciados",
      line3: "✔ Arquitectura_SaaS cargada",
      line4: "Esperando comando del usuario...",
    },
    services: {
      title: "El Protocolo Helios",
      subtitle: "Tres pilares de la infraestructura digital moderna.",
      items: [
        {
          id: 1,
          title: "Sistemas Notion",
          desc: "No hacemos plantillas. Diseñamos sistemas operativos para tu lógica de negocio.",
          tag: "Flujo",
        },
        {
          id: 2,
          title: "Ingeniería SaaS",
          desc: "De cero a IPO. Arquitecturas escalables y multi-inquilino construidas en el edge.",
          tag: "Escala",
        },
        {
          id: 3,
          title: "Software a Medida",
          desc: "Cuando lo comercial no basta. Herramientas personalizadas para problemas únicos.",
          tag: "Custom",
        },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "Construyamos algo extraordinario juntos.",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar Mensaje",
      whatsapp: "Hablar por WhatsApp",
    },
    footer: {
      rights:
        "2024 AVA. Helios is my branding and trademark. Todos los derechos reservados.",
    },
  },
};

const Typewriter = ({ text, delay = 30, onComplete }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return <span>{currentText}</span>;
};

const LiveTerminal = ({ textData }) => {
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  useEffect(() => {
    setActiveLineIndex(0);
  }, [textData]);

  const handleLineComplete = () => {
    if (activeLineIndex < 3) setActiveLineIndex((prev) => prev + 1);
  };

  const allLines = [
    textData.line1,
    textData.line2,
    textData.line3,
    textData.line4,
  ];

  return (
    <div className="w-full max-w-lg mx-auto transform hover:scale-[1.01] transition-transform duration-500">
      <div className="rounded-xl overflow-hidden bg-[#0F1115] border border-white/10 shadow-2xl shadow-blue-900/10 backdrop-blur-xl">
        <div className="bg-[#1C1C1F] px-4 py-3 flex items-center justify-between border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="text-[10px] text-gray-500 font-medium font-mono flex items-center gap-1">
            <Command size={10} /> {textData.title}
          </div>
          <div className="w-10"></div>
        </div>
        <div className="p-6 font-mono text-[13px] leading-relaxed h-64 text-slate-300">
          {allLines.map((line, index) => (
            <div
              key={index}
              className={`mb-2 ${index > activeLineIndex ? "hidden" : "flex"}`}
            >
              <span className="text-emerald-400 mr-3 font-bold">➜</span>
              <span>
                {index < activeLineIndex ? (
                  line
                ) : (
                  <Typewriter
                    text={line}
                    onComplete={handleLineComplete}
                    delay={25}
                  />
                )}
              </span>
            </div>
          ))}
          <div className={`mt-2 ${activeLineIndex === 3 ? "block" : "hidden"}`}>
            <span className="inline-block w-2.5 h-5 bg-slate-500 align-middle animate-pulse"></span>
          </div>
        </div>
      </div>
      <div className="absolute -inset-0.5 bg-gradient-to-t from-blue-500/20 to-purple-500/20 rounded-xl blur-2xl -z-10 opacity-40"></div>
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState("en");
  const [scrolled, setScrolled] = useState(false);
  const [page, setPage] = useState("home");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "es" : "en"));
  const bgGradient = `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.08) 0%, rgba(0, 0, 0, 0) 50%)`;

  return (
    <div className="min-h-screen bg-[#08090A] text-slate-200 selection:bg-blue-500/30 font-sans antialiased overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{ background: bgGradient }}
      ></div>
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#08090A]/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div
            onClick={() => setPage("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-9 h-9">
              <img
                src={logo}
                alt="Helios Logo"
                className="w-full h-full object-contain drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]"
              />
            </div>
            <span className="font-semibold tracking-tight text-white">
              {t.nav.brand}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
            <button
              onClick={() => setPage("home")}
              className="hover:text-white transition-colors"
            >
              Overview
            </button>
            <button
              onClick={() => setPage("services")}
              className="hover:text-white transition-colors"
            >
              Capabilities
            </button>
            <div className="w-px h-4 bg-white/10 mx-2"></div>
            <button
              onClick={toggleLang}
              className="text-xs font-mono px-2 py-1 rounded hover:bg-white/5 transition-colors"
            >
              {t.nav.lang}
            </button>
            <button
              onClick={() => setPage("contact")}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/5 px-4 py-1.5 rounded-full text-xs font-medium transition-all group"
            >
              {t.nav.contact}
              <ChevronRight
                size={14}
                className="opacity-50 group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20 px-6">
        {page === "home" && (
          <>
            {/* Hero */}
            <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center mb-40">
              <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[11px] font-medium text-blue-300 tracking-wide backdrop-blur-sm">
                  <Zap size={12} className="fill-blue-300" /> {t.hero.badge}
                </div>
                <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white leading-[1.05]">
                  {t.hero.title} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white">
                    {t.hero.title2}
                  </span>
                </h1>
                <p className="text-lg text-slate-400 max-w-lg leading-relaxed font-light">
                  {t.hero.description}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={() => setPage("services")}
                    className="h-10 px-6 rounded-full bg-[#5E6AD2] hover:bg-[#6F7BF7] text-white font-medium text-sm transition-all shadow-[0_0_20px_rgba(94,106,210,0.4)] flex items-center gap-2"
                  >
                    {t.hero.cta_primary} <ArrowRight size={16} />
                  </button>
                  <button
                    onClick={() => setPage("contact")}
                    className="h-10 px-6 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium text-sm transition-all flex items-center gap-2"
                  >
                    <MessageSquare size={16} className="text-slate-400" />{" "}
                    {t.hero.cta_secondary}
                  </button>
                </div>
              </div>
              <div className="relative animate-in fade-in slide-in-from-right duration-700">
                <LiveTerminal textData={t.terminal} />
              </div>
            </section>

            {/* Logo/Tech Section (Linear style social proof) */}
            <section className="max-w-7xl mx-auto mb-40">
              <p className="text-center text-xs font-mono text-slate-500 uppercase tracking-widest mb-10">
                {t.tech_stack}
              </p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2">
                  <Github size={24} />{" "}
                  <span className="font-bold text-lg">GitHub</span>
                </div>
                <div className="flex items-center gap-2">
                  <Framer size={24} />{" "}
                  <span className="font-bold text-lg">Framer</span>
                </div>
                <div className="flex items-center gap-2">
                  <DatabaseIcon size={24} />{" "}
                  <span className="font-bold text-lg">Supabase</span>
                </div>
                <div className="flex items-center gap-2">
                  <Box size={24} />{" "}
                  <span className="font-bold text-lg">Vercel</span>
                </div>
              </div>
            </section>

            {/* Advanced Features (Linear Bento style) */}
            <section className="max-w-7xl mx-auto mb-40">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Big Card */}
                <div className="p-10 rounded-3xl bg-[#0F1115] border border-white/5 flex flex-col justify-end min-h-[400px] group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                    <MousePointer2 size={120} className="text-blue-500" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-semibold text-white mb-4">
                      {t.features.title}
                    </h3>
                    <p className="text-slate-400 max-w-sm">
                      {t.features.subtitle}
                    </p>
                  </div>
                </div>
                {/* Small Grid */}
                <div className="grid gap-6">
                  <div className="p-8 rounded-3xl bg-[#0F1115] border border-white/5 flex items-start gap-6 group">
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <Layers size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        {t.features.f1}
                      </h4>
                      <p className="text-sm text-slate-500">
                        {t.features.f1_d}
                      </p>
                    </div>
                  </div>
                  <div className="p-8 rounded-3xl bg-[#0F1115] border border-white/5 flex items-start gap-6 group">
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        {t.features.f2}
                      </h4>
                      <p className="text-sm text-slate-500">
                        {t.features.f2_d}
                      </p>
                    </div>
                  </div>
                  <div className="p-8 rounded-3xl bg-[#0F1115] border border-white/5 flex items-start gap-6 group">
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        {t.features.f3}
                      </h4>
                      <p className="text-sm text-slate-500">
                        {t.features.f3_d}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {page === "services" && (
          <section className="max-w-7xl mx-auto animate-in fade-in duration-500">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-semibold tracking-tighter text-white mb-4">
                {t.services.title}
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                {t.services.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {t.services.items.map((item, idx) => (
                <div
                  key={item.id}
                  className="group p-8 rounded-2xl bg-[#14151A] border border-white/5 hover:border-white/10 transition-all overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6 flex justify-between">
                      <div className="p-3 rounded-lg bg-white/5">
                        {idx === 0 ? (
                          <LayoutTemplate size={24} className="text-blue-400" />
                        ) : idx === 1 ? (
                          <Server size={24} className="text-purple-400" />
                        ) : (
                          <Code size={24} className="text-emerald-400" />
                        )}
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 border border-white/5 px-2 py-1 rounded">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 mb-6">{item.desc}</p>
                    <div className="mt-auto flex items-center text-xs text-slate-500 font-medium group-hover:text-blue-400 transition-colors">
                      Learn more <ChevronRight size={12} className="ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {page === "contact" && (
          <section className="max-w-4xl mx-auto animate-in fade-in duration-500">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-semibold tracking-tighter text-white mb-4">
                {t.contact.title}
              </h2>
              <p className="text-slate-400">{t.contact.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-1 gap-12 bg-[#14151A] p-8 md:p-12 rounded-2xl border border-white/5">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      {t.contact.name}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      {t.contact.email}
                    </label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors"
                      placeholder="john@helios.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    {t.contact.message}
                  </label>
                  <textarea
                    rows="4"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <div className="flex flex-col md:flex-row gap-4 pt-4">
                  <button className="flex-1 bg-white text-black py-3 rounded-lg font-bold hover:bg-blue-400 hover:text-white transition-all flex items-center justify-center gap-2">
                    <Send size={18} /> {t.contact.send}
                  </button>
                  <a
                    href="https://wa.me/+50375910769"
                    target="_blank"
                    className="flex-1 bg-[#25D366] text-white py-3 rounded-lg font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    <Phone size={18} /> {t.contact.whatsapp}
                  </a>
                </div>
              </form>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-[#08090A]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8">
                <img
                  src={logo}
                  alt="Helios Logo"
                  className="w-full h-full object-contain drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]"
                />
              </div>

              <span className="text-lg font-semibold tracking-tight text-white">
                {t.nav.brand}
              </span>
            </div>

            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              Building the future of software infrastructure. Minimalist, fast,
              and engineered for teams that scale.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <p className="text-xs text-slate-600 font-mono">
              {t.footer.rights}
            </p>
            <div className="flex gap-4 opacity-50">
              <Github
                size={18}
                className="cursor-pointer hover:text-white transition-colors"
              />
              <MessageSquare
                size={18}
                className="cursor-pointer hover:text-white transition-colors"
              />
              <Globe
                size={18}
                className="cursor-pointer hover:text-white transition-colors"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
