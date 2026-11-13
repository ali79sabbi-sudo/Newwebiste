import { SITE } from "@/config/site";

export const DEFAULT_WA_MESSAGE = `Hi ${SITE.name}, I'd like to book a massage. Is a slot available today?`;

/** Build a wa.me link with an optional pre-filled message. */
export function waLink(message: string = DEFAULT_WA_MESSAGE): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function waServiceMessage(serviceName: string, minutes?: number): string {
  const d = minutes ? `${minutes}-min ` : "";
  return `Hi ${SITE.name}, I'd like to book a ${d}${serviceName}. Is a slot available today?`;
}
