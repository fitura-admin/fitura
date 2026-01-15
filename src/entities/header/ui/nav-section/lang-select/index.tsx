"use client";
import React, { useMemo, useState, useEffect } from "react";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentLanguage = useMemo(() => {
    const current = langs.find((item) => item.action === lang);
    return current || langs[0];
  }, [lang]);

  const displayText = useMemo(() => {
    if (!mounted) return currentLanguage.title;
    return width > 768 ? currentLanguage.shortcut : currentLanguage.title;
  }, [mounted, width, currentLanguage]);

  return (
    <Select
      options={langs}
      activeOption={displayText}
      renderItem={(item, index) => (
        <HeaderSelectButton
          key={index}
          active={item.action === currentLanguage.action}
          item={item}
        />
      )}
      containerRelative
      optionsFromBottom={width <= 1024 ? true : false}
      optionsPosTop={width <= 1024 ? 16 : 12}
      optionsClassName={`${classes.options} padding-20`}
      selectButtonClassName={`gap-1 ${classes.selectButton}`}
      selectedOptionClassName={classNames(
        classes.selectedOption,
        "body-text medium base white",
      )}
    />
  );
}
