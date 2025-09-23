import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import { useAppSelector } from "~/src/app/store/hook";
import { selectNavigation } from "~/src/app/store/reducers/navigation.slice";

export const useScrollSectionsShared = ({
  itemsLength,
  onSectionChange,
}: {
  itemsLength: number;
  onSectionChange: (index: number) => void;
}) => {
  const { anyModalOpen } = useAppSelector(selectNavigation);
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: contentRef,
  });
  const [sectionProgress, setSectionProgress] = useState<number>(0);
  const [currentSection, setCurrentSection] = useState<number>(0);

  const touchStartX = useRef<number>(0);
  const touchStartTime = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const sectionCount = itemsLength;
      const exactIndex = latest * sectionCount;
      const index = Math.min(Math.floor(exactIndex), sectionCount - 1);
      const sectionProgress = Math.min(exactIndex - index, 1);

      setSectionProgress(sectionProgress);
      setCurrentSection(index);
      onSectionChange(index);
    });

    return () => unsubscribe();
  }, [scrollYProgress, itemsLength, onSectionChange]);

  useEffect(() => {
    if (anyModalOpen) return;
    const el = contentRef.current;
    if (!el) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
      touchStartTime.current = Date.now();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchY = e.changedTouches[0].clientY;
      if (Math.abs(touchY - touchStartY.current) > 50) return;

      const touchEndX = e.changedTouches[0].clientX;
      const deltaX = touchEndX - touchStartX.current;
      const deltaTime = Date.now() - touchStartTime.current;
      const velocity = Math.abs(deltaX) / deltaTime;

      const screenWidth = window.innerWidth;
      const sectionHeight = window.innerHeight;
      const currentScroll = window.scrollY;

      const distanceThreshold = screenWidth * 0.8;
      const velocityThreshold = 0.5;

      let scrollTo: number | null = null;

      if (
        Math.abs(deltaX) > distanceThreshold ||
        velocity > velocityThreshold
      ) {
        if (deltaX < 0 && currentSection < itemsLength - 1) {
          scrollTo = currentScroll + sectionHeight;
        } else if (deltaX > 0 && currentSection > 0) {
          scrollTo = currentScroll - sectionHeight;
        }
      }

      if (scrollTo !== null) {
        window.scrollTo({
          top: scrollTo,
          behavior: "smooth",
        });
      }
    };

    el.addEventListener("touchstart", handleTouchStart, { passive: false });
    el.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, [itemsLength, currentSection]);

  return {
    contentRef,
    scrollY,
    scrollYProgress,
    sectionProgress,
    currentSection,
  };
};
