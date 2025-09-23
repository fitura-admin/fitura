import React from "react";

import classes from "./membership-heading.module.scss";
import BgVector from "~/public/membership/bg.svg";
import TextScroll from "~/src/shared/ui/text-scroll";

export default function MembershipHeading() {
  return (
    <div className={`${classes.container} p-sc-animate`}>
      <TextScroll
        word="Choose your plan"
        textClassName="heading h1 white"
        className={`${classes.text}`}
        onInView
      />
      <BgVector
        className={`${classes.bg} ${classes.bg_main}`}
        style={{ overflow: "visible" }}
      />
    </div>
  );
}
