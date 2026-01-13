import classNames from "classnames";

import { TextTranslate } from "~/src/shared/ui/text-translate/ui";

interface Props {
  success: boolean;
}

const className = "heading display1 white text-center";

export default function ApplicationMainText({ success }: Props) {
  return (
    <TextTranslate
      as="h2"
      className={classNames(className)}
      nameSpace="application"
      tName={success ? "success.heading" : "heading"}
    />
  );
}
