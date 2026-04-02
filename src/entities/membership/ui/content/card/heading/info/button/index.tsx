import Button from "~/src/shared/ui/button";
import classes from "./button.module.scss";
import AnimatedItem from "~/src/shared/ui/animated-item";
import { TextTranslate } from "~/src/shared/ui/text-translate/ui";
import { useMemo } from "react";

interface Props {
  openModal: (() => void) | null;
  moreContent: boolean;
}

const NAMESPACE = "membership";
const linkToPayment = "https://fiturafitness-membership.flybyglobal.com/";

export default function MembershipCardButton({
  openModal,
  moreContent,
}: Props) {
  const button = useMemo(() => {
    const onClick = openModal ? openModal : undefined;

    const content = (
      <Button
        typeButton={moreContent ? "white" : "primary"}
        size="10-16"
        radius={100}
        onClick={onClick}
      >
        <TextTranslate
          as="span"
          className={`heading h7 ${moreContent ? "black" : "white"} ${classes.btn__text}`}
          nameSpace={NAMESPACE}
          tName="buttonText"
        />
      </Button>
    );

    if (openModal) {
      return content;
    } else {
      return (
        <a href={linkToPayment} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
  }, [openModal, moreContent]);

  return <AnimatedItem delay={0.1}>{button}</AnimatedItem>;
}
