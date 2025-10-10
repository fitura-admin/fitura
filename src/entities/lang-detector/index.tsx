"use client";
import i18next from "i18next";
import { useParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "~/src/app/store/hook";
import {
  LangT,
  selectNavigation,
  setAppLang,
} from "~/src/app/store/reducers/navigation.slice";

export default function LangDetector() {
  const dispatch = useAppDispatch();
  const { lang } = useParams();
  const currentLanguage = useMemo(() => {
    return lang ? (lang as LangT) : "en";
  }, [lang]);
  const { lang: appLang } = useAppSelector(selectNavigation);

  useEffect(() => {
    if (appLang !== currentLanguage) {
      dispatch(setAppLang(currentLanguage));
      if (i18next.isInitialized) {
        i18next.changeLanguage(currentLanguage);
      }
    }
  }, [appLang, currentLanguage, dispatch]);

  return null;
}
