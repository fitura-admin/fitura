"use client";
import React, { Dispatch, SetStateAction } from "react";

import classes from "./bg.module.scss";

interface Props {
  setActive: Dispatch<SetStateAction<boolean>>;
}

export default function PageBg({ setActive }: Props) {
  return (
    <div className={classes.container}>
      <video
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        onCanPlayThrough={() => setActive(false)}
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
