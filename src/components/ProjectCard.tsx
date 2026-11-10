import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import type { Proyecto } from "@/data/projects";

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
      {imagenes.length > 0 && (
        <div className="mt-8">
          <div className="grid gap-3 sm:grid-cols-2">
            {imagenes.map((img) => (
              <a
                key={img.src}
                href={img.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[16/10] overflow-hidden rounded-lg border border-line bg-ink"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 480px, 100vw"
                  className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-2 pt-6 text-xs text-neutral-200">
                  {img.alt}
                </span>
              </a>
            ))}
          </div>
          {p.nota && <p className="mt-3 font-mono text-xs text-muted">* {p.nota}</p>}
        </div>
      )}

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
