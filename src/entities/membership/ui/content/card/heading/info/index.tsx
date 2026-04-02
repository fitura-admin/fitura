import React from "react";

import classes from "./card-info.module.scss";
import TextScroll from "~/src/shared/ui/text-scroll";
import { TextTranslate } from "~/src/shared/ui/text-translate/ui";
import MembershipCardButton from "./button";

interface Props {
  tName: string;
  moreContent: boolean;
  openModal: (() => void) | null;
}

const NAMESPACE = "membership";

export default function CardHeadingInfo({
  moreContent,
  tName,
  openModal,
}: Props) {
  return (
    <div className={`flex-row space-between align-center ${classes.info}`}>
      <div className="flex-column gap-2 flex-start">
        <div className={`flex-row gap-2 flex-start`}>
          <TextScroll
            onInView
            speed={1}
            className={`heading white ${classes.info__price}`}
            nameSpace={NAMESPACE}
            tName={tName}
          />
          <TextTranslate
            as="p"
            className={`heading white ${classes.info__period}`}
            nameSpace={NAMESPACE}
            tName="plans.pricePeriod"
          />
        </div>
        <TextTranslate
          as="p"
          className={`body-text white super-small ${classes.opacity_6}`}
          nameSpace={NAMESPACE}
          tName="plans.joiningFee"
        >
          &nbsp;– 37,5 € (<span className={classes.crossed}>50 €</span>)
        </TextTranslate>
      </div>
      <MembershipCardButton moreContent={moreContent} openModal={openModal} />
    </div>
  );
}
