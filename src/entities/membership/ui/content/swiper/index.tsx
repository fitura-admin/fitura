"use client";
import React, { useMemo, useRef } from "react";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperSlides } from "~/src/shared/lib/hooks/useSwiperSlides.hook";
import { useInView } from "framer-motion";

import classes from "./membership-swiper.module.scss";
import MembershipCard from "../card";
import MembershipSwiperPagination from "./pagination";
import AnimatedItem from "~/src/shared/ui/animated-item";
import { membershipSlides } from "~/src/entities/membership/model/membership.const";

export default function MembershipSwiper() {
  const slidesCount = useMemo(() => membershipSlides.length, []);
  const { swiperRef, handleSlideChange, currentSlide, setCurrentSlide } =
    useSwiperSlides({ slidesCount: slidesCount });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapperRef, { amount: 0.7, once: false });

  return (
    <AnimatedItem delay={0.2} duration={0.5} slideIn direction="up">
      <div className={`flex-column gap-10 ${classes.wrapper}`} ref={wrapperRef}>
        <Swiper
          modules={[Pagination, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={() => handleSlideChange()}
          slidesPerView={"auto"}
          spaceBetween={10}
          simulateTouch={true}
          allowTouchMove={true}
          touchRatio={1}
          grabCursor
          className={`${classes.swiper} flex-row`}
          autoplay={inView ? true : false}
          centeredSlides
        >
          {membershipSlides.map((item, index) => (
            <SwiperSlide key={index + item.title} className={classes.slide}>
              <MembershipCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <MembershipSwiperPagination
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          slidesCount={slidesCount}
          inView={inView}
        />
      </div>
    </AnimatedItem>
  );
}
