import React from "react";

import classes from "./heading.module.scss";
import AnimatedItem from "~/src/shared/ui/animated-item";

export default function SubscribeHeading() {
  return (
    <div className={`flex-column align-center ${classes.container}`}>
      <AnimatedItem slideIn direction="down" duration={0.3}>
        <h2 className="text-center heading h3 white">Subscribe for updates</h2>
      </AnimatedItem>
      <AnimatedItem slideIn direction="down" duration={0.3} delay={0.1}>
        <p className={`body-text base white text-center ${classes.text}`}>
          Your new wellness experience
          <br />
          is almost here
        </p>
      </AnimatedItem>
    </div>
  );
}
