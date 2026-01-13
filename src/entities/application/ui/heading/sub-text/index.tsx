import classNames from "classnames";
import classes from "./sub-text.module.scss";
import { TextTranslate } from "~/src/shared/ui/text-translate/ui";

interface Props {
  success: boolean;
}

const ns = "application";

export default function ApplicationSubText({ success }: Props) {
  return (
    <div className={classNames("flex-column relative", classes.container)}>
      <TextTranslate
        as="p"
        className={classNames(`text-body big white`, classes.text)}
        nameSpace={ns}
        tName={success ? "success.text" : "text"}
      />
      {success && (
        <TextTranslate
          as="p"
          nameSpace={ns}
          tName="success.subText"
          className={classNames(classes.successText, "white text-body small")}
        />
      )}
    </div>
  );
}
