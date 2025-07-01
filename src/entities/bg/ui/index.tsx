"use client";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";

import classes from "./bg.module.scss";

interface Props {
  setActive: Dispatch<SetStateAction<boolean>>;
}

export default function PageBg({ setActive }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!videoRef.current) return;
      videoRef.current.play();
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={classes.container}>
      <video
        muted
        loop
        playsInline
        preload="metadata"
        ref={videoRef}
        onCanPlayThrough={() => setActive(false)}
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
