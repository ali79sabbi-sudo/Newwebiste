import type { BlogPost } from "@/data/types";
import { IMG } from "@/data/images";
import { STANDARD_RATES, pkr } from "@/data/pricing";

const P30 = pkr(STANDARD_RATES[30]);
const P60 = pkr(STANDARD_RATES[60]);

export const POSTS_A: BlogPost[] = [
  /* ───────────────────────── 1 ───────────────────────── */
  {
    slug: "best-massage-center-bahria-town-guide",
    title: "How to Choose the Best Massage Center in Bahria Town",
    h1: "How to Choose the Best Massage Center in Bahria Town",
    description:
      "What to look for in a massage center in Bahria Town: hygiene, therapist training, pricing and privacy. A practical checklist to use before you book.",
    keyword: "best massage center Bahria Town",
    datePublished: "2026-11-01",
    dateModified: "2026-11-13",
    image: IMG.treatmentRoom,
    excerpt: "Hygiene, training, privacy and honest pricing: a practical checklist before you book a massage in Bahria Town.",
    services: ["swedish-massage", "full-body-massage", "deep-tissue-massage"],
    related: ["first-spa-visit-what-to-expect", "how-often-should-you-get-a-massage"],
    sections: [
      {
        h2: "Why choosing the right massage center matters",
        body: [
          "Search 'massage center in Bahria Town' and you'll find dozens of listings across Phase 4, Phase 7, Phase 8, Square Commercial and Civic Center. Some are excellent. Some are rushed, unhygienic or unclear about what they actually offer. Because massage involves trust, privacy and physical contact, the place you choose matters as much as the treatment itself.",
          "A good massage center leaves you relaxed, cared for and confident you'll come back. A poor one can leave you uncomfortable, overcharged or, in the worst cases, with a skin irritation or a strained muscle. The good news is that the signs of a trustworthy spa are easy to spot once you know what to look for.",
          "This guide gives you a practical checklist, based on what our therapists see every day, so you can choose the best massage center in Bahria Town for your needs, whether you're booking your very first massage or your fiftieth.",
        ],
      },
      {
        h2: "1. Hygiene you can see (and smell)",
        body: [
          "Hygiene is the first and most important filter. When you walk in, the space should smell fresh, not of stale oil or damp towels. Look for:",
          "- Fresh linen and towels for every guest, ideally folded and visible, not reused from a pile",
          "- Clean, uncluttered treatment rooms with good ventilation",
          "- Therapists who wash or sanitise their hands before starting",
          "- Sealed or clearly labelled oils and products",
          "- Single-use or properly sterilised equipment for treatments like [cupping](/services/cupping-therapy)",
          "Don't be shy about asking, 'How often do you change the linen?' A professional spa will answer immediately: every guest, every time.",
        ],
      },
      {
        h2: "2. Trained therapists who ask questions",
        body: [
          "A trained therapist doesn't just start massaging. They ask about your health, injuries, pregnancy, allergies and pressure preference first. This short consultation is one of the clearest signs of professionalism.",
          "During the session, a good therapist checks in on pressure and comfort, and adapts. If you ask for lighter or firmer pressure, it should change immediately and without fuss. Afterwards, they'll give simple aftercare advice like drinking water or avoiding heavy exercise.",
          "If a massage center can't tell you anything about how its therapists are trained, treat that as a warning sign.",
        ],
      },
      {
        h2: "3. Clear, published prices",
        body: [
          "Transparent pricing protects you from surprises. The best massage centers in Bahria Town publish their prices online or display a clear menu at reception. Be wary of places that only reveal prices once you've arrived, or that add vague 'extras' at the end.",
          `At our spa, for example, every treatment is ${P30} for 30 minutes and ${P60} for 60 minutes, and the full [price list](/pricing) is public. You don't have to accept that exact model, but you should always know what you'll pay before you lie down.`,
        ],
      },
      {
        h2: "4. Privacy and a strict professional policy",
        body: [
          "A trustworthy massage center offers private rooms (not curtained cubicles), proper draping with sheets or towels, and a clear, strictly therapeutic code of conduct. You should feel comfortable at all times, and only the area being treated should be uncovered.",
          "Professional spas are proud of their conduct policies and often publish them in their terms. If a business's advertising feels suggestive or unclear, it's not the right place for genuine wellness.",
        ],
      },
      {
        h2: "5. A sensible range of treatments",
        body: [
          "A good spa offers a range of treatments, and its staff can explain the difference between them. For example, they should be able to tell you clearly when to choose [Swedish massage](/services/swedish-massage) over [deep tissue massage](/services/deep-tissue-massage), and who shouldn't have hot stone therapy.",
          "Be cautious of places that promise to 'cure' back pain, migraines or medical conditions. Massage may help relieve tension and stress, but it isn't a substitute for medical care. Honest spas use careful language.",
        ],
      },
      {
        h2: "6. Location, parking and opening hours",
        body: [
          "Convenience matters more than people think. If getting there is stressful, you'll arrive tense. In Bahria Town, consider:",
          "- **Distance from your phase:** Phase 7 is central for Phases 6, 7, 8 and DHA Phase 2",
          "- **Parking:** is there easy parking near the plaza?",
          "- **Timings:** can you book after work or late evening?",
          "- **Access from Islamabad:** is it easy to reach from the Expressway or GT Road?",
        ],
      },
      {
        h2: "7. Genuine reviews, not fake hype",
        body: [
          "Read reviews on Google Maps and Facebook, but read them carefully. Real reviews mention specifics: the therapist's name, the treatment, the cleanliness, the parking. Dozens of identical five-star reviews posted on the same day are a red flag.",
          "Also look at how the spa responds to criticism. Polite, constructive replies are a great sign.",
        ],
      },
      {
        h2: "Quick checklist before you book",
        body: [
          "- Fresh linen for every guest?",
          "- Private rooms and proper draping?",
          "- Prices published in advance?",
          "- Health questions before the massage?",
          "- Clear, professional conduct policy?",
          "- Easy location, parking and evening hours?",
          "- Genuine, specific reviews?",
          "If the answer to all seven is yes, you've likely found a great massage center. If you're in Bahria Town, Rawalpindi or Islamabad, we'd love to welcome you to ours. Start with a [full body massage](/services/full-body-massage) and see how it feels.",
        ],
      },
    ],
    faqs: [
      { q: "What is the most important thing to check in a massage center?", a: "Hygiene: fresh linen for every guest, clean rooms and sanitised hands and equipment." },
      { q: "How much should a massage cost in Bahria Town?", a: `Prices vary. At our Phase 7 spa it's ${P30} for 30 minutes and ${P60} for 60 minutes, and the key is that prices are clear before you book.` },
      { q: "How do I know if a therapist is trained?", a: "They'll ask about your health first, check pressure during the session and give aftercare advice afterwards." },
      { q: "Should a massage center have private rooms?", a: "Yes. Private rooms and proper draping are basic standards of a professional spa." },
      { q: "Are online reviews reliable?", a: "Specific, varied reviews with responses from the business are usually reliable. Beware of many identical reviews posted at once." },
      { q: "What are red flags at a massage center?", a: "No published prices, reused linen, no health questions, suggestive advertising and medical 'cure' claims." },
      { q: "Is Bahria Town Phase 7 a good location for a spa?", a: "Yes. Phase 7 (near KFC) is easy to find, has parking, and is close to Phase 8, DHA Phase 2 and the Expressway." },
      { q: "Which massage should I book first?", a: "A Swedish or full body massage is a great first choice." },
      { q: "Can I visit a spa before booking?", a: "Most professional spas welcome a quick visit during opening hours." },
      { q: "Is it okay to ask about hygiene?", a: "Absolutely. A good spa will be happy to explain its standards." },
    ],
  },

  /* ───────────────────────── 2 ───────────────────────── */
  {
    slug: "swedish-vs-deep-tissue-massage",
    title: "Swedish vs Deep Tissue Massage: Which Is Right for You?",
    h1: "Swedish vs Deep Tissue Massage: Which Is Right for You?",
    description:
      "Swedish or deep tissue? Compare pressure, benefits, price and who each massage suits, so you can book the right session at our Bahria Town spa in Rawalpindi.",
    keyword: "Swedish vs deep tissue massage",
    datePublished: "2026-10-20",
    dateModified: "2026-11-13",
    image: IMG.handsMassage,
    excerpt: "Pressure, purpose, benefits and price: a clear side-by-side guide to the two most popular massages.",
    services: ["swedish-massage", "deep-tissue-massage", "full-body-massage"],
    related: ["massage-for-back-pain-desk-workers", "first-spa-visit-what-to-expect"],
    sections: [
      {
        h2: "The two most popular massages, explained",
        body: [
          "If you've ever looked at a spa menu and wondered whether to book Swedish or deep tissue, you're not alone. They're the two most requested massages at our Bahria Town spa, and they often get confused because they use similar strokes and the same oil.",
          "The real difference is purpose and pressure. Swedish massage is about relaxation of the whole body. Deep tissue massage is about releasing specific, stubborn tension in deeper muscle layers.",
          "In this guide we'll compare them side by side, covering technique, pressure, benefits, who each suits, how you'll feel afterwards and price, so you can book the right session with confidence.",
        ],
      },
      {
        h2: "What is Swedish massage?",
        body: [
          "[Swedish massage](/services/swedish-massage) is the classic relaxation massage. It uses five core techniques: long gliding strokes, kneading, circular friction, light tapping and gentle vibration. The rhythm is slow and flowing, and the pressure stays light to medium.",
          "The aim is to relax the nervous system, gently increase circulation and ease light muscle tightness. Most guests describe it as 'melting' into the table. It's ideal for first-timers, stress relief and anyone who simply wants to feel looked after.",
        ],
      },
      {
        h2: "What is deep tissue massage?",
        body: [
          "[Deep tissue massage](/services/deep-tissue-massage) uses slower, firmer, sustained pressure to reach deeper layers of muscle and the fascia around them. Therapists often use forearms, elbows and knuckles, working along the grain of the muscle into knots and tight bands.",
          "It's more focused than Swedish massage. Your therapist will often spend most of the session on two or three problem areas, such as the upper back, neck or lower back, rather than covering the whole body evenly.",
        ],
      },
      {
        h2: "Side-by-side comparison",
        body: [
          "- **Pressure:** Swedish is light to medium. Deep tissue is firm and sustained.",
          "- **Goal:** Swedish aims for whole-body relaxation. Deep tissue aims to release specific tension and knots.",
          "- **Pace:** Swedish is flowing and rhythmic. Deep tissue is slow and deliberate.",
          "- **Feels like:** Swedish is soothing and sleepy. Deep tissue is intense, with a 'good discomfort' in tight spots.",
          "- **After:** Swedish leaves you relaxed and light. After deep tissue, mild soreness for 24–48 hours is possible.",
          "- **Best for:** Swedish suits stress, sleep and first-timers. Deep tissue suits desk tension, athletes and chronic tightness.",
          `- **Price at our spa:** both are ${P30} for 30 minutes and ${P60} for 60 minutes.`,
        ],
      },
      {
        h2: "Choose Swedish massage if…",
        body: [
          "- You're new to massage and want a comfortable introduction",
          "- You feel stressed, anxious or mentally exhausted",
          "- You want to sleep better",
          "- Your muscles feel only mildly tight",
          "- You prefer a soothing, sensory experience",
        ],
      },
      {
        h2: "Choose deep tissue massage if…",
        body: [
          "- You have persistent knots in your shoulders, neck or back",
          "- You sit at a desk or drive for long hours",
          "- You train regularly at the gym or play sport",
          "- Swedish massage feels too light for you",
          "- You don't mind some intensity in exchange for release",
        ],
      },
      {
        h2: "Does deep tissue massage hurt?",
        body: [
          "It shouldn't hurt in a sharp or alarming way. You may feel intense pressure in very tight spots, which many people describe as 'good pain'. A trained therapist will ask you to rate pressure on a scale and keep it within your comfort zone. If you tense up or hold your breath, the pressure is too strong. Tell your therapist straight away.",
          "Mild soreness the next day, similar to after a workout, is normal. Drink water, take a warm shower and move gently.",
        ],
      },
      {
        h2: "Can you combine both?",
        body: [
          "Yes, and many of our guests do. A [full body massage](/services/full-body-massage) can use Swedish strokes for overall relaxation plus deeper work where you hold tension. Just tell your therapist: 'Relaxing overall, but firmer on my shoulders.'",
          "If your main issue is desk-related, the [back, neck & shoulder massage](/services/back-neck-shoulder-massage) is a focused option worth considering.",
        ],
      },
      {
        h2: "Safety notes",
        body: [
          "Both massages are safe for most healthy adults. Avoid deep tissue if you have a recent injury, take blood thinners, have osteoporosis or bruise easily, unless your doctor approves. If you're pregnant, consult your doctor and tell us before booking. Massage may help relieve muscular tension, but it isn't a medical treatment.",
        ],
      },
      {
        h2: "Our verdict",
        body: [
          "If you want to relax, book Swedish. If you want to fix tight spots, book deep tissue. If you're unsure, book a full body massage and let your therapist blend the two. Whichever you choose, you'll be in good hands at our spa in Bahria Town Phase 7.",
        ],
      },
    ],
    faqs: [
      { q: "Is Swedish or deep tissue better for back pain?", a: "Deep tissue usually targets muscular back tension more effectively. See a doctor for severe or unexplained pain." },
      { q: "Which is more relaxing?", a: "Swedish massage is generally more relaxing." },
      { q: "Is deep tissue more expensive than Swedish?", a: `Not at our spa. Both are ${P30} for 30 minutes and ${P60} for 60 minutes.` },
      { q: "Can beginners get deep tissue massage?", a: "Yes, but many beginners prefer to start with Swedish and progress to deeper work." },
      { q: "Will I be sore after Swedish massage?", a: "Rarely. Soreness is more common after deep tissue." },
      { q: "How often should I get deep tissue massage?", a: "Every 2–4 weeks for ongoing tension is a common rhythm." },
      { q: "Is Swedish massage good for sleep?", a: "Many guests sleep better after a Swedish massage." },
      { q: "Can I ask for firmer pressure during Swedish?", a: "Yes. Pressure can always be adjusted." },
      { q: "Is deep tissue safe during pregnancy?", a: "Deep tissue isn't recommended during pregnancy. Consult your doctor first." },
      { q: "Which should I book for my first visit?", a: "Swedish or a full body massage." },
    ],
  },

  /* ───────────────────────── 3 ───────────────────────── */
  {
    slug: "benefits-of-hot-stone-massage",
    title: "7 Benefits of Hot Stone Massage",
    h1: "7 Benefits of Hot Stone Massage",
    description:
      "How heated stones relax muscles, ease stress and support better sleep, plus what a hot stone session in Rawalpindi feels like and who should avoid it.",
    keyword: "hot stone massage benefits",
    datePublished: "2026-10-10",
    dateModified: "2026-11-13",
    image: IMG.hotStones,
    excerpt: "Warmth, depth and deep calm: why heated basalt stones are a winter favourite in Rawalpindi.",
    services: ["hot-stone-massage", "aromatherapy-massage", "swedish-massage"],
    related: ["aromatherapy-essential-oils-guide", "how-often-should-you-get-a-massage"],
    sections: [
      {
        h2: "What is hot stone massage?",
        body: [
          "[Hot stone massage](/services/hot-stone-massage) combines classic massage with smooth, flat basalt stones heated in water. Basalt is a volcanic rock that holds heat for a long time, so as your therapist glides the stones along your muscles, warmth sinks gradually into the tissue.",
          "Some stones are placed on specific points, such as along the spine, in the palms or between the toes, while others are used as an extension of the therapist's hands. The combination of heat, weight and touch creates a uniquely deep sense of relaxation.",
          "Here are seven benefits our guests in Rawalpindi and Islamabad most often describe, along with what to expect and who should avoid it.",
        ],
      },
      {
        h2: "1. Deep muscle relaxation",
        body: [
          "Heat helps muscles relax. When muscle tissue is warm, it becomes more pliable, so your therapist can work deeper with less pressure. That's why hot stone massage feels deeply effective without the intensity of a [deep tissue massage](/services/deep-tissue-massage).",
        ],
      },
      {
        h2: "2. Stress relief",
        body: [
          "Warmth and gentle weight are naturally calming. Many guests describe a heavy, grounded feeling, as if the stones are anchoring them to the table. Combined with a quiet room and slow strokes, it's one of the most effective treatments we offer for stress.",
        ],
      },
      {
        h2: "3. Better sleep",
        body: [
          "Guests regularly tell us they sleep unusually well after a hot stone session. Deep relaxation, warmth and a calm nervous system make it a natural evening treatment. It's no substitute for treating a sleep disorder, but it can be a lovely part of a healthy routine.",
        ],
      },
      {
        h2: "4. Comfort in cold weather",
        body: [
          "Rawalpindi and Islamabad winters can be cold and dry. Hot stone massage is our most requested winter treatment because the warmth lasts for hours afterwards, which is perfect after a chilly commute.",
        ],
      },
      {
        h2: "5. Gentle option for sensitive areas",
        body: [
          "Because heat does part of the work, hot stone massage can achieve depth with less force. People who find firm pressure uncomfortable often prefer it.",
        ],
      },
      {
        h2: "6. Circulation support",
        body: [
          "Warmth may encourage local blood flow, which can help cold hands and feet feel more comfortable. Many guests notice their extremities feel warmer long after the session.",
        ],
      },
      {
        h2: "7. A sense of ritual",
        body: [
          "There's something special about hot stone massage: the smooth stones, the gentle warmth, the slow pace. It feels like an occasion, which is why it's a favourite for birthdays, anniversaries and Eid gifts.",
        ],
      },
      {
        h2: "What a hot stone session feels like",
        body: [
          "Your session begins with a short consultation and light oil massage. The therapist then introduces warm stones, testing the temperature first, and glides them along your back, legs and arms in long strokes. Some stones rest on your back or in your palms while the therapist works elsewhere.",
          "The stones should feel comfortably warm, never hot. If any stone feels too warm, say so immediately. The session ends with hands-only strokes and a few minutes to rest.",
        ],
      },
      {
        h2: "Hot stone vs other massages",
        body: [
          "How does hot stone compare with other popular treatments? A [Swedish massage](/services/swedish-massage) uses hands only, with light to medium pressure. It's relaxing, but without the deep, lingering warmth. A deep tissue massage reaches deeper layers with firm pressure, which some people find too intense. Hot stone sits between the two, offering depth through heat rather than force.",
          "Compared with an [aromatherapy massage](/services/aromatherapy-massage), hot stone works more on the body than the mind. Aromatherapy calms you through scent, while hot stone calms you through warmth and weight. Many guests in winter combine both: heated stones with a lavender or frankincense blend for a deeply grounding session.",
        ],
      },
      {
        h2: "How to prepare for a hot stone session",
        body: [
          "- Eat lightly at least an hour before your appointment",
          "- Drink a glass of water beforehand, since heat can be mildly dehydrating",
          "- Tell us about diabetes, circulation issues, blood pressure or pregnancy when booking",
          "- Avoid sunbathing or very hot showers just before your session",
          "- Arrive 10 minutes early so you can settle in and let your body cool down from the drive",
        ],
      },
      {
        h2: "Who should avoid hot stone massage?",
        body: [
          "- Pregnant women",
          "- People with diabetes-related nerve damage or reduced sensation",
          "- People with circulation problems, blood clots or varicose veins",
          "- Anyone with uncontrolled high blood pressure or heart conditions, unless cleared by a doctor",
          "- Anyone with sunburn, inflamed skin or open wounds",
          "When in doubt, consult your doctor and tell us before your session.",
        ],
      },
      {
        h2: "Aftercare tips",
        body: [
          "- Drink plenty of water",
          "- Avoid saunas or hot baths for the rest of the day",
          "- Keep the evening slow and restful",
          "- Moisturise if your skin feels dry",
          `At our Bahria Town Phase 7 spa, hot stone massage is ${P60} for 60 minutes and ${P30} for a 30-minute back session. For an extra-calming experience, ask us to add an [aromatherapy](/services/aromatherapy-massage) blend.`,
        ],
      },
    ],
    faqs: [
      { q: "Are the stones hot or warm?", a: "Comfortably warm. They're tested before touching your skin." },
      { q: "How long does a hot stone massage take?", a: "60 minutes is ideal, and a 30-minute back session is also available." },
      { q: "Is hot stone massage good for back tension?", a: "Many guests find heat helps muscles relax, which may ease tension." },
      { q: "Can I have hot stone massage in summer?", a: "Yes, rooms are air-conditioned, but it's especially popular in winter." },
      { q: "Is hot stone massage safe for everyone?", a: "No. Avoid it if pregnant, diabetic with nerve damage, or with circulation issues." },
      { q: "Do the stones get cleaned?", a: "Yes, they're washed and sanitised after every guest." },
      { q: "Will I be sore afterwards?", a: "Rarely. Most guests feel relaxed and slightly sleepy." },
      { q: "Can hot stone be combined with aromatherapy?", a: "Yes, just ask when booking." },
      { q: "How much does it cost in Rawalpindi?", a: `${P60} for 60 minutes at our Bahria Town Phase 7 spa.` },
      { q: "How often can I get hot stone massage?", a: "Every 2–4 weeks is a comfortable rhythm for most people." },
    ],
  },

  /* ───────────────────────── 4 ───────────────────────── */
  {
    slug: "massage-for-back-pain-desk-workers",
    title: "Massage for Back & Neck Pain: A Guide for Desk Workers",
    h1: "Massage for Back & Neck Pain: A Guide for Desk Workers",
    description:
      "Long hours at a desk? Learn which massages may help with back and neck tension, how often to book, and simple stretches to do at home between sessions.",
    keyword: "massage for back pain",
    datePublished: "2026-09-28",
    dateModified: "2026-11-13",
    image: IMG.deepTissue,
    excerpt: "Screens, steering wheels and stress: how massage and a few simple habits can ease desk-related tension.",
    services: ["back-neck-shoulder-massage", "deep-tissue-massage", "head-massage"],
    related: ["swedish-vs-deep-tissue-massage", "how-often-should-you-get-a-massage"],
    sections: [
      {
        h2: "Why desk work causes back and neck tension",
        body: [
          "Whether you work in an Islamabad office, a Bahria Town business, or from home on a laptop, the pattern is familiar. By mid-afternoon your shoulders creep towards your ears, your neck feels stiff, and your lower back aches when you stand up.",
          "The cause is usually simple: sustained posture. When we sit for hours, the head drifts forward, the shoulders round and the hip flexors shorten. Muscles at the back of the neck and between the shoulder blades work overtime to hold the head up, while others switch off. Over weeks and months, that imbalance shows up as tension, knots and aches.",
          "Massage won't replace good ergonomics or medical care, but many desk workers find it one of the most effective ways to manage everyday muscular tension. Here's how to use it well.",
        ],
      },
      {
        h2: "When to see a doctor first",
        body: [
          "Before booking a massage, check for warning signs. See a doctor or physiotherapist if you have:",
          "- Pain after a fall, accident or injury",
          "- Numbness, tingling or weakness in the arms or legs",
          "- Pain that radiates down a leg (possible sciatica)",
          "- Severe, sudden or worsening pain",
          "- Pain with fever, weight loss or other unexplained symptoms",
          "If your discomfort is the everyday, muscular 'desk tension' type, massage may help.",
        ],
      },
      {
        h2: "Best massages for desk-related tension",
        body: [
          "**[Back, neck & shoulder massage](/services/back-neck-shoulder-massage):** the entire session focuses on where desk workers hold tension. Even 30 minutes can make a noticeable difference.",
          "**[Deep tissue massage](/services/deep-tissue-massage):** slow, firm pressure on stubborn knots in the upper back and neck. Best when tension feels deep and long-standing.",
          "**[Head massage](/services/head-massage):** ideal when tension shows up as tight temples, a heavy head or stress headaches.",
          "**[Thai massage](/services/thai-massage):** assisted stretching opens the chest and hips, which counteracts the hunched sitting posture.",
        ],
      },
      {
        h2: "How often should desk workers get a massage?",
        body: [
          "For most office workers, every 2–4 weeks is a realistic, effective rhythm. During busy periods such as deadlines, audits or exam season, a short 30-minute session every 1–2 weeks can help you stay on top of tension before it builds.",
          `At our Bahria Town Phase 7 spa, a 30-minute back, neck and shoulder massage is ${P30}, which makes regular maintenance affordable.`,
        ],
      },
      {
        h2: "Five desk habits that make massage last longer",
        body: [
          "- **Raise your screen** so the top is at eye level. Use a stand or a stack of books for laptops.",
          "- **Sit back** in your chair with your feet flat and hips slightly above knees.",
          "- **Move every 30–45 minutes.** Stand, walk to get water, roll your shoulders.",
          "- **Keep your phone at eye level** rather than looking down for long periods.",
          "- **Breathe low.** Stress breathing into the chest tightens the neck, so try slow belly breaths.",
        ],
      },
      {
        h2: "Simple stretches to do between sessions",
        body: [
          "Do these gently, never into pain:",
          "- **Chin tucks:** sit tall and gently draw your chin straight back (making a 'double chin'). Hold for 5 seconds, 10 reps.",
          "- **Upper trap stretch:** tilt your ear towards your shoulder and hold for 20–30 seconds each side.",
          "- **Doorway chest stretch:** forearms on a door frame, step forward gently and hold for 30 seconds.",
          "- **Seated twist:** sit tall and rotate gently to each side, holding for 20 seconds.",
          "- **Hip flexor stretch:** half-kneel and gently push the hips forward, holding for 30 seconds each side.",
        ],
      },
      {
        h2: "What to tell your therapist",
        body: [
          "To get the most from your session, tell your therapist:",
          "- Where you feel tension and which side is worse",
          "- How long you sit each day and what your setup looks like",
          "- Whether you get headaches and where",
          "- Your preferred pressure",
          "A good therapist will tailor the session, and may show you one or two stretches to take home.",
        ],
      },
      {
        h2: "Make it a routine",
        body: [
          "The biggest difference comes from consistency, not intensity. A short, regular massage, a better desk setup and a few minutes of stretching each day add up. If you work in Bahria Town, DHA or Islamabad, our Phase 7 spa is easy to reach after work, and we're open until 3am.",
        ],
      },
    ],
    faqs: [
      { q: "Can massage help with back pain from sitting?", a: "Many people find it eases muscular tension from long hours of sitting. It isn't a medical treatment." },
      { q: "Which massage is best for neck pain?", a: "Back, neck & shoulder massage or deep tissue massage." },
      { q: "Is 30 minutes enough?", a: "For neck and shoulders, often yes. For the whole back, choose 60 minutes." },
      { q: "How often should office workers get a massage?", a: "Every 2–4 weeks for maintenance." },
      { q: "Can massage help tension headaches?", a: "Headaches linked to tight neck muscles may ease. See a doctor for frequent headaches." },
      { q: "Should I see a doctor before massage?", a: "Yes, if you have numbness, radiating pain or pain after an injury." },
      { q: "Are stretches important?", a: "Yes. Daily stretching helps keep massage benefits longer." },
      { q: "What desk setup helps most?", a: "Screen at eye level, feet flat and regular movement breaks." },
      { q: "Can I get a massage at lunchtime?", a: "Yes. A 30-minute session fits a long lunch break." },
      { q: "Is deep tissue too intense for beginners?", a: "Pressure can be adjusted, and you can start with medium pressure." },
    ],
  },
];
