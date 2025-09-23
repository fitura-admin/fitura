"use client";
import React from "react";
import { setAppLang } from "~/src/app/store/reducers/navigation.slice";
import { useAppDispatch } from "~/src/app/store/hook";

import classes from "./item.module.scss";
import Check from "~/public/shared/check2.svg";
import Button from "~/src/shared/ui/button";
import { SelectLangI } from "~/src/shared/model/shared.types";

interface Props {
  item: SelectLangI;
  active: boolean;
}

export default function HeaderSelectButton({ item, active }: Props) {
  const dispatch = useAppDispatch();
  return (
    <Button
      type="ghost"
      className={`flex-row gap-6px align-center space-between ${active ? classes.active : classes.container}`}
      onClick={() => dispatch(setAppLang(item))}
      needHoverAnimation={false}
    >
      <span className="body-text base white">{item.title}</span>
      {active && <Check />}
    </Button>
  );
}
