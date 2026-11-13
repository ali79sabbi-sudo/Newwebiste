import type { Metadata } from "next";
import { SITE } from "@/config/site";

type BuildMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
};

export function absoluteUrl(path = "/") {
  return path === "/" ? SITE.domain : `${SITE.domain}${path}`;
}

/** Build page metadata. Titles are absolute and already include the brand where needed. */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
  image = "/opengraph-image",
  publishedTime,
  modifiedTime,
}: BuildMeta): Metadata {
  const url = absoluteUrl(path);
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: "en_PK",
      type,
      images: [{ url: image, width: 1200, height: 630, alt: `${SITE.name}, Bahria Town Phase 7` }],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
  };
}
