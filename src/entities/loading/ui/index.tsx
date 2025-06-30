"use client";
import React, { useEffect, useState } from "react";

import classes from "./loading.module.scss";
import Logo from "~/public/loading-logo.svg";

export default function LoadingSplash() {
  const [active, setActive] = useState<boolean>(true);
  const [hidden, setHidden] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(false);
    }, 10500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`center ${classes.container} ${hidden ? classes.none : null} ${!active ? classes.hidden : ""} absolute`}
    >
      <Logo className={classes.logo} />
    </div>
  );
}
