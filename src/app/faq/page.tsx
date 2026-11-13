import { PAGES } from "@/data/pages";
import { FAQ_GROUPS } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { FaqList } from "@/components/sections/FaqSection";
import { WhatsAppButton, CallButton } from "@/components/cta/Buttons";
import { CtaBand } from "@/components/sections/CtaBand";
import { IMG } from "@/data/images";
import { FinalCta } from "@/components/sections/FinalCta";

const P = PAGES.faq;
export const metadata = buildMetadata({ title: P.title, description: P.description, path: "/faq" });

const slug = (g: string) => g.toLowerCase().replace(/[^a-z]+/g, "-");

export default function FaqPage() {
  const all = FAQ_GROUPS.flatMap((g) => g.items);
  return (
    <>
      <JsonLd data={faqSchema(all)} />
      <Breadcrumbs items={[{ name: "FAQ", path: "/faq" }]} />
      <PageHero
        eyebrow={`${all.length} answers`}
        image={IMG.roomBrightFacial}
        title={
          <>
            Frequently Asked <em>Questions</em>
          </>
        }
        lead={<p>Booking, prices, timings, therapists, hygiene and what to expect at our massage center in Bahria Town Phase 7, Rawalpindi.</p>}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton service="faq" label="Ask us on WhatsApp" />
          <CallButton variant="ghost" service="faq" />
        </div>
      </PageHero>
      <Section tone="alt" labelledBy="groups">
        <h2 id="groups" className="sr-only">FAQ categories</h2>
        <nav aria-label="FAQ categories" className="mb-10 flex flex-wrap gap-2">
          {FAQ_GROUPS.map((g) => (
            <a key={g.group} href={`#${slug(g.group)}`} className="chip min-h-11 !px-4 hover:border-gold-400/60">
              {g.group}
            </a>
          ))}
        </nav>
        <div className="space-y-14">
          {FAQ_GROUPS.map((g, i) => (
            <div key={g.group} id={slug(g.group)} className="grid gap-6 lg:grid-cols-[0.6fr_1.4fr]">
              <h2 className="!text-[clamp(1.6rem,2.6vw,2.2rem)]">{g.group}</h2>
              <div>
                <FaqList faqs={g.items} />
                {i === 1 && (
                  <div className="mt-10">
                    <CtaBand service="faq" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <FinalCta service="faq" />
    </>
  );
}
