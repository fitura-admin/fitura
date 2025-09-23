import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "~/src/app/store/hook";
import {
  selectNavigation,
  setBurgerOpen,
  setCurrentSection,
  setNavClicked,
  setNavSection,
} from "~/src/app/store/reducers/navigation.slice";

interface Props {
  link: string;
}

export const useNavButton = ({ link }: Props) => {
  const dispatch = useAppDispatch();
  const { isNavClicked, navSection } = useAppSelector(selectNavigation);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isNavClicked) {
      timeout = setTimeout(() => {
        dispatch(setNavClicked(false));
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [isNavClicked, dispatch]);

  const handleButtonClick = () => {
    dispatch(setBurgerOpen(false));
    setNavSection(link);
  };

  const isActive = navSection === link;

  return {
    isActive,
    handleButtonClick,
  };
};
