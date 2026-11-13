/**
 * SINGLE SOURCE OF TRUTH for business data.
 * Never hard-code contact details in components. Import SITE instead.
 * Search for "TODO(owner)" to find everything the owner must confirm.
 */
export const SITE = {
  name: "Massage Rawalpindi", // EDITABLE brand name (matches massagerawalpindi.com)
  shortName: "Massage Rawalpindi",
  tagline: "Luxury Massage & Spa in Bahria Town Phase 7",
  description:
    "Premium massage center and day spa in Bahria Town Phase 7, Rawalpindi, near Islamabad. Swedish, Thai, deep tissue, hot stone, aromatherapy massage and facials in private rooms.",
  domain: "https://www.massagerawalpindi.com",
  phoneDisplay: "0340 1222270",
  phoneIntl: "+923401222270",
  whatsapp: "923401222270", // used in https://wa.me/923401222270
  email: "info@massagerawalpindi.com",
  facebook: "https://www.facebook.com/profile.php?id=61594246269623",
  instagram: "", // TODO(owner): add Instagram URL when ready
  address: {
    street: "Near KFC", // TODO(owner): add plaza name, floor and shop number, e.g. "Shop 12, 1st Floor, XYZ Plaza, near KFC"
    area: "Bahria Town Phase 7",
    city: "Rawalpindi",
    region: "Punjab",
    postalCode: "46220", // TODO(owner): verify postal code
    country: "PK",
  },
  geo: { lat: 33.5297, lng: 73.1146 }, // approx. Bahria Town Phase 7. TODO(owner): replace with the exact Google Maps pin
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=KFC+Bahria+Town+Phase+7+Rawalpindi", // TODO(owner): replace with Google Business Profile share link
  googleMapsEmbed:
    "https://www.google.com/maps?q=KFC+Bahria+Town+Phase+7+Rawalpindi&output=embed", // TODO(owner): replace with GBP embed src
  googleReviewUrl: "", // TODO(owner): GBP "Ask for reviews" link (https://g.page/r/.../review)
  hours: [{ days: "Mo-Su", opens: "14:00", closes: "03:00" }], // 2 pm to 3 am (closes after midnight)
  hoursDisplay: "Open 7 days · 2:00 pm – 3:00 am", // keep in sync with `hours`
  priceRange: "PKR 3,000 – 6,000",
  languages: ["English", "Urdu"],
  therapistPolicy:
    "All treatments are delivered by trained, certified therapists under a strict professional-conduct policy.", // TODO(owner): describe therapist training and gender policy
  foundedYear: "", // TODO(owner): e.g. "2024", which unlocks "years of experience" copy
  announcement: "Near KFC, Bahria Town Phase 7 · Open 2pm–3am · Same-day bookings on WhatsApp", // TODO(owner): only claim same-day if true
  whatsappTooltip: "Chat with us, usually replies in minutes",

  /** Feature flags drive honest FAQ answers. Set them truthfully. */
  features: {
    privateRooms: true, // TODO(owner): confirm
    showers: true, // TODO(owner): confirm private shower facility
    vipRoom: false, // TODO(owner): set true if a VIP/couple suite exists
    homeService: false, // TODO(owner): set true only if at-home service is offered
    open24h: false, // keep false unless genuinely open 24 hours
    parking: true, // TODO(owner): confirm parking availability near the plaza
    cardPayment: false, // TODO(owner): set true if card or bank transfer is accepted
    sameDay: true, // TODO(owner): confirm same-day bookings
    advancePayment: false, // TODO(owner): set true if a deposit is required
  },
  /** Bump this whenever prices change, since it is shown on /pricing. */
  pricesUpdated: "2026-11-13",
  contentUpdated: "2026-11-13",
} as const;

export const FULL_ADDRESS = `${SITE.address.street}, ${SITE.address.area}, ${SITE.address.city}, ${SITE.address.region}`;
export const telHref = `tel:${SITE.phoneIntl}`;
export const mailHref = `mailto:${SITE.email}`;
export const BUILD_YEAR = 2026;
