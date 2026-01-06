"use client";
import { useEffect } from "react";
import { useWindowSize } from "react-use";
import { useAppDispatch } from "~/src/app/store/hook";
import { setAppLoaded } from "~/src/app/store/reducers/navigation.slice";

export const useClientLayout = () => {
  const dispatch = useAppDispatch();
  const { width } = useWindowSize();

  // лоадер для всех статических файлов
  useEffect(() => {
    let cancelled = false;

    const TIMEOUT_MS = 8000; // таймаут на каждую загрузку
    const BATCH_SIZE = 20;

    // таймаут обертка для функции загрузчика
    const withTimeout = <T>(promise: Promise<T>, ms: number): Promise<T> => {
      return new Promise((resolve) => {
        const timer = setTimeout(() => resolve(promise as any), ms);
        promise
          .finally(() => clearTimeout(timer))
          .then(resolve)
          .catch(() => resolve(promise as any));
      });
    };

    const loadImage = (src: string): Promise<void> =>
      withTimeout(
        new Promise((resolve) => {
          const img = new Image();
          img.onload = img.onerror = () => resolve();
          img.src = src;
        }),
        TIMEOUT_MS,
      );

    const loadMedia = (
      el: HTMLImageElement | HTMLVideoElement,
    ): Promise<void> =>
      withTimeout(
        new Promise((resolve) => {
          if (el instanceof HTMLImageElement) {
            if (el.complete) return resolve();
            el.onload = el.onerror = () => resolve();
          } else {
            if (el.readyState >= 3) return resolve();
            el.onloadeddata = el.onerror = () => resolve();
          }
        }),
        TIMEOUT_MS,
      );

    const loadInBatches = async <T>(
      items: T[],
      loader: (item: T) => Promise<void>,
      batchSize: number,
    ) => {
      for (let i = 0; i < items.length; i += batchSize) {
        if (cancelled) return;
        const batch = items.slice(i, i + batchSize);
        await Promise.all(batch.map(loader));
      }
    };

    const run = async () => {
      const images = Array.from(document.images).filter(
        (img) => !img.hasAttribute("data-preloader") && img.loading !== "lazy",
      );
      const videos = Array.from(document.querySelectorAll("video")).filter(
        (v) => !v.hasAttribute("data-preloader"),
      );

      const framesCount = width < 768 ? 101 : 121;
      const frames = Array.from({ length: framesCount }, (_, i) =>
        width > 768
          ? `/start/desktop-frames/${i + 1}.webp`
          : `/start/mobile-frames/${i + 1}.webp`,
      );

      await Promise.all([
        loadInBatches(images, loadMedia, BATCH_SIZE),
        loadInBatches(videos, loadMedia, BATCH_SIZE),
        loadInBatches(frames, loadImage, BATCH_SIZE),
      ]);

      if (cancelled) return;

      done();
    };

    function done() {
      dispatch(setAppLoaded(true));
      document.body.classList.remove("no-scroll");
    }

    run();

    return () => {
      cancelled = true;
    };
  }, [dispatch, width]);

  // исправление скролла к якорю
  useEffect(() => {
    if (!appLoaded) return;

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
  }, [appLoaded]);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);
};
