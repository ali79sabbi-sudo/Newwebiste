import { PAGES } from "@/data/pages";
import { POSTS } from "@/content/blog";
import { BLOG_INDEX_FAQS } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { PostCard } from "@/components/sections/PostCard";
import { WhatsAppButton } from "@/components/cta/Buttons";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { IMG } from "@/data/images";
import { FinalCta } from "@/components/sections/FinalCta";

const P = PAGES.blog;
export const metadata = buildMetadata({ title: P.title, description: P.description, path: "/blog" });

export default function BlogIndex() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />
      <PageHero
        eyebrow="Wellness blog"
        image={IMG.oilDropDark}
        title={
          <>
            The Serenity <em>Journal</em>
          </>
        }
        lead={<p>Massage tips, treatment guides and aftercare advice from our therapists in Bahria Town, Rawalpindi.</p>}
      >
        <WhatsAppButton service="blog" label="Book a massage" />
      </PageHero>
      <Section tone="alt" labelledBy="posts">
        <h2 id="posts" className="sr-only">Latest articles</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <PostCard key={p.slug} p={p} />
          ))}
        </div>
        <div className="mt-14">
          <CtaBand title="Reading is lovely. Feeling it is better." text="Book a session at our Bahria Town Phase 7 spa." service="blog" />
        </div>
      </Section>
      <FaqSection faqs={BLOG_INDEX_FAQS} />
      <FinalCta service="blog" />
    </>
  );
}
