import React from "react";

import classes from "./list.module.scss";
import Check from "~/public/membership/check.svg";
import AnimatedItem from "~/src/shared/ui/animated-item";

export default function CardOptionsList() {
  const options: string[] = [
    "Unlimited Access to the Fitura space",
    "Group Workouts",
    "Premium Gym Facilities",
    "Body Composition Analysis (InBody)",
    "Unlimited Guest Passes",
    "1 Free Personal Training Session",
    "1 Fitura Lab Recovery Session",
    "Access to Fitura Member App",
    "SPA Zone Access",
  ];

  return (
    <div className={`${classes.wrapper}`}>
      <div className={`${classes.container}`}>
        {options.map((item, index) => (
          <AnimatedItem
            key={index}
            className={`flex-row gap-3 align-center ${classes.item}`}
            amount={0.2}
            index={index}
            stagger={0.05}
          >
            <div className={`${classes.check}`}>
              <Check />
            </div>
            <p className="body-text base white">{item}</p>
          </AnimatedItem>
        ))}
      </div>
    </div>
  );
}
