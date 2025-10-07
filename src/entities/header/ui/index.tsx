"use client";
import React from "react";
import { usePathname } from "next/navigation";

import classes from "./header.module.scss";
import HeaderLogo from "./logo";
import HeaderNavSection from "./nav-section";
import Burger from "./burger";

export default function Header() {
  const pathname = usePathname();
  // если станет много страниц, то логику лучше переделать
  const isLegal = pathname.includes("legal-notice");

  return (
    <header className={isLegal ? classes.headerLegal : classes.header}>
      <div className="wrapper flex-row space-between align-center relative">
        <HeaderLogo />
        <HeaderNavSection />
        <Burger />
      </div>
    </header>
  );
}
