export type TrackEvent =
  | "whatsapp_click"
  | "call_click"
  | "directions_click"
  | "email_click"
  | "booking_form_submit";

type Gtag = (cmd: "event", name: string, params: Record<string, unknown>) => void;

/** Send a GA4 event. A no-op when GA isn't loaded (no NEXT_PUBLIC_GA_ID). */
export function track(event: TrackEvent, params: { service?: string } = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  gtag?.("event", event, { page_path: window.location.pathname, service: params.service ?? "general" });
}
