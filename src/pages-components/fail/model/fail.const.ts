import { ElementType } from "react";
import { LangT } from "~/src/app/store/reducers/navigation.slice";

interface IItem {
  Tag: ElementType;
  keyName: "heading" | "text";
  className: string;
}

export const failItems: IItem[] = [
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

export const failText: Record<LangT, { heading: string; text: string }> = {
  ru: {
    heading: "Oops 😅",
    text: "Что-то пошло не так. Попробуйте ещё раз",
  },
  en: {
    heading: "Oops 😅",
    text: "Something went wrong. Try again",
  },
  lv: {
    heading: "Oops 😅",
    text: "Kaut kas nogāja greizi. Mēģiniet vēlreiz",
  },
};
