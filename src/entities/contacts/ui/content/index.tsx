import React from "react";

import classes from "./contacts-content.module.scss";
import BgVector from "~/public/contacts/bg-vector.svg";
import ContactsMain from "./main";
import TextScroll from "~/src/shared/ui/text-scroll";

export default function ContactsContent() {
  return (
    <div className={`flex-column ${classes.container}`}>
      <div className={`${classes.bg}`}>
        <BgVector className={classes.bg__main} />
      </div>
      <TextScroll
        word="Contacts"
        textClassName={`heading h1 white text-center `}
        className={`${classes.heading_text}`}
        onInView
      />
      <ContactsMain />
    </div>
  );
}
