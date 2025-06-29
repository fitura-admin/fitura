import type { Metadata, Viewport } from "next";
import "./styles/reset.scss";
import "./styles/fonts.scss";
import "./styles/global.scss";
import PageBg from "../entities/bg/ui";

export const metadata: Metadata = {
  title: "Fitura",
  description: "Fintess & SPA. Coming soon",
  icons: ["/logo.svg"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body relative">
        <PageBg />
        {children}
      </body>
    </html>
  );
}
