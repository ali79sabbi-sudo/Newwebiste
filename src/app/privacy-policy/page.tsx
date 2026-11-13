import { PAGES } from "@/data/pages";
import { PRIVACY_FAQS } from "@/data/faqs";
import { SITE } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

const P = PAGES.privacy;
export const metadata = buildMetadata({ title: P.title, description: P.description, path: "/privacy-policy" });

export default function PrivacyPage() {
  return (
    <LegalPage
      h1={P.h1}
      path="/privacy-policy"
      updated="13 November 2026"
      intro={`How ${SITE.name} collects, uses and protects your information when you visit our website, contact us or book via WhatsApp.`}
      faqs={PRIVACY_FAQS}
      sections={[
        { h2: "Who we are", body: [`${SITE.name} is a massage and day spa in ${SITE.address.area}, ${SITE.address.city}, Pakistan. Contact: ${SITE.email}, ${SITE.phoneDisplay}.`] },
        {
          h2: "Information we collect",
          body: [
            "- **Information you give us:** your name, phone number, preferred treatment, date and time, and any notes you choose to share when you message us on WhatsApp, call, email or use our booking form.",
            "- **Health information you choose to share:** for example injuries, pregnancy or allergies, used only so we can treat you safely.",
            "- **Website analytics:** anonymous usage data collected by Google Analytics 4, such as pages visited, device type and approximate location.",
          ],
        },
        {
          h2: "How our booking form works",
          body: ["Our online booking form does not send data to our servers. It builds a WhatsApp message on your device, which you then choose to send. Your message is handled by WhatsApp under WhatsApp's own privacy policy."],
        },
        {
          h2: "Cookies & Google Analytics 4",
          body: [
            "We use Google Analytics 4 to understand how visitors use our website, for example which pages are most helpful and how many people tap our WhatsApp button. GA4 sets first-party cookies (such as _ga) to distinguish visitors. IP addresses are anonymised.",
            "We do not use advertising or remarketing cookies. You can block cookies in your browser settings or use Google's opt-out add-on at tools.google.com/dlpage/gaoptout.",
          ],
        },
        { h2: "How we use your information", body: ["- To confirm, manage and remind you about bookings", "- To deliver your treatment safely", "- To answer your questions", "- To improve our website and services"] },
        { h2: "Sharing", body: ["We never sell or rent your personal information. We share data only with service providers needed to run our website (hosting and analytics) or where required by law."] },
        { h2: "Retention & security", body: ["We keep information only as long as needed to provide our services or meet legal obligations. Our website is served over HTTPS with modern security headers."] },
        { h2: "Your rights", body: [`You can ask us to access, correct or delete your personal information at any time by emailing ${SITE.email}.`] },
        { h2: "Changes", body: ["We may update this policy from time to time. The 'last updated' date at the top shows the latest version."] },
      ]}
    />
  );
}
