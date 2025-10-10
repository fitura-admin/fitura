import React from "react";

import classes from "./app-content-heading.module.scss";
import TextScroll from "~/src/shared/ui/text-scroll";
import AnimatedItem from "~/src/shared/ui/animated-item";
import { TextTranslate } from "~/src/shared/ui/text-translate/ui";

export default function AppContentHeading() {
  return (
    <div className={`flex-column ${classes.container}`}>
      <TextScroll
        nameSpace="app"
        tName="heading"
        textClassName={`heading h1 white ${classes.text}`}
        onInView
      />
      <AnimatedItem delay={0.3} slideIn direction="right" duration={0.5}>
        <TextTranslate
          as="p"
          className={`body-text base white ${classes.text} ${classes.p}`}
          nameSpace="app"
          tName="text"
        />
      </AnimatedItem>
    </div>
  );
}
