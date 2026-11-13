import { ImageResponse } from "next/og";
import { SITE } from "@/config/site";

export const alt = `${SITE.name}: Luxury Massage & Spa in Bahria Town Phase 7`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "radial-gradient(70% 90% at 20% 30%, #2a241d 0%, #0E0D0C 70%)",
          color: "#F4EFE8",
          fontFamily: "serif",
        }}
      >
        <svg width="90" height="90" viewBox="0 0 48 48" fill="none">
          <path d="M10 44V20a14 14 0 0 1 28 0v24" stroke="#C9A877" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M24 38c-3.6-3-5.2-6.6-5.2-10.2 0-3.3 1.9-6.1 5.2-8.3 3.3 2.2 5.2 5 5.2 8.3 0 3.6-1.6 7.2-5.2 10.2Z" stroke="#C9A877" strokeWidth="1.5" />
          <path d="M23.6 38c-4.6-.2-8.4-1.7-10.6-4.6-1-1.4-1.6-3-1.8-4.6 3.6-.5 7 .7 9.4 3.2" stroke="#C9A877" strokeWidth="1.5" />
          <path d="M24.4 38c4.6-.2 8.4-1.7 10.6-4.6 1-1.4 1.6-3 1.8-4.6-3.6-.5-7 .7-9.4 3.2" stroke="#C9A877" strokeWidth="1.5" />
          <path d="M24 12.2c-.9 1.2-1.4 2-1.4 2.7a1.4 1.4 0 0 0 2.8 0c0-.7-.5-1.5-1.4-2.7Z" fill="#C9A877" />
        </svg>
        <div style={{ marginTop: 36, fontSize: 30, letterSpacing: 10, color: "#C9A877" }}>MASSAGE RAWALPINDI · BAHRIA TOWN SPA</div>
        <div style={{ marginTop: 22, fontSize: 76, lineHeight: 1.08, maxWidth: 950 }}>Luxury Massage & Spa in Bahria Town Phase 7</div>
        <div style={{ marginTop: 34, fontSize: 30, color: "#D9D1C5" }}>{`Rawalpindi · Islamabad · WhatsApp ${SITE.phoneDisplay}`}</div>
      </div>
    ),
    size,
  );
}
