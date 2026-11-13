import { PAGES } from "@/data/pages";
import { SERVICES } from "@/data/services";
import { BOOK_FAQS } from "@/data/faqs";
import { SITE, telHref } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { BookingForm } from "@/components/client/BookingForm";
import { WhatsAppButton, CallButton } from "@/components/cta/Buttons";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { IMG } from "@/data/images";
import { Icon } from "@/components/ui/Icon";

const P = PAGES.book;
export const metadata = buildMetadata({ title: P.title, description: P.description, path: "/book" });

export default function BookPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Book", path: "/book" }]} />
      <PageHero
        eyebrow="30-second booking"
        image={IMG.therapistFootSmile}
        title={
          <>
            Book Your <em>Massage</em>
          </>
        }
        lead={<p>Pick a treatment, duration and time. We&apos;ll turn it into a WhatsApp message, and you just press send. No account, no advance payment.</p>}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton label="Skip the form: WhatsApp us" service="book" />
          <CallButton variant="ghost" service="book" />
        </div>
      </PageHero>
      <Section tone="alt" labelledBy="form">
        <h2 id="form" className="sr-only">
          Booking form
        </h2>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <BookingForm
            services={SERVICES.map((s) => s.name)}
            durations={[30, 60]}
            whatsapp={SITE.whatsapp}
            brand={SITE.name}
            tel={telHref}
          />
          <aside className="space-y-5 text-linen-200">
            {[
              { i: "clock" as const, t: SITE.hoursDisplay },
              { i: "pin" as const, t: "near KFC, Bahria Town Phase 7, Rawalpindi" },
              { i: "shield" as const, t: "Private rooms · fresh linen · trained therapists" },
              { i: "info" as const, t: "Please arrive 10 minutes early. Give 2 hours' notice to reschedule." },
            ].map((x) => (
              <p key={x.t} className="flex gap-3">
                <Icon name={x.i} size={20} className="mt-0.5 shrink-0 text-gold-400" />
                {x.t}
              </p>
            ))}
          </aside>
        </div>
      </Section>
      <FaqSection faqs={BOOK_FAQS} />
      <FinalCta service="book" />
    </>
  );
}
