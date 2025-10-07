"use client";
import React from "react";
import { useParams } from "next/navigation";

import classes from "./legal-notice.module.scss";
import LegalBackButton from "./back-button";
import { legalNoticeLangs } from "../model/legal-notice.const";
import { LangT } from "~/src/app/store/reducers/navigation.slice";

export default function LegalNoticeSection() {
  const { lang } = useParams();

  const currentNotice = legalNoticeLangs[lang ? (lang as LangT) : "en"];

  return (
    <div className={`wrapper`}>
      <div className={`flex-row flex-start ${classes.container}`}>
        <LegalBackButton />
        <div className={`flex-column ${classes.notice}`}>
          <h1 className="white heading h3">{currentNotice.heading}</h1>
          <div className={classes.line}></div>
          <div className="flex-column">
            <h2 className="heading h6 white">{currentNotice.text.heading}</h2>
            <p className={`body-text base white ${classes.text}`}>
              {currentNotice.text.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
