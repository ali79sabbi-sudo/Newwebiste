# Massage Rawalpindi: website

A static Next.js 16 (App Router), TypeScript and Tailwind v4 site for a massage spa in Bahria Town Phase 7 (near KFC), Rawalpindi.
It has 44 indexable pages, and every page carries JSON-LD, 10–15 unique FAQs and WhatsApp-first CTAs.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build, then runs the SEO check automatically
npm run check:seo    # re-run the SEO check against the last build
npm run lint
```

## Where to edit things

| What | File |
|---|---|
| Name, phone, WhatsApp, email, address, map pin, hours, feature flags (showers, home service, VIP room…) | `src/config/site.ts` |
| Prices (currently 30 min = PKR 3,000 · 60 min = PKR 6,000) | `src/data/pricing.ts` |
| Packages | `src/data/packages.ts` |
| Treatment pages (copy, FAQs, related links) | `src/data/services-a.ts`, `-b.ts`, `-c.ts` |
| Location pages | `src/data/locations.ts` |
| FAQs for other pages + `/faq` | `src/data/faqs.ts` |
| Titles / meta descriptions of static pages | `src/data/pages.ts` |
| Blog posts | `src/content/blog/posts-a.ts`, `posts-b.ts` |
| Real reviews (leave empty until you have genuine ones) | `src/data/reviews.ts` |
| Images | `src/assets/images/` + `src/data/images.ts` (credits in `src/data/image-credits.ts`) |

Price changes flow automatically into every page, title, the schema and `llms.txt`. After editing prices, bump `pricesUpdated` in `site.ts`.
The feature flags in `site.ts` control honest FAQ answers. For example, "Do you have showers?" and "Are you open 24 hours?" answer themselves from those flags.

Search the code for `TODO(owner)` to find every item that still needs real business data.

## Deploy to Vercel

1. Push this folder to a GitHub repo, then go to vercel.com → **Add New Project** and import it. The defaults work as-is.
2. **Settings → Environment Variables**:
   - `NEXT_PUBLIC_GA_ID`: your GA4 Measurement ID (`G-XXXXXXX`)
   - `NEXT_PUBLIC_GSC_VERIFICATION`: the Search Console HTML-tag verification code
3. **Settings → Domains**: add `www.massagerawalpindi.com` (primary) and `massagerawalpindi.com` (redirect to www).
   `next.config.ts` also 301-redirects the bare domain to www.

GA4 events sent: `whatsapp_click`, `call_click`, `directions_click`, `email_click` and `booking_form_submit`, each with `page_path` + `service`.
In GA4, mark `whatsapp_click`, `call_click` and `booking_form_submit` as **key events**.

## QA checklist

- [ ] `npm run build` passes, including the SEO check (unique titles ≤ 60, descriptions 140–160, one H1, word counts, internal links, JSON-LD)
- [ ] Validate Home, one service, one location, `/faq` and one blog post in Google's Rich Results Test and validator.schema.org
- [ ] Lighthouse mobile on the live URL (Home, a service page, `/pricing`, a blog post)
- [ ] Tap-test WhatsApp, Call and Directions on a real phone

## Off-site checklist (as important as the site)

1. Create or verify a **Google Business Profile** with exactly the same name, address and phone (NAP) as the site. Use the category "Day spa" / "Massage spa", and add real photos, hours, services with prices and the website URL. Mention "Phase 4, Civic Center" in the description and posts.
2. Ask every happy client for a Google review. Put a QR code at reception that links to the review URL, and add that URL to `googleReviewUrl` in `site.ts`.
3. Add the site to **Google Search Console** and submit `https://www.massagerawalpindi.com/sitemap.xml`. Request indexing for Home, Pricing and the top service pages.
4. Keep NAP identical on Facebook, Instagram and Pakistani directories.
5. Publish 2 new blog posts per month and review prices monthly.
6. **Replace stock photos with real photos of the spa** as soon as possible. Real photos convert better and help the Google Business Profile.
7. Verify every location page's directions and travel times, and delete any area you don't genuinely serve. Fake location pages are treated as doorway pages.
