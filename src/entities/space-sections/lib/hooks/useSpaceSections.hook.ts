import { useInView } from "framer-motion";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "~/src/app/store/hook";
import {
  selectNavigation,
  setCurrentSection,
  setNavSection,
} from "~/src/app/store/reducers/navigation.slice";
import { useScrollSectionsShared } from "~/src/shared/lib/hooks/useScrollSectionsShared.hook";

interface Props {
  itemsLength: number;
}

export const useSpaceSections = ({ itemsLength }: Props) => {
  const dispatch = useAppDispatch();
  const { spaceSection } = useAppSelector(selectNavigation);
  const { contentRef, sectionProgress } = useScrollSectionsShared({
    itemsLength,
    onSectionChange: (index) => {
      dispatch(setCurrentSection(index));
    },
  });
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  const inView = useInView(contentRef, { amount: 0.3, once: false });
  const inView10 = useInView(contentRef, { amount: 0.1, once: false });

  useEffect(() => {
    if (inView === true) {
      dispatch(setNavSection("space"));
    }
  }, [inView, dispatch]);

  return {
    contentRef,
    activeIndex: spaceSection,
    sectionProgress,
    inView: inView10,
    modalOpened,
    setModalOpened,
  };
};
