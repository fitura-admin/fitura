"use client";
import React from "react";
import { useWindowSize } from "react-use";

import classes from "./membership-content.module.scss";
import MembershipCard from "./card";
import {
  membershipBigCard,
  membershipCards,
} from "~/src/entities/membership/model/membership.const";
import MembershipSwiper from "./swiper";

export default function MembershipContent() {
  const { width } = useWindowSize();

  if (width <= 1024) {
    return <MembershipSwiper />;
  }

  return (
    <div className={`flex-row ${classes.container}`}>
      <MembershipCard item={membershipBigCard} index={0} />
      <div className={`flex-column ${classes.cards}`}>
        {membershipCards.map((item, index) => (
          <MembershipCard index={index + 2} key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
