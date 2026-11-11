// Datos personales. Editá acá y se actualiza todo el sitio.
export const profile = {
  nombre: "Tomás Fernández",
  rol: "Desarrollador Full Stack",
  ubicacion: "Santa Fe, Argentina",
  bio: "Soy desarrollador full stack. Trabajo en el Ministerio de Obras Públicas de Santa Fe haciendo sistemas internos y en paralelo armo Karta, un sistema para restaurantes. También hago trabajos para clientes con WordPress y WooCommerce.",
  email: "tomasfernandezz278@gmail.com",
  linkedin: "https://www.linkedin.com/in/tomas-fernandez-dev/",
  cv: "", // ej: "/cv-tomas-fernandez.pdf" — vacío = no se muestra el botón
};

export const stack: { grupo: string; items: string[] }[] = [
  { grupo: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { grupo: "Backend", items: ["PHP", "Symfony", "Node.js", "APIs REST", "WebSockets"] },
  { grupo: "Base de datos", items: ["PostgreSQL", "Doctrine", "Supabase", "SQL"] },
  { grupo: "CMS / E-commerce", items: ["WordPress", "WooCommerce"] },
  { grupo: "Datos / BI", items: ["Metabase"] },
  { grupo: "Herramientas", items: ["Git", "Vercel"] },
];
