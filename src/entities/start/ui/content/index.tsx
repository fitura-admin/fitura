import React from "react";

import classes from "./content.module.scss";
import TextScroll from "~/src/shared/ui/text-scroll";
import LinkContainer from "~/src/shared/ui/link-container";
import AnimatedItem from "~/src/shared/ui/animated-item";
import Button from "~/src/shared/ui/button";
import { TextTranslate } from "~/src/shared/ui/text-translate/ui";

export default function StartContent() {
  return (
    <div className={`flex-column ${classes.container}`}>
      <div className={`flex-column ${classes.heading}`}>
        <TextScroll
          textClassName="heading display1 white text-center"
          onInView
          nameSpace="start"
          tName="text.heading"
        />
        <TextTranslate
          nameSpace="start"
          tName="text.subtext"
          as="p"
          className="body-text base big white text-center"
        />
      </div>
      <AnimatedItem delay={0.1}>
        <LinkContainer href="#space">
          <Button typeButton="primary" size={"14-20"} radius={100}>
            <TextTranslate
              nameSpace="start"
              tName="text.buttonText"
              as="span"
              className="white heading h7"
            />
          </Button>
        </LinkContainer>
      </AnimatedItem>
    </div>
  );
}
