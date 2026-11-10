// Para sumar o editar un proyecto, tocá este array.

export type Proyecto = {
  slug: string;
  nombre: string;
  tipo: string;
  anio: string; // ej: "2025 – hoy" — vacío = no se muestra
  resumen: string;
  rol: string;
  puntos: string[];
  stack: string[];
  video?: string; // ruta dentro de /public, ej: "/proyectos/karta/demo.mp4"
  // Capturas dentro de /public. Si el array está vacío, no se muestra la galería.
  imagenes?: { src: string; alt: string }[];
  nota?: string; // aclaración chica debajo de la galería
  links?: { label: string; href: string }[];
};

export const proyectos: Proyecto[] = [
  {
    slug: "karta",
    nombre: "Karta",
    tipo: "Proyecto propio",
    anio: "",
    resumen:
      "Es un sistema para restaurantes, bares y cafeterías. El cliente escanea un QR en la mesa, ve la carta y hace el pedido desde el celular. El mozo lo recibe en su panel, la cocina lo ve en su pantalla y el dueño tiene las métricas de ventas. Lo pensé para que funcione desde el navegador, sin comprar equipos.",
    rol: "Lo hago solo: diseño, base de datos, backend, frontend y deploy.",
    puntos: [
      "Varios locales usan el mismo sistema y cada uno ve solo sus datos. Todas las consultas filtran por local.",
      "Los pedidos y el estado de las mesas se actualizan en tiempo real con WebSockets (Supabase Realtime), sin estar consultando al servidor cada tantos segundos.",
      "El cliente no necesita registrarse: el QR genera un token temporal y los pedidos quedan agrupados en una sesión de esa mesa.",
      "Tres roles: super admin (yo), admin del local y mozo. El panel del mozo es una PWA con notificaciones push y aviso cuando una mesa pide la cuenta.",
      "Dashboard con métricas de ventas y un asistente con IA que responde preguntas sobre el negocio.",
      "Pagos con Mercado Pago y tests con Vitest y Playwright.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "PostgreSQL", "Prisma", "Supabase", "Mercado Pago", "Vercel"],
    video: "", // cuando tengas el video: "/proyectos/karta/demo.mp4" (archivo en public/proyectos/karta/)
    imagenes: [
      // { src: "/proyectos/karta/carta-qr.png", alt: "Carta digital desde el celular" },
      // { src: "/proyectos/karta/panel-mozo.png", alt: "Panel del mozo" },
      // { src: "/proyectos/karta/cocina.png", alt: "Pantalla de cocina" },
      // { src: "/proyectos/karta/dashboard.png", alt: "Dashboard de métricas" },
    ],
  },
  {
    slug: "kueross",
    nombre: "Kueross",
    tipo: "Cliente · E-commerce",
    anio: "",
    resumen:
      "Tienda online de marroquinería hecha en WooCommerce. Me encargo del mantenimiento y de las funciones a medida que va necesitando el negocio.",
    rol: "Desarrollo y mantenimiento de la tienda.",
    puntos: [
      "Hice una auditoría del WordPress para ordenar lo que había y detectar problemas.",
      "Armé un panel para que el cliente cambie los banners sin tocar código.",
      "Agregué validación de zonas de envío y un selector de colores con imagen para cada producto.",
      "Desarrollé un control de stock con egresos de mercadería, listado diario, reporte de ventas y valorización del stock.",
      "Trabajo siempre primero en una copia de staging y después paso los cambios a producción.",
    ],
    stack: ["WordPress", "WooCommerce", "PHP", "JavaScript", "MySQL"],
    links: [{ label: "kueross.com", href: "https://kueross.com" }],
    imagenes: [
      // { src: "/proyectos/kueross/tienda.png", alt: "Tienda online" },
      // { src: "/proyectos/kueross/stock.png", alt: "Control de stock" },
    ],
  },
  {
    slug: "mop-comprobantes",
    nombre: "Sistema de Comprobantes",
    tipo: "Ministerio de Obras Públicas · Santa Fe",
    anio: "",
    resumen:
      "Sistema interno para gestionar las rendiciones de gastos y sus comprobantes. Le doy mantenimiento y le voy sumando funciones según lo que piden las áreas.",
    rol: "Desarrollo y mantenimiento.",
    puntos: [
      "Cambié el circuito de revisión, que era lineal y rígido, por uno que permite ir y volver entre áreas, guardando el historial de cada movimiento.",
      "Sumé un rol de supervisor que puede ver todo pero sin modificar nada.",
      "Resolví un error en la generación de PDFs firmados que aparecía al mezclar comprobantes de ARCA con documentos internos.",
      "Trabajé en la migración a dos bases PostgreSQL con entity managers separados en Doctrine.",
      "Integré el inicio de sesión único (SSO) con otros sistemas del ministerio usando CAS y URLs firmadas.",
    ],
    stack: ["PHP", "Symfony", "Doctrine", "PostgreSQL"],
    imagenes: [
      // { src: "/proyectos/mop-comprobantes/rendiciones.png", alt: "Listado de rendiciones" },
    ],
    nota: "Las capturas usan datos ficticios.",
  },
  {
    slug: "mop-bi",
    nombre: "BI de Obras Públicas",
    tipo: "Ministerio de Obras Públicas · Santa Fe",
    anio: "",
    resumen:
      "Tableros en Metabase para seguir el estado de las obras públicas de la provincia.",
    rol: "Consultas SQL y armado de los tableros.",
    puntos: [
      "Escribí las consultas SQL sobre la base de obras.",
      "Unifiqué los estados de las obras para que se lean más fácil (a iniciar, en trámite, en ejecución, finalizada).",
      "Armé filtros encadenados por departamento y localidad.",
    ],
    stack: ["Metabase", "SQL", "PostgreSQL"],
    imagenes: [
      // { src: "/proyectos/mop-bi/tablero.png", alt: "Tablero de obras" },
    ],
    nota: "Las capturas usan datos ficticios.",
  },
];
