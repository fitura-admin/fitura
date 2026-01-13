import classes from "./button.module.scss";
import Button from "~/src/shared/ui/button";
import { TextTranslate } from "~/src/shared/ui/text-translate/ui";

interface Props {
  onClick: () => Promise<void> | void;
  disabled: boolean;
  loading: boolean;
}

export default function ApplicationFormButton({
  onClick,
  disabled,
  loading,
}: Props) {
  return (
    <Button
      typeButton="primary"
      onClick={onClick}
      className={classes.button}
      disabled={disabled}
      needHoverAnimation={false}
    >
      {loading ? (
        <div className={classes.loading} />
      ) : (
        <TextTranslate
          as={"span"}
          nameSpace="application"
          tName="buttonText"
          className="text-body small white semibold"
        />
      )}
    </Button>
  );
}
