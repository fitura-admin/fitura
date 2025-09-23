"use client";
import React from "react";
import { useSwiperSlides } from "~/src/shared/lib/hooks/useSwiperSlides.hook";

import classes from "./space-modal.module.scss";
import Modal from "~/src/shared/ui/modal/ui";
import SpaceModalPagination from "./pagination";
import SpaceModalSwiper from "./swiper";
import { swiperImages } from "~/src/entities/workspace-container/model/workspace.const";
import { useSpaceModal } from "../../lib/hooks/useSpaceModal.hook";

interface Props {
  onClose: () => void;
  isOpened: boolean;
  activeIndex: number;
}

export default function SpaceModal({ onClose, activeIndex, isOpened }: Props) {
  const { swiperRef, goTo, goNext, goPrev, currentSlide, handleSlideChange } =
    useSwiperSlides({
      slidesCount: swiperImages.length,
    });

  const { paginationRef, navigationRef } = useSpaceModal({
    onClose,
    isOpened,
    swiperRef,
  });

  return (
    <Modal
      customContainer
      customClickOutside
      className={classes.wrapper}
      classNameContainer={`flex-column ${classes.container}`}
      onClose={onClose}
      isOpened={isOpened}
    >
      <SpaceModalSwiper
        navRef={navigationRef}
        swiperRef={swiperRef}
        handleSlideChange={handleSlideChange}
        activeIndex={activeIndex}
        goNext={goNext}
        goPrev={goPrev}
      />
      <SpaceModalPagination
        currentSlide={currentSlide}
        goTo={goTo}
        activeIndex={activeIndex}
        ref={paginationRef}
      />
    </Modal>
  );
}
