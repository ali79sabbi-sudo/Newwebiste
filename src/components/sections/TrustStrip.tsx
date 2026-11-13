import { Icon, type IconName } from "@/components/ui/Icon";

const ITEMS: { icon: IconName; title: string; text: string }[] = [
  { icon: "shield", title: "Certified therapists", text: "Trained, professional, respectful" },
  { icon: "droplet", title: "Hygienic fresh linens", text: "Fresh for every single guest" },
  { icon: "door", title: "Private rooms", text: "Closed-door, quiet treatment rooms" },
  { icon: "calendar", title: "Open 7 days", text: "2pm – 3am, late-night slots" },
];

export function TrustStrip() {
  return (
    <section aria-label="Why guests trust us" className="border-y border-ink-700 bg-ink-900">
      <ul className="container-x grid grid-cols-2 gap-x-4 gap-y-6 py-8 lg:grid-cols-4">
        {ITEMS.map((it) => (
          <li key={it.title} className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-400/40 text-gold-400">
              <Icon name={it.icon} size={20} />
            </span>
            <span>
              <span className="block text-[0.95rem] font-semibold text-linen-50">{it.title}</span>
              <span className="block text-[0.82rem] text-stone-400">{it.text}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
