import { LangT } from "~/src/app/store/reducers/navigation.slice";

export const publicOfferMetas: Record<LangT, { title: string; date: string }> =
  {
    lv: {
      title: "PUBLISKĀ PIEDĀVĀJUMA ",
      date: "14.01.2026",
    },
    en: {
      title: "Public offer",
      date: "14.01.2026",
    },
    ru: {
      title: "Публичная оферта",
      date: "14.01.2026",
    },
  };
