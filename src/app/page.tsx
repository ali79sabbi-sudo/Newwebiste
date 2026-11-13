import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/config/site";
import { PAGES } from "@/data/pages";
import { IMG } from "@/data/images";
import { SERVICES, SIGNATURE_SLUGS, servicesBySlugs } from "@/data/services";
import { PRICE_LIST } from "@/data/pricing";
import { ACTIVE_PACKAGES } from "@/data/packages";
import { HOME_FAQS } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { daySpaSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Divider } from "@/components/ui/Divider";
import { Icon, type IconName } from "@/components/ui/Icon";
import { WhatsAppButton, CallButton } from "@/components/cta/Buttons";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { PriceMenu } from "@/components/sections/PriceMenu";
import { PackageCard } from "@/components/sections/PackageCard";
import { ReviewsBlock } from "@/components/sections/ReviewsBlock";
import { AreaChips } from "@/components/sections/AreaChips";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { CtaBand } from "@/components/sections/CtaBand";
import { MapFacade } from "@/components/client/MapFacade";

const P = PAGES.home;
export const metadata = buildMetadata({ title: P.title, description: P.description, path: "/", keywords: P.keywords });

const WHY: { icon: IconName; title: string; text: string }[] = [
  { icon: "droplet", title: "Spotless hygiene", text: "Fresh linen and towels for every guest, sanitised tools and rooms cleaned between sessions." },
  { icon: "shield", title: "Trained therapists", text: "Professional, respectful therapists who ask before they begin and check in throughout." },
  { icon: "door", title: "Complete privacy", text: "Closed-door private rooms with proper draping. Strictly therapeutic treatments only." },
  { icon: "pin", title: "Central location", text: "Near KFC, Phase 7: minutes from every Bahria phase, DHA and the Expressway." },
  { icon: "sparkle", title: "Fair, transparent pricing", text: "One clear rate for every treatment, published openly with no surprises." },
  { icon: "whatsapp", title: "Easy WhatsApp booking", text: "Message us, pick a time, and your room is ready. We usually reply within minutes." },
];

const GALLERY = [IMG.roomEmptyBlinds, IMG.roomLuxeSuite, IMG.therapistFootMale, IMG.roomSunlit, IMG.roomWindowTherapy];

export default function Home() {
  const signature = servicesBySlugs(SIGNATURE_SLUGS);
  const popular = PRICE_LIST.filter((r) => r.popular).slice(0, 5);
  return (
    <>
      <JsonLd data={daySpaSchema()} />

      {/* 1. HERO */}
      <section className="relative isolate flex min-h-[min(calc(100svh-108px),860px)] items-center overflow-hidden">
        <Image
          src={IMG.heroOilDark.src}
          alt={IMG.heroOilDark.alt}
          fill
          priority
          fetchPriority="high"
          quality={60}
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,13,12,.92)_0%,rgba(14,13,12,.75)_45%,rgba(14,13,12,.35)_100%)]" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
        <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="eyebrow mb-6">Bahria Town Phase 7 · Near KFC · Rawalpindi</p>
            <h1 className="max-w-3xl">
              Luxury Massage &amp; Spa in <em>Bahria Town</em> Phase 7
            </h1>
            <p className="mt-6 max-w-xl text-[1.15rem] text-linen-200">
              Warm oils, soft linen and a quiet private room: professional massage by trained therapists, minutes from
              DHA and the Islamabad Expressway.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton label="Book on WhatsApp" service="home-hero" />
              <CallButton variant="ghost" service="home-hero" />
            </div>
            <p className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[0.88rem] text-linen-200">
              {["Open 7 days", "Private rooms", "Certified therapists"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <Icon name="check" size={16} className="text-gold-400" /> {t}
                </span>
              ))}
            </p>
          </div>
          <div className="relative mx-auto hidden w-full max-w-[360px] lg:block">
            <div className="arch img-grade relative aspect-[4/5] overflow-hidden border border-gold-400/30">
              <Image src={IMG.therapistHotStone.src} alt={IMG.therapistHotStone.alt} fill sizes="360px" placeholder="blur" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-10 rounded-2xl border border-linen-50/15 bg-ink-950/60 px-5 py-4 shadow-2xl backdrop-blur-md">
              <p className="eyebrow !text-[0.62rem]">Today&apos;s slots</p>
              <p className="mt-1 text-sm text-linen-50">Open: message to confirm</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST */}
      <TrustStrip />

      {/* 3. SIGNATURE TREATMENTS */}
      <Section labelledBy="signature">
        <SectionHeading
          eyebrow="Signature treatments"
          id="signature"
          title={
            <>
              Rituals of <em>rest</em>, made for you
            </>
          }
          intro={<p>Six of our most-loved treatments at our massage center in Bahria Town Phase 7. Every one is available in 30 or 60 minutes.</p>}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {signature.map((s) => (
            <ServiceCard key={s.slug} s={s} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/services" className="btn btn-ghost">
            View all {SERVICES.length} treatments <Icon name="arrow" size={18} />
          </Link>
        </div>
      </Section>

      <Divider />

      {/* 4. WHY CHOOSE US */}
      <Section labelledBy="why">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glow reveal">
            <p className="eyebrow mb-5">Why choose us</p>
            <h2 id="why" className="!text-[clamp(2.1rem,4vw,3.4rem)]">
              Unwind in <em>pure</em> silence. Leave lighter than you arrived.
            </h2>
            <p className="mt-6 text-linen-200">
              We built {SITE.shortName} for people in Rawalpindi and Islamabad who wanted something rare: a spa that is
              calm, clean, honest and genuinely professional.
            </p>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {WHY.map((w) => (
              <li key={w.title} className="card reveal p-6">
                <Icon name={w.icon} size={24} className="text-gold-400" />
                <h3 className="mt-4 !text-[1.3rem]">{w.title}</h3>
                <p className="mt-2 text-[0.95rem] text-linen-200">{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-14">
          <CtaBand service="home-mid" />
        </div>
      </Section>

      {/* 5. PRICE PREVIEW */}
      <Section tone="alt" labelledBy="prices">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Price preview"
            id="prices"
            title={
              <>
                Honest prices, <em>always</em> visible
              </>
            }
            intro={
              <>
                <p>Every treatment has the same simple rate: half an hour or a full hour. Tap any price to book it instantly on WhatsApp.</p>
                <Link href="/pricing" className="btn btn-ghost btn-sm mt-6">
                  See full price list <Icon name="arrow" size={16} />
                </Link>
              </>
            }
          />
          <div className="reveal card p-6 sm:p-8">
            <PriceMenu rows={popular} compact />
          </div>
        </div>
      </Section>

      {/* 6. PACKAGES */}
      <Section labelledBy="packages">
        <SectionHeading
          eyebrow="Spa packages"
          id="packages"
          title={
            <>
              Make an <em>afternoon</em> of it
            </>
          }
          intro={<p>Thoughtful combinations for a deeper reset, a special occasion or a regular routine.</p>}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {ACTIVE_PACKAGES.slice(0, 3).map((p) => (
            <PackageCard key={p.id} p={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/packages" className="btn btn-ghost">
            Compare all packages <Icon name="arrow" size={18} />
          </Link>
        </div>
      </Section>

      {/* 7. HOW BOOKING WORKS (light breather) */}
      <Section tone="light" labelledBy="how">
        <SectionHeading
          eyebrow="How booking works"
          id="how"
          align="center"
          title={
            <>
              Three steps to <em>calm</em>
            </>
          }
        />
        <ol className="grid gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "Message on WhatsApp", d: "Tell us your treatment and preferred time. No forms, no apps." },
            { n: "02", t: "Pick your time", d: "We confirm the nearest available slot, usually within minutes." },
            { n: "03", t: "Arrive & relax", d: "Come 10 minutes early, settle in, and let the quiet do its work." },
          ].map((s) => (
            <li key={s.n} className="reveal rounded-[20px] border border-[#d8cfc2] bg-white/50 p-7">
              <span className="font-serif text-[2.6rem] text-[#8a6a3e]">{s.n}</span>
              <h3 className="mt-2 !text-[1.45rem]">{s.t}</h3>
              <p className="mt-2 text-[0.97rem]">{s.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex justify-center">
          <WhatsAppButton label="Check today's availability" service="home-steps" />
        </div>
      </Section>

      {/* 8. AMBIENCE GALLERY */}
      <Section labelledBy="ambience">
        <SectionHeading
          eyebrow="Inside the spa"
          id="ambience"
          title={
            <>
              Our private <em>rooms</em>
            </>
          }
          intro={<p>Closed-door treatment rooms with fresh linen, soft light and trained therapists, right here in Bahria Town Phase 7.</p>}
        />
        <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4">
          {GALLERY.map((g, i) => (
            <div
              key={i}
              className={`reveal relative overflow-hidden rounded-[18px] border border-ink-700 ${
                i === 0 ? "col-span-2 row-span-2" : i === 3 ? "row-span-2" : ""
              }`}
            >
              <Image src={g.src} alt={g.alt} fill sizes="(min-width:768px) 25vw, 50vw" placeholder="blur" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/gallery" className="inline-flex items-center gap-2 font-semibold text-gold-300">
            View gallery <Icon name="arrow" size={16} />
          </Link>
        </div>
      </Section>

      {/* 9. REVIEWS */}
      <Section tone="alt" labelledBy="reviews">
        <SectionHeading eyebrow="Guest words" id="reviews" align="center" title={<>What our guests <em>say</em></>} />
        <ReviewsBlock limit={3} />
      </Section>

      {/* 10. AREAS */}
      <Section labelledBy="areas">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Areas we serve"
              id="areas"
              title={
                <>
                  Close to <em>home</em>, wherever that is
                </>
              }
              intro={<p>From Phase 8 and Spring North to Phase 4, DHA Phase 2 and the Expressway, guests reach us in minutes.</p>}
            />
            <AreaChips />
          </div>
          <MapFacade src={SITE.googleMapsEmbed} title={`Map showing ${SITE.name} in Bahria Town Phase 7`} className="reveal min-h-[320px]" />
        </div>
      </Section>

      {/* 11. SEO CONTENT */}
      <Section tone="alt" labelledBy="trusted">
        <div className="mx-auto max-w-3xl">
          <h2 id="trusted" className="reveal">
            Your trusted massage center in <em>Bahria Town Phase 7</em>
          </h2>
          <div className="prose-noir reveal mt-8">
            <p>
              {SITE.name} is a professional massage center in Bahria Town Phase 7, Rawalpindi, located near KFC,
              one of the easiest landmarks in Bahria to find. We created it for people across Bahria Town, DHA Islamabad and the twin cities who were
              searching for a spa that feels genuinely calm, clean and trustworthy, rather than rushed or uncertain.
            </p>
            <p>
              Our treatment menu covers everything from a relaxing{" "}
              <Link href="/services/swedish-massage">Swedish massage in Bahria Town</Link> to a firm{" "}
              <Link href="/services/deep-tissue-massage">deep tissue massage in Rawalpindi</Link>, a stretching{" "}
              <Link href="/services/thai-massage">Thai massage</Link>, a warming{" "}
              <Link href="/services/hot-stone-massage">hot stone massage</Link>, and scented{" "}
              <Link href="/services/aromatherapy-massage">aromatherapy</Link>. For focused relief, our{" "}
              <Link href="/services/back-neck-shoulder-massage">back, neck &amp; shoulder massage</Link> and{" "}
              <Link href="/services/head-massage">head massage (champi)</Link> are favourites with office workers and
              drivers. We also offer <Link href="/services/foot-reflexology">foot reflexology</Link>, dry{" "}
              <Link href="/services/cupping-therapy">cupping therapy</Link>,{" "}
              <Link href="/services/facial-treatments">facials</Link> and{" "}
              <Link href="/services/body-scrub-and-wrap">body polishing</Link>.
            </p>
            <p>
              What sets us apart is how we work. Every guest gets fresh linen and towels, every tool is sanitised, and
              every treatment happens in a private room. Our therapists are trained, ask about your health before they
              begin, and adjust pressure whenever you ask. Our services are strictly therapeutic, which is why families
              and professionals in Bahria Town recommend us with confidence.
            </p>
            <p>
              Pricing is simple and published in full: every treatment is one clear rate for 30 or 60 minutes, and you
              can see it all on our <Link href="/pricing">massage price list</Link>. If you&apos;d like more time, our{" "}
              <Link href="/packages">spa packages in Bahria Town</Link> combine treatments into a longer ritual.
            </p>
            <p>
              We&apos;re a short drive from every part of Bahria Town Rawalpindi, from{" "}
              <Link href="/locations/bahria-town-phase-4">Phase 4 and Civic Center</Link> to{" "}
              <Link href="/locations/bahria-town-phase-8">Phase 8</Link>, and easy to reach from{" "}
              <Link href="/locations/dha-islamabad">DHA Islamabad</Link> and the{" "}
              <Link href="/locations/gt-road-expressway">Islamabad Expressway</Link>. Searching for &ldquo;massage near
              me&rdquo; or the best spa in Rawalpindi? Send us a WhatsApp message and we&apos;ll find you a slot, often
              on the same day.
            </p>
          </div>
        </div>
      </Section>

      {/* 12. FAQ */}
      <FaqSection faqs={HOME_FAQS} intro={<p>Everything guests ask before their first visit to our Bahria Town spa.</p>} />

      {/* 13. FINAL CTA */}
      <FinalCta service="home-final" />
    </>
  );
}
