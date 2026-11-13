import type { StaticImageData } from "next/image";
import type { IconName } from "@/components/ui/Icon";

export type Faq = { q: string; a: string };

export type ContentSection = {
  h2: string;
  /** Paragraphs. Supports [text](/href), **bold** and lines beginning with "- " (bullet list). */
  body: string[];
};

export type ImageRef = { src: StaticImageData; alt: string };

export type ServiceCategory = "Relaxation" | "Pain Relief" | "Therapeutic" | "Beauty";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  category: ServiceCategory;
  h1: string;
  /** May include {from}, replaced with the live "from" price */
  title: string;
  description: string;
  primaryKeyword: string;
  keywords: string[];
  benefitLine: string;
  cardBenefit: string;
  image: ImageRef;
  pressure: string;
  intro: string[];
  benefits: { title: string; text: string; icon: IconName }[];
  idealFor: string[];
  avoidIf: string[];
  steps: { title: string; text: string }[];
  comparison: { title: string; vs: string; body: string[] };
  aftercare: string[];
  local: ContentSection;
  faqs: Faq[];
  related: string[];
  blog: string[];
};

export type LocationPage = {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  primaryKeyword: string;
  keywords: string[];
  eyebrow: string;
  heroLine: string;
  image: ImageRef;
  intro: string[];
  directions: { from: string; steps: string[] }[];
  travel: { label: string; time: string }[];
  landmarks: string[];
  why: ContentSection;
  extra: ContentSection;
  areaServed: string[];
  faqs: Faq[];
};

export type BlogPost = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  keyword: string;
  datePublished: string;
  dateModified: string;
  image: ImageRef;
  excerpt: string;
  sections: ContentSection[];
  faqs: Faq[];
  services: string[];
  related: string[];
};

export type PageCopy = {
  title: string;
  description: string;
  h1: string;
  primaryKeyword: string;
  keywords?: string[];
};
