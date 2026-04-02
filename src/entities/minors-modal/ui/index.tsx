import classNames from "classnames";

import classes from "./minors-modal.module.scss";
import Modal from "~/src/shared/ui/modal/ui";
import Button from "~/src/shared/ui/button";
import { TextTranslate } from "~/src/shared/ui/text-translate/ui";
import { minorModalText } from "../model";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const NS = "membership";

export default function MinorsModal({ isOpen, onClose }: Props) {
  return (
    <Modal
      isOpened={isOpen}
      onClose={onClose}
      classNameContainer={classNames(
        classes.container,
        "flex-column align-center",
      )}
    >
      <TextTranslate {...minorModalText.title} nameSpace={NS} />
      <TextTranslate {...minorModalText.descr} nameSpace={NS} />
      <Button
        typeButton="primary"
        onClick={onClose}
        radius={100}
        size="10-16"
        className={classes.button}
      >
        <TextTranslate {...minorModalText.button} nameSpace={NS} />
      </Button>
    </Modal>
  );
}
