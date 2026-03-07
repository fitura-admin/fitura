import Ios from "~/public/app-section/ios.svg";
import IosMedia from "~/public/app-section/ios-media.svg";
import Google from "~/public/app-section/google.svg";
import GoogleMedia from "~/public/app-section/google-media.svg";
import { IAppLink } from "./app.interface";

export const appLinks: IAppLink[] = [
  {
    title: "App Store",
    link: "https://apps.apple.com/tt/app/fitura-fitness/id6755587306",
    Icon: Ios,
    IconMedia: IosMedia,
  },
  {
    title: "Google Play",
    link: "https://play.google.com/store/apps/details?id=net.senkron.lapis.fiturafitness",
    Icon: Google,
    IconMedia: GoogleMedia,
  },
];
