"use client";
import React from "react";
import { useSwitchLang } from "~/src/entities/header/lib/hooks/useSwitchLang.hook";

import classes from "./item.module.scss";
import Check from "~/public/shared/check2.svg";
import Button from "~/src/shared/ui/button";
import { SelectLangI } from "~/src/shared/model/shared.types";

interface Props {
  item: SelectLangI;
  active: boolean;
}

export default function HeaderSelectButton({ item, active }: Props) {
  const changeLang = useSwitchLang();

  return (
    <Button
      type="ghost"
      className={`flex-row gap-6px align-center space-between ${active ? classes.active : classes.container}`}
      onClick={() => changeLang(item.action)}
      needHoverAnimation={false}
      justifyCenter={false}
    >
      <span className="body-text base white">{item.title}</span>
      {active && <Check />}
    </Button>
  );
}
