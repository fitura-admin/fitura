import React from "react";
import SwiperCore from "swiper";

import classes from "./space-modal-swiper.module.scss";
import Image from "next/image";
import SpaceModalNavigation from "../navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperImages } from "~/src/entities/workspace-container/model/workspace.const";

interface Props {
  swiperRef: React.RefObject<SwiperCore | null>;
  activeIndex: number;
  handleSlideChange: () => void;
  goNext: () => void;
  goPrev: () => void;
  navRef: React.RefObject<HTMLDivElement | null>;
}

export default function SpaceModalSwiper({
  swiperRef,
  handleSlideChange,
  activeIndex,
  goNext,
  goPrev,
  navRef,
}: Props) {
  return (
    <div className={classes.wrapper}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={() => handleSlideChange()}
        spaceBetween={0}
        simulateTouch={true}
        allowTouchMove={true}
        slidesPerView={1}
        touchRatio={1}
        grabCursor
        centeredSlides
        className={`${classes.container} flex-row`}
      >
        {swiperImages[activeIndex].map((image, index) => (
          <SwiperSlide key={index + image} className={classes.slide}>
            <Image
              width={806}
              height={500}
              src={`/workspace${image}`}
              quality={100}
              alt="swiper-slide-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <SpaceModalNavigation goNext={goNext} goPrev={goPrev} navRef={navRef} />
    </div>
  );
}
