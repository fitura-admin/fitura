"use client";
import React, { useEffect, useState } from "react";

import classes from "./nav.module.scss";
import HeaderNavButton from "./button";
import { headerNavButtons } from "~/src/entities/header/model/header.const";

interface Props {
  children?: React.ReactNode;
}

export default function HeaderNav({ children }: Props) {
  const [withSchedule, setWithSchedule] = useState<boolean>(false);

  useEffect(() => {
    if (window.location.href.includes("schedule")) {
      setWithSchedule(true);
    }
  }, []);

  return (
    <nav className={`flex-row align-center ${classes.container}`}>
      {headerNavButtons.map((item, index) => {
        return <HeaderNavButton key={index} {...item} />;
      })}
      {children}
      {withSchedule && (
        <iframe
          src="https://fiturafitness-ebooking.flybyglobal.com/"
          title="Fitura Fitness Online Booking"
          className={classes.frame}
        ></iframe>
      )}
    </nav>
  );
}
