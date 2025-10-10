import React from "react";

import StoreProvider from "~/src/app/store/store-provider";
import ClientLayout from "~/src/entities/client-layout/ui";
import Providers from "../providers";

export default async function CLientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <Providers>
        <ClientLayout>{children}</ClientLayout>
      </Providers>
    </StoreProvider>
  );
}
