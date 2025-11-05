import type { Metadata, Viewport } from "next";
import "./styles/reset.scss";
import "./styles/fonts.scss";
import "./styles/global.scss";
import "./styles/template.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import CLientRootLayout from "~/src/app/client-layout";
import NoiseOverlay from "~/src/shared/ui/noise-overlay/ui";
import { GA4 } from "../shared/widgets/gtm";

export const metadata: Metadata = {
  title: "Fitura Fitness & SPA",
  description: `
    📍Via Jurmala Outlet Village
    2,000m² of wellness in one space
    Open-space gym · SPA zone
    Train · Recover · Recharge
  `,
  icons: ["/icon.svg"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1.5,
  viewportFit: "cover",
};

const GA4_ID = "G-P3LMGQM1FK";

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: "en" | "ru" | "lv" };
}>) {
  const lang = params.lang || "en";

  return (
    <html lang={lang}>
      <body className="body relative flex-column">
        <GA4 id={GA4_ID} />
        <CLientRootLayout>{children}</CLientRootLayout>
        <NoiseOverlay mono opacity={0.05} scale={2} />
      </body>
    </html>
  );
}
