import type { Metadata, Viewport } from "next";
import "./styles/reset.scss";
import "./styles/fonts.scss";
import "./styles/global.scss";
import "./styles/template.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import CLientRootLayout from "./client-layout";
import NoiseOverlay from "../shared/ui/noise-overlay/ui";

export const metadata: Metadata = {
  title: "Fitura SIA",
  description:
    "Fitness complex of the future. Smart training in one place. Progress tracked energy unlocked.",
  icons: ["/icon.svg"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1.5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body relative flex-column">
        <CLientRootLayout>{children}</CLientRootLayout>
        <NoiseOverlay mono opacity={0.05} scale={2} />
      </body>
    </html>
  );
}
