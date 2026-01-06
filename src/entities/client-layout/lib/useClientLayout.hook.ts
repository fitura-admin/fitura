"use client";
import { useEffect } from "react";
import { useAppSelector } from "~/src/app/store/hook";
import { selectNavigation } from "~/src/app/store/reducers/navigation.slice";
import { useLoadMedia } from ".";

export const useClientLayout = () => {
  useLoadMedia();
  const { isAppLoaded } = useAppSelector(selectNavigation);

  // исправление скролла к якорю
  useEffect(() => {
    if (!isAppLoaded) return;

    const hash = window.location.hash;
    if (!hash) return;

    // ждём следующий frame, чтобы DOM гарантированно был готов
    requestAnimationFrame(() => {
      const el = document.querySelector(hash);
      if (!el) return;

      el.scrollIntoView({
        behavior: "smooth", // можно "auto"
        block: "start",
      });
    });
  }, [isAppLoaded]);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);
};
