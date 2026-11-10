import { Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

export function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16 md:py-20">
      <SectionTitle n="03" titulo="Contacto" />
      <div className="mt-10 rounded-xl border border-line bg-panel p-6 md:p-10">
        <p className="max-w-xl text-lg text-neutral-300">
          Si te interesa mi perfil o querés hablar de un proyecto, escribime.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-ink transition hover:brightness-95"
          >
            <Mail size={16} /> {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm transition hover:border-neutral-500"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
      <footer className="mt-16 text-center font-mono text-xs text-muted">
        {profile.nombre} · {new Date().getFullYear()}
      </footer>
    </section>
  );
}
