import { PAGES } from "@/data/pages";
import { TERMS_FAQS } from "@/data/faqs";
import { SITE } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

const P = PAGES.terms;
export const metadata = buildMetadata({ title: P.title, description: P.description, path: "/terms" });

export default function TermsPage() {
  return (
    <LegalPage
      h1={P.h1}
      path="/terms"
      updated="13 November 2026"
      intro={`Please read these terms before booking a treatment at ${SITE.name}, ${SITE.address.area}, ${SITE.address.city}.`}
      faqs={TERMS_FAQS}
      sections={[
        {
          h2: "Professional conduct policy",
          body: [
            `**${SITE.name} provides strictly therapeutic, professional massage, wellness and beauty treatments.** Our therapists are trained professionals and are treated with respect at all times.`,
            "- Any inappropriate request, comment or behaviour will end the session immediately, with no refund",
            "- Guests remain appropriately draped during all oil treatments",
            "- We reserve the right to refuse service to anyone who does not respect this policy",
          ],
        },
        {
          h2: "Bookings",
          body: [
            "Bookings are confirmed when we reply on WhatsApp or by phone. Please arrive 10 minutes before your appointment.",
            SITE.features.advancePayment ? "Some bookings require an advance payment, which we will explain when booking." : "No advance payment is required for standard bookings.",
          ],
        },
        { h2: "Cancellations & rescheduling", body: ["Please give at least 2 hours' notice to cancel or reschedule. Repeated no-shows may require advance payment for future bookings."] },
        { h2: "Late arrival", body: ["If you arrive late, your treatment may be shortened so the next guest isn't delayed. The full price applies."] },
        { h2: "Health & safety", body: ["Please tell us about medical conditions, injuries, pregnancy, allergies or medication before your treatment. Our treatments are for relaxation and wellbeing and are not a substitute for medical care. We may decline or adapt a treatment if it isn't safe for you."] },
        { h2: "Payment", body: [SITE.features.cardPayment ? "We accept cash, card and bank transfer." : "Payment is made at reception after your treatment. Please ask about accepted methods.", "Prices are listed on our pricing page and may change. The price confirmed at booking is honoured."] },
        { h2: "Gift cards", body: ["Gift cards are valid for the period stated on the card, are non-refundable, and can be transferred."] }, // TODO(owner): confirm validity period
        { h2: "Age policy", body: ["Guests must be 18 or older. Guests aged 16–17 may be treated with a parent or guardian present and consent."] },
        { h2: "Personal belongings", body: ["Please keep valuables with you. We cannot accept responsibility for lost items."] },
      ]}
    />
  );
}
