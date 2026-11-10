export function SectionTitle({ n, titulo }: { n: string; titulo: string }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-line pb-4">
      <span className="font-mono text-sm text-accent">{n}</span>
      <h2 className="text-2xl font-semibold tracking-tight">{titulo}</h2>
    </div>
  );
}
