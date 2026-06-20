import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  type?: "button" | "submit";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center gap-2 font-mono uppercase tracking-widest2 border-2 border-ink select-none";
  const sizes = size === "lg" ? "px-6 py-3 text-xs" : "px-5 py-2.5 text-[11px]";
  const variants =
    variant === "primary"
      ? "bg-signal text-ink cta-signal"
      : "bg-paper text-ink cta-hard";

  const cls = `${base} ${sizes} ${variants} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls}>
      {children}
    </button>
  );
}
