import React from "react";

import classes from "./nav.module.scss";
import HeaderNavButton from "./button";
import { headerNavButtons } from "~/src/entities/header/model/header.const";

interface Props {
  children?: React.ReactNode;
}

export default function HeaderNav({ children }: Props) {
  return (
    <nav className={`flex-row align-center ${classes.container}`}>
      {headerNavButtons.map((item, index) => {
        return <HeaderNavButton key={index} {...item} />;
      })}
      {children}
    </nav>
  );
}
