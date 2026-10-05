import { LangT } from "~/src/app/store/reducers/navigation.slice";

export const homepageMeta: Record<
  LangT,
  { title: string; description: string }
> = {
  lv: {
    title: "FITURA Fitness & SPA Piņķos | Trenažieru zāle un SPA",
    description:
      "FITURA Fitness & SPA Piņķos, netālu no Jūrmalas. Trenažieru zāle, grupu nodarbības, Pilates, personālie treniņi un SPA vienuviet.",
  },
  ru: {
    title: "FITURA Fitness & SPA в Пиньки | Тренажёрный зал и СПА",
    description:
      "FITURA Fitness & SPA в Пиньки, рядом с Юрмалой. Тренажёрный зал, групповые занятия, пилатес, персональные тренировки и СПА в одном месте.",
  },
  en: {
    title: "FITURA Fitness & SPA in Piņķi | Gym and SPA",
    description:
      "FITURA Fitness & SPA in Piņķi, near Jūrmala. Gym, group classes, Pilates, personal training and SPA in one place.",
  },
};
