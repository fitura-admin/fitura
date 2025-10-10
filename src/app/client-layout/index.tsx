import React from "react";
import { loadResources } from "../i18n/resources";

import StoreProvider from "~/src/app/store/store-provider";
import ClientLayout from "~/src/entities/client-layout/ui";
import Providers from "../providers";

export default function CLientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const i18nRes = loadResources();

  return (
    <StoreProvider>
      <Providers i18nResources={i18nRes}>
        <ClientLayout>{children}</ClientLayout>
      </Providers>
    </StoreProvider>
  );
}
