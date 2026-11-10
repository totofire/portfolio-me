import { stack } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16 md:py-20">
      <SectionTitle n="02" titulo="Stack" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((g) => (
          <div key={g.grupo} className="rounded-xl border border-line bg-panel p-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted">{g.grupo}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li key={i} className="rounded-md bg-ink px-2.5 py-1 text-sm text-neutral-200">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
