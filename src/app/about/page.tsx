import Image from "next/image";
import Link from "next/link";
import { PAGES } from "@/data/pages";
import { ABOUT_FAQS } from "@/data/faqs";
import { IMG } from "@/data/images";
import { IMAGE_CREDITS } from "@/data/image-credits";
import { SITE } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon, type IconName } from "@/components/ui/Icon";
import { WhatsAppButton, CallButton } from "@/components/cta/Buttons";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";

const P = PAGES.about;
export const metadata = buildMetadata({ title: P.title, description: P.description, path: "/about" });

/** TODO(owner): replace with real therapist names, photos, training and certifications. */
const TEAM = [
  { role: "Senior Massage Therapist", focus: "Deep tissue, sports, Thai massage & cupping", cert: "Trained in therapeutic and sports massage techniques", img: IMG.therapistHotStone },
  { role: "Spa Therapist", focus: "Swedish, aromatherapy, hot stone & reflexology", cert: "Trained in relaxation massage and reflexology", img: IMG.therapistFootSmile },
  { role: "Skin & Beauty Therapist", focus: "Facials, body scrub & polish", cert: "Trained in professional skincare treatments", img: IMG.roomBrightFacial },
];

const HYGIENE = [
  "Fresh linen and towels for every single guest",
  "Hands washed and sanitised before every treatment",
  "Massage tools, stones and surfaces sanitised between sessions",
  "Single-use or sterilised cups for cupping",
  "Sealed, labelled oils and dermatologically tested products",
  "Rooms ventilated and cleaned between guests",
];

const VALUES: { icon: IconName; t: string; d: string }[] = [
  { icon: "shield", t: "Respect", d: "Strictly therapeutic, professional treatments with clear boundaries." },
  { icon: "sparkle", t: "Honesty", d: "Published prices, real reviews and careful, truthful claims." },
  { icon: "moon", t: "Stillness", d: "Unhurried sessions in quiet rooms, never rushed." },
  { icon: "heart", t: "Care", d: "We listen first, then tailor every treatment to you." },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
      <PageHero
        eyebrow="Our story"
        title={
          <>
            About Massage Rawalpindi, <em>Bahria Town</em>
          </>
        }
        image={IMG.towelsCandle}
        lead={<p>A calm, hygienic, strictly professional spa in Bahria Town Phase 7, built for people who want to rest properly.</p>}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton service="about" />
          <CallButton variant="ghost" service="about" />
        </div>
      </PageHero>

      <Section tone="alt" labelledBy="story">
        <div className="mx-auto max-w-3xl prose-noir">
          <h2 id="story">Why we opened a spa in Bahria Town</h2>
          <p>
            {SITE.name} began with a simple frustration. Across Rawalpindi and Islamabad, it was surprisingly hard to find a massage center that
            was clean, calm, transparent and genuinely professional. Some places were rushed, some were unclear about prices, and some simply
            didn&apos;t feel right.
          </p>
          <p>
            So we built the spa we wanted to visit ourselves: private rooms in Bahria Town Phase 7, near KFC, trained therapists,
            fresh linen for every guest, one clear price for every treatment, and a strict professional-conduct policy that families can trust.
          </p>
          <h2>Our philosophy: the ritual of rest</h2>
          <p>
            We believe rest is a skill, and a ritual. Every visit follows the same unhurried rhythm: a warm welcome, a short consultation, a
            treatment shaped around you, and a few quiet minutes before you return to the world. Whether you choose a{" "}
            <Link href="/services/swedish-massage">Swedish massage</Link> or <Link href="/services/cupping-therapy">dry cupping</Link>, the
            ritual is the same. Slow down, breathe, and let someone take care of you.
          </p>
        </div>
      </Section>

      <Section labelledBy="team">
        <SectionHeading eyebrow="The team" id="team" title={<>Trained hands, <em>calm</em> presence</>} intro={<p>{SITE.therapistPolicy}</p>} />
        <ul className="grid gap-6 md:grid-cols-3">
          {TEAM.map((t) => (
            <li key={t.role} className="card reveal p-7">
              <div className="arch img-grade relative mb-5 aspect-[4/3] overflow-hidden">
                <Image src={t.img.src} alt={t.img.alt} fill sizes="(min-width:768px) 33vw, 92vw" placeholder="blur" className="object-cover" />
              </div>
              <h3 className="!text-[1.35rem]">{t.role}</h3>
              <p className="mt-2 text-[0.95rem] text-linen-200">{t.focus}</p>
              <p className="mt-3 text-sm text-stone-400">{t.cert}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="light" labelledBy="hygiene">
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHeading eyebrow="Hygiene standards" id="hygiene" title={<>Clean is <em>non-negotiable</em></>} intro={<p>Our hygiene checklist is followed before every single guest.</p>} />
          <ul className="space-y-3">
            {HYGIENE.map((h) => (
              <li key={h} className="flex gap-3 rounded-2xl border border-[#d8cfc2] bg-white/50 p-4">
                <Icon name="check" size={20} className="mt-0.5 shrink-0 text-[#6b7d65]" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section labelledBy="space">
        <SectionHeading eyebrow="The space" id="space" title={<>Designed for <em>stillness</em></>} />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {[IMG.roomEmptyBlinds, IMG.roomSunlit, IMG.roomLuxeSuite].map((g, i) => (
            <div key={i} className={`reveal relative aspect-[4/5] overflow-hidden rounded-[18px] border border-ink-700 ${i === 2 ? "col-span-2 md:col-span-1" : ""}`}>
              <Image src={g.src} alt={g.alt} fill sizes="(min-width:768px) 33vw, 50vw" placeholder="blur" className="object-cover" />
            </div>
          ))}
        </div>
        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <li key={v.t} className="card reveal p-6">
              <Icon name={v.icon} size={24} className="text-gold-400" />
              <h3 className="mt-4 !text-[1.3rem]">{v.t}</h3>
              <p className="mt-2 text-[0.95rem] text-linen-200">{v.d}</p>
            </li>
          ))}
        </ul>
        <div className="mt-14">
          <CtaBand service="about" />
        </div>
      </Section>

      <FaqSection faqs={ABOUT_FAQS} />

      <Section tone="alt" id="photo-credits" labelledBy="credits">
        <h2 id="credits" className="!text-[1.6rem]">Photo credits</h2>
        <p className="mt-3 max-w-2xl text-sm text-stone-400">
          Some images on this website are free-to-use stock photography from Unsplash and Pexels. Thank you to the photographers.
        </p>
        <ul className="mt-6 grid gap-x-6 gap-y-1 text-[0.8rem] text-stone-400 sm:grid-cols-2 lg:grid-cols-3">
          {IMAGE_CREDITS.map((c) => (
            <li key={c.file}>
              <a href={c.url} target="_blank" rel="noopener nofollow" className="hover:text-gold-300">
                {c.file.replace(/-/g, " ")}: {c.photographer} / {c.source}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta service="about" />
    </>
  );
}
