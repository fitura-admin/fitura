import { useInView, useScroll, useSpring } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import { useAppDispatch } from "~/src/app/store/hook";
import { setNavSection } from "~/src/app/store/reducers/navigation.slice";

export const useStartSection = () => {
  const dispatch = useAppDispatch();
  const contentRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inView = useInView(contentRef, { amount: 0.5, once: false });
  const { width, height } = useWindowSize();

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 20,
    mass: 0.3,
  });

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const isMounted = useRef(false);

  useEffect(() => {
    const isMobile = width < 769;
    const framesCount = isMobile ? 101 : 121;
    const framesPath = isMobile
      ? "/start/mobile-frames"
      : "/start/desktop-frames";
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= framesCount; i++) {
      const img = new Image();
      img.src = `${framesPath}/${i}.webp`;
      imgs.push(img);
    }

    setImages(imgs);
  }, [width]);

  useEffect(() => {
    if (inView) {
      dispatch(setNavSection("home"));
    }
  }, [inView, dispatch]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [width, height]);

  const drawCover = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      img: HTMLImageElement,
      canvas: HTMLCanvasElement,
    ) => {
      const imgRatio = img.width / img.height;
      const canvasRatio = canvas.width / canvas.height;

      let drawWidth = canvas.width;
      let drawHeight = canvas.height;

      if (imgRatio > canvasRatio) {
        drawHeight = canvas.height;
        drawWidth = img.width * (canvas.height / img.height);
      } else {
        drawWidth = canvas.width;
        drawHeight = img.height * (canvas.width / img.width);
      }

      const offsetX = (canvas.width - drawWidth) / 2;
      const offsetY = (canvas.height - drawHeight) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    },
    [],
  );

  const drawFirstImage = useCallback(
    (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const firstImage = images[0];
      if (!firstImage) return;

      function tryDraw() {
        if (!canvas.width || !canvas.height) {
          requestAnimationFrame(tryDraw);
          return;
        }

        if (firstImage.complete && firstImage.naturalWidth !== 0) {
          drawCover(ctx, firstImage, canvas);
        }
        firstImage.onload = null;
      }

      if (firstImage.complete) {
        tryDraw();
      } else {
        if (!firstImage.onload) {
          firstImage.onload = tryDraw;
        }
      }
    },
    [images, drawCover],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    drawFirstImage(ctx, canvas);

    let rafId: number | null = null;
    let scheduled = false;
    let desiredFrameIndex = 0;

    const drawIfNeeded = () => {
      scheduled = false;
      const img = images[desiredFrameIndex];
      if (!img) return;

      if (
        img.complete &&
        img.naturalWidth !== 0 &&
        canvas.width &&
        canvas.height
      ) {
        drawCover(ctx, img, canvas);
      } else {
        if (!img.onload) {
          img.onload = () => {
            drawCover(ctx, img, canvas);
            img.onload = null;
          };
        }
      }
    };

    const scheduleDraw = () => {
      if (scheduled) return;
      scheduled = true;
      rafId = requestAnimationFrame(drawIfNeeded);
    };

    const unsubscribe = smoothProgress.on("change", (latest) => {
      if (!isMounted.current) {
        isMounted.current = true;
        if (latest >= 0.99) return;
      }

      const progress = Math.min(1, Math.max(0, latest));
      const minFrame = 0;
      const maxFrame = images.length - 1;

      const frameIndex = Math.round(
        minFrame + progress * (maxFrame - minFrame),
      );
      desiredFrameIndex = Math.min(maxFrame, Math.max(minFrame, frameIndex));
      scheduleDraw();
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      scheduled = false;
      unsubscribe?.();
    };
  }, [images, smoothProgress, drawCover, width, height, drawFirstImage]);

  return { contentRef, canvasRef };
};
