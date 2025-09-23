"use client";
import React from "react";
import { useWindowSize } from "react-use";
import { selectNavigation } from "~/src/app/store/reducers/navigation.slice";
import { useAppSelector } from "~/src/app/store/hook";

import classes from "./lang-select.module.scss";
import Select from "~/src/shared/ui/select/ui";
import HeaderSelectButton from "./item";
import { langs } from "~/src/shared/model/shared.const";

export default function HeaderLangSelect() {
  const { width } = useWindowSize();
  const { lang } = useAppSelector(selectNavigation);

  return (
    <Select
      options={langs}
      activeOption={width > 768 ? lang.shortcut : lang.title}
      renderItem={(item, index) => (
        <HeaderSelectButton
          key={index}
          active={item.action === lang.action}
          item={item}
        />
      )}
      containerRelative
      optionsFromBottom={width <= 768}
      optionsPosTop={width <= 768 ? 16 : 12}
      optionsClassName={`${classes.options} padding-20`}
      selectButtonClassName={`gap-1 ${classes.selectButton}`}
      className={`${classes.container}`}
    />
  );
}
