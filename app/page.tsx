import Link from "next/link";
import Button from "./components/Button";
import ContactForm from "./components/ContactForm";
import { Masthead, PageFoot } from "./components/Dossier";
import HeroDashboard from "./components/HeroDashboard";
import Marquee from "./components/Marquee";
import MetadataRow from "./components/MetadataRow";
import BarChart from "./components/BarChart";
import Reveal from "./components/Reveal";
import SectionLabel from "./components/SectionLabel";
import StatCounter from "./components/StatCounter";

const services = [
  {
    code: "S/01",
    name: "Software Development",
    blurb:
      "Custom web and mobile applications built to streamline operations, improve customer experiences, and support business growth.",
    deliverables: ["Custom web apps", "Mobile apps", "Portals & systems", "API integrations"],
  },
  {
    code: "S/02",
    name: "AI & Automation Consulting",
    blurb:
      "Practical AI and automation solutions that help organizations reduce manual work, increase productivity, and unlock new opportunities.",
    deliverables: ["AI assessments", "Process automation", "AI workflows", "Strategy & roadmaps"],
  },
  {
    code: "S/03",
    name: "Growth Marketing",
    blurb:
      "Strategic content management and performance marketing campaigns designed to grow your audience, generate leads, and drive measurable results.",
    deliverables: ["Social & content", "Community", "Meta Ads", "Performance reporting"],
  },
];

const process = [
  {
    code: "P/01",
    title: "Intake & Audit",
    days: "Days 0–7",
    body:
      "We tear the brief apart, audit the data, and produce a written diagnosis — not a deck. You keep the IP regardless of fit.",
  },
  {
    code: "P/02",
    title: "Architecture & SOW",
    days: "Days 7–14",
    body:
      "Fixed scope, fixed price, fixed deliverables. Architecture diagram and a working backlog before the first invoice is due.",
  },
  {
    code: "P/03",
    title: "Build in Public",
    days: "Days 14–N",
    body:
      "Weekly demo. Read-only access to the repo, dashboards, and ad accounts. You see the receipts, not the summary.",
  },
  {
    code: "P/04",
    title: "Handover & Run",
    days: "N+30",
    body:
      "We document, train, and stay on retainer for 90 days. If a system breaks on us, we fix it on us.",
  },
];

const results = [
  { label: "Pipeline value added", value: 218 },
  { label: "Reduction in CAC", value: 38 },
  { label: "Lift in organic traffic", value: 174 },
  { label: "Faster release cadence", value: 62 },
  { label: "Manual hours reclaimed", value: 410 },
];

const clients = [
  "Linnaeus Robotics",
  "Northwind Logistics",
  "Halberd Studios",
  "Brimfield & Co.",
  "Quartz Editions",
  "Marin Forge",
  "Oslo Civic OS",
  "Driftnote Audio",
  "Pelican AI",
  "Verdigris Capital",
  "Argo Systems",
  "Glasshouse Foods",
];

export default function Home() {
  return (
    <div>
      {/* ============= § 01 — HERO ============= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-crosshatch opacity-70 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-1 bg-ink" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-14 md:pt-20 pb-20">
          <Masthead page="Home" file="ZLT-2026" position="Page 01 of 03" />
          <div className="mt-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
            <span className="inline-block h-2 w-2 bg-signal" />
            <span>§ 01 — Cover</span>
            <span className="hidden md:inline">/</span>
            <span className="hidden md:inline">Zoltrak · Vol. IV</span>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.05] tracking-tight max-w-4xl">
                We <span className="italic">build</span> software, <span className="italic">implement</span> AI, and <span className="text-signal">drive</span> growth.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
                Three services. One operator. No handoffs between silos.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/#contact" size="lg" variant="primary">
                  Start a Brief
                </Button>
                <Button href="/projects" size="lg" variant="ghost">
                  See the Receipts
                </Button>
              </div>

              <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 border-t-2 border-ink pt-6">
                {[
                  { v: 84, suf: "", l: "Engagements" },
                  { v: 11, suf: "", l: "Senior partners" },
                  { v: 97, suf: "%", l: "Renewals" },
                  { v: 3, suf: "×", l: "Median lift" },
                ].map((s) => (
                  <div key={s.l}>
                    <dt className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                      {s.l}
                    </dt>
                    <dd className="font-display italic text-3xl mt-1 text-ink">
                      <StatCounter end={s.v} suffix={s.suf} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-5 hidden md:block">
              <HeroDashboard />
            </div>
          </div>
        </div>
        <div className="hard-rule" />
      </section>

      {/* ============= MARQUEE ============= */}
      <Marquee
        items={[
          "Selected partners since 2021",
          "Trusted by operators in 14 countries",
          "$284M pipeline added across 2024–25",
          "Median payback: 4.2 months",
          ...clients,
        ]}
      />

      {/* ============= § 02 — VALUE PROPOSITION ============= */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
        <Reveal>
          <SectionLabel num="02" title="Value Proposition" meta="What you actually get" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Reveal>
              <p className="font-display text-3xl md:text-4xl leading-tight">
                Most agencies are <em>departments</em>. We are an
                <em> integrated build &amp; growth function</em> — engineering,
                automation, and demand under one operating model.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                t: "Outcomes, not output",
                b: "We commit to a number. If we miss it, we work the next sprint for free.",
              },
              {
                t: "One backlog, one source of truth",
                b: "Engineering and growth share a roadmap. No more attribution fights between silos.",
              },
              {
                t: "AI that survives contact with reality",
                b: "Agents and automations with hard SLAs, observability, and a kill switch — not demos.",
              },
              {
                t: "Receipts on Friday",
                b: "Weekly demo, read-only dashboards, and a written memo. No black boxes.",
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="bg-paper-raised border-2 border-ink shadow-hard p-5 h-full">
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                    Note 0{i + 1}
                  </p>
                  <h3 className="font-display text-2xl mt-2 leading-tight">
                    {c.t}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {c.b}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="hard-rule" />

      {/* ============= § 03 — SERVICES ============= */}
      <section id="services" className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
        <Reveal>
          <SectionLabel num="03" title="Services" meta="Three core services, one operator" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.code} delay={i * 70}>
              <div className="group bg-paper-raised border-2 border-ink shadow-hard p-6 md:p-8 h-full flex flex-col">
                <div className="flex items-center justify-between border-b border-rule pb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                    {s.code}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                    Service 0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl mt-5 leading-tight">
                  {s.name}
                </h3>
                <p className="mt-3 text-base text-ink-muted leading-relaxed flex-1">
                  {s.blurb}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.deliverables.map((d) => (
                    <span
                      key={d}
                      className="font-mono text-[10px] uppercase tracking-widest2 px-2.5 py-1 border-2 border-ink"
                    >
                      {d}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-rule flex items-center justify-between">
                  <Link
                    href="/services"
                    className="font-mono text-[10px] uppercase tracking-widest2 row-underline"
                  >
                    Read full scope →
                  </Link>
                  <span className="inline-block h-2 w-2 bg-signal" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="hard-rule" />

      {/* ============= § 04 — PROCESS ============= */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 bg-crosshatch">
        <Reveal>
          <SectionLabel num="04" title="Process" meta="A four-stage operating system" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <Reveal>
              <p className="font-display text-2xl md:text-3xl leading-tight">
                A predictable, documented way of working — the same one we use
                on every engagement, from a 6-week audit to a 12-month build.
              </p>
              <p className="mt-5 text-sm text-ink-muted leading-relaxed">
                We do not believe in discovery that runs into month three. Each
                phase has a deliverable, a date, and an invoice. You can cancel
                between phases without penalty.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <ol className="border-2 border-ink bg-paper-raised shadow-hard">
              {process.map((p, i) => (
                <Reveal as="li" key={p.code} delay={i * 70}>
                  <div
                    className={`grid grid-cols-12 gap-4 p-5 md:p-6 row-hover-tint transition-colors ${
                      i !== process.length - 1 ? "border-b border-rule" : ""
                    }`}
                  >
                    <span className="col-span-2 md:col-span-1 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                      {p.code}
                    </span>
                    <div className="col-span-10 md:col-span-7">
                      <h4 className="font-display text-2xl leading-tight">
                        {p.title}
                      </h4>
                      <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                        {p.body}
                      </p>
                    </div>
                    <div className="col-span-12 md:col-span-4 md:text-right">
                      <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                        Window
                      </p>
                      <p className="font-display italic text-xl mt-1">
                        {p.days}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <div className="hard-rule" />

      {/* ============= § 05 — RESULTS ============= */}
      <section id="results" className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
        <Reveal>
          <SectionLabel num="05" title="Results" meta="Median across 84 engagements" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-display text-3xl md:text-4xl leading-tight">
                Numbers we are willing to publish, on a chart, in
                <em> public</em>.
              </p>
              <p className="mt-5 text-sm text-ink-muted leading-relaxed max-w-md">
                We weight every engagement on a small set of outcome metrics
                tied to revenue, cost, or time. The histogram on the right is
                the aggregate distribution across the last 24 months.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="border-2 border-ink bg-paper-raised p-4 shadow-hard-sm">
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                    Median payback
                  </p>
                  <p className="font-display italic text-4xl text-ink mt-1">
                    <StatCounter end={4} suffix=".2 mo" />
                  </p>
                </div>
                <div className="border-2 border-ink bg-paper-raised p-4 shadow-hard-sm">
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                    Engagements renewed
                  </p>
                  <p className="font-display italic text-4xl text-ink mt-1">
                    <StatCounter end={97} suffix="%" />
                  </p>
                </div>
                <div className="border-2 border-ink bg-paper-raised p-4 shadow-hard-sm">
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                    Senior only
                  </p>
                  <p className="font-display italic text-4xl text-ink mt-1">
                    <StatCounter end={100} suffix="%" />
                  </p>
                </div>
                <div className="border-2 border-ink bg-paper-raised p-4 shadow-hard-sm">
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                    Avg. result lift
                  </p>
                  <p className="font-display italic text-4xl text-ink mt-1">
                    <StatCounter end={3} suffix="×" />
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <BarChart data={results} />
            </Reveal>
          </div>
        </div>
      </section>

      <div className="hard-rule" />

      {/* ============= § 06 — CONTACT ============= */}
      <section id="contact" className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
        <Reveal>
          <SectionLabel num="06" title="Contact" meta="Start a brief" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <h3 className="font-display text-3xl md:text-4xl leading-tight">
                Tell us the problem. We will reply with a
                <em> written diagnosis</em>, not a deck.
              </h3>
              <p className="mt-5 text-sm text-ink-muted leading-relaxed max-w-md">
                Initial briefs are reviewed by a senior partner within one
                business day. If we are not a fit, we will say so and point you
                to someone who is.
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-8">
                <MetadataRow
                  items={[
                    { label: "Reply within", value: "24 hrs" },
                    { label: "NDA", value: "On request" },
                    { label: "Engagement", value: "Fixed scope" },
                    { label: "Currency", value: "USD / EUR" },
                  ]}
                />
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="border-2 border-ink p-4 shadow-hard-sm">
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                    Email
                  </p>
                  <a
                    href="mailto:brief@zoltrak.studio"
                    className="font-display text-xl mt-1 block row-underline"
                  >
                    brief@zoltrak.studio
                  </a>
                </div>
                <div className="border-2 border-ink p-4 shadow-hard-sm">
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                    Signal
                  </p>
                  <p className="font-display text-xl mt-1">@zoltrak</p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </div>

        <PageFoot position="Page 01 of 03" />
      </section>
    </div>
  );
}
