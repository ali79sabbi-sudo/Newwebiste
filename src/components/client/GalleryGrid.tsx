"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";

export type GalleryItem = { src: StaticImageData; alt: string; cat: string };

/** Masonry grid with category filters and a tiny custom lightbox (no library). */
export function GalleryGrid({ items, cats }: { items: GalleryItem[]; cats: string[] }) {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const shown = cat === "All" ? items : items.filter((i) => i.cat === cat);

  const close = useCallback(() => setOpen(null), []);
  const move = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + shown.length) % shown.length)), [shown.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, move]);

  return (
    <>
      <div role="group" aria-label="Filter gallery" className="mb-8 flex flex-wrap gap-2">
        {["All", ...cats].map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={cat === c}
            onClick={() => setCat(c)}
            className={`min-h-11 rounded-full border px-5 text-sm font-semibold transition ${
              cat === c ? "border-gold-400 bg-gold-400 text-ink-950" : "border-ink-700 text-linen-200 hover:border-gold-400/60"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <ul className="columns-2 gap-3 md:columns-3 [&>li]:mb-3">
        {shown.map((it, i) => (
          <li key={it.alt} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group relative block w-full overflow-hidden rounded-[18px] border border-ink-700"
              aria-label={`Open image: ${it.alt}`}
            >
              <Image
                src={it.src}
                alt={it.alt}
                sizes="(min-width:768px) 33vw, 50vw"
                placeholder="blur"
                className="h-auto w-full transition duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/70 text-linen-50 opacity-0 transition group-hover:opacity-100">
                <Icon name="zoom" size={16} />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {open !== null && shown[open] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={shown[open].alt}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink-950/95 p-4"
          onClick={close}
        >
          <div className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={shown[open].src} alt={shown[open].alt} fill sizes="100vw" className="object-contain" />
          </div>
          <p className="absolute bottom-5 left-1/2 w-[90%] -translate-x-1/2 text-center text-sm text-linen-200">{shown[open].alt}</p>
          <button type="button" autoFocus onClick={close} aria-label="Close" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-ink-700 bg-ink-900">
            <Icon name="close" size={20} />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); move(-1); }} aria-label="Previous image" className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 rotate-180 items-center justify-center rounded-full border border-ink-700 bg-ink-900">
            <Icon name="arrow" size={20} />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); move(1); }} aria-label="Next image" className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ink-700 bg-ink-900">
            <Icon name="arrow" size={20} />
          </button>
        </div>
      )}
    </>
  );
}
