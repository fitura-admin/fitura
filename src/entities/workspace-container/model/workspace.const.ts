import { FC, SVGProps } from "react";

import TrainersSub from "~/public/workspace/trainers-sub.svg";
import GroupSub from "~/public/workspace/group-sub.svg";
import SpaSub from "~/public/workspace/spa-sub.svg";
import TrainersSubMedia from "~/public/workspace/trainers-sub-media.svg";
import GroupSubMedia from "~/public/workspace/group-sub-media.svg";
import SpaSubMedia from "~/public/workspace/spa-sub-media.svg";

export interface IAnimateImage {
  big: boolean;
  images: string[];
}

export const swiperImages: string[][] = [
  [
    "/space/1.png",
    "/space/3.png",
    "/space/6.png",
    "/space/7.png",
    "/space/9.png",
  ],
  [
    "/trainers/1.png",
    "/trainers/3.png",
    "/trainers/6.png",
    "/trainers/7.png",
    "/trainers/9.png",
  ],
  [
    "/together/1.png",
    "/together/3.png",
    "/together/6.png",
    "/together/7.png",
    "/together/9.png",
  ],
  ["/spa/1.png", "/spa/3.png", "/spa/6.png", "/spa/7.png", "/spa/9.png"],
  ["/lab/1.png", "/lab/3.png", "/lab/6.png", "/lab/7.png", "/lab/9.png"],
];

// ВАЖНО: последовательность картинок максимально важна
export const animatingImages: IAnimateImage[] = [
  {
    big: true,
    images: [
      "/space/1.png",
      "/trainers/1.png",
      "/together/1.png",
      "/spa/1.png",
      "/lab/1.png",
    ],
  },
  {
    big: false,
    images: [
      "/space/2.png",
      "/trainers/2.png",
      "/together/2.png",
      "/spa/2.png",
      "/lab/2.png",
    ],
  },
  {
    big: false,
    images: [
      "/space/3.png",
      "/trainers/3.png",
      "/together/3.png",
      "/spa/3.png",
      "/lab/3.png",
    ],
  },
  {
    big: false,
    images: [
      "/space/4.png",
      "/trainers/4.png",
      "/together/4.png",
      "/spa/4.png",
      "/lab/4.png",
    ],
  },
  {
    big: false,
    images: [
      "/space/5.png",
      "/trainers/5.png",
      "/together/5.png",
      "/spa/5.png",
      "/lab/5.png",
    ],
  },
  {
    big: true,
    images: [
      "/space/6.png",
      "/trainers/6.png",
      "/together/6.png",
      "/spa/6.png",
      "/lab/6.png",
    ],
  },
  {
    big: true,
    images: [
      "/space/7.png",
      "/trainers/7.png",
      "/together/7.png",
      "/spa/7.png",
      "/lab/7.png",
    ],
  },
  {
    big: false,
    images: [
      "/space/8.png",
      "/trainers/8.png",
      "/together/8.png",
      "/spa/8.png",
      "/lab/8.png",
    ],
  },
  {
    big: false,
    images: [
      "/space/9.png",
      "/trainers/9.png",
      "/together/9.png",
      "/spa/9.png",
      "/lab/9.png",
    ],
  },
];

// ВАЖНО: последовательность картинок максимально важна
export const animatingMediaImages: IAnimateImage[] = [
  {
    big: true,
    images: [
      "/space/1-media.png",
      "/trainers/1-media.png",
      "/together/1-media.png",
      "/spa/1-media.png",
      "/lab/1-media.png",
    ],
  },
  {
    big: false,
    images: [
      "/space/2-media.png",
      "/trainers/2-media.png",
      "/together/2-media.png",
      "/spa/2-media.png",
      "/lab/2-media.png",
    ],
  },
  {
    big: false,
    images: [
      "/space/3-media.png",
      "/trainers/3-media.png",
      "/together/3-media.png",
      "/spa/3-media.png",
      "/lab/3-media.png",
    ],
  },
  {
    big: false,
    images: [
      "/space/4-media.png",
      "/trainers/4-media.png",
      "/together/4-media.png",
      "/spa/4-media.png",
      "/lab/4-media.png",
    ],
  },
  {
    big: false,
    images: [
      "/space/5-media.png",
      "/trainers/5-media.png",
      "/together/5-media.png",
      "/spa/5-media.png",
      "/lab/5-media.png",
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
    tName: "spa",
    Icon: {
      Icon: SpaSub,
      IconMedia: SpaSubMedia,
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
  "bg-400",
  "bg-500",
];
