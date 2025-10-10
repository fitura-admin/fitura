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

const CardContent = ({ item }: Props) => (
  <>
    <MembershipCardHeading {...item} />
    {item.moreContent ? <CardOptions /> : null}
  </>
);

export default function MembershipCard({ item, index }: Props) {
  const { width } = useWindowSize();

  const classNameLocal = useMemo(
    () =>
      classNames(`flex-column ${classes.container}`, {
        [classes.more]: item.moreContent,
      }),
    [item.moreContent],
  );

  if (width <= 1024) {
    return (
      <div className={classNameLocal}>
        <CardContent item={item} />
      </div>
    );
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
      <CardContent item={item} />
    </AnimatedItem>
  );
}
