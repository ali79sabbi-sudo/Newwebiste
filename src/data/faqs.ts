import type { Faq } from "./types";
import { SITE } from "@/config/site";
import { STANDARD_RATES, pkr } from "./pricing";

const P30 = pkr(STANDARD_RATES[30]);
const P60 = pkr(STANDARD_RATES[60]);
const F = SITE.features;
const HOURS = "2:00 pm to 3:00 am, seven days a week"; // TODO(owner): keep in sync with SITE.hours

const shower = F.showers
  ? "Yes, shower facilities are available at our Bahria Town spa. Please mention it when booking so we can have fresh towels ready."
  : "We remove excess oil with warm towels after every oil treatment. Please ask about shower facilities when booking.";
const home = F.homeService
  ? "Yes, we offer at-home massage in selected areas of Bahria Town. Message us on WhatsApp for availability and pricing."
  : "Not at the moment. We treat guests at our spa only, where we can guarantee hygiene, privacy, proper equipment and a calm environment.";
const open24 = F.open24h
  ? "Yes, we're open 24 hours."
  : `No. We're open ${HOURS}, which covers most late-evening needs. We aren't a 24-hour massage center.`;
const vip = F.vipRoom
  ? "Yes. We have a VIP suite with extra space and premium amenities. Ask on WhatsApp for availability."
  : "All of our rooms are private, single-treatment rooms with a closed door, soft lighting and fresh linen. Ask on WhatsApp about premium room options.";
const pay = F.cardPayment ? "We accept cash, debit/credit cards and bank transfer." : "We accept cash at reception. Ask on WhatsApp about bank-transfer options.";
const deposit = F.advancePayment
  ? "A small advance is required to confirm some bookings. We'll share details on WhatsApp."
  : "No advance payment is needed for regular bookings. Simply confirm on WhatsApp and pay after your treatment.";

/* ─────────────────────────── /faq page (grouped) ─────────────────────────── */
export const FAQ_GROUPS: { group: string; items: Faq[] }[] = [
  {
    group: "Booking",
    items: [
      { q: "How do I book a massage in Bahria Town?", a: "The fastest way is WhatsApp: tap any WhatsApp button, send your preferred treatment and time, and we'll confirm within minutes. You can also call 0340 1222270 or use our online booking form." },
      { q: "Can I book a same-day massage?", a: F.sameDay ? "Yes, same-day bookings are often available. Evenings and weekends fill up first, so message us as early as you can." : "We recommend booking a day in advance, but message us to check same-day availability." },
      { q: "Do you accept walk-ins?", a: "Yes, when a therapist is free. To avoid waiting, send us a quick WhatsApp message before you come." },
      { q: "Do I need to pay in advance?", a: deposit },
      { q: "How early should I arrive?", a: "Please arrive 10 minutes before your appointment to settle in, fill a short health form and change comfortably." },
      { q: "Massage ki booking kaise karein?", a: "Bohat aasaan hai: WhatsApp par apna pasandeeda treatment aur time bhejein, hum chand minute mein confirm kar dete hain. Aap 0340 1222270 par call bhi kar sakte hain." },
    ],
  },
  {
    group: "Prices & Payment",
    items: [
      { q: "How much does a massage cost at your Bahria Town spa?", a: `All treatments are ${P30} for 30 minutes and ${P60} for 60 minutes. Our full price list is published on the pricing page.` },
      { q: "Is your massage center affordable?", a: "We keep pricing simple, transparent and fair, with no hidden charges. Packages make combinations even easier to plan." },
      { q: "Do you have discount offers or deals?", a: "Check our packages page for current combinations. Any genuine limited-time offers are announced on our Facebook page and WhatsApp." },
      { q: "Which payment methods do you accept?", a: pay },
      { q: "Do you sell gift cards?", a: "Yes. Spa gift cards are available for any amount or treatment and can be ordered on WhatsApp." },
    ],
  },
  {
    group: "Treatments",
    items: [
      { q: "Which massage should I choose for my first visit?", a: "Swedish massage is the gentlest and most relaxing introduction. If you have specific tightness, a full body massage lets your therapist adapt pressure as needed." },
      { q: "What is the difference between Swedish and deep tissue massage?", a: "Swedish uses lighter, flowing strokes for relaxation. Deep tissue uses slow, firm pressure to target stubborn knots." },
      { q: "Do you offer Thai massage?", a: "Yes. Traditional Thai massage is performed fully clothed with assisted stretching and rhythmic pressure." },
      { q: "Do you offer cupping or hijama?", a: "We offer dry cupping only, with single-use or sterilised cups. We do not offer wet cupping (hijama)." },
      { q: "Do you offer facials and body scrubs?", a: "Yes: deep-cleansing, hydrating and glow facials, plus body scrub and polish treatments." },
      { q: "Do you offer head and shoulder massage?", a: "Yes. Book our back, neck & shoulder massage, our head massage (champi), or combine them in the Quick Reset package." },
    ],
  },
  {
    group: "Policies & Hygiene",
    items: [
      { q: "Is your spa professional and family-safe?", a: "Yes. We provide strictly therapeutic massage and beauty treatments under a clear professional-conduct policy. Any inappropriate request ends the session immediately, without refund." },
      { q: "How do you maintain hygiene?", a: "Fresh linen and towels for every guest, sanitised tools and surfaces, single-use or sterilised cups, clean hands and well-ventilated rooms." },
      { q: "Do you have private rooms?", a: F.privateRooms ? "Yes. Every treatment takes place in a private room with a closed door." : "Ask on WhatsApp about room options." },
      { q: "Do you have VIP rooms?", a: vip },
      { q: "Do you have shower facilities?", a: shower },
      { q: "What should I wear?", a: "Wear whatever is comfortable. For oil treatments you'll be draped with fresh linen at all times, and disposable undergarments are provided. Thai massage is fully clothed." },
      { q: "Can I choose my therapist?", a: "Let us know your preferences when booking and we'll do our best to accommodate them." }, // TODO(owner): describe therapist gender policy
      { q: "What is your cancellation policy?", a: "Please give at least 2 hours' notice to cancel or reschedule, so we can offer the slot to another guest." },
    ],
  },
  {
    group: "Location & Hours",
    items: [
      { q: "Where is your massage center?", a: "In Bahria Town Phase 7, near KFC, Rawalpindi. We'll send the exact Google Maps pin on WhatsApp." },
      { q: "What are your opening hours?", a: `We're open ${HOURS}.` },
      { q: "Are you a 24-hour massage center?", a: open24 },
      { q: "Do you offer at-home massage in Bahria Town?", a: home },
      { q: "Is parking available?", a: F.parking ? "Yes, parking is available near our spa by KFC, Bahria Town Phase 7." : "Street parking is available nearby." },
      { q: "Do you serve Bahria Town Phase 4 and Phase 8?", a: "Yes. We are in Phase 7 near KFC. Phase 8 is around 5–10 minutes away, and Phase 4 (Civic Center) around 10–15 minutes." },
    ],
  },
];

/* ─────────────────────────── Per-page FAQs (10–15 each, unique) ─────────────────────────── */
export const HOME_FAQS: Faq[] = [
  { q: "What are your timings?", a: `We're open ${HOURS}. Message us on WhatsApp to check same-day availability.` },
  { q: "How do I book a massage in Bahria Town Phase 7?", a: "Tap the WhatsApp button, send your preferred treatment and time, and we'll confirm your slot within minutes. You can also call 0340 1222270." },
  { q: "How much is a massage at your spa?", a: `Every treatment is ${P30} for 30 minutes and ${P60} for 60 minutes, so you know the price before you arrive.` },
  { q: "What should I wear to my massage?", a: "Wear anything comfortable. For oil massages you change in privacy and stay draped with fresh linen. Thai massage is fully clothed." },
  { q: "Who are your therapists?", a: SITE.therapistPolicy },
  { q: "Is parking available at your Bahria Town spa?", a: "Yes, parking is available around our plaza near KFC in Phase 7." },
  { q: "Is this the best massage center in Bahria Town?", a: "We focus on what makes a massage center worth trusting: private rooms, fresh linen for every guest, trained therapists, published prices and a strict professional policy." },
  { q: "Do you have private rooms and showers?", a: `${F.privateRooms ? "Yes, all treatments are in private rooms." : ""} ${shower}`.trim() },
  { q: "Is your spa open 24 hours?", a: open24 },
  { q: "Do you provide at-home massage service?", a: home },
  { q: "Is your massage center hygienic?", a: "Yes. Fresh linen and towels for every guest, sanitised tools and surfaces, and cleaned rooms between sessions." },
  { q: "Do you serve Islamabad and DHA?", a: "Yes. We're just off the Islamabad Expressway, a short drive from DHA Phase 1 and 2, and close to every Bahria Town phase." },
];

export const ABOUT_FAQS: Faq[] = [
  { q: "What is Massage Rawalpindi?", a: `${SITE.name} is a professional massage center and day spa in Bahria Town Phase 7, Rawalpindi, offering 14 massage, therapy and beauty treatments.` },
  { q: "What does 'ritual of rest' mean?", a: "It's our philosophy: every visit follows a calm, unhurried sequence (welcome, consultation, treatment, rest) so you leave restored, not rushed." },
  { q: "Are your therapists certified?", a: "Our therapists are trained in the treatments they provide and follow strict hygiene and conduct standards." }, // TODO(owner): list real certifications
  { q: "What hygiene standards do you follow?", a: "Fresh linens per guest, sanitised tools and surfaces, single-use or sterilised cups, hand hygiene before every treatment and well-ventilated rooms." },
  { q: "Is your spa strictly professional?", a: "Yes. We offer therapeutic massage and beauty treatments only. Inappropriate requests or behaviour end the session immediately." },
  { q: "Why did you choose Bahria Town Phase 7?", a: "Phase 7 is one of Bahria Town's busiest commercial hubs, easy to find near KFC, close to DHA and easy to reach from the Islamabad Expressway, so it's convenient for both Rawalpindi and Islamabad." },
  { q: "Do you use real photos of your spa?", a: "Some images on this site are high-quality stock photos while we prepare our own photography. You're welcome to visit and see the spa in person." },
  { q: "What products do you use?", a: "Skin-friendly carrier oils, quality essential oils and dermatologically tested skincare products." },
  { q: "Can I visit before booking?", a: "Of course. Message us on WhatsApp and drop by during opening hours to see the space." },
  { q: "How can I give feedback?", a: "We'd love to hear from you. Leave a Google review, message us on WhatsApp or email info@massagerawalpindi.com." },
];

export const SERVICES_HUB_FAQS: Faq[] = [
  { q: "How many treatments do you offer?", a: "14 treatments across relaxation, pain relief, therapeutic and beauty categories." },
  { q: "Which massage is best for relaxation?", a: "Swedish, aromatherapy, Balinese and hot stone massage are our most relaxing treatments." },
  { q: "Which massage is best for back pain or stiffness?", a: "Deep tissue, back-neck-shoulder and sports massage focus on muscular tension. See a doctor for severe or unexplained pain." },
  { q: "Which treatments are done fully clothed?", a: "Thai massage, foot reflexology and head massage are done clothed." },
  { q: "Are all treatments the same price?", a: `Yes. Every treatment is ${P30} for 30 minutes and ${P60} for 60 minutes.` },
  { q: "Can I combine two treatments?", a: "Yes. Book back-to-back half-hour blocks, or choose a package such as the Signature Ritual." },
  { q: "Do you offer treatments for men and women?", a: "Our treatments suit all adults. Please share your therapist preferences when booking." }, // TODO(owner): confirm policy
  { q: "Are treatments suitable during pregnancy?", a: "Please tell us if you're pregnant and consult your doctor first. Some treatments aren't suitable, and others need adjustments." },
  { q: "Which treatment is best for sleep?", a: "Aromatherapy with lavender, hot stone and head massage are popular choices for better sleep." },
  { q: "Do you offer beauty treatments?", a: "Yes: facials and body scrub & polish." },
  { q: "Not sure which massage to choose?", a: "Use our three-question guide on this page, or message us on WhatsApp and we'll recommend one." },
];

export const PRICING_FAQS: Faq[] = [
  { q: "What is the massage price in Rawalpindi at your spa?", a: `${P30} for 30 minutes and ${P60} for 60 minutes, for every treatment on our menu.` },
  { q: "Are there any hidden charges?", a: "No. The price you see is the price you pay." }, // TODO(owner): confirm whether any tax applies
  { q: "Do you offer 90 or 120-minute sessions?", a: `Yes. Combine half-hour blocks: 90 minutes is three blocks and 120 minutes is four. Each extra 30 minutes is ${P30}.` },
  { q: "Is the facial price the same as massage?", a: `Yes. Facials are ${P30} for 30 minutes and ${P60} for 60 minutes.` },
  { q: "Do you have spa deals in Bahria Town?", a: "See our packages page for combinations. Genuine limited-time offers are announced on Facebook and WhatsApp." },
  { q: "How often do prices change?", a: "We review prices monthly. The 'last updated' date at the top of this page shows when they were last checked." },
  { q: "Do I pay before or after the treatment?", a: deposit },
  { q: "What payment methods are accepted?", a: pay },
  { q: "Is tipping expected?", a: "Tipping is entirely optional and never expected." },
  { q: "Can I buy a gift card for a specific amount?", a: "Yes. Gift cards can be bought for a specific treatment or a PKR value." },
  { q: "Are prices the same on weekends?", a: "Yes, prices are the same every day of the week." },
  { q: "Is your massage center affordable compared to others in Rawalpindi?", a: "We aim for fair, transparent pricing that reflects trained therapists, private rooms and fresh linen for every guest." },
];

export const PACKAGES_FAQS: Faq[] = [
  { q: "What spa packages do you offer in Bahria Town?", a: "Quick Reset, Signature Ritual, Ultimate Noir and Monthly Wellness, each combining treatments for better value of time." },
  { q: "Can I customise a package?", a: "Yes. Swap treatments within the same duration, so just tell us on WhatsApp." },
  { q: "How long is the Signature Ritual?", a: "Two hours: a 60-minute massage, 30-minute foot reflexology and 30-minute head massage." },
  { q: "How does the Monthly Wellness package work?", a: "Four 60-minute sessions of any treatment, to be used within 60 days." },
  { q: "Can two people share a Monthly Wellness package?", a: "Ask us on WhatsApp, as we can often arrange this for family members." },
  { q: "Are packages discounted?", a: "Packages are priced at our standard half-hour rate. Any genuine package discount will be clearly shown." },
  { q: "Which package is best before a wedding?", a: "Ultimate Noir, with hot stone massage, body polish and a facial, is designed for pre-event glow." },
  { q: "Can I gift a package?", a: "Yes. Any package can be purchased as a gift card." },
  { q: "Do packages expire?", a: "Single-visit packages are booked for one visit. Monthly Wellness sessions should be used within 60 days." },
  { q: "How do I book a package?", a: "Tap 'Book this package' to send a pre-filled WhatsApp message." },
];

export const GALLERY_FAQS: Faq[] = [
  { q: "Are these real photos of your spa?", a: "Some images are high-quality stock photos chosen to reflect our ambience while we prepare our own photography. Visit us to see the real space." },
  { q: "Can I visit the spa before booking?", a: "Yes, drop by during opening hours or message us on WhatsApp first." },
  { q: "What do your treatment rooms look like?", a: "Private, softly lit rooms with fresh linen, warm towels and calm music." },
  { q: "Do you have a steam room or sauna?", a: "Please ask on WhatsApp about current facilities." }, // TODO(owner): confirm facilities
  { q: "Are your rooms private?", a: "Yes, every treatment takes place in a private room." },
  { q: "What products do you use?", a: "Skin-friendly carrier oils, quality essential oils and tested skincare products." },
  { q: "Is photography allowed inside the spa?", a: "To protect guests' privacy, please ask staff before taking photos." },
  { q: "Do you have showers?", a: shower },
  { q: "Is the spa clean and hygienic?", a: "Yes. Rooms are cleaned between every guest and linens are always fresh." },
  { q: "Where is the spa located?", a: "Near KFC, Bahria Town Phase 7, Rawalpindi." },
];

export const REVIEWS_FAQS: Faq[] = [
  { q: "Where can I read reviews of Massage Rawalpindi?", a: "On our Google Business Profile and Facebook page. We only show genuine reviews here." },
  { q: "How do I leave a review?", a: "Tap 'Leave us a Google review' on this page. It takes less than a minute." },
  { q: "Do you publish fake reviews?", a: "Never. We only publish genuine reviews from real guests, with their permission." },
  { q: "Can I leave feedback privately?", a: "Yes. Message us on WhatsApp or email info@massagerawalpindi.com." },
  { q: "What if I had a bad experience?", a: "Please tell us directly so we can make it right. We take every piece of feedback seriously." },
  { q: "Can I review a specific therapist?", a: "Yes, feel free to mention your therapist and treatment in your review." },
  { q: "Do you reply to reviews?", a: "Yes, we read and respond to reviews on Google and Facebook." },
  { q: "Will my review appear on this website?", a: "With your permission, we may feature your Google or Facebook review here." },
  { q: "Do you offer incentives for reviews?", a: "No. We ask for honest reviews only, without incentives." },
  { q: "Why are there no reviews shown yet?", a: "We're collecting our first genuine reviews. Be one of the first to share your experience!" },
];

export const CONTACT_FAQS: Faq[] = [
  { q: "What is your phone number?", a: "Call or WhatsApp 0340 1222270." },
  { q: "What is your email address?", a: "info@massagerawalpindi.com. We reply within one working day. For bookings, WhatsApp is faster." },
  { q: "Where is your spa located?", a: "Near KFC, Bahria Town Phase 7, Rawalpindi. We'll send the exact pin on WhatsApp." },
  { q: "What are your opening hours?", a: `${HOURS}.` },
  { q: "How quickly do you reply on WhatsApp?", a: "Usually within minutes during opening hours." },
  { q: "Is your massage center near KFC Phase 7 open now?", a: "We're open daily from 2pm to 3am. Message us to check live availability." },
  { q: "How do I get directions?", a: "Tap 'Directions' to open Google Maps, or ask on WhatsApp for the pin." },
  { q: "Is parking available?", a: "Yes, near our spa by KFC, Bahria Town Phase 7." },
  { q: "Are you on Facebook?", a: "Yes. Follow us on Facebook for news and genuine offers." },
  { q: "Can I contact you for corporate or group bookings?", a: "Yes. Email or WhatsApp us with your requirements." },
  { q: "Do you reply to messages after hours?", a: "Messages after closing are answered first thing the next day." },
];

export const BOOK_FAQS: Faq[] = [
  { q: "How does online booking work?", a: "Fill in the form and tap 'Send on WhatsApp'. A formatted message opens in WhatsApp, and you just press send. We'll confirm your slot." },
  { q: "Is my booking confirmed immediately?", a: "Your booking is confirmed once we reply on WhatsApp, usually within minutes." },
  { q: "Do I need to pay online?", a: deposit },
  { q: "Can I book for someone else?", a: "Yes. Enter their name and your phone number, and mention it in the notes." },
  { q: "Can I book two people at the same time?", a: "Yes, mention it in the notes and we'll arrange back-to-back or parallel slots where available." },
  { q: "How far in advance can I book?", a: "Up to 30 days ahead. Same-day bookings are often available too." },
  { q: "How do I reschedule?", a: "Message us on WhatsApp at least 2 hours before your appointment." },
  { q: "What if I'm running late?", a: "Let us know on WhatsApp. Late arrivals may have a shorter session so the next guest isn't delayed." },
  { q: "Is my information kept private?", a: "Yes. We only use your details to manage your booking. See our privacy policy." },
  { q: "Can I book by phone instead?", a: "Of course. Call 0340 1222270 during opening hours." },
  { q: "Do you accept bookings for late evening?", a: "Yes, until 3am, subject to availability." },
];

export const GIFT_FAQS: Faq[] = [
  { q: "How do I buy a spa gift card?", a: "Choose a value or treatment and tap 'Order on WhatsApp'. We'll confirm payment and send the gift card." },
  { q: "Can I choose any amount?", a: "Yes. Choose a treatment or any PKR value." },
  { q: "How long is a gift card valid?", a: "Gift cards are valid for 6 months from the date of purchase." }, // TODO(owner): confirm validity
  { q: "Can the recipient choose their own treatment?", a: "Yes. Value gift cards can be used for any treatment or package." },
  { q: "Is the gift card digital or printed?", a: "We send a digital gift card on WhatsApp. Printed cards may be available on request." },
  { q: "Are gift cards good for Eid?", a: "They're one of our most thoughtful Eid gifts for parents, spouses and friends." },
  { q: "Can I add a personal message?", a: "Yes. Include your message when ordering and we'll add it to the card." },
  { q: "Can a gift card be refunded?", a: "Gift cards are non-refundable but can be transferred to someone else." },
  { q: "Can I use a gift card for a package?", a: "Yes, gift card value can be applied to any package." },
  { q: "Do you offer corporate gift cards?", a: "Yes. Message us for bulk or corporate orders." },
  { q: "What's the best gift for someone who's never had a massage?", a: "A 60-minute Swedish massage gift card is a gentle, perfect introduction." },
];

export const BLOG_INDEX_FAQS: Faq[] = [
  { q: "Who writes the Serenity Journal?", a: `The ${SITE.name} team, drawing on our therapists' day-to-day experience.` },
  { q: "Is the blog medical advice?", a: "No. Our articles are general wellness information. Please consult a doctor for medical concerns." },
  { q: "How often do you publish?", a: "We aim to publish new articles every month." },
  { q: "Can I suggest a topic?", a: "Yes! Message us on WhatsApp or email info@massagerawalpindi.com." },
  { q: "Which article should I read before my first massage?", a: "Start with 'First Time at a Spa? What to Expect'." },
  { q: "Where can I learn about Swedish vs deep tissue?", a: "Read our comparison article, 'Swedish vs Deep Tissue Massage'." },
  { q: "Do you write about aromatherapy?", a: "Yes. See our aromatherapy oils guide." },
  { q: "Can I share your articles?", a: "Absolutely. Share links freely on social media and WhatsApp." },
  { q: "Do articles include prices?", a: "Some do. Our pricing page always has the latest prices." },
  { q: "Can I book directly from an article?", a: "Yes, every article has WhatsApp booking buttons." },
];

export const PRIVACY_FAQS: Faq[] = [
  { q: "What information do you collect?", a: "Only what you choose to share: your name, phone number and booking details, usually via WhatsApp or our booking form." },
  { q: "Do you use cookies?", a: "We use Google Analytics 4 cookies to understand site usage in aggregate. No advertising cookies are set." },
  { q: "Do you share my data?", a: "No. We never sell or share your personal information with third parties for marketing." },
  { q: "How is booking data handled?", a: "Booking messages are handled in WhatsApp and used only to manage your appointment." },
  { q: "How long do you keep my data?", a: "Only as long as needed to provide services or meet legal requirements." },
  { q: "Can I ask you to delete my data?", a: "Yes. Email info@massagerawalpindi.com and we'll delete your information." },
  { q: "Is the website secure?", a: "Yes. The site is served over HTTPS with modern security headers." },
  { q: "Do you store health information?", a: "Any health notes you share are used only to deliver your treatment safely and are kept confidential." },
  { q: "Does the booking form store my data?", a: "No. The form simply builds a WhatsApp message on your device and doesn't store anything on our servers." },
  { q: "Who can I contact about privacy?", a: "Email info@massagerawalpindi.com." },
];

export const TERMS_FAQS: Faq[] = [
  { q: "What is your cancellation policy?", a: "Please cancel or reschedule at least 2 hours in advance." },
  { q: "What happens if I arrive late?", a: "Your session may be shortened to respect the next guest's booking, at the full price." },
  { q: "What is your professional-conduct policy?", a: "We provide strictly therapeutic services. Any inappropriate request or behaviour ends the session immediately, without refund." },
  { q: "Do I need to share health information?", a: "Please tell us about conditions, injuries, pregnancy or allergies so we can treat you safely." },
  { q: "What is the minimum age?", a: "Guests must be 18+. Guests aged 16–17 require a parent or guardian present." },
  { q: "Can I bring children?", a: "For a calm environment, please don't bring young children to the treatment area." },
  { q: "Are prices subject to change?", a: "Prices may change, but the price confirmed at booking is honoured." },
  { q: "What if I'm unhappy with my treatment?", a: "Tell us during or straight after your session, and we'll do our best to make it right." },
  { q: "Are valuables my responsibility?", a: "Please keep valuables with you or leave them at home." },
  { q: "Do you treat guests who are unwell?", a: "Please reschedule if you have a fever or contagious illness." },
];
