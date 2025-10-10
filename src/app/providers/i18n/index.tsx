"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { initI18next } from "../../i18n";

interface Props {
  children: React.ReactNode;
  resources: Record<string, Record<string, any>>;
  fallbackLng?: string;
}

export default function ClientI18NProvider({
  children,
  resources,
  fallbackLng = "en",
}: Props) {
  const [ready, setReady] = useState(false);
  const { lang } = useParams();
  const currLang = (lang as string) || fallbackLng;

  useEffect(() => {
    if (!i18next.isInitialized) {
      initI18next(resources);
      setReady(true);
    } else {
      setReady(true);
    }

    if (i18next.language !== currLang) {
      i18next.changeLanguage(currLang);
    }
  }, [resources, fallbackLng, currLang]);

  if (!ready) return null;

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
