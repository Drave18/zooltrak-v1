export default function SectionLabel({
  num,
  title,
  meta,
}: {
  num: string;
  title: string;
  meta?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-6 border-b-2 border-ink pb-4 mb-10">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm tracking-widest2 uppercase text-ink-muted">
          § {num}
        </span>
        <h2 className="font-display text-4xl md:text-5xl leading-none">
          {title}
        </h2>
      </div>
      {meta && (
        <span className="hidden md:inline-block font-mono text-xs uppercase tracking-widest2 text-ink-muted">
          {meta}
        </span>
      )}
    </div>
  );
}
