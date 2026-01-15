import React from "react";

import classes from "./card-info.module.scss";
import Button from "~/src/shared/ui/button";
import TextScroll from "~/src/shared/ui/text-scroll";
import AnimatedItem from "~/src/shared/ui/animated-item";
import { TextTranslate } from "~/src/shared/ui/text-translate/ui";

interface Props {
  tName: string;
  moreContent: boolean;
}

const linkToPayment = "https://fiturafitness-membership.flybyglobal.com/";

export default function CardHeadingInfo({ moreContent, tName }: Props) {
  return (
    <div className={`flex-row space-between align-center ${classes.info}`}>
      <div className={`flex-row gap-2 flex-start`}>
        <TextScroll
          onInView
          speed={1}
          className={`heading white ${classes.info__price}`}
          nameSpace={"membership"}
          tName={tName}
        />
        <TextTranslate
          as="p"
          className={`heading white ${classes.info__period}`}
          nameSpace="membership"
          tName="plans.pricePeriod"
        />
      </div>
      <AnimatedItem delay={0.1}>
        <a href={linkToPayment} target="_blank" rel="noopener noreferrer">
          <Button
            typeButton={moreContent ? "white" : "primary"}
            size="10-16"
            radius={100}
            asLink
          >
            <TextTranslate
              as="span"
              className={`heading h7 ${moreContent ? "black" : "white"} ${classes.btn__text}`}
              nameSpace="membership"
              tName="buttonText"
            />
          </Button>
        </a>
      </AnimatedItem>
    </div>
  );
}
