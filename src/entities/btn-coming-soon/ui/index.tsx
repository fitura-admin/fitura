"use client";
import React from "react";
import { useAppDispatch } from "~/src/app/store/hook";
import { setModalOpen } from "~/src/app/store/reducers/navigation.slice";

import AnimatedItem from "~/src/shared/ui/animated-item";
import Button from "~/src/shared/ui/button";
import { MagneticItem } from "~/src/shared/ui/magnetic-item";
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

export default function BtnComingSoon({
  size,
  className,
  areaSize,
  delay,
  strength,
  onClick,
  text,
  radius,
}: Props) {
  const dispatch = useAppDispatch();
  return (
    <MagneticItem areaSize={areaSize ?? 300} strength={strength ?? undefined}>
      <AnimatedItem delay={delay ?? 0.5}>
        <Button
          type="primary"
          size={size}
          radius={radius ?? 100}
          className={className}
          onClick={() => {
            dispatch(setModalOpen(true));
            onClick?.();
          }}
        >
          <TextTranslate
            as="span"
            className="white heading h7"
            nameSpace="workspaces"
            tName="buttonText"
          />
        </Button>
      </AnimatedItem>
    </MagneticItem>
  );
}
