import type { BlogPost } from "@/data/types";
import { IMG } from "@/data/images";
import { STANDARD_RATES, pkr } from "@/data/pricing";

const P30 = pkr(STANDARD_RATES[30]);
const P60 = pkr(STANDARD_RATES[60]);

export const POSTS_B: BlogPost[] = [
  /* ───────────────────────── 5 ───────────────────────── */
  {
    slug: "how-often-should-you-get-a-massage",
    title: "How Often Should You Get a Massage?",
    h1: "How Often Should You Get a Massage?",
    description:
      "Weekly, monthly or occasionally? How often to get a massage based on your goals, stress levels, budget and activity, with practical advice from our therapists.",
    keyword: "how often massage",
    datePublished: "2026-09-15",
    dateModified: "2026-11-13",
    image: IMG.massageRelaxWindow,
    excerpt: "Weekly, fortnightly or monthly? Find the right massage rhythm for your goals and budget.",
    services: ["full-body-massage", "sports-massage", "swedish-massage"],
    related: ["massage-for-back-pain-desk-workers", "best-massage-center-bahria-town-guide"],
    sections: [
      {
        h2: "There's no single right answer, but there is a right answer for you",
        body: [
          "One of the most common questions we hear at our Bahria Town spa is, 'How often should I come?' The honest answer is that it depends on why you're getting a massage, how your body responds, and what fits your schedule and budget.",
          "Someone training for a marathon has very different needs from someone who wants a monthly hour of calm. A desk worker with a stiff neck needs a different rhythm from a new mother who's barely slept.",
          "This guide breaks it down by goal, so you can find a realistic frequency, and then adjust based on how you feel.",
        ],
      },
      {
        h2: "For general relaxation and wellbeing: every 3–4 weeks",
        body: [
          "If you're mostly healthy and want to manage everyday stress, a massage every three to four weeks is a lovely rhythm. It gives you something to look forward to, resets your nervous system regularly and keeps light tension from building up.",
          "Good choices: [Swedish massage](/services/swedish-massage), [aromatherapy](/services/aromatherapy-massage) or a [full body massage](/services/full-body-massage).",
        ],
      },
      {
        h2: "For chronic tension or desk-related aches: every 1–2 weeks at first",
        body: [
          "If you're dealing with persistent tightness, such as a stiff neck from screens or a tight lower back from driving, start with sessions every one to two weeks for four to six weeks. Once things feel better, move to every three to four weeks for maintenance.",
          "Good choices: [back, neck & shoulder massage](/services/back-neck-shoulder-massage) or [deep tissue](/services/deep-tissue-massage). See our guide to [massage for back pain](/blog/massage-for-back-pain-desk-workers).",
        ],
      },
      {
        h2: "For athletes and active people: every 1–2 weeks during heavy training",
        body: [
          "If you train hard, whether at the gym, running, playing cricket or padel, regular massage may help muscles feel recovered and maintain flexibility. During intense training blocks, every one to two weeks works well. In lighter periods, every three to four weeks.",
          "Good choices: [sports massage](/services/sports-massage) or [Thai massage](/services/thai-massage) for mobility.",
        ],
      },
      {
        h2: "For high-stress periods: short and frequent",
        body: [
          "During exams, big projects, family events or wedding season, stress builds quickly. Short, frequent sessions, like a 30-minute head or shoulder massage every week or two, can be more helpful than one long session a month.",
          `At our spa a 30-minute session is ${P30}, which makes frequent short visits realistic.`,
        ],
      },
      {
        h2: "For special occasions: whenever you need it",
        body: [
          "Not everyone wants a routine, and that's fine. Many guests book before Eid, after a long trip, for a birthday, or simply after a hard week. An occasional massage still has real value. You'll just feel the benefits for a shorter time.",
        ],
      },
      {
        h2: "Signs you might need a massage sooner",
        body: [
          "- Your shoulders feel tight by midday",
          "- You're getting more tension headaches",
          "- You're sleeping poorly or waking up stiff",
          "- You feel irritable, tired or 'wired'",
          "- Your training feels heavier than usual",
        ],
      },
      {
        h2: "Budgeting for regular massage",
        body: [
          `Regular massage doesn't have to be expensive. At our Bahria Town Phase 7 spa every treatment is ${P30} for 30 minutes and ${P60} for 60 minutes. Some practical options:`,
          "- **Alternate lengths:** one 60-minute session, then a 30-minute session two weeks later",
          "- **Monthly Wellness package:** four 60-minute sessions to use within 60 days. See [packages](/packages)",
          "- **Gift cards:** ask family to gift sessions for birthdays or Eid",
        ],
      },
      {
        h2: "Can you get a massage too often?",
        body: [
          "For relaxation massage, frequent sessions are generally fine for healthy adults. For deep tissue, cupping or very firm work, give your body 48–72 hours to recover between sessions. If you feel bruised, very sore or unwell after massage, extend the gap and talk to your therapist.",
          "If you have a medical condition, are pregnant or take blood thinners, consult your doctor about what's appropriate.",
        ],
      },
      {
        h2: "Our simple recommendation",
        body: [
          "- **Stress & relaxation:** every 3–4 weeks",
          "- **Chronic tension:** every 1–2 weeks to start, then monthly",
          "- **Athletes:** every 1–2 weeks during heavy training",
          "- **Busy periods:** short 30-minute sessions weekly or fortnightly",
          "Start there, notice how you feel, and adjust. Your therapist can also help you find the right rhythm after your first session.",
        ],
      },
    ],
    faqs: [
      { q: "Is it okay to get a massage every week?", a: "For relaxation massage, yes for most healthy adults. Allow recovery after deep work." },
      { q: "How often should I get a deep tissue massage?", a: "Every 2–4 weeks, or weekly for a short period under guidance." },
      { q: "How long do massage benefits last?", a: "Relaxation can last days. Tension relief lasts longer with regular sessions." },
      { q: "Is monthly massage enough?", a: "For general wellbeing, monthly is a great rhythm." },
      { q: "What's the most affordable way to get regular massage?", a: "Short 30-minute sessions or the Monthly Wellness package." },
      { q: "Should athletes get massage before or after events?", a: "Light massage 1–2 days before, recovery massage 1–3 days after." },
      { q: "Can massage be harmful if too frequent?", a: "Very firm work without recovery can cause soreness. Space deeper sessions out." },
      { q: "How often should older adults get massage?", a: "Gentle sessions every 2–4 weeks, with medical advice if needed." },
      { q: "Can I alternate massage types?", a: "Yes. Many guests alternate Swedish and deep tissue." },
      { q: "How do I know what frequency suits me?", a: "Try a rhythm for a month and notice how you feel. Your therapist can advise you too." },
    ],
  },

  /* ───────────────────────── 6 ───────────────────────── */
  {
    slug: "first-spa-visit-what-to-expect",
    title: "First Time at a Spa? What to Expect",
    h1: "First Time at a Spa? What to Expect",
    description:
      "Nervous about your first massage? Learn what happens from arrival to aftercare, what to wear, basic spa etiquette and how to tell your therapist about pressure.",
    keyword: "first massage what to expect",
    datePublished: "2026-09-01",
    dateModified: "2026-11-13",
    image: IMG.towelsCandle,
    excerpt: "From arrival to aftercare: everything first-timers want to know, without the awkwardness.",
    services: ["swedish-massage", "foot-reflexology", "full-body-massage"],
    related: ["best-massage-center-bahria-town-guide", "swedish-vs-deep-tissue-massage"],
    sections: [
      {
        h2: "Feeling nervous is completely normal",
        body: [
          "If you've never had a professional massage, it's natural to feel unsure. What do I wear? Do I talk? What if I'm ticklish? Many of our guests in Bahria Town and Rawalpindi tell us they put off their first visit for months simply because they didn't know what to expect.",
          "The truth is that a professional spa visit is calm, respectful and designed around your comfort. You stay in control the whole time. This guide walks you through every step, from booking to aftercare, so you can relax before you even arrive.",
          "If you'd prefer to ease in gently, consider starting with a clothed treatment like [foot reflexology](/services/foot-reflexology) or a [head massage](/services/head-massage).",
        ],
      },
      {
        h2: "Before your visit: booking",
        body: [
          "When you book, by WhatsApp or phone, mention that it's your first massage. Tell us about any health conditions, injuries, pregnancy or allergies. If you have a preference about your therapist, share it then too.",
          "If you don't know which treatment to choose, a [Swedish massage](/services/swedish-massage) is the gentlest, most popular first choice.",
        ],
      },
      {
        h2: "Arrival: come 10 minutes early",
        body: [
          "Arriving early gives you time to settle in, use the washroom, fill a short health form and switch your phone to silent. Rushing in late makes it harder to relax, and may shorten your session.",
          "Eat lightly before your appointment. A heavy meal right before a massage can feel uncomfortable when lying face-down.",
        ],
      },
      {
        h2: "The consultation",
        body: [
          "Your therapist will ask a few quick questions:",
          "- Is this your first massage?",
          "- Any injuries, conditions, pregnancy or allergies?",
          "- Which areas feel tight or sore?",
          "- Do you prefer light, medium or firm pressure?",
          "- Any areas you'd like them to avoid?",
          "This is your chance to shape the session. There are no wrong answers.",
        ],
      },
      {
        h2: "What to wear (and what not to worry about)",
        body: [
          "For oil massages, your therapist leaves the room while you undress to your comfort level and lie under a sheet or towel. Disposable undergarments are provided if you prefer. You remain covered throughout, and only the area being massaged is uncovered at any time.",
          "For [Thai massage](/services/thai-massage), foot reflexology and head massage, you stay fully clothed. We provide loose, clean clothing for Thai massage.",
          "Don't worry about unshaved legs, body hair or anything else. Therapists are professionals and genuinely don't notice.",
        ],
      },
      {
        h2: "During the massage: communication is welcome",
        body: [
          "You don't have to talk. Many people simply close their eyes and breathe. But do speak up about:",
          "- **Pressure:** 'a little lighter please' or 'you can go firmer'",
          "- **Temperature:** if you feel cold or warm",
          "- **Comfort:** if a position or area feels uncomfortable",
          "- **Ticklishness:** your therapist will adjust technique",
          "Your therapist will check in, but you're always welcome to say something first.",
        ],
      },
      {
        h2: "Spa etiquette in a nutshell",
        body: [
          "- Arrive on time (ideally 10 minutes early)",
          "- Keep phones silent",
          "- Shower beforehand if possible",
          "- Respect the professional, therapeutic nature of the service",
          "- Tell us in advance if you need to cancel",
          "Tipping is optional and never expected.",
        ],
      },
      {
        h2: "After the massage",
        body: [
          "Take your time getting up, since you may feel light-headed if you rise too quickly. Drink some water. Your therapist may share aftercare advice, such as avoiding heavy exercise or taking a warm shower later.",
          "Some people feel energised after a massage. Others feel sleepy. Both are normal. After deeper work you may feel mild soreness for a day or two.",
        ],
      },
      {
        h2: "Choosing your first treatment",
        body: [
          "If you are unsure what to book, think about how you want to feel afterwards. For pure relaxation, choose a [Swedish massage](/services/swedish-massage), which is gentle, flowing and the most popular first booking at our spa. If you carry tension in your shoulders and neck, a [back, neck & shoulder massage](/services/back-neck-shoulder-massage) gives focused relief in just 30 minutes.",
          "If undressing makes you hesitant, start with a fully clothed treatment such as [foot reflexology](/services/foot-reflexology), a head massage or a Thai massage. Many guests try one of these first, feel comfortable with the environment, and then book a full oil massage on their next visit.",
          "Whatever you choose, you can change your mind on the day. Just talk to your therapist during the consultation.",
        ],
      },
      {
        h2: "Common first-timer worries, answered",
        body: [
          "**'What if I fall asleep?'** It's a compliment! Many guests do.",
          "**'What if my stomach rumbles?'** Completely normal. Relaxation activates digestion.",
          "**'What if I feel emotional?'** Deep relaxation can release emotions. That's okay.",
          "**'What if it hurts?'** Speak up immediately and the pressure will change.",
        ],
      },
      {
        h2: "Ready for your first visit?",
        body: [
          `At our spa in Bahria Town Phase 7, first-time guests are always welcome. A 60-minute Swedish massage is ${P60} and a 30-minute session is ${P30}. Message us on WhatsApp and mention it's your first time, and we'll take care of the rest.`,
        ],
      },
    ],
    faqs: [
      { q: "What should I wear for my first massage?", a: "Anything comfortable. You'll be draped throughout an oil massage, and Thai massage is clothed." },
      { q: "Should I shower before a massage?", a: "Yes, if possible. It helps you feel fresh and relaxed." },
      { q: "Do I have to talk during a massage?", a: "No. Talk only if you want to, but do speak up about pressure or comfort." },
      { q: "What is the best first massage?", a: "Swedish massage is the gentlest and most popular choice." },
      { q: "Will I be fully undressed?", a: "Undress only to your comfort level. Disposable undergarments are available." },
      { q: "Is it okay to fall asleep?", a: "Yes, it's very common." },
      { q: "Can I eat before a massage?", a: "Eat lightly at least an hour before." },
      { q: "Should I tip?", a: "Tipping is optional and never expected." },
      { q: "What if I'm ticklish?", a: "Tell your therapist and they'll use firmer, slower strokes." },
      { q: "How long should my first massage be?", a: "60 minutes gives you time to settle in fully. 30 minutes is a gentle taster." },
    ],
  },

  /* ───────────────────────── 7 ───────────────────────── */
  {
    slug: "thai-massage-benefits",
    title: "Thai Massage Benefits: Stretch, Release, Recharge",
    h1: "Thai Massage Benefits: Stretch, Release, Recharge",
    description:
      "How traditional Thai massage combines stretching and pressure to support flexibility and energy, plus what to wear and expect at your Rawalpindi session.",
    keyword: "Thai massage benefits",
    datePublished: "2026-08-18",
    dateModified: "2026-11-13",
    image: IMG.thaiShoulder,
    excerpt: "Assisted stretching, rhythmic pressure and no oil: why Thai massage leaves you lighter and more energised.",
    services: ["thai-massage", "sports-massage", "balinese-massage"],
    related: ["swedish-vs-deep-tissue-massage", "how-often-should-you-get-a-massage"],
    sections: [
      {
        h2: "What makes Thai massage different?",
        body: [
          "Traditional Thai massage looks and feels very different from an oil massage. You stay fully clothed, there's no oil, and instead of lying still you're gently moved through a series of assisted stretches while your therapist applies rhythmic pressure with palms, thumbs, elbows, knees and feet.",
          "Its roots go back centuries, blending influences from Indian Ayurvedic practice, traditional Chinese medicine and Buddhist traditions. The technique follows 'sen' lines, energy pathways said to run through the body, but you don't need to believe in energy lines to enjoy what Thai massage does: loosen stiff bodies and leave people feeling lighter.",
          "Here's what our guests at our [Thai massage](/services/thai-massage) sessions in Bahria Town most often notice, and how to prepare.",
        ],
      },
      {
        h2: "Benefit 1: Improved flexibility",
        body: [
          "Assisted stretches take your body into ranges you rarely reach on your own, gently and with support. Over time many guests notice easier movement in hips, hamstrings, shoulders and lower back. It's sometimes called 'lazy yoga' for good reason.",
        ],
      },
      {
        h2: "Benefit 2: More energy",
        body: [
          "Unlike relaxation massages that can make you sleepy, Thai massage often leaves people feeling energised and alert. That makes it a great choice for an afternoon session before going back to work or meeting friends.",
        ],
      },
      {
        h2: "Benefit 3: Relief from stiffness",
        body: [
          "Long hours sitting at desks or in cars tighten the hips and back. Thai massage combines pressure and stretching to target that stiffness from two angles. Many of our desk-working guests find it a perfect complement to a [back, neck & shoulder massage](/services/back-neck-shoulder-massage).",
        ],
      },
      {
        h2: "Benefit 4: Better posture awareness",
        body: [
          "Opening the chest, shoulders and hips can make it easier to sit and stand tall. Guests often tell us they're more aware of their posture for days afterwards.",
        ],
      },
      {
        h2: "Benefit 5: Calm through breath",
        body: [
          "Each stretch is synchronised with your breathing. Slow, deep breaths during stretches create a meditative focus that calms the mind, even though the body is active.",
        ],
      },
      {
        h2: "Benefit 6: No oil, no fuss",
        body: [
          "Because Thai massage is clothed and oil-free, you can go straight back to your day without showering or worrying about oily hair. That's ideal for lunch breaks and busy schedules.",
        ],
      },
      {
        h2: "What to wear for Thai massage",
        body: [
          "We provide clean, loose cotton Thai garments. If you prefer your own clothing, choose soft, stretchy trousers and a T-shirt. Avoid jeans, belts and jewellery. Remove your socks so your therapist can work on your feet.",
        ],
      },
      {
        h2: "What a session feels like",
        body: [
          "Your session typically starts at the feet and legs with rhythmic palm pressure, moves into assisted leg and hip stretches, then works through the back, shoulders, arms, neck and head. Some stretches are done lying on your back, others on your side or seated.",
          "You should feel deep stretching, not pain. Breathe slowly and tell your therapist if any stretch feels too much.",
        ],
      },
      {
        h2: "How to prepare for your first Thai massage",
        body: [
          "A little preparation makes your first Thai massage far more comfortable. Eat a light meal at least 90 minutes before, since several stretches gently compress the abdomen. Drink a glass of water, but avoid caffeine right before your session if you want to stay relaxed.",
          "Arrive 10 minutes early so you can change into our loose cotton clothing without rushing. Tell your therapist about any stiffness, old injuries or areas that feel fragile, such as knees, lower back or shoulders. They will adapt each stretch to your body rather than forcing a fixed routine.",
          "Most importantly, breathe. Thai massage works best when you exhale slowly into each stretch. If you hold your breath, your muscles tense up and resist. Your therapist will often cue your breathing, so just follow along.",
        ],
      },
      {
        h2: "Thai massage for desk workers and drivers",
        body: [
          "Many guests at our Bahria Town spa sit for eight or more hours a day, at a desk in Islamabad, in traffic on the Expressway, or both. Long sitting shortens the hip flexors, rounds the shoulders and stiffens the mid-back. Thai massage tackles exactly these areas with hip openers, gentle backbends supported by the therapist and chest-opening stretches.",
          "If you combine a monthly Thai session with the short desk stretches in our [back pain guide for desk workers](/blog/massage-for-back-pain-desk-workers), you will likely notice a real difference in how you feel at the end of the working day.",
        ],
      },
      {
        h2: "Who should avoid Thai massage?",
        body: [
          "- Pregnant women, unless cleared by a doctor (and not in the first trimester)",
          "- People with recent surgery, joint replacements or spinal injuries",
          "- Anyone with severe osteoporosis or uncontrolled high blood pressure",
          "- People with acute injuries, sprains or inflammation",
          "When unsure, consult your doctor first.",
        ],
      },
      {
        h2: "Thai massage vs other options",
        body: [
          "If you want relaxation with a little stretching, try [Balinese massage](/services/balinese-massage). If you train hard and want recovery-focused work, try [sports massage](/services/sports-massage). If you want flexibility and energy, Thai is ideal.",
          `At our Bahria Town Phase 7 spa, Thai massage is ${P60} for 60 minutes and ${P30} for a 30-minute stretch session.`,
        ],
      },
    ],
    faqs: [
      { q: "Is Thai massage painful?", a: "It should feel like a deep stretch, not pain. Pressure is adjusted to you." },
      { q: "Do I need to be flexible?", a: "No. Stretches are adapted to your current flexibility." },
      { q: "Is oil used in Thai massage?", a: "No. Traditional Thai massage is oil-free and clothed." },
      { q: "What should I wear?", a: "We provide loose Thai clothing, or you can wear your own soft, stretchy clothes." },
      { q: "How often should I get Thai massage?", a: "Every 2–4 weeks for flexibility and stiffness." },
      { q: "Is Thai massage good for athletes?", a: "Yes. It may support flexibility and recovery." },
      { q: "Can Thai massage help back stiffness?", a: "Many guests find it eases muscular stiffness. See a doctor for injuries." },
      { q: "Should I eat before Thai massage?", a: "Eat lightly at least 90 minutes before." },
      { q: "How long is a Thai massage session?", a: "60 minutes is ideal, and 30 minutes works for a short stretch session." },
      { q: "Can older adults have Thai massage?", a: "Often yes, with gentler stretches and medical clearance where needed." },
    ],
  },

  /* ───────────────────────── 8 ───────────────────────── */
  {
    slug: "aromatherapy-essential-oils-guide",
    title: "Aromatherapy Oils Guide: Lavender, Eucalyptus & More",
    h1: "Aromatherapy Oils Guide: Lavender, Eucalyptus & More",
    description:
      "A simple guide to the essential oils used in aromatherapy massage and the moods they're known for: calm, focus, energy and sleep, plus how to use them safely.",
    keyword: "aromatherapy oils",
    datePublished: "2026-08-05",
    dateModified: "2026-11-13",
    image: IMG.amberBottles,
    excerpt: "Lavender for calm, eucalyptus for clarity, citrus for mood: choosing your aromatherapy blend.",
    services: ["aromatherapy-massage", "hot-stone-massage", "head-massage"],
    related: ["benefits-of-hot-stone-massage", "first-spa-visit-what-to-expect"],
    sections: [
      {
        h2: "What is aromatherapy?",
        body: [
          "Aromatherapy is the use of plant-based essential oils to support mood and wellbeing. In a spa, essential oils are diluted in a carrier oil (such as sweet almond, jojoba or grapeseed) and used during massage, so you benefit from both the scent and the touch.",
          "Our sense of smell is closely linked to the parts of the brain involved in emotion and memory, which is why a single scent can calm you down, lift your mood or bring back a memory instantly. An [aromatherapy massage](/services/aromatherapy-massage) uses that connection deliberately.",
          "Below is a simple guide to the oils you're most likely to meet at our Bahria Town spa, what they're traditionally known for, and how to choose.",
        ],
      },
      {
        h2: "For calm and sleep",
        body: [
          "**Lavender:** the most popular essential oil in the world, known for its soothing, floral scent. It's our most requested blend for stress and better sleep.",
          "**Chamomile:** soft, sweet and gentle. It suits anxious minds and sensitive moods.",
          "**Frankincense:** warm, woody and grounding, often used for meditation and deep breathing.",
          "**Sandalwood:** rich and calming, a classic in South Asian wellness traditions.",
        ],
      },
      {
        h2: "For focus and clarity",
        body: [
          "**Eucalyptus:** fresh and clean, popular for a 'clear head' feeling, especially in winter.",
          "**Peppermint:** cool and invigorating. Used in small amounts, it can feel refreshing for tension in the head and neck.",
          "**Rosemary:** herbal and bright, traditionally associated with mental alertness.",
        ],
      },
      {
        h2: "For mood and energy",
        body: [
          "**Sweet orange:** cheerful and uplifting. It's hard to feel gloomy around orange oil.",
          "**Bergamot:** citrusy with a floral twist, and a favourite for lifting low moods.",
          "**Lemongrass:** zesty and energising, often used in Thai-inspired blends.",
        ],
      },
      {
        h2: "For a luxurious, sensory experience",
        body: [
          "**Rose:** romantic, rich and comforting.",
          "**Ylang-ylang:** sweet and exotic, used in Balinese-style blends.",
          "**Jasmine:** heady and warm, deeply associated with South Asian gardens.",
        ],
      },
      {
        h2: "How to choose your blend",
        body: [
          "Ask yourself one question: how do I want to feel when I leave?",
          "- **Calm and sleepy:** lavender, chamomile or frankincense",
          "- **Clear and focused:** eucalyptus, peppermint or rosemary",
          "- **Bright and uplifted:** sweet orange or bergamot",
          "- **Pampered:** rose, ylang-ylang or jasmine",
          "At our spa you'll smell two or three blends before the massage and choose the one that feels right that day. Trust your nose.",
        ],
      },
      {
        h2: "What happens in an aromatherapy massage session",
        body: [
          "Your session begins with a short consultation. Your therapist asks about your mood, sleep, stress levels, any allergies and skin sensitivities. You then smell two or three prepared blends. There's no right answer, so pick the one your body responds to.",
          "The massage itself uses slow, flowing strokes similar to a [Swedish massage](/services/swedish-massage), with light to medium pressure so the focus stays on relaxation and scent. Warm towels and a quiet room do the rest. Many guests drift off within the first twenty minutes.",
          "Afterwards, we suggest leaving the oil on your skin for a few hours if you can, so it continues to absorb and the scent stays with you through the evening.",
        ],
      },
      {
        h2: "Common myths about essential oils",
        body: [
          "**'More oil means stronger results.'** Not true. Essential oils are highly concentrated, and using too much can irritate the skin or cause headaches. Proper dilution is what makes them pleasant and safe.",
          "**'Natural means safe for everyone.'** Many plants are natural and still unsuitable for certain people, such as some oils during pregnancy or for people with asthma. That's why we always ask health questions first.",
          "**'Aromatherapy can cure illness.'** Aromatherapy may support relaxation and mood, but it is not a medical treatment. If you have ongoing anxiety, insomnia or pain, please speak to a doctor alongside any spa treatments you enjoy.",
        ],
      },
      {
        h2: "Safety first",
        body: [
          "Essential oils are concentrated and should be used carefully:",
          "- Always dilute essential oils in a carrier oil before skin contact",
          "- Avoid citrus oils on skin exposed to strong sun for 12 hours",
          "- If pregnant or breastfeeding, consult your doctor, since some oils aren't recommended",
          "- If you have asthma, epilepsy or fragrance sensitivities, tell your therapist first",
          "- Never swallow essential oils",
          "- Keep oils away from children and pets",
          "A professional therapist will always ask about these before choosing a blend.",
        ],
      },
      {
        h2: "Using aromatherapy at home",
        body: [
          "- **Diffuser:** a few drops of lavender in the evening for a calm bedroom",
          "- **Pillow spray:** diluted lavender in water (shake well)",
          "- **Warm bath:** a few drops mixed into a carrier oil first",
          "- **Steam inhalation:** one drop of eucalyptus in hot water (eyes closed)",
          "These simple rituals can extend the calm of a spa visit into everyday life.",
        ],
      },
      {
        h2: "Pairing aromatherapy with other treatments",
        body: [
          "Aromatherapy works beautifully alongside other treatments. Add a calming blend to a [hot stone massage](/services/hot-stone-massage) for deeper relaxation, or use peppermint and eucalyptus in a [head massage](/services/head-massage) to clear a busy mind.",
          `At our Bahria Town Phase 7 spa, aromatherapy massage is ${P60} for 60 minutes and ${P30} for 30 minutes. Book on WhatsApp and tell us how you'd like to feel, and we'll prepare your blend.`,
        ],
      },
    ],
    faqs: [
      { q: "Which essential oil is best for sleep?", a: "Lavender is the most popular choice, with chamomile and frankincense as alternatives." },
      { q: "Which oil is best for headaches?", a: "Peppermint and lavender are commonly used for tension. See a doctor for frequent headaches." },
      { q: "Are essential oils safe for skin?", a: "Yes, when properly diluted. Patch test if your skin is sensitive." },
      { q: "Can I use essential oils during pregnancy?", a: "Some oils aren't recommended. Consult your doctor first." },
      { q: "What is a carrier oil?", a: "A neutral oil, like almond or jojoba, used to dilute essential oils." },
      { q: "Can I choose my own blend at the spa?", a: "Yes. You'll smell a few blends and pick your favourite." },
      { q: "Do citrus oils cause sun sensitivity?", a: "Some can. Avoid strong sun on treated skin for 12 hours." },
      { q: "Is aromatherapy good for stress?", a: "Many people find calming scents with massage very relaxing." },
      { q: "Can I add aromatherapy to any massage?", a: "Usually yes, just ask when booking." },
      { q: "How long does the scent last?", a: "A few hours on the skin, depending on the oil." },
    ],
  },
];
