import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink mt-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center bg-ink text-paper font-display italic text-2xl">
              Z
            </span>
            <span className="font-display text-3xl">Zoltrak</span>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-muted">
            We build software, implement AI, and drive growth. Three core
            services, one operator — durable systems, measurable outcomes, and
            the receipts to prove it.
          </p>
          <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
            <span className="inline-block h-2 w-2 bg-signal" />
            <span>Operating · UTC+0 to UTC−8</span>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
            Document
          </p>
          <ul className="mt-4 grid gap-2 text-sm">
            <li><Link href="/" className="row-underline">Home</Link></li>
            <li><Link href="/services" className="row-underline">Services</Link></li>
            <li><Link href="/projects" className="row-underline">Projects</Link></li>
            <li><Link href="/#contact" className="row-underline">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
            Direct
          </p>
          <ul className="mt-4 grid gap-2 text-sm">
            <li>
              <a className="row-underline" href="mailto:brief@zoltrak.studio">brief@zoltrak.studio</a>
            </li>
            <li>
              <a className="row-underline" href="tel:+10000000000">+1 (000) 000-0000</a>
            </li>
            <li className="text-ink-muted">14 Steelworks Lane · Floor 03</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
          <p>© {new Date().getFullYear()} Zoltrak Systems Ltd. — All rights reserved.</p>
          <p>Set in Playfair Display, IBM Plex Sans &amp; IBM Plex Mono. Printed on the open web.</p>
        </div>
      </div>
    </footer>
  );
}
