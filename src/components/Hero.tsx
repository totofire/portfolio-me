import { Linkedin, Mail, MapPin, FileText } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-20 md:pb-24 md:pt-32">
        <p className="flex items-center gap-2 font-mono text-sm text-muted">
          <MapPin size={14} /> {profile.ubicacion}
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
          {profile.nombre}
        </h1>
        <p className="mt-2 text-xl text-accent md:text-2xl">{profile.rol}</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg">
          {profile.bio}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#proyectos"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-ink transition hover:brightness-95"
          >
            Ver proyectos
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm transition hover:border-neutral-500"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm transition hover:border-neutral-500"
          >
            <Mail size={16} /> Mail
          </a>
          {profile.cv && (
            <a
              href={profile.cv}
              download="CV-Tomas-Fernandez.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm transition hover:border-neutral-500"
            >
              <FileText size={16} /> Descargar CV
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
