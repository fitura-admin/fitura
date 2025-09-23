import { useEffect, useRef } from "react";

interface Props {
  opacity: number;
  fps: number;
  scale: number;
  mono: boolean;
}

export const useNoise = ({ opacity, fps, scale, mono }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
      willReadFrequently: true,
    });
    if (!ctx) return;

    const cfg = {
      opacity: Math.min(1, Math.max(0, opacity)),
      fps: Math.max(1, parseInt(String(fps), 10)),
      scale: Math.max(1, parseInt(String(scale), 10)),
      mono,
    };

    let frameTime = 1000 / cfg.fps;
    let raf: number | null = null;
    let last = 0;
    let visible = true;

    try {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        cfg.fps = Math.max(8, Math.floor(cfg.fps / 3));
        frameTime = 1000 / cfg.fps;
      }
    } catch {}

    const resize = () => {
      const w = Math.max(1, Math.floor(window.innerWidth / cfg.scale));
      const h = Math.max(1, Math.floor(window.innerHeight / cfg.scale));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("orientationchange", resize, { passive: true });

    const renderNoise = () => {
      const w = canvas.width;
      const h = canvas.height;
      if (!w || !h) return;
      const id = ctx.createImageData(w, h);
      const data = id.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        if (cfg.mono) {
          data[i] = data[i + 1] = data[i + 2] = v;
        } else {
          data[i] = v;
          data[i + 1] = (Math.random() * 255) | 0;
          data[i + 2] = (Math.random() * 255) | 0;
        }
        data[i + 3] = 255;
      }
      ctx.putImageData(id, 0, 0);
    };

    const loop = (ts: number) => {
      if (!visible) {
        raf = requestAnimationFrame(loop);
        return;
      }
      if (ts - last >= frameTime) {
        renderNoise();
        last = ts;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const handleVisibility = () => {
      visible = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("orientationchange", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [opacity, fps, scale, mono]);

  return canvasRef;
};
