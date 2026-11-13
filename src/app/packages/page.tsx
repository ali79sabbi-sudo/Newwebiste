import Link from "next/link";
import { PAGES } from "@/data/pages";
import { ACTIVE_PACKAGES } from "@/data/packages";
import { pkr } from "@/data/pricing";
import { PACKAGES_FAQS } from "@/data/faqs";
import { IMG } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PackageCard } from "@/components/sections/PackageCard";
import { WhatsAppButton, CallButton } from "@/components/cta/Buttons";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";

const P = PAGES.packages;
export const metadata = buildMetadata({ title: P.title, description: P.description, path: "/packages" });

export default function PackagesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Packages", path: "/packages" }]} />
      <PageHero
        eyebrow="Rituals & routines"
        title={
          <>
            Spa Packages &amp; Deals in <em>Bahria Town</em>
          </>
        }
        image={IMG.hotStonesAlt}
        lead={<p>Longer rituals for deeper rest, special occasions and regular self-care, all priced transparently at our standard rate.</p>}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton service="packages" message="Hi Massage Rawalpindi, I'd like to ask about your spa packages." />
          <CallButton variant="ghost" service="packages" />
        </div>
      </PageHero>

      <Section tone="alt" labelledBy="pk">
        <SectionHeading eyebrow="Choose your ritual" id="pk" title={<>Massage packages in <em>Bahria Town</em></>} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ACTIVE_PACKAGES.map((p) => (
            <PackageCard key={p.id} p={p} />
          ))}
        </div>
      </Section>

      <Section labelledBy="compare">
        <SectionHeading eyebrow="At a glance" id="compare" title="Compare packages" />
        <div className="reveal overflow-x-auto rounded-[20px] border border-ink-700">
          <table className="w-full min-w-[640px] text-left text-[0.95rem]">
            <caption className="sr-only">Spa package comparison</caption>
            <thead className="bg-ink-850 text-linen-50">
              <tr>
                <th scope="col" className="p-4 font-semibold">Package</th>
                <th scope="col" className="p-4 font-semibold">Duration</th>
                <th scope="col" className="p-4 font-semibold">Best for</th>
                <th scope="col" className="p-4 font-semibold">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-700 text-linen-200">
              {ACTIVE_PACKAGES.map((p) => (
                <tr key={p.id}>
                  <th scope="row" className="p-4 font-semibold text-linen-50">{p.name}</th>
                  <td className="p-4">{p.minutes} min</td>
                  <td className="p-4">{p.bestFor}</td>
                  <td className="p-4 font-serif text-[1.2rem] text-gold-300">{pkr(p.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="prose-noir mx-auto mt-14 max-w-3xl">
          <h2>Spa deals in Rawalpindi, without the gimmicks</h2>
          <p>
            We don&apos;t run fake countdowns or inflated &ldquo;before&rdquo; prices. Packages are built from our standard half-hour rate, so
            you always know what you&apos;re paying for. Any genuine limited-time offer is announced on our Facebook page and WhatsApp.
          </p>
          <p>
            Not sure which to choose? The <strong>Quick Reset</strong> suits a lunch break, the <strong>Signature Ritual</strong> is our most
            complete relaxation journey, and <strong>Ultimate Noir</strong> is designed for pre-wedding and Eid glow with{" "}
            <Link href="/services/hot-stone-massage">hot stones</Link>, a <Link href="/services/body-scrub-and-wrap">body polish</Link> and a{" "}
            <Link href="/services/facial-treatments">facial</Link>. See all individual prices on our <Link href="/pricing">price list</Link>.
          </p>
        </div>
        <div className="mt-12">
          <CtaBand title="Build your own package" text="Tell us what you'd like to combine and we'll put it together." service="packages" />
        </div>
      </Section>

      <FaqSection faqs={PACKAGES_FAQS} />
      <FinalCta service="packages" />
    </>
  );
}
