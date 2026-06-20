type Item = {
  label: string;
  href?: string;
};

export default function Marquee({
  items,
  separator = "✕",
}: {
  items: (string | Item)[];
  separator?: string;
}) {
  const normalize = (i: string | Item) => (typeof i === "string" ? i : i.label);
  const list = items.map(normalize);
  const loop = [...list, ...list];

  return (
    <div className="marquee-mask overflow-hidden border-y-2 border-ink bg-paper">
      <div className="marquee-track flex whitespace-nowrap py-5">
        {loop.map((label, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span className="font-display italic text-2xl md:text-3xl text-ink">
              {label}
            </span>
            <span className="font-mono text-ink-muted text-xl">{separator}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
