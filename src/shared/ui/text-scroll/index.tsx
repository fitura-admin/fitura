"use client";
import React from "react";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

import classes from "./text-scroll.module.scss";

interface Props {
  className?: string;
  textClassName?: string;
  speed?: number;
  direction?: "horizontal" | "vertical";
  onInView?: boolean;
  delay?: number;
  nameSpace: string;
  tName: string;
}

export default function TextScroll({
  className = "",
  textClassName = "",
  speed = 0.6,
  direction = "vertical",
  onInView = false,
  nameSpace,
  tName,
}: Props) {
  const { t, i18n } = useTranslation(nameSpace, { useSuspense: false });
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: false });

  const classNameConst = `${classes.text} ${inView && onInView ? classes.active : ""} ${textClassName}`;
  const style = {
    transitionDuration: `${speed}s`,
  };

  return (
    <div
      className={`flex-${direction == "vertical" ? "column" : "row"} ${classes.container} ${className}`}
      ref={ref}
    >
      <span
        className={classNameConst}
        style={{
          userSelect: "none",
          ...style,
        }}
      >
        {t(tName)}
      </span>
      <span className={classNameConst} style={style} aria-hidden={true}>
        {t(tName)}
      </span>
    </div>
  );
}
