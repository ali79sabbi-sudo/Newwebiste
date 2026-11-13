"use client";

import { useId, useState, type ReactNode, type KeyboardEvent } from "react";

/** Accessible tabs (roving arrow keys). Panels are server-rendered children, so only switching runs on the client. */
export function Tabs({ labels, children }: { labels: string[]; children: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const onKey = (e: KeyboardEvent, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (i + (e.key === "ArrowRight" ? 1 : -1) + labels.length) % labels.length;
    setActive(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
  };
  return (
    <div>
      <div role="tablist" aria-label="Price categories" className="mb-6 flex flex-wrap gap-2">
        {labels.map((l, i) => (
          <button
            key={l}
            id={`${id}-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls={`${id}-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
            className={`min-h-11 rounded-full border px-5 text-sm font-semibold transition ${
              active === i ? "border-gold-400 bg-gold-400 text-ink-950" : "border-ink-700 text-linen-200 hover:border-gold-400/60"
            }`}
          >
            {l}
          </button>
        ))}
      </div>
      {children.map((c, i) => (
        <div key={i} id={`${id}-panel-${i}`} role="tabpanel" aria-labelledby={`${id}-tab-${i}`} hidden={active !== i}>
          {c}
        </div>
      ))}
    </div>
  );
}
