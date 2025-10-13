import Ios from "~/public/app-section/ios.svg";
import IosMedia from "~/public/app-section/ios-media.svg";
import Google from "~/public/app-section/google.svg";
import GoogleMedia from "~/public/app-section/google-media.svg";
import { IAppLink } from "./app.interface";

export const appLinks: IAppLink[] = [
  {
    title: "App Store",
    link: "#!",
    Icon: Ios,
    IconMedia: IosMedia,
  },
  {
    title: "Google Play",
    link: "#!",
    Icon: Google,
    IconMedia: GoogleMedia,
  },
];
