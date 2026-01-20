"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector } from "~/src/app/store/hook";
import { selectNavigation } from "~/src/app/store/reducers/navigation.slice";

import classes from "./nav-section.module.scss";
import HeaderNav from "./nav";
import HeaderLangSelect from "./lang-select";

export default function HeaderNavSection() {
  const { burgerOpen } = useAppSelector(selectNavigation);
  const className = `flex-row align-center ${classes.container}`;

  return (
    <>
      <div className={className}>
        <HeaderNav />
        <HeaderLangSelect />
      </div>
      <AnimatePresence>
        {burgerOpen && (
          <motion.div className={classes.nav_open_wrapper}>
            <div className={classes.nav_backdrop} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className={classes.nav_content}
            >
              <HeaderNav />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
