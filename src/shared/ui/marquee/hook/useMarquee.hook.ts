import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
  duration: number;
  relativityCount: number;
  direction: "left" | "right";
}

export const useMarquee = ({ duration, relativityCount, direction }: Props) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !trackRef.current) return;

    let currentX = 0;
    const baseSpeed = direction === "left" ? -duration : duration;
    const trackWidth = trackRef.current.scrollWidth / 4;
    let lastScrollY = window.scrollY;
    let destroyed = false;

    const update = () => {
      if (destroyed || !trackRef.current) return;

      const scrollDiff = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;

      currentX += baseSpeed - scrollDiff * relativityCount;

      if (currentX <= -trackWidth) currentX += trackWidth;
      else if (currentX >= 0) currentX -= trackWidth;

      gsap.set(trackRef.current, { x: currentX });
      frameRef.current = requestAnimationFrame(update);
    };

    frameRef.current = requestAnimationFrame(update);

    return () => {
      destroyed = true;
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [duration, relativityCount, direction]);

  return { trackRef };
};
