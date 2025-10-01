"use client";
import React from "react";
import { useAppDispatch } from "~/src/app/store/hook";
import { setModalOpen } from "~/src/app/store/reducers/navigation.slice";

import classes from "./card-info.module.scss";
import Button from "~/src/shared/ui/button";
import TextScroll from "~/src/shared/ui/text-scroll";
import AnimatedItem from "~/src/shared/ui/animated-item";
import { MagneticItem } from "~/src/shared/ui/magnetic-item";

interface Props {
  price: string;
  moreContent: boolean;
}

export default function CardHeadingInfo({ price, moreContent }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className={`flex-row space-between align-center ${classes.info}`}>
      <div className={`flex-row gap-2 flex-start`}>
        <TextScroll
          onInView
          speed={1}
          word={"€\u00A0" + price}
          className={`heading white ${classes.info__price}`}
        />
        <p className={`heading white ${classes.info__period}`}>/&nbsp;4&nbsp;weeks</p>
      </div>
      <AnimatedItem delay={0.1}>
        <MagneticItem strength={0.1} areaSize={150}>
          <Button
            type={moreContent ? "white" : "primary"}
            size="10-16"
            radius={100}
            onClick={() => dispatch(setModalOpen(true))}
          >
            <span
              className={`heading h7 ${moreContent ? "black" : "white"} ${classes.btn__text}`}
            >
              Get started
            </span>
          </Button>
        </MagneticItem>
      </AnimatedItem>
    </div>
  );
}
