"use client";
import { useParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "~/src/app/store/hook";
import { LangT, setAppLang } from "~/src/app/store/reducers/navigation.slice";

export default function LangDetector() {
  const dispatch = useAppDispatch();
  const { lang } = useParams();
  const currentLanguage = useMemo(() => {
    return lang ? (lang as LangT) : "";
  }, [lang]);

  useEffect(() => {
    dispatch(setAppLang(currentLanguage));
  }, [currentLanguage]);

  return null;
}
