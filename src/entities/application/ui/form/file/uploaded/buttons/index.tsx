"use client";
import { useMemo } from "react";

import classes from "./buttons.module.scss";
import NewFile from "~/public/application/new-file.svg";
import Delete from "~/public/application/delete.svg";
import Button from "~/src/shared/ui/button";

interface Props {
  onDelete: () => void;
  onNew: () => void;
}

interface IButton {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
}

export default function ApplicationFileInputButtons({
  onDelete,
  onNew,
}: Props) {
  const buttons: IButton[] = useMemo(
    () => [
      {
        Icon: NewFile,
        onClick: onNew,
      },
      {
        Icon: Delete,
        onClick: onDelete,
      },
    ],
    [onNew, onDelete],
  );

  return (
    <div className="flex-row align-center gap-6px">
      {buttons.map((item, index) => (
        <Button
          typeButton="ghost"
          key={`${index}-${item.Icon.toString()}`}
          className={classes.button}
          onClick={item.onClick}
          needHoverAnimation={false}
        >
          <item.Icon />
        </Button>
      ))}
    </div>
  );
}
