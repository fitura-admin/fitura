import React from "react";

import classes from "./options.module.scss";
import CardOptionsList from "./list";
import { TextTranslate } from "~/src/shared/ui/text-translate/ui";

export default function CardOptions() {
  return (
    <>
      <div className={classes.line}></div>
      <div className={`flex-column ${classes.container}`}>
        <TextTranslate
          as="h6"
          className="heading h7 white"
          nameSpace="membership"
          tName="inEveryPlan.heading"
        />
        <CardOptionsList />
      </div>
    </>
  );
}
