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

// ─────────────────────────────────────────────
// Hook: detecta preferencia del sistema (dark/light)
// ─────────────────────────────────────────────
const useSystemTheme = () => {
  const getTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const [tema, setTema] = useState(getTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const manejarCambio = (e) => setTema(e.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", manejarCambio);
    return () => mediaQuery.removeEventListener("change", manejarCambio);
  }, []);

  return tema;
};

// ─────────────────────────────────────────────
// Paleta de colores por tema
// ─────────────────────────────────────────────
const temas = {
  dark: {
    fondo: "#08090A",
    fondoNav: "rgba(8,9,10,0.80)",
    fondoTarjeta: "#0F1115",
    fondoTarjeta2: "#14151A",
    texto: "text-slate-200",
    textoBlanco: "text-white",
    textoMuted: "text-slate-400",
    textoExtra: "text-slate-500",
    textoPie: "text-slate-600",
    borde: "border-white/5",
    bordeInput: "border-white/10",
    inputBg: "bg-white/5",
    navBg: "bg-[#08090A]/80",
    selection: "selection:bg-blue-500/30",
    terminalbg: "#0F1115",
    terminalHeader: "#1C1C1F",
    terminalTexto: "text-slate-300",
    badgeBg: "bg-white/5",
    badgeTexto: "text-blue-300",
    tagBg: "bg-white/5",
    tagTexto: "text-slate-500",
    iconBg: "bg-white/5",
    divider: "bg-white/10",
    noise: "opacity-20",
  },
  light: {
    fondo: "#F4F5F7",
    fondoNav: "rgba(244,245,247,0.85)",
    fondoTarjeta: "#FFFFFF",
    fondoTarjeta2: "#FFFFFF",
    texto: "text-slate-700",
    textoBlanco: "text-slate-900",
    textoMuted: "text-slate-500",
    textoExtra: "text-slate-400",
    textoPie: "text-slate-400",
    borde: "border-slate-200",
    bordeInput: "border-slate-300",
    inputBg: "bg-slate-100",
    navBg: "bg-[#F4F5F7]/85",
    selection: "selection:bg-blue-300/40",
    terminalbg: "#1E1E2E",
    terminalHeader: "#2A2A3C",
    terminalTexto: "text-slate-300",
    badgeBg: "bg-blue-50",
    badgeTexto: "text-blue-600",
    tagBg: "bg-slate-100",
    tagTexto: "text-slate-400",
    iconBg: "bg-slate-100",
    divider: "bg-slate-200",
    noise: "opacity-0",
  },
};

// ─────────────────────────────────────────────
// Contenido en Español (El Salvador)
// ─────────────────────────────────────────────
const contenido = {
  nav: {
    marca: "Helios",
    inicio: "Inicio",
    servicios: "Servicios",
    contacto: "Contacto",
  },
  hero: {
    insignia: "Sistema v3.0 En Línea",
    titulo: "Hecho para velocidad.",
    titulo2: "Diseñado para escalar.",
    descripcion:
      "Helios diseña software a medida y sistemas operativos en Notion. Transformamos el caos en arquitecturas lineales de alto rendimiento.",
    cta_principal: "Empezar",
    cta_secundario: "Contáctanos",
  },
  stack: "Impulsando equipos modernos con tecnología de punta",
  caracteristicas: {
    titulo: "Ingeniería a la perfección",
    subtitulo:
      "Software como debe ser. Rápido, confiable y hermosamente funcional.",
    f1: "Automatización de Flujos",
    f1_d: "Elimina tareas repetitivas con herramientas internas personalizadas.",
    f2: "Sincronización en Tiempo Real",
    f2_d: "Capas de datos optimizadas para colaboración instantánea.",
    f3: "Seguridad Primero",
    f3_d: "Encriptación de grado empresarial para los datos de tu empresa.",
  },
  terminal: {
    titulo: "helios-cli — -zsh — 80x24",
    linea1: "npm install @helios/core",
    linea2: "✔ Módulos centrales iniciados",
    linea3: "✔ Arquitectura_SaaS cargada",
    linea4: "Esperando comando del usuario...",
  },
  servicios: {
    titulo: "El Protocolo Helios",
    subtitulo: "Tres pilares de la infraestructura digital moderna.",
    items: [
      {
        id: 1,
        titulo: "Sistemas Notion",
        desc: "No hacemos plantillas. Diseñamos sistemas operativos para tu lógica de negocio.",
        etiqueta: "Flujo",
      },
      {
        id: 2,
        titulo: "Ingeniería SaaS",
        desc: "De cero a lanzamiento. Arquitecturas escalables y multi-inquilino construidas en el edge.",
        etiqueta: "Escala",
      },
      {
        id: 3,
        titulo: "Software a Medida",
        desc: "Cuando lo comercial no basta. Herramientas personalizadas para problemas únicos.",
        etiqueta: "Custom",
      },
    ],
  },
  contacto: {
    titulo: "Contáctanos",
    subtitulo: "Construyamos algo extraordinario juntos.",
    nombre: "Nombre",
    correo: "Correo electrónico",
    mensaje: "Mensaje",
    enviar: "Enviar Mensaje",
    whatsapp: "Hablar por WhatsApp",
    placeholderNombre: "Juan Pérez",
    placeholderCorreo: "juan@helios.com",
    placeholderMensaje: "¿Cómo podemos ayudarte?",
  },
  pie: {
    descripcion:
      "Construyendo el futuro de la infraestructura de software. Minimalista, rápido y diseñado para equipos que escalan.",
    derechos:
      "© 2024 AVA. Helios es mi marca registrada. Todos los derechos reservados.",
  },
};

// ─────────────────────────────────────────────
// Componente: Escritura animada
// ─────────────────────────────────────────────
const EscritorAnimado = ({ texto, retraso = 30, alCompletar }) => {
  const [textoActual, setTextoActual] = useState("");
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    if (indice < texto.length) {
      const temporizador = setTimeout(() => {
        setTextoActual((prev) => prev + texto[indice]);
        setIndice((prev) => prev + 1);
      }, retraso);
      return () => clearTimeout(temporizador);
    } else if (alCompletar) {
      alCompletar();
    }
  }, [indice, retraso, texto, alCompletar]);

  return <span>{textoActual}</span>;
};

// ─────────────────────────────────────────────
// Componente: Terminal animada
// ─────────────────────────────────────────────
const TerminalViva = ({ datosTerminal, paleta }) => {
  const [indiceActivo, setIndiceActivo] = useState(0);

  useEffect(() => {
    setIndiceActivo(0);
  }, [datosTerminal]);

  const manejarLineaCompleta = () => {
    if (indiceActivo < 3) setIndiceActivo((prev) => prev + 1);
  };

  const todasLasLineas = [
    datosTerminal.linea1,
    datosTerminal.linea2,
    datosTerminal.linea3,
    datosTerminal.linea4,
  ];

  return (
    <div className="w-full max-w-lg mx-auto transform hover:scale-[1.01] transition-transform duration-500">
      <div
        className="rounded-xl overflow-hidden border shadow-2xl shadow-blue-900/10 backdrop-blur-xl"
        style={{
          backgroundColor: paleta.terminalbg,
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        {/* Barra de título */}
        <div
          className="px-4 py-3 flex items-center justify-between border-b"
          style={{
            backgroundColor: paleta.terminalHeader,
            borderColor: "rgba(255,255,255,0.05)",
          }}
        >
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="text-[10px] text-gray-500 font-medium font-mono flex items-center gap-1">
            <Command size={10} /> {datosTerminal.titulo}
          </div>
          <div className="w-10" />
        </div>

        {/* Contenido */}
        <div
          className={`p-6 font-mono text-[13px] leading-relaxed h-64 ${paleta.terminalTexto}`}
        >
          {todasLasLineas.map((linea, idx) => (
            <div
              key={idx}
              className={`mb-2 ${idx > indiceActivo ? "hidden" : "flex"}`}
            >
              <span className="text-emerald-400 mr-3 font-bold">➜</span>
              <span>
                {idx < indiceActivo ? (
                  linea
                ) : (
                  <EscritorAnimado
                    texto={linea}
                    alCompletar={manejarLineaCompleta}
                    retraso={25}
                  />
                )}
              </span>
            </div>
          ))}
          <div className={`mt-2 ${indiceActivo === 3 ? "block" : "hidden"}`}>
            <span className="inline-block w-2.5 h-5 bg-slate-500 align-middle animate-pulse" />
          </div>
        </div>
      </div>
      <div className="absolute -inset-0.5 bg-gradient-to-t from-blue-500/20 to-purple-500/20 rounded-xl blur-2xl -z-10 opacity-40" />
    </div>
  );
};

// ─────────────────────────────────────────────
// Componente Principal
// ─────────────────────────────────────────────
export default function App() {
  const temaActivo = useSystemTheme(); // "dark" | "light"
  const paleta = temas[temaActivo];

  const [desplazado, setDesplazado] = useState(false);
  const [pagina, setPagina] = useState("inicio");
  const [posRaton, setPosRaton] = useState({ x: 0, y: 0 });

  const t = contenido;

  useEffect(() => {
    const manejarScroll = () => setDesplazado(window.scrollY > 20);
    const manejarRaton = (e) => setPosRaton({ x: e.clientX, y: e.clientY });
    window.addEventListener("scroll", manejarScroll);
    window.addEventListener("mousemove", manejarRaton);
    return () => {
      window.removeEventListener("scroll", manejarScroll);
      window.removeEventListener("mousemove", manejarRaton);
    };
  }, []);

  const degradadoCursor =
    temaActivo === "dark"
      ? `radial-gradient(circle at ${posRaton.x}px ${posRaton.y}px, rgba(56,189,248,0.08) 0%, rgba(0,0,0,0) 50%)`
      : `radial-gradient(circle at ${posRaton.x}px ${posRaton.y}px, rgba(56,189,248,0.05) 0%, rgba(244,245,247,0) 50%)`;

  return (
    <div
      className={`min-h-screen ${paleta.texto} ${paleta.selection} font-sans antialiased overflow-x-hidden transition-colors duration-300`}
      style={{ backgroundColor: paleta.fondo }}
    >
      {/* Efecto cursor */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{ background: degradadoCursor }}
      />

      {/* Textura de ruido */}
      <div
        className={`fixed inset-0 z-0 ${paleta.noise} pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay`}
      />

      {/* ── Barra de Navegación ── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          desplazado
            ? `backdrop-blur-md border-b ${paleta.borde}`
            : "bg-transparent"
        }`}
        style={desplazado ? { backgroundColor: paleta.fondoNav } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => setPagina("inicio")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-9 h-9">
              <img
                src={logo}
                alt="Logo Helios"
                className="w-full h-full object-contain drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]"
              />
            </div>
            <span
              className={`font-semibold tracking-tight ${paleta.textoBlanco}`}
            >
              {t.nav.marca}
            </span>
          </div>

          {/* Menú */}
          <div
            className={`hidden md:flex items-center gap-6 text-sm font-medium ${paleta.textoMuted}`}
          >
            <button
              onClick={() => setPagina("inicio")}
              className={`hover:${paleta.textoBlanco} transition-colors`}
            >
              {t.nav.inicio}
            </button>
            <button
              onClick={() => setPagina("servicios")}
              className={`hover:${paleta.textoBlanco} transition-colors`}
            >
              {t.nav.servicios}
            </button>

            {/* Indicador de tema (solo visual, no toggle manual) */}
            <div className={`w-px h-4 ${paleta.divider} mx-2`} />
            <span
              className={`text-xs font-mono px-2 py-1 rounded ${paleta.inputBg} ${paleta.textoExtra} flex items-center gap-1`}
            >
              <Monitor size={12} />
              {temaActivo === "dark" ? "Oscuro" : "Claro"}
            </span>

            <button
              onClick={() => setPagina("contacto")}
              className={`flex items-center gap-2 ${paleta.inputBg} hover:bg-white/10 ${paleta.textoBlanco} border ${paleta.borde} px-4 py-1.5 rounded-full text-xs font-medium transition-all group`}
            >
              {t.nav.contacto}
              <ChevronRight
                size={14}
                className="opacity-50 group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Contenido Principal ── */}
      <main className="relative z-10 pt-32 pb-20 px-6">
        {/* ── Página de Inicio ── */}
        {pagina === "inicio" && (
          <>
            {/* Sección Hero */}
            <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center mb-40">
              <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
                {/* Insignia */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-medium ${paleta.badgeBg} ${paleta.badgeTexto} tracking-wide backdrop-blur-sm ${paleta.borde}`}
                >
                  <Zap size={12} className="fill-blue-400" /> {t.hero.insignia}
                </div>

                {/* Título */}
                <h1
                  className={`text-5xl md:text-7xl font-semibold tracking-tighter ${paleta.textoBlanco} leading-[1.05]`}
                >
                  {t.hero.titulo} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white">
                    {t.hero.titulo2}
                  </span>
                </h1>

                {/* Descripción */}
                <p
                  className={`text-lg ${paleta.textoMuted} max-w-lg leading-relaxed font-light`}
                >
                  {t.hero.descripcion}
                </p>

                {/* Botones CTA */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={() => setPagina("servicios")}
                    className="h-10 px-6 rounded-full bg-[#5E6AD2] hover:bg-[#6F7BF7] text-white font-medium text-sm transition-all shadow-[0_0_20px_rgba(94,106,210,0.4)] flex items-center gap-2"
                  >
                    {t.hero.cta_principal} <ArrowRight size={16} />
                  </button>
                  <button
                    onClick={() => setPagina("contacto")}
                    className={`h-10 px-6 rounded-full border ${paleta.borde} hover:${paleta.inputBg} ${paleta.textoBlanco} font-medium text-sm transition-all flex items-center gap-2`}
                  >
                    <MessageSquare size={16} className={paleta.textoMuted} />{" "}
                    {t.hero.cta_secundario}
                  </button>
                </div>
              </div>

              {/* Terminal */}
              <div className="relative animate-in fade-in slide-in-from-right duration-700">
                <TerminalViva datosTerminal={t.terminal} paleta={paleta} />
              </div>
            </section>

            {/* Stack Tecnológico */}
            <section className="max-w-7xl mx-auto mb-40">
              <p
                className={`text-center text-xs font-mono ${paleta.textoExtra} uppercase tracking-widest mb-10`}
              >
                {t.stack}
              </p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                {[
                  { icono: <Github size={24} />, nombre: "GitHub" },
                  { icono: <Framer size={24} />, nombre: "Framer" },
                  { icono: <DatabaseIcon size={24} />, nombre: "Supabase" },
                  { icono: <Box size={24} />, nombre: "Vercel" },
                ].map(({ icono, nombre }) => (
                  <div
                    key={nombre}
                    className={`flex items-center gap-2 ${paleta.textoBlanco}`}
                  >
                    {icono}
                    <span className="font-bold text-lg">{nombre}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Características */}
            <section className="max-w-7xl mx-auto mb-40">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Tarjeta Grande */}
                <div
                  className={`p-10 rounded-3xl border ${paleta.borde} flex flex-col justify-end min-h-[400px] group relative overflow-hidden`}
                  style={{ backgroundColor: paleta.fondoTarjeta }}
                >
                  <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                    <MousePointer2 size={120} className="text-blue-500" />
                  </div>
                  <div className="relative z-10">
                    <h3
                      className={`text-3xl font-semibold ${paleta.textoBlanco} mb-4`}
                    >
                      {t.caracteristicas.titulo}
                    </h3>
                    <p className={`${paleta.textoMuted} max-w-sm`}>
                      {t.caracteristicas.subtitulo}
                    </p>
                  </div>
                </div>

                {/* Tarjetas Pequeñas */}
                <div className="grid gap-6">
                  {[
                    {
                      icono: <Layers size={24} />,
                      colorBg: "bg-blue-500/10",
                      colorBorde: "border-blue-500/20",
                      colorTexto: "text-blue-400",
                      titulo: t.caracteristicas.f1,
                      desc: t.caracteristicas.f1_d,
                    },
                    {
                      icono: <Zap size={24} />,
                      colorBg: "bg-purple-500/10",
                      colorBorde: "border-purple-500/20",
                      colorTexto: "text-purple-400",
                      titulo: t.caracteristicas.f2,
                      desc: t.caracteristicas.f2_d,
                    },
                    {
                      icono: <Shield size={24} />,
                      colorBg: "bg-emerald-500/10",
                      colorBorde: "border-emerald-500/20",
                      colorTexto: "text-emerald-400",
                      titulo: t.caracteristicas.f3,
                      desc: t.caracteristicas.f3_d,
                    },
                  ].map(
                    ({
                      icono,
                      colorBg,
                      colorBorde,
                      colorTexto,
                      titulo,
                      desc,
                    }) => (
                      <div
                        key={titulo}
                        className={`p-8 rounded-3xl border ${paleta.borde} flex items-start gap-6 group`}
                        style={{ backgroundColor: paleta.fondoTarjeta }}
                      >
                        <div
                          className={`p-3 rounded-xl ${colorBg} border ${colorBorde} ${colorTexto}`}
                        >
                          {icono}
                        </div>
                        <div>
                          <h4
                            className={`${paleta.textoBlanco} font-medium mb-1`}
                          >
                            {titulo}
                          </h4>
                          <p className={`text-sm ${paleta.textoExtra}`}>
                            {desc}
                          </p>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </section>
          </>
        )}

        {/* ── Página de Servicios ── */}
        {pagina === "servicios" && (
          <section className="max-w-7xl mx-auto animate-in fade-in duration-500">
            <div className="mb-16 text-center">
              <h2
                className={`text-4xl font-semibold tracking-tighter ${paleta.textoBlanco} mb-4`}
              >
                {t.servicios.titulo}
              </h2>
              <p className={`${paleta.textoMuted} text-lg max-w-2xl mx-auto`}>
                {t.servicios.subtitulo}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {t.servicios.items.map((item, idx) => (
                <div
                  key={item.id}
                  className={`group p-8 rounded-2xl border ${paleta.borde} hover:border-white/10 transition-all overflow-hidden relative`}
                  style={{ backgroundColor: paleta.fondoTarjeta2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6 flex justify-between">
                      <div className={`p-3 rounded-lg ${paleta.iconBg}`}>
                        {idx === 0 ? (
                          <LayoutTemplate size={24} className="text-blue-400" />
                        ) : idx === 1 ? (
                          <Server size={24} className="text-purple-400" />
                        ) : (
                          <Code size={24} className="text-emerald-400" />
                        )}
                      </div>
                      <span
                        className={`text-[10px] font-mono ${paleta.tagTexto} border ${paleta.borde} px-2 py-1 rounded`}
                      >
                        {item.etiqueta}
                      </span>
                    </div>
                    <h3
                      className={`text-xl font-medium ${paleta.textoBlanco} mb-3`}
                    >
                      {item.titulo}
                    </h3>
                    <p className={`text-sm ${paleta.textoMuted} mb-6`}>
                      {item.desc}
                    </p>
                    <div
                      className={`mt-auto flex items-center text-xs ${paleta.textoExtra} font-medium group-hover:text-blue-400 transition-colors`}
                    >
                      Saber más <ChevronRight size={12} className="ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Página de Contacto ── */}
        {pagina === "contacto" && (
          <section className="max-w-4xl mx-auto animate-in fade-in duration-500">
            <div className="mb-12 text-center">
              <h2
                className={`text-4xl font-semibold tracking-tighter ${paleta.textoBlanco} mb-4`}
              >
                {t.contacto.titulo}
              </h2>
              <p className={paleta.textoMuted}>{t.contacto.subtitulo}</p>
            </div>
            <div
              className={`grid md:grid-cols-1 gap-12 p-8 md:p-12 rounded-2xl border ${paleta.borde}`}
              style={{ backgroundColor: paleta.fondoTarjeta2 }}
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div className="space-y-2">
                    <label
                      className={`text-xs font-medium ${paleta.textoExtra} uppercase tracking-wider`}
                    >
                      {t.contacto.nombre}
                    </label>
                    <input
                      type="text"
                      className={`w-full ${paleta.inputBg} border ${paleta.bordeInput} rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors ${paleta.texto}`}
                      placeholder={t.contacto.placeholderNombre}
                    />
                  </div>
                  {/* Correo */}
                  <div className="space-y-2">
                    <label
                      className={`text-xs font-medium ${paleta.textoExtra} uppercase tracking-wider`}
                    >
                      {t.contacto.correo}
                    </label>
                    <input
                      type="email"
                      className={`w-full ${paleta.inputBg} border ${paleta.bordeInput} rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors ${paleta.texto}`}
                      placeholder={t.contacto.placeholderCorreo}
                    />
                  </div>
                </div>
                {/* Mensaje */}
                <div className="space-y-2">
                  <label
                    className={`text-xs font-medium ${paleta.textoExtra} uppercase tracking-wider`}
                  >
                    {t.contacto.mensaje}
                  </label>
                  <textarea
                    rows="4"
                    className={`w-full ${paleta.inputBg} border ${paleta.bordeInput} rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors ${paleta.texto}`}
                    placeholder={t.contacto.placeholderMensaje}
                  />
                </div>
                {/* Botones */}
                <div className="flex flex-col md:flex-row gap-4 pt-4">
                  <button className="flex-1 bg-white text-black py-3 rounded-lg font-bold hover:bg-blue-400 hover:text-white transition-all flex items-center justify-center gap-2">
                    <Send size={18} /> {t.contacto.enviar}
                  </button>
                  <a
                    href="https://wa.me/+50375910769"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-[#25D366] text-white py-3 rounded-lg font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    <Phone size={18} /> {t.contacto.whatsapp}
                  </a>
                </div>
              </form>
            </div>
          </section>
        )}
      </main>

      {/* ── Pie de Página ── */}
      <footer
        className={`py-20 border-t ${paleta.borde}`}
        style={{ backgroundColor: paleta.fondo }}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8">
                <img
                  src={logo}
                  alt="Logo Helios"
                  className="w-full h-full object-contain drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]"
                />
              </div>
              <span
                className={`text-lg font-semibold tracking-tight ${paleta.textoBlanco}`}
              >
                {t.nav.marca}
              </span>
            </div>
            <p
              className={`text-sm ${paleta.textoMuted} max-w-xs leading-relaxed`}
            >
              {t.pie.descripcion}
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <p className={`text-xs ${paleta.textoPie} font-mono`}>
              {t.pie.derechos}
            </p>
            <div className={`flex gap-4 opacity-50 ${paleta.textoBlanco}`}>
              <Github
                size={18}
                className="cursor-pointer hover:text-blue-400 transition-colors"
              />
              <MessageSquare
                size={18}
                className="cursor-pointer hover:text-blue-400 transition-colors"
              />
              <Globe
                size={18}
                className="cursor-pointer hover:text-blue-400 transition-colors"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
