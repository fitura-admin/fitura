import React from "react";

import classes from "./options.module.scss";
import CardOptionsList from "./list";

export default function CardOptions() {
  return (
    <>
      <div className={classes.line}></div>
      <div className={`flex-column ${classes.container}`}>
        <h6 className="heading h7 white">Included in Every Membership:</h6>
        <CardOptionsList />
      </div>
    </>
  );
}
