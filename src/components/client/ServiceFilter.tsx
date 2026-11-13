"use client";

import { useState } from "react";

const CATS = ["All", "Relaxation", "Pain Relief", "Therapeutic", "Beauty"] as const;

/** Sets data-filter on the grid; CSS hides non-matching cards (cards stay server-rendered). */
export function ServiceFilter({ target }: { target: string }) {
  const [active, setActive] = useState<string>("All");
  const choose = (c: string) => {
    setActive(c);
    const el = document.getElementById(target);
    if (el) {
      if (c === "All") el.removeAttribute("data-filter");
      else el.setAttribute("data-filter", c);
    }
  };
  return (
    <div role="group" aria-label="Filter treatments" className="mb-10 flex flex-wrap gap-2">
      {CATS.map((c) => (
        <button
          key={c}
          type="button"
          aria-pressed={active === c}
          onClick={() => choose(c)}
          className={`min-h-11 rounded-full border px-5 text-sm font-semibold transition ${
            active === c ? "border-gold-400 bg-gold-400 text-ink-950" : "border-ink-700 text-linen-200 hover:border-gold-400/60"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
