"use client";
import React from "react";
import KeyboardAwareWrapper from "~/src/shared/ui/keyboard-autoscroll/ui";
import ClientI18NProvider from "./i18n";

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <KeyboardAwareWrapper>
      <ClientI18NProvider>{children}</ClientI18NProvider>
    </KeyboardAwareWrapper>
  );
}
