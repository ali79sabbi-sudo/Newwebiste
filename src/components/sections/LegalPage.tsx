import type { ContentSection, Faq } from "@/data/types";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { RichText } from "@/components/ui/RichText";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { WhatsAppButton } from "@/components/cta/Buttons";

export function LegalPage({ h1, path, intro, updated, sections, faqs }: { h1: string; path: string; intro: string; updated: string; sections: ContentSection[]; faqs: Faq[] }) {
  return (
    <>
      <Breadcrumbs items={[{ name: h1, path }]} />
      <PageHero eyebrow={`Last updated: ${updated}`} title={h1} lead={<p>{intro}</p>}>
        <WhatsAppButton service="legal" label="Questions? WhatsApp us" size="sm" />
      </PageHero>
      <Section tone="alt">
        <div className="prose-noir mx-auto max-w-3xl">
          {sections.map((s) => (
            <div key={s.h2}>
              <h2>{s.h2}</h2>
              <RichText body={s.body} />
            </div>
          ))}
        </div>
        <div className="mx-auto mt-14 max-w-3xl">
          <CtaBand service="legal" />
        </div>
      </Section>
      <FaqSection faqs={faqs} />
      <FinalCta service="legal" />
    </>
  );
}
