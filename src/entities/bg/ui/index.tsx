import React from "react";

import classes from "./bg.module.scss";

export default function PageBg() {
  return (
    <div className={classes.container}>
      <video autoPlay muted loop playsInline>
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
