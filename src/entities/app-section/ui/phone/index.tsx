import React from "react";

import classes from "./app-phone.module.scss";
import PhoneBg from "~/public/app-section/phone-bg.svg";
import PhoneBgMedia from "~/public/app-section/phone-bg-media.svg";
import Image from "next/image";
import AppPhoneMarquess from "./marquess";

export default function AppPhone() {
  return (
    <div className={`${classes.container}`}>
      <div className={classes.bg}>
        <PhoneBg className={classes.bg__main} />
        <PhoneBgMedia className={classes.bg__media} />
      </div>
      <AppPhoneMarquess />
      <div className={`${classes.image_container}`}>
        <Image
          src="/app-section/phone.png"
          width={600}
          height={648}
          alt="phone"
          className={`${classes.img}`}
        />
      </div>
    </div>
  );
}
