import React from "react";

import classes from "./content.module.scss";
import TextScroll from "~/src/shared/ui/text-scroll";
import LinkContainer from "~/src/shared/ui/link-container";
import AnimatedItem from "~/src/shared/ui/animated-item";
import Button from "~/src/shared/ui/button";

export default function StartContent() {
  return (
    <div className={`flex-column ${classes.container}`}>
      <div className={`flex-column ${classes.heading}`}>
        <TextScroll
          word="Fitness of the Future"
          textClassName="heading display1 white text-center"
          onInView
        />
        <p className="body-text base big white text-center">
          Premium Fitness, smart price <br />
          Jurmala Outlet Village
        </p>
      </div>
      <AnimatedItem delay={0.1}>
        <LinkContainer href="#space">
          <Button type="primary" size={"14-20"} radius={100}>
            <span className="white heading h7">Explore</span>
          </Button>
        </LinkContainer>
      </AnimatedItem>
    </div>
  );
}
