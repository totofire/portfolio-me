import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Stack } from "@/components/Stack";
import { Contact } from "@/components/Contact";
import { SectionTitle } from "@/components/SectionTitle";
import { proyectos } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <section id="proyectos" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16 md:py-20">
          <SectionTitle n="01" titulo="Proyectos" />
          <div className="mt-10 space-y-8">
            {proyectos.map((p, i) => (
              <ProjectCard key={p.slug} proyecto={p} index={i} />
            ))}
          </div>
        </section>
        <Stack />
        <Contact />
      </main>
    </>
  );
}
