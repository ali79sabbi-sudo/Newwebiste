import { REVIEWS } from "@/data/reviews";
import { SITE } from "@/config/site";
import { Icon } from "@/components/ui/Icon";

/** Renders ONLY real reviews from data/reviews.ts. Empty state links to Google/Facebook. No fake ratings. */
export function ReviewsBlock({ limit = 6 }: { limit?: number }) {
  const reviews = REVIEWS.slice(0, limit);
  const gbp = SITE.googleReviewUrl || SITE.googleMapsUrl;
  if (!reviews.length) {
    return (
      <div className="reveal card mx-auto max-w-2xl p-8 text-center sm:p-10">
        <Icon name="heart" size={28} className="mx-auto text-gold-400" />
        <p className="mt-4 font-serif text-[1.6rem] leading-snug text-linen-50">We&apos;re collecting our first reviews.</p>
        <p className="mt-3 text-linen-200">
          Visited us recently? Your honest words help others find a calm, trustworthy spa in Bahria Town.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={gbp} target="_blank" rel="noopener" className="btn btn-primary btn-sm">
            Read & leave Google reviews
          </a>
          <a href={SITE.facebook} target="_blank" rel="noopener" className="btn btn-ghost btn-sm">
            <Icon name="facebook" size={16} /> Facebook
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((r, i) => (
        <figure key={i} className="card reveal p-7">
          <blockquote className="text-linen-200">“{r.text}”</blockquote>
          <figcaption className="mt-4 text-sm text-stone-400">
            <span className="font-semibold text-linen-50">{r.name}</span> · {r.source}
            {r.service ? ` · ${r.service}` : ""}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
