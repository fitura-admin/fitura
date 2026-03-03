"use client";
import React from "react";
import { useParams } from "next/navigation";

import classes from "./privcay-policy.module.scss";
import PrivacyBackButton from "./back-button";
import { DocumentRenderer } from "./document-renderer";
import { pricingTableLangs, publicOfferSectionsLangs } from "../model";
import { LangT } from "~/src/app/store/reducers/navigation.slice";

export default function PrivacyPolicySection() {
  const { lang } = useParams();

  const currentLang = lang ? (lang as LangT) : "en";

  const document = {
    meta: {
      title: "Публичная оферта №1",
      date: "14 января 2026 года",
    },
    sections: publicOfferSectionsLangs[currentLang],
    tables: [pricingTableLangs[currentLang]],
  };

  return (
    <div className={`wrapper`}>
      <div className={`flex-row flex-start ${classes.container}`}>
        <PrivacyBackButton />
        <div className={`flex-column ${classes.notice}`}>
          <DocumentRenderer document={document} />
        </div>
      </div>
    </div>
  );
}
