import Link from "next/link";
import { PAGES } from "@/data/pages";
import { CONTACT_FAQS } from "@/data/faqs";
import { SERVICES } from "@/data/services";
import { SITE, FULL_ADDRESS, telHref, mailHref } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { daySpaSchema } from "@/lib/schema";
import { waLink } from "@/lib/whatsapp";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon, type IconName } from "@/components/ui/Icon";
import { IMG } from "@/data/images";
import { MapFacade } from "@/components/client/MapFacade";
import { BookingForm } from "@/components/client/BookingForm";
import { DirectionsButton } from "@/components/cta/Buttons";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";

const P = PAGES.contact;
export const metadata = buildMetadata({ title: P.title, description: P.description, path: "/contact" });

const fmt = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, "0")} ${h < 12 ? "am" : "pm"}`;
};
const HOURS_TEXT = `${fmt(SITE.hours[0].opens)} – ${fmt(SITE.hours[0].closes)}`;
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function ContactPage() {
  const cards: { icon: IconName; title: string; value: string; href: string; track: string; ext?: boolean }[] = [
    { icon: "whatsapp", title: "WhatsApp", value: "Message us, we reply fast", href: waLink(), track: "whatsapp_click", ext: true },
    { icon: "phone", title: "Call", value: SITE.phoneDisplay, href: telHref, track: "call_click" },
    { icon: "mail", title: "Email", value: SITE.email, href: mailHref, track: "email_click" },
    { icon: "facebook", title: "Facebook", value: "Follow for news & offers", href: SITE.facebook, track: "", ext: true },
  ];
  return (
    <>
      <JsonLd data={daySpaSchema({ url: `${SITE.domain}/contact` })} />
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
      <PageHero
        eyebrow="Near KFC · Bahria Town Phase 7"
        image={IMG.roomSunlit}
        title={
          <>
            Contact &amp; <em>Directions</em>
          </>
        }
        lead={<p>Call or WhatsApp {SITE.phoneDisplay} to book your massage in Bahria Town Phase 7. We usually reply within minutes.</p>}
      />
      <Section tone="alt" labelledBy="ways">
        <h2 id="ways" className="sr-only">Ways to contact us</h2>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <li key={c.title}>
              <a
                href={c.href}
                {...(c.ext ? { target: "_blank", rel: "noopener" } : {})}
                {...(c.track ? { "data-track": c.track } : {})}
                className="card card-hover reveal flex h-full flex-col p-7"
              >
                <Icon name={c.icon} size={28} className={c.icon === "whatsapp" ? "text-whatsapp" : "text-gold-400"} />
                <span className="mt-5 font-serif text-[1.6rem] text-linen-50">{c.title}</span>
                <span className="mt-1 break-all text-[0.95rem] text-linen-200">{c.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="visit">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Visit us" id="visit" title={<>Address &amp; <em>hours</em></>} />
            <address className="reveal not-italic text-linen-200">
              <p className="flex gap-3 text-[1.05rem]">
                <Icon name="pin" size={20} className="mt-1 shrink-0 text-gold-400" />
                {FULL_ADDRESS}
              </p>
            </address>
            <table className="reveal mt-6 w-full max-w-md text-[0.95rem]">
              <caption className="sr-only">Opening hours</caption>
              <tbody className="divide-y divide-ink-700">
                {DAYS.map((d) => (
                  <tr key={d}>
                    <th scope="row" className="py-2.5 text-left font-medium text-linen-50">{d}</th>
                    <td className="py-2.5 text-right text-linen-200">{HOURS_TEXT}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <DirectionsButton className="mt-8" />
          </div>
          <MapFacade src={SITE.googleMapsEmbed} title={`Map of ${SITE.name}`} className="reveal min-h-[380px]" />
        </div>
      </Section>

      <Section tone="alt" labelledBy="getting">
        <div className="mx-auto max-w-3xl prose-noir">
          <h2 id="getting">Getting here</h2>
          <p>
            We&apos;re in Bahria Town Phase 7, near KFC, Rawalpindi, central to all Bahria phases and a short drive from DHA
            Islamabad and the Islamabad Expressway. Parking is available around the plaza. Send us a WhatsApp message and we&apos;ll share the
            exact Google Maps pin.
          </p>
          <p>
            Detailed routes: <Link href="/locations/bahria-town-phase-4">Phase 4</Link> ·{" "}
            <Link href="/locations/bahria-town-phase-7">Phase 7</Link> · <Link href="/locations/bahria-town-phase-8">Phase 8</Link> ·{" "}
            <Link href="/locations/dha-islamabad">DHA</Link> · <Link href="/locations/islamabad">Islamabad</Link> ·{" "}
            <Link href="/locations/gt-road-expressway">Expressway &amp; GT Road</Link>.
          </p>
        </div>
      </Section>

      <Section labelledBy="msg">
        <SectionHeading eyebrow="Quick message" id="msg" title={<>Send us a <em>booking request</em></>} />
        <BookingForm services={SERVICES.map((s) => s.name)} durations={[30, 60]} whatsapp={SITE.whatsapp} brand={SITE.name} tel={telHref} />
      </Section>

      <FaqSection faqs={CONTACT_FAQS} />
      <FinalCta service="contact" />
    </>
  );
}
