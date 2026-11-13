import { WhatsAppButton, CallButton } from "@/components/cta/Buttons";

export function CtaBand({
  title = "Check today's availability",
  text = "Message us on WhatsApp. We reply fast and confirm your slot in minutes.",
  message,
  service,
}: {
  title?: string;
  text?: string;
  message?: string;
  service?: string;
}) {
  return (
    <div className="reveal card relative my-4 overflow-hidden p-7 sm:p-10">
      <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full" style={{ background: "radial-gradient(closest-side, rgba(201,168,119,.14), transparent)" }} />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-serif text-[1.75rem] leading-tight text-linen-50">{title}</p>
          <p className="mt-2 text-linen-200">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton message={message} service={service} label="Message us, we reply fast" />
          <CallButton service={service} label="Call to book" />
        </div>
      </div>
    </div>
  );
}
