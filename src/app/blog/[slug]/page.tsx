import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { POSTS, getPost, postsBySlugs, readingTime } from "@/content/blog";
import { servicesBySlugs } from "@/data/services";
import { SITE } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { blogPostingSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { Section } from "@/components/ui/Section";
import { RichText } from "@/components/ui/RichText";
import { LogoMark } from "@/components/Logo";
import { CtaBand } from "@/components/sections/CtaBand";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { PostCard } from "@/components/sections/PostCard";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return buildMetadata({
    title: p.title,
    description: p.description,
    path: `/blog/${p.slug}`,
    keywords: [p.keyword],
    type: "article",
    image: p.image.src.src,
    publishedTime: p.datePublished,
    modifiedTime: p.dateModified,
  });
}

const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
const anchor = (h: string) => h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const services = servicesBySlugs(p.services);
  const related = postsBySlugs(p.related);
  const msg = `Hi ${SITE.name}, I just read "${p.h1}" and would like to book a massage.`;

  return (
    <>
      <JsonLd data={blogPostingSchema(p)} />
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: p.h1, path: `/blog/${p.slug}` }]} />

      <article>
        <header className="container-x pb-10 pt-10 sm:pt-14">
          <div className="mx-auto max-w-[68ch]">
            <p className="eyebrow">Serenity Journal</p>
            <h1 className="mt-5 !text-[clamp(2.2rem,4.5vw,3.8rem)]">{p.h1}</h1>
            <p className="mt-5 text-[0.9rem] text-stone-400">
              By {SITE.name} team · Published <time dateTime={p.datePublished}>{fmt(p.datePublished)}</time> · Last updated{" "}
              <time dateTime={p.dateModified}>{fmt(p.dateModified)}</time> · {readingTime(p)} min read
            </p>
          </div>
          <div className="img-grade relative mx-auto mt-10 aspect-[16/8] max-w-5xl overflow-hidden rounded-[22px] border border-ink-700">
            <Image src={p.image.src} alt={p.image.alt} fill priority fetchPriority="high" sizes="(min-width:1024px) 1024px, 100vw" quality={70} className="object-cover" />
          </div>
        </header>

        <div className="container-x">
          <div className="mx-auto max-w-[68ch]">
            <nav aria-label="Table of contents" className="card mb-12 p-6">
              <p className="eyebrow mb-3">In this article</p>
              <ol className="list-decimal space-y-1.5 pl-5 text-[0.95rem] text-linen-200 marker:text-gold-400">
                {p.sections.map((s) => (
                  <li key={s.h2}>
                    <a href={`#${anchor(s.h2)}`} className="hover:text-gold-300">
                      {s.h2}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="prose-noir">
              {p.sections.map((s, i) => (
                <section key={s.h2} aria-labelledby={anchor(s.h2)}>
                  <h2 id={anchor(s.h2)}>{s.h2}</h2>
                  <RichText body={s.body} />
                  {i === 0 && (
                    <div className="not-prose my-10">
                      <CtaBand title="Prefer to feel it than read it?" text="Book a session at our Bahria Town Phase 7 spa." message={msg} service={`blog-${p.slug}`} />
                    </div>
                  )}
                </section>
              ))}
            </div>

            <aside className="card mt-14 flex gap-5 p-6" aria-label="About the author">
              <LogoMark size={48} className="shrink-0" />
              <div>
                <p className="font-semibold text-linen-50">Written by the {SITE.name} team</p>
                <p className="mt-1 text-[0.92rem] text-linen-200">
                  Our therapists share practical wellness advice from their daily work at our spa in Bahria Town Phase 7, Rawalpindi.
                  This article is general information, not medical advice.
                </p>
              </div>
            </aside>

            <div className="mt-12">
              <CtaBand title="Ready for your session?" text="Message us, and we'll hold a private room for you." message={msg} service={`blog-${p.slug}`} />
            </div>
          </div>
        </div>
      </article>

      <FaqSection faqs={p.faqs} title={<>Quick <em>answers</em></>} />

      <Section tone="alt" labelledBy="treat">
        <h2 id="treat" className="!text-[clamp(1.6rem,2.6vw,2.2rem)]">Treatments mentioned in this article</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} s={s} />
          ))}
        </div>
        <h2 className="mt-20 !text-[clamp(1.6rem,2.6vw,2.2rem)]">Keep reading</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {related.map((r) => (
            <PostCard key={r.slug} p={r} />
          ))}
        </div>
        <p className="mt-10">
          <Link href="/blog" className="font-semibold text-gold-300">
            ← All articles
          </Link>
        </p>
      </Section>
      <FinalCta message={msg} service={`blog-${p.slug}`} />
    </>
  );
}
