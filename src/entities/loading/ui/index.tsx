"use client";
import React, { useEffect, useRef, useState } from "react";
import classes from "./loading.module.scss";
import Logo from "~/public/loading-logo.svg";
import gsap from "gsap";

export default function LoadingSplash() {
  const [active, setActive] = useState<boolean>(true);
  const [hidden, setHidden] = useState<boolean>(false);
  const pathRef = useRef<SVGPathElement>(null);

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

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const pathLength = path.getTotalLength();

    // Инициализируем strokeDasharray и strokeDashoffset
    path.style.strokeDasharray = String(pathLength);
    path.style.strokeDashoffset = String(pathLength);

    gsap.to(path, {
      width: 0,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div
      className={`center ${classes.container} ${hidden ? classes.none : null} ${!active ? classes.hidden : ""} absolute`}
    >
      <Logo className={classes.logo} />
    </div>
  );
}
