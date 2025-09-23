import React from "react";
import classNames from "classnames";

import classes from "./legal.module.scss";
import AnimatedItem from "~/src/shared/ui/animated-item";

export default function ContactsLegal() {
  const legalInfoStrings: string[] = [
    "2025. Fitura. All rights reserved.",
    "Legal notice",
  ];

  return (
    <div className={`flex-row space-between ${classes.container}`}>
      {legalInfoStrings.map((text, index) => (
        <AnimatedItem
          index={index}
          key={index + text}
          slideIn
          direction={index === 0 ? "right" : "left"}
        >
          <p
            className={classNames(
              `body-text light base white ${classes.text}`,
              {
                [classes.link]: index !== 0,
              },
            )}
          >
            {text}
          </p>
        </AnimatedItem>
      ))}
    </div>
  );
}
