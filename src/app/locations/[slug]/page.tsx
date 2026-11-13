import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LOCATIONS, getLocation } from "@/data/locations";
import { TOP_LOCATION_SLUGS, servicesBySlugs } from "@/data/services";
import { SITE } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { daySpaSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { RichText } from "@/components/ui/RichText";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppButton, CallButton, DirectionsButton } from "@/components/cta/Buttons";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { AreaChips } from "@/components/sections/AreaChips";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { MapFacade } from "@/components/client/MapFacade";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) return {};
  return buildMetadata({ title: l.title, description: l.description, path: `/locations/${l.slug}`, keywords: [l.primaryKeyword, ...l.keywords] });
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) notFound();
  const top = servicesBySlugs(TOP_LOCATION_SLUGS);
  const msg = `Hi ${SITE.name}, I'm coming from ${l.name} and would like to book a massage. Is a slot available today?`;

  return (
    <>
      <JsonLd data={daySpaSchema({ areaServed: l.areaServed, url: `${SITE.domain}/locations/${l.slug}` })} />
      <Breadcrumbs items={[{ name: "Locations", path: "/locations/bahria-town-phase-7" }, { name: l.name, path: `/locations/${l.slug}` }]} />

      <PageHero eyebrow={l.eyebrow} title={l.h1} image={l.image} lead={<p>{l.heroLine}</p>}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton message={msg} service={`location-${l.slug}`} />
          <CallButton variant="ghost" service={`location-${l.slug}`} />
        </div>
      </PageHero>

      <Section tone="alt" labelledBy="nearest">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Close to you" id="nearest" title={<>Nearest massage center to <em>{l.name}</em></>} />
          <div className="prose-noir reveal">
            <RichText body={l.intro} />
          </div>
        </div>
      </Section>

      <Section labelledBy="directions">
        <SectionHeading
          eyebrow="Getting here"
          id="directions"
          title={<>Directions &amp; <em>landmarks</em></>}
          intro={<p>Travel times are approximate and depend on traffic. Message us and we&apos;ll send the exact Google Maps pin.</p>}
        />
        <ul className="mb-10 flex flex-wrap gap-3">
          {l.travel.map((t) => (
            <li key={t.label} className="chip !px-4 !py-2">
              <Icon name="car" size={16} className="text-gold-400" />
              {t.label}: <strong className="text-linen-50">{t.time}</strong>
            </li>
          ))}
        </ul>
        <div className="grid gap-6 lg:grid-cols-3">
          {l.directions.map((d) => (
            <div key={d.from} className="card reveal p-7">
              <h3 className="!text-[1.3rem]">
                <Icon name="route" size={20} className="mr-2 inline text-gold-400" />
                {d.from}
              </h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-[0.95rem] text-linen-200 marker:text-gold-400">
                {d.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </div>
          ))}
          <div className="card reveal p-7">
            <h3 className="!text-[1.3rem]">Nearby landmarks</h3>
            <ul className="mt-4 space-y-2 text-[0.95rem] text-linen-200">
              {l.landmarks.map((m) => (
                <li key={m} className="flex gap-2">
                  <Icon name="pin" size={16} className="mt-1 shrink-0 text-gold-400" />
                  {m}
                </li>
              ))}
            </ul>
            <DirectionsButton size="sm" className="mt-6" />
          </div>
        </div>
        <MapFacade src={SITE.googleMapsEmbed} title={`Map from ${l.name} to ${SITE.name}`} className="reveal mt-8 h-72" />
      </Section>

      <Section tone="alt" labelledBy="top">
        <SectionHeading eyebrow="Most booked" id="top" title={<>Top treatments for <em>{l.name}</em> guests</>} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {top.map((s) => (
            <ServiceCard key={s.slug} s={s} />
          ))}
        </div>
        <div className="mt-10">
          <CtaBand message={msg} service={`location-${l.slug}`} />
        </div>
      </Section>

      <Section labelledBy="why">
        <div className="mx-auto max-w-3xl">
          <h2 id="why" className="reveal">{l.why.h2}</h2>
          <div className="prose-noir reveal mt-6">
            <RichText body={l.why.body} />
          </div>
          <h2 className="reveal mt-16">{l.extra.h2}</h2>
          <div className="prose-noir reveal mt-6">
            <RichText body={l.extra.body} />
            <p>
              See every treatment on our <Link href="/services">services page</Link> and our transparent{" "}
              <Link href="/pricing">price list</Link>.
            </p>
          </div>
          <h2 className="reveal mt-16 !text-[clamp(1.5rem,2.4vw,2rem)]">Other areas we serve</h2>
          <div className="mt-6">
            <AreaChips exclude={l.slug} />
          </div>
        </div>
      </Section>

      <FaqSection faqs={l.faqs} title={<>{l.name} <em>FAQs</em></>} />
      <FinalCta message={msg} service={`location-${l.slug}`} />
    </>
  );
}
