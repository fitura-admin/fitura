"use client";
import React from "react";
import KeyboardAwareWrapper from "~/src/shared/ui/keyboard-autoscroll/ui";

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return <KeyboardAwareWrapper>{children}</KeyboardAwareWrapper>;
}
