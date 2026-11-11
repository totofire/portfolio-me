"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

type Imagen = { src: string; alt: string };

type Props = {
  imagenes: Imagen[];
  nombre: string;
  nota?: string;
};

export function ProjectGallery({ imagenes, nombre, nota }: Props) {
  const [activa, setActiva] = useState(0);
  const [abierta, setAbierta] = useState(false);

  const total = imagenes.length;
  const actual = imagenes[activa];
  const irA = useCallback((i: number) => setActiva((i + total) % total), [total]);

  useEffect(() => {
    if (!abierta) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierta(false);
      if (e.key === "ArrowLeft") irA(activa - 1);
      if (e.key === "ArrowRight") irA(activa + 1);
    };
    const overflowPrevio = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflowPrevio;
    };
  }, [abierta, activa, irA]);

  if (total === 0) return null;

  return (
    <div className="mt-8">
      {/* Visor principal, con marco de ventana */}
      <div className="overflow-hidden rounded-lg border border-line bg-ink">
        <div className="flex items-center gap-3 border-b border-line bg-panel px-3 py-2">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
          </span>
          <p className="min-w-0 flex-1 truncate text-xs text-muted">{actual.alt}</p>
          <span className="font-mono text-xs text-muted">
            {activa + 1} / {total}
          </span>
        </div>

        <div className="group relative aspect-video bg-ink">
          <button
            type="button"
            onClick={() => setAbierta(true)}
            aria-label={`Ampliar captura de ${nombre}`}
            className="absolute inset-0 cursor-zoom-in"
          >
            <Image
              src={actual.src}
              alt={actual.alt}
              fill
              sizes="(min-width: 1024px) 960px, 100vw"
              className="object-contain"
            />
            <Maximize2
              size={16}
              className="absolute right-3 top-3 text-neutral-300 opacity-0 transition group-hover:opacity-100"
            />
          </button>
          {total > 1 && (
            <>
              <FlechaBoton lado="izq" onClick={() => irA(activa - 1)} />
              <FlechaBoton lado="der" onClick={() => irA(activa + 1)} />
            </>
          )}
        </div>
      </div>

      {/* Miniaturas */}
      {total > 1 && (
        <ul className="mt-3 flex snap-x gap-2 overflow-x-auto pb-1">
          {imagenes.map((img, i) => (
            <li key={img.src} className="shrink-0 snap-start">
              <button
                type="button"
                onClick={() => setActiva(i)}
                aria-label={`Ver captura ${i + 1}: ${img.alt}`}
                aria-current={i === activa}
                className={`relative block aspect-video w-28 overflow-hidden rounded-md border bg-ink transition sm:w-32 ${
                  i === activa ? "border-accent" : "border-line opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img.src} alt="" fill sizes="128px" className="object-cover object-top" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {nota && <p className="mt-3 font-mono text-xs text-muted">* {nota}</p>}

      {/* Lightbox */}
      {abierta && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Capturas de ${nombre}`}
          className="fixed inset-0 z-50 flex flex-col bg-black/90 p-4 md:p-8"
          onClick={() => setAbierta(false)}
        >
          <div className="mb-3 flex items-center justify-between gap-4 text-sm text-neutral-300">
            <p className="min-w-0 truncate">{actual.alt}</p>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-muted">
                {activa + 1} / {total}
              </span>
              <button
                type="button"
                onClick={() => setAbierta(false)}
                aria-label="Cerrar"
                className="rounded-md p-1 transition hover:text-accent"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          <div className="relative min-h-0 flex-1" onClick={(e) => e.stopPropagation()}>
            <Image src={actual.src} alt={actual.alt} fill sizes="100vw" className="object-contain" />
            {total > 1 && (
              <>
                <FlechaBoton lado="izq" onClick={() => irA(activa - 1)} />
                <FlechaBoton lado="der" onClick={() => irA(activa + 1)} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function FlechaBoton({ lado, onClick }: { lado: "izq" | "der"; onClick: () => void }) {
  const Icono = lado === "izq" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={lado === "izq" ? "Captura anterior" : "Captura siguiente"}
      className={`absolute top-1/2 -translate-y-1/2 rounded-full border border-line bg-panel/80 p-2 text-neutral-200 backdrop-blur transition hover:border-accent hover:text-accent ${
        lado === "izq" ? "left-3" : "right-3"
      }`}
    >
      <Icono size={18} />
    </button>
  );
}
