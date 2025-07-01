"use client";
import React, { useEffect, useState } from "react";

import classes from "./loading.module.scss";
import Logo from "~/public/loading-logo.svg";

interface Props {
  active: boolean;
}

export default function LoadingSplash({ active }: Props) {
  const [hidden, setHidden] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (active) {
        setHidden(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [active]);

  return (
    <div
      className={`center ${classes.container} ${hidden ? classes.none : null} ${!active ? classes.hidden : ""} absolute`}
    >
      <Logo className={classes.logo} />
    </div>
  );
}
