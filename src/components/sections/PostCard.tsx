import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/types";
import { readingTime } from "@/content/blog";

export function PostCard({ p }: { p: BlogPost }) {
  return (
    <article className="card card-hover reveal flex h-full flex-col overflow-hidden">
      <div className="img-grade relative aspect-[16/10] overflow-hidden">
        <Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width:1024px) 380px, 92vw" placeholder="blur" className="zoom object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.78rem] text-stone-400">
          <time dateTime={p.datePublished}>
            {new Date(p.datePublished).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
          </time>{" "}
          · {readingTime(p)} min read
        </p>
        <h3 className="mt-2 !text-[1.45rem]">
          <Link href={`/blog/${p.slug}`} className="hover:text-gold-300">
            {p.h1}
          </Link>
        </h3>
        <p className="mt-3 text-[0.95rem] text-linen-200">{p.excerpt}</p>
        <Link href={`/blog/${p.slug}`} className="mt-auto pt-4 text-sm font-semibold text-gold-300" aria-label={`Read: ${p.h1}`}>
          Read article →
        </Link>
      </div>
    </article>
  );
}
