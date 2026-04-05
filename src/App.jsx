import React, { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import {
  ChevronRight,
  ArrowRight,
  LayoutTemplate,
  Server,
  Code,
  Zap,
  MessageSquare,
  Command,
  Send,
  Phone,
  Layers,
  Shield,
  Box,
  Github,
  Framer,
  Database as DatabaseIcon,
  Globe,
  Sun,
  Moon,
  Menu,
  X,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// ─────────────────────────────────────────────
// Hook: tema del sistema como valor inicial
// ─────────────────────────────────────────────
const useTheme = () => {
  const getSystemTheme = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const [tema, setTema] = useState(() => {
    // localStorage no funciona en sandboxes — usamos sistema como fallback
    return getSystemTheme();
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", tema === "dark");
  }, [tema]);

  const toggleTema = () => setTema((t) => (t === "dark" ? "light" : "dark"));
  return [tema, toggleTema];
};

// ─────────────────────────────────────────────
// Contenido (sin JSX — íconos separados)
// ─────────────────────────────────────────────
const c = {
  nav: {
    marca: "Helios",
    cta: "Hablemos",
  },
  hero: {
    eyebrow: "Desarrollo de Software — El Salvador",
    titulo: "Construimos el software que tu empresa merece.",
    subtitulo:
      "Arquitecturas modernas, automatización inteligente y sistemas a medida para equipos que no se conforman con lo genérico.",
    cta1: "Ver Servicios",
    cta2: "Contáctanos",
    stats: [
      { num: "3+", label: "Años de experiencia" },
      { num: "20+", label: "Proyectos entregados" },
      { num: "100%", label: "Proyectos a tiempo" },
    ],
  },
  stack: {
    titulo: "Tecnología en la que confiamos",
    // Los íconos se renderizan en el componente, aquí solo el nombre
    items: ["GitHub", "Framer", "Supabase", "Vercel"],
  },
  servicios: {
    eyebrow: "Lo que hacemos",
    titulo: "Tres pilares. Una visión.",
    subtitulo:
      "Cada servicio está diseñado para resolver un problema real de tu negocio con precisión y elegancia.",
    items: [
      {
        id: 1,
        color: "text-[#6B7A3F]",
        bgColor: "bg-[#6B7A3F]/10",
        titulo: "Sistemas Notion",
        desc: "Diseñamos sistemas operativos completos para tu negocio dentro de Notion — no plantillas genéricas, sino infraestructura de conocimiento personalizada.",
        puntos: [
          "Bases de datos relacionales",
          "Automatizaciones con IA",
          "Dashboards ejecutivos",
        ],
        etiqueta: "Productividad",
      },
      {
        id: 2,
        color: "text-[#8B6F47]",
        bgColor: "bg-[#8B6F47]/10",
        titulo: "Ingeniería SaaS",
        desc: "Arquitecturas escalables y multi-inquilino desde el día uno. De la idea al producto con velocidad y solidez técnica.",
        puntos: [
          "Frontend React / Next.js",
          "Backend Supabase / Node",
          "Deploy en el edge",
        ],
        etiqueta: "Escala",
      },
      {
        id: 3,
        color: "text-[#4A6B8A]",
        bgColor: "bg-[#4A6B8A]/10",
        titulo: "Software a Medida",
        desc: "Cuando las soluciones comerciales no encajan, construimos la tuya. Herramientas internas, integraciones y automatizaciones únicas.",
        puntos: [
          "Automatización de procesos",
          "APIs e integraciones",
          "Herramientas internas",
        ],
        etiqueta: "Custom",
      },
    ],
  },
  proceso: {
    eyebrow: "Cómo trabajamos",
    titulo: "Un proceso claro, sin sorpresas.",
    pasos: [
      {
        num: "01",
        titulo: "Diagnóstico",
        desc: "Entendemos tu problema, tu equipo y tus metas antes de escribir una sola línea de código.",
      },
      {
        num: "02",
        titulo: "Arquitectura",
        desc: "Diseñamos la solución técnica y validamos contigo antes de construir.",
      },
      {
        num: "03",
        titulo: "Construcción",
        desc: "Desarrollamos en ciclos cortos con entregas continuas para que siempre veas el avance.",
      },
      {
        num: "04",
        titulo: "Lanzamiento",
        desc: "Desplegamos, documentamos y te acompañamos en la transición al producto final.",
      },
    ],
  },
  caracteristicas: [
    {
      color: "text-[#6B7A3F]",
      bg: "bg-[#6B7A3F]/10",
      titulo: "Automatización de Flujos",
      desc: "Elimina tareas repetitivas con herramientas internas personalizadas que trabajan mientras tú descansas.",
    },
    {
      color: "text-[#8B6F47]",
      bg: "bg-[#8B6F47]/10",
      titulo: "Sincronización en Tiempo Real",
      desc: "Capas de datos optimizadas para que tu equipo colabore sin fricción desde cualquier lugar.",
    },
    {
      color: "text-[#4A6B8A]",
      bg: "bg-[#4A6B8A]/10",
      titulo: "Seguridad Primero",
      desc: "Encriptación de grado empresarial y buenas prácticas de seguridad en cada capa del sistema.",
    },
    {
      color: "text-[#7B5EA7]",
      bg: "bg-[#7B5EA7]/10",
      titulo: "IA Integrada",
      desc: "Incorporamos modelos de lenguaje y automatización inteligente donde realmente aportan valor.",
    },
  ],
  terminal: {
    titulo: "helios-cli — -zsh — 80x24",
    lineas: [
      "npm install @helios/core",
      "✔ Módulos centrales iniciados",
      "✔ Arquitectura_SaaS cargada",
      "Esperando comando del usuario...",
    ],
  },
  contacto: {
    eyebrow: "Hablemos",
    titulo: "¿Tienes un proyecto en mente?",
    subtitulo:
      "Cuéntanos de tu idea. Respondemos en menos de 24 horas con una propuesta clara.",
    nombre: "Nombre completo",
    correo: "Correo electrónico",
    empresa: "Empresa (opcional)",
    mensaje: "¿Qué necesitas construir?",
    enviar: "Enviar mensaje",
    whatsapp: "WhatsApp directo",
    placeholderMensaje: "¿Qué necesitas construir?",
    info: [
      { label: "Correo", val: "hola@helios.dev" },
      { label: "WhatsApp", val: "+503 7591 0769" },
      { label: "País", val: "El Salvador 🇸🇻" },
    ],
  },
  pie: {
    tagline: "Software que escala contigo.",
    derechos: "© 2024 Helios · AVA Studio · El Salvador",
  },
};

// ─────────────────────────────────────────────
// Íconos del stack (JSX solo dentro de componentes)
// ─────────────────────────────────────────────
const stackIconos = {
  GitHub: <Github size={20} />,
  Framer: <Framer size={20} />,
  Supabase: <DatabaseIcon size={20} />,
  Vercel: <Box size={20} />,
};

// Íconos de servicios por id
const servicioIconos = {
  1: <LayoutTemplate size={22} />,
  2: <Server size={22} />,
  3: <Code size={22} />,
};

// Íconos de características por título
const caracteristicaIconos = {
  "Automatización de Flujos": <Layers size={20} />,
  "Sincronización en Tiempo Real": <Zap size={20} />,
  "Seguridad Primero": <Shield size={20} />,
  "IA Integrada": <Sparkles size={20} />,
};

// ─────────────────────────────────────────────
// Componente: Escritura animada
// ─────────────────────────────────────────────
const EscritorAnimado = ({ texto, retraso = 28, alCompletar }) => {
  const [out, setOut] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i < texto.length) {
      const t = setTimeout(() => {
        setOut((p) => p + texto[i]);
        setI((p) => p + 1);
      }, retraso);
      return () => clearTimeout(t);
    } else if (alCompletar) {
      alCompletar();
    }
  }, [i, texto, retraso, alCompletar]);

  return <span>{out}</span>;
};

// ─────────────────────────────────────────────
// Componente: Terminal animada
// ─────────────────────────────────────────────
const TerminalAnimada = ({ tema }) => {
  const [activo, setActivo] = useState(0);
  const avanzar = () => {
    if (activo < 3) setActivo((p) => p + 1);
  };
  const isDark = tema === "dark";

  return (
    <div className="w-full max-w-xl mx-auto">
      <div
        className="rounded-2xl overflow-hidden shadow-2xl border"
        style={{
          backgroundColor: isDark ? "#0D1117" : "#1E1E2E",
          borderColor: isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.2)",
        }}
      >
        {/* Barra de título */}
        <div
          className="px-5 py-3 flex items-center gap-3 border-b"
          style={{
            backgroundColor: isDark ? "#161B22" : "#2A2A3C",
            borderColor: "rgba(255,255,255,0.05)",
          }}
        >
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 text-center text-[11px] text-gray-500 font-mono flex items-center justify-center gap-1.5">
            <Command size={10} /> {c.terminal.titulo}
          </div>
        </div>

        {/* Cuerpo */}
        <div className="p-6 font-mono text-[13px] text-slate-300 leading-loose h-52">
          {c.terminal.lineas.map((linea, idx) => (
            <div
              key={idx}
              className={`flex gap-3 mb-1 ${idx > activo ? "hidden" : ""}`}
            >
              <span className="text-emerald-400 font-bold select-none">➜</span>
              <span>
                {idx < activo ? (
                  linea
                ) : (
                  <EscritorAnimado texto={linea} alCompletar={avanzar} />
                )}
              </span>
            </div>
          ))}
          {activo === 3 && (
            <span className="inline-block w-2 h-4 bg-slate-400 animate-pulse ml-8 align-middle" />
          )}
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// Componente: Botón de Tema
// ─────────────────────────────────────────────
const BtnTema = ({ tema, toggle }) => (
  <button
    onClick={toggle}
    aria-label="Cambiar tema"
    className={`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none ${
      tema === "dark" ? "bg-[#6B7A3F]" : "bg-[#D4C5A0]"
    }`}
  >
    <span
      className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
        tema === "dark"
          ? "translate-x-7 bg-[#F5F0E8] text-[#6B7A3F]"
          : "translate-x-0 bg-white text-[#8B6F47]"
      }`}
    >
      {tema === "dark" ? <Moon size={13} /> : <Sun size={13} />}
    </span>
  </button>
);

// ─────────────────────────────────────────────
// Componente Principal
// ─────────────────────────────────────────────
export default function App() {
  const [tema, toggleTema] = useTheme();
  const [pagina, setPagina] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const dk = tema === "dark";

  const col = {
    bg: dk ? "#0A0B0D" : "#FAF8F3",
    bgCard: dk ? "#13161A" : "#FFFFFF",
    bgCard2: dk ? "#1A1D23" : "#F2EEE4",
    bgNav: dk ? "rgba(10,11,13,0.88)" : "rgba(250,248,243,0.92)",
    border: dk ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)",
    text: dk ? "#E8E3D8" : "#2C2A24",
    textMuted: dk ? "#8A8478" : "#6B6560",
    textLight: dk ? "#5C5650" : "#9B9489",
    accent: "#6B7A3F",
    accentWarm: "#8B6F47",
    accentCool: "#4A6B8A",
  };

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const nav = (p) => {
    setPagina(p);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const secciones = ["inicio", "servicios", "proceso", "contacto"];
  const etiquetas = ["Inicio", "Servicios", "Proceso", "Contacto"];

  return (
    <div
      className="min-h-screen font-sans antialiased overflow-x-hidden transition-colors duration-300"
      style={{ backgroundColor: col.bg, color: col.text }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap');
        * { font-family: 'Inter', system-ui, sans-serif; }
        h1, h2, .serif { font-family: 'Instrument Serif', Georgia, serif; }
      `}</style>

      {/* ── Navbar ── */}
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? col.bgNav : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${col.border}` : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => nav("inicio")}
            className="flex items-center gap-2.5"
          >
            <div className="w-8 h-8 flex-shrink-0">
              <img
                src={logo}
                alt="Helios"
                className="w-full h-full object-contain"
              />
            </div>
            <span
              className="text-base font-semibold tracking-tight"
              style={{ color: col.text }}
            >
              Helios
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {secciones.map((s, i) => (
              <button
                key={s}
                onClick={() => nav(s)}
                className="text-sm transition-colors duration-200"
                style={{
                  color: pagina === s ? col.accent : col.textMuted,
                  fontWeight: pagina === s ? "500" : "400",
                }}
              >
                {etiquetas[i]}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <BtnTema tema={tema} toggle={toggleTema} />
            <button
              onClick={() => nav("contacto")}
              className="hidden md:flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: col.accent, color: "#FAF8F3" }}
            >
              {c.nav.cta}
            </button>
            <button
              className="md:hidden p-2 rounded-lg"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: col.textMuted }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="md:hidden px-6 pb-6 pt-2 space-y-1"
            style={{
              backgroundColor: col.bgNav,
              borderTop: `1px solid ${col.border}`,
            }}
          >
            {secciones.map((s, i) => (
              <button
                key={s}
                onClick={() => nav(s)}
                className="block w-full text-left py-3 text-sm border-b"
                style={{ color: col.textMuted, borderColor: col.border }}
              >
                {etiquetas[i]}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ── Contenido ── */}
      <main>
        {/* ════════════ INICIO ════════════ */}
        {pagina === "inicio" && (
          <>
            {/* Hero */}
            <section className="max-w-6xl mx-auto px-6 pt-36 pb-24">
              <div className="max-w-3xl">
                <p
                  className="text-xs font-medium tracking-[0.2em] uppercase mb-6"
                  style={{ color: col.accent }}
                >
                  {c.hero.eyebrow}
                </p>
                <h1
                  className="serif text-5xl md:text-7xl lg:text-[82px] leading-[1.0] mb-8 font-normal"
                  style={{ color: col.text }}
                >
                  {c.hero.titulo}
                </h1>
                <p
                  className="text-lg md:text-xl leading-relaxed mb-12 max-w-xl"
                  style={{ color: col.textMuted, fontWeight: 300 }}
                >
                  {c.hero.subtitulo}
                </p>
                <div className="flex flex-wrap gap-4 mb-20">
                  <button
                    onClick={() => nav("servicios")}
                    className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
                    style={{ backgroundColor: col.accent, color: "#FAF8F3" }}
                  >
                    {c.hero.cta1} <ArrowRight size={15} />
                  </button>
                  <button
                    onClick={() => nav("contacto")}
                    className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium border transition-all duration-200"
                    style={{ color: col.textMuted, borderColor: col.border }}
                  >
                    <MessageSquare size={15} /> {c.hero.cta2}
                  </button>
                </div>
                <div
                  className="grid grid-cols-3 gap-8 pt-10 border-t"
                  style={{ borderColor: col.border }}
                >
                  {c.hero.stats.map((s) => (
                    <div key={s.label}>
                      <p
                        className="serif text-4xl mb-1"
                        style={{ color: col.text }}
                      >
                        {s.num}
                      </p>
                      <p className="text-xs" style={{ color: col.textLight }}>
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Terminal */}
            <section className="max-w-6xl mx-auto px-6 pb-28">
              <div className="grid lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-3">
                  <TerminalAnimada tema={tema} />
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <h2 className="serif text-3xl" style={{ color: col.text }}>
                    Arquitectura lista para producción.
                  </h2>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: col.textMuted }}
                  >
                    Cada proyecto arranca con la estructura correcta — no hay
                    deuda técnica heredada. Solo código limpio desde el inicio.
                  </p>
                  {[
                    "Configuración de entorno en minutos",
                    "Módulos listos para producción",
                    "Documentación incluida",
                  ].map((punto) => (
                    <div key={punto} className="flex items-center gap-3">
                      <CheckCircle2 size={16} style={{ color: col.accent }} />
                      <span
                        className="text-sm"
                        style={{ color: col.textMuted }}
                      >
                        {punto}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Stack */}
            <section
              className="py-16 border-y"
              style={{ borderColor: col.border }}
            >
              <div className="max-w-6xl mx-auto px-6">
                <p
                  className="text-center text-xs tracking-[0.18em] uppercase mb-10"
                  style={{ color: col.textLight }}
                >
                  {c.stack.titulo}
                </p>
                <div className="flex flex-wrap justify-center gap-10 md:gap-20">
                  {c.stack.items.map((nombre) => (
                    <div
                      key={nombre}
                      className="flex items-center gap-2.5 opacity-40 hover:opacity-100 transition-opacity duration-300"
                      style={{ color: col.text }}
                    >
                      {stackIconos[nombre]}
                      <span className="text-sm font-medium tracking-wide">
                        {nombre}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Características */}
            <section className="max-w-6xl mx-auto px-6 py-28">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {c.caracteristicas.map((f) => (
                  <div
                    key={f.titulo}
                    className="p-7 rounded-2xl border transition-all duration-200 hover:-translate-y-1"
                    style={{
                      backgroundColor: col.bgCard,
                      borderColor: col.border,
                    }}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${f.bg} ${f.color}`}
                    >
                      {caracteristicaIconos[f.titulo]}
                    </div>
                    <h4
                      className="text-sm font-medium mb-2"
                      style={{ color: col.text }}
                    >
                      {f.titulo}
                    </h4>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: col.textMuted }}
                    >
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Banner */}
            <section className="max-w-6xl mx-auto px-6 pb-28">
              <div
                className="rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
                style={{ backgroundColor: col.accent }}
              >
                <div>
                  <h2 className="serif text-3xl md:text-4xl text-[#FAF8F3] mb-2">
                    ¿Listo para construir algo real?
                  </h2>
                  <p className="text-sm" style={{ color: "#C8D4A0" }}>
                    Sin compromiso — solo una conversación.
                  </p>
                </div>
                <button
                  onClick={() => nav("contacto")}
                  className="flex-shrink-0 flex items-center gap-2 bg-[#FAF8F3] text-[#3D4A20] px-8 py-4 rounded-full text-sm font-semibold hover:bg-white transition-all"
                >
                  Iniciar proyecto <ArrowRight size={16} />
                </button>
              </div>
            </section>
          </>
        )}

        {/* ════════════ SERVICIOS ════════════ */}
        {pagina === "servicios" && (
          <section className="max-w-6xl mx-auto px-6 pt-36 pb-28">
            <div className="mb-20">
              <p
                className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
                style={{ color: col.accent }}
              >
                {c.servicios.eyebrow}
              </p>
              <h1
                className="serif text-5xl md:text-6xl mb-6"
                style={{ color: col.text }}
              >
                {c.servicios.titulo}
              </h1>
              <p
                className="text-lg max-w-xl leading-relaxed"
                style={{ color: col.textMuted, fontWeight: 300 }}
              >
                {c.servicios.subtitulo}
              </p>
            </div>

            <div className="space-y-6">
              {c.servicios.items.map((item) => (
                <div
                  key={item.id}
                  className="group grid md:grid-cols-3 gap-8 p-10 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: col.bgCard,
                    borderColor: col.border,
                  }}
                >
                  <div className="md:col-span-1">
                    <div className="flex items-start gap-5">
                      <span
                        className="serif text-5xl leading-none"
                        style={{ color: col.border }}
                      >
                        0{item.id}
                      </span>
                      <div>
                        <div
                          className={`p-2.5 rounded-xl mb-3 inline-flex ${item.bgColor} ${item.color}`}
                        >
                          {servicioIconos[item.id]}
                        </div>
                        <h3
                          className="serif text-2xl"
                          style={{ color: col.text }}
                        >
                          {item.titulo}
                        </h3>
                        <span
                          className="inline-block mt-2 text-[10px] font-mono px-2.5 py-1 rounded-md"
                          style={{
                            backgroundColor: col.bgCard2,
                            color: col.textLight,
                          }}
                        >
                          {item.etiqueta}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: col.textMuted }}
                    >
                      {item.desc}
                    </p>
                  </div>

                  <div className="md:col-span-1 space-y-3">
                    {item.puntos.map((p) => (
                      <div key={p} className="flex items-center gap-2.5">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: col.accent }}
                        />
                        <span
                          className="text-xs"
                          style={{ color: col.textMuted }}
                        >
                          {p}
                        </span>
                      </div>
                    ))}
                    <button
                      onClick={() => nav("contacto")}
                      className="flex items-center gap-1.5 text-xs font-medium mt-4 group-hover:gap-2.5 transition-all"
                      style={{ color: col.accent }}
                    >
                      Solicitar este servicio <ChevronRight size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-20 pt-16 border-t grid md:grid-cols-2 gap-12 items-center"
              style={{ borderColor: col.border }}
            >
              <div>
                <h2 className="serif text-3xl mb-4" style={{ color: col.text }}>
                  Stack moderno. Resultados reales.
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: col.textMuted }}
                >
                  Usamos las mejores herramientas del ecosistema para garantizar
                  rendimiento, mantenibilidad y escalabilidad a largo plazo.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { t: "React / Next.js", d: "Frontend moderno" },
                  { t: "Supabase", d: "Base de datos & Auth" },
                  { t: "Vercel / Edge", d: "Deploy en milisegundos" },
                  { t: "Notion API", d: "Sistemas operativos" },
                ].map((s) => (
                  <div
                    key={s.t}
                    className="p-5 rounded-xl border"
                    style={{
                      backgroundColor: col.bgCard,
                      borderColor: col.border,
                    }}
                  >
                    <p
                      className="text-sm font-medium mb-1"
                      style={{ color: col.text }}
                    >
                      {s.t}
                    </p>
                    <p className="text-xs" style={{ color: col.textLight }}>
                      {s.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ════════════ PROCESO ════════════ */}
        {pagina === "proceso" && (
          <section className="max-w-6xl mx-auto px-6 pt-36 pb-28">
            <div className="mb-20">
              <p
                className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
                style={{ color: col.accent }}
              >
                {c.proceso.eyebrow}
              </p>
              <h1
                className="serif text-5xl md:text-6xl mb-6"
                style={{ color: col.text }}
              >
                {c.proceso.titulo}
              </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-20">
              {c.proceso.pasos.map((paso) => (
                <div
                  key={paso.num}
                  className="relative p-10 rounded-2xl border overflow-hidden"
                  style={{
                    backgroundColor: col.bgCard,
                    borderColor: col.border,
                  }}
                >
                  <span
                    className="absolute top-6 right-8 serif text-8xl leading-none pointer-events-none select-none"
                    style={{ color: col.bgCard2, opacity: dk ? 0.6 : 0.5 }}
                  >
                    {paso.num}
                  </span>
                  <div className="relative z-10">
                    <div
                      className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full mb-5"
                      style={{
                        backgroundColor: col.bgCard2,
                        color: col.accent,
                      }}
                    >
                      Paso {paso.num}
                    </div>
                    <h3
                      className="serif text-3xl mb-4"
                      style={{ color: col.text }}
                    >
                      {paso.titulo}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: col.textMuted }}
                    >
                      {paso.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="p-10 md:p-14 rounded-2xl"
              style={{ backgroundColor: col.bgCard2 }}
            >
              <h2 className="serif text-3xl mb-8" style={{ color: col.text }}>
                Por qué Helios.
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    titulo: "Transparencia total",
                    desc: "Siempre sabrás en qué etapa está tu proyecto y qué viene después.",
                  },
                  {
                    titulo: "Código que perdura",
                    desc: "Escribimos código limpio, documentado y mantenible — no solo para hoy.",
                  },
                  {
                    titulo: "Basado en El Salvador",
                    desc: "Conocemos el mercado local y estamos disponibles en tu horario.",
                  },
                ].map((v) => (
                  <div key={v.titulo}>
                    <h4
                      className="text-sm font-medium mb-2"
                      style={{ color: col.text }}
                    >
                      {v.titulo}
                    </h4>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: col.textMuted }}
                    >
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ════════════ CONTACTO ════════════ */}
        {pagina === "contacto" && (
          <section className="max-w-6xl mx-auto px-6 pt-36 pb-28">
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Info lateral */}
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <p
                    className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
                    style={{ color: col.accent }}
                  >
                    {c.contacto.eyebrow}
                  </p>
                  <h1
                    className="serif text-4xl md:text-5xl mb-5"
                    style={{ color: col.text }}
                  >
                    {c.contacto.titulo}
                  </h1>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: col.textMuted }}
                  >
                    {c.contacto.subtitulo}
                  </p>
                </div>

                <div
                  className="space-y-4 pt-8 border-t"
                  style={{ borderColor: col.border }}
                >
                  {c.contacto.info.map((inf) => (
                    <div key={inf.label}>
                      <p
                        className="text-[10px] font-medium tracking-wider uppercase mb-0.5"
                        style={{ color: col.textLight }}
                      >
                        {inf.label}
                      </p>
                      <p
                        className="text-sm font-medium"
                        style={{ color: col.text }}
                      >
                        {inf.val}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/+50375910769"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 w-full justify-center py-3.5 rounded-full text-sm font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: "#25D366", color: "#fff" }}
                >
                  <Phone size={16} /> {c.contacto.whatsapp}
                </a>
              </div>

              {/* Formulario */}
              <div className="lg:col-span-3">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-5 p-8 md:p-10 rounded-2xl border"
                  style={{
                    backgroundColor: col.bgCard,
                    borderColor: col.border,
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    {[
                      {
                        label: c.contacto.nombre,
                        type: "text",
                        ph: "Juan Pérez",
                      },
                      {
                        label: c.contacto.correo,
                        type: "email",
                        ph: "juan@empresa.com",
                      },
                    ].map((f) => (
                      <div key={f.label} className="space-y-1.5">
                        <label
                          className="block text-[10px] font-medium tracking-wider uppercase"
                          style={{ color: col.textLight }}
                        >
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          placeholder={f.ph}
                          className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                          style={{
                            backgroundColor: col.bgCard2,
                            border: `1px solid ${col.border}`,
                            color: col.text,
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      className="block text-[10px] font-medium tracking-wider uppercase"
                      style={{ color: col.textLight }}
                    >
                      {c.contacto.empresa}
                    </label>
                    <input
                      type="text"
                      placeholder="Mi Empresa S.A."
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                      style={{
                        backgroundColor: col.bgCard2,
                        border: `1px solid ${col.border}`,
                        color: col.text,
                      }}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      className="block text-[10px] font-medium tracking-wider uppercase"
                      style={{ color: col.textLight }}
                    >
                      {c.contacto.mensaje}
                    </label>
                    <textarea
                      rows={5}
                      placeholder={c.contacto.placeholderMensaje}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all resize-none"
                      style={{
                        backgroundColor: col.bgCard2,
                        border: `1px solid ${col.border}`,
                        color: col.text,
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-medium transition-all hover:opacity-90"
                    style={{ backgroundColor: col.accent, color: "#FAF8F3" }}
                  >
                    <Send size={16} /> {c.contacto.enviar}
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* ── Footer ── */}
      <footer
        className="border-t"
        style={{ borderColor: col.border, backgroundColor: col.bg }}
      >
        <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Helios" className="w-7 h-7 object-contain" />
              <span
                className="text-base font-semibold"
                style={{ color: col.text }}
              >
                Helios
              </span>
            </div>
            <p
              className="serif text-sm italic"
              style={{ color: col.textMuted }}
            >
              {c.pie.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            {secciones.map((s, i) => (
              <button
                key={s}
                onClick={() => nav(s)}
                className="text-xs transition-colors hover:opacity-100"
                style={{ color: col.textLight }}
              >
                {etiquetas[i]}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="text-xs font-mono" style={{ color: col.textLight }}>
              {c.pie.derechos}
            </p>
            <div className="flex gap-4" style={{ color: col.textLight }}>
              <Github
                size={16}
                className="cursor-pointer hover:opacity-100 transition-opacity opacity-50"
              />
              <Globe
                size={16}
                className="cursor-pointer hover:opacity-100 transition-opacity opacity-50"
              />
              <MessageSquare
                size={16}
                className="cursor-pointer hover:opacity-100 transition-opacity opacity-50"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
