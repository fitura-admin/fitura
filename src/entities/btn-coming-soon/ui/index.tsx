"use client";
import React from "react";

import AnimatedItem from "~/src/shared/ui/animated-item";
import Button from "~/src/shared/ui/button";
import { TextTranslate } from "~/src/shared/ui/text-translate/ui";

interface Props {
  size: string;
  className?: string;
  areaSize?: number;
  delay?: number;
  strength?: number;
  onClick?: () => void;
  text?: string;
  radius?: number;
}

const linkToPayment = "https://fiturafitness-membership.flybyglobal.com/";

export default function BtnComingSoon({
  size,
  className,
  delay,
  onClick,
  radius,
}: Props) {
  return (
    <AnimatedItem delay={delay ?? 0.5}>
      <a href={linkToPayment} target="_blank" rel="noopener noreferrer">
        <Button
          typeButton="primary"
          size={size}
          radius={radius ?? 100}
          className={className}
          onClick={() => {
            onClick?.();
          }}
          asLink
        >
          <TextTranslate
            as="span"
            className="white heading h7"
            nameSpace="workspaces"
            tName="buttonText"
          />
        </Button>
      </a>
    </AnimatedItem>
  );
}
