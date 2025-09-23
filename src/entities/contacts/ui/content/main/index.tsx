import React from "react";

import classes from "./contacts-main.module.scss";
import ContactsLinks from "./links";
import ContactsMap from "./map";

export default function ContactsMain() {
  return (
    <div className={`flex-row ${classes.container}`}>
      <ContactsLinks />
      <ContactsMap />
    </div>
  );
}
