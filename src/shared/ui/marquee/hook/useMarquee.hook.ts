import gsap from "gsap";
import { useEffect, useRef } from "react";

interface Props {
  duration: number;
  relativityCount: number; // тут сменять отзывчивость
  direction: "left" | "right";
}

export const useMarquee = ({ duration, relativityCount, direction }: Props) => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    let currentX = 0;
    const baseSpeed = direction === "left" ? -duration : duration;
    const trackWidth = trackRef.current.scrollWidth / 4;

    let lastScrollY = window.scrollY;

    const update = () => {
      const scrollDiff = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;

      currentX += baseSpeed - scrollDiff * relativityCount;

      if (currentX <= -trackWidth) currentX += trackWidth;
      else if (currentX >= 0) currentX -= trackWidth;

      gsap.set(trackRef.current, { x: currentX });
      requestAnimationFrame(update);
    };

    update();
  }, [duration, relativityCount, direction]);

  return {
    trackRef,
  };
};
