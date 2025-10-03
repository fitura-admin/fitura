import { LangT } from "~/src/app/store/reducers/navigation.slice";

export interface SelectLangI {
  title: string;
  action: LangT;
  shortcut: string;
}
