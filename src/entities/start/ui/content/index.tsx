import React from "react";

import classes from "./content.module.scss";
import TextScroll from "~/src/shared/ui/text-scroll";
import BtnComingSoon from "~/src/entities/btn-coming-soon/ui";

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
      <BtnComingSoon
        size="14-20"
        radius={100}
        delay={0.1}
        strength={0.1}
        areaSize={350}
        text="Explore"
      />
    </div>
  );
}
