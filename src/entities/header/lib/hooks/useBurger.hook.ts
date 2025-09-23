import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "~/src/app/store/hook";
import {
  selectNavigation,
  setBurgerOpen,
} from "~/src/app/store/reducers/navigation.slice";

export const useBurger = () => {
  const dispatch = useAppDispatch();
  const { burgerOpen: active } = useAppSelector(selectNavigation);

  useEffect(() => {
    document.body.classList.toggle("nav-opened", active);

    if (active) {
      window.history.pushState({ burger: true }, "");
    }
  }, [active]);

  useEffect(() => {
    const handlePopState = () => {
      if (active) {
        dispatch(setBurgerOpen(false));
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [active, dispatch]);

  const buttonClick = () => {
    dispatch(setBurgerOpen(!active));
  };

  return {
    active,
    buttonClick,
  };
};
