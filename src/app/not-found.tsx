import Link from "next/link";
import { SERVICES } from "@/data/services";
import { WhatsAppButton, CallButton } from "@/components/cta/Buttons";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="container-x py-24 text-center">
      <LogoMark size={56} className="mx-auto" />
      <p className="eyebrow mt-8">404 · Page not found</p>
      <h1 className="mx-auto mt-4 max-w-2xl">
        This path leads to <em>stillness</em>, not a page.
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-linen-200">The page you&apos;re looking for has moved or doesn&apos;t exist. Let&apos;s get you somewhere calmer.</p>
      <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
        <WhatsAppButton service="404" />
        <CallButton variant="ghost" service="404" />
      </div>
      <ul className="mx-auto mt-14 flex max-w-3xl flex-wrap justify-center gap-2">
        {SERVICES.map((s) => (
          <li key={s.slug}>
            <Link href={`/services/${s.slug}`} className="chip min-h-11 !px-4 hover:border-gold-400/60">
              {s.shortName}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-10">
        <Link href="/" className="font-semibold text-gold-300">
          ← Back to home
        </Link>
      </p>
    </section>
  );
}
