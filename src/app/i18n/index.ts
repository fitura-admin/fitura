// src/i18n/client.ts
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { fallbackLng } from "./settings";

export function initI18next(resources: Record<string, Record<string, any>>) {
  if (!i18next.isInitialized) {
    i18next.use(initReactI18next).init({
      resources,
      fallbackLng: fallbackLng,
      supportedLngs: Object.keys(resources),
      defaultNS: "start",
      interpolation: { escapeValue: false },
    });
  }
  return i18next;
}
