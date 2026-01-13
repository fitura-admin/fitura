import React, { RefObject, SVGProps } from "react";

import classes from "./space-modal-navigation.module.scss";
import Prev from "~/public/workspace/chevron-left.svg";
import Next from "~/public/workspace/chevron-right.svg";
import Button from "~/src/shared/ui/button";

interface Props {
  goNext: () => void;
  goPrev: () => void;
  navRef: RefObject<HTMLDivElement | null>;
}

interface IButton {
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  onClick: () => void;
  prev?: boolean;
}

export default function SpaceModalNavigation({
  goNext,
  goPrev,
  navRef,
}: Props) {
  const buttons: IButton[] = [
    {
      Icon: Prev,
      onClick: goPrev,
      prev: true,
    },
    {
      Icon: Next,
      onClick: goNext,
    },
  ];

  return (
    <div
      aria-label="space-modal-navigation"
      className={classes.container}
      ref={navRef}
    >
      {buttons.map((item, index) => (
        <Button
          key={index}
          typeButton="primary"
          onClick={item.onClick}
          className={`${classes.button} ${item.prev ? classes.prev : classes.next}`}
          radius={100}
          needHoverAnimation={false}
        >
          <item.Icon />
        </Button>
      ))}
    </div>
  );
}
