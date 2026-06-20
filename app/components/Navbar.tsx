"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="inline-flex h-9 w-9 items-center justify-center bg-ink text-paper font-display italic text-xl leading-none transition-transform group-hover:rotate-[-4deg]">
            Z
          </span>
          <span className="font-display text-2xl tracking-tight leading-none">
            Zoltrak
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`group relative px-4 py-2 font-sans text-sm font-medium transition-colors ${
                  active ? "text-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-4 right-4 -bottom-0.5 h-[2px] bg-signal origin-left transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden md:inline-flex cta-signal bg-signal text-ink font-mono text-xs uppercase tracking-widest2 px-4 py-2 border-2 border-ink"
          >
            Start a Brief →
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center border-2 border-ink"
          >
            <span className="block w-4 h-[2px] bg-ink relative before:content-[''] before:absolute before:left-0 before:-top-1.5 before:w-4 before:h-[2px] before:bg-ink after:content-[''] after:absolute after:left-0 after:top-1.5 after:w-4 after:h-[2px] after:bg-ink" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t-2 border-ink bg-paper">
          <div className="px-6 py-2">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-3 font-sans text-base border-b border-rule ${
                    active ? "text-ink font-semibold" : "text-ink-muted"
                  }`}
                >
                  <span>{l.label}</span>
                  {active && <span className="h-2 w-2 bg-signal" />}
                </Link>
              );
            })}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-4 mb-2 cta-signal inline-flex w-full justify-center bg-signal text-ink font-mono text-xs uppercase tracking-widest2 px-4 py-3 border-2 border-ink"
            >
              Start a Brief →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
