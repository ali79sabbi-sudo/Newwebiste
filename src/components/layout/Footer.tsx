import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/ui/Icon";
import { MapFacade } from "@/components/client/MapFacade";
import { EmailLink } from "@/components/cta/Buttons";
import { SERVICES } from "@/data/services";
import { LOCATIONS } from "@/data/locations";
import { SITE, FULL_ADDRESS, telHref, BUILD_YEAR } from "@/config/site";
import { waLink } from "@/lib/whatsapp";

const QUICK = [
  { href: "/pricing", label: "Price list" },
  { href: "/packages", label: "Spa packages" },
  { href: "/gift-cards", label: "Gift cards" },
  { href: "/book", label: "Book online" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Serenity Journal" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About us" },
  { href: "/gallery", label: "Gallery" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-700 bg-ink-900 pb-24 md:pb-0" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.1fr_2fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-[0.95rem] text-linen-200">
            A calm, private massage center and day spa in Bahria Town Phase 7, Rawalpindi, serving Bahria Town, DHA and
            Islamabad with trained therapists and strictly therapeutic treatments.
          </p>
          <MapFacade src={SITE.googleMapsEmbed} title={`Map: ${SITE.name}, ${SITE.address.area}`} className="mt-6 h-44 max-w-sm" />
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="eyebrow mb-4 !font-sans">Services</h3>
            <ul className="space-y-1.5 text-[0.9rem]">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-linen-200 hover:text-gold-300">
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow mb-4 !font-sans">Locations</h3>
            <ul className="space-y-1.5 text-[0.9rem]">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="text-linen-200 hover:text-gold-300">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow mb-4 !font-sans">Quick links</h3>
            <ul className="space-y-1.5 text-[0.9rem]">
              {QUICK.map((q) => (
                <li key={q.href}>
                  <Link href={q.href} className="text-linen-200 hover:text-gold-300">
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow mb-4 !font-sans">Contact</h3>
            <address className="space-y-3 text-[0.9rem] not-italic text-linen-200">
              <p className="flex gap-2">
                <Icon name="pin" size={18} className="mt-1 shrink-0 text-gold-400" />
                <a href={SITE.googleMapsUrl} target="_blank" rel="noopener" className="hover:text-gold-300" data-track="directions_click">
                  {FULL_ADDRESS}
                </a>
              </p>
              <p className="flex gap-2">
                <Icon name="phone" size={18} className="mt-1 shrink-0 text-gold-400" />
                <a href={telHref} className="hover:text-gold-300" data-track="call_click">
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p className="flex gap-2">
                <Icon name="whatsapp" size={18} className="mt-1 shrink-0 text-gold-400" />
                <a href={waLink()} target="_blank" rel="noopener" className="hover:text-gold-300" data-track="whatsapp_click">
                  WhatsApp us
                </a>
              </p>
              <p className="flex gap-2 break-all">
                <Icon name="mail" size={18} className="mt-1 shrink-0 text-gold-400" />
                <EmailLink className="hover:text-gold-300" />
              </p>
              <p className="flex gap-2">
                <Icon name="facebook" size={18} className="mt-1 shrink-0 text-gold-400" />
                <a href={SITE.facebook} target="_blank" rel="noopener" className="hover:text-gold-300">
                  Facebook
                </a>
              </p>
              <p className="flex gap-2">
                <Icon name="clock" size={18} className="mt-1 shrink-0 text-gold-400" />
                <span>{SITE.hoursDisplay}</span>
              </p>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-ink-700">
        <div className="container-x flex flex-col gap-3 py-6 text-[0.8rem] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {BUILD_YEAR} {SITE.name}. Strictly professional, therapeutic services.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <Link href="/privacy-policy" className="hover:text-gold-300">Privacy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gold-300">Terms</Link>
            </li>
            <li>
              <Link href="/about#photo-credits" className="hover:text-gold-300">Photo credits</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
