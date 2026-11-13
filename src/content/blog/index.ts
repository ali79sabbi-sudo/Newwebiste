import { POSTS_A } from "./posts-a";
import { POSTS_B } from "./posts-b";
import type { BlogPost } from "@/data/types";

/** Newest first */
export const POSTS: BlogPost[] = [...POSTS_A, ...POSTS_B].sort((a, b) =>
  b.datePublished.localeCompare(a.datePublished),
);

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

export function postsBySlugs(slugs: string[]) {
  return slugs.map((s) => getPost(s)).filter((p): p is BlogPost => Boolean(p));
}

export function readingTime(post: BlogPost) {
  const words = post.sections.flatMap((s) => [s.h2, ...s.body]).join(" ").split(/\s+/).length;
  return Math.max(3, Math.round(words / 220));
}
