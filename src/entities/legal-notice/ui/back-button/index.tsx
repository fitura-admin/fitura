import React from "react";

import classes from "./legal-button.module.scss";
import Icon from "~/public/shared/chevron-left.svg";
import Button from "~/src/shared/ui/button";

export default function LegalBackButton() {
  return (
    <Button
      typeButton="primary"
      size="0"
      className={classes.container}
      onClick={() => history.back()}
      needHoverAnimation={false}
    >
      <Icon />
    </Button>
  );
}
