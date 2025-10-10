import React from "react";

import classes from "./heading.module.scss";
import AnimatedItem from "~/src/shared/ui/animated-item";
import { TextTranslate } from "~/src/shared/ui/text-translate/ui";

export default function SubscribeHeading() {
  return (
    <div className={`flex-column align-center ${classes.container}`}>
      <AnimatedItem slideIn direction="down" duration={0.3}>
        <TextTranslate
          as="h2"
          className="text-center heading h3 white"
          nameSpace="modal"
          tName="heading"
        />
      </AnimatedItem>
      <AnimatedItem slideIn direction="down" duration={0.3} delay={0.1}>
        <TextTranslate
          as="p"
          className={`body-text base white text-center ${classes.text}`}
          nameSpace="modal"
          tName="text"
        />
      </AnimatedItem>
    </div>
  );
}
