import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICES, getService, servicesBySlugs, serviceTitle } from "@/data/services";
import { priceFor, pkr } from "@/data/pricing";
import { postsBySlugs } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { waServiceMessage } from "@/lib/whatsapp";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { RichText } from "@/components/ui/RichText";
import { WhatsAppButton, CallButton } from "@/components/cta/Buttons";
import { CtaBand } from "@/components/sections/CtaBand";
import { PriceMenu } from "@/components/sections/PriceMenu";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { PostCard } from "@/components/sections/PostCard";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return buildMetadata({
    title: serviceTitle(s),
    description: s.description,
    path: `/services/${s.slug}`,
    keywords: [s.primaryKeyword, ...s.keywords],
    image: s.image.src.src,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const row = priceFor(s.slug)!;
  const prices = Object.entries(row.prices) as [string, number][];
  const msg = waServiceMessage(s.name, 60);
  const related = servicesBySlugs(s.related);
  const posts = postsBySlugs(s.blog);
  const vs = getService(s.comparison.vs);

  return (
    <>
      <JsonLd data={serviceSchema(s)} />
      <Breadcrumbs items={[{ name: "Services", path: "/services" }, { name: s.name, path: `/services/${s.slug}` }]} />

      {/* 1. HERO */}
      <PageHero
        eyebrow="Signature treatment"
        title={s.h1}
        image={s.image}
        lead={<p>{s.benefitLine}</p>}
      >
        <ul className="mb-7 flex flex-wrap gap-2">
          {prices.map(([m, p]) => (
            <li key={m} className="chip">
              <Icon name="clock" size={14} className="text-gold-400" /> {m} min · {pkr(p)}
            </li>
          ))}
          <li className="chip">
            <Icon name="hand" size={14} className="text-gold-400" /> {s.pressure} pressure
          </li>
        </ul>
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton message={msg} service={s.slug} label="Book this massage on WhatsApp" />
          <CallButton service={s.slug} variant="ghost" />
        </div>
      </PageHero>

      {/* 2. WHAT IS */}
      <Section tone="alt" labelledBy="what">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="The treatment" id="what" title={<>What is {s.name}?</>} />
          <div className="prose-noir reveal">
            <RichText body={s.intro} />
          </div>
        </div>
      </Section>

      {/* 3. BENEFITS */}
      <Section labelledBy="benefits">
        <SectionHeading
          eyebrow="Benefits"
          id="benefits"
          title={
            <>
              How {s.shortName} <em>may</em> help you
            </>
          }
          intro={<p>Massage is a wellness therapy, not a medical treatment. These are the benefits our guests most often describe.</p>}
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {s.benefits.map((b) => (
            <li key={b.title} className="card reveal p-6">
              <Icon name={b.icon} size={24} className="text-gold-400" />
              <h3 className="mt-4 !text-[1.3rem]">{b.title}</h3>
              <p className="mt-2 text-[0.95rem] text-linen-200">{b.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 4. WHO FOR / AVOID */}
      <Section tone="alt" labelledBy="who">
        <h2 id="who" className="sr-only">
          Who {s.name} is for
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card reveal p-7 sm:p-9">
            <p className="eyebrow !text-sage-400">Ideal for</p>
            <h3 className="mt-3">Who is it for?</h3>
            <ul className="mt-5 space-y-3 text-linen-200">
              {s.idealFor.map((i) => (
                <li key={i} className="flex gap-3">
                  <Icon name="check" size={18} className="mt-1 shrink-0 text-sage-400" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="card reveal p-7 sm:p-9">
            <p className="eyebrow !text-clay-400">Please check first</p>
            <h3 className="mt-3">Who should avoid it?</h3>
            <ul className="mt-5 space-y-3 text-linen-200">
              {s.avoidIf.map((i) => (
                <li key={i} className="flex gap-3">
                  <Icon name="info" size={18} className="mt-1 shrink-0 text-clay-400" />
                  {i}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-stone-400">If you have any medical condition, please consult your doctor before booking and tell your therapist on arrival.</p>
          </div>
        </div>
      </Section>

      {/* 5. STEPS */}
      <Section labelledBy="expect">
        <SectionHeading eyebrow="Your session" id="expect" title={<>What to expect, <em>step by step</em></>} />
        <ol className="relative grid gap-5 md:grid-cols-5">
          {s.steps.map((st, i) => (
            <li key={st.title} className="card reveal p-6">
              <span className="font-serif text-[2rem] text-gold-400">0{i + 1}</span>
              <h3 className="mt-2 !text-[1.15rem]">{st.title}</h3>
              <p className="mt-2 text-[0.9rem] text-linen-200">{st.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 6. PRICES + CTA BAND */}
      <Section tone="alt" labelledBy="price">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Pricing"
            id="price"
            title={
              <>
                {s.shortName} <em>prices</em>
              </>
            }
            intro={
              <p>
                Clear, published prices with no surprises. Compare every treatment on our{" "}
                <Link href="/pricing" className="text-gold-300 underline">
                  full price list
                </Link>
                .
              </p>
            }
          />
          <div className="card reveal p-6 sm:p-8">
            <PriceMenu rows={[row]} />
          </div>
        </div>
        <div className="mt-12">
          <CtaBand message={msg} service={s.slug} title={`Reserve your ${s.shortName.toLowerCase()} session`} />
        </div>
      </Section>

      {/* 7. COMPARISON + 8. AFTERCARE + LOCAL */}
      <Section labelledBy="compare">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card reveal p-7 sm:p-9">
            <p className="eyebrow">Compare</p>
            <h2 id="compare" className="mt-3 !text-[clamp(1.6rem,2.6vw,2.2rem)]">
              {s.comparison.title}
            </h2>
            <div className="prose-noir mt-5">
              <RichText body={s.comparison.body} />
            </div>
            {vs && (
              <Link href={`/services/${vs.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-gold-300">
                Explore {vs.name} <Icon name="arrow" size={16} />
              </Link>
            )}
          </div>
          <div className="card reveal p-7 sm:p-9">
            <p className="eyebrow !text-sage-400">Aftercare</p>
            <h2 className="mt-3 !text-[clamp(1.6rem,2.6vw,2.2rem)]">Aftercare tips</h2>
            <ul className="mt-5 space-y-3 text-linen-200">
              {s.aftercare.map((a) => (
                <li key={a} className="flex gap-3">
                  <Icon name="leaf" size={18} className="mt-1 shrink-0 text-sage-400" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="reveal">{s.local.h2}</h2>
          <div className="prose-noir reveal mt-6">
            <RichText body={s.local.body} />
            <p>
              Also visiting from nearby? See our <Link href="/locations/bahria-town-phase-7">massage center in Bahria Town Phase 7</Link> page for
              directions and parking.
            </p>
          </div>
        </div>
      </Section>

      {/* 9. FAQ */}
      <FaqSection
        faqs={s.faqs}
        title={
          <>
            {s.shortName} <em>FAQs</em>
          </>
        }
      />

      {/* 10. RELATED */}
      <Section tone="alt" labelledBy="related">
        <SectionHeading eyebrow="You may also like" id="related" title="Related treatments" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
            <ServiceCard key={r.slug} s={r} />
          ))}
        </div>
        <h2 className="mt-20 !text-[clamp(1.6rem,2.6vw,2.2rem)]">From the Serenity Journal</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <PostCard key={p.slug} p={p} />
          ))}
        </div>
      </Section>

      {/* 11. FINAL CTA */}
      <FinalCta message={msg} service={s.slug} />
    </>
  );
}
