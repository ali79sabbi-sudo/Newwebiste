import Image from "next/image";
import type { ReactNode } from "react";
import type { ImageRef } from "@/data/types";

/** Inner-page hero: text left, arch image right. The image is the LCP element, so it gets priority. */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  image?: ImageRef;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0" style={{ background: "radial-gradient(50% 60% at 15% 30%, rgba(201,168,119,.10), transparent 70%)" }} />
      <div className={`container-x relative grid items-center gap-10 py-10 sm:py-16 ${image ? "lg:grid-cols-[1.15fr_0.85fr]" : ""}`}>
        <div className={image ? "" : "max-w-3xl"}>
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h1>{title}</h1>
          {lead && <div className="mt-6 max-w-xl text-[1.1rem] text-linen-200">{lead}</div>}
          {children && <div className="mt-8">{children}</div>}
        </div>
        {image && (
          <div className="arch img-grade relative mx-auto aspect-[4/4.6] w-full max-w-[440px] overflow-hidden border border-ink-700">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              fetchPriority="high"
              sizes="(min-width:1024px) 440px, 92vw"
             
              quality={70}
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
