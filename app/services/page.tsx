import type { Metadata } from "next";
import Link from "next/link";
import Button from "../components/Button";
import { Masthead, PageFoot, PageMark, TopRule } from "../components/Dossier";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import MetadataRow from "../components/MetadataRow";

export const metadata: Metadata = {
  title: "Services — Zoltrak",
  description:
    "Three core services, one operator: software development, AI & automation consulting, and growth marketing.",
};

const practices = [
  {
    code: "S/01",
    name: "Software Development",
    pitch:
      "Custom web and mobile applications built to streamline operations, improve customer experiences, and support business growth.",
    scope: [
      "Custom web applications — internal platforms, customer portals, SaaS",
      "Mobile applications — native iOS & Android when warranted",
      "Business management systems and admin consoles",
      "API design and third-party integrations",
      "Product design and end-to-end development",
    ],
    ideal:
      "Operators who need a digital product shipped and a team to run it after",
  },
  {
    code: "S/02",
    name: "AI & Automation Consulting",
    pitch:
      "Practical AI and automation solutions that help organizations reduce manual work, increase productivity, and unlock new opportunities.",
    scope: [
      "AI opportunity assessments and use-case prioritization",
      "Business process automation — pipelines that survive turnover",
      "AI-powered workflows and internal tools",
      "Chatbots, AI assistants, and RAG-backed knowledge systems",
      "Automation strategy and roadmaps with measurable milestones",
    ],
    ideal:
      "Operations-heavy teams, services firms, internal teams of 50–500",
  },
  {
    code: "S/03",
    name: "Growth Marketing",
    pitch:
      "Strategic content management and performance marketing campaigns designed to grow your audience, generate leads, and drive measurable results.",
    scope: [
      "Social media management and content calendars",
      "Content creation and planning — short-form, long-form, video",
      "Community engagement and audience development",
      "Meta Ads (Facebook & Instagram) — campaign build, targeting, creative",
      "Performance reporting and ongoing campaign optimization",
    ],
    ideal: "B2C brands, B2B with content-led funnels, category challengers",
  },
];

const workstreams = [
  {
    code: "W/01",
    name: "Discovery Sprint",
    duration: "1–2 weeks",
    price: "$18k – $36k",
    desc:
      "Written diagnosis of the problem space, with a proposed architecture, plan, and fixed-price next step. You keep the IP.",
  },
  {
    code: "W/02",
    name: "Build Engagement",
    duration: "6–16 weeks",
    price: "$60k – $480k",
    desc:
      "Fixed scope, fixed price, fixed deliverables. A senior pod — design, engineering, growth — assigned to one operator.",
  },
  {
    code: "W/03",
    name: "Operating Retainer",
    duration: "Quarterly",
    price: "From $24k / mo",
    desc:
      "Embedded team running growth, automation, and engineering. Quarterly OKRs, monthly board memo, single point of contact.",
  },
  {
    code: "W/04",
    name: "Audit & Recovery",
    duration: "2–3 weeks",
    price: "$22k – $48k",
    desc:
      "Independent review of an in-flight build or program. Written findings, a rescue plan, and optional follow-on engagement.",
  },
];

export default function Services() {
  return (
    <div>
      {/* ============= § 07 — COVER ============= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-crosshatch opacity-70 pointer-events-none" />
        <TopRule />
        <PageMark />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-20">
          <Masthead page="Services" file="SRV-2026" position="Page 02 of 03" />
          <div className="mt-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
            <span className="inline-block h-2 w-2 bg-signal" />
            <span>§ 07 — Cover</span>
            <span className="hidden md:inline">/</span>
            <span className="hidden md:inline">Continuing from Vol. IV</span>
          </div>
          <h1 className="mt-8 font-display text-5xl md:text-7xl lg:text-[96px] leading-[0.92] tracking-tight max-w-5xl">
            We <em>build</em> software, <em>implement</em> AI, and
            <span className="text-signal"> drive</span> growth.
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-ink-muted">
            Three core services. One operator. No handoffs between silos. We
            deliberately stay small — each engagement is run by a senior
            partner who carries the brief end to end, from the first
            conversation to the last invoice. The three services below share a
            single roadmap, a single source of truth, and a single P&amp;L.
          </p>
        </div>
        <div className="hard-rule" />
      </section>

      {/* ============= § 08 — SERVICES ============= */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-20">
        <Reveal>
          <SectionLabel num="08" title="Services" meta="What we do" />
        </Reveal>

        <div className="space-y-6">
          {practices.map((p, i) => (
            <Reveal key={p.code} delay={i * 60}>
              <article className="border-2 border-ink bg-paper-raised shadow-hard">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-3 p-6 md:p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-ink">
                    <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                      {p.code}
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl mt-3 leading-tight">
                      {p.name}
                    </h2>
                    <p className="mt-5 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                      Ideal for
                    </p>
                    <p className="mt-1 text-sm text-ink">{p.ideal}</p>
                  </div>
                  <div className="lg:col-span-9 p-6 md:p-8">
                    <p className="font-display italic text-2xl leading-snug">
                      {p.pitch}
                    </p>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {p.scope.map((s) => (
                        <div key={s} className="flex items-start gap-3">
                          <span className="mt-1.5 inline-block h-1.5 w-1.5 bg-signal flex-none" />
                          <p className="text-sm leading-relaxed">{s}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-5 border-t border-rule flex items-center justify-between">
                      <Link
                        href="/#contact"
                        className="font-mono text-[10px] uppercase tracking-widest2 row-underline"
                      >
                        Request a scoping call →
                      </Link>
                      <span className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                        Filed under ZLT–{p.code.replace("/", "")}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="hard-rule" />

      {/* ============= § 09 — APPROACH ============= */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 bg-crosshatch">
        <Reveal>
          <SectionLabel num="09" title="Approach" meta="How the work actually moves" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-display text-3xl md:text-4xl leading-tight">
                We treat the work like a <em>technical publication</em>: an
                argument with evidence, edited down to what matters.
              </p>
              <p className="mt-5 text-sm text-ink-muted leading-relaxed max-w-md">
                Every project runs on a single backlog, a single source of
                truth, and a single weekly memo. If a decision can&apos;t be
                defended in writing, it doesn&apos;t ship.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <ol className="space-y-3">
                {[
                  {
                    k: "Brief",
                    v: "Written problem statement, success metrics, and constraints. Approved by both sides before any work starts.",
                  },
                  {
                    k: "Diagnosis",
                    v: "A 4–8 page memo: the real problem, the proposed approach, the architecture, and a fixed price.",
                  },
                  {
                    k: "Build",
                    v: "Two-week cycles. Friday demo, written retro, working increments. You see the repo, the dashboards, the ad accounts.",
                  },
                  {
                    k: "Handover",
                    v: "Trained team, runbooks, observability. 90 days of post-launch support included on every build.",
                  },
                  {
                    k: "Operate",
                    v: "Optional quarterly retainer. Same pod, same partner, now running the system with your team.",
                  },
                ].map((row, i) => (
                  <li
                    key={row.k}
                    className="grid grid-cols-12 gap-4 items-start border-2 border-ink bg-paper-raised p-4 md:p-5 row-hover-tint"
                  >
                    <span className="col-span-3 md:col-span-2 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                      0{i + 1}
                    </span>
                    <h4 className="col-span-9 md:col-span-3 font-display text-2xl leading-tight">
                      {row.k}
                    </h4>
                    <p className="col-span-12 md:col-span-7 text-sm leading-relaxed text-ink">
                      {row.v}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="hard-rule" />

      {/* ============= § 10 — ENGAGEMENTS ============= */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-20">
        <Reveal>
          <SectionLabel num="10" title="Engagements" meta="How we get paid" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {workstreams.map((w, i) => (
            <Reveal key={w.code} delay={i * 70}>
              <div className="bg-paper-raised border-2 border-ink shadow-hard h-full flex flex-col">
                <div className="flex items-center justify-between border-b-2 border-ink p-5">
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                    {w.code}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                    Workstream 0{i + 1}
                  </span>
                </div>
                <div className="p-5 md:p-6 flex-1">
                  <h3 className="font-display text-3xl">{w.name}</h3>
                  <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                    {w.desc}
                  </p>
                </div>
                <div className="border-t-2 border-ink p-5 grid grid-cols-2">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                      Duration
                    </p>
                    <p className="font-display italic text-2xl mt-1">
                      {w.duration}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                      Investment
                    </p>
                    <p className="font-display italic text-2xl mt-1 text-signal">
                      {w.price}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12">
            <MetadataRow
              items={[
                { label: "Avg. engagement", value: "$148k" },
                { label: "Median tenure", value: "9 months" },
                { label: "Renewal rate", value: "97%" },
                { label: "POC rate", value: "< 8%" },
              ]}
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 border-2 border-ink bg-paper-raised shadow-hard p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                Colophon
              </p>
              <h3 className="font-display text-3xl md:text-4xl mt-2 leading-tight">
                We do not do RFPs, pitches, or spec work. We will, however,
                spend 30 minutes on a call to tell you whether we are the right
                people.
              </h3>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <Button href="/#contact" size="lg" variant="primary">
                Book the call →
              </Button>
            </div>
          </div>
        </Reveal>

        <PageFoot position="Page 02 of 03" />
      </section>
    </div>
  );
}
