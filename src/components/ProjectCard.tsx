import { ArrowUpRight, Check } from "lucide-react";
import type { Proyecto } from "@/data/projects";
import { ProjectGallery } from "./ProjectGallery";

export function ProjectCard({ proyecto: p, index }: { proyecto: Proyecto; index: number }) {
  const imagenes = p.imagenes ?? [];

  return (
    <article id={p.slug} className="scroll-mt-24 rounded-xl border border-line bg-panel p-6 md:p-8">
      {/* Encabezado */}
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            {String(index + 1).padStart(2, "0")} · {p.tipo}
            {p.anio && ` · ${p.anio}`}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{p.nombre}</h3>
        </div>
        {p.links?.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md border border-line px-3 py-1.5 text-sm transition hover:border-accent hover:text-accent"
          >
            {l.label} <ArrowUpRight size={14} />
          </a>
        ))}
      </header>

      {/* Video */}
      {p.video && (
        <div className="mt-6 overflow-hidden rounded-lg border border-line bg-black">
          <video
            src={p.video}
            controls
            preload="metadata"
            playsInline
            className="aspect-video w-full"
          />
        </div>
      )}

      {/* Texto */}
      <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="leading-relaxed text-neutral-300">{p.resumen}</p>
          <p className="mt-4 text-sm text-muted">
            <span className="text-neutral-200">Mi rol:</span> {p.rol}
          </p>
        </div>
        <ul className="space-y-3">
          {p.puntos.map((punto) => (
            <li key={punto} className="flex gap-3 text-sm leading-relaxed text-neutral-300">
              <Check size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>{punto}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Galería */}
      <ProjectGallery imagenes={imagenes} nombre={p.nombre} nota={p.nota} />

      {/* Stack */}
      <ul className="mt-8 flex flex-wrap gap-2 border-t border-line pt-6">
        {p.stack.map((s) => (
          <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-neutral-300">
            {s}
          </li>
        ))}
      </ul>
    </article>
  );
}
