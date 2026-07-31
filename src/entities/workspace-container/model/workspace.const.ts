import { FC, SVGProps } from "react";

import TrainersSub from "~/public/workspace/trainers-sub.svg";
import GroupSub from "~/public/workspace/group-sub.svg";
import TrainersSubMedia from "~/public/workspace/trainers-sub-media.svg";
import GroupSubMedia from "~/public/workspace/group-sub-media.svg";

export interface IAnimateImage {
  big: boolean;
  images: string[];
}

export const swiperImages: string[][] = [
  [
    "/space/1.webp",
    "/space/3.webp",
    "/space/6.webp",
    "/space/7.webp",
    "/space/9.webp",
  ],
  [
    "/trainers/1.webp",
    "/trainers/3.webp",
    "/trainers/6.webp",
    "/trainers/7.webp",
    "/trainers/9.webp",
  ],
  [
    "/together/1.webp",
    "/together/3.webp",
    "/together/6.webp",
    "/together/7.webp",
    "/together/9.webp",
  ],
  ["/lab/1.webp", "/lab/3.webp", "/lab/6.webp", "/lab/7.webp", "/lab/9.webp"],
];

// ВАЖНО: последовательность картинок максимально важна
export const animatingImages: IAnimateImage[] = [
  {
    big: true,
    images: [
      "/space/1.webp",
      "/trainers/1.webp",
      "/together/1.webp",
      "/lab/1.webp",
    ],
  },
  {
    big: false,
    images: [
      "/space/2.webp",
      "/trainers/2.webp",
      "/together/2.webp",
      "/lab/2.webp",
    ],
  },
  {
    big: false,
    images: [
      "/space/3.webp",
      "/trainers/3.webp",
      "/together/3.webp",
      "/lab/3.webp",
    ],
  },
  {
    big: false,
    images: [
      "/space/4.webp",
      "/trainers/4.webp",
      "/together/4.webp",
      "/lab/4.webp",
    ],
  },
  {
    big: false,
    images: [
      "/space/5.webp",
      "/trainers/5.webp",
      "/together/5.webp",
      "/lab/5.webp",
    ],
  },
  {
    big: true,
    images: [
      "/space/6.webp",
      "/trainers/6.webp",
      "/together/6.webp",
      "/lab/6.webp",
    ],
  },
  {
    big: true,
    images: [
      "/space/7.webp",
      "/trainers/7.webp",
      "/together/7.webp",
      "/lab/7.webp",
    ],
  },
  {
    big: false,
    images: [
      "/space/8.webp",
      "/trainers/8.webp",
      "/together/8.webp",
      "/lab/8.webp",
    ],
  },
  {
    big: false,
    images: [
      "/space/9.webp",
      "/trainers/9.webp",
      "/together/9.webp",
      "/lab/9.webp",
    ],
  },
];

// ВАЖНО: последовательность картинок максимально важна
export const animatingMediaImages: IAnimateImage[] = [
  {
    big: true,
    images: [
      "/space/1-media.webp",
      "/trainers/1-media.webp",
      "/together/1-media.webp",
      "/lab/1-media.webp",
    ],
  },
  {
    big: false,
    images: [
      "/space/2-media.webp",
      "/trainers/2-media.webp",
      "/together/2-media.webp",
      "/lab/2-media.webp",
    ],
  },
  {
    big: false,
    images: [
      "/space/3-media.webp",
      "/trainers/3-media.webp",
      "/together/3-media.webp",
      "/lab/3-media.webp",
    ],
  },
  {
    big: false,
    images: [
      "/space/4-media.webp",
      "/trainers/4-media.webp",
      "/together/4-media.webp",
      "/lab/4-media.webp",
    ],
  },
  {
    big: false,
    images: [
      "/space/5-media.webp",
      "/trainers/5-media.webp",
      "/together/5-media.webp",
      "/lab/5-media.webp",
    ],
  },
];

interface ISub {
  Icon: FC<SVGProps<SVGSVGElement>>;
  IconMedia: FC<SVGProps<SVGSVGElement>>;
}
export interface IWorkspaceHeading {
  tName: string;
  Icon: ISub | null;
}

export const workspaceHeadings: IWorkspaceHeading[] = [
  {
    tName: "space",
    Icon: null,
  },
  {
    tName: "gym",
    Icon: {
      Icon: TrainersSub,
      IconMedia: TrainersSubMedia,
    },
  },
  {
    tName: "groupClasses",
    Icon: {
      Icon: GroupSub,
      IconMedia: GroupSubMedia,
    },
  },
  {
    tName: "lab",
    Icon: null,
  },
];

export const workspaceContainers: string[] = [
  "bg-100",
  "bg-200",
  "bg-300",
  "bg-500",
];
