"use client";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "~/src/app/store/hook";
import {
  selectNavigation,
  setNavSection,
} from "~/src/app/store/reducers/navigation.slice";
import { useInView } from "framer-motion";

import classes from "./workspace.module.scss";
import WorkspaceBody from "./body";
import WorkspaceHeading from "./heading";

interface Props {
  bgColor: string;
  activeIndex: number;
  setModalOpened: Dispatch<SetStateAction<boolean>>;
}

export default function WorkspaceContainer({
  bgColor,
  activeIndex,
  setModalOpened,
}: Props) {
  const dispatch = useAppDispatch();
  const contentRef = React.useRef<HTMLDivElement>(null);
  const { isNavClicked, navSection } = useAppSelector(selectNavigation);
  const inView = useInView(contentRef, { amount: 0.3, once: false });

  useEffect(() => {
    if (inView && !isNavClicked) {
      dispatch(setNavSection("space"));
    } else {
      if (navSection === "space") {
        dispatch(setNavSection(""));
      }
    }
  }, [inView, dispatch, isNavClicked, navSection]);

  return (
    <div
      className={`${classes.section} bg-color-wrapper ${bgColor}`}
      ref={contentRef}
    >
      <div className={`wrapper flex-column ${classes.wrapper}`}>
        <WorkspaceHeading activeIndex={activeIndex} />
        <WorkspaceBody
          activeIndex={activeIndex}
          setModalOpened={setModalOpened}
        />
      </div>
    </div>
  );
}
