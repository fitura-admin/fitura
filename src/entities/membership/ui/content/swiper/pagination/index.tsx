import React from "react";

import classes from "./pagination.module.scss";
import classNames from "classnames";

interface Props {
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  slidesCount: number;
  inView: boolean;
}

export default function MembershipSwiperPagination({
  currentSlide,
  setCurrentSlide,
  slidesCount,
  inView,
}: Props) {
  return (
    <div
      className={classNames(
        `flex-row gap-2 align-center ${classes.container}`,
        {
          [classes.active]: inView,
        },
      )}
    >
      {[...Array(slidesCount)].map((_, index) => (
        <div
          key={index}
          className={classNames(classes.line, {
            [classes.active]: index === currentSlide,
          })}
          onClick={() => setCurrentSlide(index)}
        ></div>
      ))}
    </div>
  );
}
