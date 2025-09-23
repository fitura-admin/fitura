import React from "react";
import classNames from "classnames";

import classes from "./card-heading.module.scss";
import CardHeadingInfo from "./info";
import TextScroll from "~/src/shared/ui/text-scroll";
import { IMembershipCard } from "~/src/entities/membership/model/membership.interface";

interface Props extends IMembershipCard {}

export default function MembershipCardHeading({
  title,
  subTitle,
  price,
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
          word={title}
          textClassName="heading h2 white"
          onInView={true}
          speed={1.2}
        />
        <p className="base body-text white">{subTitle}</p>
      </div>
      <CardHeadingInfo price={price} moreContent={moreContent} />
    </div>
  );
}
