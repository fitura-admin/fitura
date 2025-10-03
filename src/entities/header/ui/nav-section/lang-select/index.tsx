"use client";
import React, { useMemo } from "react";
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
  const currentLanguage = useMemo(() => {
    const current = langs.find((item) => item.action === lang);
    return current || langs[0];
  }, [langs, lang]);

  return (
    <Select
      options={langs}
      activeOption={
        width > 768 ? currentLanguage.shortcut : currentLanguage.title
      }
      renderItem={(item, index) => (
        <HeaderSelectButton
          key={index}
          active={item.action === currentLanguage.action}
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
