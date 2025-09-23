import React from "react";

import classes from "./header.module.scss";
import HeaderLogo from "./logo";
import HeaderNavSection from "./nav-section";
import Burger from "./burger";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className="wrapper flex-row space-between align-center relative">
        <HeaderLogo />
        <HeaderNavSection />
        <Burger />
      </div>
    </header>
  );
}
