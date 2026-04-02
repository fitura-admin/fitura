import { ElementType } from "react";

export interface IMinorModalText {
  tName: string;
  className: string;
  as: ElementType;
}

export type MinorModalTextType = "title" | "descr" | "button";

export const minorModalText: Record<MinorModalTextType, IMinorModalText> = {
  title: {
    tName: "minorsModal.title",
    className: "heading h5 white text-center",
    as: "h3",
  },
  descr: {
    tName: "minorsModal.text",
    className: "body-text base white text-center",
    as: "p",
  },
  button: {
    tName: "minorsModal.buttonText",
    className: "white heading h7",
    as: "span",
  },
};
