"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "~/src/app/store/hook";
import { useInView } from "framer-motion";
import {
  selectNavigation,
  setNavSection,
} from "~/src/app/store/reducers/navigation.slice";

import classes from "./contacts.module.scss";
import ContactsLegal from "./legal";
import ContactsContent from "./content";

export default function ContactsSection() {
  const dispatch = useAppDispatch();
  const contentRef = React.useRef<HTMLDivElement>(null);
  const { isNavClicked } = useAppSelector(selectNavigation);
  const inView = useInView(contentRef, { amount: 0.9, once: false });

  useEffect(() => {
    if (inView && !isNavClicked) {
      dispatch(setNavSection("contacts"));
    }
  }, [inView, dispatch, isNavClicked]);

  return (
    <div className={`${classes.section}`} id="contacts">
      <div className={`wrapper flex-column ${classes.wrapper}`}>
        <ContactsContent />
        <ContactsLegal />
      </div>
    </div>
  );
}
