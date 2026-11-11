import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const titulo = `${profile.nombre} — ${profile.rol}`;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: titulo,
  description: profile.descripcion,
  authors: [{ name: profile.nombre, url: profile.linkedin }],
  alternates: { canonical: "/" },
  openGraph: {
    title: titulo,
    description: profile.descripcion,
    url: "/",
    siteName: `${profile.nombre} · Portfolio`,
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: profile.descripcion,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0D10",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
