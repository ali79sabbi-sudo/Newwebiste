import { LogoMark } from "@/components/Logo";

export function Divider() {
  return (
    <div className="container-x" aria-hidden="true">
      <div className="flex items-center gap-5 py-2">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-400/50" />
        <LogoMark size={26} />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-400/50" />
      </div>
    </div>
  );
}
