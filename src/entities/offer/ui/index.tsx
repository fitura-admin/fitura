"use client";
import React from "react";
import { useParams } from "next/navigation";

import classes from "./offer.module.scss";
import LegalBackButton from "./back-button";
import { LangT } from "~/src/app/store/reducers/navigation.slice";
import { offerHeadings, offerTexts } from "../model";

export default function OfferSection() {
  const { lang } = useParams();

  const currentText = offerTexts[lang ? (lang as LangT) : "lv"];
  const currentHeading = offerHeadings[lang ? (lang as LangT) : "lv"];

  return (
    <div className={`wrapper`}>
      <div className={`flex-row flex-start ${classes.container}`}>
        <LegalBackButton />
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
