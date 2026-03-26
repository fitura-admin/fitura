"use client";
import React from "react";
import { useParams } from "next/navigation";

import classes from "./minors.module.scss";
import { LangT } from "~/src/app/store/reducers/navigation.slice";
import MinorsBackButton from "./back-button";
import { minorsHeading, minorsTexts } from "../model";

export default function MinorsPage() {
  const { lang } = useParams();

  const currentText = minorsTexts[lang ? (lang as LangT) : "lv"];
  const currentHeading = minorsHeading[lang ? (lang as LangT) : "lv"];

  return (
    <div className={`wrapper`}>
      <div className={`flex-row flex-start ${classes.container}`}>
        <MinorsBackButton />
        <div className={`flex-column ${classes.notice}`}>
          <h1 className="white heading h3">{currentHeading}</h1>
          <div className={classes.line}></div>
          <div className="flex-column">
            <h2 className="heading h6 white">{currentHeading}</h2>
            <p className={`body-text base white ${classes.text}`}>
              {currentText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
