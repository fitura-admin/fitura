"use client";

import Script from "next/script";
import React from "react";

export const GA4 = ({ id }: { id: string }) => (
  <>
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      strategy="afterInteractive"
    />
    <Script id="ga4-init" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${id}');
      `}
    </Script>
  </>
);
