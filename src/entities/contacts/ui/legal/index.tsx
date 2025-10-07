import React from "react";
import classNames from "classnames";

import classes from "./legal.module.scss";
import AnimatedItem from "~/src/shared/ui/animated-item";
import LinkContainer from "~/src/shared/ui/link-container";

interface ILegalInfo {
  text: string;
  href?: string;
}

export default function ContactsLegal() {
  const legalInfoStrings: ILegalInfo[] = [
    {
      text: "2025. Fitura. All rights reserved.",
    },
    {
      text: "Legal notice",
      href: "legal-notice",
    },
  ];

  return (
    <div className={`flex-row space-between ${classes.container}`}>
      {legalInfoStrings.map((item, index) => {
        const className = classNames(
          `body-text light base white ${classes.text}`,
          {
            [classes.link]: item.href,
          },
        );
        return (
          <AnimatedItem
            index={index}
            key={index + item.text}
            slideIn
            direction={index === 0 ? "right" : "left"}
          >
            {item.href ? (
              <LinkContainer href={item.href} className={className}>
                {item.text}
              </LinkContainer>
            ) : (
              <p className={className}>{item.text}</p>
            )}
          </AnimatedItem>
        );
      })}
    </div>
  );
}
