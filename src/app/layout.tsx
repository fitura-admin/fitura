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
import CookiesBanner from "~/src/shared/widgets/cookies-banner/ui";
import { GTM } from "~/src/shared/widgets/gtm";

export const metadata: Metadata = {
  title: "Fitura Fitness",
  description: `
    📍Via Jurmala Outlet Village
    2,000m² of wellness in one space
    Open-space gym
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

const GTM_ID = process.env.GTM_ID!;

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
        <GTM id={GTM_ID} />
        <CLientRootLayout>
          {children}
          <CookiesBanner />
        </CLientRootLayout>
        <NoiseOverlay mono opacity={0.05} scale={2} />
      </body>
    </html>
  );
}
