"use client";
import React, { useState } from "react";
import { useWindowSize } from "react-use";

import classes from "./membership-content.module.scss";
import MembershipCard from "./card";
import MembershipSwiper from "./swiper";
import MinorsModal from "~/src/entities/minors-modal/ui";
import {
  membershipBigCard,
  membershipCards,
} from "~/src/entities/membership/model/membership.const";

export default function MembershipContent() {
  const { width } = useWindowSize();
  const [isModalOpen, setIsModalOpen] = useState<boolean | null>(null);

  if (width <= 1024) {
    return (
      <>
        <MembershipSwiper openModal={() => setIsModalOpen(true)} />
        {isModalOpen !== null && (
          <MinorsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </>
    );
  }

  return (
    <>
      <div className={`flex-row ${classes.container}`}>
        <MembershipCard
          item={membershipBigCard}
          index={0}
          openModal={() => setIsModalOpen(true)}
        />
        <div className={`flex-column ${classes.cards}`}>
          {membershipCards.map((item, index) => (
            <MembershipCard
              index={index + 2}
              key={index}
              item={item}
              openModal={() => setIsModalOpen(true)}
            />
          ))}
        </div>
      </div>
      {isModalOpen !== null && (
        <MinorsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
