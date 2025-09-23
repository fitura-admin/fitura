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
      <AnimatePresence initial={false}>
        {burgerOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, pointerEvents: "none" }}
            animate={{ opacity: 1, height: "100dvh", pointerEvents: "all" }}
            exit={{ opacity: 0, height: 0, pointerEvents: "none" }}
            className={`flex-column align-center ${classes.nav_open}`}
          >
            <HeaderNav />
            <HeaderLangSelect />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
