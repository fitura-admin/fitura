"use client";
import React, { useEffect } from "react";
import {
  selectNavigation,
  setNavSection,
} from "~/src/app/store/reducers/navigation.slice";
import { useAppDispatch, useAppSelector } from "~/src/app/store/hook";
import { useInView } from "framer-motion";

import classes from "./membership.module.scss";
import MembershipHeading from "./heading";
import MembershipContent from "./content";

export default function MembershipSection() {
  const dispatch = useAppDispatch();
  const contentRef = React.useRef<HTMLDivElement>(null);
  const { isNavClicked, navSection } = useAppSelector(selectNavigation);
  const inView = useInView(contentRef, { amount: 0.9, once: false });

  useEffect(() => {
    if (inView && !isNavClicked) {
      dispatch(setNavSection("membership"));
    } else {
      if (navSection === "membership") {
        dispatch(setNavSection(""));
      }
    }
  }, [inView, dispatch, isNavClicked, navSection]);

  return (
    <div className={`${classes.section}`} id="membership">
      <div className={`wrapper flex-column ${classes.wrapper}`}>
        <MembershipHeading />
        <MembershipContent />
      </div>
    </div>
  );
}
