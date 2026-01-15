import classNames from "classnames";

import classes from "./legal-notice.module.scss";
import Arrow from "~/public/shared/chevron-left.svg";
import LinkContainer from "~/src/shared/ui/link-container";
import { legalNoticeLinks } from "../model";
import { TextTranslate } from "~/src/shared/ui/text-translate/ui";

const nameSpace = "legal-notice";

export default function LegalNoticeSection() {
  return (
    <div className={"wrapper"}>
      <div className={classNames("flex-column", classes.container)}>
        {legalNoticeLinks.map((item, index) => {
          return (
            <LinkContainer
              key={`${index}-${item.href}`}
              href={item.href}
              className={`text-body big white ${classes.link} flex-column gap-6px`}
            >
              <div className="flex-row align-center space-between gap-6px">
                <TextTranslate
                  as="span"
                  tName={item.title}
                  nameSpace={nameSpace}
                />
                <Arrow className={classes.arrow} />
              </div>
              <div className={classes.line}></div>
            </LinkContainer>
          );
        })}
      </div>
    </div>
  );
}
