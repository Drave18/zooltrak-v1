export function Masthead({
  page,
  file,
  position,
}: {
  page: string;
  file: string;
  position: string;
}) {
  return (
    <div className="flex items-center justify-between border-y border-rule py-2.5 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
      <div className="flex items-center gap-2.5">
        <span className="inline-flex h-5 w-5 items-center justify-center bg-ink text-paper font-display italic text-[11px] leading-none">
          Z
        </span>
        <span>Zoltrak</span>
        <span className="text-rule">/</span>
        <span>{page}</span>
      </div>
      <div className="hidden md:flex items-center gap-3">
        <span>File · {file}</span>
        <span className="text-rule">/</span>
        <span>Vol. IV / 2026</span>
        <span className="text-rule">/</span>
        <span>{position}</span>
      </div>
    </div>
  );
}

export function PageMark() {
  return (
    <div
      aria-hidden
      className="pointer-events-none select-none absolute -top-6 -right-2 md:-top-10 md:-right-6 z-0"
    >
      <span className="font-display italic text-[200px] md:text-[280px] leading-none text-ink/[0.05]">
        Z
      </span>
    </div>
  );
}

export function PageFoot({ position }: { position: string }) {
  return (
    <div className="mt-16 border-t border-rule pt-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
      <span>End of document</span>
      <span className="flex items-center gap-3">
        <span>{position}</span>
        <span className="text-rule">/</span>
        <span>Vol. IV / 2026</span>
      </span>
    </div>
  );
}

export function TopRule() {
  return <div className="absolute inset-x-0 top-0 h-1 bg-ink" />;
}
