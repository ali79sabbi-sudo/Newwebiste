import { PAGES } from "@/data/pages";
import { SERVICES } from "@/data/services";
import { SERVICES_HUB_FAQS } from "@/data/faqs";
import { IMG } from "@/data/images";
import { SITE } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ServiceFilter } from "@/components/client/ServiceFilter";
import { MassageQuiz } from "@/components/client/MassageQuiz";
import { WhatsAppButton, CallButton } from "@/components/cta/Buttons";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import Link from "next/link";

const P = PAGES.services;
export const metadata = buildMetadata({ title: P.title, description: P.description, path: "/services" });

export default function ServicesHub() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />
      <PageHero
        eyebrow="14 treatments · one calm space"
        title={
          <>
            Massage &amp; Spa Treatments in <em>Bahria Town</em>
          </>
        }
        image={IMG.oilPour}
        lead={
          <p>
            From flowing Swedish strokes to firm deep tissue, stretching Thai and warming hot stones: every massage service
            at our Bahria Town Phase 7 spa is delivered by trained therapists in a private room.
          </p>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton service="services-hub" />
          <CallButton variant="ghost" service="services-hub" />
        </div>
      </PageHero>

      <Section tone="alt" labelledBy="all">
        <SectionHeading eyebrow="Our menu" id="all" title={<>Choose your <em>ritual</em></>} />
        <ServiceFilter target="service-grid" />
        <div id="service-grid" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} s={s} />
          ))}
        </div>
      </Section>

      <Section labelledBy="quiz">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Not sure which massage?"
            id="quiz"
            title={
              <>
                Find your <em>perfect</em> treatment
              </>
            }
            intro={<p>Answer three quick questions and we&apos;ll suggest a treatment, then book it in one tap.</p>}
          />
          <MassageQuiz phone={SITE.whatsapp} brand={SITE.name} />
        </div>
        <div className="mt-14">
          <CtaBand title="Prefer to talk it through?" text="Message us your goals and we'll recommend the right massage for you." service="services-hub" />
        </div>
        <div className="prose-noir mx-auto mt-16 max-w-3xl">
          <h2>Massage services in Bahria Town &amp; Rawalpindi</h2>
          <p>
            Our treatments fall into four simple groups. <strong>Relaxation</strong> treatments, like{" "}
            <Link href="/services/swedish-massage">Swedish</Link>, <Link href="/services/aromatherapy-massage">aromatherapy</Link>,{" "}
            <Link href="/services/balinese-massage">Balinese</Link> and <Link href="/services/hot-stone-massage">hot stone massage</Link>,
            calm the mind and soften the whole body. <strong>Pain relief</strong> treatments, like{" "}
            <Link href="/services/deep-tissue-massage">deep tissue</Link>, <Link href="/services/sports-massage">sports massage</Link> and our{" "}
            <Link href="/services/back-neck-shoulder-massage">back, neck &amp; shoulder massage</Link>, focus on stubborn muscular tension.
          </p>
          <p>
            <strong>Therapeutic</strong> treatments, including <Link href="/services/thai-massage">Thai massage</Link>,{" "}
            <Link href="/services/foot-reflexology">reflexology</Link> and <Link href="/services/cupping-therapy">dry cupping</Link>, draw on
            traditional techniques. <strong>Beauty</strong> treatments, our <Link href="/services/facial-treatments">facials</Link> and{" "}
            <Link href="/services/body-scrub-and-wrap">body scrub &amp; polish</Link>, leave skin fresh and glowing.
          </p>
          <p>
            Every treatment is the same transparent price. See the <Link href="/pricing">full price list</Link> or combine treatments in a{" "}
            <Link href="/packages">spa package</Link>.
          </p>
        </div>
      </Section>

      <FaqSection faqs={SERVICES_HUB_FAQS} />
      <FinalCta service="services-hub" />
    </>
  );
}
