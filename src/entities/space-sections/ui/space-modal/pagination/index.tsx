import React, { RefObject } from "react";
import classNames from "classnames";

import classes from "./space-modal-pagination.module.scss";
import Image from "next/image";
import { swiperImages } from "~/src/entities/workspace-container/model/workspace.const";

interface Props {
  activeIndex: number;
  currentSlide: number;
  goTo: (index: number) => void;
  ref: RefObject<HTMLUListElement | null>;
}

export default function SpaceModalPagination({
  currentSlide,
  goTo,
  activeIndex,
  ref,
}: Props) {
  return (
    <ul className={`flex-row align-center ${classes.container}`} ref={ref}>
      {swiperImages[activeIndex].map((image, index) => {
        const active = index === currentSlide;
        return (
          <li
            key={index + image}
            className={classNames(classes.imageContainer, {
              [classes.imageActive]: active,
            })}
            onClick={() => goTo(index)}
          >
            <Image
              src={`/workspace${image}`}
              alt="swiper-pagination-image"
              width={100}
              height={62}
            />
          </li>
        );
      })}
    </ul>
  );
}
