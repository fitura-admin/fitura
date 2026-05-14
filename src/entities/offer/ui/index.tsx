"use client";
import React from "react";
import { useParams } from "next/navigation";

import classes from "./privcay-policy.module.scss";
import PrivacyBackButton from "./back-button";
import { DocumentRenderer } from "./document-renderer";
import { LangT } from "~/src/app/store/reducers/navigation.slice";
import { publicOfferMetas } from "../model";
import { offerSectionsLangs, pricingTableLangs } from "../model";

export default function OfferSection() {
  const { lang } = useParams();

  const currentLang = lang ? (lang as LangT) : "en";

  const document = {
    meta: publicOfferMetas[currentLang],
    sections: offerSectionsLangs[currentLang],
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
