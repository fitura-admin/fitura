import { IMembershipCard } from "./membership.interface";

export const membershipCards: IMembershipCard[] = [
  {
    type: "duo",
  },
  {
    type: "junior",
  },
];

export const membershipSlides: IMembershipCard[] = [
  {
    type: "full",
    moreContent: true,
  },
  {
    type: "duo",
    moreContent: true,
  },
  {
    type: "junior",
    moreContent: true,
  },
];

export const membershipBigCard: IMembershipCard = {
  type: "full",
  moreContent: true,
};
