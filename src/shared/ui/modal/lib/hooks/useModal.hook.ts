import { useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "~/src/app/store/hook";
import {
  setAnyModalOpen,
  setModalOpen,
} from "~/src/app/store/reducers/navigation.slice";

interface Props {
  isOpened: boolean;
  onClose: () => void;
  customClickOutside: boolean;
}

export const useModal = ({ isOpened, onClose, customClickOutside }: Props) => {
  const dispatch = useAppDispatch();
  const contentRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState<boolean>(true);

  useEffect(() => {
    if (isOpened) {
      dispatch(setAnyModalOpen(true));
      document.body.classList.add("no-scroll");
    } else {
      dispatch(setAnyModalOpen(false));
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpened]);

  useEffect(() => {
    const handlePopState = () => {
      if (isOpened) {
        onClose();
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isOpened, onClose, dispatch]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isOpened) {
      setHidden(false);
    } else {
      timeout = setTimeout(() => {
        setHidden(true);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [isOpened]);

  const clickOutside = useCallback(
    (event: MouseEvent) => {
      if (customClickOutside) return;
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      )
        onClose();
    },
    [contentRef, onClose, customClickOutside],
  );

  const touchOutside = useCallback(
    (event: TouchEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      )
        onClose();
    },
    [contentRef, onClose],
  );

  useEffect(() => {
    if (!isOpened) return;
    document.addEventListener("click", clickOutside);
    document.addEventListener("touchend", touchOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
      document.removeEventListener("touchend", touchOutside);
    };
  }, [clickOutside, touchOutside, isOpened]);

  return {
    contentRef,
    hidden,
  };
};
