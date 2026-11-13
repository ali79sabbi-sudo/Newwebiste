import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/types";
import { priceFor, fromPrice, pkr } from "@/data/pricing";
import { waLink, waServiceMessage } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";

export function ServiceCard({ s, headingLevel = "h3" }: { s: Service; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  const durations = Object.keys(priceFor(s.slug)?.prices ?? {});
  return (
    <article className="card card-hover reveal flex h-full flex-col overflow-hidden" data-category={s.category}>
      <Link href={`/services/${s.slug}`} className="block p-3 pb-0" tabIndex={-1} aria-hidden="true">
        <div className="arch img-grade relative aspect-[4/4.2] overflow-hidden">
          <Image
            src={s.image.src}
            alt={s.image.alt}
            fill
            sizes="(min-width:1024px) 380px, (min-width:640px) 45vw, 92vw"
            placeholder="blur"
            className="zoom object-cover"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6 pt-5">
        <p className="eyebrow !text-[0.66rem] !text-sage-400">{s.category}</p>
        <H className="mt-2 !text-[1.6rem] !font-medium">
          <Link href={`/services/${s.slug}`} className="hover:text-gold-300">
            {s.name}
          </Link>
        </H>
        <p className="mt-2 text-[0.95rem] text-linen-200">{s.cardBenefit}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {durations.map((d) => (
            <span key={d} className="chip">
              {d} min
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-stone-400">
          From <span className="font-semibold text-gold-300">{pkr(fromPrice(s.slug))}</span>
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
          <a
            href={waLink(waServiceMessage(s.name, 60))}
            target="_blank"
            rel="noopener"
            className="btn btn-whatsapp btn-sm"
            data-track="whatsapp_click"
            data-service={s.slug}
          >
            <Icon name="whatsapp" size={17} /> Book on WhatsApp
          </a>
          <Link href={`/services/${s.slug}`} className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-gold-300 hover:text-gold-400">
            Details <Icon name="arrow" size={15} />
            <span className="sr-only">about {s.name}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
