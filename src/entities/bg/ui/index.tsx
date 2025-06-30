"use client";
import React, { useEffect, useRef } from "react";

import classes from "./bg.module.scss";

export default function PageBg() {
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
      <video muted loop playsInline preload="metadata" ref={videoRef}>
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
