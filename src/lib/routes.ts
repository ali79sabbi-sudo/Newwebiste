import { SERVICES } from "@/data/services";
import { LOCATIONS } from "@/data/locations";
import { POSTS } from "@/content/blog";

export type RouteEntry = { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" | "yearly"; lastModified: string };

const D = "2026-11-13";

/** Every indexable URL on the site (used by sitemap + SEO checks). */
export function allRoutes(): RouteEntry[] {
  const r = (path: string, priority: number, changeFrequency: RouteEntry["changeFrequency"] = "monthly", lastModified = D): RouteEntry => ({ path, priority, changeFrequency, lastModified });
  return [
    r("/", 1.0, "weekly"),
    r("/services", 0.9),
    ...SERVICES.map((s) => r(`/services/${s.slug}`, 0.9)),
    ...LOCATIONS.map((l) => r(`/locations/${l.slug}`, 0.9)),
    r("/pricing", 0.8, "monthly"),
    r("/packages", 0.8),
    r("/book", 0.8),
    r("/contact", 0.8),
    r("/gift-cards", 0.7),
    r("/about", 0.6),
    r("/gallery", 0.6),
    r("/reviews", 0.6),
    r("/faq", 0.7),
    r("/blog", 0.7, "weekly"),
    ...POSTS.map((p) => r(`/blog/${p.slug}`, 0.7, "monthly", p.dateModified)),
    r("/privacy-policy", 0.3, "yearly"),
    r("/terms", 0.3, "yearly"),
  ];
}
