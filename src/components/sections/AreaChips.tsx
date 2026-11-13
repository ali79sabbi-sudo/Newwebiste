import Link from "next/link";
import { LOCATIONS } from "@/data/locations";
import { Icon } from "@/components/ui/Icon";

export function AreaChips({ exclude }: { exclude?: string }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {LOCATIONS.filter((l) => l.slug !== exclude).map((l) => (
        <li key={l.slug}>
          <Link href={`/locations/${l.slug}`} className="chip min-h-11 !px-4 !text-[0.88rem] hover:border-gold-400/60 hover:text-gold-300">
            <Icon name="pin" size={14} className="text-gold-400" />
            {l.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
