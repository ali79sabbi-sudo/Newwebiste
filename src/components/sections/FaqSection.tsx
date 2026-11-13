import type { ReactNode } from "react";
import type { Faq } from "@/data/types";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { Section, SectionHeading } from "@/components/ui/Section";

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-ink-700 rounded-[20px] border border-ink-700 bg-ink-850/60">
      {faqs.map((f, i) => (
        <details key={i} className="faq-item group px-5 sm:px-7">
          <summary className="flex min-h-14 items-center justify-between gap-4 py-4 text-left font-semibold text-linen-50">
            <span>{f.q}</span>
            <span className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-400/50 text-gold-400">
              <Icon name="plus" size={16} />
            </span>
          </summary>
          <p className="pb-5 pr-10 text-linen-200">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/** FAQ section with FAQPage JSON-LD. */
export function FaqSection({
  faqs,
  title = (
    <>
      Questions, <em>answered</em>
    </>
  ),
  eyebrow = "FAQ",
  intro,
  schema = true,
}: {
  faqs: Faq[];
  title?: ReactNode;
  eyebrow?: string;
  intro?: ReactNode;
  schema?: boolean;
}) {
  return (
    <Section labelledBy="faq-heading">
      {schema && <JsonLd data={faqSchema(faqs)} />}
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr]">
        <SectionHeading eyebrow={eyebrow} title={title} id="faq-heading" intro={intro} />
        <FaqList faqs={faqs} />
      </div>
    </Section>
  );
}
