import React from "react";

import classes from "./app-content.module.scss";
import AppContentHeading from "./heading";
import AppContentLinks from "./links";

export default function AppContent() {
  return (
    <div
      className={`flex-column space-between top-center ${classes.container}`}
    >
      <AppContentHeading />
      <AppContentLinks />
    </div>
  );
}
