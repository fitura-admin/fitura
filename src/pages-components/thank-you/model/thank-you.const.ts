import { ElementType } from "react";
import { LangT } from "~/src/app/store/reducers/navigation.slice";

interface IItem {
  Tag: ElementType;
  keyName: "heading" | "text";
  className: string;
}

export const thankYouItems: IItem[] = [
  {
    Tag: "h1",
    keyName: "heading",
    className: "heading h1 white",
  },
  {
    Tag: "p",
    keyName: "text",
    className: "text-body white m",
  },
];

export const thankYouText: Record<LangT, { heading: string; text: string }> = {
  ru: {
    heading: "Спасибо ❤️",
    text: "Ваша оплата получена. Подтверждение отправлено на почту",
  },
  en: {
    heading: "Thank you ❤️",
    text: "Your payment has been received. Confirmation has been sent to your email",
  },
  lv: {
    heading: "Paldies ❤️",
    text: "Jūsu maksājums ir saņemts. Apstiprinājums nosūtīts uz pastu",
  },
};
