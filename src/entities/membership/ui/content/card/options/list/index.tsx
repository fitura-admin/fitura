import React from "react";

import classes from "./list.module.scss";
import Check from "~/public/membership/check.svg";
import AnimatedItem from "~/src/shared/ui/animated-item";
import { TextTranslate } from "~/src/shared/ui/text-translate/ui";

const tNameDefault = "inEveryPlan.options";

export default function CardOptionsList() {
  const options = Array(8).fill(null);

  return (
    <div className={`${classes.wrapper}`}>
      <div className={`${classes.container}`}>
        {options.map((_, index) => (
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
            <TextTranslate
              as="p"
              className="body-text base white"
              nameSpace="membership"
              tName={`${tNameDefault}.${index}`}
            />
          </AnimatedItem>
        ))}
      </div>
    </div>
  );
}
