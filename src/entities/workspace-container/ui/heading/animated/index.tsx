"use client";
import React from "react";
import classNames from "classnames";

import classes from "./animated.module.scss";
import { IWorkspaceHeading } from "~/src/entities/workspace-container/model/workspace.const";

interface Props {
  activeIndex: number;
  items: IWorkspaceHeading[];
  renderItem: (item: IWorkspaceHeading) => React.ReactNode;
  classNameItem?: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function HeadingAnimatedItem({
  activeIndex,
  items,
  renderItem,
  classNameItem = "",
  className = "",
  delay = 0,
  duration = 0.8,
}: Props) {
  return (
    <div
      className={`${className} ${classes.wrapper} relative`}
      role="list"
      style={{
        transition: `height ${duration}s ease-in-out`,
      }}
    >
      {items.map((item, index) => {
        if (Math.abs(activeIndex - index) > 1) return null;
        const isActive = index === activeIndex;
        const isPast = index < activeIndex;

        return (
          <div
            key={index}
            role="listitem"
            aria-hidden={!isActive}
            className={classNames(
              classes.item,
              {
                [classes.active]: isActive,
                [classes.past]: isPast,
              },
              classNameItem,
            )}
            style={{
              transitionDelay: `${delay}s`,
              transitionDuration: `${duration}s`,
            }}
          >
            {renderItem(item)}
          </div>
        );
      })}
    </div>
  );
}
