import type { SpaPackage } from "@/data/packages";
import { pkr } from "@/data/pricing";
import { waLink } from "@/lib/whatsapp";
import { SITE } from "@/config/site";
import { Icon } from "@/components/ui/Icon";

export function PackageCard({ p }: { p: SpaPackage }) {
  return (
    <article className="card card-hover reveal relative flex h-full flex-col p-7">
      {p.mostBooked && (
        <span className="absolute right-5 top-5 rounded-full bg-clay-400 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-ink-950">
          Most booked
        </span>
      )}
      <p className="eyebrow !text-[0.66rem]">{p.minutes} minutes</p>
      <h3 className="mt-3 !text-[1.8rem] !font-medium">{p.name}</h3>
      <p className="mt-2 text-[0.95rem] text-linen-200">{p.tagline}</p>
      <p className="mt-5 font-serif text-[2rem] text-gold-300">
        {p.originalPrice && <s className="mr-2 text-[1.1rem] text-stone-400">{pkr(p.originalPrice)}</s>}
        {pkr(p.price)}
      </p>
      <ul className="mt-5 space-y-2.5 text-[0.95rem] text-linen-200">
        {p.includes.map((i) => (
          <li key={i} className="flex gap-2.5">
            <Icon name="check" size={18} className="mt-1 shrink-0 text-gold-400" />
            {i}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-[0.85rem] text-stone-400">Best for: {p.bestFor}</p>
      <a
        href={waLink(`Hi ${SITE.name}, I'd like to book the ${p.name} package (${pkr(p.price)}). What times are available?`)}
        target="_blank"
        rel="noopener"
        className="btn btn-whatsapp btn-sm mt-6 self-start"
        data-track="whatsapp_click"
        data-service={`package-${p.id}`}
      >
        <Icon name="whatsapp" size={17} /> Book this package
      </a>
    </article>
  );
}
