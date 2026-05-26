export interface ILegalNotice {
  heading: string;
  text: {
    heading: string;
    text: string;
  };
}

export interface ILegalNoticeLangs {
  ru: ILegalNotice;
  en: ILegalNotice;
  lv: ILegalNotice;
}
