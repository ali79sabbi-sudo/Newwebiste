import { SERVICES_A } from "./services-a";
import { SERVICES_B } from "./services-b";
import { SERVICES_C } from "./services-c";
import { fromPrice, pkr } from "./pricing";
import type { Service } from "./types";

export const SERVICES: Service[] = [...SERVICES_A, ...SERVICES_B, ...SERVICES_C];

export const SIGNATURE_SLUGS = [
  "swedish-massage",
  "deep-tissue-massage",
  "thai-massage",
  "hot-stone-massage",
  "aromatherapy-massage",
  "full-body-massage",
];

export const TOP_LOCATION_SLUGS = SIGNATURE_SLUGS;

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function servicesBySlugs(slugs: string[]): Service[] {
  return slugs.map((s) => getService(s)).filter((s): s is Service => Boolean(s));
}

export function serviceTitle(s: Service): string {
  return s.title.replace("{from}", pkr(fromPrice(s.slug)));
}
