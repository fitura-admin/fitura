"use client";
import React from "react";
import { useParams } from "next/navigation";

import classes from "./privcay-policy.module.scss";
import PrivacyBackButton from "./back-button";
import { DocumentRenderer } from "./document-renderer";
import { pricingTableLangs, publicOfferSectionsLangs } from "../model";
import { publicOfferMetas } from "../model/meta";
import { LangT } from "~/src/app/store/reducers/navigation.slice";

export default function PrivacyPolicySection() {
  const { lang } = useParams();

  const currentLang = lang ? (lang as LangT) : "en";

  const document = {
    meta: publicOfferMetas[currentLang],
    sections: publicOfferSectionsLangs[currentLang],
    tables: [pricingTableLangs[currentLang]],
  };
  console.log(document);

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
