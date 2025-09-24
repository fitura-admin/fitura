"use client";
import React, { useMemo } from "react";
import { useWindowSize } from "react-use";
import classNames from "classnames";

import classes from "./membership-card.module.scss";
import AnimatedItem from "~/src/shared/ui/animated-item";
import MembershipCardHeading from "./heading";
import CardOptions from "./options";
import { IMembershipCard } from "~/src/entities/membership/model/membership.interface";

interface Props {
  item: IMembershipCard;
  index?: number;
}

export default function MembershipCard({ item, index }: Props) {
  const { width } = useWindowSize();

  const cardContent: React.ReactNode = useMemo(
    () => (
      <>
        <MembershipCardHeading {...item} />
        {item.moreContent ? <CardOptions /> : null}
      </>
    ),
    [item],
  );

  const classNameLocal = useMemo(
    () =>
      classNames(`flex-column ${classes.container}`, {
        [classes.more]: item.moreContent,
      }),
    [item.moreContent],
  );

  if (width <= 1024) {
    return <div className={classNameLocal}>{cardContent}</div>;
  }

  return (
    <AnimatedItem
      index={index}
      slideIn
      direction={"up"}
      duration={0.5}
      delay={0.3}
      className={classNameLocal}
    >
      {cardContent}
    </AnimatedItem>
  );
}
