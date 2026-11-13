import type { LocationPage } from "./types";
import { IMG } from "./images";
import { STANDARD_RATES, pkr } from "./pricing";
import { SITE } from "@/config/site";

const P30 = pkr(STANDARD_RATES[30]);
const P60 = pkr(STANDARD_RATES[60]);
const HOURS = "11:00 am to 11:00 pm, seven days a week"; // TODO(owner): keep in sync with SITE.hours

/**
 * TODO(owner): verify EVERY route, landmark and travel time below against the real spa location.
 * Delete any page for an area you do not genuinely serve. Google treats fake location pages as doorway pages.
 */
export const LOCATIONS: LocationPage[] = [
  /* ───────── Bahria Town Phase 7 (HOME LOCATION, near KFC) ───────── */
  {
    slug: "bahria-town-phase-7",
    name: "Bahria Town Phase 7",
    h1: "Massage Center in Bahria Town Phase 7, Near KFC",
    title: "Massage Center Bahria Town Phase 7 | Spa Near KFC",
    description:
      "Massage center in Bahria Town Phase 7, Rawalpindi, near KFC. Swedish, Thai, deep tissue and hot stone massage in private rooms. Book on WhatsApp now.",
    primaryKeyword: "massage center Bahria Town Phase 7",
    keywords: ["spa Bahria Town Phase 7", "massage near KFC Bahria Town", "Square Commercial Bahria Phase 7 spa", "massage center near me Bahria Town", "best massage center in Bahria Town"],
    eyebrow: "OUR HOME · NEAR KFC, PHASE 7",
    heroLine: "A calm, private spa right in Phase 7. Look for KFC and you've found us.",
    image: IMG.roomEmptyBlinds,
    intro: [
      `${SITE.name} is located in Bahria Town Phase 7, Rawalpindi, near KFC. KFC is one of the easiest landmarks in Phase 7 to find, which makes us easy to reach from anywhere in Bahria Town, DHA Phase 2 and the Islamabad Expressway. Square Commercial and Spring North are just a few minutes away.`,
      "Phase 7 is one of the busiest parts of Bahria Town. Its offices, restaurants, apartments and shops are full from morning to late evening, which is exactly why a quiet hour matters here. Behind our door the noise drops away. You get soft lighting, fresh linen, warm oil and a trained therapist who listens before they begin.",
      "Many guests combine a visit with dinner or errands nearby. They book a 30-minute neck and shoulder reset after work, a foot massage after shopping in Square Commercial, or a full hour of hot stone therapy on the weekend. We're open until 11pm, so evening slots are easy.",
    ],
    directions: [
      {
        from: "Within Phase 7",
        steps: [
          "Head towards KFC, Bahria Town Phase 7. It's our landmark.",
          "Our spa is in the commercial block near KFC. We send the exact pin and entrance on WhatsApp when you book.",
          "Park nearby, and our team will welcome you at reception.",
        ],
      },
      {
        from: "From Square Commercial / Spring North",
        steps: [
          "Take the main Phase 7 boulevard towards KFC.",
          "The drive is just a few minutes.",
          "Message us on arrival if you need help finding the entrance.",
        ],
      },
    ],
    travel: [
      { label: "Phase 7 residential", time: "2–5 min" },
      { label: "Square Commercial / Spring North", time: "3–6 min" },
      { label: "Phase 8", time: "5–10 min" },
      { label: "DHA Phase 2", time: "8–12 min" },
    ],
    landmarks: ["KFC, Bahria Town Phase 7", "Square Commercial", "Spring North", "Phase 7 main boulevard"],
    why: {
      h2: "Why Phase 7 chooses our massage center",
      body: [
        "**Easy to find:** right near KFC, a landmark everyone in Bahria knows.",
        "**Private rooms, not curtained cubicles:** every treatment takes place behind a closed door with fresh linen.",
        "**Transparent pricing:** " + `${P30} for 30 minutes and ${P60} for 60 minutes, published openly on our [price list](/pricing).`,
        "**Open late:** until 11pm, perfect after work in Phase 7's offices.",
        "**Strictly professional:** therapeutic treatments only, under a clear conduct policy.",
      ],
    },
    extra: {
      h2: "The best massage center in Bahria Town Phase 7 for everyday wellness",
      body: [
        "Regulars visit every two to four weeks. Office workers book a [back, neck and shoulder massage](/services/back-neck-shoulder-massage), parents book a rare quiet hour with a [Swedish massage](/services/swedish-massage), and gym-goers book [deep tissue](/services/deep-tissue-massage) or [sports massage](/services/sports-massage).",
        "We're also a popular gift choice. A [spa gift card](/gift-cards) is an easy, thoughtful present for a friend, parent or colleague in Phase 7.",
        `We're open ${HOURS}. Send us a WhatsApp message and we'll confirm the nearest available slot, often on the same day.`,
      ],
    },
    areaServed: ["Bahria Town Phase 7", "Square Commercial Bahria Town", "Spring North Bahria Town", "Bahria Town Phase 8", "DHA Phase 2"],
    faqs: [
      { q: "Where exactly is your massage center in Bahria Town Phase 7?", a: "We're in Bahria Town Phase 7, Rawalpindi, near KFC. We share the exact Google Maps pin and entrance on WhatsApp when you book." },
      { q: "Is there a massage center near KFC Bahria Town Phase 7?", a: `Yes, ${SITE.name} is located near KFC in Phase 7. Look for KFC and message us when you arrive.` },
      { q: "Is there parking near your Phase 7 spa?", a: "Yes, parking is available around the commercial block near KFC. Evenings can be busy, so allow a couple of extra minutes." },
      { q: "What are your opening hours?", a: `We are open ${HOURS}. Last bookings are usually 60 minutes before closing.` },
      { q: "Is your Phase 7 spa open now?", a: "Most days, yes. We're open from 11am to 11pm. Send a WhatsApp message to check today's free slots in real time." },
      { q: "How much does a massage cost in Bahria Town Phase 7?", a: `Our standard rate is ${P30} for 30 minutes and ${P60} for 60 minutes, for any treatment.` },
      { q: "How far are you from Square Commercial?", a: "Just a few minutes by car. Many guests walk over after shopping or dinner." },
      { q: "Do you have private rooms?", a: "Yes. All treatments take place in private rooms with a closed door, fresh linens and soft lighting." },
      { q: "Is this a professional spa?", a: "Yes. We offer strictly therapeutic, professional massage and beauty treatments, under a clear conduct policy." },
      { q: "Can I walk in without booking?", a: "Walk-ins are welcome when a therapist is free, but booking on WhatsApp guarantees your slot." },
      { q: "Which massage is most popular in Phase 7?", a: "Back-neck-shoulder, deep tissue and full body massage are the most booked, followed by hot stone in winter." },
      { q: "Can I pay by card?", a: SITE.features.cardPayment ? "Yes, we accept cash, cards and bank transfer." : "Cash is accepted at reception. Please ask on WhatsApp about bank transfer options." },
    ],
  },

  /* ───────── Bahria Town Phase 8 ───────── */
  {
    slug: "bahria-town-phase-8",
    name: "Bahria Town Phase 8",
    h1: "Massage & Spa for Bahria Town Phase 8 Residents",
    title: "Massage Center Bahria Town Phase 8 | Spa in Phase 7",
    description:
      "Massage for Bahria Town Phase 8 residents at our calm spa in Phase 7, near KFC, just minutes away. Swedish, deep tissue, hot stone and Thai. Book on WhatsApp.",
    primaryKeyword: "massage center Bahria Town Phase 8",
    keywords: ["spa Bahria Town Phase 8", "massage near Bahria Phase 8", "Bahria Town Phase 8 spa", "affordable massage center Bahria Town"],
    eyebrow: "FOR PHASE 8 RESIDENTS",
    heroLine: "Your neighbourhood spa is next door in Phase 7: an hour of warm oil, soft linen and silence.",
    image: IMG.roomWindowTherapy,
    intro: [
      "Bahria Town Phase 8 has grown into one of the largest residential parts of Bahria, home to families, young professionals and whole new neighbourhoods. Until recently, finding a spa you actually trust nearby wasn't easy.",
      `${SITE.name} is in Phase 7, near KFC, which is right next door for most Phase 8 residents. The drive is usually 5–10 minutes. Once you arrive, you're in a quiet, private room with a trained therapist, fresh linen and soft light. No rush, no noise, no surprises on price.`,
      "Phase 8 families often book around the weekend: a [hot stone massage](/services/hot-stone-massage) on a Saturday afternoon, or a [Signature Ritual package](/packages) to celebrate something special.",
    ],
    directions: [
      {
        from: "From Phase 8",
        steps: [
          "Head towards Phase 7 on the main Bahria boulevard.",
          "Follow the road to KFC, Phase 7. That's our landmark.",
          "We'll share the exact pin and parking tips on WhatsApp.",
        ],
      },
    ],
    travel: [
      { label: "Phase 8 (central)", time: "5–10 min" },
      { label: "Phase 8 extension", time: "10–15 min" },
      { label: "Weekend afternoon", time: "~8 min" },
      { label: "Late evening", time: "~6 min" },
    ],
    landmarks: ["Phase 8 main boulevard", "Route into Phase 7", "KFC, Bahria Town Phase 7"],
    why: {
      h2: "Why Phase 8 families choose us",
      body: [
        "**Trust:** a professional, therapeutic spa with a clear conduct policy.",
        "**Close by:** just across in Phase 7, so there's no long drive.",
        "**Affordable, honest prices:** " + `${P30} for 30 minutes and ${P60} for 60 minutes. See the full [price list](/pricing).`,
        "**Flexible timing:** open 11am to 11pm, seven days a week.",
      ],
    },
    extra: {
      h2: "Make the most of your visit from Phase 8",
      body: [
        "Because we're so close, many Phase 8 guests make it a monthly habit. For a longer visit, combine a 60-minute massage with a 30-minute add-on like [head massage](/services/head-massage) or [foot reflexology](/services/foot-reflexology). It's the most relaxing way to spend 90 minutes in Bahria Town.",
        "Planning something for a parent or partner? Our [gift cards](/gift-cards) can be ordered on WhatsApp and used for any treatment.",
      ],
    },
    areaServed: ["Bahria Town Phase 8", "Bahria Town Phase 8 Extension"],
    faqs: [
      { q: "Is there a good massage center near Bahria Town Phase 8?", a: "Yes. Our spa in Phase 7, near KFC, is only 5–10 minutes from most of Phase 8 and is popular with Phase 8 residents." },
      { q: "How do I get from Phase 8 to your spa?", a: "Drive towards Phase 7 on the main boulevard and head to KFC. We'll send you the exact pin on WhatsApp." },
      { q: "Do you offer home massage in Phase 8?", a: SITE.features.homeService ? "Yes, in selected areas. Ask on WhatsApp for availability." : "We currently offer treatments at our spa only, where we can guarantee hygiene, privacy and proper equipment." },
      { q: "What is the price of a massage for Phase 8 residents?", a: `${P30} for 30 minutes and ${P60} for 60 minutes, for any treatment.` },
      { q: "Which treatment is best for a first visit?", a: "Swedish massage is the gentlest introduction. Full body massage is a great all-rounder." },
      { q: "Can I book for my parents?", a: "Yes. Message us their preferred time, and we can adapt pressure and positioning for older guests." },
      { q: "Is the spa open on weekends?", a: "Yes, we're open seven days a week from 11am to 11pm." },
      { q: "Do you offer packages?", a: "Yes. See our packages page for combinations like the Signature Ritual and Ultimate Noir." },
      { q: "Is parking available?", a: "Yes, parking is available near KFC, Phase 7." },
      { q: "How do I book?", a: "Tap the WhatsApp button, send your preferred time, and we'll confirm quickly." },
    ],
  },

  /* ───────── Bahria Town Phase 4 / Civic Center ───────── */
  {
    slug: "bahria-town-phase-4",
    name: "Bahria Town Phase 4",
    h1: "Massage Spa for Bahria Town Phase 4 & Civic Center",
    title: "Massage Near Bahria Town Phase 4 & Civic Center | Spa",
    description:
      "Live or work near Civic Center, Bahria Town Phase 4? Our private massage spa in Phase 7, near KFC, is a short drive away. Trained therapists. Book on WhatsApp.",
    primaryKeyword: "massage center Bahria Town Phase 4",
    keywords: ["Civic Center Bahria Town massage", "spa in Bahria Town Phase 4", "massage near Civic Center Bahria", "Bahria Town Phase 4 spa"],
    eyebrow: "FOR PHASE 4 · CIVIC CENTER",
    heroLine: "From Civic Center to our quiet Phase 7 rooms in a short, easy drive.",
    image: IMG.roomBrightStudio,
    intro: [
      "Bahria Town Phase 4 and its Civic Center are among the oldest and busiest parts of Bahria, packed with banks, cafés, shops and offices. People here work long hours and spend plenty of time in traffic. A good massage is a smart antidote.",
      `${SITE.name} is in Phase 7, near KFC, about 10–15 minutes from Civic Center. We chose to do one spa properly: dedicated treatment rooms, trained therapists, fresh linen for every guest and clear pricing. That's why Phase 4 residents make the short trip to us rather than settling for a rushed massage nearby.`,
      "Plan an after-work [back, neck and shoulder massage](/services/back-neck-shoulder-massage) or a weekend [hot stone ritual](/services/hot-stone-massage). We're open late, so you can come once the boulevard traffic has calmed down.",
    ],
    directions: [
      {
        from: "From Civic Center / Phase 4",
        steps: [
          "Take the main Bahria boulevard towards Phases 6 and 7.",
          "Continue into Phase 7 and head to KFC, our landmark.",
          "Message us on WhatsApp and we'll send the exact pin and entrance.",
        ],
      },
      {
        from: "From Phases 3, 5 & 6",
        steps: [
          "Join the main boulevard towards Phase 7.",
          "Follow signs for Phase 7 and head to KFC.",
          "Most guests arrive within 10–15 minutes.",
        ],
      },
    ],
    travel: [
      { label: "Civic Center", time: "10–15 min" },
      { label: "Phase 3 / 5", time: "12–18 min" },
      { label: "Phase 6", time: "8–12 min" },
      { label: "Late evening", time: "~10 min" },
    ],
    landmarks: ["Civic Center, Phase 4", "Main Bahria boulevard", "Route via Phase 6", "KFC, Bahria Town Phase 7"],
    why: {
      h2: "Why Phase 4 guests make the short trip",
      body: [
        "**A real spa, not a side room:** dedicated, private treatment rooms built for massage.",
        "**Late hours:** open until 11pm, perfect after work at Civic Center.",
        "**Simple pricing:** " + `${P30} for 30 minutes and ${P60} for 60 minutes, for every treatment.`,
        "**Quick WhatsApp booking:** get a confirmed slot before you leave the office.",
      ],
    },
    extra: {
      h2: "Popular treatments with Phase 4 guests",
      body: [
        "Civic Center's office crowd tends to book the [back, neck and shoulder massage](/services/back-neck-shoulder-massage) and [deep tissue massage](/services/deep-tissue-massage). Residents often prefer [aromatherapy](/services/aromatherapy-massage) or a [full body massage](/services/full-body-massage) for a slow, relaxing evening.",
        "If you're booking for two, message us and we'll arrange back-to-back or parallel slots where available.",
      ],
    },
    areaServed: ["Bahria Town Phase 4", "Civic Center Bahria Town", "Bahria Town Phase 3", "Bahria Town Phase 5", "Bahria Town Phase 6"],
    faqs: [
      { q: "Is there a massage center near Civic Center, Bahria Town Phase 4?", a: "Our spa is in Phase 7, near KFC, about 10–15 minutes from Civic Center. Many Phase 4 residents prefer our private rooms and transparent pricing." },
      { q: "How long does it take from Civic Center to your spa?", a: "Usually 10–15 minutes by car, depending on boulevard traffic." },
      { q: "Do you offer late-evening massage for Phase 4 residents?", a: "We're open until 11pm daily. Message us to book an evening slot after work." },
      { q: "How much is a massage near Bahria Phase 4?", a: `${P30} for 30 minutes and ${P60} for 60 minutes.` },
      { q: "Can I book a quick after-work massage?", a: "Yes. A 30-minute back, neck and shoulder massage is perfect after a day at Civic Center." },
      { q: "Is your spa hygienic?", a: "Yes. Fresh linen for every guest, sanitised tools, clean rooms and strict hygiene standards." },
      { q: "Is the massage professional?", a: "Absolutely. We provide strictly therapeutic treatments under a clear professional-conduct policy." },
      { q: "Do you have private rooms?", a: "Yes, every treatment takes place in a private room." },
      { q: "Can I get a facial near Phase 4?", a: "Yes. Facials are available at our Phase 7 spa, a short drive from Civic Center." },
      { q: "How do I get directions?", a: "Tap 'Directions' on this page or message us on WhatsApp for the exact pin." },
    ],
  },

  /* ───────── Bahria Town Rawalpindi (all phases) ───────── */
  {
    slug: "bahria-town-rawalpindi",
    name: "Bahria Town Rawalpindi",
    h1: "Spa in Bahria Town Rawalpindi (Phase 1–8)",
    title: "Spa in Bahria Town Rawalpindi | Phases 1–8 Massage Center",
    description:
      "Serving Bahria Town Phases 1–8: a premium massage & spa in Phase 7 near KFC, minutes from your home. Private rooms, trained therapists. Book on WhatsApp today.",
    primaryKeyword: "spa in Bahria Town Rawalpindi",
    keywords: ["Bahria Town massage center", "massage center Bahria Town Rawalpindi", "luxury spa Bahria Town Rawalpindi", "spa and massage center Bahria Town"],
    eyebrow: "SERVING ALL BAHRIA PHASES",
    heroLine: "One trusted spa for the whole of Bahria Town, near KFC in Phase 7.",
    image: IMG.loungePool,
    intro: [
      "Bahria Town Rawalpindi is a city within a city, stretching from Phase 1 near DHA Phase 1 to Phases 7 and 8 along the GT Road side. Finding a spa that is clean, professional and genuinely relaxing shouldn't depend on which phase you live in.",
      `${SITE.name} is in Bahria Town Phase 7, near KFC, one of the most recognisable landmarks in Bahria. Phase 7 and 8 residents are minutes away, Phase 6 is a short hop, and guests from Phases 1–5 use the main boulevard to reach us.`,
      "We offer 14 treatments across massage, therapy and beauty, from [Swedish](/services/swedish-massage) and [Thai](/services/thai-massage) to [facials](/services/facial-treatments) and [body polishing](/services/body-scrub-and-wrap). Every treatment happens in a private room with a trained therapist.",
    ],
    directions: [
      {
        from: "From Phases 1–6",
        steps: [
          "Take the main Bahria boulevard towards Phase 7.",
          "Head to KFC, Bahria Town Phase 7.",
          "We'll send you the exact pin and entrance details on WhatsApp.",
        ],
      },
      {
        from: "From Phase 8",
        steps: [
          "Drive into Phase 7 on the main boulevard.",
          "Continue to KFC.",
          "The drive usually takes 5–10 minutes.",
        ],
      },
    ],
    travel: [
      { label: "Phases 7–8", time: "2–10 min" },
      { label: "Phase 6", time: "8–12 min" },
      { label: "Phases 3–5", time: "12–18 min" },
      { label: "Phases 1–2", time: "15–22 min" },
    ],
    landmarks: ["KFC, Phase 7", "Square Commercial & Spring North", "Main Bahria boulevard", "Civic Center, Phase 4"],
    why: {
      h2: "Why Bahria Town residents trust our spa",
      body: [
        "**Easy landmark:** near KFC in Phase 7, so everyone knows where it is.",
        "**Professional standards:** fresh linens, sanitised tools, private rooms and a clear conduct policy.",
        "**One price, every treatment:** " + `${P30} for 30 minutes, ${P60} for 60 minutes.`,
        "**WhatsApp booking:** message us and get a confirmed slot within minutes.",
      ],
    },
    extra: {
      h2: "A luxury spa experience across Bahria Town",
      body: [
        "We designed our spa as a quiet escape from Bahria's busy boulevards: warm lighting, soft music, linen textures and calm, unhurried service. It's a place to switch off, not just a place to get a massage.",
        "Popular choices among Bahria Town residents include [full body massage](/services/full-body-massage) for complete relaxation, [hot stone massage](/services/hot-stone-massage) in winter, and our [spa packages](/packages) for special occasions.",
        "See also our dedicated pages for [Bahria Town Phase 7](/locations/bahria-town-phase-7), [Phase 8](/locations/bahria-town-phase-8) and [Phase 4 & Civic Center](/locations/bahria-town-phase-4).",
      ],
    },
    areaServed: ["Bahria Town Rawalpindi", "Bahria Town Phase 1", "Bahria Town Phase 2", "Bahria Town Phase 3", "Bahria Town Phase 4", "Bahria Town Phase 5", "Bahria Town Phase 6", "Bahria Town Phase 7", "Bahria Town Phase 8"],
    faqs: [
      { q: "Which Bahria Town phases do you serve?", a: "All of them. Our spa is in Phase 7 near KFC, within a short drive of Phases 1–8." },
      { q: "Is this the best spa in Bahria Town Rawalpindi?", a: "We'll let our guests decide, but we focus on what matters: hygiene, trained therapists, private rooms and transparent prices." },
      { q: "How far is your spa from Bahria Town Phase 1?", a: "Usually 15–22 minutes by car via the main Bahria boulevard, depending on traffic." },
      { q: "What treatments do you offer?", a: "14 treatments, including Swedish, deep tissue, Thai, hot stone, aromatherapy, Balinese, sports massage, cupping, reflexology, head massage, facials and body scrubs." },
      { q: "Do you offer couples or VIP rooms?", a: SITE.features.vipRoom ? "Yes, we have a VIP suite. Ask on WhatsApp for availability." : "Our rooms are private single-treatment rooms. Ask on WhatsApp if you'd like back-to-back bookings for two people." },
      { q: "Are your therapists trained?", a: "Yes. All therapists are trained in the treatments they provide and follow strict hygiene and conduct standards." },
      { q: "How much is a massage in Bahria Town Rawalpindi?", a: `${P30} for 30 minutes and ${P60} for 60 minutes at our Phase 7 spa.` },
      { q: "Do you offer at-home massage in Bahria Town?", a: SITE.features.homeService ? "Yes, we offer at-home service in selected Bahria phases. Ask on WhatsApp." : "Currently we offer in-spa treatments only, so you get a properly equipped, hygienic private room." },
      { q: "Are you open on Sundays and public holidays?", a: "We're open seven days a week. Holiday hours may vary, so check on WhatsApp." },
      { q: "Can I buy a gift card for someone in Bahria Town?", a: "Yes. Order spa gift cards on WhatsApp for birthdays, anniversaries and Eid." },
      { q: "Do you have showers?", a: SITE.features.showers ? "Yes, shower facilities are available. Please ask when booking." : "We remove excess oil with warm towels. Please ask about shower facilities when booking." },
    ],
  },

  /* ───────── DHA Islamabad ───────── */
  {
    slug: "dha-islamabad",
    name: "DHA Islamabad",
    h1: "Massage Spa Near DHA Islamabad",
    title: "Massage Near DHA Islamabad | Spa in Bahria Town Phase 7",
    description:
      "Live in DHA Phase 1 or 2? Our luxury spa in Bahria Town Phase 7, near KFC, is a short drive away. Thai, Swedish and hot stone massage. Book your slot today.",
    primaryKeyword: "massage near DHA Islamabad",
    keywords: ["spa DHA Islamabad", "massage DHA Phase 2", "massage DHA Phase 1", "spa near DHA"],
    eyebrow: "FOR DHA PHASE 1 & 2",
    heroLine: "A premium spa next door to DHA Phase 2, just across in Bahria Town Phase 7.",
    image: IMG.hotStonesAlt,
    intro: [
      "DHA Islamabad and Bahria Town sit side by side. For DHA Phase 2 residents in particular, our spa in Bahria Town Phase 7 is closer than almost any option in central Islamabad. There's no Expressway crawl and no hunt for parking in a crowded sector, just a short drive to a calm, private treatment room near KFC.",
      "DHA residents expect high standards, and we're happy to meet them. Our rooms are quiet and immaculate, linen is fresh for every guest, therapists are trained, and every price is published openly. All treatments are strictly therapeutic and professional.",
      "Choose a [Thai massage](/services/thai-massage) to loosen up after a week at the desk, a [hot stone massage](/services/hot-stone-massage) on a cold evening, or a [facial](/services/facial-treatments) before an event.",
    ],
    directions: [
      {
        from: "From DHA Phase 2",
        steps: [
          "Head towards Bahria Town Phase 7 on the connecting roads.",
          "Continue to KFC, Phase 7.",
          "We'll send the exact pin when you book.",
        ],
      },
      {
        from: "From DHA Phase 1",
        steps: [
          "Head into Bahria Town and take the main boulevard towards Phase 7.",
          "Continue to KFC, Phase 7.",
          "Allow a little extra time during evening rush hour.",
        ],
      },
    ],
    travel: [
      { label: "DHA Phase 2", time: "8–12 min" },
      { label: "DHA Phase 2 (evening)", time: "12–18 min" },
      { label: "DHA Phase 1", time: "18–25 min" },
      { label: "Defence Avenue", time: "18–25 min" },
    ],
    landmarks: ["DHA Phase 2 / Bahria Town Phase 7 link", "KFC, Bahria Town Phase 7", "Square Commercial"],
    why: {
      h2: "Why DHA residents book with us",
      body: [
        "**Closer than central Islamabad:** skip the Expressway and the sector traffic.",
        "**High standards:** private rooms, fresh linen and trained therapists.",
        "**Honest pricing:** " + `${P30} for 30 minutes and ${P60} for 60 minutes.`,
        "**Open late:** until 11pm, so you can book after work or after dinner.",
      ],
    },
    extra: {
      h2: "Popular with DHA guests",
      body: [
        "DHA guests most often book [deep tissue massage](/services/deep-tissue-massage) and [Swedish massage](/services/swedish-massage), with [hot stone](/services/hot-stone-massage) a winter favourite. Professionals also love the 30-minute [back, neck & shoulder massage](/services/back-neck-shoulder-massage).",
        "For gifts, our [spa gift cards](/gift-cards) are a thoughtful option for family and friends in DHA.",
      ],
    },
    areaServed: ["DHA Islamabad", "DHA Phase 1", "DHA Phase 2"],
    faqs: [
      { q: "Is there a good massage spa near DHA Islamabad?", a: "Yes. Our spa in Bahria Town Phase 7, near KFC, is around 8–12 minutes from DHA Phase 2 and offers private rooms, trained therapists and transparent pricing." },
      { q: "How far is your spa from DHA Phase 1?", a: "Usually 18–25 minutes by car through Bahria Town, depending on traffic." },
      { q: "Do you offer Thai massage near DHA?", a: `Yes. Thai massage is ${P60} for 60 minutes at our Bahria Town Phase 7 spa.` },
      { q: "What's the price of a massage near DHA Islamabad?", a: `${P30} for 30 minutes and ${P60} for 60 minutes, for any treatment.` },
      { q: "Is the spa suitable for professionals and families?", a: "Yes. We are a strictly professional, therapeutic spa trusted by families across DHA and Bahria Town." },
      { q: "Can I book an evening massage after work?", a: "Yes, we're open until 11pm. Message us on WhatsApp to reserve a slot." },
      { q: "Do you offer home massage in DHA?", a: SITE.features.homeService ? "Yes, in selected areas. Ask on WhatsApp." : "Treatments are currently in-spa only, so we can guarantee hygiene and privacy." },
      { q: "Is parking easy?", a: "Yes, parking is available near KFC, Phase 7." },
      { q: "Do you do facials for DHA residents?", a: "Yes. Facials and body scrubs are available alongside massage." },
      { q: "How do I get directions from DHA?", a: "Tap 'Directions' on this page or WhatsApp us for the exact pin." },
    ],
  },

  /* ───────── Rawalpindi ───────── */
  {
    slug: "rawalpindi",
    name: "Rawalpindi",
    h1: "Best Spa & Massage Center in Rawalpindi",
    title: "Best Spa in Rawalpindi | Massage Center Bahria Town",
    description:
      "A calm, hygienic spa in Rawalpindi offering 14 massage & beauty treatments at fair prices, located in Bahria Town Phase 7 near KFC. Book on WhatsApp now.",
    primaryKeyword: "spa in Rawalpindi",
    keywords: ["massage center Rawalpindi", "best spa in Rawalpindi", "massage Rawalpindi", "hygienic massage center Rawalpindi"],
    eyebrow: "RAWALPINDI'S CALM CORNER",
    heroLine: "Fourteen treatments, one quiet spa, in a city that rarely slows down.",
    image: IMG.roomLuxeSuite,
    intro: [
      "Rawalpindi is energetic, crowded and full of life, which is exactly why a quiet hour matters. Whether you live in Saddar, Satellite Town, Chaklala, Gulraiz, Adiala Road or along Murree Road, finding a clean, trustworthy spa in Rawalpindi can feel harder than it should be.",
      `${SITE.name} is a professional massage center in Bahria Town Phase 7, Rawalpindi, near KFC. We offer 14 treatments, including [Swedish](/services/swedish-massage), [deep tissue](/services/deep-tissue-massage), [Thai](/services/thai-massage), [hot stone](/services/hot-stone-massage), [cupping](/services/cupping-therapy), facials and more, all in private rooms with fresh linen and trained therapists.`,
      "Because Bahria Town is on the edge of the city, the arrival is calm. Parking is straightforward, the surroundings are quiet, and KFC makes us easy to find.",
    ],
    directions: [
      {
        from: "From Saddar & central Rawalpindi",
        steps: [
          "Head towards the Islamabad Expressway or GT Road, depending on your area.",
          "Follow signs for Bahria Town / DHA Phase 2 and enter towards Phase 7.",
          "Head to KFC, Phase 7. We'll share the exact pin on WhatsApp.",
        ],
      },
      {
        from: "From Adiala Road / Chaklala",
        steps: [
          "Use the most direct route towards the Expressway / Bahria Town.",
          "Enter Bahria Town and follow signs to Phase 7.",
          "Allow extra time during peak hours.",
        ],
      },
    ],
    travel: [
      { label: "Saddar", time: "30–40 min" },
      { label: "Chaklala / Gulraiz", time: "20–30 min" },
      { label: "Satellite Town", time: "35–45 min" },
      { label: "Adiala Road", time: "30–40 min" },
    ],
    landmarks: ["Islamabad Expressway", "GT Road", "KFC, Bahria Town Phase 7"],
    why: {
      h2: "What makes us one of Rawalpindi's most trusted spas",
      body: [
        "**Hygiene first:** fresh linen for every guest, sanitised tools and clean, private rooms.",
        "**Trained therapists:** techniques done properly and safely.",
        "**Transparent, affordable pricing:** " + `${P30} for 30 minutes and ${P60} for 60 minutes.`,
        "**Strictly professional:** therapeutic services only, with a clear conduct policy.",
        "**Easy WhatsApp booking:** confirm your slot in minutes.",
      ],
    },
    extra: {
      h2: "Massage center in Rawalpindi: how to choose well",
      body: [
        "When choosing a massage center in Rawalpindi, look for published prices, private rooms, clean linens, a clear professional policy and therapists who ask about your health before starting. We've written a detailed guide: [how to choose the best massage center](/blog/best-massage-center-bahria-town-guide).",
        "New to massage? Read [what to expect at your first spa visit](/blog/first-spa-visit-what-to-expect), then start with a [Swedish massage](/services/swedish-massage) or [full body massage](/services/full-body-massage).",
      ],
    },
    areaServed: ["Rawalpindi", "Saddar Rawalpindi", "Chaklala", "Gulraiz", "Satellite Town", "Adiala Road"],
    faqs: [
      { q: "Which is the best spa in Rawalpindi?", a: "The best spa is the one that's clean, professional and transparent. We focus on exactly that: private rooms, trained therapists, fresh linen and published prices, in Bahria Town Phase 7." },
      { q: "How much does a massage cost in Rawalpindi?", a: `At our spa, every treatment is ${P30} for 30 minutes and ${P60} for 60 minutes.` },
      { q: "Is your massage center in Rawalpindi hygienic?", a: "Yes. Fresh linen for every guest, sanitised tools and rooms cleaned between sessions." },
      { q: "Where are you located in Rawalpindi?", a: "Bahria Town Phase 7, near KFC, Rawalpindi. We share the exact pin on WhatsApp." },
      { q: "Are you open 24 hours?", a: SITE.features.open24h ? "Yes, we're open 24 hours." : "No. We're open 11am to 11pm daily, and late-evening slots are available." },
      { q: "Do you offer cupping therapy in Rawalpindi?", a: "Yes, dry cupping only, with single-use or sterilised cups." },
      { q: "Is this a professional spa?", a: "Yes. We offer strictly therapeutic, professional treatments only." },
      { q: "Can I book a massage today in Rawalpindi?", a: "Often, yes. Message us on WhatsApp for same-day availability." },
      { q: "How long is the drive from Saddar?", a: "Usually 30–40 minutes depending on traffic." },
      { q: "Do you accept walk-ins?", a: "Yes, when a therapist is available, but booking on WhatsApp is recommended." },
      { q: "What's the most popular massage in Rawalpindi?", a: "Full body, deep tissue and Swedish massage are our most booked treatments." },
    ],
  },

  /* ───────── Islamabad ───────── */
  {
    slug: "islamabad",
    name: "Islamabad",
    h1: "Luxury Massage Spa for Islamabad",
    title: "Massage Spa Near Islamabad | Bahria Town Phase 7",
    description:
      "Premium massage spa for Islamabad residents, just off the Expressway in Bahria Town Phase 7 near KFC. Deep tissue, Thai & aromatherapy. Book your slot today.",
    primaryKeyword: "massage Islamabad",
    keywords: ["spa Islamabad", "spa near Islamabad", "massage center Bahria Town Islamabad", "luxury spa near Islamabad"],
    eyebrow: "FOR ISLAMABAD",
    heroLine: "Just off the Expressway: a quieter, calmer spa than the city centre.",
    image: IMG.aromaLavender,
    intro: [
      "For many people in Islamabad, a great massage means a long search, a crowded sector and a parking hunt. Our spa in Bahria Town Phase 7 offers a calmer alternative, reached by a straight run down the Islamabad Expressway.",
      `${SITE.name} offers premium [deep tissue](/services/deep-tissue-massage), [Thai](/services/thai-massage), [aromatherapy](/services/aromatherapy-massage) and [hot stone massage](/services/hot-stone-massage), plus facials and body treatments. Every session happens in a private room with trained therapists and fresh linen.`,
      "Guests come from across Islamabad: Blue Area offices, sectors along the Expressway such as Gulberg, PWD and Korang, and the newer housing societies to the south. Many tell us the drive is worth it for the calm alone.",
    ],
    directions: [
      {
        from: "From Islamabad (Zero Point / Faizabad)",
        steps: [
          "Take the Islamabad Expressway southbound.",
          "Take the exit for Bahria Town Phase 7 / DHA Phase 2.",
          "Head to KFC, Phase 7. We'll send the exact pin on WhatsApp.",
        ],
      },
      {
        from: "From Blue Area / F & G sectors",
        steps: [
          "Head to Zero Point, then join the Expressway southbound.",
          "Exit for Bahria Town Phase 7 / DHA Phase 2.",
          "Continue to KFC, Phase 7.",
        ],
      },
    ],
    travel: [
      { label: "Gulberg / PWD / Korang", time: "15–25 min" },
      { label: "Faizabad", time: "25–35 min" },
      { label: "Blue Area", time: "35–45 min" },
      { label: "F & G sectors", time: "40–50 min" },
    ],
    landmarks: ["Islamabad Expressway", "Faizabad Interchange", "Bahria Town Phase 7 / DHA Phase 2 exit", "KFC, Phase 7"],
    why: {
      h2: "Why Islamabad guests drive to Bahria Town",
      body: [
        "**Calm surroundings:** no sector traffic and easy parking.",
        "**Luxury feel:** warm, softly lit private rooms with linen and candlelight ambience.",
        "**Transparent pricing:** " + `${P30} for 30 minutes and ${P60} for 60 minutes.`,
        "**Professional & therapeutic:** trained therapists and a clear conduct policy.",
      ],
    },
    extra: {
      h2: "A spa near Islamabad worth the drive",
      body: [
        "Make the trip count: pair a 60-minute massage with a 30-minute [head massage](/services/head-massage) or [foot reflexology](/services/foot-reflexology), or book a [spa package](/packages).",
        "Visiting from DHA? See our [DHA Islamabad page](/locations/dha-islamabad). Coming along the Expressway or GT Road? See [directions from the Expressway](/locations/gt-road-expressway).",
      ],
    },
    areaServed: ["Islamabad", "PWD Islamabad", "Korang Town", "Gulberg Islamabad", "Blue Area"],
    faqs: [
      { q: "Do you have a spa in Islamabad?", a: "Our spa is in Bahria Town Phase 7, Rawalpindi, near KFC and just off the Islamabad Expressway. Many Islamabad residents visit us regularly." },
      { q: "How long is the drive from Islamabad?", a: "From Gulberg, PWD or Korang it's around 15–25 minutes. From Blue Area or the F/G sectors, allow 35–50 minutes." },
      { q: "What's the price of a massage near Islamabad?", a: `${P30} for 30 minutes and ${P60} for 60 minutes, for any treatment.` },
      { q: "Which massage is best after a long work week?", a: "Deep tissue for stiffness, aromatherapy for stress, or a full body massage for both." },
      { q: "Is the spa professional?", a: "Yes. We offer strictly therapeutic, professional treatments in private rooms." },
      { q: "Can I book late in the evening?", a: "Yes, we're open until 11pm. Message us on WhatsApp to check availability." },
      { q: "Do you offer couples massage?", a: SITE.features.vipRoom ? "Yes, in our VIP suite. Ask for availability." : "We can arrange back-to-back or parallel bookings in separate rooms. Ask on WhatsApp." },
      { q: "Is parking available?", a: "Yes, parking is available near KFC, Phase 7." },
      { q: "Do you do facials?", a: "Yes: cleansing, hydrating and glow facials in a calm spa setting." },
      { q: "How do I book from Islamabad?", a: "Tap WhatsApp, send your preferred time, and we'll confirm your slot within minutes." },
    ],
  },

  /* ───────── GT Road / Expressway ───────── */
  {
    slug: "gt-road-expressway",
    name: "Islamabad Expressway & GT Road",
    h1: "Spa Near Islamabad Expressway & GT Road",
    title: "Spa Near Islamabad Expressway | Bahria Town Massage",
    description:
      "Easy access from Islamabad Expressway and GT Road. Relax at our massage center in Bahria Town Phase 7, near KFC. Open daily till 11pm, book on WhatsApp.",
    primaryKeyword: "spa near Expressway",
    keywords: ["massage near GT Road", "spa near Islamabad Expressway", "massage on the way Rawalpindi", "massage center Expressway"],
    eyebrow: "EXPRESSWAY · GT ROAD",
    heroLine: "Turn off the highway and into an hour of quiet.",
    image: IMG.stonesDark,
    intro: [
      "The Islamabad Expressway and GT Road are two of the busiest routes in the twin cities. Thousands of people spend hours on them every week, from commuters and business travellers to drivers and families heading between Islamabad, Rawalpindi and beyond.",
      `${SITE.name} in Bahria Town Phase 7 sits close to both roads, so it's a convenient stop. Whether you're coming home from work, passing through on a long drive, or want a spa that's easy to reach without entering the city centre, we're a short turn off the main road, near KFC.`,
      "Long drives cause predictable problems: a stiff lower back, tight shoulders, heavy legs. Our [back, neck & shoulder massage](/services/back-neck-shoulder-massage), [deep tissue massage](/services/deep-tissue-massage) and [foot reflexology](/services/foot-reflexology) are designed to undo exactly that.",
    ],
    directions: [
      {
        from: "From the Islamabad Expressway",
        steps: [
          "Take the Bahria Town Phase 7 / DHA Phase 2 exit.",
          "Follow signs into Bahria Town Phase 7.",
          "Head to KFC. We'll send you the exact pin.",
        ],
      },
      {
        from: "From GT Road",
        steps: [
          "Enter Bahria Town via the GT Road side (Phases 7/8).",
          "Follow the main boulevard into Phase 7.",
          "Continue to KFC.",
        ],
      },
    ],
    travel: [
      { label: "From Expressway exit", time: "5–10 min" },
      { label: "From GT Road entry", time: "8–12 min" },
      { label: "From Faizabad", time: "25–35 min" },
      { label: "Late evening", time: "~8 min" },
    ],
    landmarks: ["Islamabad Expressway", "GT Road", "Bahria Town Phase 7 / DHA Phase 2 exit", "KFC, Phase 7"],
    why: {
      h2: "Why drivers and commuters stop with us",
      body: [
        "**Easy access:** a short turn off the Expressway or GT Road, with no city-centre traffic.",
        "**Focused treatments:** for backs, necks and legs that have been sitting too long.",
        "**Quick sessions:** a 30-minute reset for " + `${P30}.`,
        "**Open late:** until 11pm for after-work and evening drives.",
      ],
    },
    extra: {
      h2: "Massage for commuters and long-distance drivers",
      body: [
        "Sitting for long periods tightens the hips, lower back and neck. A regular 30–60 minute massage, combined with simple stretches, can make your commute far more comfortable. Read our [guide to massage for back pain](/blog/massage-for-back-pain-desk-workers) for practical tips.",
        "If you commute daily from Islamabad, see our [Islamabad page](/locations/islamabad) for detailed routes.",
      ],
    },
    areaServed: ["Islamabad Expressway", "GT Road Rawalpindi", "Gulberg Greens", "Kak Pul"],
    faqs: [
      { q: "How far is your spa from the Islamabad Expressway?", a: "Usually 5–10 minutes from the Bahria Town Phase 7 / DHA Phase 2 exit, depending on traffic." },
      { q: "Can I stop for a quick massage on a long drive?", a: `Yes. A 30-minute back, neck and shoulder massage (${P30}) is a perfect break.` },
      { q: "Is there parking for travellers?", a: "Yes, parking is available near KFC, Bahria Town Phase 7." },
      { q: "Which massage is best after a long drive?", a: "Back, neck & shoulder massage for upper-body stiffness, foot reflexology for heavy legs, or deep tissue for overall tension." },
      { q: "Are you open late?", a: "Yes, until 11pm daily. Message us to reserve an evening slot." },
      { q: "Can I book while driving?", a: "Please don't text and drive! Ask a passenger to message us, or call when you've stopped safely." },
      { q: "How much is a massage near the Expressway?", a: `${P30} for 30 minutes and ${P60} for 60 minutes.` },
      { q: "Is the spa professional?", a: "Yes. Strictly therapeutic treatments in private rooms by trained therapists." },
      { q: "Can I get directions sent to my phone?", a: "Yes. Message us on WhatsApp and we'll share the Google Maps pin." },
      { q: "Do you serve Gulberg Greens and Kak Pul?", a: "Yes, both are a short drive from our Phase 7 spa." },
    ],
  },
];

export function getLocation(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}
