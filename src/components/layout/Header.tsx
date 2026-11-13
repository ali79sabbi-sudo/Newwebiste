import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/ui/Icon";
import { MobileMenu } from "@/components/client/MobileMenu";
import { SERVICES } from "@/data/services";
import { IMG } from "@/data/images";
import { SITE, telHref } from "@/config/site";
import { waLink } from "@/lib/whatsapp";

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/packages", label: "Packages" },
  { href: "/locations/bahria-town-phase-7", label: "Locations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const services = SERVICES.map((s) => ({ href: `/services/${s.slug}`, label: s.shortName }));
  return (
    <header className="sticky top-0 z-40 border-b border-ink-700/70 bg-ink-950/[.97] lg:bg-ink-950/80 lg:backdrop-blur-md">
      <div className="container-x flex h-[72px] items-center justify-between gap-4">
        <Link href="/" aria-label={`${SITE.name}, home`} className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-[0.92rem]">
            {NAV.map((n) =>
              n.label === "Services" ? (
                <li key={n.href} className="has-mega relative">
                  <Link href={n.href} className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-linen-200 hover:text-gold-300" aria-haspopup="true">
                    Services <Icon name="chevron" size={14} />
                  </Link>
                  <div className="mega absolute left-1/2 top-full w-[680px] -translate-x-1/2 pt-3">
                    <div className="card grid grid-cols-[1fr_200px] gap-6 p-6 shadow-2xl">
                      <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
                        {services.map((s) => (
                          <li key={s.href}>
                            <Link href={s.href} className="block rounded-lg px-2 py-1.5 text-linen-200 hover:bg-ink-800 hover:text-gold-300">
                              {s.label}
                            </Link>
                          </li>
                        ))}
                        <li className="col-span-2 mt-2 border-t border-ink-700 pt-3">
                          <Link href="/services" className="inline-flex items-center gap-2 px-2 font-semibold text-gold-300">
                            View all 14 treatments <Icon name="arrow" size={16} />
                          </Link>
                        </li>
                      </ul>
                      <div className="arch img-grade relative overflow-hidden">
                        <Image src={IMG.hotStones.src} alt="" fill sizes="200px" className="object-cover" />
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={n.href}>
                  <Link href={n.href} className="rounded-full px-3 py-2 text-linen-200 hover:text-gold-300">
                    {n.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={telHref} className="hidden items-center gap-2 px-2 text-sm font-semibold text-linen-50 hover:text-gold-300 xl:inline-flex" data-track="call_click">
            <Icon name="phone" size={16} className="text-gold-400" />
            {SITE.phoneDisplay}
          </a>
          <a href={waLink()} target="_blank" rel="noopener" className="btn btn-primary btn-sm hidden sm:inline-flex" data-track="whatsapp_click">
            Book Now
          </a>
          <MobileMenu
            nav={NAV}
            services={services}
            waHref={waLink()}
            telHref={telHref}
            phone={`${SITE.phoneDisplay} · ${SITE.hoursDisplay}`}
          />
        </div>
      </div>
    </header>
  );
}
