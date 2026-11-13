import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";
import { allRoutes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes().map((r) => ({
    url: r.path === "/" ? SITE.domain : `${SITE.domain}${r.path}`,
    lastModified: r.lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
