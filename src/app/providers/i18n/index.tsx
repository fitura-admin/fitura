"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { initI18next } from "../../i18n";
import { loadResources } from "../../i18n/resources";

interface Props {
  children: React.ReactNode;
  fallbackLng?: string;
}

export default function ClientI18NProvider({
  children,
  fallbackLng = "en",
}: Props) {
  const [resources, setResources] = useState<Record<string, any> | null>(null);
  const [ready, setReady] = useState(false);
  const { lang } = useParams();
  const currLang = (lang as string) || fallbackLng;

  useEffect(() => {
    loadResources().then((res) => {
      setResources(res);
    });
  }, []);

  useEffect(() => {
    if (!resources) return;

    if (!i18next.isInitialized) {
      initI18next(resources);
    }

    if (i18next.language !== currLang) {
      i18next.changeLanguage(currLang);
    }

    setReady(true);
  }, [resources, currLang]);

  if (!ready) return null;

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
