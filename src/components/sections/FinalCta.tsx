import { SITE, FULL_ADDRESS } from "@/config/site";
import { WhatsAppButton, CallButton } from "@/components/cta/Buttons";
import { Icon } from "@/components/ui/Icon";
import { LogoMark } from "@/components/Logo";

export function FinalCta({ message, service }: { message?: string; service?: string }) {
  return (
    <section aria-labelledby="final-cta" className="relative overflow-hidden border-t border-ink-700 py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "radial-gradient(60% 70% at 50% 40%, rgba(201,168,119,.13), transparent 70%)" }}
      />
      <div className="container-x relative text-center">
        <LogoMark size={44} className="mx-auto mb-6" />
        <h2 id="final-cta" className="reveal mx-auto max-w-2xl">
          Your calm is <em>one message</em> away.
        </h2>
        <p className="reveal mx-auto mt-5 max-w-xl text-linen-200">
          Tell us the treatment and time that suits you. We usually reply within minutes and will hold your private room.
        </p>
        <div className="reveal mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsAppButton message={message} service={service} label="Reserve your slot" />
          <CallButton service={service} />
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-x-8 gap-y-2 text-sm text-stone-400 sm:flex-row">
          <span className="inline-flex items-center gap-2">
            <Icon name="pin" size={16} className="text-gold-400" /> {FULL_ADDRESS}
          </span>
          <span className="inline-flex items-center gap-2">
            <Icon name="clock" size={16} className="text-gold-400" /> {SITE.hoursDisplay}
          </span>
        </div>
      </div>
    </section>
  );
}
