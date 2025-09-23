"use client";
import React from "react";
import { useStartSection } from "../lib/hooks/useStartSection.hook";

import classes from "./start.module.scss";
import StartContent from "./content";
import Marquee from "~/src/shared/ui/marquee/ui";

export default function StartSection() {
  const { contentRef, canvasRef } = useStartSection();

  return (
    <section
      className={`${classes.section} relative`}
      id="home"
      ref={contentRef}
    >
      <canvas
        ref={canvasRef}
        width={1920}
        height={1080}
        className={classes.bgVideo}
      />
      <div className={`${classes.container} flex-column space-between`}>
        <StartContent />
        <Marquee classNameWrapper={classes.marquee} />
      </div>
    </section>
  );
}
