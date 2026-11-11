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
      "Pagos con Mercado Pago.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "PostgreSQL", "Supabase", "Mercado Pago", "Vercel"],
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
      "Sistema interno del ministerio para que los beneficiarios de subsidios rindan sus gastos y las áreas de auditoría los revisen. Los comprobantes se validan contra ARCA y la rendición se firma digitalmente. Lo mantengo y le sumo funciones según lo que piden las áreas.",
    rol: "Desarrollo y mantenimiento.",
    puntos: [
      "Los comprobantes se validan contra el servicio web de ARCA (WSCDC) al cargarlos, así que no hay que revisar facturas a mano.",
      "El circuito de auditoría es secuencial y se puede ir y volver entre áreas: financiero, técnico, director y firma. Cada movimiento queda en el historial.",
      "La rendición se firma con un firmador digital externo. El PDF final junta comprobantes de ARCA, comprobantes internos y archivos respaldatorios.",
      "Se sincroniza con el sistema de subsidios por API: cuando un auditor toma la rendición, subsidio recibe su CUIL y el cambio de estado.",
      "Usa dos bases PostgreSQL con entity managers separados: una propia y otra de solo lectura con los datos externos de beneficiarios y pagos.",
      "Tiene roles de usuario, auditor (financiero, técnico y super auditor), visor de solo lectura y administrador. El inicio de sesión es por SSO con CAS.",
    ],
    stack: ["PHP", "Symfony", "Doctrine", "PostgreSQL", "CAS SSO", "ARCA"],
    imagenes: [
      { src: "/proyectos/mop-comprobantes/mis-subsidios.png", alt: "Panel Mis Subsidios con vencimientos y trámites pendientes" },
      { src: "/proyectos/mop-comprobantes/beneficiarios.png", alt: "Subsidios agrupados por beneficiario" },
      { src: "/proyectos/mop-comprobantes/detalle-subsidio.png", alt: "Detalle de un subsidio con sus pagos y trámites" },
      { src: "/proyectos/mop-comprobantes/auditoria.png", alt: "Auditoría de una rendición con comprobantes de ARCA e internos" },
      { src: "/proyectos/mop-comprobantes/comprobante-arca.png", alt: "Revisión de un comprobante de ARCA con decisión del auditor" },
    ],
    nota: "Las capturas usan datos ficticios.",
  },
  {
    slug: "mop-bi",
    nombre: "BI de Obras Públicas",
    tipo: "Ministerio de Obras Públicas · Santa Fe",
    anio: "",
    resumen:
      "Sistema web de tableros para seguir el estado de las obras públicas de la provincia: cantidades por estado, inversión, contratistas, mapa y detalle de cada obra. Lo usan distintos perfiles del ministerio y cada uno ve solo lo que le corresponde. Reemplaza la consulta manual de planillas por tableros que leen siempre la fuente actual.",
    rol: "Desarrollo full stack y mantenimiento.",
    puntos: [
      "Los tableros consultan Metabase en cada carga, así que muestran lo último cargado sin exportar ni copiar nada.",
      "Los filtros (dependencia, departamento, localidad, estado, mes y año, búsqueda por texto) se traducen a parámetros de la consulta. Un único servicio los arma para todos los tableros. Si Metabase falla, el tablero se muestra vacío en vez de romperse.",
      "Cada usuario entra con su CUIL por el login único de la provincia. El menú se arma desde base de datos según los permisos asignados. Hay perfiles de administración, usuario común, ministro, rendición y Juegos Suramericanos.",
      "Para el ministro hay una vista con mapa de obras, listado paginado, contadores por dependencia y búsqueda por nombre. Desde el mapa o la lista se abre un modal con el detalle de cada obra.",
      "Armé el tablero de los Juegos Suramericanos 2026 en React: KPIs, estado por obra con semáforo, curva de avance y mapa de sedes.",
    ],
    stack: [
      "PHP",
      "Symfony 6",
      "Metabase",
      "PostgreSQL",
      "Doctrine",
      "React",
      "Stimulus",
      "Recharts",
      "Leaflet",
      "Highcharts",
      "Webpack Encore",
      "CAS/SSO",
    ],
    imagenes: [
      { src: "/proyectos/mop-bi/indicadores.png", alt: "Indicadores de gestión de obra pública con contadores y mapa" },
      { src: "/proyectos/mop-bi/obras-kpis.jpg", alt: "Tablero de obras con certificados, licitaciones y multas" },
      { src: "/proyectos/mop-bi/vista-ministro.png", alt: "Vista del ministro con filtros, contadores por dependencia, listado y mapa" },
      { src: "/proyectos/mop-bi/juegos-dashboard.png", alt: "Tablero de los Juegos Suramericanos 2026 con KPIs y ranking de avance" },
      { src: "/proyectos/mop-bi/juegos-proyectos.png", alt: "Gestión de proyectos con curva de avance de una obra" },
      { src: "/proyectos/mop-bi/juegos-mapa.png", alt: "Mapa de sedes de los Juegos Suramericanos" },
    ],
    nota: "Los datos de las capturas fueron modificados por seguridad.",
  },
];
