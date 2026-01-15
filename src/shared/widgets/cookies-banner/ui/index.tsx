"use client";
import classNames from "classnames";
import { useCookiesBanner } from "../lib/hooks";

import classes from "./cookies-banner.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import LinkContainer from "~/src/shared/ui/link-container";
import Button from "~/src/shared/ui/button";
import { TextTranslate } from "~/src/shared/ui/text-translate/ui";

const nameSpace = "cookies";

export default function CookiesBanner() {
  const { visible, acceptCookies } = useCookiesBanner();

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          initial={{ opacity: 0, translateY: "150%" }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: "150%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={classNames(`gap-10px align-center`, classes.container)}
        >
          <p className={`super-small text-body white regular ${classes.text}`}>
            <TextTranslate as="span" nameSpace={nameSpace} tName="text" />
            <LinkContainer className={classes.link} href="/legal-notice">
              <TextTranslate as="span" nameSpace={nameSpace} tName="link" />
            </LinkContainer>
            .
          </p>
          <Button
            typeButton="primary"
            className={classes.button}
            onClick={acceptCookies}
          >
            <TextTranslate
              as="span"
              className={`text-body small semibold white ${classes.text}`}
              tName="buttonText"
              nameSpace={nameSpace}
            />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
