import React from "react";
import classNames from "classnames";

import classes from "./card-heading.module.scss";
import CardHeadingInfo from "./info";
import TextScroll from "~/src/shared/ui/text-scroll";
import { TextTranslate } from "~/src/shared/ui/text-translate/ui";
import { IMembershipCard } from "~/src/entities/membership/model";

interface Props extends IMembershipCard {}

const NAMESPACE = "membership";

export default function MembershipCardHeading({
  type,
  moreContent = false,
}: Props) {
  return (
    <div
      className={classNames(`flex-column relative ${classes.container}`, {
        [classes.more]: moreContent,
      })}
    >
      <TextTranslate
        nameSpace={NAMESPACE}
        tName={`plans.${type}.age`}
        as="span"
        className={`text-body white ${classes.age}`}
      />
      <div className={`flex-column ${classes.text}`}>
        <TextScroll
          nameSpace={NAMESPACE}
          tName={`plans.${type}.heading`}
          textClassName="heading h2 white"
          onInView={true}
          speed={1.2}
        />
        <TextTranslate
          as={"p"}
          className="base body-text white"
          nameSpace={NAMESPACE}
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
