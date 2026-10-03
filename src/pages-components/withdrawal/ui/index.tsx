"use client";
import React from "react";
import { useParams } from "next/navigation";

import classes from "./withdrawal.module.scss";
import { LangT } from "~/src/app/store/reducers/navigation.slice";
import WithdrawalBackButton from "./back-button";
import {
  withdrawalHeading,
  withdrawalMeta,
  withdrawalSectionsLangs,
} from "../model";
import { DocumentRenderer } from "~/src/entities/offer/ui/document-renderer";

export default function WithdrawalPage() {
  const { lang } = useParams();
  const currentLang = lang ? (lang as LangT) : "lv";

  const document = {
    meta: withdrawalMeta[currentLang],
    sections: withdrawalSectionsLangs[currentLang],
    tables: [],
  };

  return (
    <div className={`wrapper`}>
      <div className={`flex-row flex-start ${classes.container}`}>
        <WithdrawalBackButton />
        <div className={`flex-column ${classes.notice}`}>
          <h1 className="white heading h3">{withdrawalHeading[currentLang]}</h1>
          <div className={classes.line}></div>
          <DocumentRenderer document={document} />
        </div>
      </div>
    </div>
  );
}
