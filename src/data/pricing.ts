/**
 * Price list. All prices in PKR.
 * Owner-confirmed: 30 min = PKR 3,000 · 60 min = PKR 6,000.
 * TODO(owner): if any treatment differs, edit it here. Every page, schema and title updates automatically.
 */
export const PRICES_CONFIRMED = true;

export const STANDARD_RATES = { 30: 3000, 60: 6000 } as const;

export type PriceRow = {
  slug: string; // matches service slug (or add-on id)
  name: string;
  note: string;
  tab: "Massages" | "Therapies" | "Beauty" | "Add-ons";
  prices: Partial<Record<30 | 60 | 90 | 120, number>>;
  popular?: boolean;
};

const std = { 30: STANDARD_RATES[30], 60: STANDARD_RATES[60] };

export const PRICE_LIST: PriceRow[] = [
  { slug: "swedish-massage", name: "Swedish Massage", note: "Long, flowing strokes with warm oil", tab: "Massages", prices: std, popular: true },
  { slug: "deep-tissue-massage", name: "Deep Tissue Massage", note: "Firm, slow pressure for stubborn knots", tab: "Massages", prices: std, popular: true },
  { slug: "thai-massage", name: "Thai Massage", note: "Assisted stretching and rhythmic pressure, fully clothed", tab: "Massages", prices: std, popular: true },
  { slug: "hot-stone-massage", name: "Hot Stone Massage", note: "Heated basalt stones and oil", tab: "Massages", prices: std, popular: true },
  { slug: "aromatherapy-massage", name: "Aromatherapy Massage", note: "Choose your essential-oil blend", tab: "Massages", prices: std, popular: true },
  { slug: "balinese-massage", name: "Balinese Massage", note: "Acupressure, palming and gentle stretches", tab: "Massages", prices: std },
  { slug: "full-body-massage", name: "Full Body Massage", note: "Head-to-toe relaxation", tab: "Massages", prices: std },
  { slug: "back-neck-shoulder-massage", name: "Back, Neck & Shoulder", note: "Focused work for desk tension", tab: "Therapies", prices: std },
  { slug: "head-massage", name: "Head Massage / Oil Champi", note: "Warm oil scalp, neck and temple massage", tab: "Therapies", prices: std },
  { slug: "foot-reflexology", name: "Foot Reflexology", note: "Thumb-walking pressure on the feet", tab: "Therapies", prices: std },
  { slug: "sports-massage", name: "Sports Massage", note: "Recovery and mobility for active bodies", tab: "Therapies", prices: std },
  { slug: "cupping-therapy", name: "Cupping Therapy (dry)", note: "Single-use or sterilised cups", tab: "Therapies", prices: std },
  { slug: "facial-treatments", name: "Facial Treatment", note: "Cleanse, exfoliate, mask and hydrate", tab: "Beauty", prices: std },
  { slug: "body-scrub-and-wrap", name: "Body Scrub & Polish", note: "Exfoliation for smooth, glowing skin", tab: "Beauty", prices: std },
  { slug: "addon-extend", name: "Extend any session (+30 min)", note: "Add half an hour to any treatment", tab: "Add-ons", prices: { 30: STANDARD_RATES[30] } },
  { slug: "addon-head", name: "Head massage add-on", note: "Finish your massage with a 30-min champi", tab: "Add-ons", prices: { 30: STANDARD_RATES[30] } },
  { slug: "addon-foot", name: "Foot reflexology add-on", note: "Add 30 min of reflexology", tab: "Add-ons", prices: { 30: STANDARD_RATES[30] } },
];

export const DURATIONS = [30, 60] as const;

export function priceFor(slug: string) {
  return PRICE_LIST.find((p) => p.slug === slug);
}

export function fromPrice(slug?: string): number {
  if (slug) {
    const row = priceFor(slug);
    if (row) return Math.min(...Object.values(row.prices));
  }
  return Math.min(...PRICE_LIST.flatMap((r) => Object.values(r.prices)));
}

export const pkr = (n: number) => `PKR ${n.toLocaleString("en-US")}`;
