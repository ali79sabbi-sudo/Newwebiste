import { Icon } from "@/components/ui/Icon";
import { SITE, telHref } from "@/config/site";
import { waLink } from "@/lib/whatsapp";

/** Mobile bottom bar (< 768px) and the desktop floating WhatsApp button. Pure CSS, no JS. */
export function StickyCtas() {
  return (
    <>
      <nav
        aria-label="Quick contact"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-700 bg-ink-950 md:hidden pb-safe"
      >
        <div className="grid h-16 grid-cols-[1fr_1.35fr_1fr] items-center gap-2 px-3">
          <a href={telHref} className="flex h-12 flex-col items-center justify-center rounded-xl text-[0.72rem] font-semibold text-linen-50" data-track="call_click">
            <Icon name="phone" size={20} className="text-gold-400" />
            Call
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="btn btn-whatsapp h-12 !min-h-0 !px-3 text-[0.95rem]"
            data-track="whatsapp_click"
          >
            <Icon name="whatsapp" size={20} /> WhatsApp
          </a>
          <a href={SITE.googleMapsUrl} target="_blank" rel="noopener" className="flex h-12 flex-col items-center justify-center rounded-xl text-[0.72rem] font-semibold text-linen-50" data-track="directions_click">
            <Icon name="pin" size={20} className="text-gold-400" />
            Directions
          </a>
        </div>
      </nav>

      <a
        href={waLink()}
        target="_blank"
        rel="noopener"
        aria-label={`WhatsApp ${SITE.name}: ${SITE.whatsappTooltip}`}
        className="wa-float fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-[#06210f] shadow-lg md:flex"
        data-track="whatsapp_click"
      >
        <Icon name="whatsapp" size={28} />
        <span className="wa-tip pointer-events-none absolute right-[calc(100%+12px)] whitespace-nowrap rounded-full border border-ink-700 bg-ink-850 px-4 py-2 text-sm text-linen-50 opacity-0 transition duration-300 translate-x-2">
          {SITE.whatsappTooltip}
        </span>
      </a>
    </>
  );
}
