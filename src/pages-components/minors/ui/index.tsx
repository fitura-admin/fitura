"use client";
import React from "react";
import { useParams } from "next/navigation";

import classes from "./minors.module.scss";
import { LangT } from "~/src/app/store/reducers/navigation.slice";
import MinorsBackButton from "./back-button";
import { minorsHeading, minorsMeta, minorsSectionsLangs } from "../model";
import { DocumentRenderer } from "~/src/entities/offer/ui/document-renderer";

export default function MinorsPage() {
  const { lang } = useParams();
  const currentLang = lang ? (lang as LangT) : "lv";

  const document = {
    meta: minorsMeta[currentLang],
    sections: minorsSectionsLangs[currentLang],
    tables: [],
  };

  return (
    <div className={`wrapper`}>
      <div className={`flex-row flex-start ${classes.container}`}>
        <MinorsBackButton />
        <div className={`flex-column ${classes.notice}`}>
          <h1 className="white heading h3">{minorsHeading[currentLang]}</h1>
          <div className={classes.line}></div>
          <DocumentRenderer document={document} />
        </div>
      </div>
    </div>
  );
}
