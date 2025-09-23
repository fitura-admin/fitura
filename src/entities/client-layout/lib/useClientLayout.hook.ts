import { useEffect } from "react";
import { useWindowSize } from "react-use";
import { useAppDispatch } from "~/src/app/store/hook";
import { setAppLoaded } from "~/src/app/store/reducers/navigation.slice";

export const useClientLayout = () => {
  const dispatch = useAppDispatch();
  const { width } = useWindowSize();

  useEffect(() => {
    const images = Array.from(document.images).filter(
      (img) => !img.hasAttribute("data-preloader") && img.loading !== "lazy",
    );
    const videos = Array.from(document.querySelectorAll("video")).filter(
      (video) => !video.hasAttribute("data-preloader"),
    );

    let total = images.length + videos.length;
    let loaded = 0;
    if (total === 0) {
      done();
      return;
    }

    const framesCount = 121;
    const desktopFrames = Array.from(
      { length: framesCount },
      (_, i) => `/start/desktop-frames/${String(i + 1)}.webp`,
    );
    const mobileFrames = Array.from(
      { length: framesCount },
      (_, i) => `/start/mobile-frames/${String(i + 1)}.webp`,
    );
    const canvasImagesSrc =
      width > 768 ? [...desktopFrames] : [...mobileFrames];
    const canvasImages: HTMLImageElement[] = canvasImagesSrc.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
    total += canvasImages.length;

    function check() {
      loaded++;
      if (loaded >= total) {
        done();
      }
    }
    canvasImages.forEach((img) => {
      if (img.complete) {
        check();
      } else {
        img.addEventListener("load", check, { once: true });
        img.addEventListener("error", check, { once: true });
      }
    });
    images.forEach((img) => {
      if (img.complete) {
        check();
      } else {
        img.addEventListener("load", check, { once: true });
        img.addEventListener("error", check, { once: true });
      }
    });
    videos.forEach((video) => {
      if (video.readyState >= 3) {
        check();
      } else {
        video.addEventListener("canplaythrough", check, { once: true });
        video.addEventListener("error", check, { once: true });
      }
    });
    function done() {
      dispatch(setAppLoaded(true));
      document.body.classList.remove("no-scroll");
    }
  }, [dispatch, width]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
};
