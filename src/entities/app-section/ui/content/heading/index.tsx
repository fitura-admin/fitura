import React from "react";

import classes from "./app-content-heading.module.scss";
import TextScroll from "~/src/shared/ui/text-scroll";
import AnimatedItem from "~/src/shared/ui/animated-item";

export default function AppContentHeading() {
  return (
    <div className={`flex-column ${classes.container}`}>
      <TextScroll
        word={`Control\nthe Experience`}
        textClassName={`heading h1 white ${classes.text}`}
        onInView
      />
      <AnimatedItem delay={0.3} slideIn direction="right" duration={0.5}>
        <p className={`body-text base white ${classes.text} ${classes.p}`}>
          Easily book group or personal workouts and manage your&nbsp;membership
          — all in one app
        </p>
      </AnimatedItem>
    </div>
  );
}
