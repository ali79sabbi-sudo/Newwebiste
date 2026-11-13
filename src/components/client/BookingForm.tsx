"use client";

import { useState, type FormEvent } from "react";
import { track } from "@/lib/analytics";

type Props = { services: string[]; durations: number[]; whatsapp: string; brand: string; tel: string };

const today = () => new Date().toISOString().slice(0, 10);

/** No backend: builds a formatted WhatsApp message and opens wa.me. */
export function BookingForm({ services, durations, whatsapp, brand, tel }: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v = Object.fromEntries(fd.entries()) as Record<string, string>;
    const err: Record<string, string> = {};
    if (!v.name || v.name.trim().length < 2) err.name = "Please enter your name.";
    if (!/^(\+?92|0)?3\d{2}[\s-]?\d{7}$/.test((v.phone || "").replace(/\s/g, "")))
      err.phone = "Please enter a valid Pakistani mobile number, e.g. 0300 1234567.";
    if (!v.service) err.service = "Please choose a treatment.";
    if (!v.date) err.date = "Please choose a date.";
    if (!v.time) err.time = "Please choose a time.";
    setErrors(err);
    if (Object.keys(err).length) {
      const first = Object.keys(err)[0];
      document.getElementById(`bf-${first}`)?.focus();
      return;
    }
    const msg = [
      `Hi ${brand}, I'd like to book:`,
      `• Treatment: ${v.service}`,
      `• Duration: ${v.duration} min`,
      `• Date: ${v.date}`,
      `• Time: ${v.time}`,
      `• Name: ${v.name}`,
      `• Phone: ${v.phone}`,
      v.notes ? `• Notes: ${v.notes}` : "",
      "Please confirm availability. Thank you!",
    ]
      .filter(Boolean)
      .join("\n");
    track("booking_form_submit", { service: v.service });
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    setSent(true);
  };

  const field = "mt-2 block w-full min-h-12 rounded-xl border border-ink-700 bg-ink-800 px-4 py-3 text-linen-50 placeholder:text-stone-400 focus:border-gold-400 focus:outline-none";
  const label = "text-sm font-semibold text-linen-50";
  const err = (k: string) =>
    errors[k] ? (
      <p id={`bf-${k}-err`} className="mt-1.5 text-sm text-clay-400" role="alert">
        {errors[k]}
      </p>
    ) : null;
  const aria = (k: string) => ({ "aria-invalid": Boolean(errors[k]), "aria-describedby": errors[k] ? `bf-${k}-err` : undefined });

  if (sent)
    return (
      <div className="card p-8 text-center sm:p-12" role="status">
        <p className="eyebrow">Almost there</p>
        <p className="mt-3 font-serif text-[2rem] text-linen-50">Your message is ready in WhatsApp.</p>
        <p className="mt-3 text-linen-200">Just press send. We&apos;ll confirm your slot shortly. Didn&apos;t open? Call us instead.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={tel} className="btn btn-call" data-track="call_click">
            Call instead
          </a>
          <button type="button" className="btn btn-ghost" onClick={() => setSent(false)}>
            Edit booking
          </button>
        </div>
      </div>
    );

  return (
    <form onSubmit={onSubmit} noValidate className="card grid gap-5 p-6 sm:grid-cols-2 sm:p-10" aria-label="Booking form">
      <div>
        <label htmlFor="bf-name" className={label}>Your name *</label>
        <input id="bf-name" name="name" autoComplete="name" className={field} placeholder="e.g. Ayesha K." {...aria("name")} />
        {err("name")}
      </div>
      <div>
        <label htmlFor="bf-phone" className={label}>Mobile number *</label>
        <input id="bf-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className={field} placeholder="0300 1234567" {...aria("phone")} />
        {err("phone")}
      </div>
      <div>
        <label htmlFor="bf-service" className={label}>Treatment *</label>
        <select id="bf-service" name="service" className={field} defaultValue="" {...aria("service")}>
          <option value="" disabled>
            Choose a treatment
          </option>
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        {err("service")}
      </div>
      <div>
        <label htmlFor="bf-duration" className={label}>Duration</label>
        <select id="bf-duration" name="duration" className={field} defaultValue={String(durations[durations.length - 1])}>
          {durations.map((d) => (
            <option key={d} value={d}>
              {d} minutes
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="bf-date" className={label}>Preferred date *</label>
        <input id="bf-date" name="date" type="date" min={today()} className={field} {...aria("date")} />
        {err("date")}
      </div>
      <div>
        <label htmlFor="bf-time" className={label}>Preferred time *</label>
        <input id="bf-time" name="time" type="time" step={900} className={field} {...aria("time")} />
        {err("time")}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="bf-notes" className={label}>Notes (optional)</label>
        <textarea id="bf-notes" name="notes" rows={3} className={field} placeholder="Pressure preference, health notes, booking for two…" />
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-whatsapp">
          Send on WhatsApp
        </button>
        <a href={tel} className="btn btn-call" data-track="call_click">
          Call instead
        </a>
        <p className="text-sm text-stone-400">No advance payment. We confirm on WhatsApp.</p>
      </div>
    </form>
  );
}
