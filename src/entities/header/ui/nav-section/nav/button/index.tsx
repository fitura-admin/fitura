"use client";
import React from "react";
import { useNavButton } from "~/src/entities/header/lib/hooks/useNavButton.hook";
import classNames from "classnames";

import classes from "./button.module.scss";
import LinkContainer from "~/src/shared/ui/link-container";
import Button from "~/src/shared/ui/button";
import TextScroll from "~/src/shared/ui/text-scroll";
import AnimatedItem from "~/src/shared/ui/animated-item";
import { HeaderNavButtonI } from "~/src/entities/header/model/header.interface";

interface Props extends HeaderNavButtonI {}

export default function HeaderNavButton({ title, link }: Props) {
  const { handleButtonClick, isActive } = useNavButton({
    link,
  });

  return (
    <AnimatedItem delay={0.3}>
      <LinkContainer href={"#" + link} onClick={handleButtonClick}>
        <Button
          asLink
          type="ghost"
          size="0"
          className={classNames(classes.button, {
            [classes.active]: isActive,
          })}
          needHoverAnimation={false}
        >
          <TextScroll word={title} textClassName={`${classes.button__text}`} />
        </Button>
      </LinkContainer>
    </AnimatedItem>
  );
}
