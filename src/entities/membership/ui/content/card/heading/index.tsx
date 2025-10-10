import React from "react";
import classNames from "classnames";

import classes from "./card-heading.module.scss";
import CardHeadingInfo from "./info";
import TextScroll from "~/src/shared/ui/text-scroll";
import { IMembershipCard } from "~/src/entities/membership/model/membership.interface";
import { TextTranslate } from "~/src/shared/ui/text-translate/ui";

interface Props extends IMembershipCard {}

export default function MembershipCardHeading({
  type,
  moreContent = false,
}: Props) {
  return (
    <div
      className={classNames(`flex-column ${classes.container}`, {
        [classes.more]: moreContent,
      })}
    >
      <div className={`flex-column ${classes.text}`}>
        <TextScroll
          nameSpace="membership"
          tName={`plans.${type}.heading`}
          textClassName="heading h2 white"
          onInView={true}
          speed={1.2}
        />
        <TextTranslate
          as={"p"}
          className="base body-text white"
          nameSpace="membership"
          tName={`plans.${type}.text`}
        />
      </div>
      <CardHeadingInfo
        tName={`plans.${type}.price`}
        moreContent={moreContent}
      />
    </div>
  );
}
