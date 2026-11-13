import { STANDARD_RATES } from "./pricing";

const H = STANDARD_RATES[30]; // half-hour rate

export type SpaPackage = {
  id: string;
  name: string;
  tagline: string;
  minutes: number;
  includes: string[];
  price: number;
  /** Only set when a GENUINE discount applies, since it shows a struck-through price. */
  originalPrice?: number;
  /** Only set true when it really is the most booked package. */
  mostBooked?: boolean;
  /** Set false to hide a package that isn't currently offered. */
  active: boolean;
  bestFor: string;
};

/** Package prices are the sum of their half-hour blocks at the standard rate. TODO(owner): set any real package discounts. */
export const PACKAGES: SpaPackage[] = [
  {
    id: "quick-reset",
    name: "Quick Reset",
    tagline: "A one-hour fix for desk and screen tension",
    minutes: 60,
    includes: ["30-min back, neck & shoulder massage", "30-min head massage (oil champi)", "Warm towel finish", "Herbal tea or water"],
    price: H * 2,
    active: true,
    bestFor: "Office workers, students, lunch breaks",
  },
  {
    id: "signature-ritual",
    name: "Signature Ritual",
    tagline: "Our most complete relaxation journey",
    minutes: 120,
    includes: ["60-min massage of your choice", "30-min foot reflexology", "30-min head massage", "Aromatherapy oil upgrade", "Herbal tea"],
    price: H * 4,
    mostBooked: false, // TODO(owner): set true only if genuinely the most booked
    active: true,
    bestFor: "Birthdays, anniversaries, a full reset",
  },
  {
    id: "ultimate-noir",
    name: "Ultimate Noir",
    tagline: "Head-to-toe warmth, polish and glow",
    minutes: 150,
    includes: ["60-min hot stone massage", "30-min body scrub & polish", "60-min facial", "Warm towel rituals throughout"],
    price: H * 5,
    active: true,
    bestFor: "Pre-wedding, Eid, special occasions",
  },
  {
    id: "monthly-wellness",
    name: "Monthly Wellness",
    tagline: "Four sessions to build a calmer routine",
    minutes: 240,
    includes: ["4 × 60-min sessions (any treatment)", "Use within 60 days", "Priority WhatsApp booking", "Mix and match treatments"],
    price: H * 8,
    active: true,
    bestFor: "Regular self-care, athletes, busy professionals",
  },
  {
    id: "weekday-happy-hours",
    name: "Weekday Happy Hours",
    tagline: "Quieter weekday slots",
    minutes: 60,
    includes: ["Any 60-min treatment", "Monday–Thursday, 2pm–6pm"],
    price: H * 2,
    active: false, // TODO(owner): enable only if a weekday offer genuinely exists, and set originalPrice
    bestFor: "Flexible schedules",
  },
];

export const ACTIVE_PACKAGES = PACKAGES.filter((p) => p.active);
