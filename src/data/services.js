import { Code, LayoutTemplate, Server } from "lucide-react";

export const services = [
  {
    id: "notion",
    number: "01",
    title: "Sistemas Notion",
    category: "Productividad",
    description:
      "Diseñamos sistemas operativos completos para tu negocio dentro de Notion: infraestructura de conocimiento personalizada, no plantillas genéricas.",
    points: [
      "Bases de datos relacionales",
      "Automatizaciones con IA",
      "Dashboards ejecutivos",
    ],
    icon: LayoutTemplate,
    color: "#6B7A3F",
  },
  {
    id: "saas",
    number: "02",
    title: "Ingeniería SaaS",
    category: "Escala",
    description:
      "Arquitecturas escalables y multiinquilino desde el primer día. De la idea al producto con velocidad y solidez técnica.",
    points: [
      "Frontend React / Next.js",
      "Backend Supabase / Node",
      "Deploy en el edge",
    ],
    icon: Server,
    color: "#8B6F47",
  },
  {
    id: "custom",
    number: "03",
    title: "Software a medida",
    category: "Custom",
    description:
      "Cuando las soluciones comerciales no encajan, construimos la tuya: herramientas internas, integraciones y automatizaciones únicas.",
    points: [
      "Automatización de procesos",
      "APIs e integraciones",
      "Herramientas internas",
    ],
    icon: Code,
    color: "#4A6B8A",
  },
];
