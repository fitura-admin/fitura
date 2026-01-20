"use client";
import React from "react";
import { usePathname } from "next/navigation";

import classes from "./header.module.scss";
import HeaderLogo from "./logo";
import HeaderNavSection from "./nav-section";
import Burger from "./burger";
import HeaderLangSelect from "./nav-section/lang-select";

export default function Header() {
  const pathname = usePathname();
  const isLegal = pathname.includes("legal-notice");

  return (
    <header className={isLegal ? classes.headerLegal : classes.header}>
      <div className="wrapper flex-row space-between align-center relative">
        <HeaderLogo />
        <HeaderNavSection />
        <div className={`flex-row gap-5 align-center ${classes.media}`}>
          <HeaderLangSelect />
          <Burger />
        </div>
      </div>
    </header>
  );
}
