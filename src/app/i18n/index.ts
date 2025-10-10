// src/i18n/client.ts
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

export function initI18next(resources: Record<string, Record<string, any>>) {
  if (!i18next.isInitialized) {
    i18next.use(initReactI18next).init({
      resources,
      fallbackLng: "en",
      supportedLngs: Object.keys(resources),
      defaultNS: "common",
      interpolation: { escapeValue: false },
    });
  }
  return i18next;
}
