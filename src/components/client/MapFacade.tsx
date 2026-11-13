"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

/** Lightweight map facade: the Google Maps iframe loads only after a click (protects LCP/INP). */
export function MapFacade({ src, title, className = "" }: { src: string; title: string; className?: string }) {
  const [show, setShow] = useState(false);
  return (
    <div className={`relative overflow-hidden rounded-[20px] border border-ink-700 bg-ink-850 ${className}`}>
      {show ? (
        <iframe
          src={src}
          title={title}
          className="h-full w-full border-0 grayscale-[30%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setShow(true)}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-3 text-linen-200"
          aria-label="Show map of our spa location"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,168,119,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,119,.08) 1px,transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/60 text-gold-400 transition group-hover:bg-gold-400/10">
            <Icon name="pin" size={24} />
          </span>
          <span className="relative text-sm font-semibold tracking-wide">Show map</span>
        </button>
      )}
    </div>
  );
}
