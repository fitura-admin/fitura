import React from "react";

import classes from "./subscribe-button.module.scss";
import AnimatedItem from "~/src/shared/ui/animated-item";
import Button from "~/src/shared/ui/button";
import { TextTranslate } from "~/src/shared/ui/text-translate/ui";

interface Props {
  buttonClick: () => void;
  loading: boolean;
  success: boolean;
  email: string;
}

export default function SubscribeButton({
  buttonClick,
  loading,
  success,
  email,
}: Props) {
  return (
    <AnimatedItem
      slideIn
      direction="down"
      className={classes.container}
      duration={0.3}
      delay={0.3}
    >
      <Button
        typeButton="modal"
        size="12-16"
        onClick={buttonClick}
        radius={100}
        justifyCenter
        needHoverAnimation={false}
        disabled={!email || loading || success ? true : false}
        className={classes.button}
      >
        {loading ? (
          <span className={classes.loader} />
        ) : (
          <TextTranslate
            as="span"
            className={`heading h8 ${classes.text}`}
            nameSpace="modal"
            tName={success ? "buttonText.success" : "buttonText.default"}
          />
        )}
      </Button>
    </AnimatedItem>
  );
}
