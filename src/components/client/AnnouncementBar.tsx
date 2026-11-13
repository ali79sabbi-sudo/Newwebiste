"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

export function AnnouncementBar({ text, href, linkLabel }: { text: string; href: string; linkLabel: string }) {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="relative z-50 flex min-h-9 items-center justify-center border-b border-ink-700 bg-ink-900 px-10 py-1.5 text-center text-[0.8rem] text-linen-200">
      <p>
        {text}{" "}
        <a href={href} target="_blank" rel="noopener" className="font-semibold text-gold-300 underline-offset-2 hover:underline" data-track="whatsapp_click">
          {linkLabel}
        </a>
      </p>
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Dismiss announcement"
        className="absolute right-1 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-stone-400 hover:text-linen-50"
      >
        <Icon name="close" size={16} />
      </button>
    </div>
  );
}
