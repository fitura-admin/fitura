export type AppLangType = "en" | "ru" | "lv";

export interface SelectLangI {
  title: string;
  action: AppLangType;
  shortcut: string;
}
