import { SITE, FULL_ADDRESS } from "@/config/site";
import { SERVICES } from "@/data/services";
import { LOCATIONS } from "@/data/locations";
import { PRICE_LIST, pkr } from "@/data/pricing";
import { POSTS } from "@/content/blog";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    "## Contact",
    `- Phone / WhatsApp: ${SITE.phoneDisplay} (${SITE.phoneIntl})`,
    `- WhatsApp link: https://wa.me/${SITE.whatsapp}`,
    `- Email: ${SITE.email}`,
    `- Address: ${FULL_ADDRESS}, Pakistan`,
    `- Hours: ${SITE.hoursDisplay}`,
    `- Facebook: ${SITE.facebook}`,
    "- Policy: strictly professional, therapeutic treatments only",
    "",
    "## Prices (PKR)",
    ...PRICE_LIST.map((r) => `- ${r.name}: ${Object.entries(r.prices).map(([m, p]) => `${m} min ${pkr(p)}`).join(", ")}`),
    "",
    "## Treatments",
    ...SERVICES.map((s) => `- [${s.name}](${SITE.domain}/services/${s.slug}): ${s.cardBenefit}`),
    "",
    "## Areas served",
    ...LOCATIONS.map((l) => `- [${l.name}](${SITE.domain}/locations/${l.slug})`),
    "",
    "## Key pages",
    `- [Price list](${SITE.domain}/pricing)`,
    `- [Packages](${SITE.domain}/packages)`,
    `- [Book online](${SITE.domain}/book)`,
    `- [FAQ](${SITE.domain}/faq)`,
    `- [Contact](${SITE.domain}/contact)`,
    "",
    "## Articles",
    ...POSTS.map((p) => `- [${p.h1}](${SITE.domain}/blog/${p.slug})`),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
