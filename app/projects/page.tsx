"use client";

import { useMemo, useState } from "react";
import Button from "../components/Button";
import Chip from "../components/Chip";
import { Masthead, PageFoot, PageMark, TopRule } from "../components/Dossier";
import MetadataRow from "../components/MetadataRow";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";

type Case = {
  id: string;
  client: string;
  industry: string;
  services: string[];
  timeline: string;
  region: string;
  metric: { value: string; label: string };
  challenge: string;
  solution: string;
  results: string[];
};

const cases: Case[] = [
  {
    id: "ZLT-014",
    client: "Linnaeus Robotics",
    industry: "Industrial",
    services: ["Software Development", "AI & Automation Consulting"],
    timeline: "16 weeks",
    region: "EU",
    metric: { value: "3.4×", label: "Throughput" },
    challenge:
      "Two legacy SCADA systems, a brittle integration, and a vision pipeline that ran at 11fps. Operators were copying CSV files between vendors.",
    solution:
      "Re-architected the control plane as a single TypeScript service, ported the vision model to a managed Triton inference cluster, and shipped an internal console with hard SLAs.",
    results: [
      "Vision latency 11fps → 38fps",
      "Operator workload down 62%",
      "Integration incidents down 91%",
    ],
  },
  {
    id: "ZLT-022",
    client: "Halberd Studios",
    industry: "D2C",
    services: ["Growth Marketing"],
    timeline: "9 months",
    region: "US",
    metric: { value: "−41%", label: "CAC" },
    challenge:
      "A premium brand spending $180k/mo on Meta with no attribution, no creative system, and an LTV that couldn&apos;t justify the budget.",
    solution:
      "Stood up a creative-testing engine, a server-side tracking layer, and an MMM in BigQuery. Killed three campaigns, scaled five, hired an in-house team to run the rest.",
    results: [
      "CAC down 41% in two quarters",
      "MER up from 1.8 to 4.6",
      "In-house team hired, retainer ended",
    ],
  },
  {
    id: "ZLT-031",
    client: "Northwind Logistics",
    industry: "Logistics",
    services: ["AI & Automation Consulting"],
    timeline: "22 weeks",
    region: "EU + UK",
    metric: { value: "$2.1M", label: "Saved / yr" },
    challenge:
      "A finance team spending 38 person-hours a week on reconciliation across three TMS systems and two ERPs.",
    solution:
      "Mapped the workflows, replaced the brittle scripts with an observable pipeline, and built the dashboards the auditors asked for. Trained the in-house team to own it.",
    results: [
      "38 hrs/wk → 4 hrs/wk",
      "Audit finding rate down 87%",
      "$2.1M annualized savings",
    ],
  },
  {
    id: "ZLT-038",
    client: "Brimfield & Co.",
    industry: "B2B SaaS",
    services: ["Software Development", "Growth Marketing"],
    timeline: "12 months",
    region: "Global",
    metric: { value: "+218%", label: "Pipeline" },
    challenge:
      "Series B SaaS with a great product and a leaky funnel. MQLs at 1,200/mo, SQLs at 90, closed-won at 11.",
    solution:
      "Rebuilt the site as a Next.js app, launched a content engine around 8 commercial keywords, and wired the lifecycle to a single CDP. Stood up an AI SDR for inbound routing.",
    results: [
      "Pipeline +218% YoY",
      "CPL down 34%",
      "AI SDR handling 71% of inbound",
    ],
  },
  {
    id: "ZLT-042",
    client: "Oslo Civic OS",
    industry: "Public Sector",
    services: ["Software Development"],
    timeline: "28 weeks",
    region: "EU",
    metric: { value: "11", label: "Languages" },
    challenge:
      "A municipal services platform supporting 11 languages, 4 identity providers, and 1.2M residents — running on a 2014 Rails monolith.",
    solution:
      "Strangler-fig migration to a typed Node + Postgres service, hardened accessibility, and a new admin console for case workers. Procurement-grade docs throughout.",
    results: [
      "p95 latency down 64%",
      "WCAG 2.2 AA across all flows",
      "On-call incidents down 78%",
    ],
  },
  {
    id: "ZLT-047",
    client: "Pelican AI",
    industry: "Vertical SaaS",
    services: ["Software Development", "AI & Automation Consulting"],
    timeline: "14 weeks",
    region: "US",
    metric: { value: "94%", label: "Auto-resolved" },
    challenge:
      "An underwriter support inbox drowning in 14k tickets/mo with a 31-hour median first response.",
    solution:
      "Built an agent — retrieval over the policy library, deterministic guardrails, hard escalation rules — with a human-in-the-loop console for the awkward 6%.",
    results: [
      "94% auto-resolved",
      "Median first response: 9 min",
      "Underwriter NPS up 22 pts",
    ],
  },
  {
    id: "ZLT-051",
    client: "Driftnote Audio",
    industry: "D2C",
    services: ["Growth Marketing"],
    timeline: "11 months",
    region: "US + UK",
    metric: { value: "5.6×", label: "LTV:CAC" },
    challenge:
      "A category-defining audio brand with a great product, no forecasting, and inventory decisions being made on vibes.",
    solution:
      "Stood up a real CDP, a forecasting model, and a paid + lifecycle engine. Killed the agency that was running the brand campaigns.",
    results: [
      "LTV:CAC 1.4 → 5.6",
      "Inventory turnover up 2.3×",
      "Brand search +188%",
    ],
  },
  {
    id: "ZLT-056",
    client: "Verdigris Capital",
    industry: "Finance",
    services: ["Software Development"],
    timeline: "9 weeks",
    region: "US",
    metric: { value: "12", label: "Analysts freed" },
    challenge:
      "An early-growth fund with 12 analysts spending 60% of their time on first-pass memos.",
    solution:
      "Built a private, retrieval-grounded memo agent with a hard citation policy. Editors approve, not draft. Source documents never leave the firm.",
    results: [
      "Memo turnaround 5 days → 11 hours",
      "Analyst time on IC-ready memos up 4×",
      "Zero data exfiltration",
    ],
  },
];

const industries = ["All", "Industrial", "D2C", "Logistics", "B2B SaaS", "Public Sector", "Vertical SaaS", "Finance"];
const servicesFilter = ["All", "Software Development", "AI & Automation Consulting", "Growth Marketing"];

export default function Projects() {
  const [industry, setIndustry] = useState("All");
  const [service, setService] = useState("All");

  const filtered = useMemo(
    () =>
      cases.filter(
        (c) =>
          (industry === "All" || c.industry === industry) &&
          (service === "All" || c.services.includes(service))
      ),
    [industry, service]
  );

  return (
    <div>
      {/* ============= § 11 — COVER ============= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-crosshatch opacity-70 pointer-events-none" />
        <TopRule />
        <PageMark />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-20">
          <Masthead page="Projects" file="PRJ-2026" position="Page 03 of 03" />
          <div className="mt-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
            <span className="inline-block h-2 w-2 bg-signal" />
            <span>§ 11 — Cover</span>
            <span className="hidden md:inline">/</span>
            <span className="hidden md:inline">A selection from 84 engagements</span>
          </div>
          <h1 className="mt-8 font-display text-5xl md:text-7xl lg:text-[96px] leading-[0.92] tracking-tight max-w-5xl">
            Selected <em>case files</em> — the receipts,
            <span className="text-signal"> unredacted</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-ink-muted">
            Every case file below is a written record of a real engagement:
            the client, the problem, the approach, and the metric. We have
            longer versions available under NDA on request.
          </p>

          <Reveal>
            <div className="mt-10">
              <MetadataRow
                items={[
                  { label: "Files on display", value: `${cases.length}` },
                  { label: "Industries served", value: "14" },
                  { label: "Median tenure", value: "9 mo" },
                  { label: "Year of record", value: "2024–26" },
                ]}
              />
            </div>
          </Reveal>
        </div>
        <div className="hard-rule" />
      </section>

      {/* ============= § 12 — FILTER ============= */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-20">
        <Reveal>
          <SectionLabel num="12" title="Case Files" meta="Filter the archive" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10">
          <div className="md:col-span-6">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted mb-3">
              Filter · Industry
            </p>
            <div className="flex flex-wrap gap-2">
              {industries.map((i) => (
                <Chip key={i} active={industry === i} onClick={() => setIndustry(i)}>
                  {i}
                </Chip>
              ))}
            </div>
          </div>
          <div className="md:col-span-6">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted mb-3">
              Filter · Service
            </p>
            <div className="flex flex-wrap gap-2">
              {servicesFilter.map((s) => (
                <Chip key={s} active={service === s} onClick={() => setService(s)}>
                  {s}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t-2 border-ink pt-4 flex items-center justify-between mb-8">
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
            {filtered.length} file{filtered.length === 1 ? "" : "s"} match
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
            Sorted by recency
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filtered.map((c, i) => (
            <Reveal key={c.id} delay={i * 50}>
              <article className="group bg-paper-raised border-2 border-ink shadow-hard h-full flex flex-col">
                {/* Dossier header strip */}
                <div className="flex items-center justify-between border-b-2 border-ink px-5 py-3 bg-ink text-paper">
                  <span className="font-mono text-[10px] uppercase tracking-widest2">
                    File · {c.id}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest2">
                    {c.region}
                  </span>
                </div>

                <div className="p-5 md:p-6 flex-1">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pb-5 border-b border-rule">
                    {[
                      { l: "Client", v: c.client },
                      { l: "Industry", v: c.industry },
                      { l: "Timeline", v: c.timeline },
                      { l: "Services", v: c.services.join(" · ") },
                    ].map((f) => (
                      <div key={f.l}>
                        <p className="font-mono text-[9px] uppercase tracking-widest2 text-ink-muted">
                          {f.l}
                        </p>
                        <p className="font-display text-base mt-1 leading-tight">
                          {f.v}
                        </p>
                      </div>
                    ))}
                  </div>

                  <dl className="mt-5 space-y-4">
                    <Field label="Challenge" body={c.challenge} />
                    <Field label="Solution" body={c.solution} />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                        Results
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {c.results.map((r) => (
                          <li
                            key={r}
                            className="flex items-start gap-2 text-sm leading-relaxed"
                          >
                            <span className="mt-1.5 inline-block h-1.5 w-1.5 bg-signal flex-none" />
                            <span dangerouslySetInnerHTML={{ __html: r }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </dl>
                </div>

                <div className="border-t-2 border-ink p-5 flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                      Headline metric
                    </p>
                    <p className="font-display italic text-3xl text-signal leading-none mt-1">
                      {c.metric.value}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted mt-1">
                      {c.metric.label}
                    </p>
                  </div>
                  <a
                    href="/#contact"
                    className="font-mono text-[10px] uppercase tracking-widest2 row-underline"
                  >
                    Request the full file →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="border-2 border-ink p-10 text-center bg-paper-raised shadow-hard">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
              Empty · No files match
            </p>
            <h3 className="font-display text-3xl mt-3">
              Try a different filter, or just ask.
            </h3>
            <p className="mt-3 text-sm text-ink-muted max-w-md mx-auto">
              We have more case files than fit on a public page. Send a note
              and we will send the relevant ones.
            </p>
            <div className="mt-6">
              <Button href="/#contact">Request a file →</Button>
            </div>
          </div>
        )}
      </section>

      <div className="hard-rule" />

      {/* ============= § 13 — INDEX ============= */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 bg-crosshatch">
        <Reveal>
          <SectionLabel num="13" title="Index" meta="Aggregate outcomes" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-display text-3xl md:text-4xl leading-tight">
                The work, in one paragraph. We don&apos;t pitch at the door —
                the case files do.
              </p>
            </Reveal>
            <Reveal>
              <ul className="mt-8 space-y-3">
                {[
                  { k: "Median engagement", v: "$148k" },
                  { k: "Median result lift", v: "3.0×" },
                  { k: "Median payback", v: "4.2 mo" },
                  { k: "Engagements renewed", v: "97%" },
                  { k: "Clients re-engaged", v: "82%" },
                ].map((row) => (
                  <li
                    key={row.k}
                    className="grid grid-cols-12 items-baseline gap-3 border-b border-rule pb-3 row-hover-tint"
                  >
                    <span className="col-span-7 md:col-span-8 font-mono text-xs uppercase tracking-widest2">
                      {row.k}
                    </span>
                    <span className="col-span-5 md:col-span-4 text-right font-display italic text-3xl text-ink">
                      {row.v}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="border-2 border-ink bg-paper-raised shadow-hard p-6 md:p-8">
                <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                  Notice
                </p>
                <h3 className="font-display text-3xl mt-2 leading-tight">
                  We do not publish client logos without written consent.
                </h3>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                  The list above is curated, anonymized where required, and
                  approved by the client. Full case studies — including code,
                  dashboards, and ad-account screenshots — are available under
                  NDA on request.
                </p>
                <div className="mt-6">
                  <Button href="/#contact" variant="primary">
                    Request a full file →
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <PageFoot position="Page 03 of 03" />
      </section>
    </div>
  );
}

function Field({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
        {label}
      </p>
      <p
        className="mt-1.5 text-sm leading-relaxed"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
}
