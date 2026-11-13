import { PAGES } from "@/data/pages";
import { REVIEWS_FAQS } from "@/data/faqs";
import { SITE } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { ReviewsBlock } from "@/components/sections/ReviewsBlock";
import { WhatsAppButton } from "@/components/cta/Buttons";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { IMG } from "@/data/images";
import { Icon } from "@/components/ui/Icon";

const P = PAGES.reviews;
export const metadata = buildMetadata({ title: P.title, description: P.description, path: "/reviews" });

export default function ReviewsPage() {
  const gbp = SITE.googleReviewUrl || SITE.googleMapsUrl;
  return (
    <>
      <Breadcrumbs items={[{ name: "Reviews", path: "/reviews" }]} />
      <PageHero
        eyebrow="Honest words only"
        image={IMG.therapistFootMale}
        title={
          <>
            Client Reviews &amp; <em>Experiences</em>
          </>
        }
        lead={<p>We only publish genuine reviews from real guests. No paid reviews, no invented ratings. After your visit, we&apos;d be grateful for your honest feedback.</p>}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={gbp} target="_blank" rel="noopener" className="btn btn-primary">
            <Icon name="star" size={18} /> Leave us a Google review
          </a>
          <a href={SITE.facebook} target="_blank" rel="noopener" className="btn btn-ghost">
            <Icon name="facebook" size={18} /> Facebook reviews
          </a>
        </div>
      </PageHero>
      <Section tone="alt" labelledBy="rv">
        <h2 id="rv" className="sr-only">Guest reviews</h2>
        <ReviewsBlock limit={50} />
        <div className="prose-noir mx-auto mt-16 max-w-3xl">
          <h2>Why we don&apos;t fake reviews</h2>
          <p>
            Many businesses buy reviews or show star ratings they invented. We don&apos;t, because trust is the whole point of a spa. When you
            read a review on this page, it came from a real guest at our massage center in Bahria Town Phase 7, shared with permission.
          </p>
          <p>
            If your experience wasn&apos;t perfect, please tell us directly on WhatsApp. We read every message and take feedback seriously.
          </p>
        </div>
        <div className="mt-12">
          <CtaBand title="Experience it for yourself" text="Book your first session and decide for yourself." service="reviews" />
        </div>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton service="reviews" label="Book your first session" />
        </div>
      </Section>
      <FaqSection faqs={REVIEWS_FAQS} />
      <FinalCta service="reviews" />
    </>
  );
}
