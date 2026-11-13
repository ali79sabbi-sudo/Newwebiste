"use client";

import { useState } from "react";

type Opt = { label: string; tags: string[] };
const QUESTIONS: { q: string; opts: Opt[] }[] = [
  {
    q: "What do you need most today?",
    opts: [
      { label: "To relax and de-stress", tags: ["relax"] },
      { label: "Relief from tight, sore muscles", tags: ["deep"] },
      { label: "More flexibility and energy", tags: ["stretch"] },
      { label: "Fresh, glowing skin", tags: ["beauty"] },
    ],
  },
  {
    q: "How do you like the pressure?",
    opts: [
      { label: "Gentle", tags: ["relax", "beauty"] },
      { label: "Medium", tags: ["warm", "stretch"] },
      { label: "Firm", tags: ["deep"] },
    ],
  },
  {
    q: "Where do you feel it most?",
    opts: [
      { label: "Neck & shoulders", tags: ["upper"] },
      { label: "Everywhere / whole body", tags: ["whole"] },
      { label: "Feet & legs", tags: ["feet"] },
      { label: "My mind, honestly", tags: ["mind"] },
    ],
  },
];

const RECS: { slug: string; name: string; when: (t: Set<string>) => boolean }[] = [
  { slug: "facial-treatments", name: "Facial Treatment", when: (t) => t.has("beauty") && !t.has("deep") },
  { slug: "back-neck-shoulder-massage", name: "Back, Neck & Shoulder Massage", when: (t) => t.has("upper") && (t.has("deep") || t.has("warm")) },
  { slug: "head-massage", name: "Head Massage (Oil Champi)", when: (t) => t.has("mind") && t.has("upper") },
  { slug: "foot-reflexology", name: "Foot Reflexology", when: (t) => t.has("feet") },
  { slug: "deep-tissue-massage", name: "Deep Tissue Massage", when: (t) => t.has("deep") },
  { slug: "thai-massage", name: "Thai Massage", when: (t) => t.has("stretch") },
  { slug: "aromatherapy-massage", name: "Aromatherapy Massage", when: (t) => t.has("mind") },
  { slug: "hot-stone-massage", name: "Hot Stone Massage", when: (t) => t.has("warm") && t.has("relax") },
  { slug: "swedish-massage", name: "Swedish Massage", when: () => true },
];

export function MassageQuiz({ phone, brand }: { phone: string; brand: string }) {
  const [step, setStep] = useState(0);
  const [tags, setTags] = useState<string[]>([]);
  const done = step >= QUESTIONS.length;
  const rec = done ? RECS.find((r) => r.when(new Set(tags)))! : null;

  return (
    <div className="card p-7 sm:p-10" aria-live="polite">
      {!done ? (
        <>
          <p className="eyebrow">
            Question {step + 1} of {QUESTIONS.length}
          </p>
          <p className="mt-3 font-serif text-[1.8rem] leading-tight text-linen-50">{QUESTIONS[step].q}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {QUESTIONS[step].opts.map((o) => (
              <button
                key={o.label}
                type="button"
                onClick={() => {
                  setTags((t) => [...t, ...o.tags]);
                  setStep((s) => s + 1);
                }}
                className="min-h-12 rounded-2xl border border-ink-700 px-5 py-3 text-left text-linen-200 transition hover:border-gold-400/70 hover:text-linen-50"
              >
                {o.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        rec && (
          <>
            <p className="eyebrow">We recommend</p>
            <p className="mt-3 font-serif text-[2.2rem] leading-tight text-gold-300">{rec.name}</p>
            <p className="mt-3 text-linen-200">Based on your answers, this treatment should suit you best. Your therapist will fine-tune pressure on the day.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                className="btn btn-whatsapp"
                target="_blank"
                rel="noopener"
                data-track="whatsapp_click"
                data-service={rec.slug}
                href={`https://wa.me/${phone}?text=${encodeURIComponent(`Hi ${brand}, your guide recommended a ${rec.name} for me. Is a slot available today?`)}`}
              >
                Book {rec.name}
              </a>
              <a href={`/services/${rec.slug}`} className="btn btn-ghost">
                Learn more
              </a>
              <button
                type="button"
                className="btn btn-call"
                onClick={() => {
                  setStep(0);
                  setTags([]);
                }}
              >
                Start again
              </button>
            </div>
          </>
        )
      )}
    </div>
  );
}
