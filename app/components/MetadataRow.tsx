export default function MetadataRow({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-y-2 border-ink">
      {items.map((it, i) => (
        <div
          key={it.label}
          className={`p-4 ${i !== 0 ? "md:border-l-2 border-rule" : ""} ${
            i >= 2 ? "border-t-2 md:border-t-0 border-rule" : ""
          }`}
        >
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
            {it.label}
          </p>
          <p className="font-display text-xl mt-1">{it.value}</p>
        </div>
      ))}
    </div>
  );
}
