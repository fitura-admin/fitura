"use client";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "~/src/app/store/hook";
import { selectNavigation } from "~/src/app/store/reducers/navigation.slice";

import classes from "./loader-provider.module.scss";
import Logo from "~/public/loader/logo.svg";

export default function Loader() {
  const { isAppLoaded } = useAppSelector(selectNavigation);
  const [hidden, setHidden] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isAppLoaded) {
        setHidden(true);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [isAppLoaded]);

  return (
    <div
      className={`${classes.container} ${hidden ? classes.none : null} ${isAppLoaded ? classes.hidden : ""} place-center`}
      aria-hidden={true}
    >
      <svg
        data-preloader
        style={{ overflow: "visible" }}
        className={`${classes.bg}`}
        xmlns="http://www.w3.org/2000/svg"
        width="815"
        height="608"
        viewBox="0 0 815 608"
        fill="none"
      >
        <g filter="url(#filter0_f_510_6975)">
          <path
            d="M595 304C595 350.392 539.036 388 470 388C400.964 388 345 350.392 345 304C345 257.608 400.964 220 470 220C539.036 220 595 257.608 595 304Z"
            fill="#EA008C"
          />
          <path
            d="M470 304C470 350.392 414.036 388 345 388C275.964 388 220 350.392 220 304C220 257.608 275.964 220 345 220C414.036 220 470 257.608 470 304Z"
            fill="#6A00FF"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_510_6975"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="110"
              result="effect1_foregroundBlur_510_6975"
            />
          </filter>
        </defs>
      </svg>
      <Logo data-preloader className={classes.logo} />
    </div>
  );
}
