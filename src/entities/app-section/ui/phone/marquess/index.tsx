import React from "react";

import classes from "./phone-marquees.module.scss";
import Marquee from "~/src/shared/ui/marquee/ui";

interface IMarquee {
  items: string[];
  duration: number;
  relativityCount: number;
  direction?: "left" | "right";
}

export default function AppPhoneMarquess() {
  const marquees: IMarquee[] = [
    {
      items: [
        "2000 m² of Gym",
        "Spa & Recovery",
        "premium equipment",
        "Fitura App",
      ],
      duration: 0.1,
      relativityCount: 0.1,
      direction: "right",
    },
    {
      items: [
        "premium equipment",
        "2000 m² of Gym",
        "Fitura App",
        "Spa & Recovery",
      ],
      duration: 0.3,
      relativityCount: 0.6,
    },
    {
      items: [
        "Spa & Recovery",
        "premium equipment",
        "2000 m² of Gym",
        "Fitura App",
      ],
      duration: 0.3,
      relativityCount: 0.5,
      direction: "right",
    },
  ];

  return (
    <div role="list" className={`space-between ${classes.container}`}>
      {marquees.map((item, index) => (
        <div key={index} className={`${classes.marquee}`}>
          <Marquee
            items={item.items}
            duration={item.duration}
            relativityCount={item.relativityCount}
            classNameWrapper={`${classes.marquee__wrapper}`}
            direction={item.direction}
          />
        </div>
      ))}
    </div>
  );
}
