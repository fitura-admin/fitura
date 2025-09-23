"use client";
import React from "react";

import classes from "./logo.module.scss";
import Logo from "~/public/header/logo.svg";
import LogoMedia from "~/public/header/logo-media.svg";
import LinkContainer from "~/src/shared/ui/link-container";

export default function HeaderLogo() {
  return (
    <LinkContainer href="/" className={classes.logo}>
      <Logo className={classes.logo__desktop} />
      <LogoMedia className={classes.logo__media} />
    </LinkContainer>
  );
}
