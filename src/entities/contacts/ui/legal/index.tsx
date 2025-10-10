"use client";
import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

import classes from "./legal.module.scss";
import AnimatedItem from "~/src/shared/ui/animated-item";
import LinkContainer from "~/src/shared/ui/link-container";

interface ILegalInfo {
  tName: string;
  href?: string;
}

export default function ContactsLegal() {
  const { t } = useTranslation("contacts", { useSuspense: false });
  const legalInfoStrings: ILegalInfo[] = [
    {
      tName: "footerRights",
    },
    {
      tName: "footerLinkLegal",
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
            key={index + t(item.tName)}
            slideIn
            direction={index === 0 ? "right" : "left"}
          >
            {item.href ? (
              <LinkContainer href={item.href} className={className}>
                {t(item.tName)}
              </LinkContainer>
            ) : (
              <p className={className}>{t(item.tName)}</p>
            )}
          </AnimatedItem>
        );
      })}
    </div>
  );
}
