"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

type NavItem = { href: string; label: string };

export function MobileMenu({
  nav,
  services,
  waHref,
  telHref,
  phone,
}: {
  nav: NavItem[];
  services: NavItem[];
  waHref: string;
  telHref: string;
  phone: string;
}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-700 text-linen-50 lg:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name={open ? "close" : "menu"} size={22} />
      </button>

      {open && (
        <div id="mobile-menu" className="fixed inset-0 top-0 z-[60] flex flex-col bg-ink-950 lg:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="flex items-center justify-between px-4 py-4">
            <span className="eyebrow">Menu</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-700">
              <Icon name="close" size={22} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 pb-6" aria-label="Mobile">
            <ul className="space-y-1">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} onClick={() => setOpen(false)} className="block py-2.5 font-serif text-[1.9rem] leading-tight text-linen-50">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="eyebrow mb-3 mt-8">Treatments</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} onClick={() => setOpen(false)} className="block py-1.5 text-[0.95rem] text-linen-200">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="grid grid-cols-2 gap-3 border-t border-ink-700 p-4 pb-safe">
            <a href={telHref} className="btn btn-call" data-track="call_click">
              <Icon name="phone" size={18} /> Call
            </a>
            <a href={waHref} target="_blank" rel="noopener" className="btn btn-whatsapp" data-track="whatsapp_click">
              <Icon name="whatsapp" size={18} /> WhatsApp
            </a>
            <p className="col-span-2 text-center text-xs text-stone-400">{phone}</p>
          </div>
        </div>
      )}
    </>
  );
}
