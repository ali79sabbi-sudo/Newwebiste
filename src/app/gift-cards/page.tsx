import { PAGES } from "@/data/pages";
import { GIFT_FAQS } from "@/data/faqs";
import { STANDARD_RATES, pkr } from "@/data/pricing";
import { SITE } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { waLink } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { IMG } from "@/data/images";
import { LogoMark } from "@/components/Logo";
import { WhatsAppButton, CallButton } from "@/components/cta/Buttons";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import Link from "next/link";

const P = PAGES.giftCards;
export const metadata = buildMetadata({ title: P.title, description: P.description, path: "/gift-cards" });

const H = STANDARD_RATES[30];
const VALUES = [
  { v: H, label: "30-min treat", note: "Head massage, foot reflexology or a quick back reset" },
  { v: H * 2, label: "60-min ritual", note: "Any full-hour massage or facial" },
  { v: H * 4, label: "Signature Ritual", note: "Two hours of massage, reflexology and champi" },
  { v: H * 5, label: "Ultimate Noir", note: "Hot stones, body polish and facial" },
];

export default function GiftCardsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Gift cards", path: "/gift-cards" }]} />
      <PageHero
        eyebrow="Give the gift of calm"
        image={IMG.towelsCandle}
        title={
          <>
            Spa Gift <em>Cards</em>
          </>
        }
        lead={<p>For birthdays, anniversaries, Eid or simply a thank-you: a spa gift card from our Bahria Town Phase 7 spa is a gift people actually use and remember.</p>}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton label="Order on WhatsApp" message={`Hi ${SITE.name}, I'd like to order a spa gift card.`} service="gift-card" />
          <CallButton variant="ghost" service="gift-card" />
        </div>
      </PageHero>

      <Section tone="alt" labelledBy="card">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* CSS gift card mockup */}
          <div className="reveal mx-auto aspect-[1.6/1] w-full max-w-[460px] rounded-[22px] border border-gold-400/40 p-7 shadow-2xl" style={{ background: "radial-gradient(120% 120% at 0% 0%, #2a2520 0%, #141210 55%, #0e0d0c 100%)" }}>
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <LogoMark size={46} />
                <span className="eyebrow !text-[0.6rem]">Gift card</span>
              </div>
              <div>
                <p className="font-serif text-[1.6rem] tracking-[0.1em] text-linen-50">MASSAGE RAWALPINDI</p>
                <p className="mt-1 text-[0.7rem] tracking-[0.3em] text-gold-400">A RITUAL OF REST · BAHRIA TOWN</p>
              </div>
              <div className="flex items-end justify-between text-sm text-linen-200">
                <span>For: someone special</span>
                <span className="font-serif text-[1.5rem] text-gold-300">{pkr(H * 2)}</span>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Choose a value" id="card" title={<>A gift for <em>every</em> occasion</>} />
            <ul className="space-y-3">
              {VALUES.map((v) => (
                <li key={v.v}>
                  <a
                    href={waLink(`Hi ${SITE.name}, I'd like to order a ${v.label} gift card (${pkr(v.v)}).`)}
                    target="_blank"
                    rel="noopener"
                    className="card card-hover flex items-center justify-between gap-4 p-5"
                    data-track="whatsapp_click"
                    data-service="gift-card"
                  >
                    <span>
                      <span className="block font-semibold text-linen-50">{v.label}</span>
                      <span className="block text-sm text-stone-400">{v.note}</span>
                    </span>
                    <span className="whitespace-nowrap font-serif text-[1.4rem] text-gold-300">{pkr(v.v)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section labelledBy="how">
        <SectionHeading eyebrow="How it works" id="how" title={<>Three simple <em>steps</em></>} />
        <ol className="grid gap-5 md:grid-cols-3">
          {[
            { t: "Choose & message", d: "Pick a value or treatment and send us a WhatsApp message with the recipient's name and your note." },
            { t: "Confirm & pay", d: "We confirm details and payment, then send a beautiful digital gift card." },
            { t: "They book & relax", d: "The recipient books on WhatsApp whenever suits them, within the validity period." },
          ].map((s, i) => (
            <li key={s.t} className="card reveal p-7">
              <span className="font-serif text-[2rem] text-gold-400">0{i + 1}</span>
              <h3 className="mt-2 !text-[1.35rem]">{s.t}</h3>
              <p className="mt-2 text-[0.95rem] text-linen-200">{s.d}</p>
            </li>
          ))}
        </ol>
        <div className="prose-noir mx-auto mt-14 max-w-3xl">
          <h2>The perfect Eid, birthday or anniversary gift in Rawalpindi</h2>
          <p>
            A spa gift card is personal without being complicated. It suits parents who never take time for themselves, partners who deserve
            a quiet hour, and friends who work too hard. First-timers love a <Link href="/services/swedish-massage">Swedish massage</Link>, while
            those who carry tension prefer a <Link href="/services/hot-stone-massage">hot stone</Link> or{" "}
            <Link href="/services/deep-tissue-massage">deep tissue massage</Link>.
          </p>
        </div>
        <div className="mt-12">
          <CtaBand title="Order a gift card today" text="Most digital gift cards are sent the same day." service="gift-card" message={`Hi ${SITE.name}, I'd like to order a spa gift card.`} />
        </div>
      </Section>
      <FaqSection faqs={GIFT_FAQS} />
      <FinalCta service="gift-card" message={`Hi ${SITE.name}, I'd like to order a spa gift card.`} />
    </>
  );
}
