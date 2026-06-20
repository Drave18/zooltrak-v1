"use client";

export default function BarChart({
  data,
  unit = "%",
}: {
  data: { label: string; value: number }[];
  unit?: string;
}) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="border-2 border-ink bg-paper-raised shadow-hard p-5 md:p-6">
      <div className="flex items-center justify-between border-b border-rule pb-3">
        <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
          Outcomes · Aggregate
        </p>
        <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
          n=84 engagements
        </p>
      </div>
      <div className="mt-5 space-y-4">
        {data.map((d, i) => {
          const pct = (d.value / max) * 100;
          return (
            <div key={d.label} className="grid grid-cols-12 items-center gap-3">
              <span className="col-span-4 font-mono text-xs uppercase tracking-widest2 text-ink-muted truncate">
                {d.label}
              </span>
              <div className="col-span-6 h-5 border border-rule bg-paper relative">
                <div
                  className="absolute inset-y-0 left-0 bg-ink bar-grow"
                  style={{
                    width: `${pct}%`,
                    animationDelay: `${150 + i * 120}ms`,
                  }}
                >
                  <div
                    className="absolute right-0 inset-y-0 w-1.5 bg-signal"
                    style={{ animationDelay: `${150 + i * 120}ms` }}
                  />
                </div>
              </div>
              <span className="col-span-2 text-right font-display italic text-2xl text-ink">
                {d.value}
                {unit}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
