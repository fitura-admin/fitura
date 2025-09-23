"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "~/src/app/store/hook";
import { useInView } from "framer-motion";
import {
  selectNavigation,
  setNavSection,
} from "~/src/app/store/reducers/navigation.slice";

import classes from "./app.module.scss";
import AppContent from "./content";
import AppPhone from "./phone";

export default function AppSection() {
  const dispatch = useAppDispatch();
  const contentRef = React.useRef<HTMLDivElement>(null);
  const { isNavClicked } = useAppSelector(selectNavigation);
  const inView = useInView(contentRef, { amount: 0.9, once: false });

  useEffect(() => {
    if (inView && !isNavClicked) {
      dispatch(setNavSection("app"));
    }
  }, [inView, dispatch, isNavClicked]);

  return (
    <div className={`${classes.section}`} id="app">
      <div className={`wrapper top-center ${classes.wrapper} flex-row`}>
        <AppContent />
        <AppPhone />
      </div>
    </div>
  );
}
