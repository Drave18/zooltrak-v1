export default function Chip({
  children,
  active = false,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest2 px-3 py-1.5 border-2 transition-colors duration-200 ${
        active
          ? "bg-signal text-ink border-ink"
          : "bg-paper text-ink border-ink hover:bg-[rgba(0,200,83,0.12)]"
      }`}
    >
      <span
        className={`inline-block h-1.5 w-1.5 ${
          active ? "bg-ink" : "bg-ink-muted"
        }`}
      />
      {children}
    </button>
  );
}
