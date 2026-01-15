import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "~/src/app/store/hook";
import { selectNavigation } from "~/src/app/store/reducers/navigation.slice";

const STORAGE_KEY = "cookiesAccepted";

export const useCookiesBanner = () => {
  const { isAppLoaded } = useAppSelector(selectNavigation);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);

    if (!accepted && isAppLoaded) {
      setVisible(true);
    }
  }, [isAppLoaded]);

  const acceptCookies = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  }, []);

  return {
    visible,
    acceptCookies,
  };
};
