/**
 * Massage Rawalpindi logo: a three-petal lotus inside a slim arch (a spa doorway),
 * with a droplet above the centre petal. Pure inline SVG, no request.
 */
export function LogoMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 44V20a14 14 0 0 1 28 0v24"
        stroke="#C9A877"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M24 38c-3.6-3-5.2-6.6-5.2-10.2 0-3.3 1.9-6.1 5.2-8.3 3.3 2.2 5.2 5 5.2 8.3 0 3.6-1.6 7.2-5.2 10.2Z"
        stroke="#C9A877"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M23.6 38c-4.6-.2-8.4-1.7-10.6-4.6-1-1.4-1.6-3-1.8-4.6 3.6-.5 7 .7 9.4 3.2"
        stroke="#C9A877"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.4 38c4.6-.2 8.4-1.7 10.6-4.6 1-1.4 1.6-3 1.8-4.6-3.6-.5-7 .7-9.4 3.2"
        stroke="#C9A877"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M24 12.2c-.9 1.2-1.4 2-1.4 2.7a1.4 1.4 0 0 0 2.8 0c0-.7-.5-1.5-1.4-2.7Z" fill="#C9A877" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark size={40} />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1rem] font-semibold tracking-[0.1em] text-linen-50 sm:text-[1.2rem] sm:tracking-[0.14em]">
          MASSAGE RAWALPINDI
        </span>
        <span className="mt-1.5 flex items-center gap-2">
          <span className="h-px w-5 bg-gold-400" aria-hidden="true" />
          <span className="text-[0.58rem] font-semibold tracking-[0.32em] text-gold-400">
            SPA · BAHRIA TOWN
          </span>
        </span>
      </span>
    </span>
  );
}
