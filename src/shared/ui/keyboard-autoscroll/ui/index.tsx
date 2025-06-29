"use client";
import { ReactNode } from "react";
import { useKeyboardAutoScroll } from "../hook/useKeyboardAutoscroll.hook";

export default function KeyboardAwareWrapper({
  children,
}: {
  children: ReactNode;
}) {
  useKeyboardAutoScroll();
  return <>{children}</>;
}
