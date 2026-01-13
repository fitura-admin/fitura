import classes from "./no-file.module.scss";
import { TextTranslate } from "~/src/shared/ui/text-translate/ui";

const nameSpace = "application";

export default function ApplicationFileInputNoFile() {
  return (
    <div className={`flex-column align-center ${classes.container}`}>
      <TextTranslate
        as="p"
        className="text-body white small semibold"
        tName="resume.loadText"
        nameSpace={nameSpace}
      />
      <p className={`super-small white text-body ${classes.label}`}>
        <TextTranslate
          as="span"
          tName="resume.firstPart"
          nameSpace={nameSpace}
        />{" "}
        <TextTranslate
          as="span"
          tName="resume.link"
          className={classes.link}
          nameSpace={nameSpace}
        />
        <TextTranslate
          as="span"
          tName="resume.secondPart"
          nameSpace={nameSpace}
        />
      </p>
    </div>
  );
}
