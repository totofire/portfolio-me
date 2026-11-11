// URL pública del sitio: en Vercel sale del dominio de producción, en local de localhost.
const dominioProduccion = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = new URL(
  dominioProduccion ? `https://${dominioProduccion}` : "http://localhost:3000",
);
