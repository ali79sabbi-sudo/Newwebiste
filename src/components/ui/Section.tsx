import type { ReactNode } from "react";

type Tone = "base" | "alt" | "light";

export function Section({
  children,
  tone = "base",
  className = "",
  id,
  labelledBy,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  const bg = tone === "alt" ? "bg-ink-900" : tone === "light" ? "breather" : "";
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-16 sm:py-24 ${bg} ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  align = "left",
  as = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  const H = as;
  return (
    <div className={`glow reveal mb-10 max-w-3xl sm:mb-14 ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <H id={id}>{title}</H>
      {intro && <div className="mt-5 text-[1.05rem] text-linen-200 [.breather_&]:text-ink-text">{intro}</div>}
    </div>
  );
}
