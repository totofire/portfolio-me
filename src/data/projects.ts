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
    video: "/proyectos/karta/demo.mp4",
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
      "Tienda online de una marroquinería de Santa Fe, con más de 180 productos entre valijas, mochilas y accesorios de viaje. Hice el desarrollo completo: la tienda, un sistema de gestión interno a medida, reglas de pagos y envíos, y la optimización de velocidad y SEO.",
    rol: "Desarrollo completo de la tienda y del sistema de gestión.",
    puntos: [
      "Sistema de gestión de inventario a medida dentro del panel de WordPress, con unos 28 módulos: productos, rubros, proveedores, ingresos, egresos, remitos en PDF, y reportes de ventas y valorización de stock, conectado a WooCommerce.",
      "Checkout a medida: validación de zonas de envío, cuotas sin interés calculadas en cada producto y descuentos según el medio de pago (transferencia, GoCuotas, Payway, Mercado Pago).",
      "Optimización de velocidad y SEO de la tienda.",
    ],
    stack: ["WordPress", "WooCommerce", "PHP", "JavaScript", "MySQL", "LiteSpeed"],
    links: [{ label: "kueross.com", href: "https://kueross.com" }],
    imagenes: [
      { src: "/proyectos/kueross/home.png", alt: "Inicio de la tienda con el slider de banners" },
      { src: "/proyectos/kueross/tienda.png", alt: "Listado de productos con filtros por categoría y precio" },
      { src: "/proyectos/kueross/producto.png", alt: "Ficha de producto con selector de color" },
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
