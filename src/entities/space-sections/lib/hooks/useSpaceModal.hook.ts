import { useCallback, useEffect, useRef } from "react";
import SwiperCore from "swiper";

interface Props {
  onClose: () => void;
  isOpened: boolean;
  swiperRef: React.RefObject<SwiperCore | null>;
}

export const useSpaceModal = ({ onClose, isOpened, swiperRef }: Props) => {
  const paginationRef = useRef<HTMLUListElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);
  const touchStartedInside = useRef<boolean>(false);
  const mouseStartedInside = useRef<boolean>(false);

  const isInside = useCallback(
    (target: EventTarget | null): boolean => {
      if (!isOpened || !target) return false;
      const node = target as Node;
      return Boolean(
        paginationRef.current?.contains(node) ||
          navigationRef.current?.contains(node) ||
          swiperRef.current?.el.contains(node),
      );
    },
    [isOpened, swiperRef],
  );

  const touchStartHandler = useCallback(
    (e: TouchEvent) => {
      touchStartedInside.current = isInside(e.target);
    },
    [isInside],
  );

  const touchEndHandler = useCallback(
    (e: TouchEvent) => {
      const endedInside = isInside(e.target);
      if (!touchStartedInside.current && !endedInside) {
        onClose();
      }
      touchStartedInside.current = false;
    },
    [isInside, onClose],
  );

  const mouseDownHandler = useCallback(
    (e: MouseEvent) => {
      if (!isInside(e.target)) {
        onClose();
      }
    },
    [isInside, onClose],
  );

  useEffect(() => {
    document.addEventListener("touchstart", touchStartHandler);
    document.addEventListener("touchend", touchEndHandler);
    document.addEventListener("mousedown", mouseDownHandler);
    return () => {
      document.removeEventListener("touchstart", touchStartHandler);
      document.removeEventListener("touchend", touchEndHandler);
      document.removeEventListener("mousedown", mouseDownHandler);
    };
  }, [touchStartHandler, touchEndHandler, mouseDownHandler]);

  return {
    paginationRef,
    navigationRef,
  };
};
