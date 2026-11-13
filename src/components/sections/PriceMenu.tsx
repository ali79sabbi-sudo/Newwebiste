import Link from "next/link";
import type { PriceRow } from "@/data/pricing";
import { pkr } from "@/data/pricing";
import { waLink } from "@/lib/whatsapp";
import { SITE } from "@/config/site";
import { Icon } from "@/components/ui/Icon";

/** Elegant restaurant-style menu: name …… price, with a mini WhatsApp button per row. */
export function PriceMenu({ rows, compact = false }: { rows: PriceRow[]; compact?: boolean }) {
  return (
    <ul className="divide-y divide-ink-700/70">
      {rows.map((r) => {
        const entries = Object.entries(r.prices) as [string, number][];
        const isService = !r.slug.startsWith("addon");
        return (
          <li key={r.slug} className="py-5">
            <div className="flex items-baseline gap-3">
              <h3 className="!font-sans !text-[1.05rem] !font-semibold">
                {isService ? (
                  <Link href={`/services/${r.slug}`} className="hover:text-gold-300">
                    {r.name}
                  </Link>
                ) : (
                  r.name
                )}
              </h3>
              <span className="leader" aria-hidden="true" />
              <span className="whitespace-nowrap font-serif text-[1.35rem] text-gold-300">{pkr(Math.min(...entries.map((e) => e[1])))}</span>
            </div>
            {!compact && <p className="mt-1 text-[0.9rem] text-stone-400">{r.note}</p>}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {entries.map(([min, price]) => (
                <a
                  key={min}
                  href={waLink(`Hi ${SITE.name}, I'd like to book a ${min}-min ${r.name} (${pkr(price)}). Is a slot available?`)}
                  target="_blank"
                  rel="noopener"
                  className="chip min-h-9 hover:border-whatsapp/60 hover:text-linen-50"
                  data-track="whatsapp_click"
                  data-service={r.slug}
                  aria-label={`Book ${min} minute ${r.name} for ${pkr(price)} on WhatsApp`}
                >
                  <Icon name="whatsapp" size={14} className="text-whatsapp" />
                  {min} min · {pkr(price)}
                </a>
              ))}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
