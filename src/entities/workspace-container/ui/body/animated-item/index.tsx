"use client";
import React, { Dispatch, SetStateAction } from "react";
import { AnimatePresence } from "framer-motion";

import classes from "./animated-item.module.scss";
import imageClasses from "../body.module.scss";
import Image from "next/image";
import classNames from "classnames";
import AnimatedItem from "~/src/shared/ui/animated-item";

interface Props {
  items: string[];
  activeIndex: number;
  isBig: boolean;
  className?: string;
  delay?: number;
  index?: number;
  setModalOpened: Dispatch<SetStateAction<boolean>>;
}

export default function BodyAnimatedItem({
  items,
  activeIndex,
  className = "",
  isBig,
  delay = 0,
  index,
  setModalOpened,
}: Props) {
  return (
    <AnimatedItem
      slideIn
      direction="up"
      className={`${className} ${isBig ? imageClasses.imageBig : imageClasses.imageSmall} ${imageClasses.image} ${classes.item__wrapper} relative`}
      index={index}
      stagger={0.15}
      onClick={() => setModalOpened(true)}
    >
      <AnimatePresence initial={false} custom={1}>
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          const isPast = index < activeIndex;
          return (
            <div
              key={index}
              role="listitem"
              aria-hidden={!isActive}
              className={classNames(
                `${isBig ? imageClasses.imageBig : imageClasses.imageSmall} ${classes.item} absolute inset-0`,
                {
                  [classes.active]: isActive,
                  [classes.past]: isPast,
                },
              )}
              style={{
                transitionDelay: `${delay}s`,
              }}
            >
              <Image
                src={`/workspace${item}`}
                alt="image"
                width={523}
                height={324}
                loading="lazy"
              />
            </div>
          );
        })}
      </AnimatePresence>
    </AnimatedItem>
  );
}
