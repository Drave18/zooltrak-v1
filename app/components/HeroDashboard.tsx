"use client";

export default function HeroDashboard() {
  const bars = [38, 52, 41, 64, 48, 73, 60, 82, 70, 91, 78, 95];
  return (
    <div className="relative">
      <div className="float-y">
        <div className="bg-paper-raised border-2 border-ink shadow-hard-lg p-5 md:p-6 w-full max-w-[520px] mx-auto">
          <div className="flex items-center justify-between border-b border-rule pb-3">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 bg-signal" />
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                ZLT-Q3 / Live
              </span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
              12w window
            </span>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="border border-rule p-3">
              <p className="font-mono text-[9px] uppercase tracking-widest2 text-ink-muted">
                Revenue
              </p>
              <p className="font-display italic text-3xl text-ink leading-none mt-2">
                $1.84M
              </p>
              <p className="font-mono text-[10px] text-signal mt-1">▲ 41.2%</p>
            </div>
            <div className="border border-rule p-3">
              <p className="font-mono text-[9px] uppercase tracking-widest2 text-ink-muted">
                CAC
              </p>
              <p className="font-display italic text-3xl text-ink leading-none mt-2">
                $38
              </p>
              <p className="font-mono text-[10px] text-signal mt-1">▼ 27.4%</p>
            </div>
            <div className="border border-rule p-3">
              <p className="font-mono text-[9px] uppercase tracking-widest2 text-ink-muted">
                LTV:CAC
              </p>
              <p className="font-display italic text-3xl text-ink leading-none mt-2">
                5.6×
              </p>
              <p className="font-mono text-[10px] text-signal mt-1">▲ target+</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                Pipeline Velocity
              </p>
              <p className="font-mono text-[10px] text-ink-muted">wk-over-wk</p>
            </div>
            <div className="h-32 flex items-end gap-1.5 border-b border-rule pb-1">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-ink/85 origin-bottom bar-grow"
                  style={{
                    height: `${h}%`,
                    animationDelay: `${300 + i * 60}ms`,
                    background: i === bars.length - 1 ? "var(--signal)" : undefined,
                  }}
                />
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between font-mono text-[9px] text-ink-muted">
              <span>W01</span>
              <span>W06</span>
              <span>W12</span>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-rule pt-3">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
              <span className="inline-block h-1.5 w-1.5 bg-signal" />
              04 automations live
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest2 text-ink">
              ZLT-OS&nbsp;/&nbsp;v2.3
            </span>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute -top-6 -right-4 rotate-[6deg] bg-signal text-ink border-2 border-ink px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest2 shadow-hard">
        ▲ 41% YoY
      </div>
      <div className="hidden md:block absolute -bottom-4 -left-6 rotate-[-4deg] bg-paper border-2 border-ink px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest2 shadow-hard">
        Filed: 2026-06
      </div>
    </div>
  );
}
