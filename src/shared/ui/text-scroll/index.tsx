"use client";
import React from "react";
import { useInView } from "framer-motion";

import classes from "./text-scroll.module.scss";

interface Props {
  word: string;
  className?: string;
  textClassName?: string;
  speed?: number;
  direction?: "horizontal" | "vertical";
  onInView?: boolean;
  delay?: number;
}

export default function TextScroll({
  className = "",
  textClassName = "",
  word,
  speed = 0.6,
  direction = "vertical",
  onInView = false,
  delay,
}: Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: false });

  const classNameConst = `${classes.text} ${inView && onInView ? classes.active : ""} ${textClassName}`;
  const style = {
    transitionDuration: `${speed}s`,
  };

  return (
    <div
      className={`${direction == "vertical" ? "flex-column" : "flex-row"} ${classes.container} ${className}`}
      ref={ref}
    >
      <span className={classNameConst} style={style}>
        {word}
      </span>
      <span className={classNameConst} style={style} aria-hidden={true}>
        {word}
      </span>
    </div>
  );
}
