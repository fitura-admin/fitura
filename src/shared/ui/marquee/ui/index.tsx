"use client";
import React from "react";
import { useMarquee } from "~/src/shared/ui/marquee/hook/useMarquee.hook";

import classes from "./marquee.module.scss";
import Dot from "~/public/start/dot.svg";

interface Props {
  classNameText?: string;
  classNameWrapper?: string;
  items?: string[];
  duration?: number;
  relativityCount?: number; // насколько отзывчиво к скроллу
  direction?: "left" | "right";
}

export default function Marquee({
  classNameText = "",
  classNameWrapper = "",
  items,
  duration = 0.5,
  relativityCount = 0.7,
  direction = "left",
}: Props) {
  const { trackRef } = useMarquee({
    duration,
    relativityCount,
    direction,
  });
  const text: string[] = [
    "2000 m² of Gym",
    "Spa & Recovery",
    "premium equipment",
    "Fitura App",
    "Opening soon",
  ];

  const list = items
    ? [...items, ...items, ...items, ...items]
    : [...text, ...text, ...text, ...text];
  return (
    <div className={`${classes.wrapper} ${classNameWrapper}`}>
      <div className={`flex-row align-center ${classes.container}`}>
        <div
          role={"marquee"}
          className={`flex-row align-center ${classes.track}`}
          ref={trackRef}
        >
          {list.map((item, index) => (
            <div
              className={`flex-row align-center ${classes.item}`}
              key={index}
            >
              <Dot />
              <span className={`${classes.text} ${classNameText}`}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
