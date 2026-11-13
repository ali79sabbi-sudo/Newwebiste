import type { PageCopy } from "./types";

/** Titles are absolute (no template) so every title is ≤ 60 chars, as required by scripts/check-seo.ts. */
export const PAGES = {
  home: {
    title: "Massage & Spa in Bahria Town Phase 7 | Massage Rawalpindi",
    description:
      "Luxury massage center in Bahria Town Phase 7, Rawalpindi. Swedish, Thai, deep tissue & hot stone massage by trained therapists. Book on WhatsApp now.",
    h1: "Luxury Massage & Spa in Bahria Town Phase 7",
    primaryKeyword: "massage center in Bahria Town Phase 7",
    keywords: ["spa in Bahria Town", "massage Rawalpindi", "spa near Islamabad", "best spa in Rawalpindi", "massage center in Bahria Town"],
  },
  about: {
    title: "About Us | Trusted Spa in Bahria Town Rawalpindi",
    description:
      "Meet the team behind Massage Rawalpindi, a calm, hygienic massage center in Bahria Town Phase 7 with trained therapists and private treatment rooms.",
    h1: "About Massage Rawalpindi, Bahria Town",
    primaryKeyword: "spa in Bahria Town Rawalpindi",
  },
  services: {
    title: "Massage Services in Bahria Town & Rawalpindi | 14 Treatments",
    description:
      "Explore 14 massage & spa treatments in Bahria Town Phase 7: Swedish, Thai, deep tissue, hot stone, aromatherapy, cupping, facials and more. Book today.",
    h1: "Massage & Spa Treatments in Bahria Town",
    primaryKeyword: "massage services Bahria Town",
  },
  pricing: {
    title: "Massage Prices in Rawalpindi | Spa Price List Bahria Town",
    description:
      "Transparent massage & spa price list for Bahria Town Phase 7, Rawalpindi. Swedish, Thai, deep tissue, hot stone & more from {from}. Updated monthly.",
    h1: "Massage & Spa Price List: Bahria Town Phase 7",
    primaryKeyword: "massage price in Rawalpindi",
  },
  packages: {
    title: "Spa Packages & Deals in Rawalpindi | Bahria Town Phase 7",
    description:
      "Spa packages in Bahria Town: relaxation rituals, massage + facial combos and monthly wellness plans. Affordable, transparent prices. Book on WhatsApp.",
    h1: "Spa Packages & Deals in Bahria Town",
    primaryKeyword: "massage packages Bahria Town",
  },
  gallery: {
    title: "Spa Gallery | Inside Our Bahria Town Massage Center",
    description:
      "Take a look inside Massage Rawalpindi in Bahria Town Phase 7: private treatment rooms, calming ambience and premium products. Visit us or book today.",
    h1: "Inside Our Spa in Bahria Town",
    primaryKeyword: "spa Bahria Town photos",
  },
  reviews: {
    title: "Client Reviews | Massage Rawalpindi Bahria Town",
    description:
      "Read what clients say about their massage experience at Massage Rawalpindi, Bahria Town Phase 7. Share your own review on Google after your visit.",
    h1: "Client Reviews & Experiences",
    primaryKeyword: "massage center Bahria Town reviews",
  },
  faq: {
    title: "Spa & Massage FAQs | Bahria Town Phase 7 Rawalpindi",
    description:
      "Answers about booking, prices, timings, therapists, hygiene and what to expect at our massage center in Bahria Town Phase 7, Rawalpindi. Read more.",
    h1: "Frequently Asked Questions",
    primaryKeyword: "massage center Bahria Town FAQ",
  },
  contact: {
    title: "Contact Us | Massage Center Bahria Town Phase 7",
    description:
      "Call or WhatsApp 0340 1222270 to book your massage in Bahria Town Phase 7, Rawalpindi. Email info@massagerawalpindi.com. Directions, hours & map.",
    h1: "Contact & Directions",
    primaryKeyword: "massage center Bahria Town Phase 7 contact",
  },
  book: {
    title: "Book a Massage Online | Bahria Town Phase 7 Spa",
    description:
      "Book your massage in Bahria Town Phase 7 in 30 seconds. Pick a treatment, duration and time, then confirm instantly on WhatsApp. No advance payment.",
    h1: "Book Your Massage",
    primaryKeyword: "book massage Bahria Town",
  },
  giftCards: {
    title: "Spa Gift Cards in Rawalpindi | Gift a Massage",
    description:
      "Give the gift of calm. Spa & massage gift cards for birthdays, anniversaries and Eid, redeemable at our Bahria Town Phase 7 spa. Order on WhatsApp.",
    h1: "Spa Gift Cards",
    primaryKeyword: "spa gift card Rawalpindi",
  },
  blog: {
    title: "Wellness Blog | Massage Tips from Our Rawalpindi Spa",
    description:
      "Expert massage and wellness tips from our therapists in Bahria Town, Rawalpindi: benefits, treatment guides, aftercare and choosing the right massage.",
    h1: "The Serenity Journal",
    primaryKeyword: "massage tips blog Rawalpindi",
  },
  privacy: {
    title: "Privacy Policy | Massage Rawalpindi",
    description:
      "How Massage Rawalpindi collects, uses and protects your information when you contact or book with us via our website or WhatsApp. Read our full policy.",
    h1: "Privacy Policy",
    primaryKeyword: "privacy policy",
  },
  terms: {
    title: "Terms & Booking Policy | Massage Rawalpindi",
    description:
      "Booking, cancellation, late arrival, conduct and payment terms for treatments at Massage Rawalpindi, Bahria Town Phase 7, Rawalpindi. Please read first.",
    h1: "Terms & Booking Policy",
    primaryKeyword: "spa booking policy",
  },
} satisfies Record<string, PageCopy>;
