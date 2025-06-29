"use client";
import { useEffect } from "react";

export function useKeyboardAutoScroll() {
  useEffect(() => {
    const handler = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      setTimeout(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 10);
    };

    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((el) => el.addEventListener("focus", handler));

    return () => {
      inputs.forEach((el) => el.removeEventListener("focus", handler));
    };
  }, []);
}
