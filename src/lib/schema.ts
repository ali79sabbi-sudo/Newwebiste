import { SITE } from "@/config/site";
import { PRICE_LIST } from "@/data/pricing";
import type { BlogPost, Faq, Service } from "@/data/types";
import { absoluteUrl } from "./seo";

const ORG_ID = `${SITE.domain}/#organization`;
const SPA_ID = `${SITE.domain}/#dayspa`;
const SITE_ID = `${SITE.domain}/#website`;

const DAY_MAP: Record<string, string[]> = {
  "Mo-Su": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  "Mo-Fr": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  "Sa-Su": ["Saturday", "Sunday"],
};

const sameAs = [SITE.facebook, SITE.instagram].filter(Boolean);

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE.domain,
    logo: absoluteUrl("/icon-maskable-512.png"),
    email: SITE.email,
    telephone: SITE.phoneIntl,
    sameAs,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    name: SITE.name,
    url: SITE.domain,
    inLanguage: "en-PK",
    publisher: { "@id": ORG_ID },
  };
}

export function offerCatalog() {
  return {
    "@type": "OfferCatalog",
    name: "Massage & Spa Treatments",
    itemListElement: PRICE_LIST.filter((r) => r.tab !== "Add-ons").map((r) => ({
      "@type": "Offer",
      priceCurrency: "PKR",
      price: Math.min(...Object.values(r.prices)),
      url: absoluteUrl(`/services/${r.slug}`),
      itemOffered: { "@type": "Service", name: r.name, description: r.note },
    })),
  };
}

export function daySpaSchema(opts: { areaServed?: string[]; url?: string } = {}) {
  const area = opts.areaServed ?? ["Bahria Town", "Bahria Town Phase 7", "Bahria Town Phase 8", "Bahria Town Phase 4", "DHA Islamabad", "Rawalpindi", "Islamabad"];
  return {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    "@id": SPA_ID,
    name: SITE.name,
    image: absoluteUrl("/opengraph-image"),
    logo: absoluteUrl("/icon-maskable-512.png"),
    url: opts.url ?? SITE.domain,
    telephone: SITE.phoneIntl,
    email: SITE.email,
    priceRange: SITE.priceRange,
    currenciesAccepted: "PKR",
    paymentAccepted: SITE.features.cardPayment ? "Cash, Credit Card, Bank Transfer" : "Cash",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: `${SITE.address.area}, ${SITE.address.city}`,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    hasMap: SITE.googleMapsUrl,
    openingHoursSpecification: SITE.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: DAY_MAP[h.days] ?? DAY_MAP["Mo-Su"],
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs,
    areaServed: area.map((name) => ({ "@type": "Place", name })),
    knowsLanguage: SITE.languages,
    parentOrganization: { "@id": ORG_ID },
    hasOfferCatalog: offerCatalog(),
  };
}

export function serviceSchema(s: Service) {
  const row = PRICE_LIST.find((r) => r.slug === s.slug);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/services/${s.slug}`)}#service`,
    name: s.name,
    serviceType: s.name,
    description: s.description,
    url: absoluteUrl(`/services/${s.slug}`),
    image: absoluteUrl(s.image.src.src),
    provider: { "@type": "DaySpa", "@id": SPA_ID, name: SITE.name },
    areaServed: ["Bahria Town", "Rawalpindi", "Islamabad", "DHA Islamabad"].map((name) => ({ "@type": "Place", name })),
    offers: Object.entries(row?.prices ?? {}).map(([min, price]) => ({
      "@type": "Offer",
      name: `${s.name}: ${min} minutes`,
      price,
      priceCurrency: "PKR",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/services/${s.slug}`),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function blogPostingSchema(p: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.h1,
    description: p.description,
    image: absoluteUrl(p.image.src.src),
    datePublished: p.datePublished,
    dateModified: p.dateModified,
    author: { "@type": "Organization", "@id": ORG_ID, name: SITE.name },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: absoluteUrl(`/blog/${p.slug}`),
    keywords: p.keyword,
    inLanguage: "en-PK",
  };
}
