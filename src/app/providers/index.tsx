"use client";
import React from "react";
import KeyboardAwareWrapper from "~/src/shared/ui/keyboard-autoscroll/ui";
import ClientI18NProvider from "./i18n";

interface Props {
  children: React.ReactNode;
  i18nResources: Record<string, Record<string, any>>;
}

export default function Providers({ children, i18nResources }: Props) {
  return (
    <KeyboardAwareWrapper>
      <ClientI18NProvider resources={i18nResources}>
        {children}
      </ClientI18NProvider>
    </KeyboardAwareWrapper>
  );
}
