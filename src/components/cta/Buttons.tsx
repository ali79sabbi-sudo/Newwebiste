import { SITE, telHref, mailHref } from "@/config/site";
import { waLink } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";

type Size = "md" | "sm";
const sz = (s: Size) => (s === "sm" ? " btn-sm" : "");

/** All CTAs are plain links (zero JS). Clicks are tracked by the global delegated listener via data-track. */
export function WhatsAppButton({
  message,
  label = "Book on WhatsApp",
  service,
  size = "md",
  className = "",
}: {
  message?: string;
  label?: string;
  service?: string;
  size?: Size;
  className?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener"
      className={`btn btn-whatsapp${sz(size)} ${className}`}
      data-track="whatsapp_click"
      data-service={service}
    >
      <Icon name="whatsapp" size={size === "sm" ? 18 : 20} />
      {label}
    </a>
  );
}

export function CallButton({
  label = `Call ${SITE.phoneDisplay}`,
  service,
  size = "md",
  variant = "call",
  className = "",
}: {
  label?: string;
  service?: string;
  size?: Size;
  variant?: "call" | "ghost";
  className?: string;
}) {
  return (
    <a href={telHref} className={`btn btn-${variant}${sz(size)} ${className}`} data-track="call_click" data-service={service}>
      <Icon name="phone" size={18} />
      {label}
    </a>
  );
}

export function DirectionsButton({ size = "md", className = "" }: { size?: Size; className?: string }) {
  return (
    <a
      href={SITE.googleMapsUrl}
      target="_blank"
      rel="noopener"
      className={`btn btn-ghost${sz(size)} ${className}`}
      data-track="directions_click"
    >
      <Icon name="pin" size={18} />
      Get directions
    </a>
  );
}

export function EmailLink({ className = "" }: { className?: string }) {
  return (
    <a href={mailHref} className={className} data-track="email_click">
      {SITE.email}
    </a>
  );
}
