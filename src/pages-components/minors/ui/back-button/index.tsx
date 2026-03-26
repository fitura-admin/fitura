import React from "react";

import classes from "./back-button.module.scss";
import Icon from "~/public/shared/chevron-left.svg";
import Button from "~/src/shared/ui/button";

export default function MinorsBackButton() {
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
