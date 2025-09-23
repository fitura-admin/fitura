"use client";
import React, { Dispatch, SetStateAction } from "react";
import { useWindowSize } from "react-use";

import classes from "./body.module.scss";
import BodyAnimatedItem from "./animated-item";
import {
  animatingImages,
  animatingMediaImages,
} from "~/src/entities/workspace-container/model/workspace.const";

interface Props {
  activeIndex: number;
  setModalOpened: Dispatch<SetStateAction<boolean>>;
}

export default function WorkspaceBody({ activeIndex, setModalOpened }: Props) {
  const { width, height } = useWindowSize();

  const getDelay = (index: number, rowIndex: number) => {
    if (rowIndex > 0) {
      if (rowIndex === 1 && (index === 0 || index === 1))
        return rowIndex * 0.2 + index * 0.1;
      if (rowIndex === 2 && index === 0) return rowIndex * 0.2 + index * 0.1;
    }
    return ((rowIndex || 1) * 0.2 + index * 0.1) * 2;
  };

  const groupedImages = [
    animatingImages.slice(0, 3),
    animatingImages.slice(3, 6),
    animatingImages.slice(6, 9),
  ];

  const mediaImages =
    height <= 700
      ? animatingMediaImages.filter((_, idx) => {
          if (idx === 2 || idx === 3) {
            return false;
          }
          return true;
        })
      : animatingMediaImages;

  if (width <= 768) {
    return (
      <div className={`${classes.container}`}>
        {mediaImages.map((item, index) => {
          return (
            <BodyAnimatedItem
              key={index}
              items={item.images}
              activeIndex={activeIndex}
              isBig={item.big}
              delay={index * 0.2}
              index={index}
              setModalOpened={setModalOpened}
            />
          );
        })}
      </div>
    );
  }
  return (
    <div className={`${classes.container}`}>
      {groupedImages.map((items, rowIndex) => {
        return (
          <div className={`${classes.row}`} key={rowIndex}>
            {items.map((item, index) => {
              return (
                <BodyAnimatedItem
                  key={index}
                  items={item.images}
                  activeIndex={activeIndex}
                  isBig={item.big}
                  delay={getDelay(index, rowIndex)}
                  index={index}
                  setModalOpened={setModalOpened}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
