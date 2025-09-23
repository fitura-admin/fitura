"use client";
import React from "react";
import { useBurger } from "~/src/entities/header/lib/hooks/useBurger.hook";

import classes from "./burger.module.scss";

export default function Burger() {
  const { active, buttonClick } = useBurger();

  return (
    <div
      className={`${classes.burger}${active ? ` ${classes.active}` : ""}`}
      onClick={buttonClick}
    >
      <span className={classes.burger__line}></span>
      <span className={classes.burger__line}></span>
    </div>
  );
}
