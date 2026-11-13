import { PAGES } from "@/data/pages";
import { IMG } from "@/data/images";
import { GALLERY_FAQS } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { GalleryGrid, type GalleryItem } from "@/components/client/GalleryGrid";
import { WhatsAppButton, CallButton } from "@/components/cta/Buttons";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";

const P = PAGES.gallery;
export const metadata = buildMetadata({ title: P.title, description: P.description, path: "/gallery" });

const ITEMS: GalleryItem[] = [
  { ...IMG.roomEmptyBlinds, cat: "Rooms" },
  { ...IMG.roomSunlit, cat: "Rooms" },
  { ...IMG.roomLuxeSuite, cat: "Rooms" },
  { ...IMG.roomBrightStudio, cat: "Rooms" },
  { ...IMG.roomBrightFacial, cat: "Rooms" },
  { ...IMG.roomWindowTherapy, cat: "Treatments" },
  { ...IMG.therapistFootMale, cat: "Treatments" },
  { ...IMG.therapistFootSmile, cat: "Treatments" },
  { ...IMG.therapistHotStone, cat: "Treatments" },
  { ...IMG.hotStoneBackMale, cat: "Treatments" },
  { ...IMG.treatmentRoom, cat: "Rooms" },
  { ...IMG.roomBath, cat: "Rooms" },
  { ...IMG.loungePool, cat: "Ambience" },
  { ...IMG.sauna, cat: "Rooms" },
  { ...IMG.hotStones, cat: "Treatments" },
  { ...IMG.thaiShoulder, cat: "Treatments" },
  { ...IMG.footReflexology, cat: "Treatments" },
  { ...IMG.facialClay, cat: "Treatments" },
  { ...IMG.balineseOverhead, cat: "Treatments" },
  { ...IMG.amberBottles, cat: "Products" },
  { ...IMG.productsStones, cat: "Products" },
  { ...IMG.guaSha, cat: "Products" },
  { ...IMG.oilSkin, cat: "Products" },
  { ...IMG.towelsCandle, cat: "Ambience" },
  { ...IMG.diffuserCandles, cat: "Ambience" },
  { ...IMG.stonesDark, cat: "Ambience" },
];

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Gallery", path: "/gallery" }]} />
      <PageHero
        eyebrow="A look inside"
        image={IMG.roomLuxeSuite}
        title={
          <>
            Inside Our Spa in <em>Bahria Town</em>
          </>
        }
        lead={<p>Soft light, warm stone and fresh linen. Here&apos;s a glimpse of the calm waiting for you at our Phase 7 spa.</p>}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton service="gallery" label="Reserve your slot" />
          <CallButton variant="ghost" service="gallery" />
        </div>
      </PageHero>
      <Section tone="alt" labelledBy="g">
        <h2 id="g" className="sr-only">Photo gallery</h2>
        <GalleryGrid items={ITEMS} cats={["Rooms", "Treatments", "Products", "Ambience"]} />
        <p className="mt-6 text-sm text-stone-400">Some images are professional stock photography that reflects our ambience and standards.</p>
        <div className="mt-12">
          <CtaBand title="See it in person" text="The best way to experience the calm is to book an hour. Message us now." service="gallery" />
        </div>
      </Section>
      <FaqSection faqs={GALLERY_FAQS} />
      <FinalCta service="gallery" />
    </>
  );
}
