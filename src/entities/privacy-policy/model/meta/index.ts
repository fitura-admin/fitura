import { LangT } from "~/src/app/store/reducers/navigation.slice";

export const publicOfferMetas: Record<LangT, { title: string; date: string }> =
  {
    lv: {
      title: "PUBLISKĀ PIEDĀVĀJUMA",
      date: "25.04.2026",
    },
    en: {
      title: "Public offer",
      date: "25.04.2026",
    },
    ru: {
      title: "Публичная оферта",
      date: "25.04.2026",
    },
  };
