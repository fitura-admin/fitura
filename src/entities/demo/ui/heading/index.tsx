import React from "react";

import classes from "./heading.module.scss";
import Logo from "~/public/logo.svg";
import Image from "next/image";

export default function DemoHeading() {
  return (
    <div className="flex-column align-center gap-5">
      <div className="flex-column gap-2 align-center">
        <div className={`${classes.logo} relative`}>
          <Image src="/logo.png" width={220} height={58} alt="logo" />
        </div>
        <h1 className="text-60 white second-family light text-center">
          Coming soon
        </h1>
      </div>
      <h2 className={`light text-28 white text-center ${classes.opacity}`}>
        Fitness & SPA
      </h2>
    </div>
  );
}
