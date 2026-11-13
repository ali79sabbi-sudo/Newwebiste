import Link from "next/link";
import { PAGES } from "@/data/pages";
import { PRICE_LIST, PRICES_CONFIRMED, fromPrice, pkr, STANDARD_RATES } from "@/data/pricing";
import { PRICING_FAQS } from "@/data/faqs";
import { IMG } from "@/data/images";
import { SITE } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { daySpaSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Tabs } from "@/components/client/Tabs";
import { PriceMenu } from "@/components/sections/PriceMenu";
import { WhatsAppButton, CallButton } from "@/components/cta/Buttons";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Icon } from "@/components/ui/Icon";

const P = PAGES.pricing;
const desc = P.description.replace("{from}", pkr(fromPrice()));
export const metadata = buildMetadata({ title: P.title, description: desc, path: "/pricing" });

const TABS = ["Massages", "Therapies", "Beauty", "Add-ons"] as const;
const updated = new Date(SITE.pricesUpdated).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function PricingPage() {
  return (
    <>
      <JsonLd data={daySpaSchema({ url: `${SITE.domain}/pricing` })} />
      <Breadcrumbs items={[{ name: "Pricing", path: "/pricing" }]} />
      <PageHero
        eyebrow={`Last updated: ${updated}`}
        title={
          <>
            Massage &amp; Spa Price List: <em>Bahria Town</em> Phase 7
          </>
        }
        image={IMG.amberBottles}
        lead={
          <p>
            One honest rate for every treatment: <strong className="text-gold-300">{pkr(STANDARD_RATES[30])}</strong> for 30 minutes and{" "}
            <strong className="text-gold-300">{pkr(STANDARD_RATES[60])}</strong> for 60 minutes. This is the clearest massage price in Rawalpindi, with nothing hidden.
          </p>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton service="pricing" label="Book on WhatsApp" />
          <CallButton variant="ghost" service="pricing" />
        </div>
      </PageHero>

      {!PRICES_CONFIRMED && process.env.NODE_ENV !== "production" && (
        <p className="container-x rounded-xl border border-clay-400 p-4 text-clay-400">Dev warning: prices are not yet confirmed by the owner.</p>
      )}

      <Section tone="alt" labelledBy="menu">
        <h2 id="menu" className="reveal mb-8">
          The <em>menu</em>
        </h2>
        <div className="card p-5 sm:p-9">
          <Tabs labels={[...TABS]}>
            {TABS.map((t) => (
              <PriceMenu key={t} rows={PRICE_LIST.filter((r) => r.tab === t)} />
            ))}
          </Tabs>
        </div>
        <ul className="mt-8 grid gap-4 text-[0.92rem] text-linen-200 md:grid-cols-3">
          <li className="flex gap-3">
            <Icon name="info" size={18} className="mt-1 shrink-0 text-gold-400" />
            Prices are in Pakistani Rupees (PKR) and apply every day of the week.{/* TODO(owner): note any applicable tax */}
          </li>
          <li className="flex gap-3">
            <Icon name="clock" size={18} className="mt-1 shrink-0 text-gold-400" />
            Want 90 or 120 minutes? Add half-hour blocks at {pkr(STANDARD_RATES[30])} each.
          </li>
          <li className="flex gap-3">
            <Icon name="calendar" size={18} className="mt-1 shrink-0 text-gold-400" />
            Open {SITE.hoursDisplay.replace("Open ", "")}. Please arrive 10 minutes early.
          </li>
        </ul>
      </Section>

      <Section labelledBy="value">
        <div className="prose-noir mx-auto max-w-3xl">
          <h2 id="value">Spa prices in Bahria Town, explained</h2>
          <p>
            Most spas in Rawalpindi and Islamabad price every treatment differently, which makes comparing hard. We chose a
            simpler model: whether you book a <Link href="/services/swedish-massage">Swedish massage</Link>, a{" "}
            <Link href="/services/thai-massage">Thai massage</Link>, a <Link href="/services/hot-stone-massage">hot stone massage</Link> or a{" "}
            <Link href="/services/facial-treatments">facial</Link>, the price depends only on time.
          </p>
          <p>
            Every session includes a short consultation, fresh linen and towels, quality oils and products, and a private
            room. There are no &ldquo;room fees&rdquo; or surprise extras. For longer rituals, see our{" "}
            <Link href="/packages">spa packages and deals</Link>, or give someone a <Link href="/gift-cards">spa gift card</Link>.
          </p>
        </div>
        <div className="mt-14">
          <CtaBand title="Ready to book?" text="Tap any price above, or message us your preferred time." service="pricing" />
        </div>
      </Section>

      <FaqSection faqs={PRICING_FAQS} />
      <FinalCta service="pricing" />
    </>
  );
}
