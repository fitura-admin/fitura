export interface ILegalNotice {
  heading: string;
  text: {
    heading: string;
    text: string;
  };
}

type Langs = "ru" | "en" | "lv";

export type ILegalNoticeLangs = {
  [lang in Langs]: ILegalNotice;
};
