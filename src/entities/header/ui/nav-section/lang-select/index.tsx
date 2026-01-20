"use client";
import React, { useMemo } from "react";
import { useWindowSize } from "react-use";
import { selectNavigation } from "~/src/app/store/reducers/navigation.slice";
import { useAppSelector } from "~/src/app/store/hook";
import classNames from "classnames";

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
  }, [lang]);

  return (
    <Select
      options={langs}
      activeOption={currentLanguage.shortcut}
      renderItem={(item, index) => (
        <HeaderSelectButton
          key={index}
          active={item.action === currentLanguage.action}
          item={item}
        />
      )}
      containerRelative
      optionsPosTop={width <= 1024 ? 8 : 12}
      optionsClassName={`${classes.options} padding-20`}
      selectButtonClassName={`gap-1 ${classes.selectButton}`}
      selectedOptionClassName={classNames(
        classes.selectedOption,
        "body-text medium base white",
      )}
    />
  );
}
