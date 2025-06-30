"use client";
import React, { useEffect, useState } from "react";
import { useWindowSize } from "react-use";

import classes from "./loading.module.scss";
import Logo from "~/public/loading-logo.svg";
import LogoMedia from "~/public/loading-logo-media.svg";

export default function LoadingSplash() {
  const { width } = useWindowSize();
  const [active, setActive] = useState<boolean>(true);
  const [hidden, setHidden] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`center ${classes.container} ${hidden ? classes.none : null} ${!active ? classes.hidden : ""} absolute`}
    >
      {width > 768 ? (
        <Logo className={classes.logo} />
      ) : (
        <LogoMedia className={classes.logo} />
      )}
    </div>
  );
}
