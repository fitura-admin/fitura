import { IMembershipCard } from "./membership.interface";

export const membershipCards: IMembershipCard[] = [
  {
    title: "Duo",
    subTitle: "Train, recover, and thrive together \n— full access for two",
    price: "129.5",
  },
  {
    title: "Junior",
    subTitle:
      "Smart start for ages 16-18: full gym, spa, classes, app access, and more",
    price: "50",
  },
];

export const membershipSlides: IMembershipCard[] = [
  {
    title: "Full\u00A0Access",
    subTitle:
      "All-inclusive membership with gym, spa, classes, recovery, and more",
    price: "69.5",
    moreContent: true,
  },
  {
    title: "Duo",
    subTitle: "Train, recover, and thrive together \n— full access for two",
    price: "129.5",
    moreContent: true,
  },
  {
    title: "Junior",
    subTitle:
      "Smart start for ages 16-18: full gym, spa, classes, app access, and more",
    price: "50",
    moreContent: true,
  },
];

export const membershipBigCard: IMembershipCard = {
  title: "Full\u00A0Access",
  subTitle:
    "All-inclusive membership with gym, spa, classes, recovery, and more",
  price: "69.5",
  moreContent: true,
};
